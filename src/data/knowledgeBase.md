# Batch Record Review — Knowledge Base

## What Is a Batch Record Review?

A Batch Record Review (BRR) is the formal quality assurance process of examining all manufacturing documentation for a specific pharmaceutical batch before that batch is released for distribution. The review verifies that every step in the manufacturing process was performed exactly as specified in the approved Master Batch Record (MBR), that all in-process controls passed, and that final product testing meets release specifications.

In a regulated pharmaceutical environment, no batch may be released until a qualified person (QP) or authorized quality unit has reviewed and approved the complete batch record. This is a GMP (Good Manufacturing Practice) requirement enforced globally.

---

## Regulatory Framework

### 21 CFR Part 211 — Current Good Manufacturing Practice (cGMP), USA
- **§211.188** — Batch production and control records must be prepared for each batch and must include complete information relating to the production and control of each batch.
- **§211.192** — All drug product production and control records shall be reviewed and approved by the quality control unit to determine compliance with established written procedures before a batch is released or distributed.
- **§211.194** — Laboratory records must include complete data from all tests performed to ensure compliance with established specifications and standards.
- **§211.68** — Automatic, mechanical, and electronic equipment used in the manufacture, processing, packing, or holding of a drug product shall be routinely calibrated, inspected, or checked according to a written program.

### ICH Q10 — Pharmaceutical Quality System
ICH Q10 defines the Pharmaceutical Quality System (PQS) framework. Key elements relevant to BRR:
- **Section 3.2.1**: Process Performance and Product Quality Monitoring System — includes ongoing review of batch data to confirm the process remains in a state of control.
- **Section 3.2.3**: Corrective Action and Preventive Action (CAPA) — deviations identified during batch record review must feed into the CAPA system.
- **Section 3.2.4**: Change Management — batch records must reference the current approved version of the MBR; any discrepancy indicates a potential change control failure.

### FDA Guidance for Industry: Investigating Out-of-Specification (OOS) Test Results (2006)
- Phase I investigation must begin at the laboratory level before expanding to a full Phase II manufacturing investigation.
- A single OOS result cannot be invalidated without a documented laboratory error assignable cause.
- If no laboratory error is found, the investigation must extend to manufacturing records.
- Retesting or resampling without a documented rationale is not acceptable.

### EU GMP Annex 11 — Computerised Systems
- Electronic Batch Records must have audit trails that capture who made each entry, when, and what was changed.
- Electronic signatures must be attributable to a specific individual and linked to the record at the time of signing.
- Systems used for EBR must be validated.

### USP General Chapters
- **USP <61>** — Microbiological Examination of Nonsterile Products: Microbial Enumeration Tests.
- **USP <62>** — Microbiological Examination: Tests for Specified Microorganisms.
- **USP <905>** — Uniformity of Dosage Units (Content Uniformity / Weight Variation). Acceptance Value (AV) ≤15.0 for Stage 1.

---

## The Master Batch Record (MBR)

The MBR is the approved template that defines exactly how a product must be manufactured. It specifies:
- Formulation (bill of materials with quantities and tolerances)
- Equipment identifiers and calibration requirements
- Step-by-step manufacturing instructions with critical process parameters (CPPs)
- In-process control (IPC) test points and acceptance criteria
- Sampling instructions for QC release testing
- Required operator and QA signatures at each step

**Version Control**: Only the current approved version of the MBR may be used for manufacturing. Retrieving MBR version history is a key step in batch record review — using a superseded version is a critical finding.

**At Lilly**, MBRs are stored and controlled in Veeva Vault. The Pace AI agent retrieves MBRs via the Veeva Vault REST API (e.g., `GET vault.lilly.com/api/v24.1/objects/documents/{doc_id}/file`) and verifies the document status is "Approved" before using it as the reference standard.

---

## The Electronic Batch Record (EBR)

The EBR is the executed record — the completed instance of the MBR for a specific batch. It contains:
- All actual values recorded by operators (weights, temperatures, times, speeds)
- Electronic signatures with timestamps
- Any deviations or in-process exceptions logged
- Equipment logbook references
- QC test results

---

## Lilly's Batch Record Review Process

### Overview
Lilly's quality operations use an AI-assisted BRR workflow powered by Pace. The process follows these phases:

1. **EBR Submission** — Manufacturing supervisor submits the completed EBR to quality-inbox@lilly.com.
2. **MBR Retrieval** — Pace retrieves the current approved MBR from Veeva Vault via REST API.
3. **Bill of Materials Verification** — All raw materials verified against BOM: quantities, CoA currency, yield.
4. **Manufacturing Steps Review** — Each manufacturing step reviewed for CPP compliance, IPC data completeness, and operator/QA signatures.
5. **QC Release Testing Review** — All analytical results verified against release specifications.
6. **AI Confidence Scoring** — Pace calculates a confidence score (0–100%) based on the number and severity of findings.
7. **HITL QA Review** (if required) — For scores below 95%, a qualified QA reviewer is notified for authorization.
8. **Batch Disposition** — Final release or rejection decision.

### Confidence Score Thresholds
| Score Range | Classification | Action |
|---|---|---|
| 95–100% | Clean Review | Auto-release eligible |
| 80–94% | Expedited Review | QA reviewer notified; HITL required |
| 60–79% | Full Investigation | Senior QA + QP escalation |
| <60% | Reject / Hold | Batch held; CAPA initiated |

---

## Finding Classification System

### CRITICAL
A deviation from a specification or procedure that has, or has potential to have, a direct adverse impact on product quality, patient safety, or regulatory compliance. Examples:
- Active ingredient assay outside release specification (OOS)
- Use of an incorrect MBR version (superseded)
- Missing QA batch record approval signature

### MAJOR
A significant deviation that does not directly compromise product quality but represents a significant failure of the quality system or GMP compliance. Examples:
- Critical Process Parameter (CPP) out of specification where IPC confirms product impact
- Equipment calibration expired at time of use
- Multiple IPC test points missing from the batch record

### MINOR
A deviation that is unlikely to have any adverse impact on product quality but represents a departure from established procedures. Examples:
- CPP briefly out of specification but IPC confirms product within spec
- Single missing QA countersignature on a non-critical form
- Documentation completed out of sequence (late entry)

### OBSERVATION
An opportunity for improvement or a condition that bears monitoring but does not constitute a GMP violation. Examples:
- Process parameter at the boundary of specification (in-spec but warrants attention)
- Environmental condition briefly outside alert limit (within action limit)
- A process step taking longer than historical norms without impact

---

## Common Pharmaceutical Manufacturing Steps Reviewed

### Dispensing
Weighing of all raw materials against the BOM. Each material is independently verified by a second operator. CoA review ensures identity and purity of each ingredient.

### Wet Granulation
Mixing of active and excipients with a granulating fluid. Key CPPs: impeller speed (RPM), chopper speed, granulation time, endpoint determination. IPC: granule RSD, moisture endpoint.

### Fluid Bed Drying (FBD)
Removal of granulation solvent/water. Key CPPs: inlet air temperature, airflow, bed temperature. IPC: loss on drying (LOD). Calibration of temperature sensors is critical.

### Milling / Sizing
Reduction of dried granules to target particle size. Key CPPs: screen size, feed rate, speed. IPC: particle size distribution (D90), milling yield.

### Blending / Lubrication
Final mixing of granules with lubricant (e.g., magnesium stearate). Key CPPs: blend time, speed. IPC: blend uniformity (RSD of drug substance across multiple samples).

### Encapsulation / Tabletting
Filling capsules or compressing tablets. Key CPPs: fill weight/tablet weight target, compression force. IPC: weight uniformity at scheduled time points, hardness, friability, disintegration.

### Film / Enteric Coating
Application of functional or cosmetic coating. For enteric coatings: key CPPs include inlet air temperature, spray rate, coating weight gain (% increase). IPC: weight gain at intervals, appearance. Coating failures include under-coating (acid resistance test failure) and over-coating (delayed release).

### QC Release Testing
Final analytical testing of the finished batch. Typical tests: assay (HPLC), dissolution, content uniformity, related substances, water content, microbial limits, appearance. All results must meet approved specifications before batch disposition.

---

## Story Cases — Lilly Batch Record Review

### BRR_001 — Atorvastatin 40mg Tablets (Clean Release)
- **Batch**: AT-2026-0142 | **Size**: 1,200,000 tablets
- **MBR**: MBR-ATV-040-003 v2.1 (current)
- **Confidence**: 97% | **Outcome**: Done (auto-eligible)
- **Summary**: Clean review. All CPPs within specification. 6/6 IPC blend uniformity checks pass. 10/10 QC tests pass. Assay 100.4%. No deviations. Batch released without HITL required.

### BRR_002 — Metformin HCl 500mg Tablets (Needs Review — Signal HITL)
- **Batch**: MF-2026-0089 | **Size**: 2,400,000 tablets
- **MBR**: MBR-MFH-500-001 v3.0 (current)
- **Confidence**: 74% | **Outcome**: Needs Review (awaiting APPROVE_HOLD_MF0089)
- **Summary**: OOS dissolution result T=30min (68% vs NLT 70%). Single result, Stage 1 failure. Dissolution failure is a CRITICAL finding. Phase I investigation initiated. Batch on hold pending investigation outcome. Signal HITL required for QA review and hold authorization.

### BRR_003 — Lisinopril 10mg Tablets (Needs Review — Email HITL)
- **Batch**: LS-2026-0031 | **Size**: 500,000 tablets
- **MBR**: MBR-LIS-010-002 v1.4 (current, verified vs. v1.2 Superseded and v1.3 Superseded in Veeva)
- **Confidence**: 71% | **Outcome**: Needs Review
- **Summary**: MAJOR finding — MBR v1.4 effective 03-Jan-2026 introduced revised blend time (12 min → 18 min). EBR shows 12-minute blend time (old spec). Blend was executed per superseded procedure. Blend uniformity RSD 1.8% is within ≤2.0% but borderline. OOS investigation required. Email HITL: QA team notified via email for manual review.

### BRR_004 — Omeprazole 20mg DR Capsules (Released after HITL)
- **Batch**: OM-2026-0217 | **Size**: 900,000 capsules
- **MBR**: MBR-OME-020-004 v2.0 (current)
- **Confidence**: 89% | **Outcome**: Done (released after QA countersig)
- **Summary**: Expedited review threshold (80–94%). Two MINOR findings: impeller CPP 275 RPM vs 240–260 RPM (DEV-2026-0412 documented same-day, IPC within spec); ENV excursion form ENV-OM-2026-0217 missing QA countersignature per SOP-ENV-007 Section 4.2. One OBSERVATION: coating temp at upper boundary. QA Dr. P. Mwangi countersigned ENV form → batch released. 900,000 units cleared.

---

## Key Standard Operating Procedures Referenced

| SOP | Title | Application |
|---|---|---|
| SOP-ENV-007 | Environmental Monitoring and Excursion Management | Section 4.2 requires QA countersignature on all excursion forms within 24 hours |
| SOP-QC-015 | Out-of-Specification Investigation | Governs Phase I and Phase II OOS investigations; single-stage dissolution failure triggers Phase I |
| SOP-MFG-031 | Critical Process Parameter Deviation Management | Defines same-day deviation documentation requirement for CPP excursions |
| SOP-QA-008 | Batch Record Review and Disposition | Defines the review workflow, reviewer qualifications, and sign-off requirements |
| SOP-VLT-003 | Veeva Vault Document Retrieval for Manufacturing | Governs API-based MBR retrieval and version verification prior to batch review |

---

## Glossary

| Term | Definition |
|---|---|
| AV | Acceptance Value — statistical measure of content uniformity per USP <905> |
| BOM | Bill of Materials — list of all ingredients and quantities required for manufacture |
| CAPA | Corrective Action and Preventive Action |
| CoA | Certificate of Analysis — supplier document confirming material identity and purity |
| CPP | Critical Process Parameter — a process variable whose variability has an impact on a critical quality attribute |
| CQA | Critical Quality Attribute — physical, chemical, biological, or microbiological property that must be within an appropriate limit |
| EBR | Electronic Batch Record — the completed, executed record for a specific batch |
| FBD | Fluid Bed Dryer |
| GMP | Good Manufacturing Practice |
| HITL | Human-in-the-Loop — a step requiring human review and authorization |
| HPLC | High-Performance Liquid Chromatography — analytical method for assay and impurity testing |
| IPC | In-Process Control — test performed during manufacturing to monitor and confirm the process is within specification |
| LOD | Loss on Drying — measure of moisture content |
| MBR | Master Batch Record — the approved template defining how a product must be manufactured |
| OOS | Out-of-Specification — analytical result outside the approved acceptance criteria |
| QA | Quality Assurance |
| QC | Quality Control |
| QP | Qualified Person — EU-designated person responsible for batch certification and release |
| RSD | Relative Standard Deviation — measure of variability (RSD = SD/mean × 100%) |
| SOP | Standard Operating Procedure |
