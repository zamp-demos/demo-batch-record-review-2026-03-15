## ⚠️ MANDATORY — Complete These Steps Every Run

You are running a **Lilly Batch Record Review**. Before opening any files, and after completing the review, execute the steps below exactly.

### Step 1 — Set up relay (run once at session start)

```python
import sys
sys.path.insert(0, "/home/zamp-internal/skills/pace-live-relay/scripts")
from relay import PaceLiveRelay
from datetime import datetime, timezone

relay = PaceLiveRelay(
    supabase_url="https://csvjcpmxndgaujxlvikw.supabase.co",
    service_role_key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdmpjcG14bmRnYXVqeGx2aWt3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjAyOTkzNiwiZXhwIjoyMDg3NjA1OTM2fQ.81sjVPgI5QzYLlwz1YwbkCNxK-07Rki98px_JUhK6To"
)
PROCESS_ID         = "6f037763-bd41-410e-ba46-a74dc65dde61"
RESULTS_DATASET_ID = "afdf3a2b-1a85-4641-878d-61c5a031860b"
```

### Step 2 — Create a run BEFORE opening any documents

```python
run = relay.create_run(PROCESS_ID, name=batch_number, document_name="MBR+EBR review")
run_id = run["id"]
relay.log_step(run_id, "Started BRR review", "in_progress", {"batch": batch_number})
```

### Step 3 — After completing your review, write the result row

**This write is what the Accuracy Tab scores. Do not skip it.**

Map your findings to these exact output fields:

* `disposition`: `"RELEASE"` / `"HOLD"` / `"REJECT"`

* `primary_finding_type`: a single lowercase underscore string describing the finding category

* `primary_finding_severity`: `"CRITICAL"` / `"MAJOR"` / `"MINOR"` / `"N/A"`

* `confidence_pct`: integer 0–100 reflecting your certainty in the disposition

* `routing`: plain English description of the recommended next action

```python
relay.upsert_dataset_row(RESULTS_DATASET_ID, run_id, {
    "pair_id":                  pair_id,
    "batch_number":             batch_number,
    "product_name":             product_name,
    "mbr_reference":            mbr_reference,
    "disposition":              disposition,
    "primary_finding_type":     primary_finding_type,
    "primary_finding_severity": primary_finding_severity,
    "finding_count":            total_findings,
    "critical_findings":        critical_count,
    "major_findings":           major_count,
    "minor_findings":           minor_count,
    "observation_findings":     observation_count,
    "total_findings":           total_findings,
    "confidence_pct":           confidence_pct,
    "routing":                  routing_action,
    "review_timestamp":         datetime.now(timezone.utc).isoformat(),
})
```

### Step 4 — Update run status

* If disposition is `RELEASE`: `relay.update_run_status(run_id, "done")`

* If disposition is `HOLD` or `REJECT`: `relay.update_run_status(run_id, "needs_attention")`

***

# Batch Record Review (BRR) Skill

## Description

Automated first-pass review of pharmaceutical batch production records against a master batch record. This skill performs field-by-field comparison, runs a comprehensive checklist validation, classifies deviations by severity, calculates confidence scores, and recommends batch disposition ÃÂ¢ÃÂÃÂ all generating an audit-ready review report.

**This is a first-pass review tool.** Final disposition decisions are always made by qualified human reviewers (QA scientists). PACE flags issues and calculates risk; humans make the call.

## Regulatory Basis

* FDA 21 CFR 211.192 ÃÂ¢ÃÂÃÂ Production record review required before batch release

* FDA 21 CFR 211.188 ÃÂ¢ÃÂÃÂ Batch production and control records

* EU GMP Chapter 4 ÃÂ¢ÃÂÃÂ Documentation requirements

* ICH Q7 ÃÂ¢ÃÂÃÂ GMP for active pharmaceutical ingredients

* ICH Q10 ÃÂ¢ÃÂÃÂ Pharmaceutical quality system

Full regulatory citations with links: see `knowledge-base/11_sources_and_references.md`

***

## Inputs

| Parameter             | Required | Description                                                                                                                                    |
| --------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `master_batch_record` | YES      | Path to the Master Batch Record (MBR) markdown file                                                                                            |
| `batch_records`       | YES      | Path(s) to one or more Executed Batch Record (EBR) markdown files                                                                              |
| `checklist`           | NO       | Path to custom reviewer checklist. If omitted, uses the built-in 68-point checklist from `knowledge-base/04_review_checklist_comprehensive.md` |
| `output_dir`          | NO       | Directory for review reports. Defaults to same directory as the EBR files.                                                                     |

### Input File Format

Both MBR and EBR files should be structured markdown with:

* Header metadata (product name, batch number, dates, etc.)

* Bill of Materials as a markdown table

* Equipment list as a markdown table

* Manufacturing steps with parameters, IPC results, and signatures

* QC results as a markdown table

* Yield summary as a markdown table

* Label reconciliation section (if applicable)

See `templates/master_batch_record_template.md` for the expected MBR format.

***

## Outputs

For each EBR reviewed, the skill generates:

1. **Review Report** (`review_report_{batch_number}.md`) containing:

   * Batch identification and review metadata

   * Field-by-field comparison table (MBR spec vs. EBR actual vs. status)

   * Yield verification at each manufacturing stage

   * Label reconciliation check

   * Findings list with severity classification

   * Finding details (what was found, why it matters, regulatory reference)

   * Overall confidence score (0-100%)

   * Disposition recommendation (RELEASE / HOLD / REJECT)

   * Recommended actions for human reviewer

2. **Structured JSON** (`review_results_{batch_number}.json`) containing:

   * Machine-readable version of all findings

   * Field-level confidence scores

   * Suitable for downstream integration (LIMS, QMS, dashboards)

***

## Process Steps

### Phase 1: Parse and Extract

1. Read the MBR file and extract all specification fields
2. Read the EBR file and extract all recorded values
3. Build structured data models for both records

### Phase 2: Compare and Validate

1. Run field-by-field comparison (MBR spec vs. EBR actual)
2. Execute the 68-point checklist across 10 categories:

   * Category 1: Header & Identification (7 checks)

   * Category 2: Bill of Materials (8 checks)

   * Category 3: Equipment & Calibration (6 checks)

   * Category 4: Process Parameters (8 checks)

   * Category 5: In-Process Controls (7 checks)

   * Category 6: Environmental Monitoring (5 checks)

   * Category 7: Yield & Reconciliation (8 checks)

   * Category 8: QC/Lab Results (7 checks)

   * Category 9: Documentation & Signatures (7 checks)

   * Category 10: Deviations & CAPAs (5 checks)
3. Verify yield calculations at each manufacturing stage
4. Verify label reconciliation (Issued = Used + Returned + Destroyed)
5. Check equipment calibration dates against batch execution dates
6. Validate signature completeness across all steps

### Phase 3: Classify and Score

1. Classify each finding by severity:

   * **CRITICAL** ÃÂ¢ÃÂÃÂ Direct product quality/patient safety impact, regulatory violation

   * **MAJOR** ÃÂ¢ÃÂÃÂ Significant GMP non-compliance, data integrity concern

   * **MINOR** ÃÂ¢ÃÂÃÂ Administrative gap, low risk, easily correctable

   * **OBSERVATION** ÃÂ¢ÃÂÃÂ Informational, best practice recommendation
2. Calculate field-level confidence scores
3. Calculate overall batch confidence score
4. Determine disposition recommendation based on decision rules

### Phase 4: Report and Route

1. Generate the review report in markdown format
2. Generate structured JSON output
3. Route to appropriate review level based on confidence:

   * 95-100%: Auto-approve eligible (QA spot-check)

   * 80-94%: Expedited review (QA targeted review of flagged items)

   * Below 80%: Mandatory full human review

***

## How to Invoke

### Option A: Run the Python Script Directly

```bash
python /home/lilly/skills/batch-record-review/scripts/batch_review.py \
  --mbr /path/to/master_batch_record.md \
  --ebr /path/to/batch_record_001.md \
  --output /path/to/output/
```

For multiple batch records:

```bash
python /home/lilly/skills/batch-record-review/scripts/batch_review.py \
  --mbr /path/to/master_batch_record.md \
  --ebr /path/to/batch_001.md /path/to/batch_002.md /path/to/batch_003.md \
  --output /path/to/output/
```

### Option B: Use as PACE Agent Skill

When invoked as a skill, the agent should:

1. Read this SKILL.md for instructions
2. Identify the MBR and EBR file paths from the user's request
3. Run the batch\_review\.py script with the correct arguments
4. Read the generated report and present findings to the user
5. Ask the user for disposition decision if confidence < 95%

***

## Knowledge Base Reference

The `knowledge-base/` directory contains comprehensive reference materials:

| File                                    | Content                                                            |
| --------------------------------------- | ------------------------------------------------------------------ |
| `01_gmp_regulatory_requirements.md`     | FDA, EU, ICH, WHO, PIC/S regulatory requirements for batch records |
| `02_master_batch_record_structure.md`   | MBR field definitions, required sections, regulatory basis         |
| `03_executed_batch_record_structure.md` | EBR field definitions, what gets recorded during manufacturing     |
| `04_review_checklist_comprehensive.md`  | Full 68-point checklist with severity assignments                  |
| `05_deviation_classification.md`        | How to classify deviations by severity and impact                  |
| `06_common_deviations_catalog.md`       | 50+ common batch record deviations with examples                   |
| `07_yield_and_reconciliation.md`        | Yield calculation methods, label reconciliation rules              |
| `08_alcoa_data_integrity.md`            | ALCOA+ principles for data integrity compliance                    |
| `09_oos_investigation_process.md`       | OOS investigation workflow per FDA guidance                        |
| `10_decision_rules_disposition.md`      | Disposition decision matrix and confidence scoring                 |
| `11_sources_and_references.md`          | All regulatory sources with direct links                           |
| `12_glossary.md`                        | Pharmaceutical manufacturing and GMP terminology                   |

***

## Confidence Scoring Model

### Field-Level Confidence

Each checked field receives a confidence score:

* **100%** ÃÂ¢ÃÂÃÂ Value matches MBR spec exactly, all signatures present

* **90-99%** ÃÂ¢ÃÂÃÂ Value within spec but near boundary, or minor formatting difference

* **70-89%** ÃÂ¢ÃÂÃÂ Value within spec but anomaly noted (e.g., borderline yield)

* **50-69%** ÃÂ¢ÃÂÃÂ Value out of spec OR missing data OR incomplete documentation

* **0-49%** ÃÂ¢ÃÂÃÂ Critical violation detected (e.g., expired calibration, OOS result)

### Overall Batch Confidence

Calculated as weighted average of field-level scores:

* Critical fields weighted 3x (process parameters, QC results, calibration)

* Major fields weighted 2x (yields, signatures, environmental)

* Standard fields weighted 1x (header info, administrative)

Penalty applied for finding severity:

* Each CRITICAL finding: -15 points

* Each MAJOR finding: -8 points

* Each MINOR finding: -3 points

* Each OBSERVATION: -1 point

Floor: 0%. Ceiling: 100%.

***

## GXP Compliance Notes

* This skill is a **first-pass review aid**, not a replacement for qualified human review

* All findings and recommendations require human disposition

* The review report constitutes a preliminary assessment, not a final quality decision

* Audit trail: the report captures who (PACE agent), what (each finding), when (timestamp), and why (regulatory reference) for every flagged item

* GMP corrections policy: single line through error, initialed and dated ÃÂ¢ÃÂÃÂ this applies to human corrections on the report, not PACE output

* 21 CFR Part 11 compliance: electronic records must have audit trails, access controls, and electronic signatures when used in regulated context

***

## Test Data

Pre-built test data is available for validation:

```
/home/lilly/batch-record-review/test-data/
ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ master_batch_record.md    # Atorvastatin Calcium Tablets 40mg MBR
ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ batch_record_001.md       # Clean batch ÃÂ¢ÃÂÃÂ Expected: RELEASE (99%)
ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ batch_record_002.md       # Moderate issues ÃÂ¢ÃÂÃÂ Expected: HOLD (72%)
ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ batch_record_003.md       # Serious issues ÃÂ¢ÃÂÃÂ Expected: REJECT (38%)
ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ reviewer_checklist.md     # 68-point reference checklist
ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ expected_output.md        # Validated expected PACE output
```

### Quick Test

```bash
python /home/lilly/skills/batch-record-review/scripts/batch_review.py \
  --mbr /home/lilly/batch-record-review/test-data/master_batch_record.md \
  --ebr /home/lilly/batch-record-review/test-data/batch_record_001.md \
       /home/lilly/batch-record-review/test-data/batch_record_002.md \
       /home/lilly/batch-record-review/test-data/batch_record_003.md \
  --output /home/lilly/batch-record-review/test-data/output/
```

***

## Live Relay Log Steps

Every batch record review run streams 11 log steps to the Pace Live Dashboard via the relay.
All message strings and reasoning points below are **templates** Ã¢ÂÂ populate them dynamically
from the actual batch record being reviewed (real batch numbers, real values, real findings).

### Relay constants

```python
SUPABASE_URL = "https://csvjcpmxndgaujxlvikw.supabase.co"
SERVICE_KEY   = "<from relay config>"
ORG_ID        = "2a1e7c13-48e7-4546-b532-530cec358168"   # Lilly
PROCESS_ID    = "6f037763-bd41-410e-ba46-a74dc65dde61"   # Batch Record Review
```

### Step 1 Ã¢ÂÂ Batch Record Intake

`log_type: system` | `step_name: "Batch Record Intake"`

**In progress message (Ã¢ÂÂ¤140 chars):**

```
"Receiving batch record and loading document for review..."
```

**In progress reasoning\_steps:**

```python
[
    "Batch record document received for automated first-pass review",
    "Identifying product name, batch number, and MBR reference from header",
    "Preparing document for systematic 10-category GMP review",
    "Applying Eli Lilly Bioproduct R&D review framework"
]
```

**Done message Ã¢ÂÂ populate dynamically:**

```
f"Batch record received Ã¢ÂÂ {ebr.batch_number} loaded for {ebr.product_name}."
```

**Done reasoning\_steps Ã¢ÂÂ populate dynamically:**

```python
[
    f"Batch record {ebr.batch_number} received and ingested successfully",
    f"Product identified: {ebr.product_name}, Product Code {ebr.product_code}",
    f"Executing batch record linked to MBR reference {ebr.mbr_reference}",
    f"Document is {ebr.page_count} pages covering all manufacturing phases from dispensing to packaging",
    "10-category review initiated across 68 standardised GMP verification checks"
]
```

***

### Step 2 Ã¢ÂÂ Header & Identification Review

`log_type: decision` | `step_name: "Header & Identification Review"`
Checks: H-01 to H-07

**In progress message:**

```
"Verifying product identity, batch number, MBR version, and expiry date..."
```

**In progress reasoning\_steps:**

```python
[
    "Comparing EBR product name character-by-character against approved MBR",
    "Validating batch number format against site convention and checking uniqueness in manufacturing history",
    "Cross-referencing MBR version/revision against Document Control system",
    f"Calculating expected expiry date from manufacturing date plus approved {ebr.shelf_life}-month shelf life"
]
```

**Done message Ã¢ÂÂ clean:**

```
"Header verified Ã¢ÂÂ product name, batch number, MBR version, and expiry date all confirmed."
```

**Done message Ã¢ÂÂ with findings:**

```
f"Header review complete Ã¢ÂÂ {critical_count} CRITICAL, {major_count} MAJOR finding(s) detected."
```

**Done reasoning\_steps Ã¢ÂÂ populate per actual check outcome:**

```python
[
    f"H-01 {result}: EBR product name '{ebr.product_name}' vs MBR '{mbr.product_name}' Ã¢ÂÂ {match_detail}",
    f"H-02 {result}: Batch number {ebr.batch_number} Ã¢ÂÂ format {format_status}, uniqueness {uniqueness_status}",
    f"H-03 {result}: MBR {ebr.mbr_reference} Ã¢ÂÂ {version_status} on manufacturing date {ebr.manufacturing_date}",
    f"H-05 {result}: Manufacturing date '{ebr.manufacturing_date}' Ã¢ÂÂ {date_format_status}",
    f"H-06 {result}: Expiry date {ebr.expiry_date} Ã¢ÂÂ {expiry_calc_status} (mfg date + {shelf_life} months)"
]
```

***

### Step 3 Ã¢ÂÂ Bill of Materials Verification

`log_type: decision` | `step_name: "Bill of Materials Verification"`
Checks: M-01 to M-08

**In progress message:**

```
f"Checking all {mbr.material_count} materials Ã¢ÂÂ AR numbers, quantities, grades, and dual signatures..."
```

**In progress reasoning\_steps:**

```python
[
    f"Comparing EBR material list against all {mbr.material_count} MBR-specified components",
    "Verifying each AR/COA number is present, in valid format, and retrievable from QC system",
    "Calculating actual vs. specified quantity deviation for each material (ÃÂ±5% for API, ÃÂ±10% for excipients)",
    "Confirming independent two-person verification (dispenser + verifier) for each material",
    "Checking all balance IDs for calibration currency on date of dispensing"
]
```

**Done message Ã¢ÂÂ clean:**

```
f"BOM verified Ã¢ÂÂ all {mbr.material_count} materials confirmed with valid AR numbers, quantities, and dual signatures."
```

**Done message Ã¢ÂÂ with findings:**

```
f"BOM review complete Ã¢ÂÂ {finding_summary} detected across {mbr.material_count} materials."
```

**Done reasoning\_steps Ã¢ÂÂ one line per material finding, or summary if all pass:**

```python
[
    f"M-01 {result}: {ebr_material_count}/{mbr_material_count} MBR materials present in EBR Ã¢ÂÂ {missing_detail}",
    f"M-02 {result}: Unauthorised materials check Ã¢ÂÂ {unauth_status}",
    f"M-03 {result}: AR numbers Ã¢ÂÂ {ar_pass_count} present, {ar_fail_count} missing ({missing_ar_materials})",
    f"M-04 {result}: Quantity deviations Ã¢ÂÂ API {api_deviation}% (spec ÃÂ±5%), worst excipient {excipient_deviation}% (spec ÃÂ±10%)",
    f"M-06/M-07 {result}: Dual signatures Ã¢ÂÂ {signed_count}/{mbr.material_count} materials have both dispenser and verifier",
    f"M-08 {result}: Balance {balance_id} calibration due {cal_due_date} Ã¢ÂÂ {cal_status} on dispensing date {dispensing_date}"
]
```

***

### Step 4 Ã¢ÂÂ Equipment & Calibration Review

`log_type: decision` | `step_name: "Equipment & Calibration Review"`
Checks: E-01 to E-06

**In progress message:**

```
"Verifying equipment IDs, calibration status, line clearance, and qualification records..."
```

**In progress reasoning\_steps:**

```python
[
    "Cross-referencing all equipment IDs in EBR against MBR required equipment list",
    "Checking calibration due dates for each instrument against date of use from EBR timestamps",
    "Verifying line clearance documentation confirms no residue from prior batch",
    "Confirming IQ/OQ/PQ qualification status is current for all major equipment"
]
```

**Done message Ã¢ÂÂ clean:**

```
f"Equipment review passed Ã¢ÂÂ all {equipment_count} items calibrated, cleaned, and qualified at time of use."
```

**Done message Ã¢ÂÂ with findings:**

```
f"Equipment review complete Ã¢ÂÂ {finding_summary} across {equipment_count} equipment items."
```

**Done reasoning\_steps:**

```python
[
    f"E-01 {result}: All {equipment_count} MBR-required equipment items listed with unique asset IDs Ã¢ÂÂ {id_list}",
    f"E-02 {result}: Calibration status Ã¢ÂÂ {cal_pass_count} current, {cal_fail_count} expired ({expired_equipment_ids})",
    f"E-03 {result}: Line clearance completed and signed off for all equipment Ã¢ÂÂ {clearance_status}",
    f"E-05 {result}: IQ/OQ/PQ qualification records Ã¢ÂÂ {qual_status} as of manufacturing date"
]
```

***

### Step 5 Ã¢ÂÂ Process Parameters Review

`log_type: decision` | `step_name: "Process Parameters Review"`
Checks: P-01 to P-08

**In progress message:**

```
"Reviewing all critical process parameters, step sequence, timings, and hold times..."
```

**In progress reasoning\_steps:**

```python
[
    "Checking every CPP recording against MBR acceptance ranges Ã¢ÂÂ temperature, pressure, speed, time",
    "Verifying process steps were executed in correct sequence with no skipped or reordered steps",
    "Calculating elapsed times between steps to confirm hold time limits were not exceeded",
    "Reviewing environmental condition logs for temperature and humidity during each processing room"
]
```

**Done message Ã¢ÂÂ clean:**

```
"Process parameters confirmed Ã¢ÂÂ all CPPs within spec, correct sequence, no hold time breaches."
```

**Done message Ã¢ÂÂ with findings:**

```
f"Process parameters complete Ã¢ÂÂ {finding_summary} detected across {cpp_count} critical parameters."
```

**Done reasoning\_steps:**

```python
[
    f"P-01/P-02 {result}: {cpp_pass_count}/{cpp_count} CPPs recorded and within validated ranges Ã¢ÂÂ {out_of_range_params}",
    f"P-04 {result}: Process step sequence Ã¢ÂÂ {sequence_status}",
    f"P-05 {result}: Hold time check Ã¢ÂÂ {hold_time_status} ({worst_hold_time_detail})",
    f"P-07 {result}: Room conditions Ã¢ÂÂ temperature {room_temp}ÃÂ°C, RH {room_rh}% throughout campaign"
]
```

***

### Step 6 Ã¢ÂÂ In-Process Controls Review

`log_type: decision` | `step_name: "In-Process Controls Review"`
Checks: I-01 to I-07

**In progress message:**

```
f"Checking all {ipc_count} IPC test results Ã¢ÂÂ completeness, acceptance criteria, and operator signatures..."
```

**In progress reasoning\_steps:**

```python
[
    "Verifying every IPC test specified in MBR was performed at the required frequency and sampling point",
    "Comparing all recorded IPC results against acceptance criteria Ã¢ÂÂ hardness, friability, dissolution, blend uniformity",
    "Checking that any out-of-specification IPC results triggered a documented retest with rationale",
    "Confirming operator signatures are present for every IPC entry"
]
```

**Done message Ã¢ÂÂ clean:**

```
f"All {ipc_count} IPC checks passed Ã¢ÂÂ results within spec, fully signed off at each stage."
```

**Done message Ã¢ÂÂ with findings:**

```
f"IPC review complete Ã¢ÂÂ {finding_summary} across {ipc_count} in-process checks."
```

**Done reasoning\_steps:**

```python
[
    f"I-01 {result}: {ipc_complete_count}/{ipc_count} IPC tests completed at required frequency",
    f"I-02 {result}: Results Ã¢ÂÂ {ipc_pass_count} within spec, {ipc_fail_count} out of spec ({failed_ipc_tests})",
    f"I-04/I-05 {result}: Retest documentation Ã¢ÂÂ {retest_status}",
    f"I-06 {result}: Operator signatures Ã¢ÂÂ {signed_ipc_count}/{ipc_count} entries signed with timestamps"
]
```

***

### Step 7 Ã¢ÂÂ Environmental Monitoring Review

`log_type: decision` | `step_name: "Environmental Monitoring Review"`
Checks: V-01 to V-05

**In progress message:**

```
"Reviewing cleanroom temperature, humidity, and differential pressure logs for all processing rooms..."
```

**In progress reasoning\_steps:**

```python
[
    f"Extracting temperature and humidity readings from continuous monitoring logs for {room_count} processing rooms",
    "Checking differential pressure values across cleanroom zones to confirm unidirectional air flow",
    "Cross-referencing monitoring frequency against validated schedule",
    "Identifying any excursions and confirming deviation reports are in place"
]
```

**Done message Ã¢ÂÂ clean:**

```
"Environmental monitoring confirmed Ã¢ÂÂ all rooms within spec throughout the manufacturing campaign."
```

**Done message Ã¢ÂÂ with findings:**

```
f"Environmental review complete Ã¢ÂÂ {finding_summary} across {room_count} processing rooms."
```

**Done reasoning\_steps:**

```python
[
    f"V-01 {result}: Room temperatures {temp_range}ÃÂ°C across all {room_count} rooms Ã¢ÂÂ {temp_status}",
    f"V-02 {result}: Relative humidity {rh_range}% Ã¢ÂÂ {rh_status}",
    f"V-03 {result}: Differential pressure Ã¢ÂÂ {dp_status} ({excursion_detail})",
    f"V-04 {result}: Environmental excursions Ã¢ÂÂ {excursion_count} recorded ({excursion_summary})",
    f"V-05 {result}: Monitoring frequency Ã¢ÂÂ {freq_status}"
]
```

***

### Step 8 Ã¢ÂÂ Yield & Label Reconciliation

`log_type: decision` | `step_name: "Yield & Label Reconciliation"`
Checks: Y-01 to Y-08

**In progress message:**

```
"Calculating stage yields, verifying overall yield, and running label reconciliation..."
```

**In progress reasoning\_steps:**

```python
[
    f"Recalculating yield at each stage: {', '.join(manufacturing_stages)}",
    "Applying formula: Actual Yield ÃÂ· Theoretical Yield ÃÂ 100% for each stage",
    "Running label reconciliation: issued = used + destroyed + returned must account for 100%",
    "Checking overall yield against MBR acceptance range and triggering investigation logic if out of spec"
]
```

**Done message Ã¢ÂÂ clean:**

```
"Yield and label reconciliation passed Ã¢ÂÂ all stage yields in spec, labels 100% accounted for."
```

**Done message Ã¢ÂÂ with findings:**

```
f"Yield review complete Ã¢ÂÂ {finding_summary} detected. Overall yield {overall_yield}% vs spec {yield_spec}."
```

**Done reasoning\_steps:**

```python
[
    f"Y-01/Y-02 {result}: Stage yields Ã¢ÂÂ {stage_yield_summary}",
    f"Y-03 {result}: Worst stage yield {worst_stage}: {worst_yield}% (alert {alert_limit}%, reject {reject_limit}%)",
    f"Y-04 {result}: Overall yield {overall_yield}% Ã¢ÂÂ MBR acceptance range {yield_spec}",
    f"Y-05 {result}: Label reconciliation Ã¢ÂÂ {labels_issued} issued = {labels_used} used + {labels_destroyed} destroyed + {labels_returned} returned ({reconciliation_status})",
    f"Y-07 {result}: Packaging component reconciliation Ã¢ÂÂ {component_status}"
]
```

***

### Step 9 Ã¢ÂÂ QC & Laboratory Results Review

`log_type: decision` | `step_name: "QC & Laboratory Results Review"`
Checks: Q-01 to Q-07

**In progress message:**

```
f"Verifying all {qc_test_count} finished product QC tests Ã¢ÂÂ assay, dissolution, impurities, and CoA completeness..."
```

**In progress reasoning\_steps:**

```python
[
    f"Confirming all {qc_test_count} required finished product tests are present in EBR",
    "Comparing every QC result against specification limits from the approved product specification",
    "Checking for any OOS results and confirming Phase I and Phase II investigation documentation",
    "Verifying reference standard expiry and analyst signatures on all laboratory records"
]
```

**Done message Ã¢ÂÂ clean:**

```
f"QC results confirmed Ã¢ÂÂ all {qc_test_count} finished product tests pass, CoA complete, no OOS findings."
```

**Done message Ã¢ÂÂ with findings:**

```
f"QC review complete Ã¢ÂÂ {oos_count} OOS result(s) detected. {finding_summary}."
```

**Done reasoning\_steps:**

```python
[
    f"Q-01 {result}: {qc_complete_count}/{qc_test_count} required QC tests completed",
    f"Q-02 {result}: Results Ã¢ÂÂ {qc_pass_count} within spec, {qc_fail_count} OOS ({oos_tests_detail})",
    f"Q-03 {result}: OOS investigation status Ã¢ÂÂ {oos_investigation_status}",
    f"Q-04 {result}: Certificate of Analysis Ã¢ÂÂ {coa_status}",
    f"Q-06 {result}: Reference standard {ref_std_lot} valid until {ref_std_expiry} Ã¢ÂÂ {ref_std_status}",
    f"Q-07 {result}: Stability samples Ã¢ÂÂ {stability_status}"
]
```

***

### Step 10 Ã¢ÂÂ Documentation, Signatures & ALCOA+ Integrity

`log_type: decision` | `step_name: "Documentation & ALCOA+ Integrity"`
Checks: D-01 to D-07, X-01 to X-05

**In progress message:**

```
"Auditing all signatures, corrections, blank fields, and ALCOA+ data integrity compliance..."
```

**In progress reasoning\_steps:**

```python
[
    f"Scanning all {ebr.page_count} pages for operator, supervisor, and QA signatures",
    "Checking all corrections follow GDP: single line through original, initials, date, reason Ã¢ÂÂ no white-out",
    "Identifying any blank fields and confirming N/A justification where steps were not applicable",
    "Applying ALCOA+ framework across all entries: Attributable, Legible, Contemporaneous, Original, Accurate, Complete, Consistent"
]
```

**Done message Ã¢ÂÂ clean:**

```
"Documentation and ALCOA+ audit passed Ã¢ÂÂ signatures complete, no GDP violations, all deviations referenced."
```

**Done message Ã¢ÂÂ with findings:**

```
f"Documentation review complete Ã¢ÂÂ {finding_summary} across {ebr.page_count} pages."
```

**Done reasoning\_steps:**

```python
[
    f"D-01 {result}: Operator signatures Ã¢ÂÂ {op_signed}/{total_steps} manufacturing steps signed",
    f"D-02 {result}: Supervisor/verifier signatures Ã¢ÂÂ {sv_signed}/{critical_steps} critical steps verified",
    f"D-03 {result}: QA reviewer signature Ã¢ÂÂ {qa_sig_status} ({qa_missing_pages})",
    f"D-04 {result}: GDP compliance Ã¢ÂÂ {gdp_status} ({correction_detail})",
    f"D-05 {result}: ALCOA+ Ã¢ÂÂ {alcoa_status}",
    f"X-01/X-02 {result}: {deviation_count} deviation report(s) raised Ã¢ÂÂ {deviation_ref_numbers}",
    f"X-03/X-04 {result}: Impact assessments and CAPA assignments Ã¢ÂÂ {capa_status}"
]
```

***

### Step 11 Ã¢ÂÂ Disposition Decision

`log_type: decision` Ã¢ÂÂ transitions to HITL gate for HOLD or REJECT
`step_name: "Disposition Decision"`

**In progress message:**

```
"Calculating confidence score across all 68 checks and determining disposition recommendation..."
```

**In progress reasoning\_steps:**

```python
[
    "Aggregating findings across all 10 review categories",
    "Applying weighted scoring: critical fields 3.0ÃÂ, major compliance 2.0ÃÂ, standard documentation 1.0ÃÂ",
    f"Applying finding penalties: {critical_count} critical (Ã¢ÂÂ{critical_count*15}pts), {major_count} major (Ã¢ÂÂ{major_count*8}pts), {minor_count} minor (Ã¢ÂÂ{minor_count*3}pts)",
    "Applying secondary modifiers from batch history and product profile",
    "Routing to RELEASE, HOLD, or REJECT per Decision Matrix (Part 10)"
]
```

**Done message Ã¢ÂÂ RELEASE:**

```
f"Review complete Ã¢ÂÂ RELEASE recommended. Confidence {confidence_score}%. {finding_summary}."
```

**Done message Ã¢ÂÂ HOLD:**

```
f"Review complete Ã¢ÂÂ HOLD recommended. Confidence {confidence_score}%. {open_findings} open finding(s) require resolution."
```

**Done message Ã¢ÂÂ REJECT:**

```
f"Review complete Ã¢ÂÂ REJECT recommended. Confidence {confidence_score}%. {critical_count} unresolved critical finding(s)."
```

**Done reasoning\_steps Ã¢ÂÂ populate dynamically:**

```python
[
    f"{critical_count} CRITICAL finding(s): {critical_findings_summary}",
    f"{major_count} MAJOR finding(s): {major_findings_summary}",
    f"{minor_count} MINOR finding(s): {minor_findings_summary}",
    f"Confidence score: base {base_score}% Ã¢ÂÂ {penalty_total}pts penalties {modifier_note} = {confidence_score}%",
    f"Recommended disposition: {disposition} Ã¢ÂÂ {disposition_rationale}",
    f"Routing: {routing_decision} ({routing_reason})"
]
```

**Disposition routing logic:**

```python
# RELEASE (Clean): confidence >= 95%, zero critical, zero unresolved major
# RELEASE (with Observations): confidence 88Ã¢ÂÂ94%, zero critical, minor findings only
# HOLD: any unresolved major finding, or OOS investigation pending, or confidence 50Ã¢ÂÂ87%
# REJECT: any unresolved critical finding with confirmed product quality impact, or confirmed OOS, or data integrity violation
# All HOLD and REJECT Ã¢ÂÂ mandatory HITL gate before run status updates to final
```

***

***

## Relay: Dashboard Integration

### IDs (hardcoded Ã¢ÂÂ do not change)

```python
SUPABASE_URL     = "https://csvjcpmxndgaujxlvikw.supabase.co"
PROCESS_ID       = "6f037763-bd41-410e-ba46-a74dc65dde61"   # Lilly Ã¢ÂÂ Batch Record Review
DATASET_ID       = "afdf3a2b-1a85-4641-878d-61c5a031860b"   # Batch Review Results
GOLDEN_DS_ID     = "59dd9cca-a7f4-476c-8c4c-129dba5678dd"   # Golden Dataset Ã¢ÂÂ Ground Truth
```

### Step 1 Ã¢ÂÂ Create run

```python
from relay import PaceLiveRelay
relay = PaceLiveRelay(supabase_url=SUPABASE_URL, service_role_key=SERVICE_KEY)

run = relay.create_run(
    PROCESS_ID,
    name=f"{ebr.batch_number}",           # e.g. "ATV-40-2024-0187"
    document_name=f"MBR+EBR Ã¢ÂÂ {pair_id}"  # e.g. "MBR+EBR Ã¢ÂÂ pair-01-atorvastatin"
)
```

### Step 2 Ã¢ÂÂ Log steps (exact step\_name values required Ã¢ÂÂ must be unique per run)

```python
# Step 1 Ã¢ÂÂ Document Ingestion
relay.log_step(run["id"], step=1, log_type="system",
    message=f"Ingested MBR ({mbr_line_count} lines) and EBR ({ebr_line_count} lines) for {ebr.product_name}.",
    metadata={
        "step_name": "Document Ingestion",
        "reasoning_steps": [
            f"MBR reference: {ebr.mbr_reference} Ã¢ÂÂ {mbr_line_count} lines parsed",
            f"EBR batch: {ebr.batch_number} Ã¢ÂÂ {ebr_line_count} lines parsed",
            f"Product: {ebr.product_name}",
            f"Manufacturing date range identified from EBR header",
            f"Both documents structured and ready for field-by-field comparison"
        ],
        "batch_number":  ebr.batch_number,
        "product_name":  ebr.product_name,
        "mbr_reference": ebr.mbr_reference,
    })

# Step 2 Ã¢ÂÂ Checklist Execution
relay.log_step(run["id"], step=2, log_type="system",
    message=f"Executed {checklist_items_run}-point checklist Ã¢ÂÂ {checklist_pass} pass, {checklist_fail} fail.",
    metadata={
        "step_name": "Checklist Execution",
        "reasoning_steps": [
            f"Category 1-3 (Header, BOM, Equipment): {cat1_3_summary}",
            f"Category 4-6 (Process, IPC, Environment): {cat4_6_summary}",
            f"Category 7-8 (Yield/Reconciliation, QC): {cat7_8_summary}",
            f"Category 9-10 (Signatures, Deviations): {cat9_10_summary}",
            f"Total: {checklist_pass} pass / {checklist_fail} fail across {checklist_items_run} items"
        ],
    })

# Step 3 Ã¢ÂÂ Findings Classification
relay.log_step(run["id"], step=3, log_type="decision",
    message=f"Classified {total_findings} finding(s): {critical_count} critical, {major_count} major, {minor_count} minor.",
    metadata={
        "step_name": "Findings Classification",
        "reasoning_steps": [
            f"Primary finding: {primary_finding_description}",
            f"Finding type: {primary_finding_type}",
            f"Severity: {primary_finding_severity}",
            f"Regulatory reference: {regulatory_ref}",
            f"Evidence location in EBR: {evidence_location}"
        ],
        "final_status":  disposition,
        "risk_level":    primary_finding_severity,
    })

# Step 4 Ã¢ÂÂ Confidence Scoring
relay.log_step(run["id"], step=4, log_type="decision",
    message=f"Confidence score: {confidence_pct}%. Routing: {routing_tier}.",
    metadata={
        "step_name": "Confidence Scoring",
        "reasoning_steps": [
            f"Field-level scores computed across {fields_checked} fields",
            f"Critical field penalty: -{critical_count * 15} pts from {critical_count} critical finding(s)",
            f"Major field penalty: -{major_count * 8} pts from {major_count} major finding(s)",
            f"Overall confidence: {confidence_pct}%",
            f"Routing tier: {routing_tier}"
        ],
        "quality_score":  confidence_pct,
        "decision_by":    "Pace BRR Agent",
        "recommendation": disposition,
    })

# Step 5 Ã¢ÂÂ Disposition (complete or HITL gate)
# If disposition == "RELEASE":
relay.log_step(run["id"], step=5, log_type="complete",
    message=f"Disposition: {disposition}. {primary_finding_count} finding(s). Confidence {confidence_pct}%.",
    metadata={
        "step_name":     "Disposition",
        "reasoning_steps": [
            f"All checklist categories reviewed",
            f"No blocking findings identified" if disposition == "RELEASE" else f"Blocking finding: {primary_finding_description[:100]}",
            f"Confidence {confidence_pct}% Ã¢ÂÂ routing: {routing_tier}",
            f"Recommended disposition: {disposition}",
            f"Routing action: {correct_routing}"
        ],
        "final_status":  disposition,
        "recommendation":disposition,
    })
```

### Step 3 Ã¢ÂÂ Write dataset row (MANDATORY Ã¢ÂÂ this is what the Accuracy tab scores)

Every run MUST write exactly these fields to `DATASET_ID`. Do not skip any required field.

```python
from datetime import datetime, timezone

relay.upsert_dataset_row(DATASET_ID, run["id"], {
    # --- Identity (join keys for accuracy scoring) ---
    "pair_id":                  pair_id,                   # REQUIRED Ã¢ÂÂ e.g. "pair-01-atorvastatin"
    "batch_number":             ebr.batch_number,          # REQUIRED Ã¢ÂÂ e.g. "ATV-40-2024-0187"
    "product_name":             ebr.product_name,          # REQUIRED
    "mbr_reference":            ebr.mbr_reference,         # optional

    # --- Pace verdict (scored field-for-field against Golden Dataset) ---
    "disposition":              disposition,               # REQUIRED Ã¢ÂÂ "RELEASE" / "HOLD" / "REJECT"
    "primary_finding_type":     primary_finding_type,      # REQUIRED Ã¢ÂÂ one of:
                                                           #   data_integrity, equipment_calibration,
                                                           #   label_reconciliation, oos_uninvestigated,
                                                           #   signature_missing, hold_time_violation,
                                                           #   transcription_error, clean_batch
    "primary_finding_severity": primary_finding_severity,  # REQUIRED Ã¢ÂÂ "CRITICAL" / "MAJOR" / "N/A"
    "finding_count":            total_findings,            # REQUIRED Ã¢ÂÂ integer

    # --- Finding counts by severity (scored against golden correct_*_findings) ---
    "critical_findings":        critical_count,            # REQUIRED Ã¢ÂÂ integer
    "major_findings":           major_count,               # REQUIRED Ã¢ÂÂ integer
    "minor_findings":           minor_count,               # REQUIRED Ã¢ÂÂ integer
    "observation_findings":     observation_count,         # REQUIRED Ã¢ÂÂ integer
    "total_findings":           total_findings,            # REQUIRED Ã¢ÂÂ integer

    # --- Confidence and routing (scored against golden thresholds) ---
    "confidence_pct":           confidence_pct,            # REQUIRED Ã¢ÂÂ integer 0-100
    "routing":                  routing_action,            # REQUIRED Ã¢ÂÂ plain English routing statement

    # --- Timestamp ---
    "review_timestamp":         datetime.now(timezone.utc).isoformat(),  # REQUIRED
})
```

### Step 4 Ã¢ÂÂ Finalize run status

```python
# RELEASE Ã¢ÂÂ done immediately
relay.update_run_status(run["id"], "done",
    status_text=f"{disposition} | {primary_finding_severity} | {confidence_pct}% confidence")

# HOLD or REJECT Ã¢ÂÂ needs_attention first, then done after HITL
relay.update_run_status(run["id"], "needs_attention",
    status_text=f"HOLD Ã¢ÂÂ {primary_finding_type} | {primary_finding_severity} | {confidence_pct}% confidence")
# After human reviews:
relay.update_run_status(run["id"], "done",
    status_text=f"HOLD confirmed by QA | {primary_finding_severity}")
```

### Case Details sidebar auto-surfaces these metadata keys

````python
"batch_number", "product_name", "mbr_reference",
"final_status", "quality_score", "decision_by", "recommendation"
```### Case Details sidebar auto-surfaces these metadata keys

```python
"batch_number", "product_name", "mbr_reference",
"final_status", "quality_score", "decision_by", "recommendation"
````

