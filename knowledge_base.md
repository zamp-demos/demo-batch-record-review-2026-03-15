# Batch Record Review: Comprehensive Knowledge Base

**Eli Lilly and Company — Bioproduct R\&D**

This document consolidates the complete knowledge base for the automated Batch Record Review (BRR) system. It covers GMP regulatory requirements, batch record structure, review checklists, deviation classification, yield and reconciliation rules, data integrity principles, OOS investigation procedures, disposition decision rules, and a complete glossary.

**Scope:** FDA (21 CFR 211), EU GMP (EudraLex Vol. 4), ICH (Q7/Q8/Q9/Q10), WHO, PIC/S

**Intended Use:** Reference material for PACE automated first-pass batch record review. Human reviewers make final disposition decisions.

***

**Table of Contents**

1. GMP Regulatory Requirements
2. Master Batch Record Structure
3. Executed Batch Record Structure
4. Review Checklist (Comprehensive)
5. Deviation Classification
6. Common Deviations Catalog
7. Yield and Reconciliation
8. ALCOA+ Data Integrity
9. OOS Investigation Process
10. Decision Rules and Disposition
11. Sources and Regulatory Links
12. Glossary
13. Consolidated References

***

# Part 1: GMP Regulatory Requirements

## Document Purpose and Scope

This document provides comprehensive coverage of global Good Manufacturing Practice (GMP) regulatory requirements governing batch record review for pharmaceutical manufacturing. It serves as a primary reference for Quality Assurance professionals, Production personnel, and regulatory compliance teams responsible for ensuring batch records meet all applicable regulatory standards before product release.

**Target Audience:** Pharmaceutical manufacturing professionals including QA reviewers, QC managers, production supervisors, regulatory affairs specialists, and qualified persons.

**Regulatory Scope:** FDA (United States), EMA/EU GMP (European Union), ICH (International), WHO (Global), PIC/S (International cooperative).

***

## 1. FDA Requirements: 21 CFR Part 211

The U.S. Food and Drug Administration's Title 21 Code of Federal Regulations Part 211 establishes Current Good Manufacturing Practice (CGMP) for finished pharmaceuticals. Subpart J (Records and Reports) contains the core requirements for batch record creation, maintenance, and review.

**Primary Source:** <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211>

### 1.1 §211.186 Master Production and Control Records

**Regulatory Text (Paraphrased):**
To ensure uniformity from batch to batch, master production and control records for each drug product, including each batch size thereof, shall be prepared, dated, and signed (unsigned signature) by one person and independently checked, dated, and signed by a second person.

**What Must Be Included in the Master Production Record:**

#### (a) Name and Strength of Product

* The complete product name including dosage form

* Active pharmaceutical ingredient (API) strength with units

* Product code or reference number

* Example: "Atorvastatin Calcium Tablets, 40 mg, Product Code: ATV-40-TAB"

#### (b) Name and Weight/Measure of Each Ingredient

* Common or usual name of each ingredient

* Quantity per batch expressed in weights, measures, or proportions

* Overages must be justified and approved

* Must reference compendial grade (USP, EP, BP, JP) or internal specifications

* Both active and inactive ingredients listed

**Example:**

```
Atorvastatin Calcium Trihydrate: 43.37 kg (equivalent to 40.00 kg anhydrous basis)
Microcrystalline Cellulose: 125.00 kg
Lactose Monohydrate: 80.00 kg
```

#### (c) Statement of Theoretical Weight or Measure

* Expected yield at each appropriate phase of processing

* Maximum and minimum percentages of theoretical yield beyond which investigation is required

* Typically: ±2-5% for solid dosage forms, tighter for liquids

**Example Yield Ranges:**

* Granulation step: 98.0% - 102.0%

* Compression: 97.0% - 103.0%

* Final packaged units: 98.5% - 101.5%

#### (d) Complete Manufacturing and Control Instructions

Each manufacturing step must include:

* **Step number and description:** Clear, unambiguous instructions

* **Process parameters with acceptable ranges:** Temperature (±2°C), mixing time (±5 min), RPM (±10)

* **Critical Process Parameters (CPPs):** Identified and justified through process validation

* **In-Process Controls (IPCs):** Sampling points, test methods, acceptance criteria

* **Equipment specifications:** Equipment ID, capacity, operating conditions

* **Time limits:** Maximum hold times between steps

* **Environmental controls:** Temperature, humidity, clean room class

* **Safety precautions:** Operator protection, material handling

**Example Step:**

```
Step 5.3: Dry Granulation
Equipment: Roller Compactor RC-001
Process Parameters:
  - Roll pressure: 50-70 bar (CPP)
  - Roll speed: 3-5 RPM
  - Feed rate: 15-25 kg/hr
  - Gap width: 2.0-3.0 mm
IPC: Ribbon density test (1.2-1.4 g/cm³)
Duration: Approximately 2.5-3.5 hours for 250 kg batch
Operator signature required upon completion.
```

#### (e) Sampling and Testing Instructions

* **Sampling plan:** Number of samples, sampling points, sampling technique

* **Identity, strength, quality, and purity:** All required tests listed

* **Reference to test methods:** USP <711>, internal SOP references

* **Acceptance criteria:** Numerical limits with units

* **OOS procedures:** What to do if results fail

#### (f) Special Notations and Precautions

* Drug product-specific handling requirements

* Light-sensitive materials (protect from light)

* Moisture-sensitive materials (control humidity)

* Potent compounds (operator protection, containment)

* Cross-contamination prevention (dedicated equipment, cleaning validation)

**Regulatory Expectation:**
The master production record must be sufficiently detailed that a competent operator could execute manufacturing without ambiguity. Any deviation from the master record must be documented and justified.

### 1.2 §211.188 Batch Production and Control Records

**Regulatory Text (Paraphrased):**
Batch production and control records shall be prepared for each batch of drug product produced and shall include complete information relating to the production and control of each batch.

**Required Documentation Elements:**

#### (a) Batch Number and Dates

* Unique batch/lot number assignment

* Manufacturing start date (date of first significant step)

* Manufacturing completion date

* Expiration date calculation based on stability data

**Batch Numbering Systems:**

* Must be unique and non-repeatable

* May include product code, year, sequential number

* Example: ATV40-2024-001234

#### (b) Identity of Individual Major Equipment and Lines

* Actual equipment used (ID number from equipment log)

* Production line designation

* Verification that equipment is clean and approved for use

* Calibration status verification

**Example Documentation:**

```
Blender: BLN-015 (Calibration due: 15-MAR-2025, Cleaning verified: Batch # CL-2024-0567)
Tablet Press: TP-008 (IQ/OQ/PQ current, Last maintenance: 10-JAN-2024)
```

#### (c) Specific Identification of Each Batch of Component

* Lot number of each raw material used

* Analytical Report (AR) number confirming material is approved

* Actual quantity used (weighed amount)

* Identity verification at dispensing (e.g., barcode scan, visual check)

**Example:**

```
Material: Atorvastatin Calcium Trihydrate
Supplier Lot: ATC-2023-1156
AR Number: AR-2023-4521 (Approved 12-DEC-2023)
Quantity Dispensed: 43.420 kg
Dispensed by: J. Smith (12-JAN-2024 09:15)
Verified by: M. Johnson (12-JAN-2024 09:20)
```

#### (d) Actual Results Recorded

* **Weights and measures:** Actual amounts used at each step

* **In-process test results:** All IPC data with pass/fail determination

* **Environmental monitoring:** Temperature, humidity logs

* **Time stamps:** Start and end of each critical step

* **Operator signatures:** Performed by / Verified by

#### (e) Laboratory Determination Results

* Results of all tests performed

* Specifications and acceptance criteria

* Pass/fail determination

* Analyst signature and date

* Reference to laboratory notebook or LIMS entry

#### (f) Signatures of Persons Performing and Supervising Each Significant Step

* **Operator signature:** Person who performed the operation

* **Supervisor/verifier signature:** Independent check

* **Date and time:** When operation was completed

**Three-tier signature model:**

1. **Production Operator:** Executes step
2. **Production Supervisor:** Verifies execution
3. **QA Reviewer:** Final compliance review

#### (g) Results of Examinations and Investigations

* Any deviations, discrepancies, or failures

* Investigation report reference number

* Root cause and corrective action

* Impact assessment on product quality

* Disposition decision (release, reject, rework)

### 1.3 §211.192 Production Record Review

**Regulatory Text (211.192):**
"All drug product production and control records, including those for packaging and labeling, shall be reviewed and approved by the quality control unit to determine compliance with all established, approved written procedures before a batch is released or distributed."

**This is the MOST CRITICAL regulation for batch record review.**

#### Core Requirements:

**1. Review Must Be Completed Before Release**

* No distribution until QA approval is documented

* Electronic or handwritten approval signature required

* Date of approval must be recorded

**2. Quality Unit Authority**

* QA has final approval authority (21 CFR 211.22)

* Production cannot override QA rejection

* QA must review 100% of batch record content

**3. What Must Be Reviewed:**

* Verification that all required signatures are present

* All entries are complete, legible, and contemporaneous

* All in-process and finished product test results meet specifications

* All deviations are documented, investigated, and justified

* Yield reconciliation is within acceptable limits

* Equipment cleaning and calibration were verified

* Environmental monitoring was within limits

* Label reconciliation is 100% accounted for

**4. Investigation of Discrepancies**

**Regulatory Text (211.192):**
"Any unexplained discrepancy (including a percentage of theoretical yield exceeding the maximum or minimum percentages established in master production and control records) or the failure of a batch or any of its components to meet any of its specifications shall be thoroughly investigated, whether or not the batch has already been distributed."

**What Triggers Investigation:**

* Out-of-specification (OOS) test results

* Yield outside established limits

* Deviation from master production record

* Equipment malfunction during production

* Environmental excursion

* Missing or incomplete documentation

**Investigation Must Include:**

* Root cause analysis

* Impact assessment on product quality

* Corrective and preventive actions (CAPA)

* Timeline for completion

* Approval by quality unit

**5. Documentation of Review**
The QA reviewer must document:

* Statement that batch record has been reviewed

* Confirmation that batch meets all specifications

* Any investigations and their conclusions

* Approval or rejection decision

* Signature, printed name, and date

**Example Review Statement:**

```
QUALITY ASSURANCE REVIEW STATEMENT:
I certify that batch ATV40-2024-001234 has been manufactured in accordance
with the approved Master Production Record MPR-ATV-40-v12. All in-process
and finished product testing results meet specifications. All deviations have
been investigated and determined to have no impact on product quality.
This batch is APPROVED for release.

QA Reviewer: Sarah Martinez
Signature: [signed]
Date: 28-JAN-2024
```

### 1.4 §211.194 Laboratory Records

**Regulatory Text (Paraphrased):**
Laboratory records shall include complete data derived from all tests necessary to assure compliance with established specifications and standards.

**Required Laboratory Documentation:**

#### (a) Complete Data Derived from Tests

* Raw data from all analytical tests

* Instrument printouts, chromatograms, spectra

* Calculations showing how results were derived

* Standard curves and calibration data

* System suitability test results

**Data Integrity Requirements:**

* Original data must be retained (electronic or paper)

* Data must be contemporaneous (recorded when generated)

* No alteration of original data without documented justification

* Audit trail for electronic records

#### (b) Complete Record of Equipment Used

* Instrument ID and model

* Calibration status and due date

* Maintenance history

* Performance verification (OQ/PQ status)

**Example:**

```
HPLC System: HPLC-014 (Agilent 1260)
Calibration: Due 15-MAR-2025
Performance Qualification: PQ-HPLC-014-2024 (valid until 10-FEB-2025)
Column: C18, 250 x 4.6 mm, Lot# XYZ123
```

#### (c) Complete Record of Standards and Reagents

* Identity of reference standards (lot number, expiry)

* Purity and potency of standards

* Source (USP, EP, or manufacturer)

* Preparation date and expiry of working standards

* Reagent grades and lot numbers

**Example:**

```
Atorvastatin Calcium Reference Standard
Source: USP Catalog# 1012005
Lot: F0M375
Assay: 99.8% (as labeled)
Expiry: 31-DEC-2025
```

#### (d) Statement of Weight or Measure of Sample

* Sample size used for testing

* Sampling method reference

* Sample location (top/middle/bottom of batch)

* Representative sampling justification

#### (e) Statement of Test Method Reference

* USP method number (e.g., USP <711> Dissolution)

* Internal SOP number

* Pharmacopeial monograph reference

* Method validation report reference (for non-compendial methods)

#### (f) Complete Record of Calculations

* All dilution factors

* Response factors

* Averaging of replicate measurements

* Statistical calculations (mean, RSD, confidence intervals)

* Analyst signature on calculations

**Example Calculation:**

```
Sample Weight: 20.15 mg
Dilution Factor: 100/10 x 200/5 = 400
Peak Area: 1,245,678
Standard Response Factor: 25,432
Result: (1,245,678 / 25,432) x 400 / 20.15 = 98.6%
Specification: 95.0% - 105.0%
Conclusion: PASS
```

#### (g) Statement of Test Results and Comparison to Standards

* Numerical results with units

* Acceptance criteria

* Pass/Fail determination

* Analyst signature and date

* Independent verification signature (for critical tests)

#### (h) Initials or Signature of Analyst

* Person who performed the test

* Date of testing

* Independent reviewer (second person verification)

#### (i) Results of Examinations, Investigations, Conclusions

* OOS investigations if applicable

* Retests and their justification

* Deviation documentation

* Final conclusion on batch acceptability

### 1.5 §211.180 General Requirements (Records Retention)

**Regulatory Text (211.180(a)):**
"Any production, control, or distribution record that is required to be maintained in compliance with this part and is specifically associated with a batch of a drug product shall be retained for at least 1 year after the expiration date of the batch or, in the case of certain OTC drug products lacking expiration dating because they meet the criteria for exemption under §211.137, 3 years after distribution of the batch."

**Retention Period Summary:**

| Record Type              | Retention Period                                | Regulatory Citation |
| ------------------------ | ----------------------------------------------- | ------------------- |
| Batch production records | 1 year past expiry OR 3 years past distribution | 211.180(a)          |
| Laboratory records       | 1 year past expiry OR 3 years past distribution | 211.180(a)          |
| Distribution records     | 3 years after distribution                      | 211.196             |
| Complaint files          | 1 year past expiry of associated batch          | 211.198             |
| Annual product review    | Lifetime of product + 1 year                    | 211.180(e)          |
| Equipment cleaning logs  | Until next cleaning or per SOP                  | 211.182             |
| Equipment maintenance    | Life of equipment                               | 211.182             |
| Component/API testing    | 1 year past expiry of last batch using that lot | 211.180(c)          |

**Practical Interpretation:**

* For a product with 24-month shelf life, records retained minimum 3 years from manufacturing

* For products with no expiry (some OTC), 3 years from distribution is the rule

* Many companies retain records longer (5-7 years) as best practice for litigation protection

**Format Requirements (211.180(d)):**
"Written records required by this part shall be maintained so that data therein can be used for evaluating, at least annually, the quality standards of each drug product to determine the need for changes in drug product specifications or manufacturing or control procedures."

This means records must be:

* **Legible:** Readable and understandable

* **Retrievable:** Organized for easy access during inspections or investigations

* **Complete:** All data present, no blank fields

* **Contemporaneous:** Recorded at time of activity

* **Attributable:** Signed by identified individuals

* **Original:** First recording of data

### 1.6 §211.68 Automatic, Mechanical, and Electronic Equipment

**Regulatory Text (Paraphrased):**
Automatic, mechanical, or electronic equipment or systems used in manufacture, processing, packing, or holding of a drug product shall be routinely calibrated, inspected, or checked according to a written program designed to assure proper performance.

**Implications for Batch Records:**

#### (a) Equipment Validation Status

Batch records must verify:

* Equipment is qualified (IQ/OQ/PQ complete and current)

* Calibration is current and documented

* Maintenance is up-to-date

* Equipment is suitable for intended use

**Example Check:**

```
Before use verification:
□ Equipment ID verified: BLN-015
□ Calibration label checked: Due 30-JUN-2025 ✓
□ Cleaning status verified: Clean label affixed, Batch# CL-2024-0567 ✓
□ Equipment logbook reviewed: No open maintenance items ✓
Verified by: [Operator Signature] Date: 12-JAN-2024
```

#### (b) Process Control Systems

For automated systems (e.g., tablet press with automated weight control):

* Validation documentation must exist

* Audit trails enabled and reviewed

* Alarms and deviation reports included in batch record

* System-generated data included in batch documentation

#### (c) Input/Output Verification (§211.68(b))

"Written procedures shall be followed for input/output verification, shall be checked for accuracy, and shall be verified."

**For electronic records:**

* Automated data capture must be verified for accuracy

* Comparison to manual measurements periodically

* Verification that data was not lost or corrupted

* Electronic signatures meet 21 CFR Part 11 requirements

***

## 2. FDA 21 CFR Part 11: Electronic Records and Signatures

**Primary Source:** <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11>

Part 11 applies when electronic records are used in place of paper records, or electronic signatures in place of handwritten signatures, in GMP-regulated activities.

### 2.1 Scope and Applicability (§11.1)

**When Part 11 Applies:**
Part 11 applies to records required by FDA predicate rules (including 21 CFR 211) when:

* Electronic records are created, modified, maintained, archived, retrieved, or transmitted

* Electronic signatures are used in place of handwritten signatures

**Common Batch Record Applications:**

* Electronic Batch Record (EBR) systems (e.g., Syncade, Werum, eBR software)

* Laboratory Information Management Systems (LIMS)

* Manufacturing Execution Systems (MES)

* Distributed Control Systems (DCS)

* SCADA systems for process control

* Document management systems for MBR storage

### 2.2 Electronic Records Requirements (Subpart B)

#### §11.10 Controls for Closed Systems

**Required System Controls:**

**(a) Validation:**

* System validation to ensure accuracy, reliability, consistent intended performance

* Ability to generate accurate and complete copies of records

* Installation Qualification (IQ), Operational Qualification (OQ), Performance Qualification (PQ)

* Ongoing monitoring (periodic review, change control)

**(b) Ability to Generate Accurate Copies:**

* Electronic records must be retained in their original format or in a format that preserves content and meaning

* Must be able to print human-readable copies for FDA inspection

* Metadata must be retained (who created, when, audit trail)

**(c) Protection of Records:**

* Throughout the records retention period

* Records must be retrievable

* Protection from loss, alteration, or unauthorized access

**(d) Limit System Access to Authorized Individuals:**

* User access controls

* Role-based permissions (operator vs. supervisor vs. QA)

* Unique user accounts (no shared logins)

**(e) Use of Secure, Computer-Generated, Time-Stamped Audit Trails:**

* **Critical requirement for GMP systems**

* Audit trail must record: who, what, when, and why for all GMP-relevant actions

* Must capture creation, modification, deletion of records

* Audit trails must be reviewable, part of batch record review

* Cannot be turned off or edited by users

**Example Audit Trail Entry:**

```
2024-01-12 09:15:23 | User: J.Smith | Action: Record Created | Field: Step 5.3 Start Time | Value: 09:15 | Reason: N/A
2024-01-12 09:16:45 | User: M.Johnson | Action: Record Verified | Field: Step 5.3 Start Time | Value: 09:15 | Reason: Supervisor verification
2024-01-12 11:47:12 | User: J.Smith | Action: Record Modified | Field: Step 5.3 End Time | Old Value: [blank] | New Value: 11:45 | Reason: Step completed
```

**(f) Use of Operational System Checks:**

* System validation and error checking

* Input verification (e.g., drop-down menus to prevent typos)

* Automated range checks (e.g., temperature must be 20-25°C)

**(g) Determination that Persons Who Develop, Maintain, or Use Systems Have Education, Training, and Experience:**

* Training records for all users

* Competency assessment

* Ongoing training for system updates

**(h) Written Policies Holding Individuals Accountable:**

* Users responsible for actions under their electronic signatures

* Clear policies on access, data integrity, audit trail review

**(i) Use of Appropriate Controls Over Systems Documentation:**

* Version control for system specifications

* Change control for system modifications

* Documentation of deviations and system issues

**(j) Personnel Access Controls:**

* Authority checks to ensure only authorized personnel can use system

* Device checks (e.g., tokens, biometrics)

* User authentication at the start of each session

**(k) Use of Device (e.g., Token) and/or User ID and Password Combinations:**

* Passwords must meet complexity requirements

* Regular password changes

* Account lockout after failed login attempts

### 2.3 Electronic Signatures Requirements (Subpart C)

#### §11.50 Signature Manifestations

Electronic signatures must:

* Be linked to their respective electronic records

* Not be excised, copied, or transferred to falsify an electronic record

**Example Implementation:**
When a user electronically signs step 5.3 completion, the system must permanently bind that signature to that specific record entry. The signature cannot be copy-pasted to other records.

#### §11.70 Signature/Record Linking

Electronic signatures and handwritten signatures executed to electronic records shall be linked to their respective electronic records to ensure that the signatures cannot be excised, copied, or otherwise transferred to falsify an electronic record by ordinary means.

**Implementation:**
Cryptographic binding, hash functions, database constraints that prevent signature manipulation.

#### §11.200 and §11.300 Electronic Signature Components

**For electronic signatures not based on biometrics:**

* Must employ at least two distinct identification components (e.g., ID + password)

* Each time a user signs, they must execute all components

* Must be used only by their genuine owners

* Must be administered to ensure that attempted use by anyone else requires collaboration of two or more individuals

**First-time use:** §11.300 requires users to certify in writing (or electronically with traditional signature) that electronic signatures are legally binding equivalent to handwritten signatures.

***

## 3. EU GMP Requirements

**Primary Source:** <https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en>

The EU GMP Guide (EudraLex Volume 4) is legally binding in all EU member states. It consists of Part I (Basic Requirements), Part II (API manufacturing), Part III (GMP documents), and various Annexes.

### 3.1 Chapter 4: Documentation

**Principle:**
"Good Documentation constitutes an essential part of the quality assurance system and is key to operating in compliance with GMP requirements. Various types of documents and media should be defined in the Quality Management System of the manufacturer."

#### 4.1 General Requirements

**Good Documentation Practice (GDP):**

* **Clear:** Unambiguous, easy to understand

* **Legible:** Readable by all who need to use it

* **Simultaneously recorded:** Contemporaneous with activity

* **Traceable:** To specific product and batch

* **Retained:** Per legal retention periods

**Key Phrase from EU GMP Chapter 4.7:**
"Any alteration made to the entry on a document should be signed and dated; the alteration should permit the reading of the original information. Where appropriate, the reason for the alteration should be recorded."

**How to correct errors in batch records:**

1. Draw a single line through the error (original must remain legible)
2. Write the correct value next to it
3. Initial and date the correction
4. Document reason if not obvious

**INCORRECT correction:**
~~Using correction fluid, erasing, obliterating original~~

#### 4.2 Requirements for Manufacturing Documents

**Specifications (Section 4.12-4.17):**
Each raw material, packaging material, intermediate, bulk, and finished product must have a specification that describes:

* Description of materials (physical, organoleptic)

* Identity tests

* Assay (strength, purity)

* Impurity limits

* Microbiological quality (if applicable)

* Acceptance criteria

**Manufacturing Formulae and Processing Instructions (Section 4.18-4.19):**
Equivalent to FDA's Master Production Record. Must include:

* Name and reference code

* Description of pharmaceutical form, strength, and batch size

* List of all starting materials with quantities

* Statement of expected final yield with acceptable limits

* Statement of processing location and principal equipment

* Detailed stepwise processing instructions

* Instructions for in-process controls with acceptance limits

* Requirements for storage of products, including container, labeling, and special storage conditions

#### 4.3 Batch Processing Records (Section 4.20-4.23)

**EU GMP 4.20:**
"A batch processing record should be kept for each batch processed. It should be based on the relevant parts of the currently approved manufacturing formula and processing instructions, and should be retained for at least one year after the expiry date of the finished product."

**Required content mirrors FDA §211.188:**

* Batch/lot number

* Dates and times of critical manufacturing steps

* Identity and quantities of all starting materials used

* Equipment used (ID and cleaning status)

* In-process controls performed, results, signatures

* Yield at various stages

* Notes on special problems, deviations with authorization

* Signatures of persons responsible for operations

**EU GMP 4.21:**
"Completed batch processing records should be reviewed and approved by the Quality Unit before the batch is released. Any divergence from the standard procedures should be recorded and investigated."

This is equivalent to FDA §211.192, emphasizing QA authority over release.

### 3.2 Annex 11: Computerised Systems

**Applies to:** All forms of computerized systems used in GMP activities, including electronic batch records, LIMS, MES, process control systems.

**Primary Principles:**

#### Risk Management (Annex 11, Principle)

"The application of quality risk management should be applied throughout the lifecycle of the computerised system taking into account patient safety, data integrity and product quality."

Higher risk systems (e.g., EBR controlling batch release) require more stringent controls than lower risk systems (e.g., email).

#### Validation (Annex 11, Section 4)

* Must be validated to demonstrate fitness for intended use

* Validation extent depends on risk assessment

* IQ/OQ/PQ or equivalent approach

* Ongoing monitoring and revalidation after changes

#### Data (Annex 11, Section 7)

**Critical statement:**
"Where critical data is entered manually, there should be an additional check on the accuracy of the record entry. This check may be done by a second operator or by validated electronic means."

This means double-check of critical entries (e.g., batch number, quantity, test results).

#### Audit Trails (Annex 11, Section 9)

"Consideration should be given, based on a risk assessment, to building into the system the creation of a record of all GMP-relevant changes and deletions (a system-generated 'audit trail'). For change or deletion of GMP-relevant data the reason should be documented. Audit trails need to be available and convertible to a generally intelligible form and regularly reviewed."

**Key Points:**

* Audit trails required for GMP-relevant data

* Must capture reason for changes

* Must be reviewed as part of batch record review

* Cannot be disabled by users

#### Electronic Signature (Annex 11, Section 11)

"Electronic records may be signed electronically. Electronic signatures are expected to:
(i) have the same impact as hand-written signatures within the organization's internal processes;
(ii) be permanently linked to their respective record;
(iii) include the time and date that they were applied."

### 3.3 Annex 16: Certification by a Qualified Person and Batch Release

**Applies to:** EU-specific requirement for Qualified Person (QP) batch certification before release onto EU market.

**Article 51 of Directive 2001/83/EC:**
Each batch of medicinal product must be certified by a Qualified Person that it has been manufactured and checked in compliance with GMP and relevant marketing authorization.

**QP Responsibilities (Annex 16, Section 2):**

1. Review batch documentation (batch records, deviations, change controls)
2. Verify manufacturing and testing was done under GMP
3. Confirm product meets marketing authorization specifications
4. Sign and date the QP certificate before release

**QP Certification Statement (Example):**

```
I certify that Batch No. ATV40-2024-001234 of Atorvastatin Calcium Tablets 40mg
has been manufactured in accordance with the principles and guidelines of Good
Manufacturing Practice and the terms of the Marketing Authorization. All testing
and review have been completed satisfactorily.

Qualified Person: Dr. Emma Thompson
Signature: [signed]
Date: 30-JAN-2024
QP Registration Number: GB-QP-12345
```

**Retention:** QP certificates must be retained for 5 years after expiry of the batch (or 5 years after last distribution if no expiry).

### 3.4 Chapter 6: Quality Control

**Section 6.15:**
"Samples of each batch of finished product should be retained for at least one year after the expiry date. The sample should be kept in its finished pack, unless the pack is exceptionally large, and stored under the recommended conditions."

**Retain samples:**

* One year past expiry date

* In original container closure system

* Under labeled storage conditions

* Sufficient quantity to permit at least two full re-analyses

**Section 6.17:**
"The results obtained should be recorded and checked to make sure that they are consistent with each other. Any calculations should be critically examined."

This emphasizes independent verification of analytical results and calculations.

***

## 4. ICH (International Council for Harmonisation) Guidelines

**Primary Source:** <https://www.ich.org/page/quality-guidelines>

ICH guidelines are not legally binding but are adopted by regulatory agencies in ICH member regions (US, EU, Japan, Canada, Switzerland, etc.) and form the basis for regulatory expectations.

### 4.1 ICH Q7: Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients

**Section 6: Documentation and Records**

#### 6.1 Documentation System and Specifications (6.10-6.14)

* All documents should be prepared, reviewed, approved, and distributed according to written procedures

* Documents should be approved, signed, and dated by appropriate responsible persons

* Specifications for raw materials, intermediates, APIs, labeling, and packaging materials

#### 6.2 Equipment Cleaning and Use Record (6.40)

Equipment logs should include:

* Equipment identification

* Dates of cleaning, maintenance, use

* Product identification for each equipment use

* Batch numbers processed
  This allows traceability if cross-contamination is suspected.

#### 6.3 Records of Raw Materials, Intermediates, API Labeling and Packaging Materials (6.41-6.43)

Retain records to allow complete traceability from raw material to finished API.

#### 6.4 Master Production Instructions (6.50)

Equivalent to Master Batch Record for APIs. Must include:

* Name of intermediate or API being manufactured

* Complete list of raw materials and intermediates with codes

* Statement of expected yield with acceptable ranges

* Description of processing location and major equipment

* Detailed production instructions including process parameters, sampling instructions, time limits, yield ranges

* Where appropriate, IPC instructions and acceptance criteria

#### 6.5 Batch Production Records (6.60-6.63)

**6.60:** "Batch production records should be prepared for each intermediate and API and should include complete information relating to the production and control of each batch."

Contents parallel FDA 211.188 requirements.

**6.63:** "All deviations should be documented and explained. Critical deviations should be investigated, and the investigation report should be approved by the responsible person and reviewed by the quality unit."

### 4.2 ICH Q8(R2): Pharmaceutical Development

**Relevance to Batch Records:**
Q8 introduces the concept of **design space** and **Quality by Design (QbD)**.

**Design Space (Section 2.3):**
"The design space is proposed by the applicant and is subject to regulatory assessment and approval. Working within the design space is not considered as a change. Movement out of the design space is considered to be a change and would normally initiate a regulatory post-approval change process."

**Impact on Batch Records:**

* If process parameters stay within approved design space, they are acceptable

* Batch records must document that process parameters remained within design space

* Movement outside design space = deviation requiring investigation

**Example:**
If design space for granulation endpoint is 20-30% moisture content, and actual batch has 25%, this is acceptable and requires no investigation. If actual is 32%, this is outside design space and requires full deviation investigation.

**Critical Process Parameters (CPPs) and Critical Quality Attributes (CQAs):**

* CPPs must be monitored and recorded in batch records

* Proven acceptable ranges (PARs) should be specified in MBR

* Trend analysis of CPPs across batches for process understanding

### 4.3 ICH Q9(R1): Quality Risk Management

**Relevance to Batch Record Review:**
Risk-based approach to determining review depth and investigation triggers.

**Key Principles (Section 2):**

* Risk assessments should be based on scientific knowledge and linked to protection of patient

* Level of effort, formality, and documentation should be commensurate with level of risk

**Application to Batch Record Review:**

* Higher risk products (e.g., injectables, oncology) warrant more detailed review

* Critical parameters identified through risk assessment receive heightened scrutiny

* Minor deviations from non-critical parameters may not require extensive investigation if risk is low

**Risk Assessment Tools:**

* Failure Mode and Effects Analysis (FMEA)

* Hazard Analysis and Critical Control Points (HACCP)

* Risk ranking and filtering

* Supporting statistical tools (control charts, capability indices)

**Example Application:**
A deviation in tablet coating thickness (cosmetic attribute) may be low risk and require minimal investigation. A deviation in API content uniformity (critical quality attribute) is high risk and requires extensive investigation including batch disposition decision.

### 4.4 ICH Q10: Pharmaceutical Quality System

**Section 3.2.4: Management Review of Process Performance and Product Quality**
"Management with executive responsibility should have a formal process for reviewing the pharmaceutical quality system on a regular basis. This review should include:

* Measurement of achievement of product realisation and process performance objectives

* Assessment of performance indicators that can be used to monitor the effectiveness of processes within the pharmaceutical quality system (e.g., complaint, deviation, CAPA, and change control processes)

* Identification and implementation of opportunities for continual improvement"

**Annual Product Review (APR) / Product Quality Review (PQR):**

* Required by both FDA (21 CFR 211.180(e)) and EU GMP (Chapter 1.10)

* Aggregate review of multiple batches manufactured during review period

* Batch record review data feeds into APR/PQR

**APR should include (per ICH Q10):**

* Review of all batches manufactured (quantities, yields, deviations)

* OOS/OOT investigations and trends

* Complaints and returns

* Process capability and performance metrics

* Changes (regulatory, process, analytical)

* Stability data review

* Conclusion on product and process performance

***

## 5. WHO (World Health Organization) Requirements

**Primary Source:** <https://www.who.int/publications/m/item/trs-986-annex-2>

WHO GMP guidelines are used by regulatory authorities in many countries, particularly in Asia, Africa, Latin America, and for WHO Prequalification Program (PQP) for essential medicines.

### 5.1 WHO TRS 986 Annex 2: Good Manufacturing Practices for Pharmaceutical Products

**Section 11: Documentation**

**11.1 General:**
"Good documentation is an essential part of a quality assurance system and is fundamental to compliance with GMP requirements. Clear documentation prevents errors arising from spoken communication and permits the tracing of batch history."

**Types of documentation (11.2):**

* Specifications

* Manufacturing formulae and processing/packaging instructions

* Procedures and protocols

* Batch manufacturing and packaging records

* Standard operating procedures (SOPs)

**11.30-11.34: Batch Processing and Packaging Records:**
"A batch record should be retained for each batch of a product processed. It should be based on the relevant parts of the currently approved manufacturing and packaging formula and should be checked by a person authorized to do so prior to being used."

**Review before release (11.39):**
"Records should be reviewed, evaluated and approved by the quality unit before a batch is released or distributed. Any deviation from the procedures or any unusual events should be investigated, explained and recorded."

### 5.2 WHO Prequalification Program (PQP) Specifics

For products intended for WHO prequalification (e.g., antiretrovirals, antimalarials, TB medicines, vaccines):

* All batch records must be in English or translated with certified translation

* Complete batch records may be requested during prequalification inspection

* Retention: At least one year after expiry of batch

* Must demonstrate GMP compliance to WHO standards

***

## 6. PIC/S (Pharmaceutical Inspection Co-operation Scheme)

**Primary Source:** <https://picscheme.org/en/publications>

PIC/S is an international cooperative arrangement among regulatory authorities, with 54 participating authorities. The PIC/S GMP Guide is harmonized with EU GMP.

### 6.1 PIC/S PE 009: Guide to Good Manufacturing Practice for Medicinal Products

**Part I, Chapter 4: Documentation**
Content is harmonized with EU GMP Chapter 4 (see Section 3.1 above).

**Part II: Basic Requirements for Active Substances used as Starting Materials**
Harmonized with ICH Q7 (see Section 4.1 above).

**Annex 11: Computerised Systems**
Harmonized with EU GMP Annex 11 (see Section 3.2 above).

**PIC/S Inspection Standards:**
PIC/S inspectors conduct GMP inspections using a risk-based approach focusing on:

* Data integrity (ALCOA+ principles)

* Deviation management

* Change control

* CAPA effectiveness

* Quality culture

**Data Integrity Expectations (PIC/S PI 041-1):**
**ALCOA+ Principles:**

* **Attributable:** Who created the data, when?

* **Legible:** Can the data be read and understood?

* **Contemporaneous:** Was data recorded at the time of activity?

* **Original:** Is this the first recording or a copy?

* **Accurate:** Is the data correct and error-free?

* **Complete:** Is all data present, no blank fields?

* **Consistent:** Are related records consistent?

* **Enduring:** Will records remain readable throughout retention period?

* **Available:** Can records be retrieved for review?

**Application to Batch Record Review:**
Every batch record entry must meet ALCOA+ principles. QA reviewer must verify data integrity during review.

***

## 7. Key Compliance Themes Across Jurisdictions

### 7.1 Record Retention Periods by Jurisdiction

| Jurisdiction               | Retention Period                                                      | Reference                          |
| -------------------------- | --------------------------------------------------------------------- | ---------------------------------- |
| **United States (FDA)**    | 1 year past expiry OR 3 years past distribution (whichever is longer) | 21 CFR 211.180(a)                  |
| **European Union**         | At least 1 year past expiry                                           | EU GMP Chapter 4.20                |
| **United Kingdom**         | At least 1 year past expiry                                           | UK GMP (same as EU)                |
| **Japan (MHLW)**           | 5 years from manufacturing (OTC); expiry + 1 year (Rx)                | Japanese GMP Ordinance             |
| **Canada (Health Canada)** | 1 year past expiry                                                    | C.02.020 Food and Drug Regulations |
| **Australia (TGA)**        | 1 year past expiry or 5 years from manufacturing                      | TGA GMP Code                       |
| **WHO**                    | 1 year past expiry                                                    | TRS 986 Annex 2                    |
| **PIC/S**                  | 1 year past expiry (harmonized with EU)                               | PE 009                             |

**Best Practice:** Retain records for **5-7 years** from date of manufacture to cover all jurisdictions and potential legal claims.

### 7.2 Language Requirements

| Jurisdiction        | Language Requirement                                                |
| ------------------- | ------------------------------------------------------------------- |
| **FDA**             | English (or English translation available during inspection)        |
| **EU**              | Language of member state where manufactured; English often accepted |
| **Japan**           | Japanese (or Japanese translation)                                  |
| **China (NMPA)**    | Chinese                                                             |
| **Brazil (ANVISA)** | Portuguese                                                          |
| **WHO PQP**         | English required                                                    |

**Practical implication:** Multinational companies often maintain batch records in English with local language translations as needed.

### 7.3 Who Must Review and Approve

| Jurisdiction | Reviewer             | Approver              | Reference              |
| ------------ | -------------------- | --------------------- | ---------------------- |
| **FDA**      | Quality Control Unit | Quality Control Unit  | 21 CFR 211.22, 211.192 |
| **EU**       | QA Unit              | Qualified Person (QP) | Annex 16               |
| **WHO**      | Quality unit         | Authorized person     | TRS 986                |
| **ICH**      | Quality unit         | Quality unit          | Q7, Section 6          |

**Common theme:** Independent quality unit has final authority over batch release.

### 7.4 Timeline Requirements for Review

| Jurisdiction | Timeline                          | Reference      |
| ------------ | --------------------------------- | -------------- |
| **FDA**      | Before release or distribution    | 21 CFR 211.192 |
| **EU**       | Before release (QP certification) | Annex 16       |
| **WHO**      | Before release                    | TRS 986        |

**Practical timelines:**

* Solid oral dosage forms: 5-15 business days from manufacturing completion to QA approval

* Injectables: 15-30 business days (more testing, stricter review)

* APIs: 10-20 business days

Delays often caused by:

* Pending stability test results

* Deviation investigations

* OOS investigations

* Missing documentation

### 7.5 Investigation Requirements for Discrepancies

**All jurisdictions require investigation of:**

1. Out-of-specification (OOS) results
2. Yield deviations beyond established limits
3. Unexplained discrepancies in documentation
4. Equipment failures during manufacturing
5. Environmental monitoring excursions
6. Deviations from approved procedures

**Investigation depth:**

* **Level 1 (Minor):** Obvious cause, no quality impact, brief documentation

* **Level 2 (Major):** Requires root cause analysis, CAPA, QA approval

* **Level 3 (Critical):** Extended investigation, regulatory notification, possible recall

**Common investigation tools:**

* 5 Whys

* Fishbone (Ishikawa) diagram

* Fault tree analysis

* Root cause analysis (RCA)

***

## 8. Practical Application for Batch Record Reviewers

### 8.1 Pre-Review Checklist

Before beginning batch record review, verify:

* [ ] Batch record is complete (no missing pages)

* [ ] All signatures present (no blank signature lines)

* [ ] All dates are present and chronological

* [ ] Batch record matches current MBR version

* [ ] Deviation reports attached (if any)

* [ ] Laboratory results attached with CoA

### 8.2 Review Process Steps

1. **Header verification:** Batch number, dates, product identity
2. **Material verification:** All materials used, AR numbers approved, quantities correct
3. **Equipment verification:** IDs match, calibration current, cleaning verified
4. **Process parameter verification:** All within MBR ranges, CPPs flagged
5. **IPC verification:** Results meet acceptance criteria
6. **Yield verification:** Calculate actual yield, compare to MBR limits
7. **Deviation review:** All deviations investigated, approved, no quality impact
8. **QC results verification:** All tests pass, calculations correct
9. **Label reconciliation:** 100% accountability
10. **Final approval:** Document review completion, sign and date

### 8.3 Common Deficiencies Found During Review

| Deficiency                     | Frequency | Risk Level  | Action                                                       |
| ------------------------------ | --------- | ----------- | ------------------------------------------------------------ |
| Missing operator signature     | High      | Medium      | Obtain signature or investigate if operator unavailable      |
| Illegible handwriting          | High      | Low-Medium  | Contact operator for clarification, document in review notes |
| Out-of-range process parameter | Medium    | High        | Verify deviation was opened, investigate if not              |
| Incorrect calculation          | Medium    | Medium-High | Recalculate, issue correction, assess impact                 |
| Missing timestamp              | Medium    | Medium      | Obtain from supervisor or records, document                  |
| Yield below minimum            | Low       | High        | Full investigation required, hold batch                      |
| OOS result                     | Low       | Critical    | Do not release, full investigation per SOP                   |

### 8.4 Regulatory Inspection Focus Areas

**What FDA inspectors look for in batch records:**

1. Completeness and accuracy of documentation
2. Evidence of contemporaneous recording
3. Proper investigation of deviations and OOS results
4. QA review and approval before release
5. Traceability from raw materials to finished product
6. Data integrity (ALCOA+ principles)
7. Electronic record controls (Part 11 compliance if applicable)

**Inspection readiness:**

* Batch records organized and readily retrievable

* Deviation and investigation files cross-referenced

* QA review notes available

* Electronic audit trails reviewable

* Training records current for all personnel who worked on batch

***

## 9. Conclusion and Key Takeaways

Batch record review is a **critical GMP requirement** across all global regulatory jurisdictions. The Quality Assurance unit has ultimate authority and responsibility to verify that each batch was manufactured in compliance with approved procedures and specifications before release.

**Universal requirements:**

* Master batch records must be detailed, approved, and version-controlled

* Executed batch records must document actual manufacturing with contemporaneous entries

* QA must review 100% of batch record content before release

* All deviations, OOS results, and discrepancies must be investigated

* Records must be retained for minimum 1 year past expiry (often longer)

* Electronic records must comply with data integrity and audit trail requirements

**The batch record is the historical certificate of a pharmaceutical product's manufacture and the documentary evidence that GMP was followed. Without proper batch records, product cannot be released.**

***

***

# Part 2: Master Batch Record Structure

## Document Purpose and Scope

This document provides detailed specifications for Master Batch Record (MBR) structure, content, and field definitions for pharmaceutical manufacturing. The MBR (also called Master Production Record, Manufacturing Formula, or Manufacturing Instructions) serves as the blueprint for manufacturing each batch of product and must comply with 21 CFR 211.186 (FDA), EU GMP Chapter 4, and ICH Q7 requirements.

**Target Audience:** Manufacturing engineers, formulation scientists, process development teams, regulatory affairs, quality assurance professionals responsible for creating, reviewing, or approving MBRs.

**Scope:** Solid oral dosage forms (tablets, capsules), with principles applicable to other dosage forms.

***

## 1. Master Batch Record Overview

### 1.1 Definition and Purpose

**Master Batch Record (MBR):** An authorized document that specifies complete manufacturing instructions, equipment, materials, process parameters, in-process controls, and acceptance criteria required to produce a specific batch size of a specific product.

**Regulatory Basis:**

* **FDA 21 CFR 211.186:** Master production and control records

* **EU GMP Chapter 4.18:** Manufacturing formulae and processing instructions

* **ICH Q7 Section 6.50:** Master production instructions (for APIs)

**Purpose:**

* Ensure batch-to-batch reproducibility

* Provide detailed instructions that any trained operator can follow

* Define acceptable ranges for process parameters and quality attributes

* Serve as the comparator during batch record review

* Document regulatory commitments made in marketing authorization

### 1.2 MBR Lifecycle

```
Development → Draft MBR → Tech Transfer → Validation Batches → Final MBR → 
Approval → Effective Use → Change Control → Superseded → Archive
```

**Key Lifecycle Points:**

1. **Development Phase:** Process development creates draft MBR based on formulation and process studies
2. **Tech Transfer:** Scale-up from lab/pilot to commercial scale, parameters refined
3. **Validation:** Process Performance Qualification (PPQ) batches manufactured using draft MBR
4. **Final MBR:** Incorporates learnings from validation, becomes approved version
5. **Approval Chain:** Author → SME Review → QA Review → Final Approval (often requiring multiple departments)
6. **Effective Date:** Date when MBR becomes official for manufacturing
7. **Change Control:** Any modifications require formal change control per 21 CFR 211.100
8. **Superseded:** When new version approved, old version marked superseded
9. **Archive:** Retained per record retention requirements (typically 5-7 years post-supersession)

### 1.3 Version Control Requirements

Each MBR must have:

* **Unique identifier:** MBR number/code

* **Version number:** Sequential (v1.0, v2.0) or date-based (2024-01)

* **Effective date:** When this version becomes active

* **Supersedes:** Previous version reference

* **Revision history:** Table showing all changes, dates, and reasons

**Example Version Control Table:**

| Version | Effective Date | Description of Changes                                             | Change Control # | Approved By |
| ------- | -------------- | ------------------------------------------------------------------ | ---------------- | ----------- |
| 1.0     | 15-MAR-2022    | Initial approved version                                           | N/A              | S. Martinez |
| 2.0     | 10-JUN-2023    | Updated blending time from 15 min to 20 min based on PV data       | CC-2023-0456     | S. Martinez |
| 2.1     | 05-JAN-2024    | Corrected typo in packaging material code (editorial change)       | CC-2023-0789     | S. Martinez |
| 3.0     | 20-APR-2024    | New supplier for Microcrystalline Cellulose, updated material code | CC-2024-0123     | S. Martinez |

### 1.4 Approval Requirements

**Multi-tier approval structure:**

| Role                      | Responsibility                                                             | Regulatory Basis        |
| ------------------------- | -------------------------------------------------------------------------- | ----------------------- |
| **Author**                | Writes the MBR content (usually Process Engineer or Formulation Scientist) | GDP requirement         |
| **Technical Reviewer**    | Verifies technical accuracy, process capability, safety                    | Internal requirement    |
| **Regulatory Affairs**    | Confirms alignment with marketing authorization                            | 21 CFR 314.70 (changes) |
| **Quality Assurance**     | Verifies GMP compliance, completeness, traceability                        | 21 CFR 211.22           |
| **Manufacturing Manager** | Confirms feasibility and resource availability                             | Operational requirement |
| **Final Approver**        | Executive authority (often QA Director or Plant Manager)                   | 21 CFR 211.186          |

**Regulatory Text (21 CFR 211.186):**
"Master production and control records shall be prepared, dated, and signed (unsigned signature) by one person and independently checked, dated, and signed by a second person."

This means **minimum two-person approval** (author + independent checker). Most companies use 3-5 approvers.

***

## 2. Header Section

The MBR header contains product identification and administrative information.

### 2.1 Product Identification

**Required Fields:**

| Field                              | Description                           | Example                          |
| ---------------------------------- | ------------------------------------- | -------------------------------- |
| **Product Name**                   | Full proprietary or generic name      | Atorvastatin Calcium Tablets     |
| **Strength**                       | API content per dosage unit           | 40 mg                            |
| **Dosage Form**                    | Physical form of product              | Film-coated tablets              |
| **Product Code**                   | Internal SKU or product identifier    | ATV-40-TAB                       |
| **NDC/Registration Number**        | National Drug Code (US) or equivalent | 12345-678-90                     |
| **Marketing Authorization Number** | NDA/ANDA number (US), MA number (EU)  | ANDA 123456                      |
| **Pharmacopeial Standard**         | USP, EP, BP, JP monograph reference   | USP Atorvastatin Calcium Tablets |

### 2.2 MBR Administrative Information

| Field               | Description                      | Example                                |
| ------------------- | -------------------------------- | -------------------------------------- |
| **MBR Number**      | Unique document identifier       | MBR-ATV-40-v12                         |
| **Version**         | Current version number           | Version 12.0                           |
| **Effective Date**  | Date this version becomes active | 01-FEB-2024                            |
| **Supersedes**      | Previous version being replaced  | Version 11.0 (effective 15-JUN-2023)   |
| **Page Count**      | Total pages in document          | Page 1 of 47                           |
| **Confidentiality** | Proprietary/confidential marking | CONFIDENTIAL - Proprietary Information |

### 2.3 Batch Size and Yield

| Field                           | Description                                 | Example                                            |
| ------------------------------- | ------------------------------------------- | -------------------------------------------------- |
| **Theoretical Batch Size**      | Intended final quantity                     | 250,000 tablets                                    |
| **Theoretical Yield (weight)**  | Expected total mass of finished product     | 90.00 kg                                           |
| **Number of Tablets per Batch** | If applicable                               | 250,000 tablets                                    |
| **Tablet Weight**               | Individual unit weight (target ± tolerance) | 360 mg ± 5%                                        |
| **Bulk Batch Size**             | Intermediate quantity (pre-compression)     | 92.50 kg (includes overage for compression losses) |

**Overage Justification:**
Manufacturing overages are added to compensate for expected losses during processing. Must be scientifically justified and approved by regulatory authorities.

**Example Overage Calculation:**

```
Finished product target: 250,000 tablets × 360 mg = 90.00 kg
Expected compression losses: 2.0%
Expected packaging losses: 0.5%
Total overage: 2.5%
Bulk batch size: 90.00 kg × 1.025 = 92.25 kg (rounded to 92.50 kg)
```

### 2.4 Product Specifications Summary

| Field                        | Description                                   | Example                                                                             |
| ---------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Shelf Life**               | Approved expiration period from manufacturing | 24 months                                                                           |
| **Storage Conditions**       | Temperature, humidity, light protection       | Store at 20-25°C (68-77°F); excursions permitted to 15-30°C. Protect from moisture. |
| **Container Closure System** | Primary and secondary packaging               | Bottles: HDPE, child-resistant closure, 30 or 90 count                              |
| **Label Claim**              | What appears on product label                 | Each tablet contains 40 mg atorvastatin (as calcium salt)                           |

### 2.5 Approval Signature Block

**Example Format:**

```
APPROVALS:

Prepared by: _________________ Date: _______
              John Smith, Process Engineer

Reviewed by: _________________ Date: _______
              Maria Garcia, Senior Scientist

Reviewed by: _________________ Date: _______
              David Lee, Regulatory Affairs Manager

Approved by: _________________ Date: _______
              Sarah Martinez, QA Director

Final Authorization: _________________ Date: _______
                     Robert Johnson, VP Operations
```

**Electronic signature equivalent:** Each approver's digital signature with timestamp, complying with 21 CFR Part 11.

***

## 3. Bill of Materials (BOM)

The BOM lists all materials required to manufacture the batch, with precise specifications.

### 3.1 BOM Structure and Content

**Required Information for Each Material:**

1. **Material Name:** Common/usual name (generic or trade name)
2. **Material Grade:** USP, EP, NF, FCC, or proprietary specification
3. **Internal Material Code:** Company's inventory/procurement code
4. **Function:** Role in formulation (active, binder, filler, etc.)
5. **Quantity per Batch:** Amount required (with units)
6. **Unit of Measure:** kg, g, mg, L, mL
7. **Percentage of Total:** Optional, useful for review
8. **Reference Standard:** Compendial monograph or internal specification number
9. **Approved Supplier(s):** Qualified supplier list reference

### 3.2 Example Bill of Materials: Atorvastatin Calcium Tablets 40 mg

**Batch Size:** 250,000 tablets (90.00 kg finished product)

| Item   | Material Name                   | Material Code | Grade    | Function                         | Quantity per Batch | Unit   | % w/w        | Specification Ref              |
| ------ | ------------------------------- | ------------- | -------- | -------------------------------- | ------------------ | ------ | ------------ | ------------------------------ |
| 1      | Atorvastatin Calcium Trihydrate | API-001-ATV   | In-house | Active Pharmaceutical Ingredient | 43.37              | kg     | 46.88%       | SPEC-API-001                   |
| 2      | Microcrystalline Cellulose      | EXC-015-MCC   | USP/NF   | Filler, binder                   | 25.00              | kg     | 27.03%       | USP Microcrystalline Cellulose |
| 3      | Lactose Monohydrate             | EXC-022-LAC   | USP/NF   | Filler, diluent                  | 15.00              | kg     | 16.22%       | USP Lactose Monohydrate        |
| 4      | Croscarmellose Sodium           | EXC-008-CCS   | USP/NF   | Disintegrant                     | 2.50               | kg     | 2.70%        | USP Croscarmellose Sodium      |
| 5      | Colloidal Silicon Dioxide       | EXC-033-SiO2  | USP/NF   | Glidant                          | 0.50               | kg     | 0.54%        | USP Colloidal Silicon Dioxide  |
| 6      | Magnesium Stearate              | EXC-028-MgSt  | USP/NF   | Lubricant                        | 0.90               | kg     | 0.97%        | USP Magnesium Stearate         |
| 7      | Purified Water                  | WFI-001       | USP      | Processing aid (granulation)     | 12.00              | kg     | Not retained | USP Purified Water             |
| <br /> | <br />                          | <br />        | <br />   | **Subtotal (Core Tablet)**       | **87.27**          | **kg** | <br />       | <br />                         |

**Film Coating Materials (Applied after core tablet compression):**

| Item   | Material Name                    | Material Code | Grade       | Function             | Quantity per Batch | Unit   | Specification Ref  |
| ------ | -------------------------------- | ------------- | ----------- | -------------------- | ------------------ | ------ | ------------------ |
| 8      | Opadry II White (coating premix) | COAT-012-OPD  | Proprietary | Film former, pigment | 2.70               | kg     | SPEC-COAT-012      |
| 9      | Purified Water                   | WFI-001       | USP         | Coating solvent      | 7.00               | kg     | USP Purified Water |
| <br /> | <br />                           | <br />        | <br />      | **Coating Total**    | **9.70**           | **kg** | <br />             |
| <br /> | <br />                           | <br />        | <br />      | **GRAND TOTAL**      | **97.00**          | **kg** | <br />             |

**Notes:**

1. Atorvastatin Calcium Trihydrate quantity includes 8.4% overage to compensate for API assay variability (target: 40.00 kg anhydrous basis)
2. Purified Water is a processing aid removed during drying; not part of final product weight
3. All materials must be released by Quality Control (QC) with valid Analytical Report (AR) before use
4. Approved suppliers listed in Approved Supplier List ASL-2024-001

### 3.3 Material-Specific Requirements

For each material, the MBR or supporting documents must specify:

**For APIs:**

* Polymorphic form (if applicable) - e.g., "Atorvastatin Calcium Trihydrate, Form I"

* Particle size distribution (if critical)

* Moisture content acceptance range

* Retest or expiry date requirements

* Storage conditions (refrigerated, controlled room temperature)

**For Excipients:**

* Compendial grade (USP, EP, JP) or proprietary spec

* Type/grade specifications - e.g., "Microcrystalline Cellulose PH-102"

* Particle size (if critical for flow or dissolution)

* Functional characteristics (e.g., viscosity grade for polymers)

**For Packaging Materials:**

* Material specifications (HDPE bottle, aluminum blister)

* Regulatory compliance (FDA food contact, EU 10/2011)

* Artwork specifications for printed components

* Functional testing results (moisture barrier, child resistance)

### 3.4 Overage Policy

**Regulatory Expectation (FDA):**
Overages of active ingredients are generally not acceptable unless scientifically justified and disclosed in the NDA/ANDA. Acceptable justifications include:

* Degradation during manufacturing (e.g., heat-labile APIs)

* Assay variability of the API (e.g., API is 95-105%, so batch calculation adjusts)

* Loss during processing (spray coating, compression losses)

**Documentation Required:**

* Calculation showing overage percentage

* Scientific justification (stability data, process validation data)

* Regulatory approval (in DMF, NDA, ANDA)

**Example - Atorvastatin Overage Justification:**

```
API Specification: Atorvastatin Calcium (anhydrous basis): 95.0% - 102.0%
Label Claim: 40 mg atorvastatin per tablet
Target: To ensure all tablets contain ≥40 mg even with API at lower limit of spec

Calculation:
If API is 95.0% pure: Need 40 mg / 0.95 = 42.11 mg API per tablet
If API is 102.0% pure: Need 40 mg / 1.02 = 39.22 mg API per tablet

Approach: Use midpoint assay value (98.5%) for batch calculation
Quantity per tablet: 40 mg / 0.985 = 40.61 mg

Overage: (40.61 - 40.00) / 40.00 × 100% = 1.5%

Additionally, 2% API overage added to account for losses during granulation and compression.
Total API overage: 3.5% (scientifically justified and approved in ANDA 123456)
```

***

## 4. Equipment List

The MBR must specify all major equipment required for manufacturing, including acceptance criteria for use.

### 4.1 Equipment Listing Requirements

For each piece of equipment, specify:

| Field                             | Description                                                             | Example                        |
| --------------------------------- | ----------------------------------------------------------------------- | ------------------------------ |
| **Equipment Name**                | Descriptive name                                                        | High Shear Granulator          |
| **Equipment ID**                  | Unique identifier (may use any qualified equipment with same ID prefix) | HSG-001, HSG-002, or HSG-003   |
| **Manufacturer/Model**            | Make and model number                                                   | Glatt WSG-200                  |
| **Capacity**                      | Working volume or capacity                                              | 200 kg working capacity        |
| **Product Contact Material**      | Material of construction for product contact surfaces                   | 316L stainless steel           |
| **Qualification Status Required** | IQ/OQ/PQ status required                                                | Must have valid PQ             |
| **Calibration Requirements**      | Critical instruments requiring calibration                              | Load cells calibrated annually |
| **Cleaning Requirements**         | Cleaning procedure reference                                            | Clean per SOP-MFG-015          |

### 4.2 Example Equipment List: Atorvastatin Tablets 40 mg

| Step             | Equipment Name                | Equipment ID              | Capacity                   | Qualification Req      | Cleaning Procedure    |
| ---------------- | ----------------------------- | ------------------------- | -------------------------- | ---------------------- | --------------------- |
| Dispensing       | Analytical Balance (Class II) | BAL-005 or BAL-006        | 50 kg, 0.01 kg readability | Calibration current    | Clean per SOP-MFG-001 |
| Sieving          | Oscillating Granulator        | OSC-003                   | 100 kg/hr throughput       | IQ/OQ current          | Clean per SOP-MFG-010 |
| Blending (Dry)   | V-Blender                     | VBL-010 or VBL-011        | 150 kg capacity            | PQ valid               | Clean per SOP-MFG-015 |
| Granulation      | High Shear Granulator         | HSG-001, HSG-002, HSG-003 | 200 kg working capacity    | PQ valid, validated NP | Clean per SOP-MFG-020 |
| Drying           | Fluid Bed Dryer               | FBD-008 or FBD-009        | 150 kg capacity            | PQ valid               | Clean per SOP-MFG-025 |
| Milling          | Conical Mill                  | MLR-012                   | 100 kg/hr throughput       | OQ valid               | Clean per SOP-MFG-030 |
| Blending (Final) | Bin Blender                   | BIN-020                   | 200 kg capacity            | PQ valid               | Clean per SOP-MFG-015 |
| Compression      | Rotary Tablet Press           | TPR-015 or TPR-016        | 400,000 tablets/hr         | PQ valid, validated NP | Clean per SOP-MFG-040 |
| Coating          | Coating Pan                   | CPF-007                   | 100 kg tablet capacity     | PQ valid               | Clean per SOP-MFG-045 |
| Packaging        | Bottle Filler                 | BTL-025                   | 150 bottles/min            | OQ valid               | Clean per SOP-MFG-050 |

**Abbreviations:**

* IQ: Installation Qualification

* OQ: Operational Qualification

* PQ: Performance Qualification

* NP: Normal Production (validated during ongoing production)

### 4.3 Equipment Verification Requirements

Before starting manufacturing, operators must verify:

1. **Equipment ID matches MBR specification** (or is listed as acceptable alternative)
2. **Calibration status is current** (check calibration label, due date not expired)
3. **Cleaning status is verified** (equipment is clean, clean label affixed, previous product cleared)
4. **Equipment logbook reviewed** (no open maintenance issues, last PQ date documented)
5. **Line clearance completed** (area and equipment free from previous product, confirmed by supervisor)

**Example Verification Documentation in Executed Batch Record:**

```
EQUIPMENT VERIFICATION - STEP 5: HIGH SHEAR GRANULATION

Equipment Used: HSG-002 (Glatt WSG-200)
Calibration Status: Load cells calibrated 15-SEP-2023, Due: 15-SEP-2024 ✓
Cleaning Status: Cleaned per SOP-MFG-020, Clean label affixed: Batch# CL-2024-0145 ✓
Equipment Logbook: Reviewed, no open maintenance items, PQ valid through 30-JUN-2024 ✓
Line Clearance: Completed by Production Supervisor M. Garcia, 12-JAN-2024 08:45 ✓

Verified by: J. Smith (Operator) Date: 12-JAN-2024 Time: 09:00
Supervisor: M. Garcia Date: 12-JAN-2024 Time: 09:05
```

***

## 5. Manufacturing Instructions (Step-by-Step)

This is the core of the MBR, providing detailed instructions for each manufacturing step.

### 5.1 Step Format and Required Elements

Each manufacturing step must include:

1. **Step Number:** Sequential numbering (1.0, 2.0, 2.1, 2.2, etc.)
2. **Step Title:** Brief description (e.g., "Wet Granulation")
3. **Equipment:** Specific equipment to use
4. **Materials:** Materials added in this step
5. **Process Parameters:** All critical and non-critical parameters with acceptable ranges
6. **Process Instructions:** Detailed, step-by-step actions
7. **In-Process Controls (IPC):** Tests performed, acceptance criteria
8. **Expected Yield/Output:** Theoretical yield with acceptable range
9. **Hold Time Limits:** Maximum time before next step (if applicable)
10. **Signature Requirements:** Operator and supervisor/verifier
11. **Safety/Environmental Controls:** Temperature, humidity, PPE, containment

### 5.2 Process Parameter Specification Format

**Format:** Parameter Name: Target Value (Acceptable Range) \[CPP indicator if applicable]

**Examples:**

* Temperature: 25°C (20-30°C)

* Mixing Time: 10 minutes (8-12 minutes)

* **Impeller Speed: 300 RPM (280-320 RPM) \[CPP]** ← Critical Process Parameter flagged

**Critical Process Parameters (CPPs):**

* Identified through process characterization studies (ICH Q8)

* Have direct impact on Critical Quality Attributes (CQAs)

* Must be monitored and controlled within tighter ranges

* Flagged in MBR for operator awareness

* Out-of-range CPP always requires deviation investigation

### 5.3 Example Manufacturing Steps: Atorvastatin Tablets 40 mg

#### **STEP 1.0: DISPENSING OF RAW MATERIALS**

**Objective:** Accurately weigh and dispense all raw materials required for the batch.

**Equipment:**

* Analytical Balance BAL-005 or BAL-006 (Class II, 50 kg capacity, 0.01 kg readability)

* Stainless steel containers (cleaned and labeled)

**Materials:** All materials per Bill of Materials (Section 3)

**Process Instructions:**

1.1 Verify all materials are released by QC (check for valid AR number on each material container).

1.2 For each material, perform the following:

* Record material name, material code, supplier lot number, AR number

* Tare weigh the dispensing container

* Dispense the required quantity per BOM

* Record gross weight, calculate net weight

* Verify net weight is within ±2.0% of target quantity

* Affix label to container: Material name, Batch number, Date, Dispenser signature

1.3 Independent verification: A second person must verify the identity and quantity of each material dispensed.

* Verify material identity (check label against dispensing record)

* Verify weight accuracy (check recorded weight against container)

* Sign verification column in dispensing record

1.4 Transfer all dispensed materials to manufacturing area.

**Acceptance Criteria:**

* All materials have valid QC release (AR numbers documented)

* All weights within ±2.0% of target quantities

* All materials labeled with batch number

* Independent verification completed (second signature present)

**Expected Yield:** 97.00 kg total materials dispensed (100% of BOM quantities)

**Hold Time:** Maximum 24 hours at controlled room temperature (20-25°C) before use in Step 2.0

**Signatures:**

* Dispensed by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

* Verified by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

***

#### **STEP 2.0: SIEVING AND PRE-BLENDING**

**Objective:** Sieve API and excipients to break up agglomerates and ensure uniform particle size distribution. Pre-blend sieved materials.

**Equipment:**

* Oscillating Granulator OSC-003 with 1.0 mm screen

* V-Blender VBL-010 or VBL-011 (150 kg capacity)

**Materials:**

* Atorvastatin Calcium Trihydrate (Item 1)

* Microcrystalline Cellulose (Item 2)

* Lactose Monohydrate (Item 3)

* Croscarmellose Sodium (Item 4) - Reserve 50% for Step 6.0 (extra-granular addition)

* Colloidal Silicon Dioxide (Item 5)

**Process Instructions:**

2.1 Pass each material through the oscillating granulator with 1.0 mm screen.

* Feed rate: Approximately 20-30 kg/hr (adjust to prevent overloading)

* Collect sieved material in clean stainless steel container

* Ensure all material passes through screen (no retained aggregates)

2.2 Load sieved materials into V-Blender in the following order:

* Microcrystalline Cellulose

* Lactose Monohydrate

* 50% of Croscarmellose Sodium (1.25 kg - reserve remainder)

* Colloidal Silicon Dioxide

* Atorvastatin Calcium Trihydrate (add last to minimize API exposure)

2.3 Close blender and mix:

* **Blending Speed: 12 RPM (10-15 RPM)**

* **Blending Time: 15 minutes (12-18 minutes)**

* Temperature: Ambient (monitor, should remain 20-25°C)

2.4 Discharge blended material into clean, labeled container.

**In-Process Control (IPC):**

* **IPC-01: Blend Uniformity (API Content)**

  * Sample: Collect 10 samples from different locations (top, middle, bottom, sides)

  * Test Method: HPLC per SOP-QC-105

  * Acceptance Criteria: RSD ≤ 5.0%, all individual samples 95.0% - 105.0% of target

  * Action if Fail: Continue blending in 5-minute increments, retest until pass

**Expected Yield:** 86.12 kg blended material (98.0% - 102.0% of theoretical)

**Hold Time:** Use immediately in Step 3.0 (maximum hold 4 hours at 20-25°C, 30-50% RH)

**Signatures:**

* Performed by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

* Verified by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

***

#### **STEP 3.0: WET GRANULATION**

**Objective:** Form granules by adding purified water to the powder blend using high shear granulation, achieving optimal granule characteristics for compression.

**Equipment:**

* High Shear Granulator HSG-001, HSG-002, or HSG-003 (200 kg working capacity)

* Impeller and chopper with validated settings

**Materials:**

* Pre-blended material from Step 2.0 (approximately 86 kg)

* Purified Water (Item 7): 12.00 kg (10.50 - 13.50 kg based on endpoint)

**Process Parameters (Critical Process Parameters marked \[CPP]):**

| Parameter               | Target                                         | Acceptable Range         | CPP        |
| ----------------------- | ---------------------------------------------- | ------------------------ | ---------- |
| **Impeller Speed**      | 300 RPM                                        | 280-320 RPM              | **\[CPP]** |
| **Chopper Speed**       | 1500 RPM                                       | 1400-1600 RPM            | **\[CPP]** |
| **Water Addition Rate** | 0.5 kg/min                                     | 0.4-0.6 kg/min           | No         |
| **Granulation Time**    | 5 minutes after water addition                 | 4-7 minutes              | No         |
| **Endpoint - Amperage** | 18-22 Amps                                     | N/A (endpoint criterion) | **\[CPP]** |
| **Endpoint - Visual**   | Moist granular mass, no free powder            | N/A (endpoint criterion) | No         |
| **Wet Massing Time**    | 3 minutes                                      | 2-4 minutes              | No         |
| **Batch Temperature**   | Monitor (typically 28-32°C during granulation) | Not to exceed 35°C       | No         |

**Process Instructions:**

3.1 Load pre-blended material from Step 2.0 into high shear granulator bowl.

3.2 Start impeller at 300 RPM (280-320 RPM).

3.3 Start chopper at 1500 RPM (1400-1600 RPM).

3.4 Begin adding Purified Water at 0.5 kg/min (0.4-0.6 kg/min) through spray nozzle.

* Record start time of water addition

* Monitor amperage continuously

3.5 **Granulation Endpoint Determination \[CPP]:**

* **Primary Endpoint:** Impeller amperage reaches 18-22 Amps

* **Secondary Endpoint:** Visual observation - formation of moist granular mass with no visible free powder

* **Typical water usage:** 11.0-12.5 kg (may vary batch-to-batch; endpoint is criterion, not water quantity)

* Stop water addition when endpoint reached; record total water added

3.6 Continue wet massing for 3 minutes (2-4 minutes) after water addition complete.

3.7 Stop impeller and chopper. Record end time.

3.8 Discharge wet granules into clean stainless steel trays lined with parchment paper.

**In-Process Control (IPC):**

* **IPC-02: Wet Granule Appearance**

  * Visual inspection: Moist, granular texture, no dry powder, no over-wetted clumps

  * Acceptance: Pass/Fail (visual assessment by trained operator)

  * Action if Fail: If under-granulated (dry powder visible), return to granulator and add water in 0.5 kg increments until endpoint. If over-granulated (large wet clumps), proceed to drying (will dry longer).

**Expected Yield:** 98.00 kg wet granules (95.0% - 105.0% of theoretical - includes water)

**Hold Time:** Use immediately in Step 4.0 (maximum hold 2 hours to prevent over-drying or microbial growth)

**Signatures:**

* Performed by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

* Verified by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

***

#### **STEP 4.0: DRYING (FLUID BED DRYER)**

**Objective:** Remove water from wet granules to achieve target moisture content for optimal compression characteristics.

**Equipment:**

* Fluid Bed Dryer FBD-008 or FBD-009 (150 kg capacity)

**Materials:**

* Wet granules from Step 3.0 (approximately 98 kg)

**Process Parameters:**

| Parameter                           | Target                                    | Acceptable Range           | CPP        |
| ----------------------------------- | ----------------------------------------- | -------------------------- | ---------- |
| **Inlet Air Temperature**           | 60°C                                      | 55-65°C                    | **\[CPP]** |
| **Product Temperature**             | Monitor (typically 40-45°C during drying) | Not to exceed 50°C         | **\[CPP]** |
| **Airflow Rate**                    | 2500 CFM                                  | 2300-2700 CFM              | No         |
| **Drying Time**                     | Approximately 45-60 minutes               | Until LOD endpoint reached | No         |
| **Endpoint - Loss on Drying (LOD)** | 2.0% - 4.0%                               | 2.0% - 4.0%                | **\[CPP]** |

**Process Instructions:**

4.1 Load wet granules into fluid bed dryer bowl (do not exceed 150 kg capacity).

4.2 Start airflow at 2500 CFM (2300-2700 CFM).

4.3 Set inlet air temperature to 60°C (55-65°C).

* Monitor product temperature continuously

* Product temperature should reach approximately 40-45°C

* **Do not exceed 50°C product temperature** (risk of API degradation)

4.4 Dry for approximately 45-60 minutes.

4.5 **Drying Endpoint Determination \[CPP]:**

* Sample granules every 15 minutes starting at 30 minutes

* Perform Loss on Drying (LOD) test per SOP-QC-110

* **Acceptance Criteria: LOD = 2.0% - 4.0%**

* When endpoint reached, stop drying

4.6 Cool granules in dryer with airflow (no heat) for 10 minutes.

4.7 Discharge dried granules into clean, labeled container. Cover to protect from moisture.

**In-Process Control (IPC):**

* **IPC-03: Loss on Drying (LOD)**

  * Test Method: USP <731> Loss on Drying, 105°C for 3 hours

  * Sampling: Collect 10 g sample from different locations in bowl

  * **Acceptance Criteria: 2.0% - 4.0%**

  * Action if Fail: If LOD >4.0%, continue drying in 10-minute increments and retest. If LOD <2.0%, document but proceed (over-drying may impact compressibility; note for evaluation).

**Expected Yield:** 87.00 kg dried granules (85.0% - 91.0% of theoretical - water removed)

**Hold Time:** Maximum 48 hours at controlled room temperature (20-25°C), protected from moisture

**Signatures:**

* Performed by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

* Verified by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

***

#### **STEP 5.0: MILLING (SIZE REDUCTION)**

**Objective:** Mill dried granules through a screen to break up large agglomerates and achieve uniform particle size distribution suitable for compression.

**Equipment:**

* Conical Mill MLR-012 with 1.5 mm screen

**Materials:**

* Dried granules from Step 4.0 (approximately 87 kg)

**Process Parameters:**

| Parameter       | Target   | Acceptable Range |
| --------------- | -------- | ---------------- |
| **Screen Size** | 1.5 mm   | 1.5 mm (fixed)   |
| **Mill Speed**  | 800 RPM  | 700-900 RPM      |
| **Feed Rate**   | 30 kg/hr | 20-40 kg/hr      |

**Process Instructions:**

5.1 Install 1.5 mm screen in conical mill. Verify screen integrity (no holes or damage).

5.2 Set mill speed to 800 RPM (700-900 RPM).

5.3 Feed dried granules through mill at approximately 30 kg/hr (20-40 kg/hr).

* Do not overload mill (adjust feed rate if material backs up)

5.4 Collect milled granules in clean, labeled container.

**In-Process Control (IPC):**

* **IPC-04: Granule Particle Size Distribution**

  * Test Method: Sieve analysis per SOP-QC-115

  * Sampling: Collect 100 g composite sample

  * **Acceptance Criteria:**

    * Retained on 20 mesh (850 µm): ≤10%

    * Passed through 100 mesh (150 µm): ≤30%

    * Bulk density: 0.45-0.55 g/mL

  * Action if Fail: If >10% retained on 20 mesh, remill through same screen. If particle size too fine (>30% through 100 mesh), note for evaluation (may impact flow).

**Expected Yield:** 86.50 kg milled granules (98.0% - 102.0% of theoretical)

**Hold Time:** Maximum 72 hours at controlled room temperature (20-25°C), protected from moisture

**Signatures:**

* Performed by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

* Verified by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

***

#### **STEP 6.0: FINAL BLENDING (LUBRICATION)**

**Objective:** Blend milled granules with extra-granular excipients (disintegrant and lubricant) to prepare final blend for compression.

**Equipment:**

* Bin Blender BIN-020 (200 kg capacity) with intensifier bar

**Materials:**

* Milled granules from Step 5.0 (approximately 86.5 kg)

* Croscarmellose Sodium (Item 4) - remaining 50% (1.25 kg) reserved from Step 2.0

* Magnesium Stearate (Item 6) - 0.90 kg

**Process Parameters:**

| Parameter                            | Target     | Acceptable Range | CPP        |
| ------------------------------------ | ---------- | ---------------- | ---------- |
| **Blending Speed (Pre-lubrication)** | 10 RPM     | 8-12 RPM         | No         |
| **Blending Time (Pre-lubrication)**  | 10 minutes | 8-12 minutes     | No         |
| **Blending Speed (Lubrication)**     | 10 RPM     | 8-12 RPM         | No         |
| **Blending Time (Lubrication)**      | 5 minutes  | 4-6 minutes      | **\[CPP]** |

**Process Instructions:**

6.1 Load milled granules from Step 5.0 into bin blender.

6.2 Add Croscarmellose Sodium (1.25 kg - extra-granular portion).

6.3 Blend at 10 RPM (8-12 RPM) for 10 minutes (8-12 minutes).

6.4 Stop blender. Add Magnesium Stearate (0.90 kg).

6.5 **Lubrication blending \[CPP]:**

* Blend at 10 RPM (8-12 RPM) for **5 minutes (4-6 minutes)**

* **Critical:** Do not over-blend after magnesium stearate addition (over-lubrication reduces tablet hardness and dissolution)

* Record exact blending time

6.6 Discharge final blend into clean, labeled container. Cover to protect from moisture and light.

**In-Process Control (IPC):**

* **IPC-05: Final Blend Uniformity (API Content)**

  * Sample: Collect 10 samples from different locations (beginning, middle, end of discharge)

  * Test Method: HPLC per SOP-QC-105

  * **Acceptance Criteria:** RSD ≤ 5.0%, all individual samples 95.0% - 105.0% of target (40 mg per 360 mg blend equivalent)

  * Action if Fail: If RSD >5.0%, re-blend for 5 minutes and retest.

* **IPC-06: Bulk Density and Tapped Density**

  * Test Method: USP <616> Bulk and Tapped Density

  * **Acceptance Criteria:**

    * Bulk Density: 0.50-0.60 g/mL

    * Tapped Density: 0.60-0.70 g/mL

  * Information only (for process monitoring)

**Expected Yield:** 88.65 kg final blend (97.0% - 103.0% of theoretical)

**Hold Time:** Use within 24 hours (magnesium stearate may cause time-dependent changes). Store at 20-25°C, protected from moisture and light.

**Signatures:**

* Performed by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

* Verified by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

***

#### **STEP 7.0: COMPRESSION (TABLET PRESSING)**

**Objective:** Compress final blend into tablets meeting weight, thickness, hardness, and appearance specifications.

**Equipment:**

* Rotary Tablet Press TPR-015 or TPR-016 (400,000 tablets/hr capacity)

* Tooling: Round, biconvex, 10 mm diameter punches, "ATV 40" debossing on one side

**Materials:**

* Final blend from Step 6.0 (approximately 88.65 kg)

**Process Parameters:**

| Parameter             | Target                    | Acceptable Range                      | CPP        |
| --------------------- | ------------------------- | ------------------------------------- | ---------- |
| **Tablet Weight**     | 360 mg                    | 342-378 mg (±5%)                      | **\[CPP]** |
| **Tablet Hardness**   | 12 kP                     | 10-15 kP                              | **\[CPP]** |
| **Tablet Thickness**  | 4.0 mm                    | 3.8-4.2 mm                            | No         |
| **Compression Force** | 15 kN                     | 12-18 kN (adjust to achieve hardness) | No         |
| **Turret Speed**      | 40 RPM                    | 35-45 RPM                             | No         |
| **Feeder Speed**      | Adjust to maintain weight | Variable (adjust as needed)           | No         |

**Process Instructions:**

7.1 Install tooling (10 mm round, biconvex punches with "ATV 40" deboss). Verify tooling identification and condition (no cracks, chips, or excessive wear).

7.2 Load final blend into tablet press hopper.

7.3 Perform pre-compression setup:

* Set turret speed to 40 RPM (35-45 RPM)

* Adjust compression force to approximately 15 kN (starting point)

* Adjust feeder speed to target 360 mg tablet weight

7.4 Run tablets and perform **start-up IPC testing** (IPC-07) on first 100 tablets:

* Tablet weight (20 tablets)

* Tablet hardness (10 tablets)

* Tablet thickness (10 tablets)

* Friability (20 tablets)

* Disintegration (6 tablets)

* Appearance (all tablets)

* **Acceptance Criteria:** Must meet all in-process specifications before proceeding to full production

7.5 If start-up IPC fails, adjust parameters (compression force, feeder speed) and retest until all criteria met.

7.6 Once start-up IPC passes, proceed with full production.

7.7 **During production, perform ongoing IPC testing** every 15 minutes or 50,000 tablets (whichever is sooner):

* Tablet weight (10 tablets)

* Tablet hardness (5 tablets)

* Tablet thickness (5 tablets)

* **Document all results in IPC log**

7.8 If any ongoing IPC fails during production:

* Stop compression

* Adjust parameters

* Segregate tablets produced since last passing IPC

* Retest to verify correction

* Document as deviation if out-of-specification tablets produced

7.9 At completion of compression, perform **end-of-run IPC testing** (same as start-up).

7.10 Collect compressed tablets (core tablets, uncoated) in clean, labeled containers.

**In-Process Controls (IPC):**

**IPC-07: Tablet In-Process Testing**

| Test               | Test Method                 | Acceptance Criteria                                                                       | Frequency                                                   |
| ------------------ | --------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Weight**         | USP <2091> Weight Variation | 360 mg ± 5% (342-378 mg); Individual: ±7.5%; RSD ≤3%                                      | Start-up (20 tabs), Ongoing (10 tabs/15 min), End (20 tabs) |
| **Hardness**       | Tablet hardness tester      | 10-15 kP                                                                                  | Start-up (10 tabs), Ongoing (5 tabs/15 min), End (10 tabs)  |
| **Thickness**      | Caliper or thickness gauge  | 3.8-4.2 mm                                                                                | Start-up (10 tabs), Ongoing (5 tabs/15 min), End (10 tabs)  |
| **Friability**     | USP <1216> Friability       | ≤1.0% weight loss                                                                         | Start-up, End (20 tablets, 100 rotations, 4 minutes)        |
| **Disintegration** | USP <701> Disintegration    | ≤30 minutes in water at 37°C                                                              | Start-up, End (6 tablets)                                   |
| **Appearance**     | Visual inspection           | Round, biconvex, white to off-white, "ATV 40" debossing clear, no chips/cracks/lamination | Continuous (100% by operator), formal at start/end          |

**Expected Yield:** 250,000 tablets (90.00 kg) - Yield: 97.0% - 103.0% of theoretical

**Hold Time:** Maximum 7 days at controlled room temperature (20-25°C), protected from light and moisture, before coating

**Signatures:**

* Performed by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

* Verified by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

***

#### **STEP 8.0: FILM COATING**

**Objective:** Apply film coating to core tablets for appearance, taste masking, and moisture protection.

**Equipment:**

* Coating Pan CPF-007 (100 kg tablet capacity)

* Spray guns with validated settings

**Materials:**

* Core tablets from Step 7.0 (250,000 tablets, approximately 90 kg)

* Coating suspension: Opadry II White (2.70 kg) + Purified Water (7.00 kg)

**Process Parameters:**

| Parameter                    | Target                      | Acceptable Range                  | CPP        |
| ---------------------------- | --------------------------- | --------------------------------- | ---------- |
| **Inlet Air Temperature**    | 60°C                        | 55-65°C                           | No         |
| **Exhaust Air Temperature**  | 42°C                        | 38-46°C                           | **\[CPP]** |
| **Pan Speed**                | 8 RPM                       | 6-10 RPM                          | No         |
| **Spray Rate**               | 100 g/min                   | 80-120 g/min                      | No         |
| **Atomization Air Pressure** | 2.0 bar                     | 1.8-2.2 bar                       | No         |
| **Pattern Air Pressure**     | 1.5 bar                     | 1.3-1.7 bar                       | No         |
| **Coating Time**             | Approximately 60-90 minutes | Until target weight gain achieved | No         |
| **Target Weight Gain**       | 3.0%                        | 2.5%-3.5%                         | **\[CPP]** |

**Process Instructions:**

8.1 Prepare coating suspension:

* Add Opadry II White (2.70 kg) to Purified Water (7.00 kg) in clean mixing vessel

* Mix with overhead stirrer at 500 RPM for 30 minutes

* Strain suspension through 40-mesh screen to remove any undispersed particles

* Maintain suspension under gentle stirring during coating

8.2 Load core tablets (90 kg) into coating pan CPF-007.

8.3 Start pan rotation at 8 RPM (6-10 RPM).

8.4 Set inlet air temperature to 60°C (55-65°C).

8.5 Preheat tablets for 5-10 minutes until exhaust air temperature reaches approximately 42°C (38-46°C).

8.6 Start spraying coating suspension:

* Spray rate: 100 g/min (80-120 g/min)

* Atomization air: 2.0 bar (1.8-2.2 bar)

* Pattern air: 1.5 bar (1.3-1.7 bar)

* **Monitor exhaust air temperature continuously; maintain 38-46°C \[CPP]**

8.7 **Coating Endpoint Determination:**

* **Target: 3.0% weight gain (2.5%-3.5%)**

* Measure weight gain every 20 minutes:

  * Sample 20 tablets

  * Calculate average weight

  * Weight gain % = \[(Coated weight - Core weight) / Core weight] × 100

* Stop spraying when target weight gain achieved

8.8 Continue drying in coating pan (no spray) for 10 minutes to ensure complete solvent evaporation.

8.9 Cool tablets by running pan with ambient air (no heat) for 10 minutes.

8.10 Discharge coated tablets into clean, labeled containers.

**In-Process Control (IPC):**

* **IPC-08: Coating Weight Gain and Appearance**

  * **Weight Gain:** Sample 20 tablets periodically. Acceptance: 2.5%-3.5%

  * **Appearance:** White to off-white, smooth, uniform coating, no logo bridging, no cracking

  * Action if Fail: If weight gain <2.5%, continue coating. If >3.5%, document (minor cosmetic impact only).

**Expected Yield:** 250,000 coated tablets (92.70 kg) - Yield: 98.0% - 102.0% of theoretical

**Hold Time:** Maximum 30 days at controlled room temperature (20-25°C), protected from light and moisture, before packaging

**Signatures:**

* Performed by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

* Verified by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

***

#### **STEP 9.0: PACKAGING (PRIMARY AND SECONDARY)**

**Objective:** Package coated tablets into bottles with child-resistant closures, apply labels, and package into cartons.

**Equipment:**

* Bottle Filling Line BTL-025 (150 bottles/min capacity)

* Automatic capper

* Label applicator

* Carton packer

**Materials:**

* Coated tablets from Step 8.0 (250,000 tablets)

* HDPE bottles (60 mL, white, round) - Material Code: PKG-015

* Child-resistant closures (33 mm, white) - Material Code: PKG-016

* Induction seal liners - Material Code: PKG-017

* Cotton coil desiccants - Material Code: PKG-018

* Labels (Atorvastatin 40 mg, 30-count, Artwork Version ATV-40-L-v5) - Material Code: PKG-020

* Cartons (printed, Artwork Version ATV-40-C-v5) - Material Code: PKG-025

* Package inserts (Patient Information Leaflet, Version PIL-ATV-v3) - Material Code: PKG-030

**Process Instructions:**

9.1 Verify all packaging materials are released by QC (check AR numbers).

9.2 Verify label and carton artwork versions match approved artwork per MBR.

9.3 Perform line clearance: Ensure packaging line is clear of previous product materials.

9.4 Load packaging components into respective stations on filling line.

9.5 Perform line setup and trial run:

* Set bottle fill count: 30 tablets per bottle

* Verify count accuracy (weigh 10 bottles, calculate tablet count)

* Verify label placement and readability

* Verify cap torque (torque tester: 10-15 in-lbs)

9.6 Once trial run passes, proceed with production packaging.

9.7 **Label Reconciliation (Critical GMP Requirement):**

* Record labels issued to line

* Record labels used (number of bottles produced × 1 label/bottle)

* Record labels returned to QA

* Record labels destroyed (damaged/misprinted)

* **Total must equal 100% (issued = used + returned + destroyed)**

9.8 Package sequence per bottle:

* Fill 30 tablets into bottle

* Insert cotton coil desiccant

* Apply induction seal liner

* Apply child-resistant cap (verify torque)

* Apply label

* Inspect: Weight, label placement, cap tightness, cleanliness

9.9 Secondary packaging:

* Place filled bottle + package insert into carton

* Close and seal carton

* Apply batch number and expiry date (ink-jet printer or label)

9.10 Collect finished packaged product in shipper cases (24 cartons per case).

**In-Process Control (IPC):**

* **IPC-09: Packaging Line Checks**

  * **Tablet count per bottle:** Sample 10 bottles/hour. Weigh to verify 30 ± 1 tablet. Acceptance: 29-31 tablets.

  * **Cap torque:** Sample 10 bottles/hour. Test with torque tester. Acceptance: 10-15 in-lbs.

  * **Label placement:** Visual inspection, 100% by operator. Acceptance: Label centered, readable, no wrinkles.

  * **Induction seal integrity:** Sample 10 bottles/hour. Peel test. Acceptance: Seal intact, no leaks.

**Label Reconciliation:**

| Description                    | Quantity              |
| ------------------------------ | --------------------- |
| Labels Issued                  | \_\_\_\_\_\_\_\_      |
| Labels Used (bottles produced) | \_\_\_\_\_\_\_\_      |
| Labels Returned                | \_\_\_\_\_\_\_\_      |
| Labels Destroyed               | \_\_\_\_\_\_\_\_      |
| **Total (must equal Issued)**  | \_\_\_\_\_\_\_\_      |
| **Reconciliation %**           | **100.0%** (required) |

Reconciliation verified by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_

**Expected Yield:** 8,333 bottles (250,000 tablets ÷ 30 tablets/bottle) = 8,333 cartons

**Signatures:**

* Performed by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

* Verified by: \_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_ Time: \_\_\_\_\_\_\_

***

## 6. Quality Control Specifications

The MBR must reference or include all quality control tests with acceptance criteria that will be performed on the finished batch.

### 6.1 Finished Product Testing Requirements

For each QC test, specify:

* Test name

* Test method (USP reference or internal SOP)

* Sampling plan

* Acceptance criteria

* Reference to Certificate of Analysis (CoA) template

### 6.2 Example QC Specifications: Atorvastatin Tablets 40 mg

**Finished Product Specification:** SPEC-FP-ATV-40-v8

| Test                                   | Method                                                                                    | Acceptance Criteria                                                                    | Regulatory Basis        |
| -------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------- |
| **Description**                        | Visual                                                                                    | White to off-white, round, biconvex film-coated tablets, debossed "ATV 40" on one side | USP General Chapter     |
| **Identification (API)**               | HPLC per USP Atorvastatin Tablets                                                         | Retention time of main peak matches reference standard                                 | USP Monograph           |
| **Assay (API Content)**                | HPLC per USP Atorvastatin Tablets                                                         | 90.0% - 110.0% of label claim (36.0 - 44.0 mg per tablet)                              | USP Monograph           |
| **Content Uniformity**                 | USP <905> Uniformity of Dosage Units                                                      | Acceptance Value (AV) ≤ 15.0                                                           | USP <905>               |
| **Dissolution**                        | USP <711> Dissolution, Apparatus 2 (Paddle), 75 RPM, 900 mL phosphate buffer pH 6.8, 37°C | Q = 80% in 30 minutes (NLT 80% dissolved)                                              | USP Monograph           |
| **Related Substances (Impurities)**    | HPLC per USP Atorvastatin Tablets                                                         | Any individual impurity: ≤0.5%; Total impurities: ≤2.0%                                | USP Monograph + ICH Q3B |
| **Water Content (Karl Fischer)**       | USP <921> Water Determination                                                             | ≤5.0%                                                                                  | In-house specification  |
| **Microbial Limits**                   | USP <61> Microbial Examination of Nonsterile Products: Microbial Enumeration Tests        | TAMC: ≤1000 CFU/g; TYMC: ≤100 CFU/g                                                    | USP <61>                |
| **Absence of Specific Microorganisms** | USP <62> Microbial Examination of Nonsterile Products: Tests for Specified Microorganisms | E. coli: Absent; Salmonella: Absent; S. aureus: Absent; P. aeruginosa: Absent          | USP <62>                |

**Additional Tests (at specified intervals):**

* **Stability Testing:** Per ICH Q1A/Q1B, ongoing stability program

* **Heavy Metals:** USP <231> (if required based on risk assessment)

### 6.3 Sampling Plan

**Finished Product Sampling (per 21 CFR 211.165):**

* Random sampling from different locations in batch

* Sufficient quantity for all tests plus retain sample

* Minimum 3× analytical test quantity + retain sample (typically 200-500 tablets)

**Retain Sample (per 21 CFR 211.170):**

* Store in original container closure system (1 bottle of 30 tablets)

* Store under labeled conditions (20-25°C)

* Retain for 1 year past expiry date

* Sufficient for 2× full analyses if needed

***

## 7. Packaging Instructions

The MBR includes detailed packaging specifications.

### 7.1 Primary Packaging Specifications

| Component          | Specification                    | Material Code | Supplier   | Acceptance Criteria                                     |
| ------------------ | -------------------------------- | ------------- | ---------- | ------------------------------------------------------- |
| **Bottle**         | 60 mL HDPE, white, round         | PKG-015       | Supplier A | FDA food contact approved, no defects                   |
| **Closure**        | 33 mm child-resistant cap, white | PKG-016       | Supplier A | Child-resistant per 16 CFR 1700.20, torque 10-15 in-lbs |
| **Induction Seal** | Foil liner, 33 mm                | PKG-017       | Supplier B | Peel strength 2-5 lbs                                   |
| **Desiccant**      | Cotton coil, 1 g                 | PKG-018       | Supplier C | Moisture absorption ≥10%                                |

### 7.2 Labeling Requirements

**Label Content (per 21 CFR 201):**

* Product name: Atorvastatin Calcium Tablets

* Strength: 40 mg

* Quantity: 30 tablets

* Lot number: \[Variable - printed during packaging]

* Expiry date: \[Variable - calculated as manufacturing date + 24 months]

* NDC: 12345-678-90

* Storage: Store at 20-25°C (68-77°F); excursions permitted to 15-30°C. Protect from moisture.

* Rx Only

* Manufacturer name and address

* Barcode

**Artwork Version:** Must match approved version in MBR (ATV-40-L-v5)

**Label Reconciliation:** 100% accountability required (see Section 5.3, Step 9.0)

### 7.3 Secondary Packaging

| Component          | Specification                       | Material Code |
| ------------------ | ----------------------------------- | ------------- |
| **Carton**         | Printed paperboard, Artwork v5      | PKG-025       |
| **Package Insert** | Patient Information Leaflet, PIL v3 | PKG-030       |

***

## 8. Signature Chain and Change History

### 8.1 Final Signature Block (Example)

This Master Batch Record has been reviewed and approved by the undersigned:

```
PREPARED BY:
Name: John Smith                Role: Process Engineer
Signature: _________________    Date: 15-JAN-2024

TECHNICAL REVIEW:
Name: Dr. Maria Garcia          Role: Senior Formulation Scientist  
Signature: _________________    Date: 18-JAN-2024

REGULATORY REVIEW:
Name: David Lee                 Role: Regulatory Affairs Manager
Signature: _________________    Date: 22-JAN-2024

QUALITY ASSURANCE REVIEW:
Name: Sarah Martinez            Role: QA Director
Signature: _________________    Date: 25-JAN-2024

FINAL APPROVAL:
Name: Robert Johnson            Role: VP Operations
Signature: _________________    Date: 30-JAN-2024

EFFECTIVE DATE: 01-FEB-2024
```

### 8.2 Change History Table

**Document:** MBR-ATV-40 (Atorvastatin Calcium Tablets 40 mg)

| Version | Effective Date | Sections Changed          | Description of Changes                                                     | Reason for Change                                                             | Change Control # | Approved By |
| ------- | -------------- | ------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ---------------- | ----------- |
| 1.0     | 15-MAR-2022    | N/A                       | Initial approved version                                                   | New product launch                                                            | N/A              | S. Martinez |
| 2.0     | 10-JUN-2023    | Step 2.0, Step 6.0        | Increased blending times (Step 2.0: 10→15 min; Step 6.0: 3→5 min)          | Process validation data showed improved blend uniformity with longer blending | CC-2023-0456     | S. Martinez |
| 2.1     | 05-JAN-2024    | Section 3 (BOM)           | Corrected material code for Microcrystalline Cellulose (EXC-015-MCC)       | Editorial correction (typographical error)                                    | CC-2023-0789     | S. Martinez |
| 3.0     | 20-APR-2024    | Section 3 (BOM), Step 1.0 | New supplier for Lactose Monohydrate, updated material code to EXC-022-LAC | Supplier qualification completed for cost reduction                           | CC-2024-0123     | S. Martinez |

***

## 9. Format Standards and Good Documentation Practice

### 9.1 MBR Formatting Requirements

**Layout:**

* **Font:** Arial or Times New Roman, 10-12 pt

* **Margins:** 1 inch on all sides

* **Page numbering:** "Page X of Y" on every page

* **Headers/Footers:** Document ID, version, effective date on every page

* **Section numbering:** Hierarchical (1.0, 1.1, 1.1.1)

**Tables:**

* Clear column headers

* Units specified in headers

* Borders for readability

**Signature blocks:**

* Clear fields for name, date, signature

* Electronic signature compliant with 21 CFR Part 11 if applicable

### 9.2 Clarity and Specificity

**Use:**

* Clear, unambiguous language

* Active voice ("Add 10 kg of material A" not "Material A should be added")

* Specific quantities with units

* Specific time ranges

* Specific equipment IDs

**Avoid:**

* Vague terms ("some," "approximately" without range)

* Undefined abbreviations (include glossary)

* Handwritten entries in MBR (all typed)

* Blank spaces that could be misinterpreted

### 9.3 Critical Parameters Identification

**Flag Critical Process Parameters (CPPs):**

* Use **bold**, \[CPP] designation, or highlighting

* Include justification in supporting documents

* Link to CQAs (Critical Quality Attributes)

**Example:**

```
Impeller Speed: 300 RPM (280-320 RPM) [CPP - controls granule size distribution, directly impacts dissolution]
```

### 9.4 Handling Changes to the MBR

**Per 21 CFR 211.100:**
"There shall be written procedures for production and process control designed to assure that the drug products have the identity, strength, quality, and purity they purport or are represented to possess. Such procedures shall include all requirements in this subpart. These written procedures, including any changes, shall be drafted, reviewed, and approved by the appropriate organizational units and reviewed and approved by the quality control unit."

**Change Control Process:**

1. **Identify need for change:** Process improvement, deviation trending, regulatory requirement
2. **Draft change:** Author creates revised MBR section(s)
3. **Impact assessment:** Evaluate impact on product quality, regulatory filing, validation status
4. **Approval:** Same approval chain as original MBR
5. **Regulatory notification:** Determine if change requires prior approval, supplement, or annual report (per 21 CFR 314.70)
6. **Implementation:** Training, effective date, supersede old version
7. **Archive:** Retain superseded version per retention policy

**Types of changes:**

* **Editorial (minor):** Typos, formatting, clarifications with no process impact - May use abbreviated review

* **Moderate:** Process parameter range adjustments within validated ranges - Requires full review, possible process validation

* **Major:** New equipment, new supplier, formulation change - Requires regulatory prior approval, revalidation

### 9.5 Version Control Best Practices

**Watermarking:**

* Draft versions: "DRAFT - Not for Production Use" watermark

* Superseded versions: "SUPERSEDED - Do Not Use" watermark

* Controlled distribution to prevent use of wrong version

**Electronic Document Management:**

* Store in validated document management system

* Access controls (only authorized personnel can edit)

* Audit trail of all changes

* Automatic version numbering

***

## 10. Supporting Documentation Referenced in MBR

The MBR should cross-reference supporting documents:

| Document Type                   | Purpose                                      | Example Reference                                 |
| ------------------------------- | -------------------------------------------- | ------------------------------------------------- |
| **Product Specification**       | Finished product acceptance criteria         | SPEC-FP-ATV-40-v8                                 |
| **Raw Material Specifications** | Acceptance criteria for each material        | SPEC-API-001 (Atorvastatin), SPEC-EXC-015 (MCC)   |
| **Analytical Methods**          | QC test procedures                           | SOP-QC-105 (HPLC Assay), USP Atorvastatin Tablets |
| **Manufacturing SOPs**          | Detailed operational procedures              | SOP-MFG-020 (High Shear Granulation)              |
| **Cleaning Procedures**         | Equipment cleaning validation                | SOP-MFG-015 (Blender Cleaning)                    |
| **Equipment Logs**              | Equipment maintenance and calibration        | Equipment Logbook HSG-002                         |
| **Process Validation Report**   | Validation data supporting MBR               | PV-ATV-40-2022-001                                |
| **Stability Data**              | Shelf life justification                     | Stability Study ATV-40-2022-LT                    |
| **Regulatory Filing**           | NDA/ANDA with approved manufacturing process | ANDA 123456                                       |
| **Approved Supplier List**      | Qualified suppliers for each material        | ASL-2024-001                                      |
| **Change Control Records**      | History of all MBR changes                   | CC-2023-0456, CC-2024-0123                        |

***

## 11. Regulatory Inspection Readiness

### 11.1 What Inspectors Look For in MBRs

**FDA Inspectors will verify:**

1. **MBR is approved and dated** by authorized persons (211.186)
2. **Two-person check** (author + independent reviewer)
3. **Version control** is clear (current version used in production)
4. **All required elements present** per 211.186 (formulation, equipment, instructions, controls)
5. **Changes are controlled** (change control documentation)
6. **MBR matches regulatory filing** (NDA/ANDA commitments)
7. **Critical parameters are identified and justified**
8. **MBR is clear enough for trained operator to execute without ambiguity**

**Common MBR Deficiencies (FDA 483 Observations):**

* Missing signature or date on approval page

* Vague instructions ("mix until uniform" - no time specified)

* Missing in-process controls or acceptance criteria

* Equipment not specified (generic "blender" instead of specific ID)

* Yield ranges not established

* MBR version used in production doesn't match approved version

* Changes made without change control

* Process parameters in MBR don't match validated ranges

### 11.2 MBR Review Checklist for QA

Before approving an MBR, QA should verify:

* [ ] Product identification complete and correct

* [ ] All materials listed with codes, grades, quantities

* [ ] All equipment listed with IDs and specifications

* [ ] All process steps numbered sequentially and logically

* [ ] All process parameters have target values and acceptable ranges

* [ ] Critical Process Parameters (CPPs) identified

* [ ] In-process controls specified with acceptance criteria

* [ ] Yield ranges specified for each step

* [ ] QC testing requirements complete with references

* [ ] Sampling plans defined

* [ ] Signature blocks present for each step

* [ ] Hold time limits specified where applicable

* [ ] Packaging instructions complete with reconciliation requirements

* [ ] Document control information complete (version, date, approvals)

* [ ] References to supporting documents correct

* [ ] Format follows company standards

* [ ] No ambiguous language or undefined terms

* [ ] Regulatory filing alignment confirmed

* [ ] Change control documentation attached (if revised version)

***

## 12. Conclusion

The Master Batch Record is the foundation document for pharmaceutical manufacturing. It translates formulation science, process development, and regulatory commitments into a clear, executable set of instructions that ensure consistent, high-quality production batch after batch.

**Key Principles:**

* **Completeness:** Every detail needed to manufacture the batch must be present

* **Clarity:** Instructions must be unambiguous and executable by trained operators

* **Accuracy:** All information must be technically correct and match regulatory filings

* **Control:** Version control and change control ensure the right MBR is always used

* **Compliance:** MBR structure and content must meet 21 CFR 211.186, EU GMP Chapter 4, and ICH Q7

**The MBR is not just a document - it is the legal and regulatory blueprint that defines how a pharmaceutical product must be made.**

***

***

# Part 3: Executed Batch Record Structure

## Document Purpose and Scope

This document provides comprehensive guidance on Executed Batch Record (EBR) structure, data recording requirements, good documentation practices, and common deficiencies for pharmaceutical manufacturing. The EBR (also called Batch Production Record or Batch Manufacturing Record) is the actual record created during manufacturing that documents what was done, by whom, when, and with what results.

**Target Audience:** Production operators, production supervisors, quality assurance batch record reviewers, manufacturing managers, and regulatory compliance professionals.

**Regulatory Basis:**

* FDA 21 CFR 211.188 (Batch production and control records)

* FDA 21 CFR 211.192 (Production record review)

* EU GMP Chapter 4 (Documentation)

* ICH Q7 Section 6 (Documentation and Records)

***

## 1. Executed Batch Record Overview

### 1.1 Definition and Purpose

**Executed Batch Record (EBR):** The actual manufacturing record created for a specific batch, documenting all activities, observations, test results, and deviations that occurred during production. The EBR is created by copying the Master Batch Record (MBR) and filling in actual values during manufacturing.

**Regulatory Text (21 CFR 211.188):**
"Batch production and control records shall be prepared for each batch of drug product produced and shall include complete information relating to the production and control of each batch."

**Purpose:**

* Document that the batch was manufactured according to the approved MBR

* Provide traceability from raw materials to finished product

* Record actual process parameters, test results, and observations

* Document deviations and investigations

* Enable QA review and batch release decision

* Provide evidence of GMP compliance for regulatory inspections

* Support investigations (complaints, recalls, stability failures)

### 1.2 EBR vs. MBR: Key Differences

| Aspect             | Master Batch Record (MBR)                         | Executed Batch Record (EBR)                       |
| ------------------ | ------------------------------------------------- | ------------------------------------------------- |
| **Purpose**        | Blueprint/template for manufacturing              | Actual record of what happened                    |
| **Content**        | Instructions, specifications, ranges              | Actual values, results, signatures                |
| **Timing**         | Created before manufacturing, approved in advance | Created during manufacturing, reviewed after      |
| **Changes**        | Requires formal change control                    | Cannot be changed (corrections only, per GDP)     |
| **Approval**       | Multi-level approval before use                   | QA approval after completion                      |
| **Batch-specific** | Applies to all batches of that product            | Unique to one specific batch                      |
| **Signatures**     | Approval signatures (before use)                  | Execution signatures (operators, supervisors, QA) |

### 1.3 EBR Lifecycle

```
MBR Approved → Batch Initiated → EBR Generated → Manufacturing Executed → 
Data Recorded → Deviations Documented → QC Testing → QA Review → 
Batch Release/Reject → Archive
```

**Timeline Example (Atorvastatin Tablets):**

* Day 0: Batch initiated, materials dispensed (Step 1.0)

* Day 1: Granulation, drying, milling (Steps 2.0-5.0)

* Day 2: Blending, compression, coating (Steps 6.0-8.0)

* Day 3: QC sampling, packaging (Step 9.0)

* Day 4-10: QC testing (7 days for micro testing)

* Day 11-15: QA batch record review, investigation of any issues

* Day 15: Batch approved for release (or rejected if failed)

### 1.4 Format: Paper vs. Electronic

**Paper Batch Records:**

* MBR is printed, becomes the EBR

* Operators fill in blanks with handwritten entries

* All entries must be legible, in permanent ink, dated, and signed

* Corrections per Good Documentation Practice (single line through, initial, date)

**Electronic Batch Records (EBR Systems):**

* MBR stored in validated software (e.g., Syncade, Werum PAS-X, DeltaV, Rockwell FactoryTalk)

* Operators enter data electronically via terminal or tablet

* Electronic signatures per 21 CFR Part 11

* Audit trails capture all data entry and modifications

* Must be able to generate complete, human-readable printout for QA review

**Hybrid Batch Records:**

* Some steps electronic (e.g., automated equipment generates data electronically)

* Some steps paper (e.g., manual operations like visual inspection)

* All components must be assembled for complete batch record review

***

## 2. Header Section (Filled During Execution)

The EBR header contains batch-specific identification filled in at batch initiation.

### 2.1 Batch Identification

**Required Fields:**

| Field                             | Data Source                           | Example                             | Recording Requirement                           |
| --------------------------------- | ------------------------------------- | ----------------------------------- | ----------------------------------------------- |
| **Batch Number**                  | Assigned per batch numbering SOP      | ATV40-2024-001234                   | Unique, non-repeating, must appear on all pages |
| **Product Name**                  | Pre-printed from MBR                  | Atorvastatin Calcium Tablets, 40 mg | Pre-printed (verification by operator)          |
| **Product Code**                  | Pre-printed from MBR                  | ATV-40-TAB                          | Pre-printed                                     |
| **MBR Reference**                 | Pre-printed from MBR                  | MBR-ATV-40-v12                      | Verify correct version in use                   |
| **Batch Size**                    | Pre-printed from MBR                  | 250,000 tablets                     | Pre-printed                                     |
| **Manufacturing Start Date**      | Recorded at batch initiation          | 12-JAN-2024                         | Date of first significant manufacturing step    |
| **Manufacturing Completion Date** | Recorded at end of Step 9.0           | 15-JAN-2024                         | Date of final manufacturing step                |
| **Expiry Date**                   | Calculated from mfg date + shelf life | 12-JAN-2026                         | Mfg date + 24 months (per stability)            |

**Batch Number Assignment:**

* Per company SOP (e.g., SOP-MFG-005 Batch Numbering)

* Must be unique across all products

* Format example: \[Product Code]-\[Year]-\[Sequential Number]

* Assigned by Production Supervisor or designee at batch initiation

* Recorded in Batch Logbook and on all batch record pages

### 2.2 Personnel and Shift Information

**Required Documentation:**

| Field                     | Purpose                                                     | Example                                |
| ------------------------- | ----------------------------------------------------------- | -------------------------------------- |
| **Production Supervisor** | Person responsible for overall batch execution              | Maria Garcia                           |
| **Shift(s)**              | Shift(s) during which batch was manufactured                | Day shift (7:00-15:00), 12-15 JAN 2024 |
| **Operators**             | All operators who worked on batch (list by step or overall) | J. Smith, K. Lee, R. Patel             |
| **QA Reviewer**           | QA person who reviewed and approved batch                   | Sarah Martinez                         |

### 2.3 Example EBR Header (Completed)

```
═══════════════════════════════════════════════════════════════════════════════
                        EXECUTED BATCH RECORD
                   ATORVASTATIN CALCIUM TABLETS, 40 MG
═══════════════════════════════════════════════════════════════════════════════

BATCH NUMBER: ATV40-2024-001234                    Page 1 of 85

PRODUCT: Atorvastatin Calcium Tablets, 40 mg
PRODUCT CODE: ATV-40-TAB
DOSAGE FORM: Film-coated tablets
BATCH SIZE: 250,000 tablets (90.00 kg)

MASTER BATCH RECORD REFERENCE: MBR-ATV-40-v12 (Effective Date: 01-FEB-2024)

DATES:
  Manufacturing Start Date: 12-JAN-2024
  Manufacturing Completion Date: 15-JAN-2024
  QC Testing Completion Date: 23-JAN-2024
  Expiry Date: 12-JAN-2026 (24 months from mfg date)

PERSONNEL:
  Production Supervisor: Maria Garcia       Signature: _____________ Date: 12-JAN-2024
  Primary Operator: Jason Smith            Signature: _____________ Date: 12-JAN-2024
  QA Reviewer: Sarah Martinez              Signature: _____________ Date: 28-JAN-2024

MANUFACTURING LOCATION: Building 5, Suite 200 (Class 100,000 cleanroom)

DEVIATIONS: [X] None  [ ] See attached Deviation Report(s) #: _____________

═══════════════════════════════════════════════════════════════════════════════
```

***

## 3. Material Dispensing Records

Material dispensing is typically the first executed step. It must document complete traceability of all materials used.

### 3.1 Required Information for Each Material

For each material used in the batch, record:

1. **Material Name** (pre-printed from MBR)
2. **Material Code** (pre-printed from MBR)
3. **Required Quantity** (pre-printed from MBR)
4. **Supplier Lot Number** (recorded from material container)
5. **Internal Lot/AR Number** (QC release number from CoA)
6. **QC Status** (must be "Approved" with valid AR number)
7. **Expiry/Retest Date** (from material label)
8. **Container ID** (if materials tracked by container)
9. **Tare Weight** (empty container weight)
10. **Gross Weight** (container + material weight)
11. **Net Weight** (gross - tare = actual quantity dispensed)
12. **Dispensed By** (operator signature and date)
13. **Verified By** (second person signature and date - independent check)

### 3.2 Example Material Dispensing Record

**STEP 1.0: DISPENSING OF RAW MATERIALS**

**Equipment Used:**

* Balance ID: BAL-005

* Calibration Due Date: 30-JUN-2025 ✓ (verified by operator)

* Calibration Status: CURRENT

**Materials Dispensed:**

| Item | Material Name                   | Material Code | Required Qty | Supplier Lot   | AR Number    | Expiry Date     | Tare (kg) | Gross (kg) | Net (kg)  | Dispensed By               | Verified By              |
| ---- | ------------------------------- | ------------- | ------------ | -------------- | ------------ | --------------- | --------- | ---------- | --------- | -------------------------- | ------------------------ |
| 1    | Atorvastatin Calcium Trihydrate | API-001-ATV   | 43.37 kg     | ATC-2023-1156  | AR-2023-4521 | 31-DEC-2025     | 2.15      | 45.54      | **43.39** | J. Smith 12-JAN-2024 09:15 | K. Lee 12-JAN-2024 09:20 |
| 2    | Microcrystalline Cellulose      | EXC-015-MCC   | 25.00 kg     | MCC-LOT-8876   | AR-2024-0012 | 30-JUN-2026     | 1.80      | 26.82      | **25.02** | J. Smith 12-JAN-2024 09:25 | K. Lee 12-JAN-2024 09:28 |
| 3    | Lactose Monohydrate             | EXC-022-LAC   | 15.00 kg     | LAC-4521-B     | AR-2024-0018 | 31-MAR-2026     | 1.50      | 16.48      | **14.98** | J. Smith 12-JAN-2024 09:35 | K. Lee 12-JAN-2024 09:37 |
| 4    | Croscarmellose Sodium           | EXC-008-CCS   | 2.50 kg      | CCS-98234      | AR-2023-4890 | 31-DEC-2025     | 0.45      | 2.96       | **2.51**  | J. Smith 12-JAN-2024 09:42 | K. Lee 12-JAN-2024 09:44 |
| 5    | Colloidal Silicon Dioxide       | EXC-033-SiO2  | 0.50 kg      | SiO2-7734      | AR-2024-0003 | 30-SEP-2026     | 0.25      | 0.75       | **0.50**  | J. Smith 12-JAN-2024 09:48 | K. Lee 12-JAN-2024 09:49 |
| 6    | Magnesium Stearate              | EXC-028-MgSt  | 0.90 kg      | MgSt-6623      | AR-2024-0008 | 30-APR-2026     | 0.30      | 1.20       | **0.90**  | J. Smith 12-JAN-2024 09:52 | K. Lee 12-JAN-2024 09:53 |
| 7    | Purified Water                  | WFI-001       | 12.00 kg     | BATCH-2024-011 | AR-2024-0105 | Use immediately | 1.00      | 13.05      | **12.05** | J. Smith 12-JAN-2024 09:58 | K. Lee 12-JAN-2024 10:00 |
| 8    | Opadry II White                 | COAT-012-OPD  | 2.70 kg      | OPD-55229      | AR-2024-0022 | 31-AUG-2025     | 0.40      | 3.11       | **2.71**  | J. Smith 12-JAN-2024 10:05 | K. Lee 12-JAN-2024 10:06 |

**Dispensing Verification:**
All materials verified as:

* ✓ Correct material identity (label checked against MBR)

* ✓ QC approved status (all AR numbers valid)

* ✓ Within expiry/retest date

* ✓ Quantities within ±2.0% of required amounts

**Supervisor Approval:**
All materials dispensed correctly and verified.

Supervisor: Maria Garcia    Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    Date: 12-JAN-2024    Time: 10:15

***

### 3.3 Material Reconciliation and Traceability

**Forward Traceability:** Ability to trace from raw material lot to finished product batch(es) using that material.

**Backward Traceability:** Ability to trace from finished product batch back to all raw material lots used.

**Example Traceability Statement in EBR:**
"This batch (ATV40-2024-001234) used Atorvastatin Calcium Trihydrate, Lot ATC-2023-1156, which was also used in batches ATV40-2024-001220 through ATV40-2024-001245."

**Documentation Requirements:**

* All material lot numbers recorded in EBR

* Cross-referenced in Material Lot Usage Log

* Enables rapid recall identification if needed (e.g., if supplier lot fails stability, all batches using that lot can be identified)

***

## 4. Equipment Usage Log

Before using equipment, operators must verify and document equipment status.

### 4.1 Equipment Verification Requirements

For each piece of equipment used, document:

1. **Equipment ID** (actual equipment used)
2. **Calibration Status** (due date verified, must be current)
3. **Cleaning Status** (clean label affixed, previous product cleared)
4. **Maintenance Status** (equipment logbook checked, no open issues)
5. **Qualification Status** (IQ/OQ/PQ current)
6. **Line Clearance** (area and equipment verified clear of previous materials)
7. **Verified By** (operator and supervisor signatures)

### 4.2 Example Equipment Verification Log

**STEP 3.0: WET GRANULATION - EQUIPMENT VERIFICATION**

**Equipment Used:** High Shear Granulator HSG-002 (Glatt WSG-200, 200 kg capacity)

**Pre-Use Verification:**

| Verification Item                   | Requirement                       | Status | Details                                               | Verified By            | Date/Time         |
| ----------------------------------- | --------------------------------- | ------ | ----------------------------------------------------- | ---------------------- | ----------------- |
| **Equipment ID**                    | HSG-001, 002, or 003 per MBR      | ✓ PASS | Using HSG-002                                         | J. Smith               | 12-JAN-2024 10:45 |
| **Calibration - Load Cells**        | Due date not expired              | ✓ PASS | Calibrated: 15-SEP-2023, Due: 15-SEP-2024             | J. Smith               | 12-JAN-2024 10:45 |
| **Calibration - Temperature Probe** | Due date not expired              | ✓ PASS | Calibrated: 10-DEC-2023, Due: 10-DEC-2024             | J. Smith               | 12-JAN-2024 10:45 |
| **Cleaning Status**                 | Equipment cleaned per SOP-MFG-020 | ✓ PASS | Clean label affixed: CL-2024-0145, Date: 11-JAN-2024  | J. Smith               | 12-JAN-2024 10:47 |
| **Equipment Logbook**               | No open maintenance items         | ✓ PASS | Last entry: Routine PM completed 08-JAN-2024          | J. Smith               | 12-JAN-2024 10:50 |
| **Qualification Status**            | PQ current                        | ✓ PASS | PQ-HSG-002-2023 valid through 30-JUN-2024             | J. Smith               | 12-JAN-2024 10:50 |
| **Line Clearance**                  | Previous product cleared          | ✓ PASS | No materials from previous batch present. Area clean. | M. Garcia (Supervisor) | 12-JAN-2024 10:55 |

**Equipment Status:** APPROVED FOR USE

**Operator:** J. Smith    Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    Date: 12-JAN-2024    Time: 10:55

**Supervisor:** M. Garcia    Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    Date: 12-JAN-2024    Time: 11:00

***

**POST-USE DOCUMENTATION:**

**Cleaning Performed:** Equipment cleaned per SOP-MFG-020 immediately after use.

Clean Label Affixed: CL-2024-0146

Cleaned By: J. Smith    Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    Date: 12-JAN-2024    Time: 14:30

Verified By: M. Garcia    Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    Date: 12-JAN-2024    Time: 14:35

***

### 4.3 Line Clearance Documentation

**Line Clearance:** Verification that manufacturing area and equipment are clear of all materials, documents, and labels from previous operations before starting a new batch.

**Purpose:** Prevent cross-contamination and mix-ups.

**Per 21 CFR 211.182:**
"Equipment and utensils shall be cleaned, maintained, and, as appropriate for the nature of the drug, sanitized and/or sterilized at appropriate intervals to prevent malfunctions or contamination that would alter the safety, identity, strength, quality, or purity of the drug product."

**Line Clearance Checklist (Example):**

```
LINE CLEARANCE CHECKLIST - BATCH ATV40-2024-001234, STEP 3.0

Date: 12-JAN-2024    Time: 10:55    Area: Granulation Suite 200

CHECKED BY: Maria Garcia (Production Supervisor)

Item                                                              Status
─────────────────────────────────────────────────────────────────────────
[ ✓ ] Area is clean and free of debris                           PASS
[ ✓ ] No materials from previous batch present                   PASS
[ ✓ ] No labels from previous batch present                      PASS
[ ✓ ] No documents from previous batch present                   PASS
[ ✓ ] Equipment (HSG-002) has clean label affixed                PASS
[ ✓ ] Previous batch record removed from area                    PASS
[ ✓ ] All personnel are trained and qualified for this operation PASS
[ ✓ ] Correct MBR version is available for reference             PASS (v12)

LINE CLEARANCE STATUS: APPROVED TO PROCEED

Supervisor: M. Garcia    Signature: _______________    Date: 12-JAN-2024
```

***

## 5. Process Execution Records

For each manufacturing step, operators record actual parameter values and observations.

### 5.1 Required Data for Each Step

1. **Start Date and Time**
2. **End Date and Time**
3. **Actual Process Parameters** (temperatures, speeds, times, pressures - all values within ranges)
4. **Deviations from MBR** (if any parameter out of range, document as deviation)
5. **Observations** (visual appearance, any unusual events)
6. **Equipment Used** (actual ID numbers)
7. **Environmental Conditions** (temperature, humidity if critical)
8. **Operator Signature and Date**
9. **Supervisor Signature and Date** (independent verification)

### 5.2 Example Process Execution Record

**STEP 3.0: WET GRANULATION**

**Objective:** Form granules by adding purified water to powder blend using high shear granulation.

**Equipment Used:** High Shear Granulator HSG-002

**Materials:**

* Pre-blended material from Step 2.0: **86.20 kg** (actual yield from Step 2.0)

* Purified Water (Item 7): 12.05 kg available (target 10.50 - 13.50 kg based on endpoint)

**Process Execution:**

| Process Parameter                        | Specification (from MBR)    | Actual Value Recorded   | Within Spec?                |
| ---------------------------------------- | --------------------------- | ----------------------- | --------------------------- |
| **Impeller Speed \[CPP]**                | 300 RPM (280-320 RPM)       | **295 RPM**             | ✓ YES                       |
| **Chopper Speed \[CPP]**                 | 1500 RPM (1400-1600 RPM)    | **1485 RPM**            | ✓ YES                       |
| **Water Addition Start Time**            | N/A                         | **12-JAN-2024 11:15**   | N/A                         |
| **Water Addition Rate**                  | 0.5 kg/min (0.4-0.6 kg/min) | **0.48 kg/min**         | ✓ YES                       |
| **Total Water Added**                    | 11.0-12.5 kg typical        | **11.85 kg**            | N/A (endpoint is criterion) |
| **Water Addition End Time**              | N/A                         | **12-JAN-2024 11:40**   | N/A                         |
| **Impeller Amperage at Endpoint \[CPP]** | 18-22 Amps                  | **20.2 Amps**           | ✓ YES                       |
| **Wet Massing Time**                     | 3 min (2-4 min)             | **3 minutes**           | ✓ YES                       |
| **Wet Massing Start Time**               | N/A                         | **12-JAN-2024 11:40**   | N/A                         |
| **Wet Massing End Time**                 | N/A                         | **12-JAN-2024 11:43**   | N/A                         |
| **Batch Temperature During Granulation** | Monitor, not to exceed 35°C | **31°C (max observed)** | ✓ YES                       |
| **Step Start Time**                      | N/A                         | **12-JAN-2024 11:10**   | N/A                         |
| **Step End Time**                        | N/A                         | **12-JAN-2024 11:50**   | N/A                         |

**Granulation Endpoint Determination:**

* Primary endpoint (amperage 18-22 Amps) achieved at 11:40 ✓

* Secondary endpoint (visual - moist granular mass, no free powder) confirmed ✓

**Visual Observations:**
Wet granules appeared uniform, moist, and granular with no visible dry powder or over-wetted clumps. Texture consistent with previous batches. Color: off-white, uniform.

**Deviations:** \[ ✓ ] None    \[ ] See Deviation Report #: \_\_\_\_\_\_\_\_

**Actual Yield:** 98.20 kg wet granules

**Theoretical Yield:** 98.00 kg

**Actual Yield %:** (98.20 / 98.00) × 100 = **100.2%**

**Yield Acceptance Criteria:** 95.0% - 105.0% ✓ PASS

**Operator:** J. Smith    Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    Date: 12-JAN-2024    Time: 11:50

**Supervisor:** M. Garcia    Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    Date: 12-JAN-2024    Time: 11:55

**Hold Status:** Wet granules transferred immediately to fluid bed dryer (Step 4.0) at 12:05 (within 2-hour hold time limit).

***

### 5.3 Environmental Monitoring

For operations requiring controlled environmental conditions, document:

**Example Environmental Monitoring Record:**

```
ENVIRONMENTAL MONITORING - STEP 3.0 (GRANULATION SUITE 200)

Room Classification: ISO Class 8 (Class 100,000)

| Parameter | Specification | Recorded Value | Within Spec? | Time | Recorded By |
|-----------|---------------|----------------|--------------|------|-------------|
| Temperature | 20-25°C | 22°C | ✓ YES | 11:10 | J. Smith |
| Relative Humidity | 30-50% | 42% | ✓ YES | 11:10 | J. Smith |
| Room Pressure (differential) | +5 to +15 Pa vs. corridor | +10 Pa | ✓ YES | 11:10 | J. Smith |
| Particle Count (0.5 µm) | ≤100,000 particles/ft³ | 85,230 | ✓ YES | 11:10 | J. Smith |

All environmental parameters within acceptable limits during operation.

Verified by Supervisor: M. Garcia    Signature: _______________    Date: 12-JAN-2024
```

***

## 6. In-Process Control (IPC) Results

IPCs are tests performed during manufacturing to verify process is under control.

### 6.1 IPC Documentation Requirements

For each IPC test, record:

1. **IPC Test Name and Number** (e.g., IPC-03: Loss on Drying)
2. **Sampling Time and Location** (when and where sample taken)
3. **Sample ID** (unique identifier for sample)
4. **Test Method Reference** (SOP or USP chapter)
5. **Acceptance Criteria** (from MBR)
6. **Actual Test Result**
7. **Pass/Fail Determination**
8. **Analyst Signature and Date**
9. **Reviewer Signature and Date** (if applicable)
10. **Action Taken if Fail** (retest, continue, investigate)

### 6.2 Example IPC Result Record

**IN-PROCESS CONTROL TEST RESULT**

**IPC-03: LOSS ON DRYING (LOD) - FLUID BED DRYING ENDPOINT**

**Batch Number:** ATV40-2024-001234

**Step:** 4.0 - Fluid Bed Drying

**Sample Information:**

* Sample ID: IPC-03-ATV40-2024-001234

* Sampling Time: 12-JAN-2024 13:15 (after 45 minutes of drying)

* Sampling Location: Multiple locations in dryer bowl (composite sample)

* Sample Quantity: 10.0 g

**Test Method:** USP <731> Loss on Drying, 105°C for 3 hours per SOP-QC-110

**Test Execution:**

| Parameter                     | Value                               |
| ----------------------------- | ----------------------------------- |
| Sample Weight (initial):      | 5.0245 g                            |
| Sample Weight (after drying): | 4.8893 g                            |
| Weight Loss:                  | 0.1352 g                            |
| LOD Calculation:              | (0.1352 / 5.0245) × 100 = **2.69%** |

**Acceptance Criteria:** 2.0% - 4.0%

**Result:** **2.69%** ✓ PASS

**Conclusion:** LOD within acceptable range. Drying endpoint achieved. Approve to discharge and proceed to Step 5.0 (Milling).

**Analyst:** K. Lee (QC Lab)    Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    Date: 12-JAN-2024    Time: 14:30

**Reviewed By:** R. Patel (QC Supervisor)    Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    Date: 12-JAN-2024    Time: 14:35

**Action:** Drying stopped at 13:20. Granules cooled and discharged at 13:45. Proceed to Step 5.0.

***

**IPC TREND DATA (for ongoing process monitoring):**

| Batch Number          | LOD Result | Date            | Analyst    |
| --------------------- | ---------- | --------------- | ---------- |
| ATV40-2024-001230     | 2.85%      | 05-JAN-2024     | K. Lee     |
| ATV40-2024-001231     | 3.12%      | 08-JAN-2024     | K. Lee     |
| ATV40-2024-001232     | 2.54%      | 09-JAN-2024     | R. Patel   |
| ATV40-2024-001233     | 3.01%      | 11-JAN-2024     | K. Lee     |
| **ATV40-2024-001234** | **2.69%**  | **12-JAN-2024** | **K. Lee** |

All results within specification. No adverse trends observed.

***

### 6.3 Handling Out-of-Specification (OOS) IPC Results

**If IPC Result Fails:**

1. **Stop manufacturing immediately** (do not proceed to next step)
2. **Notify supervisor and QA**
3. **Initiate investigation per SOP** (typically SOP-QA-020 OOS Investigation)
4. **Determine root cause:**

   * Laboratory error (analyst retest)

   * Sampling error (resample and retest)

   * Process issue (adjust process parameters)
5. **Document investigation in Deviation Report**
6. **Make disposition decision:**

   * **Retest:** If investigation shows testing error

   * **Rework:** If process can be corrected (e.g., continue drying if LOD too high)

   * **Reject:** If material cannot be corrected
7. **QA approval required before proceeding**

**Example OOS Documentation:**

```
IPC-03 FAILED - LOD = 5.2% (specification: 2.0%-4.0%)

Investigation: Granules under-dried due to dryer exhaust fan malfunction (reduced airflow).

Corrective Action: Fan repaired. Continued drying for additional 20 minutes.

Retest Result: LOD = 3.1% ✓ PASS

Deviation Report: DEV-2024-0089 (attached to batch record)

QA Approval to Proceed: S. Martinez    Signature: _______________    Date: 12-JAN-2024
```

***

## 7. Yield Records

Yield calculations document material accountability at each step.

### 7.1 Yield Calculation and Recording

**Yield Percentage Formula:**

```
Yield % = (Actual Yield / Theoretical Yield) × 100
```

**Where:**

* **Actual Yield:** Material recovered/produced in the step (weighed or counted)

* **Theoretical Yield:** Expected yield from MBR

**Acceptance Criteria:** Typically 97.0% - 103.0% for solid dosage forms (tighter for injectables)

**Investigation Trigger:** Yield outside acceptance range requires investigation per 21 CFR 211.192.

### 7.2 Example Yield Record Table

**YIELD RECONCILIATION - BATCH ATV40-2024-001234**

| Step | Description            | Theoretical Yield               | Actual Yield                    | Yield % | Acceptance Range | Status | Comments                                                 |
| ---- | ---------------------- | ------------------------------- | ------------------------------- | ------- | ---------------- | ------ | -------------------------------------------------------- |
| 1.0  | Dispensing             | 97.00 kg                        | 97.10 kg                        | 100.1%  | 98.0-102.0%      | ✓ PASS | All materials dispensed                                  |
| 2.0  | Sieving & Pre-blending | 86.12 kg                        | 86.20 kg                        | 100.1%  | 98.0-102.0%      | ✓ PASS | Minimal losses during sieving                            |
| 3.0  | Wet Granulation        | 98.00 kg (includes water)       | 98.20 kg                        | 100.2%  | 95.0-105.0%      | ✓ PASS | Uniform wet granulation                                  |
| 4.0  | Drying                 | 87.00 kg                        | 87.15 kg                        | 100.2%  | 85.0-91.0%       | ✓ PASS | Water removed as expected                                |
| 5.0  | Milling                | 86.50 kg                        | 86.55 kg                        | 100.1%  | 98.0-102.0%      | ✓ PASS | Minimal losses through screen                            |
| 6.0  | Final Blending         | 88.65 kg                        | 88.70 kg                        | 100.1%  | 97.0-103.0%      | ✓ PASS | All excipients added correctly                           |
| 7.0  | Compression            | 250,000 tablets (90.00 kg)      | 249,850 tablets (89.95 kg)      | 99.9%   | 97.0-103.0%      | ✓ PASS | 150 tablets rejected during start-up IPC                 |
| 8.0  | Coating                | 250,000 tablets (92.70 kg)      | 249,820 tablets (92.68 kg)      | 99.98%  | 98.0-102.0%      | ✓ PASS | 30 tablets broken during coating (documented)            |
| 9.0  | Packaging              | 8,333 bottles (249,990 tablets) | 8,327 bottles (249,810 tablets) | 99.98%  | 98.5-101.5%      | ✓ PASS | 10 tablets for retain sample, 180 tablets for QC testing |

**Final Packaged Yield:** 8,327 bottles (30 tablets each) = 249,810 tablets

**Overall Process Yield:** (249,810 / 250,000) × 100 = **99.92%** ✓ Excellent

**Material Accountability:**

| Disposition               | Quantity                           | Percentage  |
| ------------------------- | ---------------------------------- | ----------- |
| **Packaged Product**      | 249,810 tablets                    | 99.92%      |
| **QC Testing**            | 180 tablets                        | 0.072%      |
| **Retain Sample**         | 10 tablets                         | 0.004%      |
| **In-Process Rejections** | 150 tablets (compression start-up) | 0.06%       |
| **Process Losses**        | 30 tablets (coating breakage)      | 0.012%      |
| **TOTAL**                 | **250,180 tablets**                | **100.07%** |

**Note:** Total slightly over 100% due to rounding in intermediate steps. All yields within acceptable limits.

**Yield Review:**
All yields within established limits. No investigation required.

Reviewed by QA: S. Martinez    Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    Date: 28-JAN-2024

***

### 7.3 Low Yield Investigation Example

**If yield falls below minimum:**

```
STEP 7.0: COMPRESSION - YIELD INVESTIGATION

Theoretical Yield: 250,000 tablets
Actual Yield: 240,500 tablets
Yield %: 96.2%
Acceptance Range: 97.0% - 103.0%
Status: ✗ FAIL - Below minimum, investigation required

INVESTIGATION (Deviation Report DEV-2024-0091):

Root Cause:
Tablet press feeder malfunction during hour 2 of compression resulted in approximately 
8,000 tablets rejected due to weight variation out of specification. Additionally, 
1,500 tablets were broken during handling (dropped tray).

Impact on Quality:
All tablets that passed in-process weight testing were retained. Rejected tablets 
were segregated and destroyed (documented in destruction log). Remaining tablets 
meet all specifications.

Corrective Action:
1. Feeder repaired and verified operational before resuming compression
2. Operator retrained on tray handling procedures
3. All subsequent in-process testing passed

Preventive Action (CAPA-2024-0045):
1. Implement predictive maintenance schedule for tablet press feeders
2. Add handling training to quarterly competency assessment

Disposition:
APPROVED TO PROCEED - Low yield due to documented rejections during in-process 
testing. All retained tablets meet specifications. Batch suitable for release.

QA Approval: S. Martinez    Signature: _______________    Date: 28-JAN-2024
```

***

## 8. Quality Control (QC) Results

Finished product QC testing results must be attached to or documented in the EBR.

### 8.1 QC Testing Documentation

**Required Elements:**

1. **Certificate of Analysis (CoA)** - Summary of all test results
2. **Laboratory Notebook References** or LIMS entries
3. **Raw Data** (chromatograms, spectra, analyst worksheets)
4. **Calculations** (assay calculations, impurity calculations)
5. **Analyst and Reviewer Signatures**
6. **Pass/Fail Determination** for each test
7. **Overall Batch Disposition** (Release or Reject)

### 8.2 Example Certificate of Analysis (CoA)

```
═══════════════════════════════════════════════════════════════════════════════
                        CERTIFICATE OF ANALYSIS
                   ATORVASTATIN CALCIUM TABLETS, 40 MG
═══════════════════════════════════════════════════════════════════════════════

PRODUCT:           Atorvastatin Calcium Tablets, 40 mg
BATCH NUMBER:      ATV40-2024-001234
BATCH SIZE:        249,810 tablets (8,327 bottles)
MANUFACTURING DATE: 12-JAN-2024
EXPIRY DATE:       12-JAN-2026
SPECIFICATION:     SPEC-FP-ATV-40-v8

───────────────────────────────────────────────────────────────────────────────
TEST                        METHOD              SPECIFICATION         RESULT
───────────────────────────────────────────────────────────────────────────────
DESCRIPTION                 Visual              White to off-white,   Conforms
                                                round, biconvex,
                                                film-coated, "ATV 40"

IDENTIFICATION (HPLC)       USP Atorvastatin    Retention time        Conforms
                            Tablets             matches reference     (RT: 8.52 min)

ASSAY (Atorvastatin)        HPLC, SOP-QC-105    90.0% - 110.0%        98.2%
                                                (36.0-44.0 mg/tablet) (39.3 mg/tablet)

CONTENT UNIFORMITY          USP <905>           AV ≤ 15.0             AV = 4.2
                                                                      (n=10)

DISSOLUTION                 USP <711>           Q = 80% in 30 min     97% at 30 min
                            Apparatus 2, 75 RPM  (NLT 80%)            (n=6, all >80%)
                            pH 6.8 buffer

RELATED SUBSTANCES          HPLC, USP           Any impurity ≤ 0.5%   Largest: 0.18%
(Impurities)                                    Total ≤ 2.0%          Total: 0.42%

WATER CONTENT               USP <921>           ≤ 5.0%                2.8%
(Karl Fischer)

MICROBIAL LIMITS:
  Total Aerobic             USP <61>            ≤ 1000 CFU/g          <10 CFU/g
  Microbial Count (TAMC)

  Total Yeast & Mold        USP <61>            ≤ 100 CFU/g           <10 CFU/g
  Count (TYMC)

ABSENCE OF SPECIFIED        USP <62>            Absent                Absent
MICROORGANISMS:
  E. coli                                       Absent                Absent
  Salmonella                                    Absent                Absent
  S. aureus                                     Absent                Absent
  P. aeruginosa                                 Absent                Absent

───────────────────────────────────────────────────────────────────────────────
CONCLUSION: All test results meet specifications. Batch APPROVED FOR RELEASE.
───────────────────────────────────────────────────────────────────────────────

TESTED BY:
  Analyst: Karen Lee          Signature: _______________  Date: 16-23 JAN 2024
  Reviewer: Robert Patel      Signature: _______________  Date: 23-JAN-2024

QC MANAGER APPROVAL:
  Name: Dr. James Wong        Signature: _______________  Date: 24-JAN-2024

═══════════════════════════════════════════════════════════════════════════════
```

***

### 8.3 Laboratory Notebook/LIMS Reference

**Example LIMS Entry Reference:**

```
LABORATORY DATA REFERENCE - BATCH ATV40-2024-001234

All analytical data recorded in Laboratory Information Management System (LIMS)

LIMS Project ID: LIMS-2024-0234
Notebook Reference (if paper): QC-LAB-NB-056, Pages 142-158

TEST DETAILS:

1. Assay (HPLC):
   LIMS Entry: LIMS-2024-0234-001
   Analyst: K. Lee
   Test Date: 16-JAN-2024
   Instrument: HPLC-014
   Result: 98.2% (Lab notebook p. 142-145, chromatograms filed)

2. Content Uniformity:
   LIMS Entry: LIMS-2024-0234-002
   Analyst: K. Lee
   Test Date: 17-JAN-2024
   Individual Results: 98.5%, 97.8%, 99.1%, 98.0%, 97.5%, 98.8%, 99.3%, 97.2%, 98.6%, 99.0%
   AV = 4.2 (Lab notebook p. 146-147)

3. Dissolution:
   LIMS Entry: LIMS-2024-0234-003
   Analyst: R. Patel
   Test Date: 18-JAN-2024
   Instrument: Dissolution-008
   Individual Results (% at 30 min): 96%, 98%, 95%, 97%, 99%, 97%
   Mean: 97% (Lab notebook p. 148-150, UV spectra filed)

4. Related Substances:
   LIMS Entry: LIMS-2024-0234-004
   Analyst: K. Lee
   Test Date: 19-JAN-2024
   Instrument: HPLC-014
   Impurity Profile: 0.18%, 0.12%, 0.08%, 0.04%, Total = 0.42%
   (Lab notebook p. 151-153, chromatograms filed)

5. Microbial Testing:
   LIMS Entry: LIMS-2024-0234-005
   Analyst: M. Chen (Microbiology Lab)
   Test Dates: 16-23 JAN 2024 (7-day incubation)
   Results: All pass (Lab notebook MIC-NB-022, p. 88-92)

All raw data retained per 21 CFR 211.194 and available for review/inspection.
```

***

## 9. Label Reconciliation

Label reconciliation ensures 100% accountability of all labels issued for the batch. This is a **critical GMP requirement** to prevent labeling mix-ups.

### 9.1 Label Reconciliation Requirements

**Per 21 CFR 211.130:**
"Control of labeling... Reconciliation of the quantities of labeling issued, used, and returned, and documentation of any discrepancies... shall be completed and reviewed by a second person."

**Formula:**

```
Labels Issued = Labels Used + Labels Returned + Labels Destroyed
```

**Must equal 100.0%**

### 9.2 Example Label Reconciliation Record

**LABEL RECONCILIATION - BATCH ATV40-2024-001234**

**Label Description:** Atorvastatin Calcium Tablets 40 mg, 30-count bottle label\
**Label Artwork Version:** ATV-40-L-v5\
**Label Material Code:** PKG-020\
**Label Lot Number:** LBL-2024-0156

**Reconciliation:**

| Category                             | Quantity         | Calculation                          |
| ------------------------------------ | ---------------- | ------------------------------------ |
| **Labels Issued to Production Line** | 8,500 labels     | From label inventory                 |
| **Labels Applied to Bottles (Used)** | 8,327 labels     | Bottles produced                     |
| **Labels Returned to QA**            | 150 labels       | Unused, undamaged                    |
| **Labels Destroyed**                 | 23 labels        | Damaged/misprinted during line setup |
| **TOTAL ACCOUNTED**                  | **8,500 labels** | 8,327 + 150 + 23 = 8,500 ✓           |
| **Reconciliation Percentage**        | **100.0%**       | (8,500 / 8,500) × 100                |

**Status:** ✓ PASS - 100% reconciliation achieved

**Issued By (QA):** S. Martinez    Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    Date: 15-JAN-2024    Time: 07:00

**Reconciled By (Production):** J. Smith    Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    Date: 15-JAN-2024    Time: 17:30

**Verified By (QA):** S. Martinez    Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    Date: 15-JAN-2024    Time: 18:00

**Destroyed Labels Documentation:**
All 23 destroyed labels were defaced (cut to render unusable) and placed in witnessed destruction container WDC-2024-015. Destruction witnessed by QA.

***

### 9.3 Label Reconciliation Failure Example

**If reconciliation does NOT equal 100%:**

```
LABEL RECONCILIATION FAILURE - INVESTIGATION REQUIRED

Labels Issued: 8,500
Labels Used: 8,327
Labels Returned: 150
Labels Destroyed: 20
TOTAL ACCOUNTED: 8,497
DISCREPANCY: 3 labels MISSING

Status: ✗ FAIL - Investigation required per SOP-PKG-010

INVESTIGATION (Deviation Report DEV-2024-0095):

Root Cause:
Three labels were found adhered to packaging equipment during post-run cleanup. 
Labels had stuck to conveyor belt and were not visible during initial count.

Impact Assessment:
- All 3 labels recovered and defaced
- No risk of mislabeling (labels were damaged and not applied to any containers)
- All packaged bottles verified to have correct label (visual inspection of 100% of bottles)

Corrective Action:
- Enhanced line inspection procedure to check for stuck labels before reconciliation
- All 3 labels added to "Labels Destroyed" count

Corrective Reconciliation:
Labels Destroyed: 20 + 3 = 23
TOTAL ACCOUNTED: 8,500 ✓ 100%

Disposition:
APPROVED - All labels accounted for after investigation. No product affected.

QA Approval: S. Martinez    Signature: _______________    Date: 16-JAN-2024

CRITICAL: If labels cannot be accounted for and there is risk of mislabeling, 
batch MUST BE REJECTED or subjected to 100% relabeling verification.
```

***

## 10. Deviation and CAPA Records

Any deviation from the MBR must be documented in a Deviation Report and investigated.

### 10.1 What Constitutes a Deviation?

**Deviation:** Any departure from approved instructions, procedures, or specifications.

**Examples:**

* Process parameter out of specification range

* Equipment malfunction during manufacturing

* Missing or late signature

* IPC failure

* Yield outside acceptable range

* Environmental monitoring excursion

* Wrong material almost used (caught before use - "near miss")

* Procedural step performed out of sequence

**Types of Deviations:**

| Type         | Severity                                         | Investigation Depth                     | Examples                                                        |
| ------------ | ------------------------------------------------ | --------------------------------------- | --------------------------------------------------------------- |
| **Critical** | High impact on product quality or patient safety | Full root cause analysis, CAPA required | OOS test result, wrong API used, sterility breach               |
| **Major**    | Moderate impact, may affect batch disposition    | Root cause analysis, CAPA likely        | Yield <95%, CPP out of range, equipment failure                 |
| **Minor**    | Low impact, unlikely to affect quality           | Brief investigation, documentation      | Late signature, minor documentation error, non-CPP slightly OOR |

### 10.2 Deviation Report Structure

**Required Elements:**

1. **Deviation Number** (unique identifier)
2. **Batch Number(s) Affected**
3. **Date and Time of Deviation**
4. **Step/Process Affected**
5. **Description of Deviation** (what happened)
6. **Immediate Action Taken**
7. **Potential Impact on Product Quality**
8. **Root Cause Investigation**
9. **Corrective Action (CA)**
10. **Preventive Action (PA) / CAPA Reference**
11. **Approval Chain** (Supervisor, QA, others as needed)
12. **Disposition** (batch approved, rejected, rework)

### 10.3 Example Deviation Report

```
═══════════════════════════════════════════════════════════════════════════════
                              DEVIATION REPORT
═══════════════════════════════════════════════════════════════════════════════

DEVIATION NUMBER: DEV-2024-0092
BATCH NUMBER: ATV40-2024-001234
PRODUCT: Atorvastatin Calcium Tablets, 40 mg

DATE/TIME OF DEVIATION: 12-JAN-2024, 11:25
REPORTED BY: J. Smith (Operator)
DEPARTMENT: Production - Granulation

───────────────────────────────────────────────────────────────────────────────
DESCRIPTION OF DEVIATION:
───────────────────────────────────────────────────────────────────────────────
During Step 3.0 (Wet Granulation), the impeller speed momentarily dropped to 
270 RPM for approximately 30 seconds due to a brief power fluctuation. 

Specification per MBR: 280-320 RPM [CPP]
Actual: Dropped to 270 RPM for ~30 seconds, then returned to 295 RPM

───────────────────────────────────────────────────────────────────────────────
IMMEDIATE ACTION TAKEN:
───────────────────────────────────────────────────────────────────────────────
1. Operator noted the speed drop and documented exact time and duration
2. Impeller speed returned to normal setpoint (295 RPM) automatically
3. Supervisor notified immediately
4. Granulation continued to endpoint (amperage endpoint still achieved normally)
5. Deviation documented in batch record Step 3.0

───────────────────────────────────────────────────────────────────────────────
POTENTIAL IMPACT ON PRODUCT QUALITY:
───────────────────────────────────────────────────────────────────────────────
Impeller speed is a Critical Process Parameter [CPP] controlling granule size 
distribution and granulation kinetics. A brief drop of 10 RPM (3.3% below spec) 
for 30 seconds during a 30-minute granulation process represents <2% of total 
granulation time.

Expected Impact: MINIMAL
- Granulation endpoint was achieved normally (amperage reached target range)
- Visual appearance of wet granules was consistent with specification
- IPC testing (LOD, particle size, blend uniformity) all passed

───────────────────────────────────────────────────────────────────────────────
ROOT CAUSE INVESTIGATION:
───────────────────────────────────────────────────────────────────────────────
Root Cause: Facility-wide momentary voltage drop due to lightning strike near 
electrical substation. Affected multiple buildings for approximately 30 seconds 
before backup power stabilized voltage.

Evidence:
- Facilities maintenance log confirms power event at 11:25 on 12-JAN-2024
- Multiple equipment logs show brief disruptions at same time
- Backup UPS systems activated and stabilized voltage within 30 seconds

───────────────────────────────────────────────────────────────────────────────
CORRECTIVE ACTION (CA):
───────────────────────────────────────────────────────────────────────────────
1. Enhanced monitoring of all subsequent manufacturing steps for this batch
2. Additional IPC testing performed: Blend uniformity repeated at Step 6.0 
   (passed with RSD = 3.2%, spec ≤5.0%)
3. Finished product dissolution test performed in triplicate (all passed, 
   mean = 97% at 30 min, spec ≥80%)

───────────────────────────────────────────────────────────────────────────────
PREVENTIVE ACTION (PA) / CAPA:
───────────────────────────────────────────────────────────────────────────────
CAPA-2024-0048 initiated:
1. Facilities to upgrade UPS capacity for granulation suite to prevent any 
   equipment slowdown during power fluctuations (Target: 31-MAR-2024)
2. Install voltage monitoring with alarm to alert operators of power issues 
   before equipment is affected (Target: 30-APR-2024)

───────────────────────────────────────────────────────────────────────────────
BATCH DISPOSITION:
───────────────────────────────────────────────────────────────────────────────
APPROVED FOR RELEASE

Justification:
- Deviation was minor (3.3% below spec for <2% of process time)
- Granulation endpoint achieved normally
- All IPC and finished product testing passed
- No impact on product quality demonstrated

───────────────────────────────────────────────────────────────────────────────
APPROVALS:
───────────────────────────────────────────────────────────────────────────────
Initiated By: J. Smith (Operator)          Date: 12-JAN-2024
Reviewed By: M. Garcia (Supervisor)        Date: 12-JAN-2024
Reviewed By: R. Johnson (Mfg Manager)      Date: 13-JAN-2024
QA Reviewed: S. Martinez (QA Director)     Date: 28-JAN-2024
QA Disposition: APPROVED FOR RELEASE       Date: 28-JAN-2024

═══════════════════════════════════════════════════════════════════════════════
```

***

### 10.4 Deviation Documentation in Batch Record

**In the EBR at Step 3.0, the following must be noted:**

```
DEVIATION NOTED:
[ ✓ ] Deviation occurred during this step
Deviation Report Number: DEV-2024-0092
Brief Description: Impeller speed dropped to 270 RPM for 30 seconds due to 
                   facility power fluctuation
QA Disposition: APPROVED (see attached Deviation Report)
```

**Deviations must be cross-referenced in:**

1. Batch record header (list all deviation numbers)
2. Specific step where deviation occurred
3. QA review section

***

## 11. Signature Requirements

Signatures document accountability and verification throughout manufacturing.

### 11.1 Three-Tier Signature Model

**Tier 1: Operator (Performed By)**

* Person who physically executed the step

* Documents: "I performed this operation"

* Must be trained and qualified for the operation

* Signature must be legible or accompanied by printed name

**Tier 2: Supervisor/Verifier (Verified By)**

* Independent second person check

* Documents: "I verified this operation was performed correctly"

* Must be same or higher qualification level as operator

* Cannot be the same person as operator (two-person rule)

**Tier 3: QA Reviewer (Approved By)**

* Final quality assurance review

* Documents: "I confirm this batch meets all requirements for release"

* Must be member of Quality Unit (21 CFR 211.22)

* Cannot be overridden by Production

### 11.2 Signature Requirements by Step

**During Manufacturing (Steps 1.0-9.0):**

* **Operator signature:** Required for each step completion

* **Supervisor signature:** Required for each step verification OR for critical steps only (per company SOP)

**Post-Manufacturing:**

* **QC Lab signatures:** Analyst + Reviewer for each test

* **QA Batch Review signature:** Final review and disposition

### 11.3 Example Signature Block

```
STEP 3.0: WET GRANULATION - SIGNATURES

PERFORMED BY (Operator):
Name: Jason Smith
Signature: [signed] Jason Smith
Date: 12-JAN-2024
Time: 11:50

VERIFIED BY (Supervisor):
Name: Maria Garcia
Signature: [signed] Maria Garcia
Date: 12-JAN-2024
Time: 11:55

I certify that Step 3.0 was performed in accordance with the Master Batch 
Record MBR-ATV-40-v12 and all parameters were within specification.
```

### 11.4 What If Signature is Missing?

**Missing Signature = Documentation Deficiency**

**Investigation Required:**

```
MISSING SIGNATURE INVESTIGATION

Location: Step 5.0 (Milling) - Supervisor signature missing
Identified During: QA batch record review
Date Identified: 28-JAN-2024

Investigation:
- Step was performed on 13-JAN-2024 by operator J. Smith (signature present)
- Supervisor M. Garcia was on shift and confirmed she verified the step but 
  forgot to sign
- Supervisor provided late signature with explanation

Resolution:
- Supervisor M. Garcia signed on 28-JAN-2024 with notation: 
  "Late signature - step was verified on 13-JAN-2024 but signature inadvertently 
  omitted. Confirmed step was performed correctly per MBR."
- QA accepted late signature based on supervisor's written explanation and 
  contemporaneous operator signature confirming step completion

Preventive Action:
- Enhanced supervisor checklist to ensure all signatures completed before 
  leaving shift (CAPA-2024-0052)

QA Disposition: APPROVED with explanation documented
```

**CRITICAL:** Late signatures must always include explanation of why they are late. "Backdating" (signing with past date to hide late signature) is data integrity violation and is NEVER acceptable.

***

## 12. Common EBR Problems and Deficiencies

### 12.1 Missing Signatures

**Problem:** Signature line left blank

**Impact:** Cannot verify who performed or verified the operation. Batch may be rejected or placed on hold pending investigation.

**Prevention:**

* Supervisor checklist before end of shift

* Electronic batch records with mandatory signature fields

* Real-time QA spot checks during manufacturing

**Remediation:**

* Investigate to determine who performed the operation

* Obtain late signature with documented explanation

* May require additional testing or evaluation to verify step was performed correctly

***

### 12.2 Illegible Entries

**Problem:** Handwriting cannot be read

**Impact:** Cannot determine what was recorded. May require investigation or re-testing.

**Examples:**

* "Was this '3' or '8'?" in a concentration field

* "Is this signature 'J. Smith' or 'J. Smyth'?"

**Prevention:**

* Use printed name alongside signature

* Electronic data entry where possible

* Clear handwriting training for all personnel

* Use block letters for critical data

**Remediation:**

* Contact person who made entry for clarification

* Document clarification in batch record review notes

* If person unavailable, may require re-testing or investigation

***

### 12.3 Corrections Not Following Good Documentation Practice (GDP)

**CORRECT Way to Make Corrections:**

1. Draw single line through error (original must remain legible)
2. Write correct value next to it
3. Initial the correction
4. Date the correction
5. Document reason (if not obvious)

**Example:**

```
Temperature: 25 22°C   Corrected - initial reading was from wrong thermometer. 
                       Correct value confirmed with calibrated thermometer.
                       Initials: JS   Date: 12-JAN-2024
```

**INCORRECT Corrections (Data Integrity Violations):**

* ~~Using correction fluid or tape~~ (obliterates original - NEVER do this)

* ~~Erasing~~ (removes original - forbidden)

* ~~Overwriting without line-through~~ (unclear what original value was)

* ~~No initials or date~~ (cannot determine who made correction or when)

* ~~Making correction without documenting reason~~ (if reason is not obvious)

**Consequence:** Corrections not following GDP are FDA 483 observations and indicate poor data integrity practices. In severe cases, can lead to product rejection or facility warning letters.

***

### 12.4 Missing Timestamps

**Problem:** Date recorded but time missing (or vice versa)

**Impact:** Cannot verify chronological sequence of events. May affect hold time compliance.

**Example Issue:**

```
Step 6.0 (Blending): Completed 12-JAN-2024 (time missing)
Step 7.0 (Compression): Started 12-JAN-2024 08:00

Question: Was Step 7.0 started within the 24-hour hold time from Step 6.0?
Cannot determine without Step 6.0 completion time.
```

**Prevention:**

* Batch record templates must have fields for date AND time for all critical steps

* Training on importance of complete documentation

* Electronic systems auto-capture timestamps

**Remediation:**

* Investigate to determine actual time (check equipment logs, supervisor logs, security camera timestamps if available)

* Document reconstructed timeline with explanation

***

### 12.5 Blank Fields

**Problem:** Required field left blank with no explanation

**Impact:** Incomplete documentation. Raises question: Was the step performed and not documented, or not performed at all?

**Examples:**

* Equipment ID field blank (which equipment was actually used?)

* IPC result field blank (was test performed?)

* Yield field blank (what was actual yield?)

**Prevention:**

* Use "N/A" if field is not applicable (e.g., "Deviation Report #: N/A" if no deviation)

* Electronic systems with mandatory fields

* Real-time review by supervisors

**Remediation:**

* Investigate to determine if step was performed

* If performed, obtain missing data and document as late entry

* If not performed, assess impact on batch quality

***

### 12.6 Data Recorded Out of Chronological Order

**Problem:** Entries made out of sequence or "back-filled"

**Impact:** Raises question of whether data was recorded contemporaneously (at time of activity) or reconstructed later from memory.

**Example:**

```
Step 3.0: Granulation completed 12-JAN-2024 11:50 (documented)
Step 4.0: Drying completed 12-JAN-2024 14:30 (documented)
Step 5.0: Milling completed 12-JAN-2024 16:15 (documented)

BUT: All three entries have same ink color and handwriting style, suggesting 
all were written at same time (likely at 16:15), not contemporaneously.
```

**Prevention:**

* Train on importance of contemporaneous recording

* Electronic batch records with automatic timestamps

* Supervisor oversight during manufacturing

**Remediation:**

* If investigation confirms data is accurate, document explanation

* Implement contemporaneous recording in future batches

***

### 12.7 Process Parameter Out of Range Not Documented as Deviation

**Problem:** Parameter falls outside MBR specification, but operator does not initiate deviation report

**Example:**

```
Step 3.0: Impeller Speed
Specification: 280-320 RPM [CPP]
Recorded: 275 RPM
Deviation Noted: [ ] None   [ ] See Deviation Report #: ________

Problem: 275 RPM is below 280 RPM minimum, but no deviation was documented.
```

**Impact:**

* Out-of-specification parameter may affect product quality

* Failure to investigate violates 21 CFR 211.192

* Suggests inadequate operator training or lack of process understanding

**Prevention:**

* Clear training on what constitutes a deviation

* Real-time alerts in electronic systems

* Supervisor review during manufacturing (not just at end)

**Remediation:**

* QA identifies during review and initiates retrospective deviation investigation

* Enhanced training for involved personnel

* Assess whether additional testing is needed to verify product quality

***

### 12.8 Calculations Incorrect or Not Shown

**Problem:** Result is recorded but calculation is missing or mathematically incorrect

**Example:**

```
Yield Calculation:
Actual Yield: 87.15 kg
Theoretical Yield: 87.00 kg
Yield %: 99.8%   ← INCORRECT (should be 100.2%)

Correct calculation: (87.15 / 87.00) × 100 = 100.17% ≈ 100.2%
```

**Impact:**

* Incorrect yield may trigger unnecessary investigation or miss true low yield

* Suggests lack of verification or competency issue

**Prevention:**

* Show all calculations in batch record

* Independent verification of calculations (second person check)

* Electronic systems with automatic calculations

**Remediation:**

* Recalculate during QA review

* Document corrected value

* Assess impact of error on batch disposition decision

***

### 12.9 Analytical Data Does Not Match CoA

**Problem:** Raw lab data shows different result than Certificate of Analysis

**Example:**

```
Lab Notebook: Assay = 98.7%
Certificate of Analysis: Assay = 98.2%
Discrepancy: 0.5%
```

**Impact:** Raises question of data integrity. Which value is correct?

**Investigation Required:**

* Review calculation steps

* Check for transcription errors

* Verify no unauthorized changes to data

* Determine root cause

**Prevention:**

* Electronic data transfer from instruments to LIMS

* Independent data review before issuing CoA

* Audit trail for all data changes

***

### 12.10 Environmental Monitoring Data Missing or Out of Specification

**Problem:** Room temperature/humidity not documented, or documented as out of spec

**Impact:**

* Cannot verify product was manufactured under controlled conditions

* If environmental parameters are critical (e.g., humidity for moisture-sensitive products), OOS conditions may affect quality

**Example:**

```
Step 6.0 (Final Blending): 
Temperature: Not recorded
Humidity: Not recorded

Problem: Product is moisture-sensitive. Humidity must be controlled to 30-50% RH.
Cannot verify blending was performed under correct conditions.
```

**Remediation:**

* Check building automation system (BAS) logs for actual temperature/humidity

* Reconstruct environmental conditions from historical data

* If conditions were out of spec, assess impact on product quality

***

## 13. QA Batch Record Review Process

The final step before batch release is comprehensive QA review per 21 CFR 211.192.

### 13.1 QA Review Checklist

**Comprehensive QA Batch Record Review Checklist:**

**SECTION 1: BATCH IDENTIFICATION**

* [ ] Correct batch number on all pages

* [ ] Correct product name and strength

* [ ] Correct MBR version used

* [ ] Manufacturing dates documented and chronological

* [ ] Expiry date correctly calculated

**SECTION 2: MATERIALS**

* [ ] All materials have QC-approved AR numbers

* [ ] All material lot numbers documented

* [ ] All materials within expiry/retest date at time of use

* [ ] All material quantities within ±2% of required amounts

* [ ] Material traceability complete

* [ ] Two-person verification (dispensed by + verified by) documented

**SECTION 3: EQUIPMENT**

* [ ] All equipment IDs documented

* [ ] All equipment calibrations current

* [ ] All equipment cleaning verified (clean labels documented)

* [ ] Equipment qualification status (IQ/OQ/PQ) current

* [ ] Line clearance completed for all steps

**SECTION 4: PROCESS EXECUTION**

* [ ] All process parameters within MBR specifications

* [ ] All Critical Process Parameters (CPPs) within tighter control ranges

* [ ] All start/end times documented

* [ ] Process sequence logical and chronological

* [ ] Hold times between steps within limits

* [ ] Environmental monitoring (temp/humidity) within limits

**SECTION 5: IN-PROCESS CONTROLS (IPCs)**

* [ ] All required IPCs performed

* [ ] All IPC results meet acceptance criteria

* [ ] Any failed IPCs investigated with documented resolution

* [ ] Analyst and reviewer signatures present on all IPC records

**SECTION 6: YIELDS**

* [ ] Yield calculated at all required steps

* [ ] All yields within acceptable ranges (per MBR)

* [ ] Any low yields investigated with documented justification

* [ ] Overall material accountability >98%

**SECTION 7: DEVIATIONS**

* [ ] All deviations identified and documented

* [ ] Deviation reports attached with investigations completed

* [ ] Root cause identified for all deviations

* [ ] Corrective/preventive actions (CAPA) documented

* [ ] Deviations approved by QA

**SECTION 8: QUALITY CONTROL TESTING**

* [ ] Certificate of Analysis attached

* [ ] All required tests performed

* [ ] All test results meet specifications

* [ ] No OOS results OR OOS results investigated and batch disposition documented

* [ ] Lab data references documented (notebook, LIMS)

* [ ] Analyst and reviewer signatures on all test records

**SECTION 9: LABEL RECONCILIATION**

* [ ] Label reconciliation completed

* [ ] 100% label accountability achieved

* [ ] Any discrepancies investigated and resolved

* [ ] Destroyed labels documented and witnessed

**SECTION 10: SIGNATURES**

* [ ] All operator signatures present

* [ ] All supervisor signatures present

* [ ] All QC analyst/reviewer signatures present

* [ ] No missing signatures OR late signatures explained

**SECTION 11: DOCUMENTATION QUALITY**

* [ ] All entries legible

* [ ] No blank fields (or "N/A" documented where appropriate)

* [ ] All corrections follow GDP (line-through, initial, date)

* [ ] Data recorded contemporaneously (chronological)

* [ ] All calculations shown and correct

**SECTION 12: OVERALL ASSESSMENT**

* [ ] Batch manufactured in accordance with MBR

* [ ] All specifications met

* [ ] All deviations investigated with no quality impact

* [ ] Complete traceability from raw materials to finished product

* [ ] Batch suitable for release OR reject with documented justification

***

### 13.2 QA Review Statement

**Example QA Review and Approval Statement:**

```
═══════════════════════════════════════════════════════════════════════════════
                     QUALITY ASSURANCE BATCH REVIEW
═══════════════════════════════════════════════════════════════════════════════

BATCH NUMBER: ATV40-2024-001234
PRODUCT: Atorvastatin Calcium Tablets, 40 mg
QA REVIEWER: Sarah Martinez, QA Director
REVIEW DATE: 28-JAN-2024

REVIEW SUMMARY:

I have reviewed the complete batch record for Batch ATV40-2024-001234, including 
manufacturing records, in-process control results, laboratory test results, 
deviation reports, and all supporting documentation.

FINDINGS:

1. MATERIALS: All materials were QC-approved and used within expiry dates. 
   Complete traceability documented. ✓

2. MANUFACTURING: All process parameters were within MBR specifications. One 
   minor deviation (DEV-2024-0092) occurred during granulation due to brief 
   power fluctuation. Investigation completed; no impact on product quality. ✓

3. IN-PROCESS CONTROLS: All IPC tests met acceptance criteria. ✓

4. YIELDS: All yields within acceptable ranges (overall 99.92%). ✓

5. QUALITY CONTROL: All finished product testing passed specifications per 
   Certificate of Analysis dated 24-JAN-2024. ✓

6. LABEL RECONCILIATION: 100% label accountability achieved. ✓

7. DOCUMENTATION: All signatures present, all entries legible and complete. ✓

CONCLUSION:

Batch ATV40-2024-001234 was manufactured in accordance with Master Batch Record 
MBR-ATV-40-v12 and meets all specifications established in SPEC-FP-ATV-40-v8. 
All deviations have been investigated and determined to have no impact on 
product quality, safety, or efficacy.

DISPOSITION: ✓ APPROVED FOR RELEASE

This batch is approved for distribution.

═══════════════════════════════════════════════════════════════════════════════

QA REVIEWER: Sarah Martinez, QA Director

SIGNATURE: [signed] Sarah Martinez

DATE: 28-JAN-2024

═══════════════════════════════════════════════════════════════════════════════
```

***

### 13.3 Batch Rejection Example

**When batch does not meet requirements:**

```
DISPOSITION: ✗ REJECTED

REASON FOR REJECTION:

Batch ATV40-2024-001235 failed dissolution testing. Results: 72% at 30 minutes 
(specification: NLT 80%). Repeat testing confirmed failure (71%, 73%). OOS 
investigation (OOS-2024-0034) identified root cause as under-granulation due to 
insufficient water addition during Step 3.0.

Impact: Tablets do not meet dissolution specification and may not release drug 
substance adequately in vivo. This is a critical quality defect.

Disposition: Batch REJECTED and destroyed per SOP-QA-025.

Destruction Documentation: Destruction Log DL-2024-0045, witnessed destruction 
completed 05-FEB-2024.

Preventive Action: CAPA-2024-0055 initiated to implement automated water 
addition control system to prevent under-granulation.

QA REVIEWER: Sarah Martinez        SIGNATURE: [signed]        DATE: 02-FEB-2024
```

***

## 14. Record Retention and Archiving

### 14.1 Retention Requirements

**Per 21 CFR 211.180(a):**
"Any production, control, or distribution record that is required to be maintained... shall be retained for at least 1 year after the expiration date of the batch."

**Practical Retention Periods:**

* **Batch records:** 1 year past expiry (minimum) or 3 years past distribution (if no expiry)

* **Deviation reports:** Same as batch record

* **Laboratory records:** Same as batch record

* **Retain samples:** 1 year past expiry, stored in final container

**Best Practice:** Retain for 5-7 years from date of manufacture to cover all jurisdictions and legal claims.

### 14.2 Archiving Process

**Physical (Paper) Batch Records:**

1. QA approval signature affixed
2. All pages numbered and accounted for
3. Placed in archive box with batch number label
4. Stored in secure, climate-controlled archive room
5. Archive database entry created with location code
6. Access restricted to authorized personnel only

**Electronic Batch Records:**

1. Final electronic signature applied
2. System locks record (no further edits allowed)
3. PDF or validated format archived
4. Backup copies stored in separate location
5. Periodic backup verification (readability test)
6. Audit trail archived with record

### 14.3 Retrieval for Inspection or Investigation

**Batch records must be readily retrievable for:**

* Regulatory inspections (FDA, EMA, etc.)

* Customer complaints

* Product recalls

* Stability investigations

* Annual Product Reviews

* Audit trails and trend analysis

**Retrieval Time Expectation:**

* **For current/recent batches:** Within 1 hour

* **For archived batches:** Within 24 hours

***

## 15. Conclusion

The Executed Batch Record is the legal documentary evidence that a pharmaceutical batch was manufactured in compliance with GMP regulations and approved procedures. It provides complete traceability from raw materials to finished product and enables informed batch release decisions.

**Key Principles for EBR Excellence:**

1. **Contemporaneous Recording:** Document as activities occur, not later from memory
2. **Completeness:** No blank fields; all required data captured
3. **Accuracy:** All data correct and verified
4. **Legibility:** All entries readable and understandable
5. **Integrity:** Original data preserved, corrections follow GDP, no falsification
6. **Traceability:** Forward and backward traceability from materials to product
7. **Accountability:** Signatures document who did what and when

**The EBR is not just paperwork — it is the proof that a pharmaceutical product is safe, effective, and manufactured to the highest quality standards.**

***

***

# Part 4: Review Checklist (Comprehensive)

## Document Information

**Document Type:** Reference Checklist\
**Purpose:** Standardized verification framework for pharmaceutical batch record review\
**Scope:** All dosage forms - solid oral, liquid, sterile, biological\
**Regulatory Basis:** 21 CFR Part 211, EU GMP Annex 11, ICH Q7\
**Version:** 2.0\
**Last Updated:** 2024

***

## Overview

This comprehensive checklist contains **68 standardized verification checks** organized into **10 categories** for systematic review of pharmaceutical batch production records. Each check is designed to verify compliance with current Good Manufacturing Practice (cGMP) requirements and ensure product quality, safety, and regulatory compliance.

### How to Use This Checklist

1. **Sequential Review:** Progress through categories in order
2. **Risk-Based Approach:** Focus on CRITICAL checks first
3. **Documentation:** Record findings with check ID reference
4. **Escalation:** Follow severity-based escalation protocols
5. **Completeness:** All checks must be completed or documented as N/A

### Severity Level Definitions

* **CRITICAL:** Direct impact on product quality, patient safety, or regulatory compliance. Requires immediate action and may prevent batch release.

* **MAJOR:** Significant GMP non-compliance that could affect product quality or data integrity. Requires investigation and corrective action.

* **MINOR:** Administrative or procedural gap with minimal quality impact. Should be corrected but does not prevent batch release.

* **OBSERVATION:** Opportunity for improvement or best practice recommendation. No immediate action required.

***

## Category 1: Header & Identification

**Purpose:** Verify batch identity, traceability, and linkage to approved Master Batch Record (MBR)

### H-01: Product Name Verification

**Check ID:** H-01\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.188(b)(2), EU GMP Chapter 4.17

**Description:**\
Verify that the product name on the executed batch record (EBR) exactly matches the approved Master Batch Record and product registration.

**Verification Method:**

* Compare EBR header product name with MBR product name (character-by-character)

* Check for exact match including capitalization, hyphens, and special characters

* Verify strength/potency is included and correct

**Acceptance Criteria:**

* Product name matches MBR exactly with no variations

* Strength/potency clearly stated and correct

* No abbreviations or informal names used

**Failure Example:**\
EBR states "Amoxicillin Caps 500mg" while MBR states "Amoxicillin Capsules 500 mg" - spacing and abbreviation mismatch.

**Why CRITICAL:**\
Product name mismatch can lead to administration of wrong medication, incorrect labeling, mix-ups in supply chain, and serious patient safety events.

***

### H-02: Batch Number Format Validation

**Check ID:** H-02\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.188(b)(1), EU GMP Chapter 4.16

**Description:**\
Verify batch number follows the site's defined format convention, is unique, and provides full traceability.

**Verification Method:**

* Check batch number against site numbering convention (e.g., YYMM-PPPP-NNNN format)

* Verify uniqueness in batch history database

* Confirm no duplicate batch numbers exist for same product

* Check that batch number is legible and recorded in all required locations

**Acceptance Criteria:**

* Batch number conforms to site format specification

* Verified unique in manufacturing history

* Recorded consistently throughout all batch record pages

* Legible and unambiguous

**Failure Example:**\
Batch number "2403-AMX-001" used when site convention requires "2024-03-AMX-0001" format, or batch number already exists for different batch.

**Why CRITICAL:**\
Batch number is the fundamental identifier for traceability, recalls, complaints, and regulatory inspections. Non-unique or malformed batch numbers compromise entire quality system.

***

### H-03: Master Batch Record Reference Verification

**Check ID:** H-03\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.186(a), EU GMP Chapter 4.1

**Description:**\
Verify the EBR was executed against the correct version of the approved Master Batch Record.

**Verification Method:**

* Record MBR document number from EBR

* Record MBR version/revision number from EBR

* Cross-reference against Document Control system

* Verify this MBR version was approved and effective on manufacturing date

* Confirm no superseded or obsolete MBR version was used

**Acceptance Criteria:**

* MBR document number is correct for this product

* MBR version/revision matches current approved version

* MBR was effective on date of manufacturing

* No use of obsolete or draft versions

**Failure Example:**\
EBR executed against MBR version 4.0 when version 4.1 was already approved and effective, or MBR version not recorded in EBR.

**Why CRITICAL:**\
Using wrong MBR version means manufacturing may not follow validated process, may use incorrect parameters, materials, or controls, invalidating the batch.

***

### H-04: Batch Size Verification

**Check ID:** H-04\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.188(b)(3), ICH Q7 Section 6.4

**Description:**\
Verify the intended batch size is recorded and matches MBR specification and validation range.

**Verification Method:**

* Record target batch size from EBR

* Compare with MBR standard batch size

* Verify batch size is within validated range

* Check that scaling calculations (if applicable) are documented

**Acceptance Criteria:**

* Batch size clearly recorded with units

* Matches MBR specification or documented scale factor

* Within validated batch size range (e.g., 50%-150% of standard batch)

* Scaling justification documented if non-standard size

**Failure Example:**\
MBR specifies 10,000 tablet batch, EBR shows 15,000 tablets without validation documentation for this size, or batch size not recorded.

**Why MAJOR:**\
Manufacturing outside validated batch size range may affect process parameters, mixing efficiency, and product quality attributes.

***

### H-05: Manufacturing Date Recording

**Check ID:** H-05\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.188(b)(4), EU GMP Chapter 4.18

**Description:**\
Verify manufacturing date is recorded in correct format and represents actual date of critical manufacturing step.

**Verification Method:**

* Check manufacturing date is present in EBR header

* Verify date format follows site standard (e.g., DD-MMM-YYYY)

* Confirm date is consistent with process step dates recorded in body of EBR

* For multi-day processes, verify which date qualifies as "manufacturing date" per site SOP

**Acceptance Criteria:**

* Manufacturing date clearly recorded

* Date format unambiguous (avoid numeric-only formats like 03/04/2024)

* Date logical and consistent with process chronology

* Defined per SOP for multi-day processes

**Failure Example:**\
Manufacturing date recorded as "03/04/24" (ambiguous format), or date is 15-Mar-2024 but all process steps occurred 18-Mar-2024.

**Why MAJOR:**\
Manufacturing date determines expiry date calculation, stability protocol assignment, and is required for traceability and regulatory reporting.

***

### H-06: Expiry Date Calculation

**Check ID:** H-06\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.137, EU GMP Chapter 4.18

**Description:**\
Verify expiry date is correctly calculated from manufacturing date plus approved shelf life.

**Verification Method:**

* Record expiry date from EBR

* Obtain approved shelf life from product specification

* Calculate: Manufacturing Date + Shelf Life = Expected Expiry Date

* Verify calculation is correct

* Check if retest date (for APIs) is recorded instead/in addition

**Acceptance Criteria:**

* Expiry date calculation mathematically correct

* Shelf life used matches approved specification

* Date format unambiguous

* For APIs, retest date may be used per ICH Q7

**Failure Example:**\
Manufacturing date 15-Mar-2024, shelf life 24 months, expiry date shown as 15-Feb-2026 (should be 14-Mar-2026 or 31-Mar-2026 per company policy).

**Why MAJOR:**\
Incorrect expiry date could result in product being used beyond stability-supported period (patient risk) or discarded prematurely (economic loss).

***

### H-07: Storage Conditions Statement

**Check ID:** H-07\
**Severity:** MINOR\
**Regulatory Reference:** 21 CFR 211.137, ICH Q1A

**Description:**\
Verify storage conditions are stated on batch record and match approved product specification.

**Verification Method:**

* Check if storage conditions recorded in EBR header

* Compare with approved storage conditions from product specification

* Verify format is clear (e.g., "Store at 15-25°C" or "Store below 30°C, protect from moisture")

**Acceptance Criteria:**

* Storage conditions clearly stated

* Matches product specification exactly

* No ambiguous terms (e.g., "cool place" without temperature range)

**Failure Example:**\
EBR states "Store in cool, dry place" when specification requires "Store at 15-25°C, relative humidity not more than 60%".

**Why MINOR:**\
Storage conditions are primarily label information; omission from batch record is administrative gap but product labeling would still contain correct information from packaging SOP.

***

## Category 2: Bill of Materials (BOM)

**Purpose:** Verify all raw materials, excipients, and packaging components are correct, approved, and properly documented

### M-01: Material Completeness Check

**Check ID:** M-01\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.188(b)(5), EU GMP Chapter 4.14

**Description:**\
Verify that all materials specified in the MBR are present in the EBR with no omissions.

**Verification Method:**

* Generate list of all materials from MBR

* Check each material is listed in EBR Bill of Materials

* Account for all components including processing aids

* Verify optional materials are documented as "Not Used" if applicable

**Acceptance Criteria:**

* 100% of MBR materials present in EBR

* No materials omitted

* Optional materials status documented (used or not used)

**Failure Example:**\
MBR lists 8 materials, EBR Bill of Materials shows only 7, missing Magnesium Stearate (lubricant).

**Why CRITICAL:**\
Omission of materials means batch may not meet formula specification, may lack essential functional component, affecting quality and efficacy.

***

### M-02: Unauthorized Materials Check

**Check ID:** M-02\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.100, EU GMP Chapter 4.14

**Description:**\
Verify no materials were added to the batch that are not specified in the approved MBR.

**Verification Method:**

* Review all materials listed in EBR

* Cross-check each against MBR material list

* Identify any materials in EBR but not in MBR

* Check for substitutions or additions

**Acceptance Criteria:**

* All EBR materials are present in MBR

* No unauthorized additions

* Any approved substitutions documented with change control reference

**Failure Example:**\
EBR shows addition of "Silicon Dioxide" as glidant, but MBR does not include this material (unapproved formulation change).

**Why CRITICAL:**\
Unauthorized material additions represent unapproved formulation changes, may not be validated, could affect stability, safety, or efficacy, and invalidate product registration.

***

### M-03: Analytical Report (AR) Number Verification

**Check ID:** M-03\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.84(a), EU GMP Chapter 4.20

**Description:**\
Verify each material used has a valid Analytical Report (Certificate of Analysis) number recorded in the batch record.

**Verification Method:**

* Check each material line in BOM has AR/COA number

* Verify AR numbers are in correct format per site convention

* Confirm AR numbers are legible and complete

* Cross-reference AR numbers with QC database (if accessible)

**Acceptance Criteria:**

* Every material has AR/COA number recorded

* AR number format valid

* AR numbers retrievable from QC system

* No placeholder values (e.g., "TBD", "Pending")

**Failure Example:**\
Lactose Monohydrate lot L-2024-0456 listed without AR number, or AR number field shows "Pending" at time of batch record review.

**Why CRITICAL:**\
AR number is proof that material was tested and approved before use. Missing AR means material quality status unverified, violating fundamental GMP requirement.

***

### M-04: Material Quantity Verification

**Check ID:** M-04\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.101(c), ICH Q7 Section 6.32

**Description:**\
Verify actual material quantities used are within acceptable tolerance of MBR specification.

**Verification Method:**

* For each material, record MBR specified quantity

* Record actual quantity used from EBR

* Calculate deviation: (Actual - Specified) / Specified × 100%

* Compare against acceptance tolerance (typically ±5% for actives, ±10% for excipients)

* Check that overages are justified and validated

**Acceptance Criteria:**

* Actual quantities within ±5% for active ingredients

* Actual quantities within ±10% for excipients (or per validation)

* Overages documented and within validated limits

* Quantity units clearly recorded (kg, g, L, etc.)

**Failure Example:**\
MBR specifies 1000.0 g Active Pharmaceutical Ingredient (API), EBR shows 1065.0 g used (6.5% overage, exceeds ±5% tolerance).

**Why MAJOR:**\
Material quantities outside validated ranges may affect dissolution, content uniformity, stability, or other critical quality attributes.

***

### M-05: Material Grade Verification

**Check ID:** M-05\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.84(d)(2), EU GMP Chapter 4.12

**Description:**\
Verify material grades (e.g., USP, EP, reagent, pharmaceutical grade) match MBR specifications.

**Verification Method:**

* For each material, check grade specified in MBR

* Compare with grade recorded in EBR (often from label or AR)

* Verify compendial grades where specified (USP, Ph.Eur., JP)

* Check for any grade substitutions

**Acceptance Criteria:**

* Material grades match MBR specification

* Compendial grades correctly identified

* No unvalidated grade substitutions

* Grade clearly documented for each material

**Failure Example:**\
MBR specifies "Magnesium Stearate, USP", EBR shows "Magnesium Stearate, Technical Grade" was used (non-compendial substitute).

**Why MAJOR:**\
Wrong material grade may have different purity, particle size, or functional properties, potentially affecting product performance and regulatory compliance.

***

### M-06: Dispensing Operator Signature

**Check ID:** M-06\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.182, EU GMP Chapter 4 Principle

**Description:**\
Verify each material has a signature from the operator who dispensed it, confirming identity and quantity.

**Verification Method:**

* Check each material line for operator signature or ID

* Verify signature is legible or ID is traceable

* Confirm signature/ID is dated

* Ensure no unsigned material entries

**Acceptance Criteria:**

* All materials have dispensing operator signature/ID

* Signatures legible or ID traceable to individual

* Dates present for all signatures

* No blanks or "group signatures"

**Failure Example:**\
Materials 1-6 have operator signatures, materials 7-8 (Magnesium Stearate and Talc) have no signature or show only printed name without signature.

**Why MAJOR:**\
Operator signature is accountability for correct material selection and weighing. Missing signature breaks chain of traceability and represents GMP non-compliance.

***

### M-07: Dispensing Verifier Signature

**Check ID:** M-07\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.101(c), EU GMP Chapter 4.14

**Description:**\
Verify each material dispensing was independently verified by a second person (four-eyes principle).

**Verification Method:**

* Check each material line for verifier signature or ID (distinct from dispenser)

* Verify verifier is different person than dispenser

* Confirm signature is legible or ID traceable

* Check that date is present

**Acceptance Criteria:**

* All materials have verifier signature/ID

* Verifier is different individual than dispenser

* Signatures legible or IDs traceable

* Verification occurred contemporaneously with dispensing (date check)

**Failure Example:**\
Operator ID "JD123" dispensed and verified same material (self-verification), or verifier signature missing for 2 of 8 materials.

**Why MAJOR:**\
Independent verification is critical control to prevent material mix-ups. Single-person dispensing dramatically increases error risk.

***

### M-08: Balance Calibration Verification

**Check ID:** M-08\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.68, EU GMP Annex 15

**Description:**\
Verify balance/scale ID is recorded and calibration was current at time of use.

**Verification Method:**

* Record balance ID from each dispensing entry

* Check calibration due date from equipment log or calibration database

* Verify calibration was valid on date of dispensing

* Confirm balance capacity and readability appropriate for quantities weighed

**Acceptance Criteria:**

* Balance ID recorded for each weighing operation

* Calibration current (not expired) on date of use

* Balance capacity suitable for quantity (typically 10-90% of capacity range)

* Balance readability adequate (typically 0.1% of weighed amount)

**Failure Example:**\
Balance ID "BAL-12" used on 15-Mar-2024, calibration due date was 28-Feb-2024 (expired), or balance ID not recorded.

**Why MAJOR:**\
Uncalibrated balance data is unreliable. All quantity-dependent quality attributes (content uniformity, dissolution, assay) depend on accurate weighing.

***

## Category 3: Equipment & Calibration

**Purpose:** Verify all equipment is appropriate, qualified, calibrated, and clean for intended use

### E-01: Equipment Identification

**Check ID:** E-01\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.182(a), EU GMP Chapter 3.34

**Description:**\
Verify all required equipment is listed with unique identification numbers or asset tags.

**Verification Method:**

* Review MBR for required equipment list

* Check each equipment item is recorded in EBR

* Verify unique ID/asset tag present for each item

* Confirm equipment IDs are legible and traceable to equipment log

**Acceptance Criteria:**

* All MBR-required equipment listed in EBR

* Each item has unique ID or asset tag

* IDs are traceable to site equipment inventory

* Major equipment not identified by generic names (e.g., not just "mixer" but "MIX-304")

**Failure Example:**\
Blender recorded as "V-blender in Room 205" without asset ID, or tablet press ID not recorded (only "Tablet Press" written).

**Why MAJOR:**\
Equipment ID is essential for traceability, investigation of quality issues, and verification of calibration and qualification status.

***

### E-02: Equipment Calibration Status

**Check ID:** E-02\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.68, EU GMP Annex 15 Section 3

**Description:**\
Verify calibration of all critical equipment was current (not expired) at time of use.

**Verification Method:**

* For each equipment item, determine if calibration-required

* Record last calibration date or next due date from equipment label or log

* Compare against date of use in batch

* Verify calibration interval not exceeded

**Acceptance Criteria:**

* All calibration-required equipment has current calibration

* Calibration date/due date recorded in batch record or verifiable from equipment log

* No equipment used beyond calibration due date

* Calibration frequency meets equipment SOP requirements

**Failure Example:**\
Temperature probe TP-15 used on 15-Mar-2024, calibration sticker shows "Next Cal Due: 01-Mar-2024" (14 days expired).

**Why CRITICAL:**\
Expired calibration means equipment measurements may be inaccurate, potentially leading to out-of-specification product released based on false data.

***

### E-03: Equipment Cleaning Status (Line Clearance)

**Check ID:** E-03\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.182(a), EU GMP Chapter 5.21

**Description:**\
Verify line clearance was performed confirming equipment was clean and clear of previous product/materials before use.

**Verification Method:**

* Check for line clearance signature or checklist completion

* Verify clearance occurred immediately before batch start

* Review clearance checklist items if available (previous labels removed, equipment clean, area clear)

* Confirm clearance performed by qualified person

**Acceptance Criteria:**

* Line clearance documented for all equipment areas

* Clearance completed before batch processing began

* Signature and date present

* All clearance checklist items completed if applicable

**Failure Example:**\
Line clearance signature dated 12-Mar-2024 but batch processing started 15-Mar-2024 (3-day gap, equipment could have been re-contaminated).

**Why MAJOR:**\
Inadequate line clearance is leading cause of cross-contamination and mix-ups, which can lead to serious quality incidents and recalls.

***

### E-04: Equipment Capacity Appropriateness

**Check ID:** E-04\
**Severity:** MINOR\
**Regulatory Reference:** ICH Q7 Section 5.31, EU GMP Chapter 3.4

**Description:**\
Verify equipment capacity is appropriate for batch size (typically 50-80% of rated capacity for optimal performance).

**Verification Method:**

* Record batch size or processing volume

* Record equipment rated capacity from equipment log

* Calculate: (Batch Size / Equipment Capacity) × 100%

* Verify result is within optimal range per validation

**Acceptance Criteria:**

* Processing volume is 25-90% of equipment capacity (typical range, may vary)

* Volume is within validated range for that equipment

* For blenders/mixers, volume is within validated fill volume range

**Failure Example:**\
Batch size 500 kg, blender rated capacity 600 kg (83% fill - acceptable), but validated range is 40-70% (batch exceeds validated range).

**Why MINOR:**\
Equipment capacity mismatch may affect process efficiency but typically does not affect product quality if within validated range. Classification escalates to MAJOR if outside validated range.

***

### E-05: Equipment Qualification Status

**Check ID:** E-05\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.68, EU GMP Annex 15

**Description:**\
Verify critical equipment has current qualification status (IQ/OQ/PQ not expired or re-qualification not overdue).

**Verification Method:**

* Identify critical equipment requiring qualification

* Check qualification status from equipment log or validation database

* Verify IQ, OQ, PQ completed and documented

* Check re-qualification due dates not exceeded

**Acceptance Criteria:**

* All critical equipment has completed IQ/OQ/PQ

* Re-qualification due dates not exceeded (if applicable)

* Qualification documents retrievable and approved

* No equipment in "unqualified" or "quarantine" status

**Failure Example:**\
Autoclave AUT-05 used for sterilization, last PQ completed 2019, re-qualification due 2023 (annual), now 2024 (overdue).

**Why MAJOR:**\
Using unqualified equipment means process has not been demonstrated to consistently produce product meeting specifications, invalidating GMP compliance.

***

### E-06: Equipment Substitution Documentation

**Check ID:** E-06\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.100(a), ICH Q7 Section 12.3

**Description:**\
Verify any equipment substitutions from MBR are documented and justified with equivalency rationale or change control.

**Verification Method:**

* Compare equipment listed in EBR vs. MBR

* Identify any differences (substitutions)

* Check for documentation: change control number, equivalency study, or justification memo

* Verify substitution was approved before use

**Acceptance Criteria:**

* No equipment substitutions, OR

* All substitutions documented with change control reference

* Equivalency demonstrated or justified

* Substitutions approved by QA before batch execution

**Failure Example:**\
MBR specifies "Blender BLD-12", EBR shows "Blender BLD-14" used with note "BLD-12 under maintenance" but no change control or equivalency documentation.

**Why MAJOR:**\
Equipment substitutions may affect process parameters, validated conditions, and product quality if not properly evaluated and controlled.

***

## Category 4: Process Parameters

**Purpose:** Verify all critical and non-critical process parameters were recorded and within specification

### P-01: Critical Process Parameter Recording

**Check ID:** P-01\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.188(b)(6), ICH Q11

**Description:**\
Verify all Critical Process Parameters (CPPs) identified in validation or FMEA are recorded in the batch record.

**Verification Method:**

* Obtain list of CPPs from validation protocol or MBR

* Check each CPP is recorded in EBR at required process step

* Verify no CPP fields are blank or marked "N/A" inappropriately

* Confirm units of measurement are recorded

**Acceptance Criteria:**

* 100% of CPPs recorded

* No blank CPP fields

* Units clearly stated (°C, rpm, bar, minutes, etc.)

* Readings recorded at specified frequency

**Failure Example:**\
Granulation step: mixing time (CPP) not recorded, or blending speed field left blank.

**Why CRITICAL:**\
CPPs directly impact Critical Quality Attributes (CQAs). Missing CPP data means batch may not have been manufactured under validated conditions, and quality cannot be assured.

***

### P-02: Critical Process Parameter Compliance

**Check ID:** P-02\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.110(a), ICH Q8(R2)

**Description:**\
Verify all recorded CPP values fall within MBR-specified acceptance ranges.

**Verification Method:**

* For each CPP, record actual value from EBR

* Record acceptance range from MBR

* Verify: Min ≤ Actual ≤ Max

* Flag any values outside range for deviation documentation check

**Acceptance Criteria:**

* All CPP values within MBR specifications

* Values recorded with appropriate precision (e.g., temperature to 0.1°C if specified)

* Range excursions documented with deviation report

**Failure Example:**\
Drying temperature CPP range: 60-70°C, actual recorded: 73°C (exceeds maximum by 3°C) without deviation report.

**Why CRITICAL:**\
CPP excursions mean process operated outside Design Space or validated range, potentially affecting product CQAs. Batch may not meet specifications.

***

### P-03: Non-Critical Parameter Recording

**Check ID:** P-03\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.188(b)(11)

**Description:**\
Verify non-critical process parameters are recorded as required by MBR.

**Verification Method:**

* Identify non-critical parameters from MBR

* Check each is recorded in EBR

* Verify values are reasonable and consistent with process

**Acceptance Criteria:**

* All MBR-required non-critical parameters recorded

* Values are within typical operational ranges

* Units clearly stated

**Failure Example:**\
Coating pan speed (non-critical parameter per validation) required to be recorded, but field left blank or shows "as usual".

**Why MAJOR:**\
Even non-critical parameters provide process understanding, troubleshooting data, and demonstrate process control. Omissions represent incomplete batch documentation.

***

### P-04: Process Step Sequence Verification

**Check ID:** P-04\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.188(b)(8), EU GMP Chapter 4.15

**Description:**\
Verify manufacturing steps were performed in the sequence specified in the MBR.

**Verification Method:**

* List process steps from MBR in order

* List process steps from EBR using recorded times/dates

* Compare sequences

* Identify any out-of-sequence steps

**Acceptance Criteria:**

* Process steps executed in MBR-specified order

* No steps skipped unless documented

* No steps reversed or performed out of order

* Any sequence deviations documented with deviation report

**Failure Example:**\
MBR sequence: 1) Dispensing, 2) Sifting, 3) Blending, 4) Granulation. EBR shows: Dispensing, Blending (performed before sifting), Sifting, Granulation.

**Why CRITICAL:**\
Process steps are sequenced based on validation and scientific rationale. Out-of-sequence steps can fundamentally alter the process, affecting product quality and rendering validation inapplicable.

***

### P-05: Process Step Timing Documentation

**Check ID:** P-05\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.188(b)(4), ICH Q7 Section 6.41

**Description:**\
Verify start and end times are recorded for all timed process steps.

**Verification Method:**

* Identify timed steps from MBR (e.g., blending for 15 minutes, drying for 2 hours)

* Check start time recorded

* Check end time recorded

* Calculate actual duration: End - Start

* Verify duration meets MBR specification

**Acceptance Criteria:**

* Start and end times recorded for all timed steps

* Times in unambiguous format (24-hour or clear AM/PM)

* Calculated duration matches MBR requirement

* Time deviations documented if present

**Failure Example:**\
Blending step requires "Mix for 10 minutes", start time recorded (14:30), end time blank, or end time 14:37 (7 minutes - insufficient).

**Why MAJOR:**\
Process timing affects mixing uniformity, granule properties, drying endpoints, and other quality attributes. Undocumented timing prevents verification of process control.

***

### P-06: Deviation Documentation for Parameter Excursions

**Check ID:** P-06\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.192, EU GMP Chapter 1 Principle

**Description:**\
Verify all process parameter excursions are documented with deviation report numbers and impact assessments.

**Verification Method:**

* Review all parameter entries for out-of-spec values

* Check for annotation referencing deviation report

* Record deviation report numbers

* Verify deviation reports exist and are closed appropriately

**Acceptance Criteria:**

* All parameter excursions have deviation reports

* Deviation numbers recorded in batch record at point of occurrence

* Impact assessments completed in deviation reports

* Deviations approved before batch disposition

**Failure Example:**\
Compression force deviated from specification (noted in record), but no deviation report number referenced, or deviation report still open at time of batch release.

**Why CRITICAL:**\
Undocumented deviations mean quality impact not assessed, root cause not investigated, and CAPA not implemented. FDA considers this "fundamental GMP failure."

***

### P-07: Environmental Conditions Verification

**Check ID:** P-07\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.42, EU GMP Annex 1

**Description:**\
Verify environmental conditions (room temperature, humidity, classification) met requirements during processing.

**Verification Method:**

* Check if environmental data recorded in batch record or by reference to room logs

* Compare actual conditions against specifications (e.g., "Room temperature 20-25°C, RH <60%")

* Verify cleanroom classification maintained if applicable

* Check monitoring frequency adequate

**Acceptance Criteria:**

* Environmental conditions within specified ranges

* Continuous monitoring for critical areas (e.g., sterile manufacturing)

* Excursions documented and impact assessed

* Data source clearly referenced

**Failure Example:**\
Batch processed in controlled humidity area, specification ≤50% RH, room log shows 55-58% RH during 2-hour period, not documented in batch record.

**Why MAJOR:**\
Environmental conditions can significantly affect moisture-sensitive materials, sterility assurance, and product stability. Non-compliance may invalidate batch.

***

### P-08: Hold Time Verification

**Check ID:** P-08\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.111, ICH Q7 Section 6.42

**Description:**\
Verify hold times between process steps are within validated limits.

**Verification Method:**

* Identify process hold points from MBR (e.g., "Granulate within 4 hours of wet massing")

* Calculate actual hold times from EBR timestamps

* Compare against validated maximum hold times

* Check for extended holds requiring re-testing

**Acceptance Criteria:**

* All hold times within validated limits

* Hold time calculations correct

* Extended holds justified and supported by stability data or re-test results

* Product in appropriate quarantine status during holds

**Failure Example:**\
Wet granulation completed 10-Mar-2024 at 14:00, drying started 11-Mar-2024 at 10:00 (20-hour hold), validated maximum hold time is 8 hours.

**Why MAJOR:**\
Excessive hold times may cause degradation, moisture uptake, microbial growth, or other quality changes not covered by validation.

***

## Category 5: In-Process Controls (IPC)

**Purpose:** Verify all required in-process testing was performed with acceptable results

### I-01: In-Process Control Test Completion

**Check ID:** I-01\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.110(c), EU GMP Chapter 6.17

**Description:**\
Verify all MBR-required IPC tests were performed at specified process stages.

**Verification Method:**

* List all IPC tests from MBR (e.g., blend uniformity, moisture content, tablet weight)

* Check each test is documented in EBR

* Verify tests performed at correct process stage

* Confirm no required tests omitted

**Acceptance Criteria:**

* 100% of required IPC tests documented

* Tests performed at correct stage

* Test methods documented or referenced

* Raw data or results summary recorded

**Failure Example:**\
MBR requires blend uniformity sampling after blending, EBR shows blending completed but no blend uniformity test documented.

**Why CRITICAL:**\
IPC tests are critical controls to verify process is proceeding correctly. Omitted tests mean quality could not be verified at that stage, potentially allowing defective intermediates to proceed.

***

### I-02: In-Process Control Results Compliance

**Check ID:** I-02\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.110(c), ICH Q6A

**Description:**\
Verify all IPC test results meet acceptance criteria specified in MBR or specifications.

**Verification Method:**

* For each IPC test, record result from EBR

* Record acceptance criteria from MBR

* Compare result vs. criteria

* Flag any OOS (Out of Specification) results

**Acceptance Criteria:**

* All IPC results within acceptance criteria

* Results recorded with appropriate units and precision

* OOS results documented with investigation and disposition

* Re-test results documented if applicable

**Failure Example:**\
Tablet hardness specification: 80-120 N, IPC result: 65 N (fails low), no investigation documented, batch continued to coating step.

**Why CRITICAL:**\
Failing IPC results indicate process not under control. Continuing processing with failing intermediates may result in non-conforming final product, wasting resources and creating quality risk.

***

### I-03: In-Process Control Test Frequency

**Check ID:** I-03\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.110(c), ICH Q8(R2)

**Description:**\
Verify IPC tests were performed at the frequency specified in MBR (e.g., hourly, every 30 minutes, per lot).

**Verification Method:**

* Record required test frequency from MBR

* Count actual number of tests performed in EBR

* Calculate expected number based on process duration

* Compare actual vs. expected

**Acceptance Criteria:**

* Test frequency meets or exceeds MBR requirement

* For time-based frequency, tests performed throughout operation (not clustered)

* Rationale documented if frequency reduced

**Failure Example:**\
Tablet weight IPC required "every 30 minutes during compression", 4-hour compression run (8 tests expected), only 3 tests documented.

**Why MAJOR:**\
Reduced test frequency may miss process drift or failures, reducing assurance that process remained in control throughout operation.

***

### I-04: In-Process Control Failure Documentation

**Check ID:** I-04\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.192, EU GMP Chapter 1.4

**Description:**\
Verify any IPC failures are documented with investigation, corrective actions, and impact assessment.

**Verification Method:**

* Identify any IPC results outside acceptance criteria

* Check for deviation report reference

* Verify investigation documented (root cause, corrective action)

* Check batch disposition considers IPC failure impact

**Acceptance Criteria:**

* All IPC failures have deviation reports

* Root cause investigations completed

* Corrective actions documented and implemented

* Impact on batch quality assessed

* QA approval of disposition

**Failure Example:**\
Moisture content IPC failed (7.5%, spec 2-5%), noted in record as "Re-dried for 1 hour" with no deviation report, investigation, or QA assessment.

**Why CRITICAL:**\
IPC failures indicate process issues requiring investigation. Lack of documentation suggests inadequate quality system, potential for recurrence, and risk to product quality.

***

### I-05: Re-Test Documentation

**Check ID:** I-05\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.192, ICH Q6A Section 1.6

**Description:**\
Verify any re-tests of IPC samples are documented with justification and results.

**Verification Method:**

* Identify instances where IPC tests were repeated

* Check for justification (e.g., "Initial test questionable due to equipment malfunction")

* Verify all test results recorded (initial and re-test)

* Check that re-testing followed approved procedure

**Acceptance Criteria:**

* Re-tests justified with specific reason

* Both initial and re-test results documented

* Re-test procedure followed (e.g., analyst did not self-re-test)

* OOT (Out of Trend) investigations if applicable

**Failure Example:**\
Blend uniformity initial result 92% (spec 95-105%), re-tested result 98% (pass), no justification for re-test documented.

**Why MAJOR:**\
Unjustified re-testing may indicate data cherry-picking or laboratory errors. All results must be documented to maintain data integrity.

***

### I-06: IPC Operator Signatures

**Check ID:** I-06\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.182, EU GMP Chapter 4

**Description:**\
Verify IPC tests are signed/initialed by person who performed test or sampled material.

**Verification Method:**

* Check each IPC entry for operator signature or ID

* Verify signature legible or ID traceable

* Confirm date accompanies signature

* Check for supervisor/reviewer signature if required by SOP

**Acceptance Criteria:**

* All IPC entries signed by performer

* Signatures dated

* Reviewer signatures present where required

* No blanks or group signatures

**Failure Example:**\
Tablet weight checks 1-5 signed, checks 6-8 unsigned, or all checks signed "Production Team" (group signature, not individual).

**Why MAJOR:**\
Individual accountability is core GMP principle. Missing signatures break traceability and indicate inadequate documentation practices.

***

### I-07: IPC Sampling Method Verification

**Check ID:** I-07\
**Severity:** MINOR\
**Regulatory Reference:** ICH Q2(R2), EU GMP Chapter 6.14

**Description:**\
Verify IPC sampling points and methods follow MBR specifications.

**Verification Method:**

* Check MBR for specified sampling points (e.g., "Sample from 3 locations: top, middle, bottom")

* Verify EBR documents sampling locations used

* Check sample size matches specification

* Verify sampling equipment identified if applicable

**Acceptance Criteria:**

* Sampling locations documented and match MBR

* Sample quantities appropriate

* Sampling equipment clean and appropriate

* Representative sampling demonstrated

**Failure Example:**\
Blend uniformity sampling specified "10 locations per validation protocol", EBR shows "samples taken" without specifying locations or number.

**Why MINOR:**\
Sampling method documentation is important for data integrity but typically does not affect product quality if test results are acceptable. Classification escalates if sampling method could affect result validity.

***

## Category 6: Environmental Monitoring

**Purpose:** Verify environmental conditions were monitored and maintained within specifications

### V-01: Temperature Control Verification

**Check ID:** V-01\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.42, EU GMP Annex 1

**Description:**\
Verify manufacturing area temperature was within specified range during processing.

**Verification Method:**

* Identify temperature specification for manufacturing area

* Review temperature monitoring data (chart recorder, data logger, or manual readings)

* Verify readings within specification throughout batch processing

* Check monitoring frequency adequate

**Acceptance Criteria:**

* Temperature within specified range (e.g., 20-25°C) for entire batch

* Continuous or frequent monitoring (e.g., every 30 minutes minimum)

* Data traceable to calibrated monitoring equipment

* Excursions documented if present

**Failure Example:**\
Specification 20-25°C, monitoring shows 27°C for 45-minute period during granulation, no deviation documented.

**Why MAJOR:**\
Temperature affects material properties (flow, moisture), reaction rates, and product stability. Excursions may affect product quality.

***

### V-02: Relative Humidity Control Verification

**Check ID:** V-02\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.42, ICH Q1A

**Description:**\
Verify relative humidity was within specified range during processing of moisture-sensitive products.

**Verification Method:**

* Identify RH specification for manufacturing area

* Review humidity monitoring data

* Verify readings within specification throughout batch processing

* Check if product is moisture-sensitive requiring humidity control

**Acceptance Criteria:**

* RH within specified range (e.g., 30-50%) for entire batch

* Continuous or frequent monitoring

* Excursions documented and impact assessed

* Control system functioning (dehumidification if required)

**Failure Example:**\
Hygroscopic product specification ≤40% RH, monitoring shows 48-52% RH for 3-hour period during blending and compression.

**Why MAJOR:**\
Elevated humidity can cause moisture uptake in hygroscopic products, affecting dissolution, stability, and tablet hardness. May render batch non-conforming.

***

### V-03: Differential Pressure Verification

**Check ID:** V-03\
**Severity:** MINOR\
**Regulatory Reference:** EU GMP Annex 1, ISO 14644

**Description:**\
Verify differential pressure between classified areas met requirements to prevent cross-contamination.

**Verification Method:**

* Check differential pressure specification (e.g., 10-15 Pa between grades)

* Review pressure monitoring charts or logs

* Verify readings within specification during batch

* Check for pressure reversals or loss of cascade

**Acceptance Criteria:**

* Differential pressure maintained throughout batch

* No pressure reversals

* Monitoring continuous for critical applications (sterile manufacturing)

* Excursions documented if present

**Failure Example:**\
Grade C to Grade D differential pressure specification >10 Pa, monitoring shows 5-8 Pa for 2-hour period, no alarm recorded.

**Why MINOR:**\
For non-sterile products, differential pressure is secondary control. For sterile products, this becomes MAJOR or CRITICAL due to contamination risk.

***

### V-04: Environmental Excursion Documentation

**Check ID:** V-04\
**Severity:** CRITICAL (if undocumented), MAJOR (if documented)\
**Regulatory Reference:** 21 CFR 211.192, EU GMP Chapter 1

**Description:**\
Verify any environmental excursions (temperature, humidity, differential pressure, power failures) are documented with impact assessment.

**Verification Method:**

* Review environmental monitoring data for excursions

* Check for corresponding deviation reports

* Verify impact assessments completed

* Check batch disposition considers environmental impact

**Acceptance Criteria:**

* All environmental excursions documented

* Deviation reports with impact assessment

* Root cause and corrective actions documented

* QA review of excursion impact on batch

**Failure Example:**\
Temperature excursion to 28°C (spec 20-25°C) for 30 minutes noted in room log but not referenced in batch record or deviation system.

**Why CRITICAL if undocumented:**\
Undocumented environmental excursions suggest poor quality awareness and potential hidden risks. Documentation with assessment reduces to MAJOR severity.

***

### V-05: Environmental Monitoring Frequency

**Check ID:** V-05\
**Severity:** MINOR\
**Regulatory Reference:** EU GMP Annex 1, ICH Q9

**Description:**\
Verify environmental monitoring frequency meets MBR or SOP requirements.

**Verification Method:**

* Determine required monitoring frequency from MBR or environmental monitoring SOP

* Count actual monitoring points from logs

* Calculate expected number based on batch duration

* Compare actual vs. required frequency

**Acceptance Criteria:**

* Monitoring frequency meets or exceeds requirement

* Continuous monitoring for critical parameters (sterile manufacturing)

* Manual readings at specified intervals if not continuous

* Data gaps explained (e.g., equipment malfunction with backup readings)

**Failure Example:**\
SOP requires "Temperature and RH recorded every 2 hours", batch duration 8 hours (4 readings expected), only 2 readings documented.

**Why MINOR:**\
Reduced monitoring frequency is documentation gap but typically does not affect product quality if readings taken are within specification. Escalates to MAJOR if gaps coincide with processing critical steps.

***

## Category 7: Yield & Reconciliation

**Purpose:** Verify material accountability and yield calculations are accurate and within specifications

### Y-01: Stage Yield Calculation Presence

**Check ID:** Y-01\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.188(b)(7), EU GMP Chapter 4.15

**Description:**\
Verify yield is calculated at each required manufacturing stage as specified in MBR.

**Verification Method:**

* Identify required yield calculation points from MBR (e.g., after blending, after compression, after coating)

* Check each stage has yield documented in EBR

* Verify yield formula is stated or understood

**Acceptance Criteria:**

* Yield calculated at all MBR-required stages

* Formula clear (e.g., (Actual Output / Theoretical Output) × 100%)

* Units appropriate (%, kg, units produced)

* Intermediate and final yields documented

**Failure Example:**\
MBR requires yield after granulation, compression, and coating. EBR shows only final yield after coating, intermediate yields missing.

**Why MAJOR:**\
Stage yields are critical for material accountability and detecting process inefficiencies or losses. Missing yields prevent investigation of losses.

***

### Y-02: Yield Calculation Accuracy

**Check ID:** Y-02\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.188(b)(7), ICH Q7 Section 6.42

**Description:**\
Verify yield calculations are mathematically correct.

**Verification Method:**

* For each yield calculation, obtain input values (theoretical and actual)

* Recalculate: (Actual / Theoretical) × 100%

* Compare calculated result with recorded yield

* Check rounding is appropriate (typically to 0.1%)

**Acceptance Criteria:**

* All yield calculations mathematically correct

* Input values clearly documented

* Rounding errors ≤0.1%

* Formula application correct

**Failure Example:**\
Theoretical yield 50.0 kg, actual yield 48.5 kg, recorded yield 97.9% (should be 97.0% - calculation error).

**Why MAJOR:**\
Incorrect yield calculations may mask material losses, processing errors, or theft. Financial and regulatory implications significant.

***

### Y-03: Stage Yield Compliance

**Check ID:** Y-03\
**Severity:** CRITICAL (if below minimum), MAJOR (if above maximum)\
**Regulatory Reference:** 21 CFR 211.101(c), EU GMP Chapter 4.15

**Description:**\
Verify stage yields fall within MBR-specified acceptance ranges.

**Verification Method:**

* For each stage, record acceptance range from MBR (e.g., 95-105%)

* Record actual yield from EBR

* Compare: Min ≤ Actual ≤ Max

* Flag out-of-range yields

**Acceptance Criteria:**

* All stage yields within MBR ranges

* Low yields investigated

* High yields investigated (potential contamination or incorrect calculation)

* Investigations documented if yield out of range

**Failure Example:**\
Compression yield specification 97-102%, actual yield 92%, no investigation or deviation report.

**Why CRITICAL if low:**\
Low yield may indicate material loss, processing errors, or quality issues. Product may not meet specifications. High yield suggests calculation errors or contamination.

***

### Y-04: Overall Yield Compliance

**Check ID:** Y-04\
**Severity:** CRITICAL (if below minimum), MAJOR (if above maximum)\
**Regulatory Reference:** 21 CFR 211.101(c), EU GMP Chapter 4.15

**Description:**\
Verify overall batch yield (final output vs. initial input) is within specification.

**Verification Method:**

* Record overall yield specification from MBR

* Record actual overall yield from EBR

* Verify yield within acceptable range

* Check cumulative yield through all stages is logical

**Acceptance Criteria:**

* Overall yield within specification (typically 90-105% depending on product)

* Yield consistent with stage yields (cumulative)

* Deviations investigated

* Low yields do not automatically disqualify batch if quality is acceptable

**Failure Example:**\
Overall yield specification ≥92%, actual yield 88%, batch disposition "Release" without investigation or justification.

**Why CRITICAL if low:**\
Severely low yield indicates significant processing issues or material losses requiring investigation. Batch quality may be compromised.

***

### Y-05: Label Reconciliation

**Check ID:** Y-05\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.125(e), EU GMP Chapter 9.9

**Description:**\
Verify label reconciliation is complete and accurate: Issued = Used + Returned + Destroyed.

**Verification Method:**

* Record labels issued from inventory

* Record labels used on batch

* Record labels returned to inventory

* Record labels destroyed (with destruction witnessed/signed)

* Calculate: Used + Returned + Destroyed = Issued?

**Acceptance Criteria:**

* Reconciliation equation balances exactly

* All label serial numbers accounted for

* No discrepancies (unaccounted labels)

* Destruction witnessed and documented if applicable

**Failure Example:**\
1000 labels issued, 945 used, 50 returned, 3 destroyed = 998 accounted for (2 labels unaccounted for).

**Why CRITICAL:**\
Unaccounted labels create risk of counterfeiting, diversion, or mislabeling. FDA considers label control a critical GMP requirement.

***

### Y-06: Unaccounted Labels Investigation

**Check ID:** Y-06\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.125(e), EU GMP Chapter 9.9

**Description:**\
Verify any unaccounted labels (positive or negative discrepancy) are investigated and reconciled.

**Verification Method:**

* Check reconciliation for any discrepancies

* Verify investigation initiated if discrepancy found

* Check investigation documented (where labels went/came from)

* Verify QA disposition of investigation

**Acceptance Criteria:**

* Zero discrepancy, OR

* Discrepancy investigated with documented conclusion

* Labels accounted for or confirmed destroyed/lost with evidence

* Batch disposition considers label control impact

**Failure Example:**\
5 extra labels found (negative discrepancy - more labels than issued), noted as "must have been in packaging area from previous batch", no formal investigation.

**Why CRITICAL:**\
Label discrepancies suggest control failures with serious regulatory and safety implications. Must be thoroughly investigated every time.

***

### Y-07: Packaging Material Reconciliation

**Check ID:** Y-07\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.188(b)(7), EU GMP Chapter 4.15

**Description:**\
Verify packaging materials (bottles, blisters, cartons, inserts) are reconciled: Issued = Used + Returned + Destroyed.

**Verification Method:**

* For each packaging component, record issued quantity

* Record used quantity

* Record returned and destroyed quantities

* Calculate reconciliation

* Verify within acceptable variance (typically ±5% for low-value items, 0% for printed materials)

**Acceptance Criteria:**

* Reconciliation within acceptable variance per SOP

* Printed materials reconciled to 0 discrepancy

* Bulk materials (bottles, caps) within ±5% or per SOP

* Discrepancies investigated if exceeding limits

**Failure Example:**\
Cartons issued: 1000, used: 945, returned: 20, destroyed: 0, total 965 (35 unaccounted, 3.5% discrepancy) - investigation required but not documented.

**Why MAJOR:**\
Packaging material control prevents mix-ups and is GMP requirement. Less critical than labels but still important for accountability.

***

### Y-08: Yield Deviation Investigation

**Check ID:** Y-08\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.192, ICH Q9

**Description:**\
Verify any yield deviations outside acceptance ranges are investigated with root cause analysis and CAPA.

**Verification Method:**

* Identify any yields outside specified ranges

* Check for deviation report reference

* Verify investigation includes root cause analysis

* Check corrective and preventive actions assigned

* Verify QA approval of investigation conclusions

**Acceptance Criteria:**

* All yield deviations have deviation reports

* Root cause identified or investigation ongoing

* CAPA assigned if systemic issue found

* Investigation thorough and scientifically sound

**Failure Example:**\
Coating yield 89% (spec 95-102%), deviation report opened, investigation states "operator error" without further detail, no CAPA assigned.

**Why MAJOR:**\
Yield deviations indicate process issues. Inadequate investigation risks recurrence and suggests weak quality system.

***

## Category 8: QC/Lab Results

**Purpose:** Verify all quality control testing was completed with acceptable results

### Q-01: Required QC Test Completion

**Check ID:** Q-01\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.165, EU GMP Chapter 6.1

**Description:**\
Verify all required QC tests per product specification were performed.

**Verification Method:**

* Obtain list of required tests from product specification

* Check each test is documented in batch record or COA

* Verify no tests omitted

* Confirm test methods match approved methods

**Acceptance Criteria:**

* 100% of required tests completed

* Test methods match specifications

* Test results documented or COA attached

* No tests marked "Pending" at time of batch disposition

**Failure Example:**\
Product specification requires 12 tests (appearance, assay, dissolution, impurities, etc.), COA shows 11 tests, microbial limits testing missing.

**Why CRITICAL:**\
Incomplete testing means product quality not fully verified. Batch cannot be released without all required tests meeting specifications.

***

### Q-02: QC Results Compliance

**Check ID:** Q-02\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.165(a), ICH Q6A

**Description:**\
Verify all QC test results meet acceptance criteria specified in product specification.

**Verification Method:**

* For each test, record result from COA

* Record acceptance criteria from specification

* Verify result meets criteria

* Check units and significant figures appropriate

**Acceptance Criteria:**

* All test results within acceptance limits

* Results reported with appropriate precision

* Statistical tests applied correctly if required (e.g., dissolution Q value)

* Retest results documented if applicable

**Failure Example:**\
Assay specification 95.0-105.0% of label claim, result 94.7% (fails low), batch disposition "Release" without justification.

**Why CRITICAL:**\
Out-of-specification results mean product does not meet quality standards. Releasing non-conforming product creates patient safety and regulatory risks.

***

### Q-03: Out-of-Specification (OOS) Investigation

**Check ID:** Q-03\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.192, FDA OOS Guidance

**Description:**\
Verify any OOS results are investigated per approved OOS procedure with documented conclusions.

**Verification Method:**

* Identify any OOS results in COA or batch record

* Check for OOS investigation report

* Verify investigation includes laboratory investigation (Phase I) and manufacturing review (Phase II if needed)

* Check investigation conclusion and batch disposition rationale

**Acceptance Criteria:**

* All OOS results have formal investigations

* Phase I (laboratory) investigation completed

* Phase II (manufacturing) investigation if assignable lab cause not found

* Investigation conclusions approved by QA

* Batch disposition consistent with investigation findings

**Failure Example:**\
Dissolution result failed at 45 minutes (spec >80%, result 78%), re-tested with passing result, no OOS investigation documented, original failing result not addressed.

**Why CRITICAL:**\
OOS investigations are mandated by FDA. Failure to investigate or inadequate investigation is serious GMP violation and indicates poor quality culture.

***

### Q-04: Certificate of Analysis Completeness

**Check ID:** Q-04\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.194, EU GMP Chapter 6.16

**Description:**\
Verify Certificate of Analysis (COA) is complete, accurate, and properly approved.

**Verification Method:**

* Check COA contains all required elements: product name, batch number, test results, specifications, approval signatures

* Verify product and batch information matches batch record

* Confirm QC manager/designee signature present

* Check date of analysis and approval dates logical

**Acceptance Criteria:**

* COA complete with all required information

* Product/batch identification correct

* All tests listed with results and specifications

* Approved signatures present

* Dates logical (testing after manufacturing, approval after testing)

**Failure Example:**\
COA missing QC manager approval signature, or batch number on COA (B2024-003) does not match batch record (B2024-004).

**Why MAJOR:**\
COA is official quality release document. Incomplete or incorrect COA creates documentation and traceability issues but typically does not affect product quality itself.

***

### Q-05: Laboratory Reference Documentation

**Check ID:** Q-05\
**Severity:** MINOR\
**Regulatory Reference:** 21 CFR 211.194(a)(7), EU GMP Chapter 4.27

**Description:**\
Verify laboratory notebook references or LIMS entry numbers are documented for traceability to raw data.

**Verification Method:**

* Check if COA or batch record includes lab notebook references

* Verify LIMS batch/sample ID numbers recorded

* Confirm traceability to raw analytical data exists

* Check analyst IDs or signatures present

**Acceptance Criteria:**

* Lab notebook numbers or LIMS IDs recorded

* Traceability to raw data established

* Analyst identification present

* Data retrievable for inspection or investigation

**Failure Example:**\
COA shows test results but no lab notebook reference, LIMS ID, or analyst identification (data traceability unclear).

**Why MINOR:**\
Laboratory reference documentation aids inspections and investigations but does not directly affect product quality. COA itself is primary documentation.

***

### Q-06: Reference Standard Information

**Check ID:** Q-06\
**Severity:** MINOR\
**Regulatory Reference:** 21 CFR 211.194(a)(2), ICH Q2(R2)

**Description:**\
Verify reference standard information is documented (lot number, expiry date, source).

**Verification Method:**

* Check if reference standards used are identified in batch record or COA

* Verify lot numbers recorded

* Check expiry dates were valid at time of use

* Confirm source/supplier documented

**Acceptance Criteria:**

* Reference standard identity, lot, and expiry documented

* Standards were valid (not expired) when used

* Traceability to COA for reference standard

* USP/EP reference standards used where required

**Failure Example:**\
Assay performed using reference standard lot RS-2024-012, expiry date not recorded, cannot verify standard was valid at time of testing.

**Why MINOR:**\
Reference standard documentation is good practice for data integrity but errors typically detected in laboratory controls before affecting product release.

***

### Q-07: Stability Sample Documentation

**Check ID:** Q-07\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.166, ICH Q1A

**Description:**\
Verify stability samples were pulled per stability protocol requirements.

**Verification Method:**

* Check batch record for stability sampling documentation

* Verify quantity pulled matches protocol

* Confirm storage conditions assigned

* Check stability batch entered into stability program

**Acceptance Criteria:**

* Stability samples pulled as required by protocol

* Sample quantity sufficient for full testing schedule

* Storage conditions correct (e.g., 25°C/60% RH, 40°C/75% RH)

* Samples entered into stability tracking system

**Failure Example:**\
Stability protocol requires samples for 24-month study (3 conditions × 8 time points × 3 replicates = 72 units minimum), only 48 units pulled.

**Why MAJOR:**\
Insufficient stability samples may prevent completion of required stability studies, affecting ability to support shelf life and regulatory commitments.

***

## Category 9: Documentation & Signatures

**Purpose:** Verify all required signatures are present and documentation practices follow Good Documentation Practices (GDP)

### D-01: Operator Signature Completeness

**Check ID:** D-01\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.182, 21 CFR Part 11

**Description:**\
Verify all manufacturing steps have operator signatures confirming who performed each step.

**Verification Method:**

* Review each process step in batch record

* Check for operator signature or electronic ID

* Verify signature/ID is legible or traceable

* Confirm date accompanies each signature

**Acceptance Criteria:**

* All process steps signed by performing operator

* Signatures legible or electronic IDs traceable

* Dates present for all signatures

* No unsigned operations

**Failure Example:**\
Compression operation start, middle checks signed, but end-of-run reconciliation unsigned (operator unknown for final step).

**Why MAJOR:**\
Operator signatures establish accountability and traceability. Missing signatures represent GMP non-compliance and investigation barriers.

***

### D-02: Supervisor/Verifier Signature Completeness

**Check ID:** D-02\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.188(b)(11), EU GMP Chapter 4

**Description:**\
Verify critical steps have secondary verification signatures where required by MBR or SOP.

**Verification Method:**

* Identify steps requiring verification per MBR (typically dispensing, IPC, critical process steps)

* Check for verifier signature distinct from operator

* Verify verifier is different person

* Confirm contemporaneous verification (dates similar)

**Acceptance Criteria:**

* All required verifications have second signatures

* Verifier is different individual than operator

* Verification timely (same date or next day, not weeks later)

* No self-verification

**Failure Example:**\
Critical process parameter entry (compression force) shows operator signature but no supervisor verification as required by MBR.

**Why MAJOR:**\
Independent verification is key control to prevent errors. Missing verifications weaken quality system and increase error risk.

***

### D-03: QA Review Signature

**Check ID:** D-03\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.192, EU GMP Chapter 2.15

**Description:**\
Verify QA batch record review signature is present before batch disposition/release.

**Verification Method:**

* Check for QA review signature on batch record disposition page

* Verify signature is from authorized QA personnel

* Confirm signature date is after batch completion and testing

* Check review checklist completed if applicable

**Acceptance Criteria:**

* QA review signature present

* Signed by authorized QA personnel (check signature authority list)

* Date logical (after manufacturing and testing complete)

* Disposition recorded (Release/Reject)

**Failure Example:**\
Batch record shows "Released" status but QA review signature missing or signature by Production Supervisor instead of QA.

**Why CRITICAL:**\
QA review and release authority is fundamental regulatory requirement. Batch cannot be released without independent QA review and approval.

***

### D-04: Unauthorized Correction Methods

**Check ID:** D-04\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.194(a), FDA Data Integrity Guidance

**Description:**\
Verify no unauthorized correction methods used (white-out, overwriting, erasure, deletion without traceability).

**Verification Method:**

* Visually inspect entire batch record for correction methods

* Look for white-out/correction fluid use

* Check for overwritten text (text written over previous text)

* Identify erasures or scribbled-out entries

* Verify all changes are traceable to original entry

**Acceptance Criteria:**

* Zero unauthorized corrections found

* All original entries readable or retrievable

* No obliteration of data

* No removal of pages without documentation

**Failure Example:**\
Temperature entry shows "67°C" but upon close inspection, appears to have been changed from "72°C" using overwriting (original value partially visible).

**Why CRITICAL:**\
Unauthorized corrections indicate potential data falsification or data integrity issues. FDA considers this serious cGMP violation and evidence of systemic quality problems.

***

### D-05: Good Documentation Practice Compliance

**Check ID:** D-05\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.194, EU GMP Chapter 4.9

**Description:**\
Verify all corrections follow GDP: single line through original (still readable), initialed, dated, and reason documented if significant.

**Verification Method:**

* Identify all corrections in batch record

* Check each correction methodology:

  * Original entry readable through single line?

  * Initials of person making change present?

  * Date of change present?

  * Reason documented for significant changes?

**Acceptance Criteria:**

* All corrections have single line through original (original readable)

* All corrections initialed

* All corrections dated

* Significant corrections have brief reason (e.g., "Transcription error")

**Failure Example:**\
Blending speed changed from "25 rpm" to "250 rpm" with single line and initials, but no date and no reason (significant change - 10x difference).

**Why MAJOR:**\
GDP violations indicate poor documentation training or quality culture. While individual GDP errors may be minor, pattern suggests systemic issue.

***

### D-06: Blank Field Management

**Check ID:** D-06\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.188, FDA Inspection Guides

**Description:**\
Verify no fields are left blank without N/A designation and justification.

**Verification Method:**

* Scan batch record for blank fields

* For each blank, determine if field was required or optional

* Check if N/A is documented for truly non-applicable fields

* Verify optional fields marked N/A have justification

**Acceptance Criteria:**

* No blank fields without N/A designation

* N/A entries justified (e.g., "N/A - this coating process does not use plasticizer")

* All required fields completed

* Optional fields clearly marked as optional or N/A

**Failure Example:**\
Equipment substitution justification field blank (no entry and no N/A), unable to determine if substitution occurred or field is not applicable.

**Why MAJOR:**\
Blank fields create ambiguity: was step performed and not documented, or not performed? Incomplete documentation is GMP violation.

***

### D-07: Batch Disposition Documentation

**Check ID:** D-07\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.192, EU GMP Chapter 2.15

**Description:**\
Verify batch disposition (Release, Reject, or Hold) is clearly recorded with date and QA authority signature.

**Verification Method:**

* Check for batch disposition statement

* Verify disposition is clear: "Release", "Reject", or "Hold"

* Confirm QA signature accompanies disposition

* Check date of disposition decision

* Verify disposition matches COA conclusion

**Acceptance Criteria:**

* Disposition clearly stated with exact wording

* QA signature present and authorized

* Date recorded

* Disposition consistent with batch record review findings and test results

**Failure Example:**\
Batch record final page has QA signature but no explicit "Release" or "Reject" statement, or disposition is "Release" but COA shows failed assay test.

**Why CRITICAL:**\
Batch disposition is final quality decision. Missing or unclear disposition creates legal/regulatory issues and potentially allows non-conforming product to be distributed.

***

## Category 10: Deviations & CAPAs

**Purpose:** Verify all deviations during manufacturing are documented and appropriately managed

### X-01: Deviation Documentation Completeness

**Check ID:** X-01\
**Severity:** CRITICAL\
**Regulatory Reference:** 21 CFR 211.192, ICH Q9

**Description:**\
Verify all deviations that occurred during manufacturing are documented in batch record.

**Verification Method:**

* Review batch record for any annotations indicating non-standard occurrences

* Check process parameters for any values outside specification

* Review IPC and QC results for failures

* Cross-reference with deviation log if accessible

* Interview production personnel if possible

**Acceptance Criteria:**

* All deviations annotated in batch record at point of occurrence

* Cross-references to formal deviation reports present

* No unreported deviations discovered during review

* Minor and major deviations both documented

**Failure Example:**\
Equipment breakdown requiring 2-hour hold noted in logbook but not documented in batch record or deviation system.

**Why CRITICAL:**\
Undocumented deviations indicate poor quality awareness and potential hidden quality risks. Pattern of unreported deviations is serious regulatory finding.

***

### X-02: Deviation Report Reference

**Check ID:** X-02\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.192, EU GMP Chapter 1.4

**Description:**\
Verify all documented deviations reference formal deviation report numbers.

**Verification Method:**

* Identify all deviation annotations in batch record

* Check each has deviation report number reference

* Verify deviation numbers are in correct format per site convention

* Confirm deviation reports retrievable from system

**Acceptance Criteria:**

* All deviations have deviation report numbers

* Deviation numbers formatted correctly

* Cross-reference from batch record to deviation system clear

* Deviation reports exist and relate to correct batch

**Failure Example:**\
Parameter excursion noted in batch record as "Temperature high for 15 minutes, see deviation report" but no deviation number recorded.

**Why MAJOR:**\
Missing deviation numbers break traceability and prevent proper tracking of quality issues and CAPAs.

***

### X-03: Impact Assessment Completion

**Check ID:** X-03\
**Severity:** MAJOR\
**Regulatory Reference:** ICH Q9, FDA Process Validation Guidance

**Description:**\
Verify impact assessments are completed for all deviations, determining effect on product quality.

**Verification Method:**

* Review deviation reports referenced in batch record

* Check each deviation report contains impact assessment section

* Verify assessment addresses product quality impact

* Confirm assessment is scientifically sound and documented

**Acceptance Criteria:**

* All deviation reports have completed impact assessments

* Assessments address: impact on product quality, CQAs affected, patient safety risk

* Assessments scientifically justified

* Conclusions clearly stated (No Impact, Potential Impact, Definite Impact)

**Failure Example:**\
Deviation report for temperature excursion states "No impact on quality" without scientific justification or data to support conclusion.

**Why MAJOR:**\
Impact assessments determine batch disposition and identify quality risks. Inadequate assessments may result in releasing non-conforming product or unnecessarily rejecting acceptable product.

***

### X-04: CAPA Assignment

**Check ID:** X-04\
**Severity:** MAJOR\
**Regulatory Reference:** 21 CFR 211.192, 21 CFR 211.100(a), ICH Q10

**Description:**\
Verify Corrective and Preventive Actions (CAPAs) are assigned where deviations indicate systemic issues or recurrence risk.

**Verification Method:**

* Review deviation reports for CAPA assignments

* Verify CAPAs address root causes

* Check CAPA tracking numbers recorded

* Confirm CAPAs are specific and measurable (not vague like "retrain staff")

**Acceptance Criteria:**

* CAPAs assigned for recurring deviations or systemic issues

* Root cause identified before CAPA assignment

* CAPAs address both correction (immediate) and prevention (long-term)

* CAPA owners and due dates assigned

**Failure Example:**\
Third occurrence of equipment malfunction in 6 months, each deviation report notes issue but no CAPA assigned to address recurring root cause.

**Why MAJOR:**\
Failure to implement CAPAs for recurring issues indicates weak quality system and allows problems to persist, increasing quality risk.

***

### X-05: Deviation Closure Status

**Check ID:** X-05\
**Severity:** MINOR\
**Regulatory Reference:** 21 CFR 211.192, ICH Q10

**Description:**\
Verify status of deviation reports and track toward closure within established timelines.

**Verification Method:**

* Record deviation report status for batch (Open, Under Investigation, Closed)

* Check age of open deviations against site timelines (e.g., close within 30 days)

* Verify overdue investigations have documented extensions

* Track CAPA completion status

**Acceptance Criteria:**

* Critical deviations closed before batch release (or justification documented)

* Non-critical deviations tracking toward closure per site timelines

* No deviations open >90 days without QA-approved extension

* Batch disposition does not require all deviations closed (except critical ones)

**Failure Example:**\
Deviation report opened 120 days ago still shows "Under Investigation" with no updates or extension approval.

**Why MINOR:**\
Deviation closure delays are process issues but typically do not prevent accurate batch disposition if impact assessment is complete. Persistent backlog escalates to MAJOR as systemic issue.

***

## Summary Checklist Table

| Check ID | Category      | Severity       | Description                       |
| -------- | ------------- | -------------- | --------------------------------- |
| H-01     | Header & ID   | CRITICAL       | Product name matches MBR          |
| H-02     | Header & ID   | CRITICAL       | Batch number valid and unique     |
| H-03     | Header & ID   | CRITICAL       | MBR reference and version correct |
| H-04     | Header & ID   | MAJOR          | Batch size matches specification  |
| H-05     | Header & ID   | MAJOR          | Manufacturing date recorded       |
| H-06     | Header & ID   | MAJOR          | Expiry date correctly calculated  |
| H-07     | Header & ID   | MINOR          | Storage conditions stated         |
| M-01     | BOM           | CRITICAL       | All MBR materials present         |
| M-02     | BOM           | CRITICAL       | No unauthorized materials         |
| M-03     | BOM           | CRITICAL       | AR numbers present and valid      |
| M-04     | BOM           | MAJOR          | Quantities within tolerance       |
| M-05     | BOM           | MAJOR          | Material grades match MBR         |
| M-06     | BOM           | MAJOR          | Dispensing operator signatures    |
| M-07     | BOM           | MAJOR          | Dispensing verifier signatures    |
| M-08     | BOM           | MAJOR          | Balance calibration current       |
| E-01     | Equipment     | MAJOR          | Equipment IDs recorded            |
| E-02     | Equipment     | CRITICAL       | Equipment calibration current     |
| E-03     | Equipment     | MAJOR          | Line clearance documented         |
| E-04     | Equipment     | MINOR          | Equipment capacity appropriate    |
| E-05     | Equipment     | MAJOR          | Equipment qualification current   |
| E-06     | Equipment     | MAJOR          | Substitutions documented          |
| P-01     | Process       | CRITICAL       | All CPPs recorded                 |
| P-02     | Process       | CRITICAL       | CPPs within specification         |
| P-03     | Process       | MAJOR          | Non-critical parameters recorded  |
| P-04     | Process       | CRITICAL       | Step sequence correct             |
| P-05     | Process       | MAJOR          | Process timing documented         |
| P-06     | Process       | CRITICAL       | Deviations documented             |
| P-07     | Process       | MAJOR          | Environmental conditions met      |
| P-08     | Process       | MAJOR          | Hold times within limits          |
| I-01     | IPC           | CRITICAL       | All IPC tests performed           |
| I-02     | IPC           | CRITICAL       | IPC results within criteria       |
| I-03     | IPC           | MAJOR          | IPC test frequency adequate       |
| I-04     | IPC           | CRITICAL       | IPC failures documented           |
| I-05     | IPC           | MAJOR          | Re-tests documented               |
| I-06     | IPC           | MAJOR          | IPC operator signatures           |
| I-07     | IPC           | MINOR          | Sampling method correct           |
| V-01     | Environment   | MAJOR          | Temperature within range          |
| V-02     | Environment   | MAJOR          | Humidity within range             |
| V-03     | Environment   | MINOR          | Differential pressure adequate    |
| V-04     | Environment   | CRITICAL/MAJOR | Excursions documented             |
| V-05     | Environment   | MINOR          | Monitoring frequency adequate     |
| Y-01     | Yield         | MAJOR          | Stage yields calculated           |
| Y-02     | Yield         | MAJOR          | Yield calculations correct        |
| Y-03     | Yield         | CRITICAL/MAJOR | Stage yields within range         |
| Y-04     | Yield         | CRITICAL/MAJOR | Overall yield within range        |
| Y-05     | Yield         | CRITICAL       | Label reconciliation complete     |
| Y-06     | Yield         | CRITICAL       | Unaccounted labels investigated   |
| Y-07     | Yield         | MAJOR          | Packaging reconciliation complete |
| Y-08     | Yield         | MAJOR          | Yield deviations investigated     |
| Q-01     | QC/Lab        | CRITICAL       | All required tests performed      |
| Q-02     | QC/Lab        | CRITICAL       | QC results within specifications  |
| Q-03     | QC/Lab        | CRITICAL       | OOS results investigated          |
| Q-04     | QC/Lab        | MAJOR          | COA complete and accurate         |
| Q-05     | QC/Lab        | MINOR          | Lab references documented         |
| Q-06     | QC/Lab        | MINOR          | Reference standards documented    |
| Q-07     | QC/Lab        | MAJOR          | Stability samples pulled          |
| D-01     | Documentation | MAJOR          | Operator signatures present       |
| D-02     | Documentation | MAJOR          | Verifier signatures present       |
| D-03     | Documentation | CRITICAL       | QA review signature present       |
| D-04     | Documentation | CRITICAL       | No unauthorized corrections       |
| D-05     | Documentation | MAJOR          | GDP compliance maintained         |
| D-06     | Documentation | MAJOR          | No blank fields                   |
| D-07     | Documentation | CRITICAL       | Batch disposition recorded        |
| X-01     | Deviations    | CRITICAL       | All deviations documented         |
| X-02     | Deviations    | MAJOR          | Deviation reports referenced      |
| X-03     | Deviations    | MAJOR          | Impact assessments complete       |
| X-04     | Deviations    | MAJOR          | CAPAs assigned as needed          |
| X-05     | Deviations    | MINOR          | Deviation closure tracked         |

***

## End of Checklist

**Document Control:**\
This checklist should be reviewed annually and updated as regulations, company SOPs, or product requirements change. All updates require QA approval and version control.

**Training:**\
All personnel performing batch record review must be trained on this checklist and demonstrate competency before independent review.

***

# Part 5: Deviation Classification

## Document Information

**Document Type:** Reference Guide\
**Purpose:** Systematic framework for classifying batch record deviations by severity and impact\
**Scope:** All pharmaceutical manufacturing deviations (sterile and non-sterile)\
**Regulatory Basis:** FDA Quality Metrics, EMA GMP Guidelines, ICH Q9 (Quality Risk Management)\
**Version:** 2.0\
**Last Updated:** 2024

***

## Overview

This framework provides standardized criteria for classifying batch record deviations into four severity levels: **CRITICAL**, **MAJOR**, **MINOR**, and **OBSERVATION**. Proper classification ensures appropriate response, investigation depth, and resource allocation while maintaining regulatory compliance and patient safety.

### Purpose of Classification

1. **Risk Prioritization:** Focus resources on highest-risk issues first
2. **Consistent Decision-Making:** Reduce subjectivity in deviation assessment
3. **Regulatory Alignment:** Meet FDA/EMA expectations for risk-based quality management
4. **Effective Investigation:** Match investigation depth to deviation severity
5. **Trend Analysis:** Enable meaningful metrics and continuous improvement

### Classification Principles

* **Patient Safety First:** Any potential patient harm = CRITICAL

* **Product Quality Focus:** Direct CQA impact = CRITICAL or MAJOR

* **Data Integrity Priority:** Falsification or obliteration = CRITICAL

* **Regulatory Compliance:** Systemic GMP violations = MAJOR minimum

* **Risk-Based:** Use ICH Q9 principles for borderline cases

***

## Severity Level Definitions

### CRITICAL Deviations

**Definition:**\
Deviations that have caused, or have significant potential to cause, harm to patient safety, product quality failure, or fundamental GMP system breakdown. These deviations represent the highest risk and require immediate action.

**Impact on Product Quality:**

* Direct impact on Critical Quality Attributes (CQAs)

* Product may not meet specifications or may be unsafe

* Quality cannot be assured through testing alone

* May require batch rejection or market recall

**Impact on Patient Safety:**

* Potential for direct patient harm (injury, adverse event, death)

* Compromised product efficacy (underdose)

* Compromised product safety (overdose, contamination, wrong product)

* Risk to vulnerable populations (pediatrics, elderly, immunocompromised)

**Regulatory Implications:**

* Reportable to FDA/EMA in some cases (e.g., biological product deviations)

* Likely Warning Letter citation if discovered during inspection

* May trigger consent decree or mandatory recall

* Demonstrates fundamental quality system failure

**Required Response Actions:**

* **Immediate:** Batch quarantine, immediate investigation initiation

* **Notification:** QA leadership, senior management, Regulatory Affairs within 24 hours

* **Investigation:** Full root cause analysis (RCA) required, typically using tools like 5-Why, Fishbone, or FMEA

* **Batch Disposition:** Cannot release batch until thorough investigation demonstrates product is safe and effective despite deviation

* **CAPA:** Mandatory CAPA to prevent recurrence, effectiveness check required

**Required Investigation Depth:**

* Phase I (Laboratory Investigation): If lab-related

* Phase II (Manufacturing Investigation): Always required for process deviations

* Root Cause Analysis: Must identify definitive or most probable root cause

* Risk Assessment: Formal risk assessment using ICH Q9 tools

* Impact Assessment: Comprehensive evaluation of quality, safety, efficacy impact

* Regulatory Assessment: Determine if reportable event

**Escalation Requirements:**

* Immediate notification to QA Director/VP Quality

* Notify Regulatory Affairs within 24 hours

* CEO/President notification for patient safety risks

* Regulatory reporting if required (e.g., Biologics Deviation Report)

**Timeline for Resolution:**

* Investigation initiation: Within 24 hours

* Preliminary impact assessment: Within 72 hours

* Investigation completion: 30 days (may extend with documented justification)

* CAPA implementation: Per risk assessment, typically ≤90 days

**Examples of CRITICAL Deviations:**

1. **Product Mix-Up:** Wrong product label applied to batch, risk of patient receiving wrong medication
2. **API Omission:** Active pharmaceutical ingredient not added to formulation (zero potency)
3. **Microbial Contamination:** Sterile product fails sterility test due to contamination during manufacturing
4. **Equipment Calibration Lapsed:** Critical equipment (e.g., autoclave, tablet press) used with expired calibration, all measurements potentially invalid
5. **Process Parameter Excursion:** Sterilization temperature below validated minimum for required duration
6. **Out-of-Specification Results:** Final product assay 85% (specification 95-105%), product underdosed
7. **Unaccounted Labels:** 50 labels missing and unaccounted for, risk of counterfeiting or diversion
8. **Data Falsification:** Operator found to have recorded false process data or backdated signatures
9. **Cross-Contamination:** Potent compound detected in batch where it should not be present (allergen, cytotoxic)
10. **Unauthorized Process Change:** Critical process step omitted or performed differently than validated procedure without prior approval
11. **Wrong Material Used:** Incorrect API or excipient used (e.g., Methotrexate instead of Metformin)
12. **Undocumented Deviation with Quality Impact:** Significant process failure occurred but was not documented, discovered later during investigation
13. **QA Approval Without Review:** Batch released to market without required QA review and approval
14. **Expired Materials Used:** Active ingredient used 6 months beyond expiry date
15. **Sterility Breach:** Unqualified personnel entered Grade A area without proper gowning during sterile manufacturing

**Special Considerations:**

* Some CRITICAL deviations may still allow batch release if thorough investigation and risk assessment demonstrate product meets all quality specifications and is safe for use

* "CRITICAL" classification refers to potential risk; actual impact determines final batch disposition

* For sterile products, any sterility assurance breach should initially be classified as CRITICAL until proven otherwise

***

### MAJOR Deviations

**Definition:**\
Deviations that represent significant GMP non-compliance, have potential to affect product quality, or indicate inadequate control over manufacturing processes. These deviations require investigation but may not prevent batch release if investigation supports acceptability.

**Impact on Product Quality:**

* Potential impact on product quality, but not confirmed

* May affect secondary quality attributes (appearance, dissolution profile, but not assay)

* Quality can likely be assured through additional testing or investigation

* Batch may be released after investigation demonstrates acceptability

**Impact on Patient Safety:**

* Low to moderate potential patient safety risk

* Unlikely to cause direct harm but may affect treatment outcomes

* Risk mitigated by testing and investigation

* Generally does not require market action if detected before release

**Regulatory Implications:**

* May be cited during FDA/EMA inspection as GMP violation

* Multiple MAJOR deviations may demonstrate inadequate quality system

* Contributes to compliance metrics and trend analysis

* May require reporting in Annual Product Review

**Required Response Actions:**

* **Immediate:** Batch quarantine or hold status until investigation

* **Notification:** QA management, manufacturing leadership within 48 hours

* **Investigation:** Root cause or most probable cause identification required

* **Batch Disposition:** Can be released after investigation if scientifically justified

* **CAPA:** Required if deviation is recurring or represents systemic issue

**Required Investigation Depth:**

* Root cause or most probable cause identification

* Impact assessment on product quality

* Review of batch history for similar occurrences

* Risk assessment (may be qualitative rather than formal)

* Verification that product meets specifications

**Escalation Requirements:**

* QA Manager notification within 48 hours

* Department head notification

* May require Regulatory Affairs review for novel issues

* Trend reports to senior management quarterly

**Timeline for Resolution:**

* Investigation initiation: Within 5 business days

* Investigation completion: 45 days standard

* CAPA implementation: 120 days for systemic issues

**Examples of MAJOR Deviations:**

1. **Equipment Substitution Without Documentation:** Different blender used than specified in MBR without change control or equivalency demonstration
2. **Parameter Deviation:** Blending time 8 minutes (specification 10-15 minutes), blend uniformity testing passed
3. **Missing Signature:** Critical process step performed but operator signature missing from batch record
4. **Incomplete Line Clearance:** Line clearance checklist shows 8/10 items checked, 2 items left blank
5. **Hold Time Excursion:** 12-hour hold between granulation and drying (validated maximum 8 hours), moisture testing shows acceptable levels
6. **IPC Test Frequency:** Tablet weight checked every 45 minutes (required every 30 minutes)
7. **Yield Deviation:** Compression yield 94% (specification 97-102%), investigation required
8. **Material Quantity Overage:** API 106% of specification (±5% allowed), within validated range but exceeds procedure
9. **Environmental Monitoring:** Room temperature 26°C for 30 minutes (specification 20-25°C), product not temperature-sensitive
10. **Incomplete Documentation:** Equipment cleaning log shows date but no signature, evidence cleaning was performed
11. **Packaging Material Discrepancy:** 35 cartons unaccounted for (3.5% discrepancy), exceeds ±2% tolerance
12. **Equipment Cleaning Delay:** Equipment cleaned 36 hours after use (procedure requires within 24 hours), residue testing acceptable
13. **Balance Verification:** Balance accuracy check performed daily (required twice daily), results within tolerance
14. **Training Gap:** Operator performed task without documented training on latest SOP version, competent on previous version
15. **Late Deviation Report:** Deviation occurred in March, deviation report not opened until July (4-month delay)

**Special Considerations:**

* MAJOR deviations often require enhanced testing or additional quality verification before release

* Pattern of multiple MAJOR deviations may indicate systemic issue requiring escalation to CRITICAL

* Context matters: same deviation may be MAJOR in one situation, CRITICAL in another based on product characteristics

***

### MINOR Deviations

**Definition:**\
Deviations that represent minor procedural or administrative gaps with minimal potential impact on product quality or GMP compliance. These are documentation errors or process variations that do not affect product quality or patient safety.

**Impact on Product Quality:**

* No expected impact on product quality

* Does not affect Critical Quality Attributes or secondary attributes

* Administrative or procedural non-compliance only

* Product specifications clearly met

**Impact on Patient Safety:**

* No patient safety risk

* No potential for harm

* Issue is internal process/documentation matter

**Regulatory Implications:**

* Unlikely to be cited during inspection unless part of pattern

* May be noted during internal audits

* Contributes to overall quality culture metrics

* Should be trended to prevent escalation to MAJOR

**Required Response Actions:**

* **Immediate:** Document in batch record, no batch hold required

* **Notification:** Supervisor/manager notification sufficient

* **Investigation:** Brief investigation to determine immediate cause (may not require full RCA)

* **Batch Disposition:** Does not prevent batch release

* **CAPA:** Not required for isolated instances; required if recurring (3+ in 12 months)

**Required Investigation Depth:**

* Immediate cause identification (what happened)

* Brief assessment of why it happened

* Verification that product quality unaffected

* No formal risk assessment required

* Simple corrective action (retraining, reminder)

**Escalation Requirements:**

* Supervisor notification sufficient

* QA review during batch disposition

* Trending by QA monthly or quarterly

* No senior management notification required unless trending indicates pattern

**Timeline for Resolution:**

* Investigation completion: 30 days

* Corrective action: 60 days

* CAPA only if recurring

**Examples of MINOR Deviations:**

1. **Date Format Error:** Date recorded as "03/04/24" instead of required "04-MAR-2024" format (information is clear and accurate)
2. **Transcription Error Corrected Properly:** Weight recorded as "100.5g", corrected to "1005.0g" per GDP (correct value verified from balance printout)
3. **Reference Document Version:** Procedure reference cited as "SOP-123 v4.0" when current version is "v4.1" (no procedural changes between versions)
4. **Storage Condition Not Stated:** Batch record does not include storage conditions, but product label and packaging SOP have correct information
5. **Lab Notebook Reference Missing:** COA does not include lab notebook reference, but LIMS entry number present (data traceable)
6. **Abbreviation Used:** "Magnesium Stearate" abbreviated as "Mag Stear" (identity clear from context and material code)
7. **Equipment Capacity Documentation:** Batch size and equipment capacity not documented, but both well within validated range per production records
8. **Environmental Monitoring Frequency:** Temperature recorded every 3 hours (SOP says every 2 hours), all readings well within specification
9. **Sampling Location Not Specified:** IPC sample taken but specific location (top, middle, bottom) not recorded in batch record
10. **Initials vs. Signature:** Operator initialed instead of signing full name (person identifiable, acceptable per some site SOPs)
11. **Page Number Missing:** One page in 45-page batch record missing page number (all pages present and in order)
12. **Timing Documentation:** Start time recorded, end time calculated instead of observed (duration correct)
13. **Concurrent Activity:** Two manufacturing steps show same start time (parallel processing acceptable per MBR, could be clearer)
14. **Reference Standard Source:** COA states reference standard lot but not supplier (lot number is traceable to supplier in QC system)
15. **Form Field Not Applicable:** Optional field left blank when N/A would be clearer, but MBR indicates field is optional

**Special Considerations:**

* MINOR deviations should not be dismissed as unimportant - they indicate training opportunities and process improvement needs

* Pattern of MINOR deviations (5+ similar deviations in 6 months) should trigger CAPA

* Culture that ignores MINOR deviations often leads to MAJOR and CRITICAL issues over time

***

### OBSERVATION (Opportunity for Improvement)

**Definition:**\
Observations are not true deviations but rather opportunities for improvement, best practice recommendations, or areas where current procedures are adequate but could be enhanced. No GMP requirement is violated.

**Impact on Product Quality:**

* No impact on product quality

* Current state is compliant and acceptable

* Enhancement would provide additional assurance or efficiency

**Impact on Patient Safety:**

* No patient safety impact

* Current controls adequate

**Regulatory Implications:**

* Not a compliance issue

* Would not be cited during inspection

* May be noted as "best practice" recommendation by auditors

* Proactive quality improvement

**Required Response Actions:**

* **Immediate:** None required

* **Notification:** Optional, usually handled at department level

* **Investigation:** Not required; opportunity assessment instead

* **Batch Disposition:** No impact on release

* **CAPA:** Not required; may implement improvement if cost-effective

**Required Investigation Depth:**

* None required

* May assess cost/benefit of improvement

* Optional implementation based on business decision

**Escalation Requirements:**

* No escalation required

* May be included in continuous improvement programs

* QA notification optional

**Timeline for Resolution:**

* No timeline required

* Implementation at business discretion

**Examples of OBSERVATIONS:**

1. **Enhanced Data Capture:** Batch record captures required data; electronic system could automate capture and reduce transcription
2. **Additional Verification:** Single verification present as required; double verification could provide additional assurance
3. **Trending Opportunity:** IPC data captured; statistical trending could provide early warning of process drift
4. **Preventive Maintenance:** Equipment maintained per schedule; predictive maintenance could reduce unplanned downtime
5. **Training Enhancement:** Training adequate per requirements; hands-on simulation could improve retention
6. **Document Clarity:** Procedure adequate but could be clearer with additional diagrams or photos
7. **Process Efficiency:** Process meets requirements; alternative sequence could save time without affecting quality
8. **Data Analysis:** Data reviewed for acceptance; advanced analytics could reveal optimization opportunities
9. **Change Control:** Change control process functional; risk assessment template could standardize evaluations
10. **Investigation Tool:** Investigations adequate; formal RCA training could improve investigation quality

**Special Considerations:**

* Observations should be captured and considered for quality improvement projects

* Implementing observation recommendations is optional but demonstrates proactive quality culture

* During inspections, addressing observations shows commitment to continuous improvement

***

## Classification Decision Tree

The following decision tree provides systematic logic for classifying deviations. Work through questions sequentially to arrive at appropriate severity level.

### Step 1: Patient Safety Assessment

**Question:** Does this deviation have potential to directly harm patients?

* **YES** → Proceed to Step 1A

* **NO** → Proceed to Step 2

**Step 1A:** Assess likelihood and severity of harm

* **High Probability of Harm OR Severe Harm Potential (hospitalization, death):**\
  → **CRITICAL**\
  Examples: Wrong product, contaminated sterile product, significant underdose of life-saving drug

* **Low Probability but Possible Harm:**\
  → Proceed to Step 2 (may be MAJOR depending on quality impact)

***

### Step 2: Product Quality Impact Assessment

**Question:** Does this deviation affect product quality attributes?

* **Affects Critical Quality Attributes (CQAs) - confirmed or highly probable:**\
  → **CRITICAL**\
  Examples: API omission, failed assay, sterility failure, dissolution failure

* **Potential to affect CQAs but not confirmed, requires investigation:**\
  → **MAJOR**\
  Examples: Process parameter excursion with passing test results, hold time extension

* **Affects non-critical quality attributes only (appearance, minor performance):**\
  → **MAJOR** or **MINOR** based on severity

* **No expected quality impact:**\
  → Proceed to Step 3

***

### Step 3: Data Integrity Assessment

**Question:** Does this deviation involve data integrity issues?

* **Data Falsification, Forgery, or Intentional Manipulation:**\
  → **CRITICAL**\
  Examples: Backdated signatures, false data recording, destroyed original records

* **Data Obliteration or Unauthorized Deletion:**\
  → **CRITICAL**\
  Examples: Use of white-out, erasure without traceability, overwriting

* **Data Incompleteness or Errors (correctable, no loss of traceability):**\
  → **MAJOR** or **MINOR** based on significance\
  Examples: Missing signature (MAJOR), transcription error corrected properly (MINOR)

* **No data integrity concerns:**\
  → Proceed to Step 4

***

### Step 4: GMP Compliance Assessment

**Question:** Does this deviation represent GMP non-compliance?

* **Fundamental GMP Requirement Violation (batch release, material control, equipment qualification):**\
  → **CRITICAL** or **MAJOR** based on context\
  Examples: Batch released without QA approval (CRITICAL), expired equipment calibration (CRITICAL/MAJOR)

* **Significant GMP Procedure Non-Compliance:**\
  → **MAJOR**\
  Examples: Line clearance incomplete, verification missing, investigation inadequate

* **Minor Procedural Deviation (administrative, documentation format):**\
  → **MINOR**\
  Examples: Wrong date format, missing page numbers, reference errors

* **No GMP violation (enhancement opportunity only):**\
  → **OBSERVATION**

***

### Step 5: Traceability and Control Assessment

**Question:** Does this deviation affect traceability or material accountability?

* **Loss of Traceability with Quality or Safety Impact:**\
  → **CRITICAL**\
  Examples: Unknown batch number, unaccounted labels, unable to trace material to COA

* **Loss of Traceability without Quality Impact (retrievable):**\
  → **MAJOR**\
  Examples: Missing lot number in record but traceable through production log

* **Minor Traceability Gap:**\
  → **MINOR**\
  Examples: Lab notebook reference missing but LIMS ID present

***

### Step 6: Systemic Issue Assessment

**Question:** Does this deviation indicate systemic problem?

* **Recurring Issue (3+ times in 12 months) OR Multiple Similar Deviations in Single Batch:**\
  → Escalate severity by one level\
  Examples: Third occurrence of same equipment failure = escalate from MAJOR to CRITICAL

* **Pattern Suggesting Inadequate Quality System:**\
  → Escalate to **CRITICAL** regardless of individual issue severity\
  Examples: Multiple data integrity lapses, pattern of unreported deviations

* **Isolated Incident:**\
  → Use classification from Steps 1-5

***

### Step 7: Regulatory Reportability Assessment

**Question:** Is this deviation reportable to health authorities?

* **Reportable Deviation (e.g., Biological Product Deviation to FDA):**\
  → **CRITICAL** (minimum)\
  Examples: Sterility deviation in biologics, improper storage of vaccine

* **May Require Field Alert or Recall:**\
  → **CRITICAL**

* **Not reportable:**\
  → Use classification from Steps 1-6

***

### Classification Quick Reference

```
START
  ↓
Patient Safety Risk? → YES → High probability or severe harm? → YES → CRITICAL
  ↓ NO                                                          ↓ NO
CQA Impact? → YES → Confirmed impact? → YES → CRITICAL
  ↓ NO                                   ↓ NO (potential only)
                                         MAJOR
  ↓
Data Integrity Issue? → YES → Falsification/Obliteration? → YES → CRITICAL
  ↓ NO                                                      ↓ NO
                                                        MAJOR or MINOR
  ↓
GMP Violation? → YES → Fundamental requirement? → YES → CRITICAL or MAJOR
  ↓ NO                                           ↓ NO
                                             MINOR
  ↓
Enhancement Only? → YES → OBSERVATION
  ↓ NO
Review previous steps - classification should have been determined
```

***

## Impact Assessment Framework

Comprehensive impact assessment is required for CRITICAL and MAJOR deviations. Use this framework to structure assessments.

### Patient Safety Impact Matrix

| Factor                       | No Impact (0)             | Low Impact (1)                        | Moderate Impact (2)               | High Impact (3)                        |
| ---------------------------- | ------------------------- | ------------------------------------- | --------------------------------- | -------------------------------------- |
| **Harm Severity**            | No potential harm         | Minor discomfort, no treatment needed | Moderate harm, treatment required | Severe harm, hospitalization, or death |
| **Harm Probability**         | Not plausible             | Remote possibility (<1%)              | Possible (1-10%)                  | Likely (>10%)                          |
| **Population Vulnerability** | General population        | Healthy adults only                   | Chronic disease patients          | Pediatrics, elderly, immunocompromised |
| **Dose/Exposure**            | No exposure to defect     | Minimal exposure                      | Moderate exposure                 | Full exposure                          |
| **Detection Likelihood**     | Defect obvious before use | Likely detected by patient/caregiver  | May not be detected               | Unlikely to be detected                |

**Scoring:**

* Total 0-3: **No/Low Patient Safety Risk**

* Total 4-7: **Moderate Patient Safety Risk** → Usually MAJOR

* Total 8-10: **High Patient Safety Risk** → Usually CRITICAL

* Total 11+: **Severe Patient Safety Risk** → CRITICAL, may require immediate notification

### Product Quality Impact Categories

Assess impact on each quality attribute category:

**1. Identity**

* Could product be misidentified?

* Could wrong product be released?

* **Impact:** If YES to either → CRITICAL

**2. Purity/Impurities**

* Could impurities exceed specifications?

* Could cross-contamination occur?

* **Impact:** Specification failure → CRITICAL; Potential but unconfirmed → MAJOR

**3. Potency/Assay**

* Could API content be outside 95-105% specification?

* Could underdose or overdose occur?

* **Impact:** Confirmed failure → CRITICAL; Potential deviation → MAJOR

**4. Dissolution/Release**

* Could dissolution profile be affected?

* Is dissolution a critical attribute for this product?

* **Impact:** Critical attribute failure → CRITICAL; Non-critical attribute → MAJOR

**5. Uniformity**

* Could content uniformity or blend uniformity be affected?

* **Impact:** Likely failure → CRITICAL; Possible but unlikely → MAJOR

**6. Sterility/Microbial**

* For sterile products: Could sterility be compromised?

* For non-sterile: Could microbial limits be exceeded?

* **Impact:** Sterile product compromise → CRITICAL; Non-sterile limits risk → MAJOR

**7. Physical Attributes**

* Appearance, color, hardness, friability

* **Impact:** Typically MINOR unless affects functionality (e.g., hardness affects dissolution)

**8. Stability**

* Could shelf life be reduced?

* Could degradation be accelerated?

* **Impact:** Significant reduction → MAJOR; Minor potential → MINOR

### Regulatory Risk Assessment

Assess regulatory risk of deviation if discovered during inspection:

| Risk Factor             | Low                   | Medium                        | High                                     |
| ----------------------- | --------------------- | ----------------------------- | ---------------------------------------- |
| **Citation Likelihood** | Would not be cited    | Possible observation          | Likely Warning Letter citation           |
| **Compliance History**  | No recent citations   | Previous observations in area | Previous 483s or Warning Letters         |
| **Visibility**          | Internal process only | Documented in batch record    | Obvious during inspection                |
| **Systemic Nature**     | Isolated incident     | Occurred 2-3 times            | Recurring issue (>3 times)               |
| **FDA Focus Area**      | Not current focus     | Related to focus area         | Direct focus area (e.g., data integrity) |

**Overall Regulatory Risk:**

* **Low:** Can likely be defended as isolated issue with adequate investigation

* **Medium:** Would require strong justification and CAPA demonstration

* **High:** Serious regulatory exposure, may prevent future inspectional approvals

### Batch Disposition Impact Framework

Use this framework to determine batch disposition based on deviation and investigation findings:

**Scenario 1: CRITICAL Deviation, Quality Impact Confirmed**

* **Disposition:** REJECT

* **Example:** Assay test fails specification (92%, spec 95-105%)

* **Rationale:** Product does not meet quality standards, patient safety cannot be assured

**Scenario 2: CRITICAL Deviation, Quality Impact Investigated and Ruled Out**

* **Disposition:** RELEASE (with justification)

* **Example:** Equipment calibration expired but verification shows measurements were accurate, all testing passed

* **Rationale:** Investigation demonstrates product meets all specifications despite deviation, quality is assured

**Scenario 3: CRITICAL Deviation, Quality Impact Unknown**

* **Disposition:** HOLD pending investigation completion

* **Example:** Process parameter excursion, testing not yet complete

* **Rationale:** Cannot release until impact is understood

**Scenario 4: MAJOR Deviation with Acceptable Investigation**

* **Disposition:** RELEASE

* **Example:** Hold time exceeded but moisture testing confirms material still within specification

* **Rationale:** Investigation demonstrates product quality maintained

**Scenario 5: Multiple MAJOR or MINOR Deviations**

* **Disposition:** Review cumulative impact

* **Example:** 5 different MINOR deviations in single batch

* **Rationale:** Individual deviations may be minor, but cumulative effect suggests inadequate control; may warrant HOLD for comprehensive review

**Scenario 6: MINOR Deviation**

* **Disposition:** RELEASE

* **Example:** Date format error (information is accurate)

* **Rationale:** No quality impact, documentation gap only

### Decision Documentation Requirements

For all CRITICAL and MAJOR deviations, document:

1. **Deviation Description:** What happened, when, where, who discovered it
2. **Immediate Impact Assessment:** Initial evaluation of quality and safety risk (completed within 24-72 hours)
3. **Investigation Findings:** Root cause or most probable cause with supporting evidence
4. **Quality Risk Assessment:** Formal risk assessment using appropriate ICH Q9 tool (FMEA, Risk Matrix, etc.)
5. **Testing Results:** All relevant testing (IPC, QC, additional testing performed for investigation)
6. **Scientific Justification:** Scientific rationale supporting conclusions
7. **Regulatory Assessment:** Reportability determination and rationale
8. **Batch Disposition Rationale:** Clear justification for release, hold, or rejection
9. **CAPA Plan:** Corrective and preventive actions to prevent recurrence
10. **QA Approval:** Quality unit review and approval of investigation and disposition

***

## Regulatory References and Perspectives

### FDA Perspective on Deviation Classification

**Guidance Documents:**

* FDA Guidance for Industry: "Quality Metrics" (2016)

* FDA Guidance: "Investigating Out-of-Specification (OOS) Test Results" (2006)

* FDA Warning Letters and 483 Observations (ongoing)

**FDA Expectations:**

1. **Risk-Based Approach:** FDA expects companies to use risk management principles (ICH Q9) to classify and prioritize deviations
2. **Prompt Investigation:** CRITICAL deviations should be investigated immediately; MAJOR within days
3. **Thorough Documentation:** All deviations documented, investigated, and closed in timely manner
4. **Trend Analysis:** Companies should trend deviations to identify systemic issues
5. **CAPA Effectiveness:** CAPAs must be effective; recurring deviations indicate inadequate quality system

**Common FDA Citations Related to Deviations:**

* 21 CFR 211.192: Failure to thoroughly investigate discrepancies

* 21 CFR 211.180(e): Inadequate controls to prevent unauthorized access or changes to records

* 21 CFR 211.100(a): Failure to follow written procedures

* 21 CFR 211.22: Failure of quality unit to ensure investigations are conducted

### EU GMP Perspective

**Key References:**

* EU GMP Chapter 1: Quality Management (Pharmaceutical Quality System)

* EU GMP Chapter 5: Production

* EMA Guideline on GMP compliance (ongoing)

**EU Expectations:**

1. **Quality Risk Management:** Chapter 1 requires risk-based approach to quality
2. **Deviation Handling:** All deviations from procedures should be documented and investigated
3. **Critical Deviations:** Those affecting product quality should be investigated thoroughly
4. **Regulatory Reporting:** Serious quality defects must be reported to competent authorities

**Classification Terminology:**

* EU often uses **Critical**, **Major**, **Minor** aligned with inspection classification

* "Critical" observations in inspections may lead to suspension of manufacturing authorization

### ICH Q9: Quality Risk Management Application

ICH Q9 provides framework for risk-based decision making in pharmaceutical quality. Application to deviation classification:

**Risk Assessment Tools for Deviation Classification:**

1. **Failure Mode and Effects Analysis (FMEA)**

   * Use for complex deviations affecting multiple systems

   * Scores: Severity × Occurrence × Detection = Risk Priority Number (RPN)

   * High RPN → CRITICAL or MAJOR

2. **Risk Matrix (5×5 or 3×3)**

   * Simple tool for most deviations

   * Axes: Probability (likelihood of quality impact) vs. Severity (magnitude of impact)

   * High probability + High severity → CRITICAL

   * Low probability + High severity OR High probability + Low severity → MAJOR

   * Low probability + Low severity → MINOR

3. **Ishikawa Diagram (Fishbone)**

   * Use for root cause analysis after classification

   * Helps identify systemic vs. isolated causes

**ICH Q9 Risk Communication:**

* Deviation classification should be communicated using consistent terminology

* Risk decisions should be documented and justifiable

* Risk acceptability criteria should be predefined

***

## Escalation Matrix

Define clear escalation paths based on deviation severity to ensure appropriate oversight and decision-making.

### CRITICAL Deviations

| Timeframe          | Action                                                     | Responsible Party               | Notification                                                         |
| ------------------ | ---------------------------------------------------------- | ------------------------------- | -------------------------------------------------------------------- |
| Immediate (1 hour) | Batch quarantine, stop use of affected materials/equipment | Production Supervisor, QA       | QA Manager, Production Manager                                       |
| 24 hours           | Investigation initiation, preliminary impact assessment    | QA Specialist                   | QA Director, VP Quality, Regulatory Affairs                          |
| 72 hours           | Preliminary findings, batch disposition recommendation     | QA Manager + Investigation Team | Executive Leadership (CEO/COO) if patient safety risk                |
| 30 days            | Investigation completion, final report, CAPA assignment    | QA Director                     | All stakeholders, Regulatory Affairs for reportability determination |

**Additional Escalations:**

* **FDA Reportable:** Notify Regulatory Affairs within 24 hours for determination (e.g., Biological Product Deviation)

* **Market Product Affected:** Notify VP Quality, Regulatory Affairs, and CEO immediately for recall assessment

* **Inspection Pending:** Notify all leadership if inspection scheduled within 90 days

### MAJOR Deviations

| Timeframe | Action                                       | Responsible Party               | Notification                   |
| --------- | -------------------------------------------- | ------------------------------- | ------------------------------ |
| 24 hours  | Batch hold/quarantine pending review         | Production Supervisor, QA       | QA Manager                     |
| 5 days    | Investigation initiation                     | QA Specialist                   | QA Manager, Department Manager |
| 45 days   | Investigation completion, batch disposition  | QA Manager                      | VP Quality (monthly summary)   |
| As needed | CAPA assignment if systemic issue identified | QA with support from Operations | QA Director                    |

### MINOR Deviations

| Timeframe | Action                                              | Responsible Party         | Notification                  |
| --------- | --------------------------------------------------- | ------------------------- | ----------------------------- |
| 7 days    | Brief investigation, immediate cause identification | Supervisor, QA Specialist | QA Manager (weekly summary)   |
| 30 days   | Investigation closure, corrective action if needed  | QA Specialist             | Department Manager            |
| Quarterly | Trending review                                     | QA Manager                | VP Quality (if trends emerge) |

### OBSERVATIONS

| Timeframe      | Action                                                          | Responsible Party       | Notification |
| -------------- | --------------------------------------------------------------- | ----------------------- | ------------ |
| As appropriate | Opportunity assessment, cost/benefit analysis                   | Department Manager      | Optional     |
| Annual         | Review of observations for continuous improvement opportunities | QA Manager + Operations | VP Quality   |

***

## Trending and Metrics

Deviation data should be trended to identify systemic issues and measure quality system effectiveness.

### Key Metrics to Track

1. **Deviation Rate**

   * Number of deviations per batch

   * Number of deviations per 100 batches

   * Trend over time (monthly, quarterly)

2. **Deviation Classification Distribution**

   * % CRITICAL

   * % MAJOR

   * % MINOR

   * Target: Declining CRITICAL and MAJOR over time

3. **Investigation Cycle Time**

   * Average days to close CRITICAL deviations (Target: ≤30 days)

   * Average days to close MAJOR deviations (Target: ≤45 days)

   * % investigations completed on time

4. **Recurring Deviations**

   * Number of deviations occurring 3+ times in 12 months

   * Effectiveness of CAPAs (measured by recurrence rate)

5. **Root Cause Analysis Quality**

   * % investigations identifying definitive root cause

   * % investigations requiring re-investigation

### Trending Triggers

When trends indicate systemic issues:

* **3 similar CRITICAL deviations in 12 months:** Escalate to executive leadership, formal RCA, comprehensive CAPA

* **5+ MAJOR deviations in single area in 6 months:** Department-level assessment, potential systemic CAPA

* **Increasing deviation rate >20% quarter-over-quarter:** Quality system review

* **Investigation cycle time exceeding 45 days for >30% of deviations:** Resource or process assessment

### Reporting Cadence

* **Weekly:** CRITICAL deviation status to QA leadership

* **Monthly:** Deviation summary (all levels) to QA Director and VP Quality

* **Quarterly:** Deviation trends and metrics to Executive Leadership

* **Annual:** Comprehensive deviation analysis in Annual Product Review (APR)

***

## Special Scenarios and Edge Cases

### Scenario 1: Deviation Discovered After Batch Release

**Classification Considerations:**

* May escalate severity due to market exposure

* If CRITICAL with quality impact: Potential recall

* Investigate how deviation was missed during initial review

**Actions:**

* Immediate risk assessment for market product

* Notification to Regulatory Affairs

* Recall assessment per recall procedure

* RCA for both the deviation and the detection failure

### Scenario 2: Multiple Related Deviations in Single Batch

**Classification Considerations:**

* Assess cumulative impact

* Multiple MINOR deviations may collectively warrant MAJOR classification

* May indicate inadequate process control

**Actions:**

* Classify each deviation individually

* Perform overall batch assessment considering cumulative risk

* Consider batch rejection if cumulative issues suggest loss of control

### Scenario 3: Deviation in Non-Critical Process Step

**Classification Considerations:**

* Even non-critical steps require GMP compliance

* Classification based on GMP impact rather than direct quality impact

* May still be MAJOR if significant procedural violation

**Example:** Equipment cleaning deviation for non-product-contact surface → MAJOR (GMP compliance issue even though quality impact unlikely)

### Scenario 4: Deviation with Superseding Test Results

**Classification Considerations:**

* Testing demonstrates product meets specifications despite deviation

* May allow CRITICAL deviation to be released with thorough justification

* Cannot use testing alone to dismiss investigation requirement

**Example:** Hold time exceeded (MAJOR), but extensive stability testing shows product unaffected → Release with justification

### Scenario 5: Intentional Deviation to Prevent Greater Harm

**Classification Considerations:**

* Emergency deviations to prevent equipment damage or safety hazard

* Should still be documented and investigated

* Classification based on GMP impact, but disposition considers circumstances

**Example:** Process stopped early due to equipment overheating (safety risk) → MAJOR deviation but with justified emergency action

***

## Training and Competency Requirements

All personnel involved in deviation classification should receive training on this framework.

**Training Audience:**

* QA Specialists and Managers

* Manufacturing Supervisors and Managers

* Regulatory Affairs personnel

* Laboratory Supervisors

**Training Content:**

* Severity level definitions and criteria

* Classification decision tree application

* Impact assessment methodology

* Case studies and exercises

* Regulatory expectations

**Competency Assessment:**

* Classification exercises with known deviations

* Passing score: 80% agreement with expert classification

* Annual refresher training

***

## Document Revision History

| Version | Date | Changes                                                               | Author             |
| ------- | ---- | --------------------------------------------------------------------- | ------------------ |
| 1.0     | 2022 | Initial framework                                                     | QA Department      |
| 1.5     | 2023 | Added ICH Q9 references, expanded examples                            | QA Regulatory Lead |
| 2.0     | 2024 | Comprehensive update with decision tree, metrics, FDA/EU perspectives | QA Director        |

***

***

# Part 6: Common Deviations Catalog

## Document Information

**Document Type:** Reference Catalog\
**Purpose:** Comprehensive catalog of frequently encountered batch record deviations with classification, root causes, and corrective actions\
**Scope:** All pharmaceutical manufacturing deviations across solid oral, liquid, sterile, and biological dosage forms\
**Version:** 2.0\
**Last Updated:** 2024

***

## Overview

This catalog documents 60+ common deviations encountered during batch record review, organized by category. Each entry provides standardized information to support consistent deviation handling, investigation, and prevention.

### How to Use This Catalog

1. **Identification:** Locate deviation similar to observed issue
2. **Classification:** Use typical severity as starting point (adjust based on context)
3. **Investigation:** Apply root cause analysis guidance
4. **Resolution:** Implement recommended corrective and preventive actions

**Important:** Severity classifications are typical cases. Context matters - same deviation may be classified differently based on:

* Product characteristics (sterile vs. non-sterile, critical vs. non-critical attributes)

* Extent of deviation (magnitude, duration, frequency)

* Actual vs. potential impact on quality

* Detection timing (during manufacturing vs. after release)

***

## Category 1: Missing or Incomplete Information

### DEV-001: Missing Operator Signature

**Deviation ID:** DEV-001\
**Category:** Documentation & Signatures\
**Checklist Reference:** D-01

**Description:**\
Manufacturing operation was performed but operator signature/initials are missing from the batch record, making it impossible to determine who performed the task.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.182, 21 CFR 211.188(b)(11), EU GMP Chapter 4

**Example Scenario:**\
Blending operation shows start time 09:00, end time 10:15, parameter recordings complete, but signature line for operator who performed blending is blank. Production logbook shows Operator ID "JD-247" was in blending area during this time.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Operator forgot to sign, or signature requirement unclear

* **Contributing Factors:** Rushed processing, distraction, inadequate training, form design (signature location not prominent)

* **Investigation Questions:**

  * Who performed the operation? (Check area logs, badge swipes, video if available)

  * Is operator trained and qualified for this operation?

  * Was operation performed correctly based on other evidence (parameters, timing, results)?

  * Has this operator or area had previous missing signature deviations?

**Recommended Corrective Action:**

1. Identify operator through area logs, badge swipes, or supervisor confirmation
2. If operator identified and qualified: Document operator identity in deviation report, do not add signature retrospectively
3. If operator cannot be identified: Escalate investigation, assess operation validity through other evidence
4. Retrain operator on documentation requirements

**Preventive Action Suggestions:**

* Implement in-process verification by supervisors (check signatures before batch proceeds to next step)

* Redesign batch record forms with prominent signature boxes

* Implement electronic batch records with mandatory electronic signatures

* Add signature completion to line clearance checklist

* Monthly reminder training on documentation requirements

***

### DEV-002: Blank Data Field (No Entry, No N/A)

**Deviation ID:** DEV-002\
**Category:** Documentation\
**Checklist Reference:** D-06

**Description:**\
Data entry field in batch record is completely blank with no entry and no "N/A" designation, creating ambiguity whether field is not applicable or data was not recorded.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.188, FDA Inspection Guide

**Example Scenario:**\
Equipment cleaning verification section has fields for: Date Cleaned, Cleaner ID, Supervisor Verification. "Date Cleaned" shows "15-MAR-2024", "Cleaner ID" shows "OP-123", "Supervisor Verification" is completely blank (no signature, no N/A).

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Data not recorded, or field not applicable but not marked N/A

* **Investigation Questions:**

  * Is this field required or optional per SOP?

  * Was the step performed? (Evidence from other records)

  * Why was field left blank - oversight or intentional?

  * Pattern of blank fields in this batch or from this operator?

**Recommended Corrective Action:**

1. Investigate whether data exists elsewhere (other logs, electronic records)
2. If data retrievable: Document in deviation report, cross-reference to source
3. If truly N/A: Document justification in deviation report
4. If data lost: Assess impact on batch quality and traceability
5. Retrain on GDP requirement to complete all fields or mark N/A with justification

**Preventive Action Suggestions:**

* Revise batch record forms to clearly indicate required vs. optional fields

* Add instruction: "Enter data or N/A with reason for all fields"

* Implement electronic batch records with field validation (cannot proceed with blank required fields)

* Supervisor review of batch records at end of each shift for completeness

* Include "blank field check" in QA batch review checklist

***

### DEV-003: Missing In-Process Control Result

**Deviation ID:** DEV-003\
**Category:** In-Process Controls\
**Checklist Reference:** I-01

**Description:**\
MBR requires specific IPC test at defined process stage, but test result is not documented in batch record.

**Typical Severity:** CRITICAL (if test not performed) or MAJOR (if performed but not documented)

**Regulatory Reference:**\
21 CFR 211.110(c), EU GMP Chapter 6.17

**Example Scenario:**\
Tablet compression step requires tablet weight check every 30 minutes per MBR. Compression ran from 10:00 to 14:00 (4 hours = 8 checks required). Batch record shows only 5 weight checks, missing checks at approximately 11:00, 12:30, and 13:30.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Test not performed, or performed but not recorded

* **Investigation Questions:**

  * Were tests actually performed? (Check operator memory, supervisor observation, any informal notes)

  * If performed, why not recorded? (Time pressure, distraction, ran out of forms)

  * If not performed, why not? (Equipment unavailable, operator unfamiliar with requirement, conflicting priorities)

  * What is quality impact of missing test data? (Were other nearby tests acceptable, suggesting process was in control?)

**Recommended Corrective Action:**

1. **If test not performed:** Classify as CRITICAL, assess quality impact through additional testing if possible, evaluate batch disposition carefully
2. **If test performed but not documented:** Classify as MAJOR, document any retrievable data in deviation report, cannot recreate data from memory
3. Retrain on IPC testing requirements and documentation timing (test and record immediately)

**Preventive Action Suggestions:**

* Implement automated reminders for time-based IPC tests (alarms, timers)

* Redesign batch record with check boxes for each required test (visual reminder)

* Supervisor or QA spot-check IPC completion during processing

* Implement electronic IPC recording with timestamps

* Add IPC completion verification before allowing batch to proceed to next step

***

### DEV-004: Missing QA Review Signature

**Deviation ID:** DEV-004\
**Category:** Documentation & Signatures\
**Checklist Reference:** D-03

**Description:**\
Batch record shows batch disposition as "Release" but QA review signature is missing, or signature is from unauthorized person (not on QA signature authority list).

**Typical Severity:** CRITICAL

**Regulatory Reference:**\
21 CFR 211.192, 21 CFR 211.22, EU GMP Chapter 2.15

**Example Scenario:**\
Batch record final page shows "BATCH DISPOSITION: RELEASE" with date 20-MAR-2024, but QA review signature line is blank. Batch was already shipped to warehouse. Upon investigation, QA Specialist completed review but forgot to sign final page.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** QA reviewer forgot to sign, or non-QA person signed

* **Investigation Questions:**

  * Was QA review actually performed? (Interview QA reviewer, check for review checklist or notes)

  * If performed, what did review conclude? (Retrieve reviewer's notes or checklist)

  * If not performed, who authorized batch release? (Major quality system breakdown)

  * Has batch already been distributed? (Escalates urgency)

**Recommended Corrective Action:**

1. **If review performed but not signed:** Document review findings in deviation report, have reviewer confirm completion (verbal or written attestation), add note to batch record but do not retrospectively sign. Retrain reviewer.
2. **If review not performed:** Immediately quarantine all batch units if possible. Perform QA review immediately. If batch fails review, initiate recall.
3. **If wrong person signed:** Verify signer's qualifications. If unqualified, perform proper QA review immediately.

**Preventive Action Suggestions:**

* Implement electronic batch records with mandatory signature fields (cannot save as "Released" without QA signature)

* Add "QA signature verification" to warehouse receipt checklist (verify signature before accepting batch)

* Implement dual-check: QA Manager spot-checks released batches for proper signatures

* Limit access to "Release" disposition to QA personnel only in electronic systems

***

### DEV-005: Incomplete Line Clearance Documentation

**Deviation ID:** DEV-005\
**Category:** Equipment & Calibration\
**Checklist Reference:** E-03

**Description:**\
Line clearance checklist incomplete - one or more items not checked or signed, creating ambiguity whether line was properly cleared of previous product.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.182(a), EU GMP Chapter 5.21

**Example Scenario:**\
Line clearance checklist has 12 items. Items 1-9 are checked and initialed, items 10-12 (Labels removed and destroyed, Area cleaned, Previous product removed) are blank with no check marks or initials. Processing began despite incomplete checklist.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Checklist not fully completed before release for manufacturing

* **Investigation Questions:**

  * Were unchecked items actually performed? (Physical inspection of area, video review if available)

  * Who performed line clearance? (Should be independent person, not same person who will manufacture)

  * Why wasn't completion verified before manufacturing started? (Supervisor oversight failure)

  * Was there risk of cross-contamination or mix-up? (Inspect batch for evidence)

**Recommended Corrective Action:**

1. Immediately inspect area/equipment for any evidence of previous product
2. Interview personnel who performed line clearance - determine if unchecked items were actually done
3. Document findings in deviation report
4. Assess risk of cross-contamination based on products involved
5. Consider additional testing if high-risk scenario (potent compound, allergenic material)
6. Retrain on line clearance procedures - checklist must be 100% complete before manufacturing begins

**Preventive Action Suggestions:**

* Implement "hard stop" - supervisor must verify 100% line clearance completion before authorizing batch start

* Redesign checklist with prominent "Verified Complete" signature at bottom

* Electronic batch records: Cannot open batch record until line clearance electronically signed

* Add line clearance verification photos to documentation

* Monthly audit of line clearance checklists for completion

***

### DEV-006: Missing Verification Signature (Second Person Check)

**Deviation ID:** DEV-006\
**Category:** Documentation\
**Checklist Reference:** M-07, D-02

**Description:**\
Critical operation requiring independent verification per MBR shows operator signature but no verifier signature (second person check).

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.101(c), EU GMP Chapter 4.14

**Example Scenario:**\
Material dispensing: API Amoxicillin, Lot A-2024-045, Quantity Required: 2,500.0 g, Actual: 2,501.2 g. Dispenser signature: "JD, 10-MAR-2024". Verifier signature: blank. MBR requires independent verification of all API dispensing.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Verifier did not perform check, or performed but did not sign

* **Investigation Questions:**

  * Was verification actually performed? (Interview dispenser and potential verifiers)

  * If performed, was it independent? (Different person, contemporaneous)

  * If not performed, was dispensing correct? (Can verify through reconciliation, although this doesn't replace required verification)

  * Why was requirement missed? (Verifier unavailable, time pressure, misunderstanding of requirement)

**Recommended Corrective Action:**

1. Determine if verification actually occurred through interviews
2. If occurred but not signed: Document in deviation report, retrain on documentation timing
3. If not occurred: Classify as more serious; assess accuracy through other means (reconciliation, material balance); may require enhanced QC testing
4. Retrain both dispenser and verifiers on four-eyes principle requirement

**Preventive Action Suggestions:**

* Implement "barcode verification" system - verifier must scan badge to document verification

* Add visual reminders on batch record forms: "STOP - INDEPENDENT VERIFICATION REQUIRED"

* Supervisor checks for verification signatures before material proceeds to manufacturing

* Include verification completion in shift handover checklist

* Consider electronic dispensing systems with mandatory verification step

***

### DEV-007: Missing Batch Number on Page(s)

**Deviation ID:** DEV-007\
**Category:** Header & Identification\
**Checklist Reference:** H-02

**Description:**\
One or more pages of batch record are missing batch number, creating risk of page misplacement or mix-up with other batches.

**Typical Severity:** MINOR (for few pages) to MAJOR (for many pages or critical sections)

**Regulatory Reference:**\
21 CFR 211.188, EU GMP Chapter 4.16

**Example Scenario:**\
45-page batch record reviewed. Pages 1-38 have batch number "2024-03-AMX-0012" in header. Pages 39-45 (packaging section) have blank batch number fields.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Batch number not transcribed to all pages

* **Investigation Questions:**

  * Are pages clearly part of this batch based on other identifiers? (Product name, dates, continuity)

  * Is there risk pages could be from different batch? (Other batches manufactured same day?)

  * Why weren't pages pre-populated with batch number? (Form design issue)

  * Pattern of missing batch numbers in other batches?

**Recommended Corrective Action:**

1. Verify pages belong to correct batch through other evidence (dates, sequence, continuity)
2. Add batch number to missing pages if verifiable (per GDP - initial and date addition)
3. If cannot verify: Escalate severity, may require additional investigation
4. Retrain on requirement to transcribe batch number to all pages at batch start

**Preventive Action Suggestions:**

* Pre-print batch records with batch number on all pages when batch is opened

* Implement electronic batch records (batch number auto-populated)

* Add "batch number verification" to QA review checklist

* Design forms with prominent batch number field on each page

* Consider using pre-printed batch-specific barcodes on all pages

***

### DEV-008: Missing Analytical Report (AR) Number for Material

**Deviation ID:** DEV-008\
**Category:** Bill of Materials\
**Checklist Reference:** M-03

**Description:**\
Material used in batch does not have AR/COA number recorded in batch record, preventing verification that material was tested and released before use.

**Typical Severity:** CRITICAL

**Regulatory Reference:**\
21 CFR 211.84(a), EU GMP Chapter 4.20

**Example Scenario:**\
Bill of Materials lists: "Lactose Monohydrate, Lot L-2024-0456, Quantity 45.0 kg, AR Number: \[blank]". Material was dispensed and used. Investigation reveals AR does exist (AR-2024-1234) and material passed testing, but number was not transcribed to batch record.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** AR number not recorded during dispensing

* **Investigation Questions:**

  * Does AR exist for this material lot? (Check QC database)

  * If yes, did material pass testing? (Review AR results)

  * If yes, when was material released? (Before or after use in batch - critical question)

  * Why wasn't AR recorded? (Information not available at dispensing, operator error, dispensing from wrong location)

**Recommended Corrective Action:**

1. **If AR exists and material passed before use:** Classify as MAJOR (documentation error), document AR number in deviation report
2. **If AR doesn't exist or material used before release:** Classify as CRITICAL, material used without QA approval - major GMP violation. Assess batch disposition carefully, may require rejection.
3. Retrain dispensing personnel on requirement to verify AR status and record AR number

**Preventive Action Suggestions:**

* Implement barcode scanning at dispensing - scans AR label and auto-populates batch record

* Require dispensing from "Released Materials" area only (physical segregation from quarantine)

* Add AR verification to independent verifier checklist

* Electronic dispensing system: Cannot dispense material without released status in system

* Periodic audit of dispensing practices

***

### DEV-009: Missing Environmental Monitoring Data

**Deviation ID:** DEV-009\
**Category:** Environmental Monitoring\
**Checklist Reference:** V-01, V-02

**Description:**\
Batch processed in controlled environment (specific temperature/humidity requirements) but environmental monitoring data is not recorded in batch record or referenced room log.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.42, EU GMP Annex 1

**Example Scenario:**\
Hygroscopic product (moisture-sensitive) processed in controlled humidity room. Batch record states "Process in RH-controlled area, maintain RH <40%". No RH data recorded in batch record, no reference to room log. Investigation finds room log does exist with RH 35-38% during processing period.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Environmental data not recorded or referenced in batch record

* **Investigation Questions:**

  * Does environmental data exist? (Room logs, building management system records)

  * If yes, were conditions within specification during entire batch? (Review all data)

  * If data doesn't exist, can conditions be inferred? (Calibrated monitoring equipment in place?)

  * Why wasn't data recorded/referenced? (Unclear SOP, assumption that separate log is sufficient)

**Recommended Corrective Action:**

1. Retrieve environmental monitoring data from alternate sources (room logs, BMS)
2. Verify conditions met specifications during entire batch processing period
3. Document findings in deviation report with reference to data sources
4. If data cannot be retrieved: Escalate to CRITICAL, assess batch risk based on product sensitivity
5. Clarify SOP: Either record data in batch record OR clearly reference log with specific date/time range

**Preventive Action Suggestions:**

* Revise batch record template: Add field "Room Log Reference: Log ID \_\_\_, Date/Time \_\_\_"

* Implement automated environmental data capture with printout attached to batch record

* Add environmental data verification to in-process QA checks

* Electronic batch records: Auto-populate environmental data from BMS

* Monthly review of batch records to ensure environmental data present or properly referenced

***

### DEV-010: Missing Expiry Date or Retest Date Calculation

**Deviation ID:** DEV-010\
**Category:** Header & Identification\
**Checklist Reference:** H-06

**Description:**\
Batch record does not include calculated expiry date (finished products) or retest date (APIs), or calculation is present but incorrect.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.137, EU GMP Chapter 4.18

**Example Scenario:**\
Tablet batch record: Manufacturing Date: 15-MAR-2024, Shelf Life: 36 months. Expiry Date field: blank. Product is packaged and labeled with expiry date MAR-2027 (from packaging SOP), but batch record doesn't document calculation.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Expiry date field not completed on batch record

* **Investigation Questions:**

  * Is expiry date calculation documented elsewhere? (Packaging record, label file)

  * Is calculation correct where documented? (Verify: Mfg Date + Shelf Life)

  * Is labeled expiry date correct? (Critical for market product)

  * Why wasn't batch record field completed? (Oversight, field not prominent, assumption that packaging handles it)

**Recommended Corrective Action:**

1. Calculate expiry date: Mfg Date + Approved Shelf Life
2. Verify label expiry date matches correct calculation (most critical)
3. Document correct expiry date in deviation report
4. If label expiry date is incorrect: ESCALATE TO CRITICAL - may require relabeling or recall
5. If label correct but batch record blank: MAJOR - document in deviation report

**Preventive Action Suggestions:**

* Revise batch record: Make expiry date field mandatory with formula visible

* Implement automated expiry date calculation in electronic batch records

* Add expiry date verification to QA review checklist

* Cross-check: Verify batch record expiry matches label file expiry before printing labels

* Supervisor reviews batch record for completeness before releasing to packaging

***

### DEV-011: Process Step Timing Not Recorded

**Deviation ID:** DEV-011\
**Category:** Process Parameters\
**Checklist Reference:** P-05

**Description:**\
Timed process step (mixing, drying, coating) missing start time, end time, or both, preventing verification that timing met MBR requirements.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.188(b)(4), ICH Q7 Section 6.41

**Example Scenario:**\
Mixing step: MBR requires "Mix at 25 rpm for 15 ± 2 minutes". Batch record shows: Start Time: \[blank], End Time: 10:45, Speed: 25 rpm. Cannot verify mixing duration met specification.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Operator did not record start time

* **Investigation Questions:**

  * Can start time be inferred from other records? (Previous step end time, operator logbook, electronic equipment timestamp)

  * If duration calculable, did it meet specification? (13-17 minutes)

  * Why wasn't time recorded? (Rushed to start process, intended to record but forgot, unclear form)

  * Pattern of missing timing data?

**Recommended Corrective Action:**

1. Attempt to reconstruct timing from other sources (previous step times, equipment logs)
2. If reconstructable and within spec: Document in deviation report
3. If not reconstructable: Assess quality impact - other evidence process was controlled? (IPC results, final testing)
4. Retrain on requirement to record start time before starting and end time immediately upon completion

**Preventive Action Suggestions:**

* Implement equipment with integrated timers that print start/end times

* Redesign batch record forms: Large prominent START/END time boxes

* Add timer verification to supervisor spot checks

* Electronic batch records: Prompt operators to enter times with validation

* Consider automated time stamping when equipment is started/stopped

***

### DEV-012: Missing Deviation Report Number Reference

**Deviation ID:** DEV-012\
**Category:** Deviations & CAPAs\
**Checklist Reference:** X-02

**Description:**\
Deviation noted in batch record (parameter excursion, equipment failure, etc.) but no deviation report number referenced, breaking traceability to formal investigation.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.192, EU GMP Chapter 1.4

**Example Scenario:**\
Drying step: Temperature specification 60-70°C. At 14:30, operator notes "Temp spiked to 75°C for \~5 min, reduced heater setting, returned to 65°C. See deviation report." No deviation report number documented. QA cannot locate deviation report without number.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Operator noted to open deviation but didn't record number, or deviation not actually opened

* **Investigation Questions:**

  * Was deviation report actually opened? (Search deviation database by date, batch, keyword)

  * If yes, what is deviation number? (Record in batch record now)

  * If no, why not? (Operator thought someone else would open, didn't know how, too busy)

  * Has deviation been investigated? (Quality impact assessment completed?)

**Recommended Corrective Action:**

1. Search deviation database to locate report (search by batch number, date range, area)
2. If found: Record deviation number in batch record and cross-reference
3. If not found: Open deviation report immediately, document delay as separate issue
4. Retrain operators: Must record deviation number in batch record at time of occurrence

**Preventive Action Suggestions:**

* Implement policy: Deviation must be opened before batch proceeds; supervisor verifies number recorded

* Electronic batch records: Link to deviation system - operator opens deviation within batch record interface, number auto-populated

* Add "deviation traceability check" to QA review checklist

* Provide quick reference guide for opening deviations at each work station

* Monthly audit: Check batch records for deviation notations without numbers

***

## Category 2: Process Parameter Excursions

### DEV-013: Temperature Excursion During Processing

**Deviation ID:** DEV-013\
**Category:** Process Parameters\
**Checklist Reference:** P-02, P-06

**Description:**\
Process temperature exceeded specified range during manufacturing step (drying, reaction, coating, sterilization).

**Typical Severity:** CRITICAL (for sterilization), MAJOR (for other processes)

**Regulatory Reference:**\
21 CFR 211.110(a), ICH Q8(R2)

**Example Scenario:**\
Fluid bed drying: Inlet temperature specification 65-75°C. Temperature chart shows excursion to 82°C for 12 minutes before returning to 70°C. Deviation report DR-2024-0234 opened.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Temperature control failure

* **Contributing Factors:** Controller malfunction, operator error (wrong setpoint), heater failure, airflow imbalance

* **Investigation Questions:**

  * What was magnitude and duration of excursion? (Severity assessment)

  * What caused temperature increase? (Equipment, operator, material)

  * Was temperature controlled or uncontrolled rise? (Evidence of corrective action)

  * What is product sensitivity to temperature? (Degradation, melting point)

  * Impact on product quality? (Perform additional testing - degradation products, moisture, appearance)

**Recommended Corrective Action:**

1. Document excursion fully (magnitude, duration, corrective action taken)
2. Open deviation report immediately
3. Quarantine batch pending impact assessment
4. Perform risk assessment: Does temperature exceed known degradation threshold?
5. Enhanced testing if warranted (impurities, potency, dissolution)
6. Equipment investigation (calibration, controller function, maintenance records)
7. Batch disposition based on testing results and risk assessment

**Preventive Action Suggestions:**

* Implement temperature alarm systems with immediate alert to supervisor

* Calibrate temperature controllers more frequently

* Establish upper action limit alarm (before specification exceeded)

* Preventive maintenance on heating/cooling systems

* Operator training on temperature control troubleshooting

* Consider equipment upgrade to better temperature control system

* Implement SPC (Statistical Process Control) on temperature data to detect trends

***

### DEV-014: Mixing Speed or Time Deviation

**Deviation ID:** DEV-014\
**Category:** Process Parameters\
**Checklist Reference:** P-02

**Description:**\
Mixing/blending performed at speed or for duration outside MBR-specified range.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.110(a), ICH Q11

**Example Scenario:**\
Blending step: Specification 20 ± 2 rpm for 15 ± 2 minutes. Actual: 25 rpm for 12 minutes. Blend uniformity testing: RSD 1.2% (specification <3%, passed), but deviation from validated parameters.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Operator set wrong speed, or mixing stopped early

* **Investigation Questions:**

  * Why was speed incorrect? (Misread MBR, equipment issue, operator confusion)

  * Why was time shortened? (Operator judgment, distraction, time pressure)

  * Is blend uniformity affected? (Critical question - test if not already done)

  * Was this within design space per validation? (Check validation report)

  * Equipment calibration current? (Speed indication accurate?)

**Recommended Corrective Action:**

1. Perform blend uniformity testing (if not already done) - critical to assess impact
2. If uniformity passes: Batch likely acceptable with justification
3. If uniformity fails or marginal: Escalate severity, may require reprocessing or rejection
4. Review validation data: Is actual speed/time within validated design space?
5. Investigate equipment: Verify speed setting and indication accurate
6. Retrain operator on critical process parameters

**Preventive Action Suggestions:**

* Add visual reminders at equipment (signs with correct speed/time)

* Implement equipment controls to prevent speed outside validated range

* Supervisor verification of critical parameters at start of operation

* Electronic batch records: Automatically capture equipment speed from PLC

* Add blend uniformity as IPC for all batches (currently may be periodic)

***

### DEV-015: Compression Force Out of Specification

**Deviation ID:** DEV-015\
**Category:** Process Parameters\
**Checklist Reference:** P-02

**Description:**\
Tablet compression force (or pressure) recorded outside MBR specification range during compression operation.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.110(a), ICH Q8

**Example Scenario:**\
Compression force specification: 8-12 kN. IPC checks show readings: 8.5, 9.0, 9.5, 13.2, 10.0, 9.0 kN. One reading (13.2 kN) exceeds maximum. Tablets from excursion period identified and tested separately: hardness, friability, dissolution all within specifications.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Force setting drifted or was adjusted incorrectly

* **Investigation Questions:**

  * How many tablets affected? (Calculate based on time and press speed)

  * Was force excursion continuous or transient? (One reading vs. sustained)

  * What caused force change? (Operator adjustment, feed variation, machine wear)

  * Quality impact? (Hardness, friability, dissolution tested)

  * Press calibration current?

**Recommended Corrective Action:**

1. Identify tablets produced during excursion period (calculate quantity)
2. If possible, segregate and test separately for quality impact
3. Test results within specification → Document justification for acceptance
4. Test results fail → Reject affected tablets, may reprocess
5. Investigate press: Calibration, force control system, operator adjustments
6. Retrain on compression control and requirement to stay within specification

**Preventive Action Suggestions:**

* Implement real-time compression force monitoring with automatic alarms

* Increase IPC frequency for compression force (every 15 min instead of 30 min)

* Implement SPC charts for compression force (detect trends before specification exceeded)

* Preventive maintenance on tablet press force control system

* Lock critical adjustments (require supervisor approval to adjust force)

***

### DEV-016: pH Out of Specification During Processing

**Deviation ID:** DEV-016\
**Category:** Process Parameters\
**Checklist Reference:** P-02

**Description:**\
Solution or suspension pH measured outside specification range during processing (compounding, reaction, neutralization).

**Typical Severity:** MAJOR to CRITICAL depending on product impact

**Regulatory Reference:**\
21 CFR 211.110(a), ICH Q8

**Example Scenario:**\
Oral solution compounding: pH specification 6.0-7.0. IPC at 60% compounding complete shows pH 7.4. Operator adds acid to adjust, final pH 6.5 (within specification). Deviation report opened.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** pH drifted during compounding

* **Investigation Questions:**

  * Why did pH exceed specification? (Wrong buffer, calculation error, material quality)

  * Was pH correctable? (Adjustment successful)

  * Is API stable at observed pH? (Critical question - check stability data)

  * How long was product at out-of-spec pH? (Exposure duration for stability assessment)

  * pH meter calibrated? (Verify measurement was accurate)

**Recommended Corrective Action:**

1. Document pH profile: Initial, excursion, final
2. Assess API stability at excursion pH (consult stability data or scientific literature)
3. If API degradation possible: Perform impurity testing
4. If pH was correctable and stability data supportive: Likely acceptable with justification
5. If degradation confirmed: May require rejection
6. Investigate cause: Material specifications, procedure accuracy, equipment

**Preventive Action Suggestions:**

* More frequent pH monitoring during critical compounding steps

* Implement pH control system (automated dosing)

* Improve buffer selection or pre-calculation

* Operator training on pH theory and control

* Add intermediate pH checks to MBR (not just final)

***

### DEV-017: Pressure Deviation in Sterilization Cycle

**Deviation ID:** DEV-017\
**Category:** Process Parameters\
**Checklist Reference:** P-02

**Description:**\
Autoclave sterilization pressure recorded outside validated range during sterilization cycle.

**Typical Severity:** CRITICAL

**Regulatory Reference:**\
21 CFR 211.113, EU GMP Annex 1

**Example Scenario:**\
Steam sterilization cycle: Validated parameters 121°C, 15 psig, 15 minutes minimum. Cycle chart shows: Temperature 121-122°C, Pressure 13.5-14.0 psig (below minimum), Time 15 minutes. Pressure transducer calibration was current.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Pressure did not reach minimum validated level

* **Investigation Questions:**

  * Was temperature adequate? (Sterilization is temperature-time dependent, pressure is surrogate)

  * What caused low pressure? (Steam supply issue, leaking door gasket, drain valve issue)

  * Was cycle acceptable per validation? (Review validation data - is lower pressure validated at this temperature?)

  * Biological indicator result? (Critical evidence of sterilization effectiveness)

  * Repeat cycle required?

**Recommended Corrective Action:**

1. **Immediate:** Quarantine batch, do not use until investigation complete
2. Review validation data: Is 13.5-14.0 psig at 121°C within validated parameters?
3. Check biological indicator results (if used) - critical evidence
4. If validation data does not support this pressure: Reject batch or re-sterilize
5. Investigate autoclave: Pressure control, steam supply, seals, sensors
6. Preventive maintenance on autoclave before next use

**Preventive Action Suggestions:**

* Enhanced autoclave monitoring: Alarm for any parameter deviation during cycle

* More frequent autoclave qualification (every 6 months vs. annual)

* Preventive maintenance program improvement

* Biological indicators in every load (not just periodic)

* Redundant pressure monitoring (two independent sensors)

***

### DEV-018: Hold Time Exceeded Between Process Steps

**Deviation ID:** DEV-018\
**Category:** Process Parameters\
**Checklist Reference:** P-08

**Description:**\
Time between two process steps (hold time) exceeded validated maximum duration.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.111, ICH Q7 Section 6.42

**Example Scenario:**\
Wet granulation completed 10-MAR-2024 at 16:00. Drying started 11-MAR-2024 at 14:00 (22-hour hold). Validated maximum hold time: 12 hours. Hold occurred in covered container at room temperature.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Equipment unavailable for next step, or schedule conflict

* **Investigation Questions:**

  * Why did hold occur? (Dryer down for maintenance, staffing gap, batch schedule conflict)

  * What was product condition during hold? (Covered, temperature, humidity exposure)

  * Is product moisture-sensitive or microbial risk? (Wet granules = high microbial risk)

  * Validation data: Why is 12 hours the limit? (Microbial growth, moisture loss, agglomeration)

  * Testing results: Moisture, microbial, appearance, flowability after extended hold

**Recommended Corrective Action:**

1. Perform enhanced testing: Moisture content, microbial bioburden (if not sterile product), granule properties
2. If testing acceptable: Document justification, may release batch
3. If testing fails: May require rejection or reprocessing (re-drying, re-milling)
4. Investigate cause of delay, implement CAPA to prevent scheduling conflicts
5. If equipment failure caused delay: Preventive maintenance review

**Preventive Action Suggestions:**

* Implement backup equipment for critical steps (redundant dryer capacity)

* Improve batch scheduling system (prevent conflicts)

* Extend validated hold times if scientifically justified (perform hold time study)

* Real-time monitoring of hold durations (alerts before limit exceeded)

* Contingency procedures for equipment breakdown scenarios

***

### DEV-019: Coating Weight Gain Outside Specification

**Deviation ID:** DEV-019\
**Category:** Process Parameters\
**Checklist Reference:** P-02

**Description:**\
Tablet coating weight gain (% increase from film coat) falls outside MBR specification range.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.110, ICH Q8

**Example Scenario:**\
Coating weight gain specification: 2.5-3.5% w/w. Actual coating weight gain: 4.1% (exceeds maximum). Possible causes: Spray rate too high, coating time too long, inadequate tablet sampling. Appearance: Tablets slightly thicker than standard, surface smooth and intact.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Excessive coating applied

* **Investigation Questions:**

  * Why was coating excessive? (Spray parameters, time, operator error)

  * Quality impact? (Appearance, dissolution, stability)

  * Were all tablets affected equally? (Sampling representative?)

  * Equipment calibration? (Spray guns, scales)

  * Economic impact? (Excess coating material cost)

**Recommended Corrective Action:**

1. Assess quality impact: Perform dissolution testing (critical - excess coating may retard dissolution)
2. If dissolution passes: Document justification, likely acceptable
3. If dissolution fails: Reject batch or remove excess coating (difficult)
4. Investigate coating process: Spray rate, pan speed, time, tablet sampling method
5. Review coating SOP for process control improvements

**Preventive Action Suggestions:**

* Implement in-process weight gain checks (every 15-30 min during coating)

* Automated coating weight monitoring system

* Improve operator training on coating process control

* Establish action limits before specification limits (e.g., stop at 3.3% if max is 3.5%)

* Improve tablet sampling method for weight checks (ensure representative sample)

***

### DEV-020: Filtration Rate Below Specification

**Deviation ID:** DEV-020\
**Category:** Process Parameters\
**Checklist Reference:** P-03

**Description:**\
Filtration processing rate significantly below expected rate per MBR (non-critical parameter but indicative of potential issue).

**Typical Severity:** MINOR to MAJOR depending on impact

**Regulatory Reference:**\
ICH Q8, Process Understanding

**Example Scenario:**\
Solution filtration: Expected rate 50-80 L/min per historical data and MBR. Actual rate: 15-20 L/min (significantly slower). Filtration eventually completed, product passed all testing, but processing time extended from 2 hours to 6 hours.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Filter plugging or process issue

* **Investigation Questions:**

  * Why was rate slow? (Filter plugging, viscosity higher than expected, pump issue)

  * Filter integrity test passed? (Critical for sterile filtration)

  * Product quality affected by extended processing time? (Stability, microbial risk if non-sterile)

  * Was solution composition different than typical? (More particulates, higher viscosity)

**Recommended Corrective Action:**

1. Assess product quality impact from extended processing (stability, microbial if applicable)
2. Investigate filter: Post-use examination (plugging, particulates), integrity test results
3. Investigate solution: Viscosity, particulate level, composition vs. specification
4. If quality testing passes and no stability concerns: Acceptable with documentation
5. If quality concerns: May require additional testing or hold for stability assessment

**Preventive Action Suggestions:**

* Implement pre-filtration step (clarification filter) to remove particulates

* Specify filter grade more precisely based on solution characteristics

* Monitor filtration rate in real-time (early detection of plugging)

* Investigate raw material quality (source of particulates)

* Establish filtration rate specification with action limits

***

### DEV-021: Granulation Endpoint Not Achieved

**Deviation ID:** DEV-021\
**Category:** Process Parameters\
**Checklist Reference:** P-02

**Description:**\
Wet granulation endpoint criteria (torque, power consumption, visual appearance) not met, but processing continued.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.110, ICH Q8

**Example Scenario:**\
High-shear granulation: Endpoint criteria per MBR "Power consumption 1.8-2.2 kW OR visual assessment of granule formation". Actual endpoint: 1.5 kW, visual assessment "partial granule formation, some powder remaining". Operator judgment: continued to drying. Final product: Blend uniformity marginal (RSD 4.2%, specification <5%).

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Inadequate granulation

* **Investigation Questions:**

  * Why was endpoint not achieved? (Insufficient binder, mixing issue, time limitation)

  * Operator training on endpoint assessment? (Subjective judgment)

  * Quality impact? (Blend uniformity, dissolution, tablet properties critical tests)

  * Should granulation have continued longer? (Why was it stopped?)

**Recommended Corrective Action:**

1. Perform comprehensive testing: Blend uniformity, granule properties, dissolution, content uniformity
2. If testing passes: Acceptable with justification documenting rationale
3. If testing marginal or fails: May require reprocessing (rewet and re-granulate) or rejection
4. Investigate granulation process: Binder amount, mixing time, equipment function
5. Retrain operators on endpoint assessment

**Preventive Action Suggestions:**

* Implement more objective endpoint criteria (eliminate subjective visual assessment)

* Install real-time monitoring (power, torque, temperature) with alarm at lower action limit

* Enhanced operator training with photo examples of acceptable endpoints

* Consider PAT (Process Analytical Technology) for real-time granule quality assessment

* Establish tighter endpoint specification

***

### DEV-022: Drying Time Shortened Due to Schedule Pressure

**Deviation ID:** DEV-022\
**Category:** Process Parameters\
**Checklist Reference:** P-02

**Description:**\
Drying time shortened below MBR minimum specification due to schedule pressure or equipment availability.

**Typical Severity:** CRITICAL (if impacts quality), MAJOR (if testing shows acceptable)

**Regulatory Reference:**\
21 CFR 211.110, 21 CFR 211.100(a)

**Example Scenario:**\
Fluid bed drying: Specification "Dry for minimum 45 minutes or until LOD ≤2.0%, whichever is longer". Actual: Dried for 35 minutes, LOD 2.8% (fails), but dryer needed for next batch. Supervisor approved early stop. Final product: Stability issues at 3 months (degradation).

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Intentional deviation from procedure for schedule reasons

* **Root Cause:** Inadequate equipment capacity, schedule pressure, inadequate management oversight

* **Investigation Questions:**

  * Why was drying stopped early? (Documented decision rationale?)

  * Who authorized early stop? (Authority level)

  * LOD testing performed before stopping? (IPC compliance)

  * Quality impact? (Moisture content, stability, microbial risk)

  * Pattern of schedule-driven deviations? (Culture issue)

**Recommended Corrective Action:**

1. **Immediate:** Quarantine batch, thorough quality assessment
2. Test moisture content in final product (multiple locations)
3. Place on accelerated stability (if not already) to assess moisture impact
4. If moisture exceeds specification or stability affected: Reject batch
5. Management review: Address schedule pressure culture
6. Disciplinary action if willful GMP violation

**Preventive Action Suggestions:**

* Add drying capacity (additional dryer) to eliminate schedule pressure

* Implement strict policy: No schedule-driven deviations permitted

* Management training on quality culture and patient safety priority

* Improve batch scheduling to prevent conflicts

* Enhance supervision during critical operations

***

## Category 3: Equipment Issues

### DEV-023: Equipment Calibration Expired at Time of Use

**Deviation ID:** DEV-023\
**Category:** Equipment & Calibration\
**Checklist Reference:** E-02

**Description:**\
Critical equipment (temperature probe, balance, pressure gauge, etc.) was used with expired calibration date.

**Typical Severity:** CRITICAL

**Regulatory Reference:**\
21 CFR 211.68, EU GMP Annex 15

**Example Scenario:**\
Tablet compression: Weight check performed using balance BAL-15. Calibration sticker shows "Next Cal Due: 28-FEB-2024". Batch processed 15-MAR-2024 (15 days expired). Weight IPC results: 498-503 mg (specification 495-505 mg, within range).

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Expired calibration not detected before use

* **Investigation Questions:**

  * How expired? (Days/weeks/months - severity assessment)

  * Equipment verification data: Can accuracy be confirmed retrospectively? (Check against reference standard)

  * Were measurements critical to quality? (Weight = critical)

  * Pattern of expired calibrations? (System breakdown)

  * Why wasn't expiration detected? (Lack of verification, faded sticker, oversight)

**Recommended Corrective Action:**

1. Immediate equipment recalibration
2. If equipment passes calibration: Data likely reliable, document justification
3. If equipment fails calibration: All data from expired period is suspect - may require batch rejection or extensive retesting
4. Verify all measurements against alternate method if possible
5. Review all batches using this equipment during expired period
6. Implement CAPA to prevent recurrence

**Preventive Action Suggestions:**

* Implement pre-use verification: Operator checks calibration before each use

* Calibration tracking system with automated alerts (30 days before expiration)

* Remove equipment from use area when calibration due (physical quarantine)

* Color-coded calibration stickers (green=current, red=expired)

* Monthly audit of equipment calibration status

* Electronic batch records: Scan equipment barcode, system verifies calibration current

***

### DEV-024: Wrong Equipment Used (Equipment Substitution)

**Deviation ID:** DEV-024\
**Category:** Equipment & Calibration\
**Checklist Reference:** E-06

**Description:**\
Equipment different from MBR specification was used without change control or equivalency documentation.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.100(a), ICH Q7 Section 12.3

**Example Scenario:**\
MBR specifies "Blend in V-Blender VBL-10 (50 kg capacity)". Actual equipment used: "V-Blender VBL-12 (75 kg capacity)". Batch size 40 kg (within capacity of both). Note in batch record: "VBL-10 under maintenance, used VBL-12 per supervisor approval". No change control, no equivalency study documented.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Specified equipment unavailable, substitution made without proper authorization

* **Investigation Questions:**

  * Are blenders equivalent? (Same model, manufacturer, fill volume %, operational principles)

  * Is substitution within validation scope? (Check validation report for equipment flexibility)

  * Was batch size appropriate for substitute equipment? (Fill volume 50-70% optimal)

  * Quality impact? (Blend uniformity testing critical)

  * Why wasn't change control followed? (Emergency, lack of understanding, time pressure)

**Recommended Corrective Action:**

1. Perform equivalency assessment: Compare equipment specifications, validate if necessary
2. If equivalent and batch testing passes: Acceptable with justification
3. If not equivalent: Enhanced testing required, potential batch rejection
4. Implement emergency change control procedure for equipment substitutions
5. Retrain on change control requirements

**Preventive Action Suggestions:**

* Validate equipment families (multiple units qualified for same process)

* Pre-approve common substitutions via change control

* Improve preventive maintenance to reduce equipment downtime

* Maintain backup/redundant equipment for critical operations

* Implement electronic work order system linking equipment availability to batch scheduling

***

### DEV-025: Equipment Cleaning Not Verified Before Use

**Deviation ID:** DEV-025\
**Category:** Equipment & Calibration\
**Checklist Reference:** E-03

**Description:**\
Equipment used for manufacturing without documented verification that cleaning was performed and verified acceptable.

**Typical Severity:** MAJOR (CRITICAL if potent compound or high cross-contamination risk)

**Regulatory Reference:**\
21 CFR 211.67(b), EU GMP Chapter 5.21

**Example Scenario:**\
Tablet press used for Batch A (Product A). Cleaning record shows cleaning completed 10-MAR-2024. Next day (11-MAR-2024), same press used for Batch B (Product B). Line clearance checklist for Batch B shows all items checked except "Equipment cleaning verification" - blank, no signature. Products A and B have different APIs with similar appearance.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Cleaning verification not performed or not documented

* **Investigation Questions:**

  * Was cleaning actually performed? (Interview cleaning personnel)

  * Was cleaning adequate? (Review cleaning log, visual inspection photo if available)

  * Cross-contamination risk level? (Similar vs. different APIs, potency, allergenicity)

  * Testing results: Any unexpected impurities in Product B? (Lab analysis)

  * Previous product characteristics: Potent, allergenic, toxic?

**Recommended Corrective Action:**

1. Determine if cleaning was performed (interview, cleaning logs)
2. Assess cross-contamination risk: Products involved, API characteristics
3. If high risk (potent compound, allergen): Perform testing for previous product residue
4. If testing shows contamination: Reject batch, investigate cleaning procedure adequacy
5. If testing passes and low risk: Acceptable with documentation
6. Retrain on cleaning verification requirements

**Preventive Action Suggestions:**

* Implement "hard stop": Cannot open batch record without cleaning verification signature

* Photo documentation of cleaned equipment (attached to cleaning record)

* Swab testing program (periodic verification of cleaning effectiveness)

* Electronic cleaning log linked to equipment - batch record cannot open until cleaning verified

* Visual aids: Checklist with photos showing "clean" vs "not clean" equipment

***

### DEV-026: Equipment Malfunction During Processing

**Deviation ID:** DEV-026\
**Category:** Equipment & Calibration\
**Checklist Reference:** E-01

**Description:**\
Equipment malfunction occurred during batch processing (pump failure, agitator stopped, heating element failed), requiring corrective action or process interruption.

**Typical Severity:** MAJOR (escalates to CRITICAL if quality impact confirmed)

**Regulatory Reference:**\
21 CFR 211.110, ICH Q8

**Example Scenario:**\
During compounding of oral liquid: Agitator motor stopped after 20 minutes of 60-minute mixing cycle. Cause: Motor overheating, thermal cutoff activated. Operator waited 10 minutes for motor to cool, restarted, completed remaining 40 minutes mixing. Total mixing time achieved: 60 minutes (correct) but interrupted. Homogeneity testing: Passed.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Equipment failure (motor thermal cutoff)

* **Investigation Questions:**

  * What was failure mode? (Mechanical, electrical, control system)

  * Impact on process? (Interruption duration, parameter deviation)

  * Was corrective action appropriate? (Restart acceptable per MBR?)

  * Product quality affected? (Homogeneity, stability, contamination risk)

  * Why did equipment fail? (Maintenance deficiency, overload, end of life)

**Recommended Corrective Action:**

1. Document failure fully: Time, duration, symptoms, corrective action
2. Assess product quality impact: Perform relevant testing (homogeneity for mixing failure)
3. Equipment investigation: Maintenance records, repair needed, replacement
4. Determine if similar batches affected: Review recent batches using same equipment
5. Remove equipment from service until repaired and verified
6. Batch disposition: Based on testing results

**Preventive Action Suggestions:**

* Enhanced preventive maintenance program

* Implement equipment monitoring (predictive maintenance - vibration analysis, thermal monitoring)

* Establish equipment replacement schedule (age-based)

* Increase frequency of maintenance for aging equipment

* Operator training on early failure detection and response

***

### DEV-027: Incorrect Equipment Assembled or Configured

**Deviation ID:** DEV-027\
**Category:** Equipment & Calibration\
**Checklist Reference:** E-01

**Description:**\
Equipment was assembled incorrectly (wrong screens, filters, tooling, settings) before processing began, discovered during or after processing.

**Typical Severity:** MAJOR to CRITICAL depending on impact

**Regulatory Reference:**\
21 CFR 211.100, EU GMP Chapter 5

**Example Scenario:**\
Fluid bed dryer: MBR specifies 40-mesh screen for granule retention. Actual screen installed: 20-mesh (larger openings). Discovered during cleaning after batch completion - fine granules passed through screen and were lost in exhaust system. Yield: 85% (specification 95-102%). Product retained on correct screen: Testing shows acceptable quality, but quantity insufficient for batch size.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Wrong screen installed

* **Investigation Questions:**

  * How was wrong component installed? (Similar appearance, labeling inadequate, operator error)

  * When was error discovered? (During process, after completion)

  * Product loss or quality impact? (Yield, particle size, quality attributes)

  * Why wasn't verification performed? (Setup checklist incomplete, lack of verification step)

  * Pattern of assembly errors?

**Recommended Corrective Action:**

1. Assess product impact: Yield, particle size distribution, quality testing
2. If quality acceptable but yield low: May require batch rejection due to insufficient quantity
3. Investigate equipment setup process: Verification steps, training, identification of components
4. Implement mandatory setup verification by second person before processing
5. Retrain on equipment assembly procedures

**Preventive Action Suggestions:**

* Implement equipment setup checklist with photos of correct configuration

* Label all interchangeable parts clearly (screen mesh size, tooling size)

* Independent verification of equipment setup before use (second person check)

* Color-code equipment parts by size/type

* Store equipment parts in labeled locations (kitting)

* Consider mistake-proofing design (parts only fit correctly)

***

### DEV-028: Equipment Used Beyond Qualified Range

**Deviation ID:** DEV-028\
**Category:** Equipment & Calibration\
**Checklist Reference:** E-05

**Description:**\
Equipment used outside parameters validated during equipment qualification (IQ/OQ/PQ).

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.68, EU GMP Annex 15

**Example Scenario:**\
High shear mixer: Qualified speed range per PQ: 100-500 rpm. Batch processed at 600 rpm per operator judgment (thought higher speed would improve granulation). Granulation over-densified, resulted in hard granules difficult to mill.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Operation beyond validated range

* **Investigation Questions:**

  * Why was equipment used beyond range? (Operator judgment, misunderstanding, intentional deviation)

  * Was change authorized? (Change control, supervisor approval)

  * Quality impact? (Product properties, CQAs affected)

  * Equipment safety risk? (Overspeed can damage equipment)

**Recommended Corrective Action:**

1. Assess product quality impact - full testing of affected batch
2. If outside validated range: Batch disposition requires thorough justification or rejection
3. If quality impact observed: Likely rejection unless reprocessing possible
4. Equipment inspection: Verify no damage from operation beyond range
5. Retrain operators: Equipment must be used within validated parameters
6. If routine operation at higher speed needed: Perform qualification extension study

**Preventive Action Suggestions:**

* Equipment controls: Lock out settings beyond validated range

* Implement alarms for operation near validation limits

* Operator training emphasizing validated range adherence

* Supervisor approval required for any parameter outside typical range

* If broader range needed: Expand validation proactively

***

## Category 4: Material Issues

### DEV-029: Wrong Material Dispensed

**Deviation ID:** DEV-029\
**Category:** Bill of Materials\
**Checklist Reference:** M-02

**Description:**\
Incorrect raw material, API, or excipient dispensed and used in batch (wrong identity).

**Typical Severity:** CRITICAL

**Regulatory Reference:**\
21 CFR 211.101, 21 CFR 211.125(a), EU GMP Chapter 4.14

**Example Scenario:**\
MBR requires: Lactose Monohydrate. Actual material dispensed: Lactose Anhydrous (different material). Discovered during batch record review - material code on dispensing ticket does not match BOM. Products have different moisture content and compaction properties. Batch already compressed and coated before discovery.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Wrong material selected during dispensing

* **Investigation Questions:**

  * How was wrong material selected? (Similar names, adjacent storage, labeling, distraction)

  * Was independent verification performed? (Four-eyes principle)

  * When was error discovered? (Before use vs. after incorporation)

  * Product quality impact? (Different material properties, formulation change)

  * Both materials pharmaceutical grade? (Quality status)

**Recommended Corrective Action:**

1. **Immediate:** Quarantine batch, do not release
2. Assess impact: Different material means different formulation - likely requires rejection unless substitution is validated
3. If materials are pharmaceutically equivalent and substitution validated: May be acceptable with thorough justification (rare)
4. Typically: Batch rejection due to unapproved formulation change
5. Investigate dispensing process: Root cause analysis, verification failure
6. Retrain dispensing personnel on material identification and verification

**Preventive Action Suggestions:**

* Implement barcode scanning for material dispensing (system verifies correct material)

* Segregate materials with similar names (different storage locations)

* Improve labeling: Large, prominent material names on containers

* Mandatory independent verification with documented checklist

* Consider "read-back" verification (verifier reads material name aloud before confirming)

* Store materials in alphabetical order with clear dividers

***

### DEV-030: Expired Material Used in Manufacturing

**Deviation ID:** DEV-030\
**Category:** Bill of Materials\
**Checklist Reference:** M-03

**Description:**\
Raw material, API, or excipient with expired retest or expiry date was dispensed and used in batch.

**Typical Severity:** CRITICAL

**Regulatory Reference:**\
21 CFR 211.84(a), 21 CFR 211.101, EU GMP Chapter 4.19

**Example Scenario:**\
API dispensed for batch: Lot API-2023-0456, Retest Date: 15-JAN-2024. Batch manufactured: 20-MAR-2024 (2 months expired). Discovery: During batch record review, QA notes retest date exceeded. API potency specification: 98.0-102.0%. Expired API potency: Unknown (not retested).

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Expired material not detected during dispensing

* **Investigation Questions:**

  * How expired? (Days, weeks, months - severity increases with duration)

  * Why wasn't expiry detected? (Verification process failure, label not checked, date obscured)

  * Was material in quarantine area or released area? (Storage control failure)

  * Product quality impact? (Stability data for API beyond retest date)

  * Can material be retested now? (May or may not help batch disposition)

**Recommended Corrective Action:**

1. **Immediate:** Quarantine batch
2. Attempt to retest expired API from same lot (if samples available) - not ideal but provides data
3. Review stability data: Is API stable beyond retest date per historical data?
4. Enhanced finished product testing: Assay, impurities, degradation products
5. Typically: Batch rejection due to use of unapproved material (expired = unapproved)
6. Investigate dispensing process: How did expired material reach released area?
7. Review all recent batches for other instances of expired material use

**Preventive Action Suggestions:**

* Implement FEFO (First Expiry, First Out) inventory system

* Barcode scanning at dispensing: System checks expiry/retest date automatically

* Physical segregation: Remove expired materials from dispensing area immediately

* Monthly audit of dispensing area for expired materials

* Visual alerts: Color-coded labels for materials approaching expiry (yellow = 60 days, red = 30 days)

* Automated inventory system with expiry tracking

***

### DEV-031: Material Quantity Deviation (Overage)

**Deviation ID:** DEV-031\
**Category:** Bill of Materials\
**Checklist Reference:** M-04

**Description:**\
Quantity of material dispensed and used exceeds MBR specification by more than allowed tolerance.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.101(c), ICH Q7 Section 6.32

**Example Scenario:**\
API required: 2,500.0 g ± 5% (2,375.0 - 2,625.0 g acceptable). Actual dispensed: 2,680.0 g (7.2% overage, exceeds tolerance). Reason: Operator misread decimal point, weighed 2680 g instead of 2500 g. Discovered during batch record review. Final product assay: 107.2% (specification 95-105%, fails high).

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Weighing error

* **Investigation Questions:**

  * How much overage? (Magnitude affects severity)

  * Why did overage occur? (Weighing error, calculation error, intentional overage)

  * Was overage within validated range? (Check validation data for formula flexibility)

  * Product quality impact? (Assay, dissolution, content uniformity critical tests)

  * Was independent verification performed? (Should have caught error)

**Recommended Corrective Action:**

1. Assess product quality: Assay, content uniformity, dissolution testing
2. If testing within specifications and overage within validated range: May be acceptable with justification
3. If testing fails (e.g., assay high): Batch rejection likely
4. Investigate dispensing: Verification process failure, training deficiency
5. Retrain on weighing procedures and verification requirements

**Preventive Action Suggestions:**

* Implement balance with target weight entry and tolerance range (alerts if outside)

* Barcode scanning: System displays target weight from BOM automatically

* Mandatory independent verification with calculation check

* Electronic dispensing systems with automated calculations

* Operator proficiency testing on weighing accuracy

***

### DEV-032: Material Grade Incorrect

**Deviation ID:** DEV-032\
**Category:** Bill of Materials\
**Checklist Reference:** M-05

**Description:**\
Material with incorrect grade (non-USP vs. USP, technical grade vs. pharmaceutical grade) was used instead of specified grade.

**Typical Severity:** MAJOR to CRITICAL depending on impact

**Regulatory Reference:**\
21 CFR 211.84(d)(2), EU GMP Chapter 4.12

**Example Scenario:**\
MBR specifies: Magnesium Stearate, USP grade. Actual material used: Magnesium Stearate, Technical Grade (non-compendial). Discovered during annual batch record audit. Technical grade may have higher heavy metal content and different particle size than USP grade.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Wrong grade material procured or used

* **Investigation Questions:**

  * How was wrong grade acquired? (Purchasing error, supplier error)

  * What are differences between grades? (Purity, particle size, impurity profile)

  * Quality impact? (Heavy metals, residual solvents, functional properties)

  * Was material tested per pharmaceutical grade specifications? (AR review)

  * How many batches affected? (Inventory review)

**Recommended Corrective Action:**

1. Identify all batches using wrong grade material
2. Perform risk assessment: Compare technical grade vs. USP specifications
3. Enhanced testing: Heavy metals, residual solvents, impurity profile on finished product
4. If testing passes and risk assessment acceptable: May release with justification (case-by-case)
5. If testing fails or risk unacceptable: Recall assessment for released batches
6. Quarantine remaining wrong-grade material
7. Investigate procurement: How was wrong grade ordered/received?

**Preventive Action Suggestions:**

* Revise material specifications to include explicit grade requirements

* Purchasing system: Flags non-USP materials for additional approval

* Receiving inspection: Verify grade on COA matches purchase order

* Barcode system: Links material to specifications, alerts if grade mismatch

* Annual audit of inventory for grade compliance

***

### DEV-033: Material from Unapproved Supplier Used

**Deviation ID:** DEV-033\
**Category:** Bill of Materials\
**Checklist Reference:** M-01

**Description:**\
Material from supplier not on Approved Supplier List was used in manufacturing without quality agreement or supplier qualification.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.84(d), ICH Q7 Section 5

**Example Scenario:**\
Regular supplier for Microcrystalline Cellulose was out of stock. Purchasing department procured from alternate supplier without notifying Quality. Material received with COA, appeared acceptable, was dispensed and used in 3 batches before discovery during audit. Alternate supplier not on Approved Supplier List, no quality agreement, no audit.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Unapproved supplier used

* **Investigation Questions:**

  * Why was unapproved supplier used? (Emergency, cost, availability)

  * Was Quality notified? (Communication breakdown)

  * Material quality: Does it meet specifications? (COA review, additional testing)

  * Supplier reliability: Known supplier in industry? (Risk assessment)

  * How many batches affected?

**Recommended Corrective Action:**

1. Identify all batches using material from unapproved supplier
2. Perform enhanced testing on affected batches: Full material characterization, impurity profile
3. Supplier assessment: Background check, facility audit if feasible, quality agreement
4. If material meets all specifications and testing passes: May be acceptable with justification
5. If concerns about material quality: Quarantine all affected batches pending resolution
6. Implement CAPA: Purchasing must involve Quality before sourcing new suppliers

**Preventive Action Suggestions:**

* Implement policy: All new suppliers require QA approval before purchase

* Purchasing system: Cannot create PO for material without approved supplier in system

* Supplier diversity program: Qualify backup suppliers proactively

* Monthly meetings: Purchasing and Quality review upcoming supply needs

* Escalation process for supply emergencies (quality involvement)

***

### DEV-034: Material Not Properly Stored (Temperature/Humidity Excursion)

**Deviation ID:** DEV-034\
**Category:** Bill of Materials\
**Checklist Reference:** Material Control (implicit)

**Description:**\
Material with specific storage requirements (refrigerated, controlled humidity, protect from light) was stored outside specification before use.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.142, 21 CFR 211.86

**Example Scenario:**\
API requires storage at 2-8°C (refrigerated). During facility power outage, refrigerator temperature rose to 22°C for 8 hours. API lot used in batch 2 days after temperature excursion. Manufacturer's stability data: API stable at room temperature for 24 hours only. Exceeded by 8 hours exposure → potential degradation.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Temperature excursion during storage

* **Investigation Questions:**

  * Duration and magnitude of excursion? (Critical for impact assessment)

  * Manufacturer stability data: Material stability outside storage conditions?

  * Impact on API potency or impurities? (May require retesting)

  * How many material lots affected? (Identify all material in same storage)

  * Why did excursion occur? (Power outage, equipment failure, door left open)

**Recommended Corrective Action:**

1. Identify all materials affected by storage excursion
2. Review manufacturer stability data for each material
3. Retest affected materials if stability data indicates risk (potency, impurities)
4. Quarantine all batches using affected materials pending testing results
5. If retesting passes: May release with justification
6. If retesting fails: Reject materials and batches using those materials
7. Investigate cause of excursion: Equipment maintenance, backup power, monitoring

**Preventive Action Suggestions:**

* Implement continuous temperature monitoring with alarms (remote notification)

* Backup power (UPS) for critical refrigeration units

* Redundant refrigeration (backup unit for critical materials)

* Temperature excursion response procedure (rapid material transfer)

* Annual review of material storage requirements vs. facility capabilities

***

## Category 5: Documentation Errors

### DEV-035: Use of White-Out or Correction Fluid

**Deviation ID:** DEV-035\
**Category:** Documentation & Signatures\
**Checklist Reference:** D-04

**Description:**\
White-out, correction fluid, or correction tape used to obliterate original entry in batch record, violating Good Documentation Practices and data integrity principles.

**Typical Severity:** CRITICAL

**Regulatory Reference:**\
21 CFR 211.194(a), FDA Data Integrity Guidance, EU GMP Chapter 4.9

**Example Scenario:**\
During batch record review, QA notices several weight entries that appear to have been corrected using white-out. Under magnification, original values are partially visible beneath correction fluid: Original "505 mg" corrected to "495 mg", original "510 mg" corrected to "500 mg". Pattern suggests weights were out of specification and changed to be within specification.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Operator used unauthorized correction method

* **Investigation Questions:**

  * Why was white-out used? (Intentional concealment, innocence/lack of training, habit from other work)

  * What were original values? (Attempt to read under UV light or magnification)

  * Were original values out of specification? (Critical - indicates potential data falsification)

  * Pattern of white-out use in other batches? (Systemic issue)

  * Who used white-out? (Identify operator, interview)

**Recommended Corrective Action:**

1. **Immediate:** Quarantine batch, full investigation required
2. Attempt to determine original values (forensic examination if necessary)
3. If original values were out-of-spec: Classify as data falsification, escalate to senior management and regulatory affairs
4. If original values were acceptable and white-out was innocent error: Still CRITICAL for GDP violation, retrain operator
5. **Batch disposition:** Extremely difficult to release batch with white-out - data integrity compromised
6. Investigation must determine: Isolated incident or pattern? Intentional falsification or innocent error?
7. Disciplinary action if intentional

**Preventive Action Suggestions:**

* Remove all white-out/correction fluid from manufacturing areas (not available)

* Training: Emphasize data integrity, proper correction procedures (single line-through, initial, date)

* Implement red pens for corrections (visual reminder not to obliterate)

* Electronic batch records: Corrections automatically traceable, cannot obliterate

* Culture of quality: Reporting errors is encouraged, concealing errors is never acceptable

* Routine GDP audits of batch records for unauthorized corrections

***

### DEV-036: Backdated Signature or Data Entry

**Deviation ID:** DEV-036\
**Category:** Documentation & Signatures\
**Checklist Reference:** D-04

**Description:**\
Signature or data entry added to batch record after the fact with backdated date, creating false record of when activity occurred.

**Typical Severity:** CRITICAL

**Regulatory Reference:**\
21 CFR 211.194, FDA Data Integrity Guidance

**Example Scenario:**\
Batch processed 10-MAR-2024. During batch record review 20-MAR-2024, QA notices several signatures dated 10-MAR-2024 but pen ink appears different than surrounding entries. Investigation reveals operator was on vacation 10-MAR-2024, returned 18-MAR-2024, and signed batch record with backdated signatures. Operations supervisor instructed operator to "complete the record" with dates matching original batch processing.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Signatures added retrospectively with false dates

* **Investigation Questions:**

  * Who performed backdating? (Operator, supervisor knowledge/instruction)

  * Why was backdating done? (Complete record, hide omission, supervisor instruction)

  * Were activities actually performed on stated dates? (Verify through other evidence)

  * Pattern of backdating? (Other batches, other operators)

  * Management awareness or instruction? (Culture issue)

**Recommended Corrective Action:**

1. **Immediate:** Quarantine batch, data integrity investigation
2. Determine actual facts: Were operations performed? By whom? When?
3. Classify as data falsification - extremely serious GMP violation
4. Escalate to senior management, regulatory affairs, legal
5. Batch disposition: Very difficult to release - data integrity compromised
6. Investigate all recent batches for similar issues
7. Disciplinary action for individuals involved (operator and supervisor)
8. Regulatory reporting may be required depending on jurisdiction

**Preventive Action Suggestions:**

* Training: Data integrity, consequences of falsification, patient safety impact

* Culture: Errors must be documented contemporaneously, never concealed

* Management training: Never instruct backdating

* Implement electronic batch records: Timestamps cannot be manipulated

* Routine audits for backdating indicators (ink color, handwriting, dates vs. other evidence)

* Whistleblower protection: Safe reporting of data integrity concerns

***

### DEV-037: Illegible Entry or Signature

**Deviation ID:** DEV-037\
**Category:** Documentation\
**Checklist Reference:** D-01

**Description:**\
Data entry, signature, or initials in batch record are illegible, preventing identification of individual or verification of data.

**Typical Severity:** MINOR to MAJOR depending on criticality of entry

**Regulatory Reference:**\
21 CFR 211.182, 21 CFR 211.194

**Example Scenario:**\
IPC test result entry: "Moisture content: \[illegible number] %, Spec: ≤3.0%, Operator: \[illegible signature], Date: 15-MAR-2024". Cannot determine if result was acceptable (1.8% vs. 8.1% cannot be distinguished).

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Poor handwriting, rushed documentation, faded ink

* **Investigation Questions:**

  * Can entry be deciphered? (Context clues, range of possible values)

  * Who likely performed task? (Schedule, area assignment)

  * If critical data illegible: Can value be retrieved elsewhere? (Electronic record, lab printout)

  * Pattern of illegibility from same operator?

**Recommended Corrective Action:**

1. Attempt to determine intended value: Interview operator, check electronic backup data, use context
2. If value retrievable and acceptable: Document in deviation report
3. If value not retrievable and critical to quality: May require batch rejection (missing critical data)
4. If non-critical information illegible: Document best determination in deviation report
5. Retrain on legible documentation practices

**Preventive Action Suggestions:**

* Implement printing requirement (no cursive) for critical data

* Electronic batch records: Typed entries, electronic signatures

* Forms with boxes for each digit (guides legible entry)

* Supervisor spot-checks: Verify legibility during shift

* Backup data capture: Automated printouts attached to batch record

***

## Category 6: Yield and Reconciliation Failures

### DEV-038: Low Yield Without Investigation

**Deviation ID:** DEV-038\
**Category:** Yield & Reconciliation\
**Checklist Reference:** Y-03, Y-08

**Description:**\
Batch yield falls below MBR-specified minimum range without documented investigation or justification.

**Typical Severity:** MAJOR (escalates to CRITICAL if severely low or unexplained losses)

**Regulatory Reference:**\
21 CFR 211.101(c), EU GMP Chapter 4.15

**Example Scenario:**\
Tablet compression yield specification: 97-102%. Actual yield: 89%. Batch record shows no investigation, no deviation report referenced, QA review signature present with "Release" disposition. Investigation after audit reveals 11% loss not explained - unknown if tablets were defective and discarded, lost during process, or miscalculation.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Low yield not investigated

* **Investigation Questions:**

  * Where did material loss occur? (Review each processing step yield)

  * Equipment residues? (Material left in equipment, dust collection)

  * Rejected material? (Defective tablets discarded - should be documented)

  * Sampling? (Material removed for testing)

  * Calculation error? (Verify arithmetic)

  * Theft or diversion? (Controlled substances especially)

**Recommended Corrective Action:**

1. Immediate investigation: Account for all material
2. Review equipment cleaning records: Any unusual residues?
3. Interview operators: Any material discarded, equipment issues?
4. Verify calculations: Input quantities, actual output, yield formula
5. If material loss unexplained: Serious concern - assess security, potential diversion
6. Batch disposition: Low yield alone may not prevent release if quality testing passes, but unexplained losses may require rejection
7. Implement CAPA: All out-of-range yields must be investigated before QA release

**Preventive Action Suggestions:**

* Mandatory yield investigation before QA review (hard stop in system)

* Implement real-time yield tracking (alerts when approaching low limit)

* Improve reconciliation procedures: Account for all material at each step

* Video monitoring in areas with valuable materials (controlled substances)

* Scrap/reject material bins with documentation requirements

* Monthly yield trending to detect patterns

***

### DEV-039: Label Reconciliation Discrepancy

**Deviation ID:** DEV-039\
**Category:** Yield & Reconciliation\
**Checklist Reference:** Y-05, Y-06

**Description:**\
Label reconciliation equation does not balance: Issued ≠ Used + Returned + Destroyed, indicating unaccounted labels.

**Typical Severity:** CRITICAL

**Regulatory Reference:**\
21 CFR 211.125(e), EU GMP Chapter 9.9

**Example Scenario:**\
Labels issued: 5,000. Labels used on batch: 4,750. Labels returned to stock: 200. Labels destroyed (witnessed): 45. Total accounted: 4,995. Discrepancy: 5 labels unaccounted for (missing). Investigation required to determine disposition of missing labels.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Labels missing

* **Investigation Questions:**

  * Positive or negative discrepancy? (Missing labels vs. extra labels)

  * Where could missing labels be? (Search packaging area, operators' pockets, trash)

  * When did discrepancy occur? (During labeling, during return, during destruction)

  * Security concern? (Potential for counterfeit product with unaccounted labels)

  * Pattern of label discrepancies?

**Recommended Corrective Action:**

1. **Immediate:** Quarantine batch, thorough investigation required
2. Physical search for missing labels (packaging room, trash, equipment)
3. Review video surveillance if available
4. Interview all personnel involved in labeling
5. If labels found: Destroy with witness, document
6. If labels not found: Security investigation, assess counterfeiting risk
7. **Batch disposition:** FDA considers label discrepancies very seriously - may prevent release even if labels found and destroyed
8. Regulatory notification may be required for missing labels (risk assessment)

**Preventive Action Suggestions:**

* Implement electronic label dispensing and tracking system

* Video monitoring of labeling operations

* Numbered labels with serial number tracking

* Smaller label issuance quantities (reduce exposure)

* Independent label count verification at issuance and return

* Daily label reconciliation (not wait until batch end)

***

### DEV-040: Packaging Material Quantity Discrepancy

**Deviation ID:** DEV-040\
**Category:** Yield & Reconciliation\
**Checklist Reference:** Y-07

**Description:**\
Packaging materials (bottles, cartons, inserts) reconciliation shows discrepancy exceeding acceptable variance.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.188(b)(7), EU GMP Chapter 4.15

**Example Scenario:**\
Cartons issued: 5,000. Cartons used: 4,755. Cartons returned: 150. Cartons destroyed: 0. Total accounted: 4,905. Discrepancy: 95 cartons (1.9%). Acceptable variance per SOP: ±1.0%. Exceeds tolerance by 0.9%.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** More material consumed than expected

* **Investigation Questions:**

  * Where are missing cartons? (Damaged and discarded, used on wrong batch, miscounted)

  * Quality of returned material? (Was damaged material properly documented and destroyed?)

  * Counting accuracy? (Large quantities difficult to count precisely)

  * Pattern of discrepancies for this material type?

**Recommended Corrective Action:**

1. Investigate cause: Search for materials, review reject documentation
2. If materials found: Document location and disposition
3. If damaged materials not documented: Improve reject/damage documentation process
4. Assess if discrepancy is within reasonable expectation given material type and quantities
5. Batch disposition: Packaging discrepancies typically do not prevent release if investigation adequate
6. Tighten controls if pattern of discrepancies

**Preventive Action Suggestions:**

* Improve damage/reject documentation (real-time capture)

* Use smaller issuance quantities (easier to count accurately)

* Weight-based reconciliation for small components (instead of counting)

* Automated counting systems for high-volume materials

* Two-person count verification for issuance and return

***

### DEV-041: Yield Calculation Error (Mathematical)

**Deviation ID:** DEV-041\
**Category:** Yield & Reconciliation\
**Checklist Reference:** Y-02

**Description:**\
Yield calculation contains mathematical error (wrong formula, incorrect arithmetic, wrong units).

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.188(b)(7)

**Example Scenario:**\
Theoretical yield: 50,000 tablets. Actual yield: 48,750 tablets. Recorded yield: 102.5%. Correct calculation: (48,750 / 50,000) × 100% = 97.5%. Error: Operator inverted fraction (50,000 / 48,750). Error makes low yield appear as high yield, masking potential problem.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Mathematical error in calculation

* **Investigation Questions:**

  * Type of error? (Formula, arithmetic, units, inverted fraction)

  * What is correct yield? (Recalculate)

  * Does correct yield fall within specification?

  * Why did error occur? (Calculation complexity, lack of verification, tool malfunction)

  * Was error detected during QA review? (If not, QA review process inadequate)

**Recommended Corrective Action:**

1. Recalculate yield correctly
2. Determine if correct yield is within specification
3. If correct yield acceptable: Document correction in deviation report
4. If correct yield unacceptable: Escalate - low yield investigation required
5. Retrain operator on yield calculation procedures
6. Implement verification requirement (second person or automated check)

**Preventive Action Suggestions:**

* Electronic batch records with automated yield calculation

* Built-in formula in forms (reduces manual calculation)

* Mandatory independent verification of calculated values

* Calculator or spreadsheet validation (verify formula correctness)

* Visual aids: Yield formula posted in work areas

***

### DEV-042: Units Produced vs. Batch Size Mismatch

**Deviation ID:** DEV-042\
**Category:** Yield & Reconciliation\
**Checklist Reference:** Y-01, Y-04

**Description:**\
Number of units produced significantly different from batch size specification without explanation or yield reconciliation.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.188(b)(3), (b)(7)

**Example Scenario:**\
Batch size per MBR: 10,000 tablets. Actual units produced: 11,200 tablets (12% excess). No explanation documented. Possible causes: Overage in formulation (too much material), calculation error, multiple batches combined.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Production exceeded batch size

* **Investigation Questions:**

  * Where did extra material come from? (Review material quantities - overage?)

  * Was formula scaled incorrectly? (Check calculations)

  * Were multiple batches combined? (Serious GMP violation if undocumented)

  * Equipment residues from previous batch incorporated? (Cross-contamination)

  * Counting error?

**Recommended Corrective Action:**

1. Investigate material quantities: Were material inputs correct?
2. Review each process step: Any additional material added?
3. If material overage identified: Assess quality impact (overdose risk)
4. If batches combined: Serious violation - reject combined batch, investigate why combining occurred
5. If counting error: Verify actual quantity
6. Batch disposition based on investigation findings

**Preventive Action Suggestions:**

* Automated tablet counting systems (reduces counting errors)

* Material dispensing verification: Catch overages before processing

* Clear policy: Never combine batches without approved procedure

* Real-time yield monitoring: Alerts when production exceeds expected quantity

* Process capability assessment: Understand typical yield variations

***

## Category 7: QC/Lab Deviations

### DEV-043: Out-of-Specification Result Without Investigation

**Deviation ID:** DEV-043\
**Category:** QC/Lab Results\
**Checklist Reference:** Q-03

**Description:**\
Laboratory test result falls outside acceptance criteria but no OOS investigation was performed per FDA OOS Guidance and company procedure.

**Typical Severity:** CRITICAL

**Regulatory Reference:**\
21 CFR 211.192, FDA Guidance "Investigating Out-of-Specification Test Results" (2006)

**Example Scenario:**\
Dissolution test result: 75% released at 30 minutes (specification ≥80%). Lab performed retest on same sample: 82% (passes). Original failing result was disregarded without investigation. Batch released based on retest only. No documented investigation of initial failure.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** OOS result not investigated

* **Investigation Questions:**

  * Why was result OOS? (Laboratory error vs. true product failure)

  * Was OOS procedure followed? (Phase I laboratory investigation, Phase II manufacturing investigation)

  * Why was retest performed without investigation? (Invalid retest)

  * Were there multiple OOS results dismissed? (Pattern of invalidation)

  * Culture issue: Is there pressure to pass tests?

**Recommended Corrective Action:**

1. **Immediate:** Perform full OOS investigation per FDA Guidance
2. Phase I (Laboratory Investigation): Equipment malfunction, analyst error, calculation error, contamination
3. If assignable laboratory cause found: Original result invalid, retest may be appropriate
4. If no assignable cause found (laboratory work correct): Phase II (Manufacturing Investigation) required - product likely failed
5. Batch disposition based on investigation conclusion
6. Retrain laboratory on OOS procedures: Cannot retest without investigation
7. Address culture: All results must be reported and investigated

**Preventive Action Suggestions:**

* Implement OOS workflow in LIMS: Cannot close OOS without investigation documented

* QA oversight of all OOS investigations

* Training: FDA OOS Guidance requirements

* Monthly metrics: OOS rate, investigation quality, invalid retest rate

* Culture of data integrity: Report all results, investigate failures

***

### DEV-044: Test Performed Using Incorrect Method or Specification

**Deviation ID:** DEV-044\
**Category:** QC/Lab Results\
**Checklist Reference:** Q-01

**Description:**\
QC test performed using wrong method version, wrong product specification, or non-validated method.

**Typical Severity:** MAJOR to CRITICAL depending on impact

**Regulatory Reference:**\
21 CFR 211.165(e), 21 CFR 211.194(a)(2)

**Example Scenario:**\
Assay test performed using analytical method version 3.0. Correct method per product registration: version 4.0 (more selective HPLC gradient, detects additional impurity). Test result per v3.0: Passes. Unknown if batch would pass using correct method v4.0.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Wrong method used

* **Investigation Questions:**

  * What are differences between methods? (Significant or minor)

  * Would result be different using correct method? (Critical question)

  * Why was wrong method used? (Analyst error, documentation unclear, method not updated)

  * Regulatory impact? (Method in registration filing)

  * Batch already released to market?

**Recommended Corrective Action:**

1. Assess differences between methods used vs. correct method
2. If differences are significant: Retest using correct method (critical)
3. If retest passes: Acceptable with documentation
4. If retest fails: Batch rejection, recall assessment if already distributed
5. If retest not possible (sample exhausted): Risk assessment, may require rejection
6. Investigate laboratory: Procedure for method version control
7. Update all testing procedures to reference correct method versions

**Preventive Action Suggestions:**

* LIMS method version control (links product to correct method version automatically)

* Annual review: Verify all test methods current in LIMS

* Analyst training on method selection verification

* Supervisory review of test method before analysis begins

* Obsolete method deletion from LIMS (prevents selection)

***

### DEV-045: Stability Samples Not Pulled per Protocol

**Deviation ID:** DEV-045\
**Category:** QC/Lab Results\
**Checklist Reference:** Q-07

**Description:**\
Stability samples were not pulled, insufficient quantity pulled, or pulled from non-representative location per stability protocol requirements.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.166, ICH Q1A

**Example Scenario:**\
Stability protocol requires: "Pull samples from beginning, middle, and end of batch, total 200 units for 36-month study (3 conditions × 12 time points)." Actual: 120 units pulled, all from middle of batch. Insufficient for full study, and not representative of batch.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Stability sampling not performed per protocol

* **Investigation Questions:**

  * Why insufficient samples? (Not enough product, sampling overlooked, misunderstood protocol)

  * Can additional samples be pulled? (Depends on batch disposition and remaining product)

  * Impact on stability program? (May not complete full study)

  * Regulatory commitment? (Is full study required for registration or post-approval commitment)

**Recommended Corrective Action:**

1. Determine if additional samples can be pulled from batch (if not yet released/distributed)
2. If yes: Pull additional samples immediately
3. If no: Assess options: Modified stability protocol (fewer replicates), additional batch to stability, extended study on next batch
4. Regulatory assessment: Is full study regulatory commitment? Notify regulatory affairs.
5. Update sampling procedure: Clarify requirements, add checklist

**Preventive Action Suggestions:**

* Implement stability sampling checklist (quantity, locations verified)

* QA review of stability samples before batch release

* Physical separation of stability samples at packaging (cannot be accidentally shipped)

* Electronic system: Alerts if stability samples not recorded

* Packaging supervisor verification: Stability samples pulled before final disposition

***

### DEV-046: Reference Standard Expired or Not Documented

**Deviation ID:** DEV-046\
**Category:** QC/Lab Results\
**Checklist Reference:** Q-06

**Description:**\
Reference standard used for testing was expired or reference standard information (lot, expiry, source) not documented in test records.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.194(a)(2), ICH Q2(R2)

**Example Scenario:**\
Assay test performed using reference standard lot RS-2023-045. Expiry date on reference standard vial: 30-JAN-2024. Test performed: 15-MAR-2024 (45 days expired). Test result: 99.2% (within 95-105% specification). Validity of result uncertain due to expired reference standard (possible degradation).

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Expired reference standard used

* **Investigation Questions:**

  * How expired? (Days, weeks, months)

  * Reference standard stability data: Stable beyond expiry date? (Manufacturer data)

  * Impact on test result: Would fresh reference standard give different result?

  * Why wasn't expiration detected? (Verification process failure)

  * Pattern of expired reference standards?

**Recommended Corrective Action:**

1. Assess reference standard stability: Is material known to be stable beyond expiry?
2. If possible, verify potency of expired reference standard against fresh lot
3. Retest samples using current reference standard (if possible)
4. If retest passes: Acceptable with documentation
5. If retest not possible or fails: May require batch rejection
6. Implement reference standard verification before use

**Preventive Action Suggestions:**

* Reference standard inventory system with expiry tracking (alerts 60 days before expiry)

* Analyst verification: Check reference standard expiry before use (mandatory checklist)

* Remove expired reference standards from laboratory immediately

* Color-coded labels: Red = expired (visual alert)

* LIMS integration: Reference standard lot and expiry recorded automatically

***

### DEV-047: Laboratory Instrumentation Calibration Expired

**Deviation ID:** DEV-047\
**Category:** QC/Lab Results\
**Checklist Reference:** Analytical Equipment (similar to E-02)

**Description:**\
Analytical instrument (HPLC, balance, pH meter, spectrophotometer) was used with expired calibration or qualification.

**Typical Severity:** CRITICAL

**Regulatory Reference:**\
21 CFR 211.160(b)(4), 21 CFR 211.68

**Example Scenario:**\
HPLC instrument HPLC-05 used for assay testing. Last qualification (OQ/PQ): 15-MAR-2023. Requalification due: 15-MAR-2024 (annual). Batch tested: 10-APR-2024 (26 days overdue). System suitability passed on day of use, but formal qualification expired.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Instrument qualification expired

* **Investigation Questions:**

  * How overdue? (Severity increases with duration)

  * System suitability results: Did system pass SS checks? (Evidence of performance)

  * Maintenance records: Any performance issues?

  * Can retrospective verification be performed? (Test reference standards)

  * All batches tested during expired period: Identify scope

**Recommended Corrective Action:**

1. Immediately requalify instrument
2. If requalification passes: Data likely reliable, document justification
3. If requalification fails: All results from expired period are suspect - may require retesting or batch rejection
4. Retrospective testing: Test reference standards to verify performance during expired period
5. Review all batches tested during expired period
6. Implement instrument qualification tracking system

**Preventive Action Suggestions:**

* Automated alerts: 90 days, 60 days, 30 days before qualification due

* Instrument quarantine: Remove from service when qualification due (physical lock-out)

* LIMS integration: Cannot run test on instrument with expired qualification

* Monthly audit of instrument qualification status

* Increase qualification frequency if instrument is heavily used or critical

***

### DEV-048: Missing Sample Identification or Chain of Custody Break

**Deviation ID:** DEV-048\
**Category:** QC/Lab Results\
**Checklist Reference:** Q-05 (traceability)

**Description:**\
Sample received in laboratory without adequate identification (batch number, sample ID, date), or chain of custody documentation incomplete, creating uncertainty about sample identity.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.160, 21 CFR 211.194(a)(7)

**Example Scenario:**\
Laboratory received 3 vials labeled "Blend sample" with no batch number, date, or sample ID. Lab contacted manufacturing - identified as blend uniformity samples from Batch 2024-045. Sample log shows samples pulled on 10-MAR-2024 but received in lab 15-MAR-2024 with no documentation of storage conditions during 5-day interval.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** Sample not properly labeled or documented

* **Investigation Questions:**

  * Can sample identity be confirmed? (Context, other evidence)

  * Chain of custody: Where was sample between collection and testing? (Storage conditions critical for stability)

  * Why wasn't sample properly labeled? (Training, time pressure, informal process)

  * Risk of sample mix-up?

**Recommended Corrective Action:**

1. Attempt to confirm sample identity through investigation (timing, personnel, other records)
2. If identity confirmed with high confidence and storage conditions acceptable: May test with documentation
3. If identity uncertain or storage conditions unknown: Cannot test - requires re-sampling
4. Implement sample labeling procedure: Batch number, sample ID, date, sampler initials minimum
5. Retrain sampling personnel on sample identification requirements

**Preventive Action Suggestions:**

* Pre-printed sample labels with batch number, sample ID, barcodes

* Sample labeling checklist (verified before leaving area)

* Chain of custody forms (track sample movement and storage)

* Laboratory sample acceptance criteria (reject improperly labeled samples immediately)

* Electronic sample tracking system

***

## Category 8: Environmental Excursions

### DEV-049: Cleanroom Differential Pressure Loss

**Deviation ID:** DEV-049\
**Category:** Environmental Monitoring\
**Checklist Reference:** V-03

**Description:**\
Differential pressure between cleanroom grades fell below specification or reversed (higher grade lower pressure than lower grade), risking contamination.

**Typical Severity:** MAJOR (non-sterile), CRITICAL (sterile products)

**Regulatory Reference:**\
EU GMP Annex 1, ISO 14644

**Example Scenario:**\
Sterile filling room (Grade A): Differential pressure vs. adjacent Grade B room should be ≥10 Pa. Pressure monitoring chart shows pressure dropped to 3 Pa for 25-minute period during filling operation. Cause: HVAC damper malfunction. Product exposure during low differential pressure period.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** HVAC system malfunction

* **Investigation Questions:**

  * Duration of excursion? (Exposure time critical)

  * Product type? (Sterile = CRITICAL concern)

  * Root cause? (HVAC failure, door open, system imbalance)

  * Contamination monitoring: Viable and non-viable particle results during period?

  * Units affected? (Calculate number of units filled during excursion)

**Recommended Corrective Action:**

1. **Immediate:** Stop operations if ongoing, segregate affected units
2. Review environmental monitoring data: Particle counts, microbial monitoring during excursion
3. If sterile product: Consider re-sterilization if possible, or enhanced sterility testing
4. Risk assessment: Contamination likelihood based on differential pressure level, duration, product type
5. Batch disposition: May require rejection for sterile products if contamination risk unacceptable
6. HVAC investigation and repair before resuming operations

**Preventive Action Suggestions:**

* Real-time differential pressure monitoring with immediate alarms

* HVAC preventive maintenance program enhancement

* Redundant HVAC systems for critical areas

* Automated process shutdown if pressure specification lost

* Continuous monitoring vs. periodic (for critical operations)

***

### DEV-050: Uncontrolled Temperature or Humidity During Manufacturing

**Deviation ID:** DEV-050\
**Category:** Environmental Monitoring\
**Checklist Reference:** V-01, V-02, V-04

**Description:**\
Manufacturing area temperature or humidity exceeded specification for extended period, potentially affecting moisture-sensitive or temperature-sensitive product.

**Typical Severity:** MAJOR

**Regulatory Reference:**\
21 CFR 211.42, 21 CFR 211.113

**Example Scenario:**\
Solid dosage manufacturing area specification: Temperature 20-25°C, RH 30-50%. During summer day, HVAC failure caused temperature rise to 30°C and RH 65% for 4-hour period. Hygroscopic product (moisture-sensitive) being processed during excursion.

**Root Cause Analysis Guidance:**

* **Immediate Cause:** HVAC system failure

* **Investigation Questions:**

  * Duration and magnitude of excursion?

  * Product sensitivity: How moisture/temperature sensitive?

  * Processing stage: Exposed materials or final product?

  * Product testing results: Moisture content, dissolution, stability

  * Root cause: HVAC capacity, maintenance, external factors (weather)

**Recommended Corrective Action:**

1. Document excursion: Duration, magnitude, product exposure
2. Product risk assessment: Moisture uptake potential, temperature degradation potential
3. Enhanced testing: Moisture content, dissolution, impurities (if temperature-sensitive)
4. If testing acceptable and risk assessment supports: Release with justification
5. If testing fails or risk high: Quarantine or rejection
6. HVAC investigation and upgrade/repair

**Preventive Action Suggestions:**

* HVAC capacity assessment (adequate for peak load)

* Backup cooling/dehumidification systems for critical areas

* Real-time environmental monitoring with immediate alerts

* Process hold procedures for environmental excursions (stop processing until conditions restored)

* Schedule preventive maintenance before peak seasons (summer, winter)

***

## Conclusion and Usage Notes

This catalog represents common deviations encountered across pharmaceutical manufacturing operations. The following principles apply when using this catalog:

### Classification Flexibility

Severity classifications listed are **typical** cases. Actual classification must consider:

* Specific product characteristics

* Actual impact evidence (testing results)

* Timing of detection

* Regulatory context

* Pattern vs. isolated incident

### Investigation Depth

All CRITICAL and MAJOR deviations require formal investigations. Investigation depth should match severity:

* **CRITICAL:** Full RCA with ICH Q9 tools, comprehensive testing, regulatory assessment

* **MAJOR:** Root cause or most probable cause, targeted testing, impact assessment

* **MINOR:** Immediate cause identification, verify no quality impact

### Continuous Improvement

Deviation patterns indicate opportunities for process improvement:

* Recurring deviations (3+ in 12 months) → Systemic CAPA required

* Multiple similar deviations across batches → Process design review

* Trending by category identifies focus areas for improvement

### Regulatory Alignment

This catalog aligns with:

* FDA 21 CFR Part 211

* EU GMP Guidelines

* ICH Q7, Q8, Q9, Q10

* Industry best practices

Organizations should adapt classifications and procedures to their specific quality system and regulatory requirements.

***

## Appendix: Quick Reference Table

| Category                   | Most Common Deviations                           | Typical Severity Range |
| -------------------------- | ------------------------------------------------ | ---------------------- |
| **Missing Information**    | Signatures, data fields, IPC results             | MAJOR - CRITICAL       |
| **Process Parameters**     | Temperature, time, speed, pressure               | MAJOR - CRITICAL       |
| **Equipment**              | Calibration expired, wrong equipment, cleaning   | MAJOR - CRITICAL       |
| **Materials**              | Wrong material, expired, incorrect quantity      | MAJOR - CRITICAL       |
| **Documentation**          | White-out, backdating, illegible                 | MINOR - CRITICAL       |
| **Yield & Reconciliation** | Low yield, label discrepancy, calculation errors | MAJOR - CRITICAL       |
| **QC/Lab**                 | OOS without investigation, wrong method          | MAJOR - CRITICAL       |
| **Environmental**          | Temperature/humidity/pressure excursions         | MAJOR - CRITICAL       |

***

## Document Control

**Revision History:**

| Version | Date | Changes                                                             | Author        |
| ------- | ---- | ------------------------------------------------------------------- | ------------- |
| 1.0     | 2022 | Initial catalog (30 deviations)                                     | QA Operations |
| 1.5     | 2023 | Expanded to 45 deviations, added RCA guidance                       | QA Training   |
| 2.0     | 2024 | Comprehensive update to 60+ deviations, enhanced corrective actions | QA Director   |

**Review Cycle:** Annual

**Next Review Due:** 2025

***

***

# Part 7: Yield and Reconciliation

## Document Purpose and Scope

This knowledge base document provides comprehensive guidance on yield verification and material/label reconciliation in pharmaceutical batch manufacturing. It is designed for use by Quality Assurance professionals, manufacturing personnel, and automated batch record review systems.

**Regulatory Framework:**

* 21 CFR 211.188: Batch production and control records shall include complete information relating to the production and control of each batch

* 21 CFR 211.192: All drug product production and control records, including those for packaging and labeling, shall be reviewed and approved by the quality control unit

* 21 CFR 211.130: Strict control of labeling issued for use in drug product labeling operations

* EU GMP Chapter 6: Quality Control, Part II Documentation

***

## 1. Yield Calculation Fundamentals

### 1.1 Core Yield Formula

**Basic Formula:**

```
Yield (%) = (Actual Output / Theoretical Output) × 100
```

**Where:**

* **Actual Output** = The quantity of material or product actually obtained at a given stage

* **Theoretical Output** = The quantity of material or product expected based on:

  * Input quantities

  * Product formula

  * Process parameters

  * Historical performance data

### 1.2 Types of Yield

#### Stage Yield

* Yield calculated at individual process steps

* Example: Granulation stage yield, compression stage yield

* Monitors efficiency of specific operations

* Most sensitive indicator of process problems

#### Cumulative Yield

* Product of all stage yields up to a given point

* Formula: Cumulative Yield = Stage 1 Yield × Stage 2 Yield × Stage 3 Yield × ... × Stage N Yield

* Example: If dispensing = 99.5%, granulation = 98.0%, blending = 99.0%, then cumulative at blending = 96.5%

* Useful for tracking loss accumulation through the process

#### Overall Yield

* Final product quantity relative to initial raw materials

* Most commonly cited in batch documentation

* Regulatory focus for batch disposition decisions

* Must meet pre-defined acceptance criteria

### 1.3 Theoretical Yield Definition and Calculation

**Theoretical yield must account for:**

1. **Formula quantity**: Starting point from master formula
2. **Batch size multiplier**: Scale factor if not standard batch
3. **Overages**: Planned excess to compensate for expected losses
4. **Process-specific adjustments**:

   * Moisture content changes (drying operations)

   * Density changes (granulation)

   * Coating weight gain

**Example Calculation:**

For a tablet batch with:

* Target: 100,000 tablets

* Tablet weight: 500 mg each

* Compression overage: 2%

* Blend overage: 3%

```
Theoretical blend output = 100,000 tablets × 500 mg × 1.02 × 1.03
                        = 52,530,000 mg
                        = 52.53 kg
```

### 1.4 Actual Yield Measurement Points

**Critical considerations:**

1. **Timing**: Measure when material is in stable state

   * After equilibration for hygroscopic materials

   * After cooling for heat-processed materials

   * After dehumidification for coated products

2. **Measurement method**:

   * Calibrated scales (verified within calibration date)

   * Count by weight with verified piece weight

   * Direct count for small batches or high-value products

3. **Sampling**: Account for samples removed

   * In-process samples

   * Retain samples

   * Stability samples

   * Samples must be added back to actual output for yield calculation

4. **Waste and rework**: Document separately but include in reconciliation

### 1.5 Rounding Rules and Precision

**Standard pharmaceutical industry practice:**

* **Yield percentages**: Report to one decimal place (e.g., 97.5%)

* **Intermediate calculations**: Maintain at least two additional significant figures

* **Weights**: Record to the precision of the balance used (typically 0.1g or 0.01g)

* **Rounding method**: Round 5 up (standard rounding)

**Example:**

```
Actual output: 48,247 g
Theoretical output: 50,000 g
Calculation: 48,247 / 50,000 = 0.96494
Intermediate: 96.494%
Reported yield: 96.5%
```

### 1.6 Unit Conversion Checks

Common unit conversions requiring verification:

| From            | To          | Conversion Factor               | Common Errors     |
| --------------- | ----------- | ------------------------------- | ----------------- |
| kg              | g           | × 1,000                         | Forgetting factor |
| g               | mg          | × 1,000                         | Double conversion |
| lb              | kg          | × 0.4536                        | Using 0.454       |
| oz              | g           | × 28.35                         | Using 30          |
| tablets (count) | kg (weight) | Count × unit weight ÷ 1,000,000 | Decimal placement |

**Review checklist:**

* [ ] Units clearly labeled on all values

* [ ] Conversion factors documented

* [ ] Calculation shows intermediate steps

* [ ] Final units match expected result units

***

## 2. Stage-by-Stage Yield Specifications

### 2.1 Solid Oral Dosage Form (Tablet) Manufacturing

The following table provides typical yield ranges for a standard tablet manufacturing process. These are based on industry best practices and should be adjusted based on product-specific validation data.

| Stage                    | Typical Yield Range | Investigation Trigger | Reject Limit | Regulatory Basis |
| ------------------------ | ------------------- | --------------------- | ------------ | ---------------- |
| **Dispensing**           | ≥ 99.5%             | < 99.0%               | < 98.5%      | 21 CFR 211.188   |
| **Sieving/Screening**    | ≥ 99.0%             | < 98.0%               | < 97.0%      | 21 CFR 211.188   |
| **Granulation (Wet)**    | ≥ 98.0%             | < 96.0%               | < 95.0%      | 21 CFR 211.188   |
| **Granulation (Dry)**    | ≥ 97.0%             | < 95.0%               | < 94.0%      | 21 CFR 211.188   |
| **Drying**               | ≥ 98.0%             | < 96.0%               | < 95.0%      | 21 CFR 211.188   |
| **Milling**              | ≥ 98.0%             | < 96.0%               | < 95.0%      | 21 CFR 211.188   |
| **Blending**             | ≥ 99.0%             | < 98.0%               | < 97.5%      | 21 CFR 211.188   |
| **Compression**          | ≥ 96.5%             | < 95.0%               | < 94.0%      | 21 CFR 211.188   |
| **Coating (Film)**       | ≥ 99.0%             | < 98.0%               | < 97.0%      | 21 CFR 211.188   |
| **Coating (Sugar)**      | ≥ 97.0%             | < 95.0%               | < 94.0%      | 21 CFR 211.188   |
| **Packaging (Bottles)**  | ≥ 96.0%             | < 95.0%               | < 94.0%      | 21 CFR 211.188   |
| **Packaging (Blisters)** | ≥ 98.0%             | < 97.0%               | < 96.0%      | 21 CFR 211.188   |
| **Overall Yield**        | ≥ 93.0%             | < 90.0%               | < 88.0%      | 21 CFR 211.192   |

### 2.2 Capsule Manufacturing

| Stage             | Typical Yield Range | Investigation Trigger | Reject Limit |
| ----------------- | ------------------- | --------------------- | ------------ |
| **Dispensing**    | ≥ 99.5%             | < 99.0%               | < 98.5%      |
| **Blending**      | ≥ 99.0%             | < 98.0%               | < 97.5%      |
| **Encapsulation** | ≥ 97.0%             | < 95.0%               | < 94.0%      |
| **Polishing**     | ≥ 99.5%             | < 99.0%               | < 98.5%      |
| **Packaging**     | ≥ 98.0%             | < 97.0%               | < 96.0%      |
| **Overall Yield** | ≥ 94.0%             | < 92.0%               | < 90.0%      |

### 2.3 Liquid/Suspension Manufacturing

| Stage                   | Typical Yield Range | Investigation Trigger | Reject Limit |
| ----------------------- | ------------------- | --------------------- | ------------ |
| **Dispensing (Liquid)** | ≥ 99.0%             | < 98.0%               | < 97.5%      |
| **Compounding**         | ≥ 98.5%             | < 97.0%               | < 96.0%      |
| **Filtration**          | ≥ 98.0%             | < 96.0%               | < 95.0%      |
| **Filling**             | ≥ 97.0%             | < 95.0%               | < 94.0%      |
| **Overall Yield**       | ≥ 93.0%             | < 91.0%               | < 89.0%      |

### 2.4 Stage-Specific Yield Considerations

#### Dispensing

* Should have minimal loss (highest yield)

* Losses primarily from: equipment hold-up, transfer losses, dust

* Investigation triggers: incorrect calculation, spillage, equipment malfunction

#### Granulation

* Wet granulation: losses from equipment adhesion, over-wetting

* Dry granulation: losses from fines rejection, equipment hold-up

* Higher acceptable loss due to process nature

#### Drying

* Must account for moisture loss (not a true material loss)

* Calculation should use dry weight basis

* Low yield may indicate: over-drying, material degradation, loss during transfer

#### Compression

* Significant losses from: tablet rejects, weight adjustments, start-up waste

* Investigation of low yield focuses on: press setup, tooling issues, granulation quality

#### Coating

* Losses from: attrition, spray loss, pan buildup

* Film coating typically higher yield than sugar coating

* Investigation: spray parameters, batch loading, coating solution concentration

#### Packaging

* Losses from: line rejects, equipment jams, startup waste

* Blister packaging typically higher yield than bottle filling

* Serialization/aggregation verification adds complexity

***

## 3. Yield Verification Methods in Batch Record Review

### 3.1 Systematic Review Approach

**Step-by-step verification process:**

1. **Identify theoretical yield source**

   * Check master batch record/formula

   * Verify batch size (standard vs. scaled)

   * Confirm overages applied correctly

2. **Verify actual yield measurement**

   * Check balance calibration status

   * Verify operator signatures

   * Confirm appropriate measurement timing

3. **Recalculate yield independently**

   * Use documented actual and theoretical values

   * Apply correct formula

   * Compare to recorded yield

4. **Assess acceptance criteria**

   * Compare to stage-specific limits

   * Check for investigation triggers

   * Verify appropriate disposition

5. **Cross-reference related records**

   * Material reconciliation

   * Waste documentation

   * Sample records

### 3.2 Common Calculation Errors to Check For

#### Error Type 1: Wrong Theoretical Yield Base

**Problem**: Using incorrect starting quantity
**Example**:

* Theoretical should be based on previous stage output

* Reviewer finds it based on original formula quantity

* Results in artificially high yield
  **Detection**: Compare theoretical to documented previous stage actual output

#### Error Type 2: Missing Sample Adjustments

**Problem**: Not adding back samples to actual output
**Example**:

* Actual output: 48.5 kg

* QC sample: 0.5 kg

* Recorded yield based on 48.5 kg (should be 49.0 kg)
  **Detection**: Check sample documentation, verify sample quantities added to actual

#### Error Type 3: Moisture Content Errors

**Problem**: Not accounting for moisture changes in drying operations
**Example**:

* Pre-drying weight: 60.0 kg (with 10% moisture)

* Post-drying weight: 52.0 kg (with 2% moisture)

* Incorrect yield: 52.0/60.0 = 86.7% (APPEARS LOW)

* Correct calculation: Compare dry basis

  * Pre-drying dry weight: 60.0 × 0.90 = 54.0 kg

  * Post-drying dry weight: 52.0 × 0.98 = 50.96 kg

  * Correct yield: 50.96/54.0 = 94.4% (ACCEPTABLE)
    **Detection**: Check for LOD/moisture testing data, verify dry weight basis used

#### Error Type 4: Unit Conversion Mistakes

**Problem**: Incorrect conversion factors or missing conversions
**Example**:

* Theoretical: 50 kg

* Actual: 49,500 g

* Incorrect: 49,500/50 = 990% (clearly wrong)

* Correct: 49.5 kg / 50 kg = 99.0%
  **Detection**: Verify units match, check conversion factors

#### Error Type 5: Cumulative vs. Stage Yield Confusion

**Problem**: Comparing cumulative yield to stage limits
**Example**:

* Cumulative yield at packaging: 91.5%

* Stage specification for packaging: ≥ 96.0%

* Should compare packaging stage yield only (output/input for packaging)
  **Detection**: Verify which yield type is being calculated and appropriate comparison

### 3.3 Automated Review Flags

**Automated batch record review systems should flag:**

| Flag Type                 | Condition                                              | Severity |
| ------------------------- | ------------------------------------------------------ | -------- |
| **Calculation Error**     | Recalculated yield ≠ recorded yield (>0.2% difference) | HIGH     |
| **Below Investigation**   | Yield < investigation trigger                          | MEDIUM   |
| **Below Specification**   | Yield < acceptance limit                               | CRITICAL |
| **Missing Yield**         | Yield not calculated/recorded for required stage       | HIGH     |
| **Unit Mismatch**         | Theoretical and actual in different units              | MEDIUM   |
| **Unrealistic Yield**     | Yield > 100.5% or < 50%                                | HIGH     |
| **Missing Investigation** | Low yield without investigation documentation          | CRITICAL |
| **Sample Not Reconciled** | Sample removed but not added to yield calculation      | MEDIUM   |

### 3.4 Weight vs. Count vs. Volume Considerations

#### Weight-Based Yield (Most Common)

* **Advantages**: Direct measurement, high precision, suitable for bulk stages

* **Considerations**: Must account for moisture, temperature effects

* **Best for**: Dispensing, granulation, drying, milling, blending

#### Count-Based Yield

* **Advantages**: Exact for discrete units, no estimation

* **Considerations**: Time-consuming for large batches, counting errors possible

* **Best for**: Compression (tablets), encapsulation (capsules), ampoules

* **Common method**: Count by weight using verified unit weight

**Count by Weight Example:**

```
Total weight: 24,850 g
Unit weight: 0.500 g (verified with 20-tablet sample)
Count: 24,850 / 0.500 = 49,700 tablets
Theoretical: 50,000 tablets
Yield: 49,700 / 50,000 = 99.4%
```

#### Volume-Based Yield

* **Advantages**: Natural for liquids, simple measurement

* **Considerations**: Temperature compensation, foam/air bubbles, measurement precision

* **Best for**: Liquid compounding, filling operations

* **Requirement**: Calibrated volumetric equipment

***

## 4. Material Reconciliation

### 4.1 Material Reconciliation Principle

**Fundamental Equation:**

```
Input Materials = Output Product + Waste + Samples + Retained Material + Process Losses
```

**Acceptable balance**: ±2% of theoretical yield (tighter limits preferred)

### 4.2 Input Material Tracking

**Required documentation:**

* Dispensed quantities (from dispensing record)

* Lot numbers of all materials

* Material transfers between stages

* Rework or returned material additions

**Verification checklist:**

* [ ] All formula materials dispensed and recorded

* [ ] Quantities match formula (considering batch size)

* [ ] Overages appropriately applied

* [ ] Material lot numbers documented and verified

* [ ] Transfer weights documented for each stage

### 4.3 Output Product Tracking

**Components of output:**

1. **Finished product**: Final container count × fill weight
2. **Bulk product retained**: For stability, reference, or future packaging
3. **In-process product**: Material held at intermediate stages

**Documentation requirements:**

* Container count with unit weight or volume

* Total output weight or count

* Storage location of retained material

* Intended use of retained material

### 4.4 Waste Documentation

**Categories of waste:**

| Waste Type               | Examples                                      | Documentation Required              |
| ------------------------ | --------------------------------------------- | ----------------------------------- |
| **Startup waste**        | Compression setup tablets, filling line purge | Weight or count, destruction record |
| **Equipment cleanout**   | Material adhering to equipment                | Estimated or measured weight        |
| **Out-of-spec material** | Failed IPC, broken tablets, reject capsules   | Weight or count, disposition record |
| **Process residue**      | Dust collection, filter cake                  | Weight, location                    |
| **Environmental loss**   | Evaporation, dust emission                    | Estimated (if significant)          |

**Waste reconciliation:**

* Should be reasonable based on process type

* Excessive waste triggers investigation

* Must be documented with disposition

* Destruction records required for API-containing waste

### 4.5 Sample Accountability

**Sample types to reconcile:**

1. **In-Process Control (IPC) samples**

   * Appearance, weight, hardness, disintegration

   * Typically small quantities (50-100 units or 50-200g)

2. **Release testing samples**

   * Identity, assay, dissolution, microbial

   * Larger quantities (500-2000 units or 500-1000g)

3. **Retain samples**

   * As per 21 CFR 211.170

   * Twice testing quantity or per SOP

   * Must be from finished batch

4. **Stability samples**

   * As per approved stability protocol

   * Typically 1-3× annual testing quantity

**Sample reconciliation verification:**

* [ ] All sample types documented

* [ ] Quantities reasonable for test methods

* [ ] Sample removal recorded at appropriate stage

* [ ] Samples added back to actual output in yield calculations

* [ ] Retain sample quantity meets regulatory requirements

### 4.6 Acceptable Material Loss Ranges by Process Step

| Process Step          | Expected Loss Range          | Excessive Loss Threshold |
| --------------------- | ---------------------------- | ------------------------ |
| **Dispensing**        | 0.1% - 0.5%                  | > 1.0%                   |
| **Transfer (solid)**  | 0.2% - 0.5%                  | > 1.0%                   |
| **Transfer (liquid)** | 0.5% - 1.0%                  | > 2.0%                   |
| **Sieving**           | 0.5% - 1.0%                  | > 2.0%                   |
| **Wet granulation**   | 1.0% - 2.0%                  | > 3.0%                   |
| **Drying**            | 0.5% - 2.0% (excl. moisture) | > 3.0%                   |
| **Milling**           | 1.0% - 2.0%                  | > 3.0%                   |
| **Blending**          | 0.5% - 1.0%                  | > 2.0%                   |
| **Compression**       | 2.0% - 4.0%                  | > 5.0%                   |
| **Coating**           | 0.5% - 1.5%                  | > 2.5%                   |
| **Packaging**         | 2.0% - 4.0%                  | > 5.0%                   |

**Note**: These are guidance ranges. Product-specific validated limits may differ.

### 4.7 Investigation Triggers for Material Discrepancies

**Mandatory investigation when:**

* Material reconciliation outside ±2% of theoretical

* Unaccounted material loss > process-specific threshold

* Unexplained gain in material (potential contamination or calculation error)

* Waste quantities exceed historical norms without explanation

* Sample quantities not reconciled

**Investigation should determine:**

* Root cause of discrepancy

* Impact on product quality

* Impact on batch disposition

* Corrective actions needed

* Preventive measures

***

## 5. Label Reconciliation (CRITICAL)

### 5.1 Regulatory Requirement: 21 CFR 211.130

**Exact regulatory text:**

> "Labeling materials issued for use in drug product labeling operations shall be carefully examined for identity and conformity to the labeling specified in the master or batch production records...
>
> Reconciliation of the quantities of labeling issued, used, and returned shall be performed by one person and independently verified by a second person..."

**Key requirements:**

* **100% accountability required** - ANY discrepancy is unacceptable

* **Dual verification** - Independent second person check

* **Complete documentation** - All issued, used, returned, destroyed labels tracked

### 5.2 Label Reconciliation Formula

**Fundamental Equation (MUST balance exactly):**

```
Labels Issued = Labels Used + Labels Returned + Labels Destroyed
```

**Alternative format:**

```
Labels Used + Labels Returned + Labels Destroyed - Labels Issued = 0
```

**There is NO acceptable variance. Result MUST be zero.**

### 5.3 Label Accountability Throughout Process

#### Pre-Issuance

* Labels stored in secure, controlled area

* Access limited to authorized personnel

* Inventory maintained

* Obsolete labels destroyed with documentation

#### Issuance

* Issued based on approved batch record

* Issued quantity documented: typically batch size + overage (2-5%)

* Issued by authorized person with signature and date

* Received by packaging operator with signature and date

* Batch number/control number assigned to label issuance

#### Use During Packaging

* Packaging operator counts labels loaded into equipment

* Spoiled/misprinted labels segregated immediately

* All spoiled labels retained for destruction count

* Unused labels kept separate from trash

#### Return

* All unused labels returned at end of packaging

* Count verified by packaging operator

* Count independently verified by QA

* Returned labels stored temporarily pending destruction

#### Destruction

* All spoiled and returned labels destroyed

* Destruction method documented (shredder, incinerator, etc.)

* Destruction witnessed and documented

* Destruction record includes count and signatures

### 5.4 Documentation Requirements

**Labeling issuance record must include:**

* Product name and strength

* Batch/lot number

* Label type (primary, secondary, insert, etc.)

* Label item number or description

* Quantity issued

* Issue date and time

* Issued by (signature and date)

* Received by (signature and date)

**Labeling reconciliation record must include:**

* All fields from issuance record

* Quantity used

* Quantity returned

* Quantity destroyed

* Reconciliation calculation

* Reconciliation performed by (signature and date)

* Reconciliation verified by (signature and date) - MUST be different person

* Any discrepancy noted with investigation reference

* QA approval signature

### 5.5 Common Label Reconciliation Failures

#### Failure Type 1: Mathematical Discrepancy

**Issue**: Reconciliation doesn't balance
**Examples**:

* Issued: 50,000 | Used: 48,500 | Returned: 1,200 | Destroyed: 200

* Calculation: 48,500 + 1,200 + 200 = 49,900 (100 labels unaccounted)
  **Impact**: CRITICAL - Potential for mislabeling
  **Action**: Cannot release batch until all labels accounted for

#### Failure Type 2: Missing Destruction Documentation

**Issue**: Returned/spoiled labels not destroyed with documentation
**Impact**: HIGH - Cannot confirm labels didn't enter unauthorized use
**Regulatory citation**: FDA 483 frequent finding

#### Failure Type 3: Single Person Verification

**Issue**: Same person performs reconciliation and verification
**Impact**: CRITICAL - Violates 21 CFR 211.130 requirement
**Regulatory citation**: FDA Warning Letter common citation

#### Failure Type 4: Discrepancy Without Investigation

**Issue**: Reconciliation shows discrepancy but no investigation performed
**Impact**: CRITICAL - Regulatory violation
**Required**: Full investigation even if discrepancy is one label

#### Failure Type 5: Labels Not Segregated

**Issue**: Used labels not clearly segregated from unused
**Impact**: HIGH - Risk of count errors, potential mislabeling
**Preventive action**: Physical separation, containers labeled clearly

### 5.6 FDA 483 Examples Related to Label Reconciliation

**Example 1 (Mislabeling Risk):**

> "The firm failed to reconcile labeling. Specifically, for Batch XXX, the batch record shows 45,000 labels issued but only 43,850 labels accounted for (42,500 used + 1,350 returned). The discrepancy of 1,150 labels was not investigated."

**Example 2 (Verification Failure):**

> "Label reconciliation for multiple batches was performed and verified by the same individual, failing to meet the requirement for independent verification."

**Example 3 (Documentation Failure):**

> "Destruction records for returned labels are not maintained. Labels are returned to packaging materials storage but no documentation confirms destruction."

### 5.7 Mislabeling Risk Assessment

**Why 100% reconciliation is critical:**

1. **Patient Safety**: Mislabeled product could deliver:

   * Wrong drug

   * Wrong strength

   * Wrong dosing instructions

   * Incorrect warnings

2. **Regulatory Compliance**: Mislabeling is considered adulteration (FDCA Section 502)

3. **Market Consequences**: Mislabeling can trigger:

   * Batch rejection

   * Product recall

   * Warning Letters

   * Consent Decree

   * Injunction

**Risk scenarios from unaccounted labels:**

* Label used on wrong product/strength

* Label removed from facility (security breach)

* Label used on non-GMP product

* Label counterfeited

### 5.8 Label Reconciliation in Automated Batch Record Review

**Automated review system should:**

1. **Extract values**:

   * Labels issued

   * Labels used

   * Labels returned

   * Labels destroyed

2. **Calculate reconciliation**:

   * Sum: used + returned + destroyed

   * Compare to issued

   * Flag if ≠ 0 (ANY difference)

3. **Verify documentation**:

   * Destruction record present

   * Two different signatures (performed by / verified by)

   * Investigation present if discrepancy

4. **Severity scoring**:

   * Any discrepancy = CRITICAL finding

   * Missing destruction doc = HIGH finding

   * Single-person verification = CRITICAL finding

   * Missing investigation for discrepancy = CRITICAL finding

**This is typically the highest-severity check in batch record review.**

***

## 6. Packaging Component Reconciliation

### 6.1 Component Reconciliation Requirements

**Components requiring reconciliation:**

* Primary containers (bottles, blisters, tubes)

* Closures (caps, lids, stoppers)

* Secondary packaging (cartons, boxes)

* Package inserts / patient information leaflets

* Serialization codes (if applicable)

* Tamper-evident seals

**Acceptable reconciliation range**: Typically ±5% for packaging components (less critical than labels)

### 6.2 Blister Packaging Reconciliation

**Specific considerations:**

* Blister cavities: 100% accountability like labels (each cavity is a dose)

* Lidding foil: ±5% acceptable (sold by length, some waste expected)

* Cartons: ±2% acceptable

**Example reconciliation:**

```
Blister cards issued: 5,000 cards (10 tablets each)
Blister cards used: 4,850 cards
Blister cards rejected: 145 cards (cavities not formed properly)
Blister cards returned: 5 cards
Total: 4,850 + 145 + 5 = 5,000 ✓ (Balanced)
```

### 6.3 Serialization Reconciliation

**Regulatory driver**: Drug Supply Chain Security Act (DSCSA) - US

**Reconciliation requirements:**

* Every serialized unit tracked

* Commissioned serial numbers = Applied serial numbers + Rejected serial numbers + Unused serial numbers

* Aggregation data integrity

* Parent-child relationships verified

**Data points to verify:**

* Serial number range issued

* Serial numbers applied (on product)

* Serial numbers on rejected units (must be decommissioned)

* Serial numbers returned unused to pool

* Aggregation: which serial numbers in which case/pallet

***

## 7. Low Yield Investigation

### 7.1 When to Investigate

**Mandatory investigation triggers:**

* Yield below investigation trigger limit (see Section 2.1)

* Yield below specification limit (automatic batch rejection pending investigation)

* Significant deviation from historical performance (>10% lower than mean)

* Material reconciliation discrepancy

* Unexplained losses

### 7.2 Investigation Methodology

**Phase 1: Immediate assessment (within 24 hours)**

1. Review yield calculation for errors
2. Verify measurement accuracy (balance calibration, method)
3. Check for documentation errors
4. Interview operators for reported issues
5. Review electronic batch records for flagged anomalies

**Phase 2: Root cause investigation (within 5 business days)**

1. Process parameter review
2. Equipment performance review
3. Material quality review
4. Environmental condition review
5. Comparison to other recent batches
6. Statistical analysis (if appropriate)

**Phase 3: Conclusion and CAPA (within 10 business days)**

1. Root cause determination
2. Impact assessment
3. Corrective action
4. Preventive action
5. Effectiveness verification plan

### 7.3 Common Root Causes by Stage

| Stage           | Common Root Causes for Low Yield                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| **Dispensing**  | Calculation error, spillage, incorrect quantity dispensed, balance error                                    |
| **Granulation** | Over-wetting (wet gran), inadequate compaction (dry gran), equipment holdup                                 |
| **Drying**      | Over-drying leading to material loss, static causing loss, calculation error (moisture basis)               |
| **Milling**     | Excessive fines rejection, screen blinding, material degradation                                            |
| **Blending**    | Equipment holdup, transfer losses, dusting                                                                  |
| **Compression** | Poor granulation quality, tooling issues, weight variation requiring adjustment, high tablet rejection rate |
| **Coating**     | Excessive attrition, poor tablet quality, spray loss, over-coating                                          |
| **Packaging**   | Equipment jams, high rejection rate (vision system), operator errors                                        |

### 7.4 Impact on Batch Disposition

**Yield below specification:**

* Batch typically placed on HOLD

* Cannot be released until investigation concludes

* If root cause is material loss without quality impact: may release with justification

* If root cause indicates quality issue: batch REJECT

**Yield at or above specification but below investigation trigger:**

* Batch may be released if all other specs met

* Investigation still required

* Trending analysis to detect process drift

### 7.5 Documentation Requirements for Yield Deviations

**Deviation report must include:**

* Batch identification

* Yield value and specification

* Stage(s) affected

* Timeline of discovery

* Investigation summary

* Root cause

* Impact assessment on product quality

* Impact assessment on other batches

* Corrective action

* Preventive action

* Approval chain (Production, QA, QC minimum)

* Final disposition decision with rationale

***

## 8. Yield Trending and Statistical Process Control

### 8.1 Purpose of Yield Trending

* **Process monitoring**: Detect gradual degradation in process performance

* **Early warning**: Identify trends before specification limits are reached

* **Continuous improvement**: Highlight opportunities for process optimization

* **Risk assessment**: Support change control and CAPA effectiveness verification

### 8.2 Trending Frequency

**Recommended:**

* Review yield data for each batch (real-time)

* Trend analysis monthly (minimum)

* Statistical analysis quarterly

* Annual process performance review

### 8.3 Statistical Process Control (SPC) Concepts

**Control charts for yield:**

* **Center line**: Mean yield (based on historical data)

* **Upper control limit**: Mean + 3 standard deviations

* **Lower control limit**: Mean - 3 standard deviations

* **Warning limits**: Mean ± 2 standard deviations

**Out-of-control signals:**

* Single point outside control limits

* 7 consecutive points on one side of center line

* 7 consecutive points trending up or down

* 2 out of 3 consecutive points beyond warning limits

### 8.4 When Yield Trends Indicate Process Drift

**Warning signs:**

* Gradual decline in mean yield over time

* Increasing variability (wider distribution)

* Shift in process capability indices (Cp, Cpk)

* More frequent investigation triggers

**Response:**

* Initiate enhanced monitoring

* Review recent changes (materials, equipment, procedures)

* Consider process requalification

* Evaluate need for formula or process adjustment

***

## 9. Summary: Critical Review Points for Automated Systems

**For automated batch record review systems, the following checks are essential:**

### Yield Calculations

* [ ] Yield calculated for all required stages

* [ ] Yield calculation mathematically correct (recalculate independently)

* [ ] Yield meets acceptance criteria (stage-specific)

* [ ] Yield below investigation trigger flagged

* [ ] Investigation documented for low yield

### Material Reconciliation

* [ ] Input materials = output + waste + samples + losses (within ±2%)

* [ ] All formula materials accounted for

* [ ] Waste documentation present and reasonable

* [ ] Sample quantities reconciled

### Label Reconciliation (CRITICAL)

* [ ] Labels issued = labels used + returned + destroyed (EXACT match required)

* [ ] Performed by one person, verified by different person

* [ ] Destruction documentation present

* [ ] Any discrepancy investigated (even 1 label)

### Component Reconciliation

* [ ] Primary containers reconciled (within ±5%)

* [ ] Closures reconciled (within ±5%)

* [ ] Serialization data integrity verified (if applicable)

**Any failure in label reconciliation is an automatic CRITICAL finding requiring batch hold and investigation before release consideration.**

***

## Document Control

**Version**: 1.0\
**Effective Date**: 2024\
**Review Frequency**: Annual\
**Document Owner**: Quality Assurance\
**Approval**: \[QA Director]

**Revision History:**

| Version | Date | Changes         | Approved By |
| ------- | ---- | --------------- | ----------- |
| 1.0     | 2024 | Initial release | QA Director |

***

# Part 8: ALCOA+ Data Integrity

## Document Purpose and Scope

This knowledge base document provides comprehensive guidance on data integrity principles applied to pharmaceutical batch record documentation. The ALCOA+ framework is the global standard for GMP data integrity, recognized by FDA, MHRA, EMA, WHO, and PIC/S.

**Target Audience:**

* Quality Assurance professionals

* Manufacturing personnel

* Quality Control analysts

* Regulatory affairs staff

* IT/computerized system administrators

* Batch record review systems (automated and manual)

**Regulatory Framework:**

* FDA Guidance: Data Integrity and Compliance With Drug CGMP (December 2018)

* MHRA GxP Data Integrity Guidance (March 2018)

* WHO Technical Report Series No. 996, Annex 5: Guidance on Good Data and Record Management Practices (2016)

* PIC/S PI 041-1: Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments (2021)

* EU GMP Chapter 4: Documentation and Annex 11: Computerised Systems

***

## 1. ALCOA+ Framework Overview

### 1.1 Origin and Evolution

**Original ALCOA** (FDA, 1990s):

* **A**ttributable

* **L**egible

* **C**ontemporaneous

* **O**riginal

* **A**ccurate

**Extended to ALCOA+ (MHRA, 2015):**

* Added: **Complete**, **Consistent**, **Enduring**, **Available**

### 1.2 Why ALCOA+ Matters for Batch Records

Batch records are the **primary evidence** that:

* The batch was manufactured according to validated processes

* All critical parameters were within specification

* Quality oversight was exercised

* The product meets quality standards

**Data integrity failures in batch records can result in:**

* Product recalls

* Regulatory warning letters

* Consent decrees

* Criminal prosecution (in cases of fraud)

* Loss of market authorization

**Recent FDA enforcement trends:**

* Increasing focus on data integrity violations

* Warning letters frequently cite ALCOA+ principle violations

* Expect to see raw data, not just summary reports

* Audit trail review now standard in inspections

***

## 2. ALCOA Principle: ATTRIBUTABLE

### 2.1 Definition

**Attributable**: It should be possible to identify who performed an action and when. Every data entry, observation, test, or activity must be traceable to a specific, identified individual.

### 2.2 What Attributable Means for Batch Records

**Paper records:**

* Full signature (first name, last name) or unique initials

* Signature linked to signature log with full name and initials

* Date of signature

* Time of signature (when timing is critical to GMP compliance)

**Electronic records:**

* Unique user ID

* No shared logins

* Electronic signature with time stamp

* Audit trail of all changes with user attribution

### 2.3 How to Verify Attributability in Batch Record Review

**Verification checklist:**

* [ ] Every data entry has an associated signature or electronic user ID

* [ ] Signatures are legible or linked to a signature log

* [ ] Signature log is available, current, and complete

* [ ] No evidence of shared logins (electronic systems)

* [ ] Timestamps present for time-critical activities

* [ ] All pages of the batch record are signed by operators and reviewers

* [ ] Line clearance signatures present and attributed

* [ ] Equipment use logs signed by operators

* [ ] Supervisory reviews signed and dated

### 2.4 Common Attributability Violations

#### Violation 1: Unsigned Entries

**Example**:

* Temperature recorded as "25°C" but no signature indicating who recorded it
  **Impact**: Cannot verify who made the observation
  **Severity**: HIGH
  **Regulatory citation**: 21 CFR 211.186, 21 CFR 211.188

#### Violation 2: Illegible Signatures

**Example**:

* Signature present but appears as a line or squiggle, not matchable to signature log
  **Impact**: Cannot identify the operator
  **Severity**: MEDIUM to HIGH (depending on criticality of step)
  **Corrective action**: Require operators to print name alongside signature or use signature stamps with printed name

#### Violation 3: Shared Logins (Electronic Systems)

**Example**:

* Multiple operators use username "Operator1" with shared password
  **Impact**: Cannot determine which individual performed the action
  **Severity**: CRITICAL
  **Regulatory citation**: 21 CFR Part 11.10(d), FDA Data Integrity Guidance
  **FDA position**: Shared logins render electronic records unreliable

#### Violation 4: Missing Signature Log

**Example**:

* Batch record contains initials "JD" but no signature log to identify who "JD" is
  **Impact**: Attributability breaks down if signer leaves company or signature log is not maintained
  **Severity**: MEDIUM
  **Corrective action**: Maintain controlled signature logs, archive when personnel leave

#### Violation 5: Missing Dates on Signatures

**Example**:

* Operator signed batch record but did not date the signature
  **Impact**: Cannot verify contemporaneous recording (see Contemporaneous section)
  **Severity**: MEDIUM to HIGH
  **Corrective action**: Batch record design should have "Signature/Date" fields as a combined entry

### 2.5 Attributability Best Practices

**For paper records:**

* Use full signature or initials + signature log

* Include printed name field for critical steps

* Date field immediately adjacent to signature field

* Time field where timing is GMP-critical

**For electronic records:**

* Unique user ID for every individual

* Strong password policy

* Automatic logout after inactivity

* User access provisioning tied to HR system (auto-disable on termination)

* Training on no-sharing policy

**For hybrid systems:**

* Paper batch record with electronic data (e.g., instrument printouts)

* Electronic data must include user ID or be verified by operator signature on paper record

* Traceability between electronic file and paper record (batch number, timestamp)

### 2.6 Signature Log Requirements

**Must include:**

* Full legal name (first name, middle initial, last name)

* Unique initials

* Example of full handwritten signature

* Position/title

* Date signature added to log

* Date signature removed from log (if person leaves)

* Authorization signature (supervisor or QA)

**Maintenance:**

* Keep signature logs current

* Archive old signature logs (retain per record retention policy)

* Control access to signature log

* Protect against alteration

***

## 3. ALCOA Principle: LEGIBLE

### 3.1 Definition

**Legible**: All records must be readable and understandable throughout the record retention period. Data should be recorded in a durable manner that ensures long-term readability.

### 3.2 What Legible Means for Batch Records

**Paper records:**

* Handwriting must be readable by someone other than the writer

* Ink must be permanent and not fade over time

* Corrections must remain legible (original entry visible)

* Printouts must be high quality and durable

**Electronic records:**

* Display format remains readable (not dependent on obsolete software)

* Print quality (if printed) is high resolution

* Font size is adequate

* Data not corrupted or degraded over time

### 3.3 How to Verify Legibility in Batch Record Review

**Verification checklist:**

* [ ] Handwritten entries are readable

* [ ] Printed text is clear and high contrast

* [ ] No smudges, water damage, or fading

* [ ] Corrections are legible (both original and corrected values)

* [ ] Instrument printouts are clear and properly affixed

* [ ] Carbon copies (if used) are legible

* [ ] Electronic records render properly on screen

### 3.4 Common Legibility Violations

#### Violation 1: Illegible Handwriting

**Example**:

* Operator handwriting so poor that values cannot be confidently read

* "3" vs "8" ambiguity, "1" vs "7" ambiguity
  **Impact**: Data cannot be reliably verified
  **Severity**: MEDIUM to HIGH (depending on criticality)
  **Corrective action**: Print critical values, operator retraining, electronic data capture

#### Violation 2: Faded Ink or Thermal Paper

**Example**:

* Batch record printed on thermal paper (common for balance printouts), fades within months
  **Impact**: Record becomes unreadable before retention period ends
  **Severity**: HIGH
  **Regulatory citation**: 21 CFR 211.180(c) - Records retained in a manner to prevent deterioration
  **Corrective action**: Use laser or inkjet printers, photocopy thermal printouts onto archival paper

#### Violation 3: Smudged or Wet Entries

**Example**:

* Water spilled on batch record, ink runs, entries illegible
  **Impact**: Data lost
  **Severity**: HIGH
  **Regulatory citation**: 21 CFR 211.188 - Records shall include complete information
  **Corrective action**: Protect records from manufacturing environment, use water-resistant paper, laminate critical pages

#### Violation 4: Poor Quality Printouts

**Example**:

* Low toner in printer, text barely visible, graphs indistinguishable
  **Impact**: Data cannot be verified
  **Severity**: MEDIUM to HIGH
  **Corrective action**: Printer maintenance, print quality checks before affixing to batch record

#### Violation 5: Obscured Corrections

**Example**:

* Operator used correction fluid or heavily scribbled out original entry
  **Impact**: Original observation is lost, cannot assess if correction was appropriate
  **Severity**: HIGH (violation of "Original" principle as well)
  **Regulatory citation**: 21 CFR 211.194 - All drug product production and control records shall be retained

### 3.5 Legibility Best Practices

**Ink requirements:**

* Use permanent, waterproof ink (blue or black)

* Avoid pencil (erasable, not permanent)

* Avoid red ink (doesn't photocopy well)

* Avoid felt-tip or marker (can bleed through paper)

**Record protection:**

* Store in controlled environment (temperature, humidity)

* Use protective folders or binders

* Keep records away from production floor hazards during manufacturing

* Laminate pages exposed to wet environments (if allowable per SOP)

**Electronic records:**

* Use archival formats (PDF/A for long-term retention)

* Validate data migration when systems change

* Regular backup with verification

* Store in controlled electronic archive with access controls

***

## 4. ALCOA Principle: CONTEMPORANEOUS

### 4.1 Definition

**Contemporaneous**: Data must be recorded at the time of the observation or activity, not before (pre-recording) and not after (back-filling or batch recording).

### 4.2 What Contemporaneous Means for Batch Records

**Real-time recording expectations:**

* Observations recorded when made

* Activities recorded when performed

* Equipment readings recorded when equipment is in use

* In-process test results recorded when test is performed

**Acceptable timing:**

* Immediate (ideal): Within seconds to minutes of observation/activity

* Near-term (acceptable): Within the same shift, before the end of the activity

* Delayed (requires justification): End of shift, next day (only with documented reason)

**Not acceptable:**

* Pre-signing blank batch records

* Completing batch records days after batch completion ("batch filling")

* Recording activities before they happen

* Supervisory sign-off before review actually occurs

### 4.3 How to Verify Contemporaneous Recording

**Verification methods:**

1. **Time sequence logic**

   * Activities should be in chronological order

   * Timestamps should progress forward

   * No signatures dated before the activity they're verifying

2. **Cross-reference with other records**

   * Equipment use logs should align with batch record timestamps

   * Environmental monitoring data should align with manufacturing times

   * Analyst worksheets should align with batch record test result entries

3. **Process timing feasibility**

   * If a drying step takes 8 hours, timestamps should reflect this

   * If compression takes 12 hours, signatures should span this time period

   * Rapid completion of long processes suggests batch filling

4. **Signature patterns**

   * Multiple signatures with identical timestamps suggest batch filling

   * All entries in same pen/handwriting style suggests single sitting completion

**Red flags for non-contemporaneous recording:**

| Red Flag                                       | What It Suggests                             | Verification Action                          |
| ---------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| All timestamps same day, sequential by minutes | Batch filled after the fact                  | Check equipment logs, interview operators    |
| Signatures dated before process start          | Pre-signed pages                             | Interview, investigate SOPs                  |
| Handwriting/ink changes mid-activity           | Filled in by someone else later              | Compare to signature log, investigate        |
| Process duration impossible                    | Batch filled incorrectly                     | Recalculate timing, check equipment run time |
| Weekends/nights with no staff                  | Records from times with no operators present | Check staffing records, time-card data       |

### 4.4 Common Contemporaneous Recording Violations

#### Violation 1: Batch Filling (Back-Recording)

**Example**:

* Tablet compression completed on Monday

* Operator fills in batch record on Friday from memory or rough notes
  **Impact**: Data integrity compromised, observations may be inaccurate, deviations may be hidden
  **Severity**: CRITICAL
  **Regulatory citation**: FDA Data Integrity Guidance, 21 CFR 211.188
  **FDA position**: Batch filling is falsification of records

#### Violation 2: Pre-Signed Batch Records

**Example**:

* Supervisor pre-signs batch record pages to "save time"

* Operator completes activities later
  **Impact**: Supervisor did not actually verify; activities may not have been performed as documented
  **Severity**: CRITICAL
  **Regulatory citation**: 21 CFR 211.192 (QA review requirement)
  **Consequence**: Frequently cited in FDA Warning Letters

#### Violation 3: Transcription Without Verification

**Example**:

* Operator records data on "rough notes" or "scratch paper"

* Later transcribes to official batch record

* Original rough notes discarded
  **Impact**: Original observations lost, transcription errors possible, no verification of accuracy
  **Severity**: HIGH to CRITICAL
  **Regulatory citation**: FDA Data Integrity Guidance (original data must be retained)

#### Violation 4: Identical Timestamps for Sequential Activities

**Example**:

* Line clearance completed: 08:00

* Blending started: 08:00

* Blending completed: 08:00

* Blend sampling: 08:00

* (All activities signed at same time)
  **Impact**: Clearly not recorded in real-time
  **Severity**: HIGH
  **Verification**: Blending takes hours, not minutes; signatures likely batch-filled

#### Violation 5: Supervisor Approval Before Activity Completion

**Example**:

* Packaging completed and signed by operator: 3/15/2024 15:30

* QA review and approval: 3/15/2024 10:00
  **Impact**: QA approved before the activity was finished; approval is invalid
  **Severity**: CRITICAL

### 4.5 Acceptable Delayed Recording Scenarios

**Scenario 1: Equipment-Generated Data**

* Automated data logger records data continuously

* Operator retrieves and affixes printout to batch record at end of shift

* Acceptable IF: printout shows real-time data capture, operator signs/dates printout when affixed

**Scenario 2: Laboratory Testing**

* Analyst performs test during shift

* Records data in bound laboratory notebook in real-time

* Transcribes summary to batch record Certificate of Analysis (COA) at end of day

* Acceptable IF: Laboratory notebook is retained as raw data, transcription is verified

**Scenario 3: Visual Inspections**

* Operator performs visual inspection of 100% of units over 8-hour shift

* Records summary result ("No defects observed, 50,000 units inspected") at end of shift

* Acceptable IF: Any defects would be recorded immediately, final summary allowed at completion

**Key principle**: Original observations must be recorded contemporaneously. Summaries may be compiled later if raw data is preserved.

### 4.6 Contemporaneous Recording Best Practices

**Process design:**

* Provide recording stations near work areas

* Use electronic data capture where feasible (automatic timestamps)

* Design batch records for easy real-time recording (checkboxes, limited write-in)

**Training:**

* Emphasize the requirement for real-time recording

* Explain the regulatory consequences of batch filling

* Provide examples of acceptable vs. unacceptable practices

**Supervision:**

* Regular observation of operators during manufacturing

* Verify operators are recording in real-time

* Investigate patterns suggesting batch filling

**Technology:**

* Electronic batch records with enforced timestamp logic

* Equipment interfacing (automatic data transfer)

* Mobile data entry devices at workstations

***

## 5. ALCOA Principle: ORIGINAL

### 5.1 Definition

**Original**: The original record or a certified true copy must be retained. The "original" is the first-captured instance of the data, whether on paper or in an electronic system.

### 5.2 What Original Means for Batch Records

**Original data includes:**

* First handwritten observation by operator

* First electronic capture of instrument data

* Original equipment printouts (chromatograms, weight tickets, environmental records)

* Analyst raw data worksheets

* Photographs of physical observations

**Certified true copies:**

* Exact duplicate of original

* Certified by authorized person (signature, date, "certified true copy" statement)

* Used when original must remain in another location (e.g., equipment log book)

**Not acceptable:**

* Transcribing from rough notes and discarding the notes

* Copying data from one record to another without retaining both

* Summarizing data without retaining raw data source

### 5.3 How to Verify Original Data Retention

**Verification checklist:**

* [ ] Original instrument printouts affixed to batch record (not photocopies unless certified)

* [ ] Electronic data: audit trail confirms data is first-capture

* [ ] Laboratory data: analyst worksheets retained and referenced

* [ ] Equipment logs: original entries present or certified copies attached

* [ ] Any transcribed data: original source retained and traceable

* [ ] Photographs: metadata retained (timestamp, user, device)

### 5.4 Common Original Data Violations

#### Violation 1: Rough Notes Discarded

**Example**:

* Operator writes observations on scrap paper during manufacturing

* Transcribes to batch record at end of shift

* Discards rough notes
  **Impact**: Original observations are lost, transcription errors possible, cannot verify accuracy
  **Severity**: CRITICAL
  **Regulatory citation**: FDA Data Integrity Guidance Section IV.A ("You should retain original records")
  **FDA Warning Letter language**: "Failure to retain original data"

#### Violation 2: Data Entered Directly into Summary Without Raw Data Retention

**Example**:

* Analyst performs calculation on calculator or in head

* Writes only final result in batch record

* No record of calculation steps or raw data
  **Impact**: Cannot verify accuracy, detect calculation errors, or investigate anomalies
  **Severity**: HIGH
  **Corrective action**: Retain calculation worksheets, use validated electronic systems that retain raw data

#### Violation 3: Photocopies Presented as Originals

**Example**:

* Inspector asks for original batch record

* Firm provides photocopy, cannot produce original
  **Impact**: Cannot verify authenticity, alterations possible
  **Severity**: HIGH
  **Regulatory citation**: 21 CFR 211.180(c) - Original records retained
  **Acceptable alternative**: Certified true copy with statement of why original cannot be produced

#### Violation 4: Electronic Data Without Audit Trail

**Example**:

* Manufacturing Execution System (MES) records data electronically

* Data can be overwritten without audit trail

* Cannot determine if displayed data is "original" or has been altered
  **Impact**: Data integrity cannot be verified
  **Severity**: CRITICAL
  **Regulatory citation**: 21 CFR Part 11.10(e) - Use of secure, computer-generated, time-stamped audit trails

### 5.5 Original Data in Hybrid Systems (Paper + Electronic)

**Common scenario:**

* Paper batch record

* Electronic equipment data (balances, pH meters, HPLC, etc.)

* Electronic environmental monitoring

**Requirement:**

* Electronic data is the "original"

* Paper printout is acceptable IF: complete data is printed, includes metadata (user, timestamp, audit trail summary)

* Electronic file must be retained as well (printout alone is insufficient for complex data like chromatograms)

**Best practice:**

* Print complete data (not just summary)

* Include audit trail information on printout

* Reference electronic file location on printout

* Retain electronic file per retention policy

* Ensure electronic file is accessible (software, format compatibility)

### 5.6 Original Data Best Practices

**For paper records:**

* Record directly in bound, page-numbered batch records

* No transcription from rough notes

* If rough notes are used (equipment readings during process), they must be retained and attached to batch record

**For electronic records:**

* Audit trail enabled and functional

* Data locked after entry (cannot be overwritten)

* Changes tracked (who, what, when, why)

* Backup and recovery validated

**For hybrid systems:**

* Clear definition of "original" for each data type

* Procedure for printout generation and verification

* Electronic file retention and accessibility

***

## 6. ALCOA Principle: ACCURATE

### 6.1 Definition

**Accurate**: Data must be true and correct, reflecting the actual observation or measurement. There must be no errors, falsification, or fabrication.

### 6.2 What Accurate Means for Batch Records

**Accuracy requirements:**

* Values recorded match actual instrument readings

* Observations recorded match actual visual inspection findings

* Calculations are mathematically correct

* Units are correctly labeled

* No data manipulation to "fit" specifications

**Prohibited practices:**

* Recording values that were not actually observed

* Altering data to bring into specification

* Averaging results selectively

* "Dry labbing" (recording expected results without performing test)

* Rounding inappropriately to meet specifications

### 6.3 How to Verify Accuracy in Batch Record Review

**Verification methods:**

1. **Calculation verification**

   * Independently recalculate all computed values

   * Verify rounding rules applied correctly

   * Check unit conversions

2. **Cross-reference with source data**

   * Compare batch record values to equipment printouts

   * Compare to laboratory worksheets

   * Compare to environmental monitoring records

3. **Logical consistency checks**

   * Values within physically possible ranges

   * Sequential values follow expected patterns

   * No impossible coincidences (e.g., all values exactly at specification limit)

4. **Statistical evaluation**

   * Distribution of values follows expected pattern

   * No unusual clustering at specification limits

   * Variability consistent with process capability

**Red flags for inaccurate data:**

| Red Flag                                            | What It Suggests                    | Investigation Action                     |
| --------------------------------------------------- | ----------------------------------- | ---------------------------------------- |
| Values exactly at specification limit               | Data manipulation                   | Check raw data, interview analyst        |
| Rounded values that meet spec, unrounded would fail | Inappropriate rounding              | Verify rounding rules, recalculate       |
| Perfect agreement between duplicates                | Copying or fabrication              | Request repeat analysis, audit procedure |
| Instrument printout doesn't match recorded value    | Transcription error or manipulation | Investigate discrepancy source           |
| Physically impossible values                        | Data entry error or fabrication     | Verify with equipment, investigate       |

### 6.4 Common Accuracy Violations

#### Violation 1: Data Manipulation to Pass Specification

**Example**:

* Dissolution specification: 80-110% at 30 minutes

* Actual instrument result: 78.5%

* Recorded in batch record: 80.2%
  **Impact**: Product that doesn't meet specification is released; patient safety risk
  **Severity**: CRITICAL
  **Regulatory consequence**: Warning Letter, recall, criminal prosecution
  **FDA position**: Falsification of data is zero-tolerance violation

#### Violation 2: Selective Deletion of OOS Results

**Example**:

* Analyst performs triplicate assay

* Results: 98.5%, 97.8%, 95.2%

* Records only: 98.5%, 97.8% (average 98.2%, within spec)

* Deletes 95.2% result
  **Impact**: OOS result hidden, investigation not triggered, quality issue masked
  **Severity**: CRITICAL
  **Regulatory citation**: 21 CFR 211.194 - All records retained, FDA OOS Guidance
  **Requirement**: ALL results must be recorded, OOS must be investigated

#### Violation 3: Inappropriate Rounding

**Example**:

* Specification: NMT (not more than) 1.0%

* Actual calculated result: 1.049%

* Recorded as: 1.0% (rounding to one decimal place)

* Batch disposition: PASS (should be FAIL)
  **Impact**: Out-of-specification material released
  **Severity**: HIGH to CRITICAL
  **Regulatory position**: Rounding must not be used to artificially meet specifications; round according to established rules BEFORE comparing to specification

#### Violation 4: Dry Labbing (Fabricating Data)

**Example**:

* Analyst records pH test result without actually performing the test

* Records expected value (e.g., 7.0) based on previous batches
  **Impact**: Test not performed, quality not verified, patient risk
  **Severity**: CRITICAL
  **Detection**: Audit trail shows no instrument use; no sample consumption from reagent bottles

#### Violation 5: Calculation Errors

**Example**:

* Yield calculation: 48,500g actual / 50,000g theoretical

* Correct: 97.0%

* Recorded: 98.0% (math error)
  **Impact**: Incorrect batch disposition decision
  **Severity**: MEDIUM to HIGH (depending on whether error affects disposition)
  **Prevention**: Independent verification of calculations, electronic calculation tools

### 6.5 Correction Procedures (Maintaining Accuracy)

**When an error is discovered, proper correction method:**

1. **Single line through** the incorrect entry (original remains legible)
2. **Write correct value** adjacent to crossed-out entry
3. **Initial and date** the correction
4. **Document reason** for correction (may be on same line or in deviation/investigation report)

**Example of proper correction:**

```
Temperature: 25°C 24°C [initials] [date] Incorrect reading, re-checked
```

**NEVER:**

* Use correction fluid or tape to obliterate original entry

* Erase pencil entries

* Overwrite original entry (making it illegible)

* Make correction without initialing and dating

**Electronic records:**

* Original entry remains in system (audit trail)

* New entry made with reason

* Change attributed to specific user

* Timestamp of change recorded

### 6.6 Accuracy Best Practices

**Process controls:**

* Calibrated equipment (verify calibration dates during review)

* Validated test methods

* Trained personnel with competency assessment

* Independent verification of critical calculations

* Statistical process control to detect unusual patterns

**Cultural controls:**

* Quality culture emphasizing truthfulness over results

* No punishment for accurate reporting of OOS results

* Investigation focus on root cause, not blame

* Management support for stopping batches with quality issues

**Technical controls:**

* Electronic data capture (reduces transcription errors)

* Automatic calculation (eliminates math errors)

* Data review before entry into batch record

* Blind duplicate testing (for high-risk tests)

***

## 7. ALCOA+ Extension: COMPLETE

### 7.1 Definition

**Complete**: All data must be included in the record. Selective reporting or deletion of unfavorable results is prohibited. This includes all tests performed, all results obtained (including OOS, retests, repeats), and all metadata.

### 7.2 What Complete Means for Batch Records

**Required data elements:**

* All in-process test results (not just final result)

* All retests and reason for retest

* All repeat tests

* All OOS results with investigation

* All deviations/incidents

* All material lots used

* All equipment used

* Complete audit trails (for electronic systems)

* Metadata (who, what, when, where, why)

**Prohibited:**

* Deleting electronic records

* Removing pages from batch records

* Not documenting retests

* Selectively reporting only passing results

### 7.3 Common Completeness Violations

#### Violation 1: Incomplete Audit Trail

**Example**:

* Electronic batch record system has audit trail functionality

* Audit trail has gaps (missing entries)

* Firm cannot explain gaps
  **Impact**: Cannot verify data integrity, changes may have been made without documentation
  **Severity**: CRITICAL
  **Regulatory citation**: 21 CFR Part 11.10(e)

#### Violation 2: Missing Retest Documentation

**Example**:

* Blend uniformity test performed

* Result: Outside acceptance criteria

* Sample re-pulled and retested

* Second result: Within specification

* Batch record shows only second (passing) result
  **Impact**: Initial failure hidden, investigation not performed, quality risk
  **Severity**: CRITICAL
  **Requirement**: BOTH results documented, investigation performed to determine which is valid

#### Violation 3: Deviation Not Documented in Batch Record

**Example**:

* Equipment breakdown occurs during compression

* Recorded in maintenance log but not in batch record

* Impact assessment not performed for batch
  **Impact**: Batch record does not reflect complete manufacturing history
  **Severity**: HIGH
  **Requirement**: All deviations cross-referenced in batch record with impact assessment

#### Violation 4: Missing Metadata

**Example**:

* Electronic chromatogram printed and attached to batch record

* Printout shows peaks and integration but no: injection date, analyst ID, instrument ID, method version
  **Impact**: Cannot verify traceability or authenticity
  **Severity**: MEDIUM to HIGH
  **Requirement**: Complete metadata on all electronic data outputs

### 7.4 Completeness Verification Checklist

* [ ] All sections of batch record completed (no blank required fields)

* [ ] All expected test results present

* [ ] Retests documented with reason

* [ ] OOS results documented with investigation reference

* [ ] Deviations documented or referenced

* [ ] Audit trail complete (electronic systems)

* [ ] All equipment IDs recorded

* [ ] All material lot numbers recorded

* [ ] All samples documented

* [ ] All operators/reviewers signed

***

## 8. ALCOA+ Extension: CONSISTENT

### 8.1 Definition

**Consistent**: Data across different records related to the same batch should be internally consistent and not contradictory. Timestamps, values, and sequence of events should align logically.

### 8.2 What Consistent Means for Batch Records

**Cross-record consistency:**

* Batch record timestamps align with equipment use logs

* Material quantities in batch record match dispensing records

* Test results in batch record match laboratory worksheets

* Batch start/end times consistent across all documentation

**Internal consistency:**

* Date/time sequence is logical (no time travel)

* Material balance (input = output + waste)

* Related values are mathematically consistent

### 8.3 Common Consistency Violations

#### Violation 1: Timestamp Contradictions

**Example**:

* Batch record: Compression started 08:00 on 3/15/2024

* Equipment log: Tablet press not used on 3/15/2024

* Tablet press log: Compression occurred 08:00 on 3/16/2024
  **Impact**: Cannot determine true manufacturing date, data integrity questionable
  **Severity**: HIGH
  **Investigation**: Determine correct dates, investigate why records don't match

#### Violation 2: Inconsistent Material Quantities

**Example**:

* Dispensing record: 50.0 kg of excipient dispensed for Batch X

* Batch record: 52.0 kg of excipient used in Batch X

* No documentation of additional dispensing
  **Impact**: Material traceability broken, source of additional 2 kg unknown
  **Severity**: HIGH

#### Violation 3: Quantity Reconciliation Failures

**Example**:

* Batch record: 100,000 tablets compressed

* Packaging record: 102,000 tablets packaged

* No explanation for additional 2,000 tablets
  **Impact**: Material accountability failure, mislabeling risk
  **Severity**: CRITICAL

### 8.4 Consistency Verification in Automated Review

**Automated systems should cross-check:**

* Batch record dates vs. equipment log dates

* Material quantities: dispensing → batch record → packaging

* Timestamps in logical sequence

* Test results: batch record vs. LIMS vs. analyst worksheets

* Personnel: signed operators were scheduled to work that day

***

## 9. ALCOA+ Extension: ENDURING

### 9.1 Definition

**Enduring**: Records must be retained for the required retention period in a durable, readable format that prevents degradation or loss over time.

### 9.2 What Enduring Means for Batch Records

**Retention requirements (US):**

* **Batch records**: At least 1 year after expiration date (21 CFR 211.180)

* **Records for drug products without expiration dating**: 3 years after distribution

* **Longer retention may be required**: Stability data, validation records, complaints

**Retention requirements (EU):**

* **Batch records**: At least 1 year after expiration date (EU GMP)

* **For investigational products**: At least 5 years after completion or discontinuation of clinical trial

**Durability considerations:**

* Paper records: Prevent fading, water damage, physical deterioration

* Electronic records: Prevent data corruption, format obsolescence, media failure

### 9.3 How to Verify Enduring Storage

**Verification checklist:**

* [ ] Storage environment controlled (temperature, humidity)

* [ ] Protection from water, fire, pests

* [ ] Electronic records backed up with verified recovery

* [ ] Electronic records in archival format (PDF/A or validated system)

* [ ] Migration plan for electronic systems (before obsolescence)

* [ ] Access controls prevent unauthorized destruction

* [ ] Retrieval process validated (can retrieve within defined timeframe)

### 9.4 Common Enduring Violations

#### Violation 1: Thermal Paper Printouts (Fading)

**Example**:

* Balance printouts on thermal paper affixed to batch record

* After 1-2 years, printout completely faded, unreadable
  **Impact**: Critical data lost before retention period ends
  **Severity**: HIGH
  **Corrective action**: Photocopy thermal printouts onto archival paper immediately, or use non-thermal printers

#### Violation 2: Electronic Records on Obsolete Media

**Example**:

* Electronic batch records stored on 3.5" floppy disks

* No functional floppy disk readers available

* Data inaccessible
  **Impact**: Records cannot be retrieved for regulatory inspection
  **Severity**: CRITICAL
  **Preventive action**: Periodic data migration to current media/formats

#### Violation 3: Water-Damaged Paper Records

**Example**:

* Batch records stored in basement

* Flooding damages records, makes them illegible
  **Impact**: Records destroyed before retention period
  **Severity**: CRITICAL
  **Preventive action**: Climate-controlled storage, off-site backup copies

#### Violation 4: Lost Electronic Records (No Backup)

**Example**:

* Electronic batch records stored on single server

* Hard drive failure, no backup

* Years of batch records lost
  **Impact**: Cannot demonstrate GMP compliance for affected batches
  **Severity**: CRITICAL
  **Regulatory consequence**: Product recall may be required

### 9.5 Enduring Storage Best Practices

**Paper records:**

* Acid-free archival paper

* Permanent ink (not thermal printouts)

* Climate-controlled storage (65-75°F, 35-50% RH)

* Protection from light (UV causes fading)

* Fire suppression systems

* Flood protection (elevated storage)

* Duplicate copies stored off-site (for critical records)

**Electronic records:**

* Regular backup (daily or more frequent)

* Backup verification (test restore process)

* Off-site backup (disaster recovery)

* Archival format (PDF/A, XML, open standards)

* Migration plan (before system/media obsolescence)

* Data integrity verification (checksums, digital signatures)

***

## 10. ALCOA+ Extension: AVAILABLE

### 10.1 Definition

**Available**: Records must be readily retrievable for review, audit, inspection, and other authorized purposes. Authorized personnel should be able to access records promptly when needed.

### 10.2 What Available Means for Batch Records

**Availability requirements:**

* Batch records retrievable within reasonable time (typically same day)

* Electronic records accessible (not just archived on tape)

* Regulatory inspections: immediate to same-day access expected

* Audit trail accessible along with records

* Readable format (not requiring obsolete software)

**Access control:**

* Authorized personnel can access

* Unauthorized personnel cannot access (security)

* Access logged (audit trail of record access)

### 10.3 How to Verify Availability

**Verification checklist:**

* [ ] Records stored in organized, indexed manner

* [ ] Retrieval process defined and validated

* [ ] Electronic records accessible on demand (not on offline tape)

* [ ] Software to open electronic records is available

* [ ] Access permissions configured correctly

* [ ] Backup restore process validated

* [ ] Retrieval time meets company standards

### 10.4 Common Availability Violations

#### Violation 1: Records Stored Off-Site, Cannot Be Retrieved Promptly

**Example**:

* FDA inspector asks for batch record from 6 months ago

* Records stored at off-site warehouse 200 miles away

* Cannot retrieve until next day
  **Impact**: Inspection delay, unfavorable impression
  **Severity**: MEDIUM
  **Best practice**: On-site storage for recent batches (1-2 years), rapid retrieval for older records

#### Violation 2: Electronic Records Require Obsolete Software

**Example**:

* Batch records from 10 years ago in proprietary format

* Software no longer available, vendor out of business

* Cannot open records
  **Impact**: Records effectively lost
  **Severity**: CRITICAL
  **Preventive action**: Data migration, open formats, reader software escrow

#### Violation 3: Records Misfiled, Cannot Be Located

**Example**:

* QA reviewer requests batch record for release

* Records clerk cannot locate batch record

* Batch found 3 days later in wrong file box
  **Impact**: Production delay, quality risk
  **Severity**: MEDIUM
  **Corrective action**: Improved indexing, barcode tracking, electronic record system

#### Violation 4: Access Controls Too Restrictive

**Example**:

* Electronic batch records require access approval from IT administrator

* Administrator on vacation, records inaccessible for a week
  **Impact**: Business disruption, inspection readiness failure
  **Severity**: MEDIUM
  **Solution**: Multiple authorized approvers, emergency access procedure

### 10.5 Availability Best Practices

**Organization and indexing:**

* Batch records filed by batch number, product, date

* Index database for quick search

* Barcode or RFID tracking for physical records

* Electronic document management system with search capability

**Retrieval process:**

* Define maximum retrieval time (e.g., 2 hours for on-site, 24 hours for off-site)

* Validate retrieval process

* Train personnel on retrieval procedure

* Emergency access procedure (after hours, weekends)

**Technology:**

* Electronic batch record systems with instant access

* Cloud storage with redundancy

* Rapid backup restore capability

* Mobile/remote access for authorized users

***

## 11. Data Integrity in Batch Record Review

### 11.1 How to Check for ALCOA+ Compliance During Review

**Systematic review approach by principle:**

| ALCOA+ Principle    | Review Action                                                    | Flag if Found                                               |
| ------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------- |
| **Attributable**    | Check all entries have signatures/user IDs; verify signature log | Unsigned entries, illegible signatures, shared logins       |
| **Legible**         | Verify all handwriting is readable; printouts are clear          | Illegible entries, faded printouts, smudges                 |
| **Contemporaneous** | Check timestamp logic; cross-reference with equipment logs       | Batch filling patterns, pre-signed pages, impossible timing |
| **Original**        | Verify raw data retained; audit trails complete                  | Transcription without originals, missing source data        |
| **Accurate**        | Recalculate values; cross-check with source data                 | Calculation errors, values don't match printouts            |
| **Complete**        | Check for all expected tests/signatures; review audit trail      | Missing results, deletions, incomplete audit trail          |
| **Consistent**      | Cross-reference related records; verify material balance         | Contradictory timestamps, quantity mismatches               |
| **Enduring**        | Verify storage conditions; check media durability                | Faded thermal paper, obsolete formats                       |
| **Available**       | Confirm retrieval time; test electronic access                   | Cannot locate records, access issues                        |

### 11.2 Red Flags Indicating Potential Data Integrity Issues

**High-risk patterns:**

1. **"Too perfect" data**

   * All results at midpoint of specification

   * No variation in repeated measurements

   * No OOS results ever

2. **Unusual patterns**

   * Same handwriting for different operators

   * All entries same ink/pen

   * Sequential batch records with identical unusual errors

3. **Timing anomalies**

   * Manufacturing during times with no staff scheduled

   * Identical timestamps for activities requiring hours

   * Signatures dated before activities

4. **Documentation gaps**

   * Missing pages or sections

   * Incomplete audit trails

   * No record of expected activities

5. **Cross-reference failures**

   * Batch record values don't match laboratory records

   * Equipment not logged as used when batch record says it was

   * Materials not dispensed but shown as used

**When red flags found:**

* Escalate to quality leadership

* Investigate immediately

* Quarantine affected batch(es)

* Assess impact on other batches

* Determine if regulatory notification needed

### 11.3 Common Data Integrity Findings in FDA Warning Letters

**Frequent citations (with examples):**

**1. Failure to ensure data integrity of electronic records**

> "Your firm failed to ensure the integrity of data generated by computerized systems. Specifically, analysts have full administrative access to the chromatography data system, allowing deletion of electronic data without audit trail."

**2. Failure to retain original data**

> "Your firm does not retain original analyst worksheets used to record observations during testing. Analysts transcribe summary data to the Certificate of Analysis and discard the worksheets."

**3. Inadequate audit trails**

> "Electronic batch manufacturing records lack complete audit trails. The system does not capture when records are deleted or modified, or by whom."

**4. Shared login credentials**

> "Multiple analysts share a common login credential to access the laboratory information management system (LIMS), preventing attribution of results to specific individuals."

**5. Falsification of data**

> "Our investigator reviewed the logbook for Balance ID #12 and noted that the balance was documented as 'Out of Service' for recalibration on March 15, 2024, yet batch records show balance weights recorded on this date. This indicates batch records were falsified."

### 11.4 FDA Data Integrity and Compliance With Drug CGMP Guidance

**Key points from FDA Guidance (December 2018):**

**Part 1: Creating Data with Integrity**

* Record activities at the time of performance

* Maintain accurate and complete records

* Provide training on data integrity

**Part 2: Ensuring Data Integrity Through Data Governance**

* Establish a global data integrity program

* Management oversight and leadership

* Regular audits of data integrity

**Part 3: Identifying and Addressing Data Integrity Issues**

* Systems to detect data integrity lapses

* Investigate fully, assess impact

* Implement CAPA

* Regulatory notification if needed

**FDA Expectations:**

* Proactive data integrity program, not reactive

* Senior management accountability

* Quality culture where data integrity is paramount

* Systems designed to prevent falsification

***

## 12. Electronic Records Considerations (21 CFR Part 11)

### 12.1 Scope of Part 11

**Applies when:**

* Electronic records are used in place of paper records

* Electronic signatures are used in place of handwritten signatures

* Records are required by predicate rules (21 CFR 211, etc.)

### 12.2 Key Requirements

#### System Validation (§11.10(a))

* System validated to ensure accuracy, reliability, consistent intended performance

* Ability to generate accurate and complete copies

* Protection of records to enable accurate and ready retrieval

#### Audit Trail (§11.10(e))

* Secure, computer-generated, time-stamped audit trail

* Capture: creation, modification, deletion of electronic records

* Reason for changes documented

* Cannot be disabled

#### Access Controls (§11.10(d))

* Unique user IDs

* Passwords or biometric controls

* Automatic logout after inactivity

* Access limited to authorized individuals

#### Electronic Signatures (§11.50, §11.70)

* Unique to one individual

* Not reused or reassigned

* Each signing must be executed by individual (not delegated)

* Signature components (user ID + password) used only by genuine owner

### 12.3 Part 11 Compliance Verification in Batch Record Review

**For electronic batch records:**

* [ ] System validated (validation documentation available)

* [ ] Audit trail functional and complete

* [ ] User access controls implemented (unique IDs, no sharing)

* [ ] Electronic signatures meet Part 11 (unique, secure, verified)

* [ ] Records retained in original electronic format (not just printouts)

* [ ] System backups performed and tested

* [ ] Change control for system modifications

***

## 13. Regulatory References

### 13.1 FDA Guidance and Regulations

* **21 CFR Part 211**: Current Good Manufacturing Practice for Finished Pharmaceuticals

  * Subpart J (§211.180-§211.198): Records and Reports

  * §211.186: Master production and control records

  * §211.188: Batch production and control records

  * §211.192: Production record review

  * §211.194: Laboratory records

* **21 CFR Part 11**: Electronic Records; Electronic Signatures (1997)

* **FDA Guidance for Industry: Data Integrity and Compliance With Drug CGMP (December 2018)**

* **FDA Guidance for Industry: Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production (October 2006)**

### 13.2 International Guidance

* **MHRA GxP Data Integrity Guidance and Definitions (March 2018)**

  * Originated the ALCOA+ framework

  * Detailed expectations for data integrity

* **WHO Technical Report Series No. 996, Annex 5: Guidance on Good Data and Record Management Practices (2016)**

  * Global data integrity framework

* **PIC/S PI 041-1: Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments (September 2021)**

  * Harmonized guidance for PIC/S member countries

* **EU GMP Chapter 4: Documentation**

  * Requirements for GMP documentation

* **EU GMP Annex 11: Computerised Systems**

  * Requirements for electronic systems

### 13.3 ICH Guidelines

* **ICH Q7: Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients**

  * Section 6: Documentation

  * Section 11.15: Out-of-Specification Results

***

## 14. Summary: Critical Data Integrity Review Points

**For automated batch record review systems, implement these ALCOA+ checks:**

### Attributability Checks

* [ ] All entries signed/attributed to specific individual

* [ ] Signatures legible or matched to signature log

* [ ] No shared login evidence in electronic records

* [ ] Timestamps present for time-critical activities

### Legibility Checks

* [ ] Handwriting readable

* [ ] Printouts clear and high quality

* [ ] No faded thermal paper

* [ ] No water damage or smudges

### Contemporaneous Checks

* [ ] Timestamp sequence is logical

* [ ] No evidence of batch filling (all entries same time)

* [ ] Process duration reasonable for activity type

* [ ] Cross-reference with equipment logs for consistency

### Original Data Checks

* [ ] Original printouts attached (not photocopies unless certified)

* [ ] Audit trails complete (electronic)

* [ ] Raw data retained (worksheets, calculations)

* [ ] No transcription without original retention

### Accuracy Checks

* [ ] Calculations mathematically correct (independent verification)

* [ ] Values match source data (printouts, instruments)

* [ ] Corrections made properly (single line, initial, date)

* [ ] No evidence of data manipulation

### Completeness Checks

* [ ] All required sections completed

* [ ] All tests performed are documented (including retests)

* [ ] OOS results present with investigation reference

* [ ] Audit trail has no gaps

### Consistency Checks

* [ ] Batch record dates align with equipment logs

* [ ] Material quantities consistent across records

* [ ] Timestamps consistent across related documents

* [ ] Material balance accurate

### Enduring/Available Checks (Administrative)

* [ ] Records stored in proper conditions

* [ ] Electronic backups verified

* [ ] Retrieval process validated

* [ ] Access controls appropriate

**Severity scoring:**

* **CRITICAL**: Falsification, missing label reconciliation, shared logins, missing OOS results

* **HIGH**: Missing original data, batch filling, incomplete audit trails

* **MEDIUM**: Calculation errors (non-critical), legibility issues (minor), missing signatures (non-critical steps)

**Any CRITICAL finding should trigger batch hold and full investigation before release.**

***

## Document Control

**Version**: 1.0\
**Effective Date**: 2024\
**Review Frequency**: Annual\
**Document Owner**: Quality Assurance\
**Approval**: \[QA Director]

**Revision History:**

| Version | Date | Changes         | Approved By |
| ------- | ---- | --------------- | ----------- |
| 1.0     | 2024 | Initial release | QA Director |

***

# Part 9: OOS Investigation Process

## Document Purpose and Scope

This knowledge base document provides comprehensive guidance on the Out-of-Specification (OOS) investigation process in pharmaceutical manufacturing. It is designed for Quality Assurance professionals, Quality Control analysts, manufacturing personnel, and automated batch record review systems.

**Definition**: An Out-of-Specification (OOS) result is any test result that falls outside the specifications or acceptance criteria established in official compendia, product dossier, Certificate of Analysis, or approved batch documentation.

**Importance**: OOS investigations are among the most scrutinized GMP activities during regulatory inspections. Improper handling of OOS results is a frequent FDA Warning Letter citation.

***

## 1. Regulatory Basis

### 1.1 US Regulations and Guidance

**21 CFR 211.192: Production record review**

> "All drug product production and control records, including those for packaging and labeling, shall be reviewed and approved by the quality control unit to determine compliance with all established, approved written procedures before a batch is released or distributed. Any unexplained discrepancy (including a percentage of theoretical yield exceeding the maximum or minimum percentages established in master production and control records) or the failure of a batch or any of its components to meet any of its specifications shall be thoroughly investigated, whether or not the batch has already been distributed."

**Key requirements from 21 CFR 211.192:**

* ALL OOS results must be investigated

* Investigation must be thorough

* Investigation required even if batch already distributed (may trigger recall)

* Cannot release batch until investigation is complete

**FDA Guidance for Industry: Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production (October 2006)**

* Establishes the phased approach to OOS investigation

* Defines expectations for laboratory and full-scale investigations

* Clarifies unacceptable practices (averaging OOS with passing results, testing into compliance)

### 1.2 International Regulations

**EU GMP Chapter 6: Quality Control**

* Section 6.17: "Any OOS results should be investigated according to an approved procedure. Records should be maintained."

**ICH Q7: Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients**

* Section 11.15: "An investigation should be initiated if the results are within specification, but at the edge of acceptance criteria"

* Section 11.15: "All OOS results should be thoroughly investigated"

**WHO TRS 986 Annex 2: WHO good manufacturing practices for pharmaceutical products: main principles (2014)**

* Requires investigation of OOS results, unexpected discrepancies

**PIC/S Guide to Good Manufacturing Practice for Medicinal Products**

* Aligns with EU GMP requirements for OOS investigation

### 1.3 Regulatory Enforcement Trends

**FDA Warning Letter common citations:**

* Inadequate OOS investigation (most common)

* Retesting without investigation

* Averaging OOS results with passing results

* Generic or inadequate root cause determination

* Failure to extend investigation to other batches

* Failure to document complete investigation

* Laboratory investigation not completed before proceeding to Phase II

**Consequences of inadequate OOS handling:**

* Warning Letters

* Import Alerts

* Consent Decrees

* Product seizures

* Injunctions

* Criminal prosecution (in cases of fraud/falsification)

***

## 2. Definition and Scope

### 2.1 What Constitutes an OOS Result

**An OOS result is ANY test result that does not meet pre-defined acceptance criteria:**

#### Quantitative Tests

* Assay outside specification range (e.g., spec: 95.0-105.0%, result: 94.8%)

* Dissolution outside acceptance criteria (e.g., spec: NLT 80% at 30 min, result: 78%)

* Impurities above limit (e.g., spec: NMT 0.5%, result: 0.6%)

* Weight variation outside limits

#### Qualitative Tests

* Identity test failure (IR spectrum doesn't match reference)

* Appearance not meeting description (wrong color, defects)

* Foreign matter present when spec says "absent"

#### Microbial Tests

* Bioburden above limit

* Specific pathogen detected when spec says "absent"

* Sterility test failure

#### Physical Tests

* Hardness outside range

* Disintegration time exceeds limit

* pH outside specification

### 2.2 OOS vs. OOT (Out-of-Trend) vs. OOE (Out-of-Expectation)

**OOS (Out-of-Specification):**

* Result fails to meet specification

* **Action required**: Full investigation per OOS procedure

* **Batch impact**: Hold pending investigation

**OOT (Out-of-Trend):**

* Result is within specification BUT is outside historical trend limits (e.g., >3 standard deviations from mean)

* **Action required**: Investigation per trending procedure (may be less intensive than OOS)

* **Batch impact**: Typically can release if within spec and no quality concern identified

**OOE (Out-of-Expectation):**

* Result is within specification BUT is unexpected based on process knowledge

* Example: New intermediate shows 10% higher impurity than ever seen before, still within spec

* **Action required**: Investigation to understand why result is atypical

* **Batch impact**: Typically can release if within spec and investigation confirms no quality issue

**Important distinction**: This document focuses on OOS results. OOT and OOE have separate, typically less rigorous investigation requirements.

### 2.3 When OOS Investigation is Triggered

**OOS investigation MUST be initiated when:**

* Any test result falls outside specification

* Calculated value (after valid averaging or statistical treatment) falls outside specification

* Qualitative observation does not meet acceptance criteria

* Equipment indicates a failure condition (e.g., autoclave cycle abort)

**OOS investigation is NOT required when:**

* Result is within specification (even if at edge) - unless OOT or OOE

* Confirmed laboratory error found DURING testing, before result is finalized (e.g., analyst spills sample, immediately documents and retests)

* Result is from a preliminary or exploratory test (not GMP-required)

**Critical point**: OOS investigation applies to ALL testing, not just final release testing:

* In-process testing (IPC)

* Raw material testing

* Stability testing

* Retained sample testing

* Validation testing

### 2.4 Scope of Investigation

**Every OOS investigation must address:**

1. **Laboratory assessment**: Was there a laboratory error?
2. **Manufacturing assessment**: Was there a manufacturing deviation?
3. **Root cause**: What was the underlying cause?
4. **Impact assessment**: What batches/materials are affected?
5. **Corrective action**: What will fix the immediate problem?
6. **Preventive action**: What will prevent recurrence?
7. **Conclusion**: Is the OOS result valid? What is the batch disposition?

***

## 3. Phase I: Laboratory Investigation

### 3.1 Purpose and Scope of Phase I

**Goal**: Determine if there was an assignable laboratory error that invalidates the OOS result.

**Timeline**: Must be completed promptly, typically within 1-3 business days (company-specific; should be defined in SOP).

**Restriction**: Phase I is LIMITED to laboratory assessment. Do NOT proceed to manufacturing investigation until Phase I is complete.

**Key principle**: An assignable laboratory error is a documented error that can be confirmed to have caused the OOS result. "Possible" or "suspected" errors are NOT sufficient to invalidate results.

### 3.2 Immediate Actions Upon OOS Result

**Step 1: Immediate notification (same day, preferably within hours)**

* Analyst notifies supervisor immediately upon recognizing OOS result

* Supervisor notifies QA Management

* QA notifies Manufacturing (to place batch on hold if not already)

* Documentation: OOS notification form or electronic system entry

**Step 2: Secure evidence**

* Retain sample (do NOT discard)

* Retain all raw data (printouts, worksheets, electronic files)

* Retain reagents and standards used (if feasible)

* Photograph unusual observations (if applicable)

* Lock audit trails (electronic systems)

**Step 3: Initiate investigation documentation**

* Open OOS investigation report (unique ID assigned)

* Link to batch record

* Assign investigation owner (typically QA or Laboratory Supervisor)

* Set timeline for Phase I completion

### 3.3 Phase I Investigation Steps

**The analyst and supervisor must systematically evaluate:**

#### Step 1: Review Analyst Technique and Procedure Compliance

**Questions to answer:**

* Did analyst follow the approved SOP exactly?

* Were correct sample preparation steps performed?

* Were correct calculations used?

* Was correct equipment used?

**How to verify:**

* Interview analyst (within 24 hours while memory is fresh)

* Review analyst training records (is analyst qualified on this method?)

* Review analyst's raw data worksheets

* Check for deviations from SOP

* Observe analyst performing the test (if technique suspected)

**Assignable errors that may be found:**

* Incorrect sample weight or volume used

* Wrong dilution factor applied

* Calculation error (mathematical)

* Incorrect reagent used

* Procedure step omitted or performed incorrectly

* Sample contamination (documented)

#### Step 2: Check Sample Integrity and Handling

**Questions to answer:**

* Was the correct sample tested?

* Was sample properly identified and labeled?

* Was sample stored correctly before testing?

* Could sample have been contaminated or degraded?

**How to verify:**

* Check sample label vs. logbook entry

* Check sample storage conditions (temperature log)

* Check sample age vs. stability limits

* Interview sample handler

* Check chain of custody

**Assignable errors that may be found:**

* Wrong sample tested (sample mix-up)

* Sample exposed to conditions causing degradation

* Contaminated container

* Sample beyond stability hold time

#### Step 3: Review Instrument Function and Calibration

**Questions to answer:**

* Was instrument operating properly?

* Was instrument within calibration?

* Did system suitability pass?

* Were instrument settings correct?

**How to verify:**

* Check calibration status and dates

* Check maintenance records

* Review system suitability results (for chromatography)

* Check instrument logbook for error messages or issues

* Review acceptance criteria for instrument performance

**Assignable errors that may be found:**

* Instrument out of calibration (discovered AFTER the test)

* System suitability failure (missed by analyst)

* Detector malfunction

* Incorrect instrument parameters programmed

#### Step 4: Verify Reagents and Standards

**Questions to answer:**

* Were correct reagents used?

* Were reagents within expiration/retest dates?

* Were reagents properly prepared?

* Were correct standards used?

* Were standards within use period?

**How to verify:**

* Check reagent/standard labels vs. procedure requirements

* Check preparation date vs. use period

* Check expiration dates

* Review standard/reagent preparation records

* Check storage conditions

**Assignable errors that may be found:**

* Expired reagent used

* Wrong reagent used (e.g., wrong concentration)

* Standard preparation error

* Degraded reagent (beyond use date)

#### Step 5: Review Calculations

**Questions to answer:**

* Are all calculations mathematically correct?

* Were correct formulas used?

* Were correct units used?

* Were correct dilution factors applied?

**How to verify:**

* Independent recalculation by second person

* Check formula against SOP

* Check unit conversions

* Verify all values used in calculation

**Assignable errors that may be found:**

* Mathematical error

* Wrong formula used

* Decimal point error

* Unit conversion error

* Transcription error from instrument to worksheet

### 3.4 Phase I Outcomes

**Outcome 1: Assignable laboratory error found**

* **Requirement**: Error must be documented and confirmed to have caused the OOS

* **Action**:

  * Invalidate the OOS result

  * Document the error and how it was confirmed

  * Correct the error

  * Re-test the original sample (if still valid) OR obtain new sample

  * If re-test passes, batch may proceed (if all other specs met)

  * If re-test also fails, proceed to Phase II

* **Documentation**: Complete description of error, how it was found, why it invalidates result

* **FDA position**: "Suspect" or "possible" errors are NOT sufficient; error must be confirmed

**Outcome 2: No assignable laboratory error found**

* **Assumption**: The OOS result is valid

* **Action**: Proceed immediately to Phase II (full-scale investigation)

* **Re-testing**: May be performed in Phase II, but Phase I must conclude first

* **Documentation**: Document that Phase I investigation was thorough and no laboratory error was found

**Outcome 3: Inconclusive**

* **FDA position**: If laboratory error cannot be confirmed, assume the OOS result is valid

* **Action**: Proceed to Phase II

* **NOT acceptable**: Invalidate result based on "suspected" error without confirmation

### 3.5 Prohibited Practices in Phase I

**FDA guidance explicitly prohibits these practices:**

#### Prohibited Practice 1: Retesting Without Investigation

**What it is**:

* OOS result obtained

* Firm immediately retests without investigating the OOS

* Uses passing results, discards or ignores OOS

**Why prohibited**:

* OOS result may indicate real quality problem

* "Testing into compliance" hides problems

* Patient safety risk

**FDA position**:

> "Retesting and averaging to achieve a passing result is unacceptable. It is never acceptable to selectively report test results that meet specifications while discarding test results that do not meet specifications."

**Example Warning Letter citation**:

> "Your firm failed to thoroughly investigate OOS results. Specifically, when dissolution testing for Batch XXX yielded an OOS result (78%), the sample was retested, and the passing result (85%) was reported while the OOS result was not documented in the batch record."

#### Prohibited Practice 2: Averaging OOS with Passing Results

**What it is**:

* Triplicate testing performed

* Results: 94%, 96%, 102% (specification: 95-105%)

* Firm calculates average: 97.3% (passes)

* Reports batch as passing without OOS investigation

**Why prohibited**:

* The 94% result is OOS and must be investigated

* Averaging may hide real problems

* May only average if the test method explicitly allows it (and all individual results must still meet specs)

**FDA position**:

> "When individual test results vary considerably, averaging may obscure the presence of outlier results that may be indicative of problems with the manufacturing process or test method."

#### Prohibited Practice 3: Generic "Analyst Error" Without Specifics

**What it is**:

* OOS result obtained

* Investigation conclusion: "Analyst error"

* No specific error identified or confirmed

* Result invalidated and re-test performed

**Why prohibited**:

* Not an assignable cause (too vague)

* Cannot verify error actually occurred

* Cannot implement effective CAPA

**FDA position**:

* Generic conclusions like "analyst error," "equipment malfunction," or "instrument error" without specifics are inadequate

**Acceptable alternative**:

* "Analyst used incorrect dilution factor (1:10 instead of 1:100 as required by SOP), confirmed by reviewing analyst worksheet calculations and interviewing analyst who acknowledged the error."

#### Prohibited Practice 4: Not Investigating Because Result is "Close" to Specification

**What it is**:

* Specification: NMT 1.0%

* Result: 1.02%

* Firm considers this "essentially passing" and does not investigate

**Why prohibited**:

* 1.02% is OOS, period

* Specification limits are established for a reason

* Must investigate ALL OOS results

**FDA position**:

* No exceptions; even marginally OOS results require full investigation

#### Prohibited Practice 5: Incomplete Laboratory Investigation

**What it is**:

* Only some aspects of Phase I are reviewed

* Example: Check instrument calibration only, don't review analyst technique or calculations

**Why prohibited**:

* Incomplete investigation may miss the actual error

* May proceed to Phase II unnecessarily or invalidate result inappropriately

**FDA expectation**:

* Phase I must be thorough and systematic

* All potential laboratory error sources must be evaluated

### 3.6 Documentation Requirements for Phase I

**Required elements in Phase I report:**

1. **OOS result details**

   * Product name, batch number, lot number (if material)

   * Test performed

   * Specification/acceptance criteria

   * OOS result value

   * Date and time result was obtained

   * Analyst who performed test

2. **Notification records**

   * Date/time supervisor notified

   * Date/time QA notified

   * Date/time manufacturing notified

   * Evidence placed on hold

3. **Investigation steps performed**

   * Checklist or narrative of each aspect reviewed

   * Analyst interview notes

   * Equipment/instrument checks performed

   * Reagent/standard verifications

   * Calculation verifications

   * Sample integrity checks

4. **Findings**

   * What was found in each area investigated

   * Any deviations from procedure noted

   * Any unusual observations

5. **Conclusion**

   * Was assignable laboratory error found? (Yes/No)

   * If YES: Detailed description of error and confirmation

   * If NO: Statement that investigation was thorough and no error found

6. **Follow-up actions**

   * If error found: Re-test plan

   * If no error found: Proceed to Phase II

   * Timeline for completion

7. **Approvals**

   * Performed by: Analyst and/or Lab Supervisor (signature, date)

   * Reviewed by: QA (signature, date)

   * Date Phase I completed

***

## 4. Phase II: Full-Scale Investigation

### 4.1 Purpose and Scope of Phase II

**Goal**: Determine the root cause of the OOS result and assess impact on product quality and other batches.

**When initiated**:

* Immediately after Phase I concludes with "no assignable laboratory error found"

* OR after re-test following Phase I error also yields OOS result

**Timeline**: Typically 30 calendar days (may be extended with documented justification)

**Scope**: Expanded beyond laboratory to include:

* Manufacturing process review

* Raw material review

* Equipment review

* Environmental conditions

* Other potentially affected batches

* Additional testing

### 4.2 Phase II Investigation Components

#### Component 1: Manufacturing Process Review

**Review batch production record thoroughly:**

| Aspect                       | Questions to Address                               | Data Sources                                  |
| ---------------------------- | -------------------------------------------------- | --------------------------------------------- |
| **Process parameters**       | Were all critical process parameters within range? | Batch record, equipment logs, electronic data |
| **Timing**                   | Were process steps performed within time limits?   | Batch record timestamps, equipment logs       |
| **Personnel**                | Were operators trained and qualified?              | Training records, qualification records       |
| **Deviations**               | Were any deviations or incidents documented?       | Deviation reports, batch record notes         |
| **Previous steps**           | Could a problem in an earlier step cause this OOS? | Entire batch record, IPC results              |
| **Equipment function**       | Did all equipment operate normally?                | Equipment use logs, maintenance records       |
| **Environmental conditions** | Were cleanroom/temperature/humidity within range?  | Environmental monitoring records              |

**Specific areas of focus based on OOS type:**

* **Assay OOS (low)**:

  * Incomplete reaction/mixing

  * Material degradation

  * Low-potency raw material

  * Weight/volume errors in processing

* **Assay OOS (high)**:

  * Formulation error

  * Wrong material added

  * Calculation error in formula

* **Impurities OOS (high)**:

  * Degradation (heat, moisture, light)

  * Raw material quality

  * Cross-contamination

  * Equipment residue

* **Dissolution OOS**:

  * Granulation quality (particle size, hardness)

  * Compression force

  * Disintegrant effectiveness

  * Coating thickness

* **Microbial OOS**:

  * Contamination source (water, materials, environment, personnel)

  * Sanitization effectiveness

  * Environmental monitoring trends

#### Component 2: Raw Material Review

**For all materials used in the batch:**

* [ ] Verify correct materials were used (part numbers, lot numbers)

* [ ] Check Certificate of Analysis (COA) for each lot - all specs met?

* [ ] Review any retest dates or expiration dates

* [ ] Check for complaints or issues with material lots

* [ ] Review supplier qualification status

* [ ] Consider if material could contribute to OOS (e.g., low-potency API for low assay OOS)

**Red flags:**

* Raw material lot at edge of specification

* Raw material from new or unqualified supplier

* Material stored improperly

* Material beyond retest/expiration date

#### Component 3: Equipment Review

**For all equipment used in manufacturing and testing:**

| Equipment Type            | Review Focus                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Processing equipment**  | Calibration status, maintenance records, cleaning verification, previous batch residue, malfunction history |
| **Environmental systems** | HVAC performance, filter integrity, temperature/humidity excursions                                         |
| **Monitoring equipment**  | Calibration, alarm history, data integrity                                                                  |
| **Testing instruments**   | Calibration, suitability, performance qualification, maintenance                                            |

**Questions:**

* Was equipment qualified and validated for this use?

* Has equipment performed reliably for recent batches?

* Were there any unusual observations during use?

* Is equipment due for preventive maintenance or requalification?

#### Component 4: Environmental Conditions Review

**Check environmental monitoring data for the time period of batch manufacturing:**

* [ ] Cleanroom classification maintained (viable and non-viable particulate)

* [ ] Temperature and humidity within range

* [ ] Differential pressure maintained

* [ ] No environmental monitoring excursions or alerts

* [ ] Personnel gowning compliance

* [ ] Cleaning/sanitization completed per schedule

**Consider:**

* Seasonal variations (high humidity in summer, static in winter)

* Facility modifications or maintenance activities

* Increased traffic or activities nearby

* HVAC performance issues

#### Component 5: Review of Other Batches

**Critical component of Phase II: Assess whether the issue is batch-specific or broader.**

**Batches to review:**

1. **Batches manufactured around the same time** (±1-2 weeks)
2. **Batches using same raw material lots**
3. **Batches manufactured on same equipment**
4. **Batches of same product** (if issue is product-related)

**For each batch reviewed:**

* Check for similar OOS results or trends toward OOS

* Review batch records for similar deviations or issues

* Review IPC and release test results

* Consider additional testing if already released to market

**Impact assessment:**

* If other batches also affected: Broader investigation and potential recall

* If issue is isolated to one batch: Root cause likely batch-specific

#### Component 6: Additional Testing

**Purpose**: Gather more data to support root cause determination.

**Types of additional testing:**

**Re-sampling and re-testing:**

* Obtain new sample from same batch

* Test by original method

* Test by alternate method (if available)

* Evaluate whether OOS is repeatable

**Reserve/retain sample testing:**

* Test retain sample (if available and stable)

* Provides information on whether issue was with original sample or entire batch

**Expanded testing:**

* Test additional units from batch

* Test for related quality attributes (e.g., if dissolution fails, check hardness, disintegration)

* Test for degradation products (if stability-related)

**Method verification:**

* Perform method suitability/robustness studies

* Spike samples to verify method performance

* Ruggedness testing if method suspected

**Important**: Additional testing does NOT replace investigation. Cannot "test into compliance." Additional testing informs root cause understanding.

### 4.3 Root Cause Determination

**Root cause**: The fundamental reason the OOS occurred, such that if corrected, the problem will not recur.

**Root cause is NOT:**

* Generic statement: "operator error," "equipment malfunction"

* Symptom: "sample was contaminated" (root cause: HOW did it become contaminated?)

* Obvious problem: "sample exposed to heat" (root cause: WHY was it exposed to heat? Control failure?)

**Acceptable root causes are specific and actionable:**

* "Operator did not follow SOP for blending time because training was inadequate on the importance of full blending duration"

* "Drying oven temperature controller failed, causing over-temperature condition that degraded material. Controller was past calibration due date, and calibration management system did not generate alert."

* "Raw material lot XX123 contained elevated impurity levels, which carried through to finished product. Supplier did not test for this impurity, and our incoming testing did not detect it."

**Root cause analysis tools:**

* **5 Whys**: Ask "why" repeatedly to dig deeper

* **Fishbone (Ishikawa) diagram**: Categorize potential causes (man, machine, material, method, environment)

* **Fault tree analysis**: For complex system failures

* **FMEA**: Failure Modes and Effects Analysis

**Outcome scenarios:**

1. **Root cause identified**: Clear, specific cause found with evidence
2. **Multiple contributing factors**: Several issues contributed (document all)
3. **Inconclusive**: Cannot determine definitive root cause despite thorough investigation

### 4.4 Documentation Requirements for Phase II

**Phase II investigation report must include:**

1. **Executive Summary**

   * Product, batch, test, OOS result

   * Phase I conclusion

   * Phase II scope and timeline

   * Root cause conclusion

   * Batch disposition

   * CAPA summary

2. **Detailed Investigation Sections**

   **A. Manufacturing Process Review**

   * Summary of batch record review

   * Critical process parameters - all within range? (table format)

   * Deviations or unusual occurrences noted

   * Operator interviews

   * Conclusion: Any manufacturing issues identified?

   **B. Raw Material Review**

   * List of all materials used (lot numbers, COA status)

   * Any material quality concerns?

   * Material storage and handling review

   * Conclusion: Materials ruled in/out as root cause?

   **C. Equipment Review**

   * List of equipment used

   * Calibration status

   * Maintenance status

   * Performance history

   * Conclusion: Equipment ruled in/out as root cause?

   **D. Environmental Review**

   * Environmental monitoring data summary

   * Any excursions or trends

   * Conclusion: Environment ruled in/out as root cause?

   **E. Other Batches Review**

   * List of batches evaluated (identification, dates, status)

   * Summary of findings for each

   * Conclusion: Issue isolated or widespread?

   **F. Additional Testing**

   * What additional tests were performed and why

   * Results of additional testing

   * How results inform root cause understanding

3. **Root Cause Analysis**

   * Method used (5 Whys, fishbone, etc.)

   * Analysis details (diagram if applicable)

   * Root cause conclusion (specific, actionable)

   * Evidence supporting root cause

   * If inconclusive: Why root cause could not be determined

4. **Impact Assessment**

   * Is the OOS result confirmed as valid?

   * Does the batch meet quality standards for its intended use?

   * What other batches are potentially affected?

   * Have any affected batches been released/distributed?

   * Is regulatory notification required?

   * Is customer notification or recall required?

5. **Corrective and Preventive Actions (CAPA)**

   * See Phase III section below

6. **Batch Disposition Decision**

   * Recommendation: Release, Reject, Reprocess, Rework

   * Justification for disposition

   * If release recommended despite OOS: Detailed scientific justification

7. **Approvals**

   * Investigation performed by: \[name, signature, date]

   * Reviewed by QA: \[name, signature, date]

   * Reviewed by QC: \[name, signature, date]

   * Reviewed by Manufacturing: \[name, signature, date]

   * Approved by QA Director: \[name, signature, date]

   * Final disposition approved by: \[name, signature, date]

8. **Attachments**

   * Supporting data (test results, charts, equipment logs)

   * Interview notes

   * Calculation worksheets

   * Photographs

   * Root cause analysis diagrams

   * References to related documents (deviations, CAPAs, change controls)

***

## 5. Phase III: Corrective and Preventive Action (CAPA)

### 5.1 Purpose of CAPA

**Corrective Action**: Immediate actions to address the specific problem and prevent defective product from reaching patients.

**Preventive Action**: Long-term actions to eliminate the root cause and prevent recurrence of similar issues.

### 5.2 Corrective Actions

**Based on root cause, corrective actions may include:**

| Root Cause Category        | Typical Corrective Actions                                                                               |
| -------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Procedure inadequate**   | Revise SOP, provide enhanced training, implement additional controls                                     |
| **Training gap**           | Retrain affected personnel, assess training program effectiveness, competency re-verification            |
| **Equipment malfunction**  | Repair or replace equipment, increase maintenance frequency, implement backup equipment                  |
| **Material quality**       | Reject material lot, contact supplier, implement additional incoming testing, qualify alternate supplier |
| **Environmental**          | Investigate HVAC system, increase monitoring frequency, improve cleaning/sanitization                    |
| **Contamination**          | Enhanced cleaning validation, eliminate cross-contamination risk, segregate operations                   |
| **Calculation/data error** | Implement automated calculation tools, require dual verification, redesign forms                         |

**Immediate corrective actions for the specific batch:**

* Quarantine batch (if not already)

* Prevent use of defective materials

* Remove defective equipment from service

* Stop affected operations until correction implemented

**Immediate actions for other potentially affected batches:**

* Identify all potentially affected batches

* Place on hold pending evaluation

* Perform additional testing if needed

* Assess disposition for each batch

### 5.3 Preventive Actions

**Goal**: Eliminate root cause and prevent recurrence.

**Preventive actions should be:**

* **Specific**: Directly address the root cause

* **Measurable**: Have defined success criteria

* **Sustainable**: Long-term solutions, not temporary fixes

* **Verified**: Effectiveness will be checked

**Examples of strong preventive actions:**

**Example 1: Root cause - Inadequate blend time led to low content uniformity**

* Preventive action:

  * Revise blending SOP to increase blend time from 10 to 15 minutes (based on validation study)

  * Install blend time monitoring system with automatic alert if <15 minutes

  * Re-validate blending process with extended time

  * Train all blending operators on updated procedure

  * Implement quarterly blend uniformity trending

**Example 2: Root cause - Instrument calibration lapsed, causing inaccurate results**

* Preventive action:

  * Implement automated calibration due date alerts (email to lab manager 30 days before due date)

  * Add instrument calibration status check to batch record pre-start checklist

  * Quarterly audit of calibration program by QA

  * Instrument lockout feature if past calibration date (for new instruments)

**Example 3: Root cause - Supplier material contained impurity not controlled**

* Preventive action:

  * Revise material specification to include impurity limit

  * Update incoming testing to include impurity test

  * Require supplier to implement impurity testing with each batch

  * Audit supplier to verify impurity control

  * Qualify alternate supplier as backup

### 5.4 CAPA Effectiveness Verification

**Each CAPA must have a plan to verify effectiveness:**

**Verification methods:**

* **Trending**: Monitor relevant quality attributes over time (e.g., 3-6 months)

* **Re-audit**: Audit the process/procedure to confirm implementation

* **Re-testing**: Challenge the system to confirm problem doesn't recur

* **Statistical analysis**: Demonstrate process capability improvement

**Timeline for verification:**

* Define when effectiveness will be assessed (e.g., after 5 batches, after 6 months)

* Assign responsibility for verification

* Define acceptance criteria for effectiveness

**Example verification plan:**

```
CAPA: Revised blending time from 10 to 15 minutes

Effectiveness Verification:
- Monitor blend uniformity results for next 10 batches
- Acceptance: All batches meet content uniformity specs (RSD <3.0%)
- Responsible: QA Manager
- Timeline: After 10 batches manufactured (expected 3 months)
- Review Date: [Specific date]
```

### 5.5 CAPA Documentation

**CAPA report must include:**

1. Link to OOS investigation
2. Root cause being addressed
3. Corrective actions (list with responsible person and target date for each)
4. Preventive actions (list with responsible person and target date for each)
5. Effectiveness verification plan
6. Status tracking (open, in progress, completed, verified)
7. Approvals

***

## 6. Batch Disposition After OOS

### 6.1 Disposition Options

**Option 1: REJECT**

* **When**: OOS confirmed, root cause indicates product does not meet quality standards

* **Most common outcome** when OOS is confirmed

* **Regulatory expectation**: Cannot release product that doesn't meet specifications

**Option 2: RELEASE (with justification)**

* **When**:

  * OOS invalidated due to confirmed laboratory error (after successful re-test), OR

  * OOS confirmed BUT thorough investigation demonstrates product is still safe and efficacious for intended use (rare, requires extensive scientific justification)

* **Requirements**:

  * Complete investigation

  * Scientific justification (must be compelling)

  * Risk assessment

  * QA approval

  * Regulatory notification may be required (depending on jurisdiction)

**Option 3: REPROCESS**

* **When**: Product can be brought into specification by reprocessing per validated procedure

* **Requirements**:

  * Reprocessing procedure validated

  * Reprocessing does not compromise quality

  * Reprocessed batch re-tested and meets all specifications

  * New batch number assigned or documentation links original to reprocessed batch

**Option 4: REWORK**

* **When**: Product can be brought into specification by rework (less extensive than reprocessing)

* **Example**: Re-tableting, re-coating, re-blending

* **Requirements**: Same as reprocessing

**Option 5: ADDITIONAL INVESTIGATION**

* **When**: Investigation inconclusive, need more data

* **Timeline extension**: Document why more time is needed

### 6.2 Cannot Release Batch Until Investigation is Complete

**Regulatory requirement**: Batch MUST remain on hold until OOS investigation is complete and disposition decision is made by QA.

**Timeline considerations:**

* Batch may be approaching expiration date during investigation

* Commercial pressure to release

* **These do NOT justify releasing batch before investigation complete**

**FDA position**:

> "Batches should not be released until the investigation is complete and the results have been evaluated by the quality unit."

### 6.3 Disposition Decision Documentation

**Required elements:**

1. Summary of investigation findings
2. Root cause (if identified)
3. Whether OOS is confirmed or invalidated
4. Disposition decision (Reject, Release, Reprocess, etc.)
5. Justification for disposition (especially if releasing despite OOS)
6. Risk assessment (if releasing)
7. Impact on other batches
8. Approval signatures (QA Director minimum, may require additional approvals)

### 6.4 Special Case: Releasing Despite Confirmed OOS

**This is RARE and requires exceptional justification.**

**Possible scenarios:**

* OOS is marginal, investigation confirms it's due to test variability (not product issue), and extensive additional testing demonstrates product is consistently in spec

* Potency slightly low (e.g., 94.5% vs. 95.0% spec) but stability data shows product remains above label claim throughout shelf life

* Patient need (critical shortage) and risk assessment shows minimal risk

**Requirements if releasing despite OOS:**

* Comprehensive scientific justification addressing:

  * Why product is still safe and effective

  * What additional controls or testing supports release

  * Risk assessment (very low risk)

  * Regulatory precedent (if available)

* Multiple levels of approval (QA Director, Medical Director, Regulatory Affairs)

* May require regulatory notification and approval (varies by region)

* Enhanced post-market surveillance

**FDA is highly skeptical of this approach. Use only when scientifically sound and patient benefit clearly outweighs risk.**

***

## 7. Common OOS Investigation Failures (FDA Citations)

### 7.1 Inadequate Phase I Investigation

**Example FDA Warning Letter citation:**

> "Your laboratory OOS investigations are inadequate. For example, your OOS investigation for Batch XXX assay result (94.3%) consisted only of checking instrument calibration. The investigation did not evaluate analyst technique, sample handling, calculations, or reagents."

**Why inadequate**: Phase I must be thorough, not just a single check.

**Corrective action**: Implement OOS investigation checklist ensuring all Phase I elements are addressed.

### 7.2 Not Investigating All OOS Results

**Example FDA Warning Letter citation:**

> "Your firm failed to investigate OOS results for in-process testing. Specifically, 12 batches in 2023 had blend uniformity results below the acceptance criteria (RSD >5%), but no OOS investigations were initiated because the batches were subsequently reblended and retested with passing results."

**Why inadequate**: ALL OOS results must be investigated, including in-process tests. Re-testing/reprocessing does not eliminate the need for investigation.

**Corrective action**: Expand OOS procedure to explicitly cover in-process testing, raw materials, and stability testing.

### 7.3 Retesting Without Investigation

**Example FDA Warning Letter citation:**

> "Your firm repeatedly retests OOS samples without conducting an investigation. For example, dissolution testing for Batch YYY yielded results of 76%, 78%, 82%, 85%, and 88% in five sequential tests. Only the final result (88%) was reported in the batch record."

**Why inadequate**: This is "testing into compliance" and is prohibited. First OOS (76%) should have triggered investigation immediately.

**Corrective action**: Revise procedure to require investigation BEFORE any re-testing.

### 7.4 Averaging OOS Results with Passing Results

**Example FDA Warning Letter citation:**

> "Your firm averages OOS results with passing results to obtain a reportable value within specifications. For example, assay testing of Batch ZZZ yielded results of 94.2%, 98.5%, and 97.8%. Your firm reported the average (96.8%) without investigating the OOS result (94.2%)."

**Why inadequate**: Individual OOS results must be investigated even if average passes.

**Corrective action**: Investigate any individual result that is OOS, regardless of average.

### 7.5 Generic Root Cause

**Example FDA Warning Letter citation:**

> "Your OOS investigations routinely conclude with generic root causes such as 'analyst error' or 'instrument error' without identifying the specific error or providing evidence that the error occurred."

**Why inadequate**: Root cause must be specific and evidence-based.

**Corrective action**: Require detailed description of root cause with supporting evidence. Train investigators on root cause analysis methods.

### 7.6 Not Assessing Impact on Other Batches

**Example FDA Warning Letter citation:**

> "Your OOS investigation for Batch AAA concluded that raw material Lot #12345 contained elevated impurities causing the OOS. However, your firm did not evaluate whether other batches manufactured with the same raw material lot were affected."

**Why inadequate**: Phase II must include assessment of other potentially affected batches.

**Corrective action**: Add explicit requirement to identify and assess other batches in Phase II.

### 7.7 Incomplete Documentation

**Example FDA Warning Letter citation:**

> "OOS investigation reports lack key information including: the specific laboratory procedures followed during Phase I, the results of the investigation steps, and the scientific justification for invalidating OOS results."

**Why inadequate**: Documentation must be complete to demonstrate investigation was thorough.

**Corrective action**: Implement OOS investigation template with required sections. Train personnel on documentation requirements.

### 7.8 Releasing Batch Before Investigation Complete

**Example FDA Warning Letter citation:**

> "Batch BBB was released to distribution on 3/20/2024 while the OOS investigation for a failed dissolution test was still ongoing. The investigation was not completed until 4/5/2024."

**Why inadequate**: Batch must not be released until investigation complete and disposition decision made.

**Corrective action**: System control to prevent batch release when OOS investigation is open.

***

## 8. OOS in Batch Record Review Context

### 8.1 How Automated Review Should Flag OOS Results

**Automated batch record review systems should:**

1. **Identify all test results in the batch record**

   * In-process tests

   * Release tests

   * Environmental monitoring (if included)

2. **Compare each result to specification**

   * Extract specification limits from approved batch record or specification document

   * Flag any result outside limits

3. **Check for OOS investigation documentation**

   * Search for linked OOS investigation report

   * Verify investigation is complete

   * Verify investigation is approved

4. **Verify investigation completeness**

   * Phase I documented

   * Phase II documented (if Phase I found no laboratory error)

   * Root cause identified

   * CAPA documented

   * Disposition decision made and approved

5. **Flag if investigation inadequate**

   * Missing investigation

   * Investigation incomplete

   * Generic root cause

   * No assessment of other batches

   * No CAPA

   * Batch released before investigation complete

### 8.2 Checking for Presence of Investigation Documentation

**Automated system should verify:**

* [ ] OOS result has corresponding investigation ID/reference number in batch record

* [ ] Investigation report exists (linked or filed)

* [ ] Investigation status: Complete (not draft or in-progress)

* [ ] Investigation approved by QA

* [ ] Batch disposition decision documented and approved

* [ ] If batch released: Investigation concluded OOS was invalidated OR scientifically justified release

### 8.3 Verifying Investigation Completeness

**Automated review checklist:**

**Phase I:**

* [ ] Phase I investigation report exists

* [ ] Date Phase I completed documented

* [ ] All Phase I elements addressed (analyst technique, sample, instrument, reagents, calculations)

* [ ] Conclusion: assignable error found OR no error found

**Phase II (if required):**

* [ ] Phase II investigation report exists

* [ ] Manufacturing process reviewed

* [ ] Raw materials reviewed

* [ ] Equipment reviewed

* [ ] Environmental conditions reviewed

* [ ] Other batches assessed

* [ ] Additional testing performed (if applicable)

* [ ] Root cause identified (or documented as inconclusive)

**CAPA:**

* [ ] CAPA report exists and linked

* [ ] Corrective actions defined with owners and dates

* [ ] Preventive actions defined with owners and dates

* [ ] Effectiveness verification plan defined

**Disposition:**

* [ ] Disposition decision documented (Reject, Release, Reprocess)

* [ ] Justification provided

* [ ] QA approval obtained

### 8.4 Impact on Batch Confidence Score and Disposition

**Scoring framework for OOS-related findings:**

| Finding                                                                                               | Severity | Impact on Batch Confidence Score                             |
| ----------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------ |
| **OOS result with complete, adequate investigation → batch rejected**                                 | INFO     | Neutral (appropriate handling)                               |
| **OOS result with complete investigation → OOS invalidated with confirmed lab error → retest passes** | INFO     | Neutral (appropriate handling)                               |
| **OOS result with no investigation**                                                                  | CRITICAL | Major negative impact, batch cannot be released              |
| **OOS result with incomplete investigation**                                                          | HIGH     | Significant negative impact, investigation must be completed |
| **OOS result with generic root cause**                                                                | HIGH     | Significant negative impact, root cause must be clarified    |
| **Batch released before OOS investigation complete**                                                  | CRITICAL | Major negative impact, regulatory violation                  |
| **OOS averaged with passing results without investigation**                                           | CRITICAL | Major negative impact, prohibited practice                   |
| **Retesting without investigation**                                                                   | CRITICAL | Major negative impact, prohibited practice                   |

**Disposition rules:**

* **Any CRITICAL OOS-related finding**: Batch MUST be placed on hold, cannot release until corrected

* **HIGH severity OOS findings**: Batch hold recommended, senior QA review required before release

* **Multiple OOS results in same batch**: Escalate to quality leadership, comprehensive investigation required

***

## 9. Summary: OOS Investigation Best Practices

### 9.1 Key Principles

1. **Investigate ALL OOS results** - no exceptions
2. **Complete Phase I before Phase II** - don't skip ahead
3. **Be thorough and systematic** - use checklists
4. **Document everything** - investigation must be reconstructible from documentation
5. **Be specific** - avoid generic conclusions
6. **Assess other batches** - OOS may not be isolated
7. **Don't test into compliance** - investigation first, re-testing only after understanding the issue
8. **Cannot release until investigation complete** - no shortcuts

### 9.2 Timeline Summary

| Phase                          | Timeline                                    | Can Be Extended?                   |
| ------------------------------ | ------------------------------------------- | ---------------------------------- |
| **Notification**               | Immediate (same day)                        | No                                 |
| **Phase I**                    | 1-3 business days                           | Only with justification            |
| **Phase II**                   | 30 calendar days                            | Yes, with documented justification |
| **CAPA**                       | Defined in CAPA plan (days to months)       | Yes, with progress updates         |
| **Effectiveness verification** | Defined in CAPA plan (typically 3-6 months) | N/A                                |

### 9.3 Red Flags in OOS Investigations (for Reviewers)

* Investigation completed in <1 day (suggests inadequate)

* Phase I conclusion: "analyst error" without specifics

* No Phase II even though Phase I found no laboratory error

* Generic root cause

* No assessment of other batches

* Batch released before investigation complete

* Multiple OOS results, only some investigated

* Re-testing performed before investigation

* OOS results averaged without individual investigation

### 9.4 Resources and References

**FDA Resources:**

* FDA Guidance for Industry: Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production (October 2006)

  * Available at: <https://www.fda.gov/media/71001/download>

* FDA Warning Letters (search "OOS" for examples)

**Industry Resources:**

* PDA Technical Report No. 73: Atypical Results and OOS Investigations

* ISPE Good Practice Guide: OOS Laboratory Investigations

**Internal Resources:**

* Company OOS investigation SOP

* OOS investigation report template

* Root cause analysis training materials

* CAPA management system

***

## Document Control

**Version**: 1.0\
**Effective Date**: 2024\
**Review Frequency**: Annual\
**Document Owner**: Quality Assurance\
**Approval**: \[QA Director]

**Revision History:**

| Version | Date | Changes         | Approved By |
| ------- | ---- | --------------- | ----------- |
| 1.0     | 2024 | Initial release | QA Director |

***

# Part 10: Decision Rules and Disposition

## Document Purpose

This document provides a comprehensive guide to how automated batch record review systems translate findings into batch disposition recommendations. It serves as the authoritative reference for understanding the logic, scoring methodology, and decision-making framework used to evaluate pharmaceutical batch records against regulatory requirements and company specifications.

**Intended Audience:** QA Professionals, Manufacturing Personnel, Quality Systems Specialists, Regulatory Affairs, Data Scientists developing or maintaining automated review systems.

**Regulatory Context:** This framework implements the requirements of 21 CFR 211.192 (Production Record Review) and aligns with ICH Q9 risk-based quality management principles.

***

## Disposition Options

Automated batch record review systems recommend one of three primary dispositions based on the comprehensive analysis of batch documentation, process data, and quality control results.

### RELEASE

**Definition:** Batch is approved for distribution to market. All critical quality attributes meet specifications, all required documentation is complete and acceptable, and no unresolved quality concerns exist.

**Regulatory Basis:** 21 CFR 211.192 requires that production and control records be reviewed and approved by the quality unit before batch release.

**Prerequisites for RELEASE Recommendation:**

* Zero unresolved critical findings

* Zero unresolved major findings (or all major findings have documented acceptable resolutions)

* All in-process and finished product QC results within specification

* All theoretical vs. actual yields within acceptable ranges

* All required signatures and approvals present with valid credentials

* All equipment used was within calibration at time of use

* Environmental monitoring data within limits (where applicable)

* Complete label reconciliation (for packaging operations)

* All deviations (if any) have completed investigations with acceptable conclusions

**RELEASE Subcategories:**

1. **RELEASE (Clean):** Zero findings of any severity level. Represents ideal batch execution.

2. **RELEASE (with Observations):** Minor observations or administrative notes present, but none affecting product quality or regulatory compliance. Examples: Minor formatting inconsistencies in non-critical fields, timestamp precision variations within acceptable ranges, non-critical supplementary documentation delayed but subsequently completed.

3. **RELEASE (Post-Investigation):** Batch initially placed on HOLD due to findings that required investigation. Investigation completed, root cause identified, CAPA implemented or justified as not required, and batch determined to meet all release criteria.

### HOLD

**Definition:** Batch is temporarily restricted from release pending completion of specific activities. Product quality has not been confirmed as unacceptable, but additional review, investigation, or documentation is required before a final disposition decision can be made.

**Regulatory Basis:** 21 CFR 211.192 requires investigation of any unexplained discrepancy. Batches must not be released until the investigation is complete and documented.

**Common Reasons for HOLD Recommendation:**

1. **Pending Investigation:**

   * Out-of-specification (OOS) test result requiring Phase I investigation per FDA OOS Guidance

   * Out-of-trend (OOT) result requiring evaluation

   * Yield discrepancy exceeding alert limits but not rejection limits

   * Equipment malfunction during processing requiring impact assessment

   * Environmental excursion requiring contamination risk assessment

2. **Incomplete Documentation:**

   * Missing non-critical signature(s) with pending corrective action

   * Delayed analytical certificate of analysis (COA) for non-critical testing

   * Incomplete deviation investigation (initiated but not yet concluded)

   * Pending verification of corrected data entry error

3. **Borderline Results:**

   * QC results within specification but at edge of acceptance criteria

   * Yield at minimum acceptable level with minor unexplained variation

   * Multiple minor findings that collectively raise concern

   * Atypical process behavior that did not result in OOS but warrants review

4. **Conditional Acceptance:**

   * Awaiting stability data for reduced shelf life assignment

   * Pending verification of reprocessing effectiveness

   * Awaiting technical review of justified deviation

   * Pending QP (Qualified Person) certification in EU markets

**HOLD Duration Expectations:**

* Typical: 5-15 business days for investigation completion

* Extended: Up to 90 days for complex investigations or stability data

* Beyond 90 days: Requires senior QA review and justification

### REJECT

**Definition:** Batch fails to meet release criteria and is not approvable for distribution. Product quality or data integrity concerns exist that cannot be adequately resolved, or fundamental cGMP violations occurred during manufacturing.

**Regulatory Basis:** 21 CFR 211.192 requires that batches not meeting specifications be rejected. 21 CFR 211.165 addresses reprocessing under specific conditions.

**Grounds for REJECT Recommendation:**

1. **Quality Failures:**

   * Confirmed out-of-specification result for critical quality attribute after investigation

   * Finished product fails release testing (assay, content uniformity, dissolution, impurities, microbial limits)

   * Yield below minimum acceptable level indicating product loss or contamination

   * Physical defect rate exceeding acceptance criteria

   * Stability failure during accelerated or long-term studies (retroactive rejection)

2. **cGMP Violations:**

   * Equipment used was out of calibration during processing with confirmed impact on product quality

   * Cross-contamination detected (microbial, chemical, allergenic)

   * Use of incorrect raw material, incorrect strength, or expired material

   * Processing conducted outside validated parameters with confirmed adverse impact

   * Environmental contamination with confirmed product impact

3. **Data Integrity Issues:**

   * Evidence of data falsification, deletion, or manipulation

   * Missing critical raw data that cannot be reconstructed

   * Audit trail indicates unauthorized modifications to critical records

   * Inability to verify that documented operations actually occurred

   * Discrepancies between electronic and paper records that cannot be reconciled

4. **Critical Documentation Failures:**

   * Missing critical manufacturing steps with no ability to verify execution

   * Absent QC testing data for critical quality attributes

   * Unable to establish complete chain of custody for product

   * Missing line clearance documentation indicating potential mix-up risk

**REJECT Processing Options:**

* **Discard/Destroy:** Product destroyed with documented waste disposal

* **Reprocessing Investigation:** Evaluate if reprocessing is scientifically sound and regulatory compliant (per 21 CFR 211.115)

* **Downgrade:** If applicable, evaluate for alternate use (e.g., clinical supplies to animal health)

* **Rework:** If only packaging/labeling affected and product integrity confirmed

***

## Decision Matrix

The following matrix translates combinations of findings into disposition recommendations with associated confidence ranges. This matrix is applied AFTER all individual findings have been identified, classified, and scored.

### Primary Decision Matrix

| Condition                                                                                                                  | Disposition                  | Confidence Range | Auto-Approve Eligible |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------- | --------------------- |
| 0 critical findings, 0 unresolved major findings, all yields in spec, all QC passing, all signatures complete              | RELEASE (Clean)              | 95-100%          | Yes\*                 |
| 0 critical findings, 1-3 resolved major findings, all quality parameters met, complete documentation                       | RELEASE (Post-Investigation) | 90-95%           | No                    |
| 0 critical findings, minor documentation gaps only (e.g., formatting, non-critical timestamps), all quality parameters met | RELEASE (with Observations)  | 88-94%           | Yes\*                 |
| 1-2 major findings pending resolution, all critical parameters met, no quality concerns                                    | HOLD                         | 75-89%           | No                    |
| Borderline yield (within spec but near lower limit), all other parameters acceptable                                       | HOLD                         | 70-85%           | No                    |
| Missing 1-2 non-critical signatures with pending correction                                                                | HOLD                         | 80-89%           | No                    |
| 1 OOS result with Phase I investigation initiated                                                                          | HOLD (Mandatory)             | 50-69%           | No                    |
| 1 unresolved critical finding (e.g., calibration expired, missing critical QC data)                                        | REJECT Candidate             | 40-69%           | No                    |
| Confirmed OOS without adequate investigation OR expired calibration with confirmed product impact                          | REJECT                       | 20-50%           | No                    |
| Multiple critical findings (3+), systemic documentation failures, patterns indicating data integrity issues                | REJECT (Strong)              | 0-40%            | No                    |

\* Auto-approve eligible only if company SOP permits automated release for the product category and batch type. Typically limited to well-established products with extensive process validation history.

### Secondary Modifiers (Adjust Confidence After Primary Determination)

| Modifier Condition                                      | Confidence Adjustment           | Notes                                   |
| ------------------------------------------------------- | ------------------------------- | --------------------------------------- |
| First batch of new product                              | -5%                             | Increased scrutiny warranted            |
| Post-deviation batch (first batch after CAPA)           | -3%                             | Verify CAPA effectiveness               |
| Campaign completion batch (last of series)              | +2%                             | Process stability demonstrated          |
| Process validation batch (PPQ)                          | Mandatory human review          | Cannot auto-approve regardless of score |
| Reprocessed batch                                       | -10% and mandatory human review | Higher risk profile                     |
| Annual Product Review flags process trending concern    | -5%                             | Product under enhanced monitoring       |
| Recent regulatory inspection citation for similar issue | -8%                             | Heightened regulatory risk              |

***

## Confidence Scoring Algorithm

The confidence score represents the system's certainty that the recommended disposition is correct and that the batch meets all release requirements. Scores are calculated using a multi-layered approach combining field-level verification, finding severity weighting, and risk-based adjustments.

### Overview of Scoring Methodology

The scoring algorithm uses a **weighted field verification approach** rather than simple penalty deduction. This ensures that critical fields (those with direct impact on product quality and patient safety) contribute more heavily to the overall score than administrative fields.

**Core Principle:** Confidence score reflects the probability that a human expert reviewer would reach the same disposition conclusion after thorough examination.

### Field-Level Scoring

Each data field in the batch record receives an individual verification score based on comparison to the Master Batch Record (MBR) specification and acceptance criteria.

#### Individual Field Score Assignment

| Score  | Condition                                                                                          | Examples                                                                                                   | Impact Classification |
| ------ | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------- |
| 100%   | Exact match to MBR specification, complete documentation, all requirements met                     | Temperature recorded as 65°C, spec 65±5°C; Signature present with valid credentials and timestamp          | None                  |
| 95-99% | Within specification with minor acceptable variation or formatting difference                      | Temperature 67°C (within 65±5°C); Date format DD-MMM-YYYY vs DD/MM/YYYY                                    | OBSERVATION           |
| 85-94% | Within specification but near boundary, or minor documentation anomaly                             | Temperature 69°C (spec 65±5°C, near upper limit); Timestamp shows unusual precision variation              | MINOR                 |
| 70-84% | Within specification but with noted anomaly requiring explanation                                  | Yield 96% (spec ≥95%, historically 98-102%); Unexpected process variation trend                            | MAJOR                 |
| 50-69% | Out of specification OR missing data, but investigation ongoing or acceptable justification exists | Yield 94% (spec ≥95%) with investigation initiated; Missing operator signature with supervisor attestation | MAJOR/CRITICAL        |
| 0-49%  | Critical violation detected, unresolved OOS, or fundamental cGMP failure                           | Temperature 85°C (spec 65±5°C); Equipment calibration expired; Missing critical QC data                    | CRITICAL              |

### Field Weighting by Criticality

Not all fields have equal impact on product quality. The system applies multipliers based on field criticality using a risk-based classification aligned with ICH Q9 principles.

| Field Category                    | Weight Multiplier | Examples                                                                                                                                                                               | Justification                                       |
| --------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Critical Quality Fields**       | 3.0x              | Process parameters affecting CQAs (temperature, time, speed, pressure), QC test results (assay, dissolution, impurities), equipment calibration status, material identity verification | Direct impact on product quality and patient safety |
| **Major Compliance Fields**       | 2.0x              | Yield calculations, environmental monitoring, line clearance verification, critical signatures (operator, QA reviewer), deviation documentation                                        | Significant cGMP compliance implications            |
| **Standard Documentation Fields** | 1.0x              | Batch header information, timestamps, non-critical signatures, administrative notations, lot numbers                                                                                   | Important for traceability but lower quality risk   |
| **Supplementary Fields**          | 0.5x              | Comments, optional notations, supplementary attachments                                                                                                                                | Informational only                                  |

### Overall Confidence Score Calculation

The system calculates the overall batch confidence score through a four-step process:

#### Step 1: Calculate Weighted Field Score Average

For each field i:

```
Weighted_Score_i = Field_Score_i × Weight_Multiplier_i
```

Sum all weighted scores and divide by sum of all weight multipliers:

```
Base_Confidence = Σ(Weighted_Score_i) / Σ(Weight_Multiplier_i)
```

This produces a base confidence percentage (0-100%).

#### Step 2: Apply Finding Severity Penalties

After calculating the base weighted score, apply deductions based on identified findings:

| Finding Severity | Penalty per Finding   | Maximum Cumulative Penalty |
| ---------------- | --------------------- | -------------------------- |
| CRITICAL         | -15 percentage points | -45% (cap at 3 findings)   |
| MAJOR            | -8 percentage points  | -32% (cap at 4 findings)   |
| MINOR            | -3 percentage points  | -15% (cap at 5 findings)   |
| OBSERVATION      | -1 percentage point   | -5% (cap at 5 findings)    |

**Penalty Calculation:**

```
Total_Penalty = (Critical_Count × 15) + (Major_Count × 8) + (Minor_Count × 3) + (Observation_Count × 1)
Total_Penalty = MIN(Total_Penalty, Maximum_Cumulative_Penalty)
```

**Rationale for Caps:** Prevents single finding category from dominating the score. If more than the cap number of findings exist in a category, this indicates systemic issues that should trigger mandatory human review regardless of calculated score.

#### Step 3: Apply Secondary Modifiers

Apply any relevant secondary modifiers from the Secondary Modifiers table (see Decision Matrix section above):

```
Modifier_Adjustment = Σ(applicable modifier adjustments)
```

#### Step 4: Calculate Final Confidence Score

```
Final_Confidence = Base_Confidence - Total_Penalty + Modifier_Adjustment
Final_Confidence = MAX(0, MIN(100, Final_Confidence))  // Floor at 0%, cap at 100%
```

### Confidence Score Interpretation and Routing

The final confidence score determines not only the disposition recommendation but also the review pathway and approval authority required.

| Confidence Range | Interpretation                     | Review Pathway                                                                          | Approval Authority                 |
| ---------------- | ---------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------- |
| 95-100%          | High confidence RELEASE            | Auto-approve eligible (if SOP permits) OR QA spot-check (sample 10-20% of fields)       | QA Specialist                      |
| 85-94%           | Moderate confidence RELEASE        | Expedited review (QA reviews flagged items and samples additional fields)               | QA Specialist or Senior QA         |
| 70-84%           | Low confidence / HOLD              | Full human review required (all findings must be addressed, comprehensive record check) | Senior QA                          |
| 50-69%           | HOLD or REJECT candidate           | Mandatory full review + investigation                                                   | Senior QA + QA Manager             |
| Below 50%        | REJECT candidate or serious issues | Comprehensive investigation, management notification, full documentation review         | QA Manager + Site Quality Director |

### Special Case Handling

#### Automatic Overrides (Regardless of Calculated Score)

Certain conditions **automatically override** the calculated confidence score and force specific dispositions:

1. **Mandatory HOLD Triggers:**

   * Any OOS result (confidence forced to ≤69% until investigation complete)

   * Missing critical QC data (confidence forced to ≤50%)

   * Equipment calibration expired during use (confidence forced to ≤60% pending impact assessment)

   * Unresolved deviation affecting product quality (confidence forced to ≤70%)

2. **Mandatory REJECT Triggers:**

   * Confirmed product contamination (microbial, chemical, cross-contamination)

   * Use of wrong raw material or wrong strength material

   * Evidence of data falsification or integrity breach

   * Processing grossly outside validated parameters with confirmed adverse impact

3. **Mandatory Human Review Triggers (No Auto-Approve):**

   * Process validation batches

   * First batch of new product

   * Reprocessed batches

   * Batches with any critical finding, even if resolved

   * Any batch with confidence score <85%

***

## Worked Examples

The following detailed examples demonstrate the confidence scoring calculation methodology in realistic scenarios.

### Example 1: Clean Batch (RELEASE)

**Batch ID:** LX-2024-001 (Tablet compression, established product)\
**Product:** Lisinopril 10mg Tablets\
**Manufacturing Date:** 15-JAN-2024

#### Batch Record Summary:

* All process parameters within specification (compression force, tablet weight, hardness, thickness)

* All in-process QC results acceptable (blend uniformity RSD 2.1%, spec ≤5%)

* Finished product QC: Assay 99.8% (spec 95-105%), Content uniformity passes, Dissolution passes

* Yield: 99.2% (spec ≥95%)

* All equipment calibration current

* All signatures complete with valid timestamps

* Environmental monitoring within limits

* Zero deviations

#### Findings:

* 1 OBSERVATION: Operator recorded compression time as "240 min" in comments when actual monitored time was 238 minutes (2-minute discrepancy in non-critical timestamp)

#### Scoring Calculation:

**Step 1: Weighted Field Score**

* 50 fields total evaluated

* 15 Critical Quality fields: All score 100%, weighted contribution = 15 × 100 × 3.0 = 4,500

* 20 Major Compliance fields: All score 100%, weighted contribution = 20 × 100 × 2.0 = 4,000

* 14 Standard Documentation fields: 13 score 100%, 1 scores 95% (time discrepancy), weighted contribution = (13 × 100 × 1.0) + (1 × 95 × 1.0) = 1,395

* 1 Supplementary field: Score 100%, weighted contribution = 1 × 100 × 0.5 = 50

Total weighted score = 4,500 + 4,000 + 1,395 + 50 = 9,945\
Total weight sum = (15 × 3.0) + (20 × 2.0) + (14 × 1.0) + (1 × 0.5) = 45 + 40 + 14 + 0.5 = 99.5\
Base\_Confidence = 9,945 / 99.5 = 99.95%

**Step 2: Finding Penalties**

* CRITICAL: 0 findings, penalty = 0

* MAJOR: 0 findings, penalty = 0

* MINOR: 0 findings, penalty = 0

* OBSERVATION: 1 finding, penalty = -1%

Total\_Penalty = -1%

**Step 3: Secondary Modifiers**

* Campaign completion batch (15th batch in series): +2%

Modifier\_Adjustment = +2%

**Step 4: Final Confidence**

```
Final_Confidence = 99.95 - 1 + 2 = 100.95 → capped at 100%
```

#### Disposition Recommendation:

* **RELEASE (Clean)**

* Confidence: **100%**

* Review Pathway: Auto-approve eligible (QA spot-check 10% of fields recommended)

* Approval Authority: QA Specialist

#### Justification:

Near-perfect batch execution with only a trivial administrative discrepancy that has no impact on product quality. The 2-minute time notation difference in a non-critical comment field does not affect any process parameter or quality attribute. Batch demonstrates excellent process control.

***

### Example 2: Moderate Issues Batch (HOLD)

**Batch ID:** AM-2024-047 (Fluid bed granulation + compression)\
**Product:** Amoxicillin 500mg Capsules\
**Manufacturing Date:** 22-FEB-2024

#### Batch Record Summary:

* Granulation process: Inlet temperature showed 2 brief excursions to 68°C (spec 60±5°C, so within range but near upper limit)

* Drying endpoint LOD result: 3.2% (spec ≤3.5%, historically 1.8-2.5%)

* Blend uniformity: RSD 4.8% (spec ≤6.0%, historically 2-3%)

* Finished product assay: 96.5% (spec 95-105%, but lower than historical 98-102%)

* Content uniformity: PASSES (but 2 of 30 capsules at 92% and 93%, spec 85-115%)

* Yield: 95.8% (spec ≥95%, but historical range 97-99%)

* 1 equipment temperature probe showed calibration due within 7 days (still within valid period)

* Missing production supervisor signature (operator signature present, QA signature present)

* 1 deviation documented: Air handler pressure differential dropped to 13 Pa for 15 minutes (spec ≥15 Pa), investigation initiated but not yet complete

#### Findings:

* 2 CRITICAL: (1) Incomplete deviation investigation for environmental excursion, (2) Missing production supervisor signature on critical manufacturing step

* 3 MAJOR: (1) Granulation temperature near upper control limit with 2 excursions, (2) Drying LOD result outside historical range, (3) Blend uniformity RSD elevated vs. historical

* 2 MINOR: (1) Finished product assay lower than historical norm but within spec, (2) Two capsules in content uniformity near lower end of range

* 1 OBSERVATION: Equipment calibration due soon (but still valid)

#### Scoring Calculation:

**Step 1: Weighted Field Score**

* 65 fields total evaluated

* 20 Critical Quality fields: 18 score 100%, 1 scores 85% (temp excursions), 1 scores 80% (LOD elevated), weighted contribution = (18 × 100 × 3.0) + (1 × 85 × 3.0) + (1 × 80 × 3.0) = 5,400 + 255 + 240 = 5,895

* 25 Major Compliance fields: 22 score 100%, 2 score 82% (blend RSD elevated, yield lower), 1 scores 0% (missing signature), weighted contribution = (22 × 100 × 2.0) + (2 × 82 × 2.0) + (1 × 0 × 2.0) = 4,400 + 328 + 0 = 4,728

* 18 Standard Documentation fields: 16 score 100%, 2 score 88% (assay trending lower, content uniformity variation), weighted contribution = (16 × 100 × 1.0) + (2 × 88 × 1.0) = 1,600 + 176 = 1,776

* 2 Supplementary fields: 1 scores 100%, 1 scores 95% (calibration due soon), weighted contribution = (1 × 100 × 0.5) + (1 × 95 × 0.5) = 50 + 47.5 = 97.5

Total weighted score = 5,895 + 4,728 + 1,776 + 97.5 = 12,496.5\
Total weight sum = (20 × 3.0) + (25 × 2.0) + (18 × 1.0) + (2 × 0.5) = 60 + 50 + 18 + 1 = 129\
Base\_Confidence = 12,496.5 / 129 = 96.87%

**Step 2: Finding Penalties**

* CRITICAL: 2 findings, penalty = 2 × 15 = -30%

* MAJOR: 3 findings, penalty = 3 × 8 = -24%

* MINOR: 2 findings, penalty = 2 × 3 = -6%

* OBSERVATION: 1 finding, penalty = 1 × 1 = -1%

Total\_Penalty = -30 - 24 - 6 - 1 = -61%

**Step 3: Secondary Modifiers**

* No applicable modifiers

Modifier\_Adjustment = 0%

**Step 4: Final Confidence**

```
Final_Confidence = 96.87 - 61 + 0 = 35.87%
```

#### Disposition Recommendation:

* **HOLD**

* Confidence: **36%**

* Review Pathway: Mandatory full review + investigation

* Approval Authority: Senior QA + QA Manager

#### Justification:

While individual field scores are mostly acceptable (high base confidence of 96.87%), the accumulation of 2 CRITICAL findings (incomplete deviation investigation and missing critical signature) drives the confidence score below 50%. The batch cannot be released until:

1. Deviation investigation is completed with acceptable conclusion regarding environmental excursion impact
2. Production supervisor signature is obtained (or documented justification for absence is provided)
3. Multiple trending concerns (temperature, LOD, blend, assay) are evaluated collectively to rule out systematic process drift

The batch is a HOLD candidate rather than REJECT because all quality test results are within specification and the issues are potentially resolvable. If deviation investigation concludes no product impact and supervisor signature is obtained, batch could be upgraded to RELEASE after re-scoring.

***

### Example 3: Serious Issues Batch (REJECT)

**Batch ID:** MX-2024-009 (API manufacturing, final isolation and drying)\
**Product:** Metformin HCl API\
**Manufacturing Date:** 10-MAR-2024

#### Batch Record Summary:

* Final isolation: Centrifuge used was found to have expired calibration (calibration due 01-MAR-2024, batch processed 10-MAR-2024)

* Drying operation: Temperature controller failed mid-process, temperature spiked to 95°C for 12 minutes (spec 75±5°C max 80°C)

* Loss on drying (LOD): 0.8% (spec ≤0.5%) - OUT OF SPECIFICATION

* Assay by HPLC: 98.2% (spec 98.5-101.5%) - OUT OF SPECIFICATION

* Related substance impurity B: 0.35% (spec ≤0.20%) - OUT OF SPECIFICATION

* Particle size distribution: D50 at 85 microns (spec 40-60 microns) - OUT OF SPECIFICATION

* Yield: 88% (spec ≥92%) - below minimum acceptable

* Critical QC analyst signature missing for impurity testing

* Audit trail review shows 3 instances of temperature data points manually edited without documented justification

* Investigation initiated but no OOS Phase I report completed yet

#### Findings:

* 6 CRITICAL: (1) Equipment calibration expired during use, (2) Process temperature excursion outside validated range, (3) OOS LOD result, (4) OOS Assay result, (5) OOS Impurity result, (6) OOS Particle size result

* 3 MAJOR: (1) Yield significantly below specification, (2) Missing critical QC analyst signature, (3) Audit trail shows unexplained data modifications

* 4 MINOR: (1) Temperature controller failure documentation incomplete, (2) Timeline discrepancies in batch record, (3) Environmental monitoring shows elevated particle count (within spec but elevated), (4) Raw material COA missing one non-critical test

* 3 OBSERVATIONS: (1) Operator change mid-batch not clearly documented, (2) Additional sampling performed but rationale not recorded, (3) Batch record printed after execution rather than concurrent documentation

#### Scoring Calculation:

**Step 1: Weighted Field Score**

* 55 fields total evaluated

* 18 Critical Quality fields: 12 score 100%, 4 score 0% (OOS results), 2 score 40% (temp excursion impact, calibration expired), weighted contribution = (12 × 100 × 3.0) + (4 × 0 × 3.0) + (2 × 40 × 3.0) = 3,600 + 0 + 240 = 3,840

* 22 Major Compliance fields: 17 score 100%, 2 score 0% (missing signature, yield failure), 3 score 50% (audit trail issues, documentation gaps), weighted contribution = (17 × 100 × 2.0) + (2 × 0 × 2.0) + (3 × 50 × 2.0) = 3,400 + 0 + 300 = 3,700

* 13 Standard Documentation fields: 9 score 100%, 4 score 75% (timeline issues, documentation quality), weighted contribution = (9 × 100 × 1.0) + (4 × 75 × 1.0) = 900 + 300 = 1,200

* 2 Supplementary fields: Both score 80%, weighted contribution = 2 × 80 × 0.5 = 80

Total weighted score = 3,840 + 3,700 + 1,200 + 80 = 8,820\
Total weight sum = (18 × 3.0) + (22 × 2.0) + (13 × 1.0) + (2 × 0.5) = 54 + 44 + 13 + 1 = 112\
Base\_Confidence = 8,820 / 112 = 78.75%

**Step 2: Finding Penalties**

* CRITICAL: 6 findings, but cap at 3, penalty = 3 × 15 = -45%

* MAJOR: 3 findings, penalty = 3 × 8 = -24%

* MINOR: 4 findings, penalty = 4 × 3 = -12%

* OBSERVATION: 3 findings, penalty = 3 × 1 = -3%

Total\_Penalty = -45 - 24 - 12 - 3 = -84%

**Note:** The system identifies 6 CRITICAL findings, which exceeds the cap of 3. This excess itself is a red flag indicating systemic failure requiring immediate escalation.

**Step 3: Secondary Modifiers**

* Data integrity concerns identified (audit trail issues): -8% additional modifier

Modifier\_Adjustment = -8%

**Step 4: Final Confidence**

```
Final_Confidence = 78.75 - 84 - 8 = -13.25 → floored at 0%
```

#### Disposition Recommendation:

* **REJECT (Strong)**

* Confidence: **0%**

* Review Pathway: Comprehensive investigation, immediate management escalation, hold all related batches, full documentation review

* Approval Authority: Site Quality Director + Product Quality Review Board

#### Justification:

This batch exhibits multiple critical failures that cannot be remediated:

1. **Quality Failures:** Four distinct OOS results (LOD, Assay, Impurities, Particle Size) indicate the product does not meet quality standards. The temperature excursion during drying (95°C vs. 75±5°C spec) likely caused thermal degradation, explaining the low assay and high impurities.

2. **Equipment Failure:** Calibration expired 9 days before use creates doubt about centrifuge performance during isolation. Cannot verify the equipment operated within validated parameters.

3. **Data Integrity Concerns:** Manual edits to temperature data without justification, combined with missing QC signature and audit trail anomalies, raise significant data integrity questions per FDA and MHRA guidance.

4. **Yield Failure:** 88% yield vs. 92% minimum indicates significant product loss, potentially during the temperature excursion event.

**Required Actions:**

* Immediate batch rejection and segregation

* Comprehensive investigation per FDA OOS Guidance (multi-phase)

* Equipment investigation for temperature controller and centrifuge

* Data integrity investigation per company procedures

* CAPA to prevent recurrence

* Regulatory assessment for reportability (deviation report to authorities may be required)

* Review of all batches processed on same equipment within calibration grace period

This batch demonstrates the importance of the confidence scoring system in identifying batches with multiple compounding issues that individually and collectively indicate fundamental quality and compliance failures.

***

## Human Review Workflow

While automated batch record review significantly accelerates the evaluation process, human oversight remains essential for final disposition decisions, particularly for batches with findings or confidence scores below auto-approve thresholds. This section details the human review workflow, reviewer responsibilities, and decision documentation requirements.

### When Human Review is Triggered

**Mandatory Human Review Conditions:**

1. Confidence score <95% (or <85% if auto-approve threshold is set lower per SOP)
2. Any CRITICAL finding identified, even if resolved
3. Any MAJOR finding that affects product quality parameters
4. Process validation batches (IQ, OQ, PQ, PPQ)
5. First three commercial batches of new product
6. Reprocessed or reworked batches
7. Batches manufactured following significant equipment changes or process modifications
8. Batches with any OOS, OOT, or OOE results
9. Batches with unresolved deviations
10. System flags batch for review based on trending algorithms (e.g., consistent drift toward lower yield)

### Reviewer Interface and Information Presentation

**Dashboard View:**
The reviewer accesses a comprehensive dashboard presenting:

* **Batch Header:** Product name, batch number, size, manufacturing date, target disposition

* **Confidence Score:** Prominently displayed with color coding (Green ≥95%, Yellow 85-94%, Orange 70-84%, Red <70%)

* **Automated Disposition Recommendation:** RELEASE / HOLD / REJECT with supporting justification

* **Finding Summary:** Count by severity (Critical, Major, Minor, Observation) with expandable details

* **Risk Assessment:** System-generated risk summary highlighting patient safety, regulatory, and business risk factors

* **Comparison to Historical Batches:** Statistical comparison of key parameters (yield, QC results, process values) to historical norms

* **Investigation Status:** Real-time status of any ongoing deviation or OOS investigations linked to the batch

**Detailed Finding View:**
Each finding is presented with:

* **Severity Level:** Color-coded badge (Red=Critical, Orange=Major, Yellow=Minor, Blue=Observation)

* **Field Location:** Exact location in batch record (section, page, field name)

* **Expected vs. Actual:** Side-by-side comparison of MBR specification and recorded value

* **Deviation Magnitude:** Quantification of how far out of spec (if applicable)

* **Potential Impact:** System assessment of impact on product quality

* **Related Findings:** Links to related findings (e.g., if temperature excursion relates to subsequent OOS result)

* **Recommended Action:** System suggestion (investigate, document justification, correct, escalate)

* **Disposition Options:** Reviewer can mark as Accept with Justification, Request Investigation, Escalate, or Reject Batch

**Supporting Documentation Access:**
Reviewers have one-click access to:

* Complete batch record (PDF and structured data)

* Master Batch Record (MBR) for comparison

* Historical batch data for same product

* Linked deviation reports and investigations

* Equipment calibration records

* Raw material certificates of analysis

* QC testing data and chromatograms

* Audit trail for all record modifications

### Reviewer Actions and Decision Authority

**QA Specialist Actions (Confidence 85-100%):**

* Review flagged findings in detail

* Verify automated assessment accuracy

* Spot-check additional fields not flagged (recommended 10-20% sample)

* Request clarifications from manufacturing or QC if needed (non-blocking)

* Document justification for accepting findings marked as MINOR or OBSERVATION

* Approve RELEASE for batches meeting all criteria

* Escalate to Senior QA if any concerns arise during review

**Senior QA Actions (Confidence 70-84% or escalated batches):**

* Comprehensive review of all findings

* Independent verification of critical fields

* Review investigation status for any open items

* May place batch on HOLD pending additional information

* Authority to request additional testing or investigation

* Can override system recommendation with documented scientific justification

* Escalate to QA Manager for REJECT recommendations

**QA Manager Actions (Confidence <70% or REJECT candidates):**

* Full batch record review (not just findings)

* Multi-disciplinary review coordination (manufacturing, QC, QA, regulatory, technical)

* Investigation oversight and adequacy assessment

* Disposition decision for REJECT recommendations

* Regulatory impact assessment

* CAPA initiation and oversight

* Notification to senior management for significant quality events

* Authority to initiate batch-related regulatory submissions (if required)

### Decision Documentation Requirements

All human review decisions must be documented in the quality management system (QMS) with the following minimum information:

**For RELEASE Decisions:**

* Reviewer name, credentials, signature, date/time

* Confirmation statement: "I have reviewed this batch record, associated findings, and supporting documentation. The batch meets all release specifications and regulatory requirements."

* For batches with findings: Specific justification for accepting each finding

* Reference to any completed investigations that support release

* Approval for distribution (separate signature if required by SOP)

**For HOLD Decisions:**

* Reviewer name, credentials, signature, date/time

* Specific reason for HOLD (investigation pending, incomplete documentation, additional testing required)

* List of conditions that must be satisfied before release can be reconsidered

* Expected timeline for HOLD resolution

* Responsibility assignment (who will complete the required actions)

* Interim storage location and conditions

* Review date (when HOLD will be re-evaluated)

**For REJECT Decisions:**

* Senior QA or QA Manager name, credentials, signature, date/time

* Detailed justification for rejection with specific citations to failed specifications or cGMP requirements

* Investigation summary and conclusion

* Root cause statement (if identified)

* Disposition of physical product (quarantine location, destruction plan)

* CAPA reference number

* Regulatory assessment (reportability determination)

* Management notification confirmation

* Related batch review plan (if applicable - e.g., other batches from same campaign)

### Override Capabilities

Reviewers have limited authority to override automated disposition recommendations when supported by scientific justification:

**Allowed Overrides:**

* Upgrade HOLD to RELEASE after investigation completion and documented acceptance of findings

* Downgrade RELEASE (with observations) to HOLD if reviewer identifies concerns not detected by automated system

* Override confidence score based on expert judgment with documented rationale (e.g., system over-penalized a finding that reviewer determines is not quality-impacting)

* Accept borderline results as within specification based on statistical evaluation and process knowledge

**Prohibited Overrides:**

* Cannot override REJECT to RELEASE without completing full investigation and demonstrating product meets all specifications

* Cannot override mandatory HOLD triggers (e.g., active OOS investigation)

* Cannot approve batches with confirmed critical findings without resolution

* Cannot bypass required investigation protocols per FDA OOS Guidance or company SOPs

**Override Documentation:**
All overrides require:

* Scientific justification with supporting data

* Regulatory compliance confirmation

* Risk assessment

* Senior QA or QA Manager approval (depending on severity)

* Permanent record in QMS linked to batch record

### Escalation Paths

**Standard Escalation Hierarchy:**

1. QA Specialist → Senior QA (for any findings outside normal experience or when confidence <85%)
2. Senior QA → QA Manager (for REJECT candidates, data integrity concerns, or regulatory risk)
3. QA Manager → Site Quality Director (for serious quality events, product recalls, regulatory reportability)
4. Site Quality Director → Corporate Quality + Senior Management (for major quality incidents affecting multiple batches or sites)

**Expedited Escalation Triggers:**

* Data integrity suspected

* Patient safety concern identified

* Confirmed product contamination

* Multiple batches affected by same root cause

* Regulatory inspection findings related to batch

* Equipment failure affecting product quality

* Deviation with potential regulatory reportability

### Review Performance Metrics

Quality systems should track human review performance to optimize the balance between automation and human oversight:

**Key Metrics:**

* **Agreement Rate:** Percentage of batches where human reviewer agrees with automated disposition recommendation

* **Override Rate:** Frequency of human overrides and categorization by reason

* **Review Cycle Time:** Time from automated review completion to final human disposition decision

* **Finding Accuracy:** Rate of false positives (automated finding that human determines is not valid) and false negatives (issue missed by automation but caught by human)

* **Review Efficiency:** Time saved by automated review compared to fully manual review (benchmark)

**Target Performance:**

* Agreement Rate: ≥92% (indicates well-calibrated automation)

* Override Rate: 5-10% (too low suggests humans aren't adding value; too high suggests automation needs tuning)

* Review Cycle Time: ≤4 hours for expedited review, ≤24 hours for full review

* False Positive Rate: ≤8%

* False Negative Rate: ≤2% (critical that automation doesn't miss significant issues)

***

## Regulatory Basis for Decision Rules

The decision rules, confidence scoring methodology, and disposition framework described in this document are grounded in applicable pharmaceutical regulations and guidance documents.

### 21 CFR 211.192 - Production Record Review

**Regulatory Text:** "All drug product production and control records, including those for packaging and labeling, shall be reviewed and approved by the quality control unit to determine compliance with all established, approved written procedures before a batch is released or distributed."

**Implementation:** Automated batch record review satisfies the requirement for quality unit review. Human QA oversight of automated recommendations fulfills the "approved by the quality control unit" requirement. The confidence scoring system provides a risk-based framework for determining level of human review required.

**Key Requirement:** Investigation of discrepancies - "Any unexplained discrepancy...shall be thoroughly investigated." The HOLD disposition implements this requirement by preventing release pending investigation completion.

### 21 CFR 211.188 - Batch Production and Control Records

**Regulatory Text:** Specifies required documentation including actual times, dates, yields, equipment identification, sampling and testing results, and signatures of persons performing and checking each step.

**Implementation:** The field-level scoring methodology maps to these regulatory requirements, with Critical Quality fields corresponding to regulatory-mandated documentation.

### ICH Q9 - Quality Risk Management

**Regulatory Guidance:** "The evaluation of the risk to quality should be based on scientific knowledge, and ultimately link to the protection of the patient."

**Implementation:** The weighted field scoring approach applies risk-based principles by assigning higher weights to fields with direct impact on patient safety (process parameters affecting CQAs, QC results). Confidence thresholds align review intensity with quality risk.

### FDA Guidance: Investigating OOS Test Results (2006)

**Regulatory Guidance:** Establishes Phase I and Phase II investigation framework for OOS results.

**Implementation:** OOS results automatically trigger HOLD disposition (confidence ≤69%) until Phase I investigation is complete. Batch cannot be released until investigation concludes with acceptable explanation or batch is rejected.

### EU GMP Chapter 6 - Quality Control

**Regulatory Text:** "The final approval for release for sale of each batch of product is given by the Qualified Person in accordance with the requirements of Article 51 of Directive 2001/83/EC."

**Implementation:** For EU markets, automated review provides supporting documentation and recommendation, but final approval authority remains with the Qualified Person. RELEASE recommendations above 90% confidence provide QP with high assurance for certification.

### 21 CFR Part 11 - Electronic Records and Electronic Signatures

**Regulatory Text:** Requirements for electronic batch records including audit trails, record integrity, and electronic signature validity.

**Implementation:** Audit trail review is incorporated into automated assessment. Signatures are verified for validity (authorized user, valid credential, appropriate timestamp). Data integrity findings trigger CRITICAL classification.

***

## Document Revision History

| Version | Date       | Author                  | Changes         |
| ------- | ---------- | ----------------------- | --------------- |
| 1.0     | 2024-01-15 | QA Knowledge Management | Initial release |

***

**Document Owner:** Quality Assurance Department\
**Review Frequency:** Annual or upon significant regulatory change\
**Next Review Date:** 2025-01-15

**Approval Signatures:**

* QA Director: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_

* Site Quality Director: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_

***

# Part 11: Sources and Regulatory Links

## Document Purpose

This document provides a comprehensive, authoritative citation list for all regulatory requirements, guidance documents, and industry standards referenced throughout the Batch Record Review knowledge base. Every source includes the complete title, issuing authority, publication year, direct URL (where available), and scope of applicability to pharmaceutical batch record review.

**Intended Audience:** QA Professionals, Regulatory Affairs, Compliance Officers, Quality Systems Developers, Auditors, Regulatory Inspectors

**Document Maintenance:** This reference list is maintained as a living document. URLs are verified quarterly, and new regulatory updates are incorporated within 30 days of publication.

**Citation Format:** Each entry follows the format: Title | Issuing Authority | Year | URL | Scope

***

## US FDA Regulations (21 CFR - Code of Federal Regulations)

All 21 CFR citations are from the Electronic Code of Federal Regulations (eCFR), which is the authoritative, updated version of the CFR maintained by the US Government Publishing Office.

### Core Manufacturing and Quality Requirements

#### 1. 21 CFR 211.186 - Master Production and Control Records

**Full Title:** 21 CFR § 211.186 - Master production and control records\
**Issuing Authority:** US Food and Drug Administration (FDA)\
**Year:** Current (continuously updated)\
**URL:** <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.186>\
**Scope:** Defines the required content of Master Batch Records (MBRs). Specifies that master production and control records must include the name and strength of the product, manufacturing instructions, sampling and testing procedures, specifications, and special notations and precautions. This regulation establishes the baseline against which actual batch records are compared during automated review.

**Key Requirements:**

* Complete listing of components and quantities

* Statement of theoretical yield including maximum and minimum percentages

* Complete manufacturing instructions with process controls

* In-process sampling and testing procedures

* Special notations for critical steps

**Relevance to Automated Review:** MBR serves as the "golden standard" for field-level comparison. Automated systems validate that batch records comply with MBR specifications and flagged deviations trigger findings.

***

#### 2. 21 CFR 211.188 - Batch Production and Control Records

**Full Title:** 21 CFR § 211.188 - Batch production and control records\
**Issuing Authority:** US Food and Drug Administration (FDA)\
**Year:** Current (continuously updated)\
**URL:** <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.188>\
**Scope:** Defines what must be documented during manufacturing execution. Requires batch production records to include complete information relating to production and control of each batch, including dates, signatures, actual yields, sampling and testing results, and investigation of significant deviations.

**Key Requirements:**

* Dates of manufacture and control

* Identity of individual major equipment and processing lines used

* Actual weights or measures of components used

* Actual yields at appropriate phases

* In-process and laboratory control results

* Identification of persons performing and persons directly supervising or checking each significant step

* Complete labeling control records including specimen labels

**Relevance to Automated Review:** This regulation defines the specific fields that must be present and complete in batch records. Automated review systems map their field validation requirements directly to these regulatory specifications. Missing required fields trigger CRITICAL findings.

***

#### 3. 21 CFR 211.192 - Production Record Review

**Full Title:** 21 CFR § 211.192 - Production record review\
**Issuing Authority:** US Food and Drug Administration (FDA)\
**Year:** Current (continuously updated)\
**URL:** <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.192>\
**Scope:** The cornerstone regulation for batch disposition. Requires that all production and control records be reviewed and approved by the quality control unit before batch release. Mandates investigation of unexplained discrepancies and failures to meet specifications.

**Key Regulatory Text:**\
"All drug product production and control records, including those for packaging and labeling, shall be reviewed and approved by the quality control unit to determine compliance with all established, approved written procedures before a batch is released or distributed."

**Key Requirements:**

* Quality unit review before release (cannot delegate outside QA)

* Investigation of any unexplained discrepancy or failure to meet specifications

* Investigation conclusion must be documented

* Batches failing to meet specifications must be rejected (unless reprocessing is validated and appropriate)

**Relevance to Automated Review:** This regulation provides the legal basis for automated batch record review as a tool supporting quality unit review. Human QA oversight of automated recommendations satisfies the "reviewed and approved by the quality control unit" requirement. The HOLD disposition implements the investigation requirement.

***

#### 4. 21 CFR 211.194 - Laboratory Records

**Full Title:** 21 CFR § 211.194 - Laboratory records\
**Issuing Authority:** US Food and Drug Administration (FDA)\
**Year:** Current (continuously updated)\
**URL:** <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.194>\
**Scope:** Defines documentation requirements for laboratory testing records including raw data, calculations, and test results. Establishes requirements for complete data including test methodology, standards, and analyst identification.

**Key Requirements:**

* Complete data derived from all tests (not just final results)

* Complete record of laboratory control including test methodology, standards, specifications

* Statement of weight or measure of sample for each test

* Complete record of calculations performed in testing

* Statement of results and comparison to specifications

* Initials or signature of person performing test and date

**Relevance to Automated Review:** QC test results incorporated into batch records must meet these documentation standards. Automated review verifies presence of complete QC data (not just pass/fail), analyst signatures, and proper specification comparison.

***

#### 5. 21 CFR 211.180 - General Requirements for Records

**Full Title:** 21 CFR § 211.180 - General requirements\
**Issuing Authority:** US Food and Drug Administration (FDA)\
**Year:** Current (continuously updated)\
**URL:** <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.180>\
**Scope:** Establishes general requirements for all manufacturing records including retention periods, record accuracy, legibility, and protection from alteration.

**Key Requirements:**

* Records must be retained for at least 1 year after expiration date (or 3 years after distribution if no expiration dating)

* Records must be readily available for authorized inspection

* Records must be accurate, indelible, and not allow unauthorized changes (basis for 21 CFR Part 11 compliance)

**Relevance to Automated Review:** Retention requirements apply to both the original batch record and the automated review report. Audit trail requirements directly relate to data integrity checks performed during automated review.

***

#### 6. 21 CFR 211.130 - Packaging and Labeling Operations

**Full Title:** 21 CFR § 211.130 - Packaging and labeling operations\
**Issuing Authority:** US Food and Drug Administration (FDA)\
**Year:** Current (continuously updated)\
**URL:** <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-G/section-211.130>\
**Scope:** Establishes requirements for packaging and labeling operations including line clearance and label reconciliation.

**Key Requirements:**

* Written procedures for receipt, identification, storage, handling, sampling, examination, and/or testing of labeling and packaging materials

* Issuance of labeling must be carefully controlled

* Strict control of labels to prevent mix-ups

* Label reconciliation: accounting for all labeling issued for use in operations, reconciliation with used/destroyed quantities

**Relevance to Automated Review:** For packaging batches, automated review must verify complete label reconciliation with documented accounting for all labels issued vs. used vs. destroyed. Discrepancies in label reconciliation trigger MAJOR or CRITICAL findings.

***

#### 7. 21 CFR 211.68 - Automatic, Mechanical, and Electronic Equipment

**Full Title:** 21 CFR § 211.68 - Automatic, mechanical, and electronic equipment\
**Issuing Authority:** US Food and Drug Administration (FDA)\
**Year:** Current (continuously updated)\
**URL:** <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-D/section-211.68>\
**Scope:** Requires that automatic, mechanical, or electronic equipment be routinely calibrated, inspected, or checked according to a written program. Output must be verified.

**Key Requirements:**

* Equipment must be routinely calibrated, inspected, or checked according to written program

* Written records of inspections, calibrations, and adjustments must be maintained

* Equipment must be of appropriate design and adequate capacity

**Relevance to Automated Review:** Batch records must document that all equipment used was within valid calibration at time of use. Automated review cross-references equipment IDs against calibration database and flags expired calibrations as CRITICAL findings.

***

#### 8. 21 CFR Part 11 - Electronic Records; Electronic Signatures

**Full Title:** 21 CFR Part 11 - Electronic records; electronic signatures\
**Issuing Authority:** US Food and Drug Administration (FDA)\
**Year:** Current (effective 1997, continuously updated)\
**URL:** <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11>\
**Scope:** Establishes requirements for electronic records and electronic signatures to be considered trustworthy, reliable, and equivalent to paper records and handwritten signatures. Critical for electronic batch record (EBR) systems.

**Key Requirements (Subpart B - Electronic Records):**

* § 11.10: Controls for closed systems (validation, audit trails, authority checks, device checks, personnel training, data integrity)

* § 11.30: Controls for open systems (additional controls such as document encryption)

* § 11.50: Signature manifestations (signed record must clearly indicate meaning of signature, date/time of signature)

* § 11.70: Signature/record linking (must not be excised, copied, or transferred to falsify records)

**Key Requirements (Subpart C - Electronic Signatures):**

* § 11.100: General requirements for electronic signatures

* § 11.200: Components and controls (unique individual identification, signature verification)

* § 11.300: Controls for identification codes/passwords

**Relevance to Automated Review:** For electronic batch records, automated review must verify:

* All electronic signatures are valid (authorized user, valid credential)

* Audit trails are complete and unmodified

* No evidence of unauthorized record modifications

* Timestamps are present and sequential
  Data integrity findings related to audit trails or signature validity trigger CRITICAL findings.

***

#### 9. 21 CFR 211.165 - Testing and Release for Distribution

**Full Title:** 21 CFR § 211.165 - Testing and release for distribution\
**Issuing Authority:** US Food and Drug Administration (FDA)\
**Year:** Current (continuously updated)\
**URL:** <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-F/section-211.165>\
**Scope:** Requires that finished pharmaceuticals meet specifications for identity, strength, quality, and purity before release. Specifies acceptance criteria.

**Key Requirements:**

* Finished pharmaceuticals must be tested against specifications for identity, strength, quality, purity

* Such specifications must include scientifically sound and appropriate specifications, standards, sampling plans, and test procedures

* Acceptance criteria must be adequate to ensure product meets appropriate standards

**Relevance to Automated Review:** QC test results must be compared against approved specifications. Any OOS result must trigger HOLD (pending investigation) or REJECT disposition.

***

#### 10. 21 CFR 211.100 - Written Procedures; Deviations

**Full Title:** 21 CFR § 211.100 - Written procedures; deviations\
**Issuing Authority:** US Food and Drug Administration (FDA)\
**Year:** Current (continuously updated)\
**URL:** <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-E/section-211.100>\
**Scope:** Requires written procedures for production and process control and requires that deviations be recorded and justified.

**Key Requirements:**

* Written procedures must be followed in execution of production and process control functions

* Deviations from written procedures must be recorded and justified

**Relevance to Automated Review:** Batch records must demonstrate compliance with approved procedures (MBR). Any deviation must be documented with investigation. Undocumented deviations (detected by comparing actual to expected values) trigger findings.

***

## FDA Guidance Documents

FDA guidance documents represent the Agency's current thinking on regulatory topics. While guidances are not legally enforceable, they describe FDA's interpretation of regulations and establish expectations for industry compliance.

#### 11. Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production

**Full Title:** Guidance for Industry: Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production\
**Issuing Authority:** US Food and Drug Administration (FDA), Center for Drug Evaluation and Research (CDER)\
**Year:** October 2006\
**URL:** <https://www.fda.gov/regulatory-information/search-fda-guidance-documents/investigating-out-specification-oos-test-results-pharmaceutical-production>\
**PDF Direct Link:** <https://www.fda.gov/media/71001/download>\
**Scope:** Establishes the framework for investigating out-of-specification laboratory test results. Defines Phase I (laboratory investigation) and Phase II (full production investigation) methodology.

**Key Guidance Points:**

* OOS result must prompt immediate investigation

* Phase I: Laboratory investigation to determine if OOS is due to laboratory error

* If Phase I does not identify lab error, proceed to Phase II: Full investigation of manufacturing process

* Investigation must be scientifically sound and thorough

* All OOS results and investigations must be documented

* Batch cannot be released based on passing retest without documented investigation

**Relevance to Automated Review:** Any OOS test result automatically triggers HOLD disposition (confidence score ≤69%) until investigation is complete. Batch records must document investigation status. Batches with unresolved OOS are not approvable for release.

***

#### 12. Data Integrity and Compliance With Drug CGMP - Questions and Answers

**Full Title:** Data Integrity and Compliance With Drug CGMP - Questions and Answers: Guidance for Industry\
**Issuing Authority:** US Food and Drug Administration (FDA), CDER, Center for Biologics Evaluation and Research (CBER), Office of Regulatory Affairs (ORA)\
**Year:** December 2018 (updated guidance)\
**URL:** <https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers-guidance-industry>\
**PDF Direct Link:** <https://www.fda.gov/media/119267/download>\
**Scope:** FDA's comprehensive guidance on data integrity expectations for pharmaceutical manufacturing. Addresses ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate + Complete, Consistent, Enduring, Available).

**Key Guidance Points:**

* Data integrity is fundamental to drug quality and safety

* Records must be contemporaneous (created at time of activity)

* Audit trails must be reviewed regularly

* Original data must be preserved

* Electronic systems must have appropriate controls to ensure data integrity

* Hybrid systems (paper + electronic) require controls to prevent data discrepancies

**Relevance to Automated Review:** Automated review includes specific data integrity checks: audit trail review, signature validation, timestamp verification, detection of data modifications, contemporaneous documentation verification. Data integrity concerns trigger CRITICAL findings and REJECT consideration.

***

#### 13. Process Validation: General Principles and Practices

**Full Title:** Guidance for Industry: Process Validation: General Principles and Practices\
**Issuing Authority:** US Food and Drug Administration (FDA), CDER, CBER\
**Year:** January 2011\
**URL:** <https://www.fda.gov/regulatory-information/search-fda-guidance-documents/process-validation-general-principles-and-practices>\
**PDF Direct Link:** <https://www.fda.gov/media/71021/download>\
**Scope:** Describes FDA's current thinking on process validation throughout the product lifecycle. Introduces the three-stage approach: Stage 1 (Process Design), Stage 2 (Process Qualification including IQ/OQ/PQ), Stage 3 (Continued Process Verification).

**Key Guidance Points:**

* Process validation demonstrates that manufacturing process consistently produces product meeting predetermined specifications

* Stage 2 (Process Qualification) includes Performance Qualification (PQ) / Process Performance Qualification (PPQ) batches

* Stage 3 requires ongoing monitoring and trending to ensure continued process control

* Changes to process require revalidation or validation protocol amendment

**Relevance to Automated Review:** Process validation batches (Stage 2 PPQ batches) require mandatory human review regardless of automated confidence score. Stage 3 continuous verification data feeds into trending algorithms that may flag batches for enhanced review.

***

#### 14. Quality Systems Approach to Pharmaceutical CGMP Regulations

**Full Title:** Guidance for Industry: Quality Systems Approach to Pharmaceutical CGMP Regulations\
**Issuing Authority:** US Food and Drug Administration (FDA), CDER, CBER, ORA\
**Year:** September 2006\
**URL:** <https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-quality-systems-approach-pharmaceutical-cgmp-regulations>\
**PDF Direct Link:** <https://www.fda.gov/media/71023/download>\
**Scope:** Describes how quality system principles apply to drug manufacturing under 21 CFR Parts 210 and 211.

**Key Guidance Points:**

* Quality system consists of management responsibilities, resources, production and process controls, and quality system evaluation

* Management review of quality metrics and batch disposition trends

* CAPA system to identify and correct quality issues

**Relevance to Automated Review:** Automated review metrics (agreement rates, finding trends, disposition patterns) should be incorporated into management review. Trending of findings across batches supports continuous improvement.

***

## European Union GMP (EudraLex Volume 4)

The European Commission's Good Manufacturing Practice (GMP) guidelines are published in EudraLex Volume 4. These regulations apply to pharmaceutical manufacturing in the EU and EEA countries.

#### 15. EudraLex Volume 4, Chapter 4 - Documentation

**Full Title:** EudraLex - Volume 4 - Good Manufacturing Practice (GMP) Guidelines, Chapter 4: Documentation\
**Issuing Authority:** European Commission, Directorate-General for Health and Food Safety\
**Year:** Current (last updated 2011, under continuous review)\
**URL:** <https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en>\
**Direct PDF:** <https://health.ec.europa.eu/system/files/2016-11/2014-11_vol4_chapter_4.pdf>\
**Scope:** Establishes EU requirements for pharmaceutical documentation including specifications, manufacturing instructions, procedures, records, and batch records.

**Key Requirements:**

* Documents must be clear, unambiguous, and available in written or electronic form

* Standard Operating Procedures (SOPs) and work instructions must be clearly laid out

* Master formulas and processing instructions must include product name, reference code, description of dosage form, specifications, manufacturing instructions

* Batch manufacturing records must provide complete history of each batch and all pertinent circumstances relevant to quality

**Relevance to Automated Review:** EU GMP Chapter 4 parallels 21 CFR 211 Subpart J requirements for batch documentation. Automated review systems must accommodate both US and EU regulatory frameworks for multinational operations.

***

#### 16. EudraLex Volume 4, Annex 11 - Computerised Systems

**Full Title:** EudraLex - Volume 4, Annex 11: Computerised Systems\
**Issuing Authority:** European Commission, Directorate-General for Health and Food Safety\
**Year:** June 2011 (current version)\
**URL:** <https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en>\
**Direct PDF:** <https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf>\
**Scope:** EU equivalent of 21 CFR Part 11, establishing requirements for computerized systems used in GMP-regulated activities including electronic batch records.

**Key Requirements:**

* Risk assessment to determine extent of validation and data integrity controls

* System validation with documented evidence

* Audit trails to record creation, modification, or deletion of GMP-relevant data

* Change and configuration management

* Periodic evaluation of computerized systems

* Business continuity planning including data backup

**Relevance to Automated Review:** Electronic batch record systems and automated review platforms must be validated per Annex 11. Audit trail requirements mirror 21 CFR Part 11. Data integrity checks in automated review align with Annex 11 expectations.

***

#### 17. EudraLex Volume 4, Annex 16 - Certification by a Qualified Person and Batch Release

**Full Title:** EudraLex - Volume 4, Annex 16: Certification by a Qualified Person and Batch Release\
**Issuing Authority:** European Commission, Directorate-General for Health and Food Safety\
**Year:** October 2021 (current version, effective February 2022)\
**URL:** <https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en>\
**Direct PDF:** <https://health.ec.europa.eu/system/files/2022-02/2022-02_annex16_0.pdf>\
**Scope:** Defines the role and responsibilities of the Qualified Person (QP) in certifying batches for release in the EU. Establishes requirements for QP certification and batch release procedures.

**Key Requirements:**

* Qualified Person must certify each batch before release

* QP certification confirms manufacturing and testing complies with marketing authorization and GMP

* QP must have access to all necessary information for certification decision

* Batch records, test results, and compliance documentation must be available to QP

* QP must ensure any deviations or non-conformances have been properly investigated

**Relevance to Automated Review:** For EU operations, automated batch record review provides supporting documentation for QP certification, but does not replace the QP's responsibility. RELEASE recommendations with high confidence (≥90%) enable QP to certify batches efficiently. Lower confidence scores signal need for enhanced QP review.

***

#### 18. EudraLex Volume 4, Chapter 6 - Quality Control

**Full Title:** EudraLex - Volume 4, Chapter 6: Quality Control\
**Issuing Authority:** European Commission, Directorate-General for Health and Food Safety\
**Year:** Current (last updated 2014)\
**URL:** <https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en>\
**Direct PDF:** <https://health.ec.europa.eu/system/files/2016-11/2014-08_vol-4_chapter_6.pdf>\
**Scope:** Establishes EU requirements for quality control including laboratory controls, specifications, sampling, and testing.

**Key Requirements:**

* QC department must be independent from production

* Adequate laboratory facilities and qualified personnel required

* Documented procedures for sampling, testing, and results reporting

* Test results must be compared against specifications

* OOS results must be investigated

* Batch records must include QC test results before release decision

**Relevance to Automated Review:** QC test results in batch records must meet documentation standards per Chapter 6. Automated review verifies presence of complete QC data, comparison to specifications, and OOS investigation documentation.

***

#### 19. EudraLex Volume 4, Chapter 1 - Pharmaceutical Quality System

**Full Title:** EudraLex - Volume 4, Chapter 1: Pharmaceutical Quality System\
**Issuing Authority:** European Commission, Directorate-General for Health and Food Safety\
**Year:** Current (last updated 2014)\
**URL:** <https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en>\
**Direct PDF:** <https://health.ec.europa.eu/system/files/2016-11/2014-08_vol-4_chapter_1.pdf>\
**Scope:** Describes the pharmaceutical quality system (PQS) required for GMP compliance, including management responsibilities, quality risk management, change control, and CAPA.

**Key Requirements:**

* Management must establish quality objectives

* Quality risk management (QRM) must be used throughout product lifecycle

* Change control system to evaluate changes that may affect product quality

* Corrective and Preventive Action (CAPA) system

* Management review of quality system effectiveness

**Relevance to Automated Review:** Automated review findings feed into CAPA system. Trending analysis supports quality risk management. Management review should include metrics on automated review performance and disposition patterns.

***

## ICH Guidelines (International Council for Harmonisation)

ICH guidelines are developed through collaboration between regulatory authorities and the pharmaceutical industry to harmonize technical requirements across regions.

#### 20. ICH Q7 - Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients

**Full Title:** ICH Q7: Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients\
**Issuing Authority:** International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use (ICH)\
**Year:** November 2000 (current)\
**URL:** <https://www.ich.org/page/quality-guidelines>\
**Direct PDF:** <https://database.ich.org/sites/default/files/Q7%20Guideline.pdf>\
**Scope:** Provides guidance on GMP for manufacturing of active pharmaceutical ingredients (APIs) under an appropriate quality management system. Section 6 addresses documentation requirements for API manufacturing.

**Key Requirements (Section 6 - Documentation):**

* Documentation system should define specifications, manufacturing formulas, processing instructions, procedures, and records

* Batch production records should include complete history of each batch

* Laboratory control records should document testing performed

* Batch records should be reviewed to ensure completion and compliance before release

**Relevance to Automated Review:** For API manufacturing batches, automated review requirements align with ICH Q7 Section 6. Documentation standards for API batches parallel finished dosage form requirements but may have API-specific parameters (e.g., polymorphic form, residual solvents).

***

#### 21. ICH Q8(R2) - Pharmaceutical Development

**Full Title:** ICH Q8(R2): Pharmaceutical Development\
**Issuing Authority:** International Council for Harmonisation (ICH)\
**Year:** August 2009 (R2 revision)\
**URL:** <https://www.ich.org/page/quality-guidelines>\
**Direct PDF:** <https://database.ich.org/sites/default/files/Q8%28R2%29%20Guideline.pdf>\
**Scope:** Describes pharmaceutical development studies and the relationship between critical quality attributes (CQAs) and critical process parameters (CPPs). Introduces concepts of Quality by Design (QbD) and design space.

**Key Concepts:**

* Critical Quality Attributes (CQAs): Physical, chemical, biological, or microbiological properties with appropriate limits to ensure desired product quality

* Critical Process Parameters (CPPs): Process parameters whose variability has impact on CQA and should be monitored or controlled

* Design Space: Multidimensional combination of input variables and process parameters demonstrated to provide assurance of quality

**Relevance to Automated Review:** Field weighting in automated review prioritizes CPPs and CQAs (assigned higher weight multipliers). Process parameters affecting CQAs are classified as Critical Quality fields (3.0x weight). Automated review verifies process operated within design space.

***

#### 22. ICH Q9(R1) - Quality Risk Management

**Full Title:** ICH Q9(R1): Quality Risk Management\
**Issuing Authority:** International Council for Harmonisation (ICH)\
**Year:** May 2023 (R1 revision, replaces 2005 original)\
**URL:** <https://www.ich.org/page/quality-guidelines>\
**Direct PDF:** <https://database.ich.org/sites/default/files/ICH_Q9%28R1%29_Guideline_Step4_2023_0126.pdf>\
**Scope:** Provides principles and examples of tools for quality risk management (QRM). Emphasizes that risk management decisions should be based on scientific knowledge and ultimately protect the patient.

**Key Principles:**

* Risk assessment should be based on scientific knowledge

* Level of effort, formality, and documentation should be commensurate with level of risk

* QRM is an iterative process throughout product lifecycle

* Risk management tools include FMEA, HACCP, risk ranking, and others

**Relevance to Automated Review:** The confidence scoring methodology implements QRM principles by applying risk-based field weighting (higher weights for quality-impacting fields). Review pathway (auto-approve vs. full review) is commensurate with assessed risk level (confidence score). Trending analysis identifies emerging risks.

***

#### 23. ICH Q10 - Pharmaceutical Quality System

**Full Title:** ICH Q10: Pharmaceutical Quality System\
**Issuing Authority:** International Council for Harmonisation (ICH)\
**Year:** June 2008 (current)\
**URL:** <https://www.ich.org/page/quality-guidelines>\
**Direct PDF:** <https://database.ich.org/sites/default/files/Q10%20Guideline.pdf>\
**Scope:** Describes a comprehensive model for an effective pharmaceutical quality system (PQS) based on ISO quality concepts and applicable to pharmaceutical product lifecycle stages.

**Key Elements:**

* Management responsibility including quality policy and review

* EOF

* Resource management including personnel, infrastructure, work environment

* Product realization including planning, customer focus, design and development, production

* Measurement, analysis and improvement including monitoring, internal audit, CAPA, management review

**Relevance to Automated Review:** Automated review is a tool within the PQS measurement and analysis framework. Metrics from automated review (finding trends, disposition patterns) feed into management review. CAPA linkage ensures findings drive improvement.

***

#### 24. ICH Q2(R2) - Validation of Analytical Procedures

**Full Title:** ICH Q2(R2): Validation of Analytical Procedures\
**Issuing Authority:** International Council for Harmonisation (ICH)\
**Year:** March 2023 (R2 revision)\
**URL:** <https://www.ich.org/page/quality-guidelines>\
**Direct PDF:** <https://database.ich.org/sites/default/files/ICH_Q2%28R2%29_Document_Step4_2023_0126.pdf>\
**Scope:** Establishes validation characteristics for analytical procedures including accuracy, precision, specificity, limit of detection, limit of quantitation, linearity, and range.

**Relevance to Automated Review:** QC test results in batch records must be generated using validated analytical methods per ICH Q2. Automated review may flag unusual method variability (e.g., high RSD) as requiring investigation.

***

## WHO Guidelines (World Health Organization)

WHO provides international GMP standards particularly important for global health products and markets outside ICH regions.

#### 25. WHO TRS 986, Annex 2 - WHO Good Manufacturing Practices for Pharmaceutical Products

**Full Title:** WHO Technical Report Series No. 986, Annex 2: WHO good manufacturing practices for pharmaceutical products: main principles\
**Issuing Authority:** World Health Organization (WHO)\
**Year:** 2014\
**URL:** <https://www.who.int/publications/m/item/trs-986-annex-2>\
**Direct PDF:** <https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/production/trs986-annex2-who-gmp-pharmaceutical-products.pdf>\
**Scope:** International standard for pharmaceutical GMP covering all aspects of production from raw materials to finished products. Widely adopted in non-ICH regions.

**Key Requirements:**

* Quality management system requirements

* Documentation including specifications, formulas, processing and packaging instructions, procedures, records

* Production operations including prevention of cross-contamination and mix-ups

* Quality control including sampling, testing, and stability studies

* Batch release procedures

**Relevance to Automated Review:** For multinational operations or global health products, automated review must accommodate WHO GMP standards in addition to FDA/EU requirements. Core documentation requirements align closely with 21 CFR 211 and EU GMP.

***

#### 26. WHO TRS 996, Annex 5 - Guidance on Good Data and Record Management Practices

**Full Title:** WHO Technical Report Series No. 996, Annex 5: Guidance on good data and record management practices\
**Issuing Authority:** World Health Organization (WHO)\
**Year:** 2016\
**URL:** <https://www.who.int/publications/m/item/who-trs-996-annex05>\
**Direct PDF:** <https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/production/trs996-annex05-data-record-management.pdf>\
**Scope:** International guidance on data integrity and record management aligned with ALCOA+ principles. Addresses both paper and electronic data systems.

**Key Principles:**

* Data governance: Organizational structures and procedures

* ALCOA+ principles: Attributable, Legible, Contemporaneous, Original, Accurate, Complete, Consistent, Enduring, Available

* Data lifecycle: Creation, processing, review, reporting, archival, retrieval, destruction

* Audit trail requirements for electronic systems

**Relevance to Automated Review:** WHO data integrity guidance aligns with FDA and MHRA expectations. Automated review data integrity checks implement ALCOA+ verification. Applicable to paper-based records (via OCR/data entry validation) and electronic records.

***

## PIC/S Guidelines (Pharmaceutical Inspection Co-operation Scheme)

PIC/S is an international cooperation framework for GMP inspection authorities. PIC/S guidelines are harmonized with EU GMP and widely recognized globally.

#### 27. PIC/S PE 009 - Guide to Good Manufacturing Practice for Medicinal Products

**Full Title:** PIC/S PE 009: Guide to Good Manufacturing Practice for Medicinal Products (Parts I and II)\
**Issuing Authority:** Pharmaceutical Inspection Co-operation Scheme (PIC/S)\
**Year:** Current (continuously updated, aligned with EU GMP)\
**URL:** <https://picscheme.org/en/publications>\
**Direct Link:** <https://picscheme.org/en/publications?tri=gmp>\
**Scope:** PIC/S GMP guide is harmonized with EU GMP (EudraLex Volume 4). Recognized by 50+ regulatory authorities worldwide.

**Content:**

* Part I: Basic Requirements for Medicinal Products (Chapters 1-9, equivalent to EU GMP Chapters)

* Part II: Basic Requirements for Active Substances used as Starting Materials (equivalent to ICH Q7)

* Annexes covering specialized topics (sterile products, biological products, radiopharmaceuticals, computerized systems, etc.)

**Relevance to Automated Review:** PIC/S PE 009 requirements for documentation and batch records align with EU GMP. Used in regulatory inspections across PIC/S member countries. Automated review systems must meet PIC/S expectations for global compliance.

***

#### 28. PIC/S PI 041-1 - Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments

**Full Title:** PIC/S PI 041-1: Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments\
**Issuing Authority:** Pharmaceutical Inspection Co-operation Scheme (PIC/S)\
**Year:** July 2021 (Revision 1)\
**URL:** <https://picscheme.org/en/publications>\
**Direct PDF Link:** <https://picscheme.org/docview/4234>\
**Scope:** Comprehensive guidance on data integrity expectations for pharmaceutical manufacturing and distribution. Expands on ALCOA+ principles with detailed implementation expectations.

**Key Topics:**

* Data governance and organizational responsibilities

* Data lifecycle management

* Controls for paper-based systems

* Controls for computerized systems

* Hybrid systems (paper and electronic combinations)

* Audit trails and review

* Data retention and archival

**Relevance to Automated Review:** PIC/S PI 041-1 is one of the most detailed data integrity guidances globally. Automated review data integrity checks are designed to detect violations of PI 041-1 expectations including:

* Contemporaneous documentation verification

* Audit trail completeness and review

* Detection of data manipulation or backdating

* Verification of signature validity

***

## USP Chapters (United States Pharmacopeia)

USP provides compendial standards for drug quality including test methods and specifications. USP chapters referenced in batch records must be verified during review.

#### 29. USP <905> Uniformity of Dosage Units

**Full Title:** USP General Chapter <905> Uniformity of Dosage Units\
**Issuing Authority:** United States Pharmacopeia (USP)\
**Year:** Current (revised periodically)\
**URL:** <https://www.usp.org/> (subscription required for full text)\
**Scope:** Establishes test methods and acceptance criteria for content uniformity and weight variation testing of solid oral dosage forms.

**Key Requirements:**

* Two test methods: Content Uniformity (CU) or Weight Variation (WV)

* Acceptance criteria based on Acceptance Value (AV) calculation

* Stage 1: Test 10 units, Stage 2 (if needed): Test additional 20 units

**Relevance to Automated Review:** Batch records for tablets/capsules typically include USP <905> testing. Automated review verifies test results meet acceptance criteria and proper number of units tested.

***

#### 30. USP <701> Disintegration

**Full Title:** USP General Chapter <701> Disintegration\
**Issuing Authority:** United States Pharmacopeia (USP)\
**Year:** Current\
**URL:** <https://www.usp.org/>\
**Scope:** Defines test method for tablet disintegration time.

**Relevance to Automated Review:** Disintegration testing data may be included in batch records for immediate-release tablets. Results must meet acceptance criteria defined in product specification.

***

#### 31. USP <711> Dissolution

**Full Title:** USP General Chapter <711> Dissolution\
**Issuing Authority:** United States Pharmacopeia (USP)\
**Year:** Current\
**URL:** <https://www.usp.org/>\
**Scope:** Establishes dissolution test apparatus and procedures for oral dosage forms.

**Key Requirements:**

* Multiple apparatus types (basket, paddle, etc.)

* Acceptance criteria based on Q value (percentage dissolved at specified time)

* Staged testing approach (S1, S2, S3) depending on results

**Relevance to Automated Review:** Dissolution testing is critical for oral solid dosage forms. Automated review verifies results meet specifications and proper apparatus/method used per approved product monograph.

***

#### 32. USP <621> Chromatography

**Full Title:** USP General Chapter <621> Chromatography\
**Issuing Authority:** United States Pharmacopeia (USP)\
**Year:** Current\
**URL:** <https://www.usp.org/>\
**Scope:** General requirements for chromatographic methods including HPLC, GC, and TLC.

**Relevance to Automated Review:** Assay and related substances testing typically use HPLC per USP <621>. Batch records should document system suitability, retention times, and integration criteria. Automated review may flag unusual chromatographic performance (e.g., low plate count, poor resolution).

***

#### 33. USP <1216> Tablet Friability

**Full Title:** USP General Chapter <1216> Tablet Friability (formerly <1216>)\
**Issuing Authority:** United States Pharmacopeia (USP)\
**Year:** Current\
**URL:** <https://www.usp.org/>\
**Scope:** Test method for tablet physical strength using friability tester (tumbling drum).

**Key Requirements:**

* Test typically uses 6.5g of tablets or 10 tablets (whichever is closer to 6.5g)

* Tablets tumbled 100 revolutions at 25 rpm

* Acceptance: Typically ≤1.0% weight loss

**Relevance to Automated Review:** Friability testing is common in-process control for tablets. Results must meet acceptance criteria specified in batch record.

***

#### 34. USP <61> and <62> Microbiological Examination

**Full Title:** USP <61> Microbiological Examination of Nonsterile Products: Microbial Enumeration Tests | USP <62> Microbiological Examination of Nonsterile Products: Tests for Specified Microorganisms\
**Issuing Authority:** United States Pharmacopeia (USP)\
**Year:** Current\
**URL:** <https://www.usp.org/>\
**Scope:** Test methods for microbial limits testing of non-sterile pharmaceutical products.

**Key Requirements:**

* USP <61>: Total aerobic microbial count (TAMC) and total yeast and mold count (TYMC)

* USP <62>: Tests for specific objectionable organisms (E. coli, Salmonella, S. aureus, P. aeruginosa)

* Acceptance criteria depend on product type and route of administration

**Relevance to Automated Review:** Microbial limits testing results for non-sterile products must be documented and meet specifications. Critical for oral and topical products.

***

## Industry Standards and Best Practices

#### 35. ISPE GAMP 5 - A Risk-Based Approach to Compliant GxP Computerized Systems

**Full Title:** ISPE GAMP® 5 Guide: A Risk-Based Approach to Compliant GxP Computerized Systems (Second Edition)\
**Issuing Authority:** International Society for Pharmaceutical Engineering (ISPE)\
**Year:** 2022 (Second Edition)\
**URL:** <https://ispe.org/publications/guidance-documents/gamp-5-second-edition>\
**Scope:** Industry standard for validation of computerized systems used in regulated GxP environments including EBR systems and automated review platforms.

**Key Concepts:**

* Risk-based approach to validation

* Software categories based on complexity (Category 1-5)

* Lifecycle approach to computer system validation

* Data integrity controls for computerized systems

**Relevance to Automated Review:** Automated batch record review platforms and electronic batch record systems must be validated per GAMP 5 principles. Risk-based validation approach determines extent of testing based on system criticality.

***

#### 36. MHRA GxP Data Integrity Guidance and Definitions

**Full Title:** GXP Data Integrity Guidance and Definitions\
**Issuing Authority:** Medicines and Healthcare products Regulatory Agency (MHRA), UK\
**Year:** March 2018 (Revision 1)\
**URL:** <https://www.gov.uk/government/publications/guidance-on-gxp-data-integrity>\
**Direct PDF:** <https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf>\
**Scope:** UK regulatory guidance on data integrity expectations aligned with EU and global standards. One of the most comprehensive data integrity guidances available.

**Key Principles:**

* ALCOA+ principle definitions and explanations

* Governance structures for data integrity

* Controls for electronic and paper systems

* Risk-based approach to data integrity controls

* Common data integrity deficiencies observed in inspections

**Relevance to Automated Review:** MHRA guidance is widely referenced globally even outside UK jurisdiction. Automated review data integrity checks align with MHRA expectations. Findings related to data integrity use MHRA terminology (e.g., "not contemporaneous," "audit trail gaps").

***

#### 37. FDA Warning Letters Database

**Full Title:** FDA Warning Letters (Database)\
**Issuing Authority:** US Food and Drug Administration (FDA)\
**Year:** Ongoing (continuously updated)\
**URL:** <https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters>\
**Scope:** Publicly available database of FDA warning letters issued to pharmaceutical manufacturers for GMP violations. Valuable source of real-world citation examples.

**Common Batch Record Citations:**

* Incomplete batch records (missing data fields)

* Unsigned batch records or invalid signatures

* Deviations not investigated

* OOS results not properly investigated

* Equipment used beyond calibration date

* Inadequate QA review before release

**Relevance to Automated Review:** Warning letter citations inform the development of automated review checks. Common FDA citation patterns are programmed as detection rules to prevent similar violations.

***

## Additional Regulatory Resources

#### 38. FDA Orange Book (Approved Drug Products with Therapeutic Equivalence Evaluations)

**URL:** <https://www.fda.gov/drugs/drug-approvals-and-databases/approved-drug-products-therapeutic-equivalence-evaluations-orange-book>\
**Relevance:** Reference for approved drug products and formulations. Batch records must correspond to approved NDA/ANDA formulation.

#### 39. FDA Purple Book (Lists of Licensed Biological Products)

**URL:** <https://purplebooksearch.fda.gov/>\
**Relevance:** Reference for approved biological products (BLA). Batch records for biologics must correspond to licensed manufacturing process.

#### 40. EMA Product Information

**URL:** <https://www.ema.europa.eu/en/medicines>\
**Relevance:** European marketing authorization information. Batch records must comply with approved MA dossier specifications.

***

## Document Maintenance and Updates

**Quarterly URL Verification:** All URLs in this document are verified quarterly. Broken links are updated with current URLs or archived versions.

**Regulatory Update Monitoring:** The following sources are monitored for new or updated guidance:

* FDA Guidance Documents: <https://www.fda.gov/regulatory-information/search-fda-guidance-documents>

* EMA Guidelines: <https://www.ema.europa.eu/en/human-regulatory/research-development/scientific-guidelines>

* ICH Guidelines: <https://www.ich.org/page/quality-guidelines>

* WHO Guidelines: <https://www.who.int/teams/health-product-and-policy-standards/standards-and-specifications/norms-and-standards-for-pharmaceuticals>

* PIC/S Publications: <https://picscheme.org/en/publications>

**Incorporation Timeline:** New guidances are reviewed within 15 days of publication and incorporated into this reference document within 30 days if relevant to batch record review.

***

## How to Use This Reference Document

**For QA Professionals:** Use this document to:

* Cite regulatory basis when justifying disposition decisions

* Access source regulations when interpreting batch record requirements

* Stay current on regulatory expectations via the update monitoring

**For Automated Review System Developers:** Use this document to:

* Ensure detection rules align with current regulatory requirements

* Map findings to specific regulatory citations

* Update algorithms when new guidance is issued

**For Auditors and Inspectors:** Use this document to:

* Verify that automated review logic incorporates applicable regulations

* Trace finding classifications to regulatory basis

* Confirm system validation includes regulatory compliance verification

**For Training Programs:** Use this document as:

* Comprehensive reference for regulatory requirements training

* Source material for batch record review training modules

* Bibliography for onboarding materials

***

## Document Revision History

| Version | Date       | Author                                       | Changes                             |
| ------- | ---------- | -------------------------------------------- | ----------------------------------- |
| 1.0     | 2024-01-15 | Regulatory Affairs + QA Knowledge Management | Initial release with 40 key sources |

***

**Document Owner:** Regulatory Affairs Department (in collaboration with Quality Assurance)\
**Review Frequency:** Quarterly for URL verification; Continuous monitoring for regulatory updates\
**Next Scheduled Review:** 2024-04-15

**Approval Signatures:**

* Regulatory Affairs Director: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_

* QA Director: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_

***

# Part 12: Glossary

## Document Purpose

This glossary provides comprehensive definitions of terminology used in pharmaceutical batch record review, manufacturing operations, quality assurance, and regulatory compliance. Each term includes the definition, common abbreviations, and context for how the term is used in batch record review activities.

**Intended Audience:** All personnel involved in pharmaceutical manufacturing, quality assurance, regulatory compliance, and batch record review including new hires, cross-functional team members, and automated system developers.

**Organization:** Terms are organized alphabetically. Cross-references to related terms are provided where applicable.

**Usage Notes:**

* Terms marked with \[REGULATORY] have specific regulatory definitions that must be followed

* Terms marked with \[CRITICAL] relate to critical quality attributes or critical process parameters

* Terms marked with \[GxP] are used in regulated GMP/GLP/GCP contexts

***

## A

### ALCOA / ALCOA+

**Definition:** Acronym representing fundamental data integrity principles. ALCOA stands for: Attributable, Legible, Contemporaneous, Original, Accurate. ALCOA+ adds: Complete, Consistent, Enduring, Available.

**Context in Batch Record Review:** All batch record data must meet ALCOA+ principles. Automated review systems check for violations such as:

* Attributable: Every entry must identify who made it (signature/user ID required)

* Legible: Data must be readable and understandable

* Contemporaneous: Data recorded at time of activity (not reconstructed later)

* Original: Original data preserved (or certified true copy)

* Accurate: Data reflects what actually occurred

* Complete: All required data present

* Consistent: Data internally consistent and chronologically sound

* Enduring: Data preserved for required retention period

* Available: Data readily accessible for review/inspection

**Regulatory Basis:** FDA Data Integrity Guidance, MHRA GxP Data Integrity Guidance, WHO TRS 996 Annex 5

**Related Terms:** Data Integrity, Audit Trail, Electronic Signature

\[GxP]

***

### API (Active Pharmaceutical Ingredient)

**Definition:** The biologically active component of a drug product responsible for the therapeutic effect. Also called Drug Substance. Distinct from excipients (inactive ingredients).

**Context in Batch Record Review:** API identity, quantity, and purity are critical quality attributes. Batch records must document:

* API lot number and supplier

* Certificate of Analysis (COA) verification

* Actual weight/quantity of API dispensed and used

* In-process testing to verify API content

* Finished product assay confirming API potency

**Regulatory Basis:** 21 CFR 314.50(d)(1), ICH Q7 (API GMP)

**Related Terms:** Drug Substance, Assay, Potency, Certificate of Analysis

\[CRITICAL]

***

### AR Number (Analytical Request Number)

**Definition:** Unique identifier assigned to a laboratory testing request linking the sample to the test results and batch record. Also called Lab Request Number or Sample ID.

**Context in Batch Record Review:** Batch records must reference AR numbers for all QC testing to ensure traceability. Automated review verifies:

* AR number present for each required test

* AR number links to valid LIMS record

* Test results match between batch record and LIMS

* All required tests have corresponding AR numbers

**Related Terms:** LIMS, Certificate of Analysis, QC Testing, Traceability

***

### Assay

**Definition:** Quantitative analytical test to determine the amount or concentration of active pharmaceutical ingredient in a sample, typically expressed as percentage of label claim (e.g., 99.5% of 500mg = 497.5mg API per tablet).

**Context in Batch Record Review:** Assay results are critical for batch release. Typical specifications: 95-105% of label claim for tablets/capsules. Automated review flags:

* OOS assay results (outside specification)

* Trending near specification limits

* Unusual variability between samples

* Missing assay data

**Test Methods:** Typically High-Performance Liquid Chromatography (HPLC) or UV spectrophotometry

**Regulatory Basis:** 21 CFR 211.165 (testing before release), USP <621> (chromatography)

**Related Terms:** Potency, HPLC, API, Content Uniformity, OOS

\[CRITICAL]

***

### Audit Trail

**Definition:** Secure, computer-generated, time-stamped electronic record documenting the sequence of activities affecting an electronic record. Shows who made each entry/change, what was changed (original and new value), when it occurred, and why (reason for change).

**Context in Batch Record Review:** For electronic batch records, audit trail review is mandatory. Automated systems check for:

* Audit trail completeness (no gaps or deletions)

* Unauthorized modifications to critical data

* Changes without documented justification

* Timestamps out of sequence

* Same user making entry and checking entry (lack of independence)

* Bulk changes or patterns suggesting data manipulation

**Regulatory Basis:** 21 CFR Part 11.10(e), EU GMP Annex 11, PIC/S PI 041-1

**Related Terms:** Electronic Batch Record (EBR), Data Integrity, 21 CFR Part 11, ALCOA+

\[GxP] \[REGULATORY]

***

## B

### Batch

**Definition:** Specific quantity of drug product or intermediate that is intended to be uniform in character and quality, and is produced during a defined cycle of manufacture. Identified by a unique batch number/lot number.

**Context in Batch Record Review:** The batch is the unit of manufacture and release. One batch record documents one batch. Batch size is defined in the Master Batch Record (MBR) and may be specified as a target weight, number of units, or range.

**Regulatory Basis:** 21 CFR 210.3(b)(2)

**Related Terms:** Batch Number, Lot Number, Batch Size, Batch Record

\[REGULATORY]

***

### Batch Number / Lot Number

**Definition:** Unique alphanumeric identifier assigned to a specific batch to ensure complete traceability throughout the product lifecycle. Format typically includes product code, year, and sequence number (e.g., LIS-24-001 = Lisinopril, 2024, first batch).

**Context in Batch Record Review:** Batch number must appear on:

* Batch record header (every page)

* All raw material dispensing records

* All in-process samples and tests

* Finished product packaging and labels

* Certificate of Analysis

* Stability study documentation

Automated review verifies batch number consistency throughout documentation.

**Regulatory Basis:** 21 CFR 211.188(b)(1)

**Related Terms:** Batch, Traceability, Product Code

\[REGULATORY]

***

### Batch Record

**Definition:** Complete documentation of all operations performed during manufacture of a specific batch, demonstrating compliance with the Master Batch Record and all relevant SOPs. Includes manufacturing data, in-process testing, QC results, signatures, and deviations.

**Context in Batch Record Review:** The batch record is the primary document reviewed for batch disposition. Must include:

* Header information (product, batch number, size, dates)

* Raw material records (lots, quantities, verification)

* Processing instructions and actual parameters recorded

* In-process control results

* QC testing results

* Yield calculations

* Signatures of operators and supervisors

* QA review and approval

* Investigation of any deviations or discrepancies

**Types:** Paper-based batch record (printed forms filled by hand) or Electronic Batch Record (EBR - computerized system).

**Regulatory Basis:** 21 CFR 211.188, EU GMP Chapter 4

**Related Terms:** Master Batch Record (MBR), Electronic Batch Record (EBR), Manufacturing Record, Production Record

\[REGULATORY]

***

### Bill of Materials (BOM)

**Definition:** Complete list of raw materials, components, and packaging materials required to manufacture one batch, including item codes, descriptions, and quantities (per batch or per unit). Contained in the Master Batch Record.

**Context in Batch Record Review:** Batch record must document that correct materials per BOM were dispensed and used. Automated review verifies:

* All BOM items accounted for

* Correct material codes used

* Quantities within acceptable ranges (±tolerance)

* No unauthorized materials substitutions

* Traceability to material lot numbers

**Related Terms:** Master Batch Record (MBR), Raw Material, Excipient, Component

***

### Blend Uniformity

**Definition:** In-process test verifying that active pharmaceutical ingredient is uniformly distributed throughout a powder blend before compression or encapsulation. Typically measured by sampling from multiple locations and testing API content. Acceptance criteria often based on Relative Standard Deviation (RSD).

**Context in Batch Record Review:** Critical in-process control for oral solid dosage forms. Typical specification: RSD ≤5.0% or ≤6.0%. Automated review flags:

* OOS blend uniformity results

* High RSD indicating poor mixing

* Insufficient number of samples tested

* Sampling locations not documented

**Test Method:** Usually HPLC or UV assay of blend samples from top, middle, bottom, and sides of blender

**Regulatory Basis:** Demonstrates process control and supports content uniformity of finished product (21 CFR 211.110)

**Related Terms:** Content Uniformity, Mixing, RSD, In-Process Control (IPC)

\[CRITICAL]

***

## C

### CAPA (Corrective Action and Preventive Action)

**Definition:** Systematic approach to eliminate causes of existing nonconformities (corrective action) or potential nonconformities (preventive action). Includes root cause analysis, action plan, implementation, and effectiveness verification.

**Context in Batch Record Review:** Batch record findings may trigger CAPA:

* Recurring deviations across batches (preventive action needed)

* Critical findings (corrective action to prevent recurrence)

* Trending concerns (preventive action before OOS occurs)

Automated review systems may link findings to CAPA database to track patterns.

**Regulatory Basis:** 21 CFR 211.100(a), ICH Q10, EU GMP Chapter 1

**Related Terms:** Deviation, Investigation, Root Cause Analysis, Quality System

\[GxP]

***

### Certificate of Analysis (COA / CoA)

**Definition:** Document issued by Quality Control certifying that a material or product meets its specifications. Includes item name, lot number, test results, specifications, and QC approval. Issued for raw materials (by supplier) and finished products (by manufacturer).

**Context in Batch Record Review:**

* **Raw Material COAs:** Must be verified before material use. Batch record documents COA review/approval by QA.

* **Finished Product COA:** Generated after batch release summarizing all QC test results. Accompanies product shipment to customer.

Automated review verifies:

* COAs present for all critical raw materials

* COA lot numbers match dispensing records

* All tests on COA meet specifications

* QA approval signature present

**Regulatory Basis:** 21 CFR 211.84 (raw material testing), 21 CFR 211.165 (finished product testing)

**Related Terms:** Specification, QC Testing, Raw Material, Lot Number

\[REGULATORY]

***

### Change Control

**Definition:** Formal process to evaluate, approve, implement, and document changes to facilities, equipment, materials, processes, software, or documentation that could affect product quality or GMP compliance.

**Context in Batch Record Review:** Batches manufactured after a change require special attention. Automated review flags:

* First batches post-change for enhanced review

* Verification that change control was properly executed

* Process parameters consistent with updated MBR

* Additional testing required by change control

**Regulatory Basis:** 21 CFR 211.100, ICH Q10, EU GMP Chapter 1

**Related Terms:** Master Batch Record (MBR), Validation, Process Validation

\[GxP]

***

### Coating (Film Coating / Sugar Coating)

**Definition:** Process of applying a polymeric film or sugar layer to tablet cores for appearance, taste masking, moisture protection, or controlled release. Coating pan or fluid bed coater applies coating solution/suspension while tablets tumble.

**Context in Batch Record Review:** Coating batch records document:

* Tablet core lot number and quantity

* Coating solution preparation and testing (viscosity, solids content)

* Process parameters: pan speed, spray rate, inlet temperature, outlet temperature

* In-process monitoring: weight gain, appearance

* Yield reconciliation (cores vs. coated tablets)

**Critical Parameters:** Inlet/outlet temperature (affects film quality), spray rate, pan speed, coating level (weight gain %)

**Related Terms:** Tablet, Processing Parameters, Yield, In-Process Control

***

### Compression

**Definition:** Unit operation where powder blend or granules are compressed between two punches in a tablet press to form tablets. Critical process parameters include compression force, turret speed, and fill depth.

**Context in Batch Record Review:** Compression batch records document:

* Tablet press ID and setup verification

* Pre-compression and main compression force

* Turret speed (tablets per minute)

* In-process testing: weight, hardness, thickness, appearance

* Adjustments made during compression

* Yield (theoretical vs. actual tablets produced)

**Critical Parameters \[CRITICAL]:** Compression force (affects hardness and dissolution), weight control (affects API content uniformity)

**Regulatory Basis:** 21 CFR 211.110 (sampling and testing during manufacturing)

**Related Terms:** Tablet, Hardness, Weight Variation, Compression Force, Yield

***

### Content Uniformity (CU)

**Definition:** Test to ensure that each individual dosage unit contains the correct amount of active pharmaceutical ingredient within narrow limits. Required for low-dose drugs (<25mg API or <25% of dosage unit weight). Acceptance criteria per USP <905>.

**Context in Batch Record Review:** Critical release test. Typical approach: test 10 units (Stage 1), calculate Acceptance Value (AV). If AV ≤15, pass. If AV >15, proceed to Stage 2 (test 30 total). Automated review verifies:

* Correct number of units tested

* Individual results and AV calculation documented

* Results meet acceptance criteria

* Investigation if approaching limits

**Calculation:** AV = |M - X̄| + ks, where M = reference value (usually 100% or 98.5-101.5% midpoint), X̄ = mean of units tested, k = acceptability constant (2.4 for n=10), s = sample standard deviation

**Regulatory Basis:** USP <905>, 21 CFR 211.165

**Related Terms:** Uniformity of Dosage Units, Weight Variation, Assay, USP

\[CRITICAL] \[REGULATORY]

***

### CPP (Critical Process Parameter)

**Definition:** Process parameter whose variability has a direct impact on a Critical Quality Attribute and therefore must be monitored or controlled to ensure the process produces the desired quality. Identified through process development and risk assessment (ICH Q8).

**Context in Batch Record Review:** CPPs receive enhanced scrutiny. Examples:

* Granulation: Endpoint moisture (affects blend flow and tablet properties)

* Drying: Temperature and time (affects residual moisture)

* Compression: Compression force (affects tablet hardness and dissolution)

* Coating: Inlet air temperature (affects film quality)

Automated review assigns higher criticality weighting (3.0x) to CPP fields. Any CPP out of specification triggers CRITICAL finding.

**Regulatory Basis:** ICH Q8(R2), ICH Q9

**Related Terms:** CQA (Critical Quality Attribute), Process Validation, Design Space, ICH Q8

\[CRITICAL]

***

### CQA (Critical Quality Attribute)

**Definition:** Physical, chemical, biological, or microbiological property or characteristic that should be within an appropriate limit, range, or distribution to ensure the desired product quality. Examples: assay, dissolution, impurities, sterility. EOF

**Context in Batch Record Review:** CQAs are the focus of batch release testing. All CQA test results must be within specification for batch release. Automated review prioritizes CQA verification.

**Regulatory Basis:** ICH Q8(R2), ICH Q6A

**Related Terms:** CPP (Critical Process Parameter), Specification, Release Testing, ICH Q8

\[CRITICAL]

***

## D

### Data Integrity

**Definition:** The degree to which data is complete, consistent, accurate, trustworthy, and reliable throughout the data lifecycle. Encompasses ALCOA+ principles. Critical for regulatory compliance and patient safety.

**Context in Batch Record Review:** Data integrity assessment is a core function of batch record review. Red flags include:

* Missing or incomplete data

* Timestamps out of sequence or backdated

* Unexplained audit trail gaps or deletions

* Same individual performing and verifying work without independent check

* Data entries made long after activity occurred (not contemporaneous)

* Patterns suggesting data fabrication

Data integrity violations trigger CRITICAL findings and REJECT consideration.

**Regulatory Basis:** FDA Data Integrity Guidance (2018), MHRA GxP Data Integrity Guidance, PIC/S PI 041-1, WHO TRS 996 Annex 5

**Related Terms:** ALCOA+, Audit Trail, 21 CFR Part 11, Contemporaneous

\[GxP] \[CRITICAL]

***

### Deviation

**Definition:** Departure from an approved instruction, procedure, or established standard. Deviations must be documented, investigated for root cause, assessed for product impact, and addressed through CAPA if necessary.

**Types:**

* **Critical Deviation:** Affects product quality, patient safety, or data integrity

* **Major Deviation:** Significant GMP violation but impact on product quality is uncertain or minor

* **Minor Deviation:** Procedural lapse with no expected product quality impact

**Context in Batch Record Review:** All deviations must be documented in batch record. Automated review verifies:

* Deviation report number referenced

* Investigation completed before batch release (or batch on HOLD)

* Impact assessment documented

* Batch disposition justified considering deviation

* CAPA initiated if required

Unresolved deviations trigger HOLD. Critical deviations affecting product quality may trigger REJECT.

**Regulatory Basis:** 21 CFR 211.192 (requires investigation of discrepancies), 21 CFR 211.100(a)

**Related Terms:** Investigation, CAPA, OOS, Discrepancy

\[REGULATORY]

***

### Differential Pressure

**Definition:** Pressure difference between adjacent controlled environments, measured in Pascals (Pa). Used to control airflow direction and prevent cross-contamination. Higher pressure areas push air toward lower pressure areas.

**Context in Batch Record Review:** For manufacturing in controlled environments, differential pressure must be monitored and documented. Typical specifications:

* Cleanroom vs. corridor: ≥15 Pa

* Different cleanliness classes: ≥10 Pa

Automated review flags:

* Differential pressure below specification (contamination risk)

* Pressure reversals (air flow in wrong direction)

* Missing differential pressure data for classified areas

**Regulatory Basis:** EU GMP Annex 1 (sterile products), WHO TRS 937 Annex 4

**Related Terms:** Environmental Monitoring, Cleanroom, Contamination Control

\[CRITICAL for sterile products]

***

### Disintegration

**Definition:** Time required for a tablet or capsule to break down into small particles when placed in liquid media under specified test conditions. Tested per USP <701> using disintegration apparatus.

**Context in Batch Record Review:** Common in-process or release test for immediate-release tablets. Typical specification: ≤15 or ≤30 minutes depending on product. Automated review verifies:

* Test performed per USP <701> or approved method

* Results meet specification

* Proper number of units tested (usually 6 tablets)

**Test Conditions:** Usually water or 0.1N HCl at 37±2°C

**Regulatory Basis:** USP <701>, 21 CFR 211.165

**Related Terms:** Dissolution, Tablet, USP, Release Testing

***

### Dispensing

**Definition:** Process of measuring and transferring specified quantities of raw materials (API, excipients) from bulk storage containers to individual batch-specific containers. First critical step in batch manufacturing.

**Context in Batch Record Review:** Dispensing records are part of batch documentation. Must include:

* Material name and code

* Lot number and expiry date

* Quantity required per MBR

* Actual quantity dispensed

* Container tare and gross weights

* Dispensed by (signature) and verified by (independent check signature)

* QA release of dispensed materials (COA verified, no visual defects)

Automated review verifies:

* Quantities within acceptable tolerance (typically ±5% for excipients, ±2% for API)

* Independent verification documented

* Materials within expiry date at time of use

* Traceability to raw material lot numbers

**Regulatory Basis:** 21 CFR 211.101, 21 CFR 211.188(b)(3)

**Related Terms:** Raw Material, Bill of Materials, Line Clearance, Tare Weight

\[CRITICAL]

***

### Dissolution

**Definition:** Rate and extent that active pharmaceutical ingredient dissolves from the dosage form into solution under standardized conditions. Critical quality attribute for oral solid dosage forms, predictive of bioavailability. Tested per USP <711>.

**Context in Batch Record Review:** Critical release test for tablets and capsules. Specifications define Q value (percent dissolved) at specified time points (e.g., Q=80% in 30 minutes). Testing stages:

* Stage S1: Test 6 units. If all meet Q, pass.

* Stage S2: If 1-2 units fail S1, test 6 more (12 total). Average ≥Q, no unit \<Q-15%.

* Stage S3: If S2 fails, test 12 more (24 total). Stricter criteria.

Automated review verifies:

* Correct apparatus and method used (per approved product specification)

* Results meet acceptance criteria

* Proper staging followed

* Any OOS results investigated

**Regulatory Basis:** USP <711>, 21 CFR 211.165, ICH Q6A

**Related Terms:** Bioavailability, Disintegration, USP, Release Testing, OOS

\[CRITICAL]

***

### Drying

**Definition:** Unit operation to remove moisture or solvent from wet granulation or washed product to achieve specified moisture content. Methods include fluid bed drying, tray drying, vacuum drying.

**Context in Batch Record Review:** Drying parameters are critical process parameters. Documentation includes:

* Dryer ID and load quantity

* Inlet and outlet temperatures

* Airflow rate and negative pressure (for fluid bed)

* Drying time

* In-process moisture testing (LOD) to confirm endpoint

* Final LOD result after drying

**Critical Parameters \[CRITICAL]:** Temperature (too high causes degradation, too low is inefficient), endpoint LOD (affects stability and flow)

**Related Terms:** Loss on Drying (LOD), Granulation, Fluid Bed Dryer, Critical Process Parameter

***

## E

### EBR (Electronic Batch Record)

**Definition:** Batch record created, modified, maintained, archived, retrieved, and distributed electronically via a validated computerized system. Must comply with 21 CFR Part 11 and EU GMP Annex 11.

**Advantages over Paper:**

* Real-time data capture and validation

* Reduced transcription errors

* Automatic calculations (e.g., yield)

* Complete audit trail

* Integration with equipment (automated data collection)

* Faster review cycle time

**Context in Batch Record Review:** Automated review is especially efficient with EBR systems since data is already in structured format. Review focuses on:

* Audit trail integrity

* Electronic signature validity

* Real-time data validation alerts

* Exception handling (out-of-spec values flagged during execution)

**Regulatory Basis:** 21 CFR Part 11, EU GMP Annex 11, PIC/S PE 009 Annex 11

**Related Terms:** 21 CFR Part 11, Audit Trail, Electronic Signature, Paper Batch Record

\[GxP]

***

### Environmental Monitoring

**Definition:** Program of sampling and testing manufacturing environment for viable and non-viable particulates, temperature, humidity, and differential pressure to ensure controlled conditions are maintained.

**Context in Batch Record Review:** For products requiring environmental control (sterile, non-sterile oral solids in controlled areas), batch records include environmental monitoring data:

* Viable sampling (microbial counts via settle plates, active air sampling, surface swabs)

* Non-viable particulate counts (for classified cleanrooms)

* Temperature and relative humidity

* Differential pressure between areas

Automated review flags:

* Excursions outside alert or action limits

* Missing environmental monitoring data

* Investigation status for excursions

**Regulatory Basis:** EU GMP Annex 1 (sterile), 21 CFR 211.42, 21 CFR 211.113

**Related Terms:** Differential Pressure, Cleanroom, Contamination Control, Alert Limit, Action Limit

\[CRITICAL for sterile products]

***

### Expiry Date / Expiration Date

**Definition:** Date after which a product should not be used, established based on stability studies. Format typically DD-MMM-YYYY (e.g., 31-DEC-2025) or MMM-YYYY. Appears on product label and batch record.

**Context in Batch Record Review:**

* **Raw Materials:** Batch record must verify all raw materials were within expiry at time of use. Expired material use triggers CRITICAL finding.

* **Finished Product:** Expiry date assigned to batch based on approved shelf life (e.g., 24 months from manufacturing date).

Automated review cross-references material expiry dates against batch manufacturing date to flag any expired material usage.

**Regulatory Basis:** 21 CFR 211.137 (expiry dating), 21 CFR 211.166 (stability testing)

**Related Terms:** Shelf Life, Retest Date, Stability Study, Manufacturing Date

\[REGULATORY]

***

## F

### Fluid Bed Dryer / Fluid Bed Processor

**Definition:** Equipment that suspends particles in an upward stream of air (fluidization) for efficient drying, granulation, or coating. Used in fluid bed drying (post wet granulation) and fluid bed granulation (one-pot process).

**Context in Batch Record Review:** Fluid bed operations document:

* Equipment ID and batch load

* Process parameters: inlet temperature, outlet temperature, airflow rate, product temperature, spray rate (if granulation)

* Process endpoint criteria (outlet temperature, product temperature, visual appearance)

* In-process LOD testing

* Processing time

* Yield

**Critical Parameters \[CRITICAL]:** Inlet/outlet temperatures, endpoint determination (affects LOD and granule properties)

**Related Terms:** Drying, Granulation, LOD, Critical Process Parameter

***

### Friability

**Definition:** Measure of tablet mechanical strength (resistance to abrasion and chipping). Tested per USP <1216> by tumbling tablets in a friabilator drum and measuring weight loss.

**Context in Batch Record Review:** Common in-process test for tablets. Typical specification: ≤1.0% weight loss. Automated review verifies:

* Test performed correctly (proper sample size \~6.5g, 100 revolutions at 25 rpm)

* Result calculated as % weight loss: \[(Initial weight - Final weight) / Initial weight] × 100

* Result meets specification

* Investigation if approaching limit (e.g., 0.8-1.0%)

**Regulatory Basis:** USP <1216>

**Related Terms:** Tablet, Hardness, Mechanical Strength, In-Process Control

***

## G

### GMP (Good Manufacturing Practice)

**Definition:** System of regulations, codes, and guidelines for the manufacture of medicinal products, medical devices, diagnostic products, and foods. Ensures products are consistently produced and controlled according to quality standards appropriate to their intended use.

**Key Principles:**

* Quality is built into products through design and manufacturing

* All manufacturing steps are controlled and documented

* Personnel are trained and qualified

* Facilities and equipment are suitable and maintained

* Materials are of appropriate quality

* Procedures and instructions are clear and followed

* Records prove compliance

* Deviations are investigated

* Products are not released until verified to meet specifications

**Context in Batch Record Review:** Batch records are the primary evidence of GMP compliance. Review verifies adherence to cGMP (current Good Manufacturing Practice) requirements.

**Regulatory Basis:** 21 CFR Parts 210 and 211 (US), EU GMP (EudraLex Volume 4), WHO GMP, PIC/S GMP

**Related Terms:** cGMP, 21 CFR 211, Quality Assurance, Regulatory Compliance

\[GxP] \[REGULATORY]

***

### GDP (Good Distribution Practice)

**Definition:** Guidelines for proper distribution and storage of pharmaceutical products to ensure quality and integrity throughout the supply chain. Less directly relevant to batch record review but impacts post-release product handling.

**Related Terms:** GMP, Supply Chain, Storage Conditions

\[GxP]

***

### Granulation

**Definition:** Process of forming granules (aggregates of powder particles) to improve flowability, compressibility, and content uniformity before tablet compression or capsule filling. Two main methods: wet granulation (binder solution added) and dry granulation (roller compaction).

**Context in Batch Record Review:** Granulation batch records document:

* Equipment ID (high shear mixer, fluid bed granulator, roller compactor)

* Raw material quantities (API, excipients, binder solution)

* Process parameters: impeller/chopper speed, granulation time, binder addition rate, endpoint criteria

* In-process testing: LOD, granule size distribution, flow properties

* Yield

**Critical Parameters \[CRITICAL]:** Binder amount, mixing time, endpoint determination (affects granule properties and tablet quality)

**Related Terms:** Wet Granulation, Dry Granulation, Blending, Drying, Fluid Bed Processor

***

## H

### Hardness (Tablet Hardness)

**Definition:** Force required to break a tablet by diametrical compression, measured in kiloponds (kp), Newtons (N), or Strong-Cobb units. Indicates tablet mechanical strength.

**Context in Batch Record Review:** Monitored during compression as in-process control. Typical specification: 8-12 kp or equivalent range. Automated review checks:

* In-process hardness results within specification throughout compression run

* Trend analysis (hardness increasing or decreasing over time may indicate tablet press issues)

* Correlation with friability and disintegration (harder tablets may have longer disintegration/slower dissolution)

**Testing:** Hardness tester applies force until tablet fractures

**Related Terms:** Friability, Compression, Compression Force, Tablet

***

### HPLC (High-Performance Liquid Chromatography)

**Definition:** Analytical technique separating, identifying, and quantifying components in a mixture. Mobile phase (liquid solvent) carries sample through column packed with stationary phase. Components separate based on interaction with stationary phase. Detector measures components as they elute.

**Context in Batch Record Review:** HPLC is the most common method for:

* Assay (API quantification)

* Related substances / impurities (degradation products, process impurities)

* Dissolution (API in dissolution samples)

Batch records include HPLC results with:

* Sample identification and injection sequence

* System suitability results (meets acceptance criteria before sample analysis)

* Retention times

* Peak areas and calculated results

* Chromatograms (as attachment or electronic record)

**Regulatory Basis:** USP <621> Chromatography, ICH Q2(R2) Analytical Validation

**Related Terms:** Assay, Related Substances, Impurities, System Suitability, USP <621>

***

## I

### IPC (In-Process Control)

**Definition:** Checks performed during manufacturing to monitor and, if necessary, adjust the process to ensure the product conforms to specifications. Controls may include testing, measurements, or visual inspections at defined points in the process.

**Context in Batch Record Review:** IPC results are documented in batch records. Examples:

* Blend uniformity (verifies API distribution before compression)

* Tablet weight during compression (verifies dose accuracy)

* Hardness and thickness monitoring

* LOD after drying

* pH of granulation binder solution

* Coating weight gain

Automated review verifies:

* All required IPCs performed

* Results within specifications (or adjustments documented if trending toward limits)

* Out-of-spec IPCs investigated before proceeding

**Regulatory Basis:** 21 CFR 211.110, ICH Q7 Section 11.4

**Related Terms:** Critical Process Parameter, Process Analytical Technology (PAT), Sampling

\[CRITICAL]

***

### ICH (International Council for Harmonisation)

**Definition:** Organization bringing together regulatory authorities and pharmaceutical industry to discuss scientific and technical aspects of drug registration. Develops harmonized guidelines (Quality, Safety, Efficacy, Multidisciplinary).

**Relevant ICH Quality Guidelines for Batch Records:**

* ICH Q7: API GMP

* ICH Q8: Pharmaceutical Development (CQA, CPP, Design Space)

* ICH Q9: Quality Risk Management

* ICH Q10: Pharmaceutical Quality System

* ICH Q2: Analytical Validation

**Context in Batch Record Review:** ICH guidelines inform batch record requirements and review criteria, especially for risk-based approaches and QbD concepts.

**Related Terms:** CQA, CPP, Quality by Design (QbD), Risk Management

***

### IQ/OQ/PQ (Installation/Operational/Performance Qualification)

**Definition:** Three-phase approach to equipment and system validation:

* **IQ (Installation Qualification):** Verifies equipment installed correctly per specifications and manufacturer recommendations

* **OQ (Operational Qualification):** Verifies equipment operates correctly across anticipated operating ranges

* **PQ (Performance Qualification):** Verifies equipment consistently produces results meeting specifications under actual production conditions

**Context in Batch Record Review:** Equipment must be qualified (IQ/OQ/PQ complete) before commercial production. Batch records verify:

* Equipment ID matches qualified equipment

* Equipment used within validated operating ranges

* Calibration current (ongoing verification post-qualification)

First batches post-qualification (PQ batches) require enhanced review.

**Regulatory Basis:** FDA Process Validation Guidance (2011), EU GMP Annex 15

**Related Terms:** Validation, Calibration, Process Validation, Equipment

\[GxP]

***

## L

### Label Reconciliation

**Definition:** Accounting for all labels issued for a packaging operation, reconciling quantity used, returned unused, and destroyed. Critical control to prevent mix-ups and misbranding.

**Context in Batch Record Review:** Required for all labeling operations. Documentation includes:

* Quantity of labels issued (by lot number)

* Quantity applied to units

* Quantity returned unused

* Quantity destroyed (defective or excess)

* Reconciliation calculation: Issued = Used + Returned + Destroyed

* Acceptable reconciliation tolerance (typically ±normal waste, e.g., 1-2%)

Automated review flags:

* Unreconciled quantities (discrepancy exceeds tolerance)

* Missing reconciliation documentation

* Unaccounted labels (potential mix-up risk)

Unreconciled labels trigger MAJOR or CRITICAL finding depending on discrepancy magnitude.

**Regulatory Basis:** 21 CFR 211.125, 21 CFR 211.130(d)

**Related Terms:** Packaging, Labeling, Line Clearance, Traceability

\[CRITICAL]

***

### LIMS (Laboratory Information Management System)

**Definition:** Computerized system managing laboratory operations including sample tracking, test scheduling, data capture, calculations, specification verification, certificate of analysis generation, and data archival.

**Context in Batch Record Review:** QC test results in batch records typically interface with LIMS. Automated review may:

* Verify AR numbers link to valid LIMS records

* Cross-reference batch record results against LIMS data for consistency

* Check LIMS audit trail for result modifications

* Verify electronic signatures on LIMS test results

**Related Terms:** QC Testing, AR Number, Certificate of Analysis, Electronic System

\[GxP]

***

### Line Clearance

**Definition:** Documented verification that the manufacturing line is cleared of previous product, materials, documents, and equipment not required for the next batch. Prevents cross-contamination and mix-ups.

**Context in Batch Record Review:** Line clearance checklist completed before batch start. Verifies:

* Previous batch materials removed

* Area cleaned

* Correct materials for new batch present

* Correct equipment installed and identified

* Previous batch documents removed

* Performed by operator, verified independently (second person check)

Missing or incomplete line clearance triggers MAJOR finding (potential mix-up risk).

**Regulatory Basis:** 21 CFR 211.182, EU GMP Chapter 5

**Related Terms:** Cross-Contamination, Mix-Up Prevention, GMP

\[CRITICAL]

***

### LOD (Loss on Drying)

**Definition:** Test determining the amount of volatile matter (usually water) in a sample by heating under defined conditions and measuring weight loss. Expressed as percentage: \[(Initial weight - Final weight) / Initial weight] × 100.

**Context in Batch Record Review:** Common specification for post-drying materials and finished products. Typical specs:

* Dried granules: ≤2.0% or ≤3.0%

* Finished product: ≤2.0%

Too high LOD: Risk of microbial growth, chemical instability, poor flow\
Too low LOD: Risk of electrostatic issues, processing difficulties

Automated review flags OOS LOD results and trends.

**Test Conditions:** Typically 105°C for specified time (1-3 hours) or to constant weight

**Related Terms:** Drying, Moisture Content, Water Activity, Specification

\[CRITICAL]

***

## M

### Manufacturing Date

**Definition:** Date on which a batch began manufacturing, typically the date of initial weighing/dispensing or the start of the first processing step. Defines the start of shelf life for stability and expiry date calculation.

**Context in Batch Record Review:** Manufacturing date appears on batch record header and is used to:

* Verify raw materials were within expiry at time of use

* Calculate expiry date (manufacturing date + approved shelf life)

* Determine retention sample storage duration

* Compare to equipment calibration dates (equipment must be within calibration at time of use)

**Regulatory Basis:** 21 CFR 211.137

**Related Terms:** Expiry Date, Shelf Life, Batch Number

\[REGULATORY]

***

### Master Batch Record (MBR)

**Definition:** Approved document containing complete instructions for manufacturing a specific product, including formulation, processing steps, in-process controls, specifications, and sampling procedures. Also called Master Formula Record or Master Manufacturing Record. Serves as the template for actual batch records.

**Context in Batch Record Review:** The MBR is the "golden standard" against which actual batch records are compared. Automated review verifies:

* Batch record follows MBR instructions

* Process parameters match MBR specifications

* All required steps completed

* No unauthorized deviations from MBR

Any discrepancy between batch record and MBR requires investigation and documentation as a deviation.

**Regulatory Basis:** 21 CFR 211.186

**Related Terms:** Batch Record, Bill of Materials, Standard Operating Procedure (SOP)

\[REGULATORY]

***

### Milling / Comminution

**Definition:** Size reduction process using a mill to break granules, lumps, or powder into smaller particles to improve flow, blend uniformity, and dose uniformity. Common after dry granulation or wet granulation drying.

**Context in Batch Record Review:** Milling records document:

* Mill ID and screen size

* Material identity and quantity

* Mill speed and throughput

* In-process testing (particle size distribution, if required)

* Yield

**Related Terms:** Granulation, Particle Size, Sieving

***

## O

### OOS (Out of Specification)

**Definition:** Result that falls outside the approved specification or acceptance criteria established in the product or material specification. Requires investigation per FDA OOS Guidance.

**Context in Batch Record Review:** OOS results trigger mandatory HOLD disposition until investigation is complete. Investigation phases:

* **Phase I (Laboratory Investigation):** Determine if OOS due to laboratory error (analyst error, equipment malfunction, contamination, calculation error). Duration: typically 5-10 days.

* **Phase II (Full Investigation):** If Phase I does not identify lab error, investigate manufacturing process as potential cause. Includes review of batch record, raw materials, equipment, environmental conditions, similar batches. Duration: typically 20-45 days.

Automated review immediately flags OOS results and verifies investigation status. Batch cannot be released until investigation concludes with acceptable explanation and documented disposition decision (accept, reject, retest per protocol).

**Regulatory Basis:** FDA Guidance "Investigating Out-of-Specification Test Results for Pharmaceutical Production" (2006), 21 CFR 211.192

**Related Terms:** Specification, Investigation, HOLD, Deviation, Phase I/Phase II Investigation

\[CRITICAL] \[REGULATORY]

***

### OOT (Out of Trend)

**Definition:** Result that is within specification but is unexpected based on historical data or statistical trend. May indicate process drift or emerging problem. Requires evaluation even though not technically failing.

**Context in Batch Record Review:** Automated review can identify OOT by comparing current batch parameters to historical mean ± control limits (typically mean ± 2SD or 3SD). Examples:

* Assay consistently 98-102% historically, current batch 96.5% (within 95-105% spec but OOT)

* Yield historically 98-101%, current batch 95.5% (within ≥95% spec but OOT)

OOT triggers investigation to determine cause. May result in HOLD pending trending evaluation. Not as severe as OOS but indicates potential process issue requiring attention.

**Related Terms:** OOS, Trending, Statistical Process Control, Alert Limit

***

### OOE (Out of Expectation)

**Definition:** Similar to OOT but based on scientific expectation rather than statistical trend. Result doesn't match what is scientifically expected based on process knowledge or material properties, even if within specification.

**Context in Batch Record Review:** Less commonly used than OOS or OOT. Example: Dissolution unexpectedly fast or slow compared to formulation design expectations, even though within specification.

**Related Terms:** OOS, OOT

***

## P

### Packaging

**Definition:** Operations including filling (bottles, blisters, sachets), sealing, labeling, and secondary packaging (cartons, cases) to produce the finished packaged product ready for distribution.

**Context in Batch Record Review:** Packaging batch records document:

* Bulk product lot number and quantity received to packaging

* Packaging materials (bottles, closures, labels, cartons) with lot numbers

* Equipment ID and setup verification

* Line clearance

* In-process checks (weight, seal integrity, label verification, coding verification)

* Label reconciliation

* Yield (units packaged vs. bulk quantity received)

* QA line clearance and release

**Critical Controls \[CRITICAL]:** Line clearance, label reconciliation, visual inspection, code verification

**Regulatory Basis:** 21 CFR 211.130

**Related Terms:** Line Clearance, Label Reconciliation, Secondary Packaging, Labeling

***

### PACE (Product And process Control through Enhanced understanding and lifecycle management)

**Definition:** Regulatory concept emphasizing that control of product quality should be based on scientific understanding of product and process, implemented through Quality by Design (QbD) principles and continued throughout product lifecycle.

**Context in Batch Record Review:** Products developed using PACE/QbD principles may have design space rather than fixed parameters. Batch records verify operations remained within design space.

**Related Terms:** Quality by Design (QbD), ICH Q8, Design Space, Lifecycle Management

***

### PQR (Product Quality Review) / Annual Product Review (APR)

**Definition:** Periodic (at least annual) review of all batches of a product to verify process consistency, identify trends, and evaluate need for corrective actions or process improvements. Required by GMP regulations.

**Context in Batch Record Review:** Batch record review findings feed into PQR/APR. Trending analysis across batches identifies:

* Process capability and consistency

* Recurring deviations or OOS events

* Yield trends

* Quality attribute trends (assay, dissolution, etc.)

* Equipment performance issues

PQR findings may result in specification tightening, process improvements, or enhanced batch record scrutiny.

**Regulatory Basis:** 21 CFR 211.180(e), EU GMP Chapter 1, ICH Q10

**Related Terms:** Trending, Continuous Process Verification, ICH Q10

\[GxP]

***

### Process Validation

**Definition:** Documented evidence providing high degree of assurance that a specific process will consistently produce product meeting predetermined specifications and quality attributes. Lifecycle approach per FDA 2011 Guidance:

* **Stage 1:** Process Design (development studies, risk assessment, design space)

* **Stage 2:** Process Qualification (IQ/OQ/PQ, Performance Qualification batches - typically 3 consecutive successful batches)

* **Stage 3:** Continued Process Verification (ongoing monitoring during routine production)

**Context in Batch Record Review:**

* **Stage 2 (PQ/PPQ) batches:** Require mandatory comprehensive human review regardless of automated score. Enhanced documentation and testing.

* **Stage 3 batches:** Routine monitoring via batch record review trending. Declining trends may indicate need for revalidation.

**Regulatory Basis:** FDA Process Validation Guidance (2011), EU GMP Annex 15, ICH Q8

**Related Terms:** IQ/OQ/PQ, PPQ, Validation, Continued Process Verification

\[GxP] \[REGULATORY]

***

## Q

### QA (Quality Assurance)

**Definition:** Wide-ranging concept covering all matters that individually or collectively influence the quality of a product. Sum of the organized arrangements made to ensure that products are of the quality required for intended use. QA includes GMP plus design, development, and validation.

**Context in Batch Record Review:** QA Department is responsible for:

* Reviewing and approving batch records before release (21 CFR 211.192)

* Disposition decision authority (RELEASE, HOLD, REJECT)

* Investigation oversight

* Deviation approval

* Change control approval

* Trend analysis and PQR

**Organizational Structure:** QA must be independent from production (separate reporting line).

**Regulatory Basis:** 21 CFR 211.22, EU GMP Chapter 1

**Related Terms:** QC (Quality Control), Batch Disposition, Quality Unit

\[GxP] \[REGULATORY]

***

### QC (Quality Control)

**Definition:** Part of GMP concerned with sampling, specifications, testing, and organization/documentation/release procedures ensuring necessary and relevant tests are actually carried out and materials are not released until quality is satisfactory.

**Context in Batch Record Review:** QC Department responsibilities:

* Raw material testing and release

* In-process sample testing

* Finished product release testing

* Stability testing

* Environmental monitoring

* Certificate of Analysis issuance

* Reference standard management

QC test results are critical inputs to batch record review. All QC results must meet specifications for batch release.

**Regulatory Basis:** 21 CFR 211.22, EU GMP Chapter 6

**Related Terms:** QA, Testing, Specification, Certificate of Analysis

\[GxP] \[REGULATORY]

***

### QMS (Quality Management System)

**Definition:** Formalized system documenting processes, procedures, and responsibilities for achieving quality policies and objectives. Coordinates and directs organization's activities to meet customer and regulatory requirements and improve effectiveness and efficiency.

**Components:** Management responsibility, resource management, product realization, measurement/analysis/improvement, document control, training, CAPA, change control, deviation management, batch disposition.

**Context in Batch Record Review:** Batch record review is a core QMS process. Review metrics feed into management review for continual improvement.

**Regulatory Basis:** ICH Q10, ISO 9001 (adapted for pharma)

**Related Terms:** QA, GMP, ICH Q10, CAPA

\[GxP]

***

### QP (Qualified Person)

**Definition:** In EU/EEA, an individual who has appropriate scientific and technical qualifications (per Article 48 of Directive 2001/83/EC) and is responsible for certifying that each batch has been manufactured and tested according to regulatory requirements before release to market.

**Context in Batch Record Review:** For EU operations:

* Automated batch record review provides supporting documentation

* QP makes final certification decision

* QP must have access to all batch documentation, test results, and compliance information

* QP certification is legally required before EU release (no delegation allowed)

**US Equivalent:** In US, QA management performs similar batch release function but title "Qualified Person" is not used (not a legal requirement in US as it is in EU).

**Regulatory Basis:** EU Directive 2001/83/EC Article 51, EU GMP Annex 16

**Related Terms:** Batch Release, QA, Certification, EU GMP

\[EU REGULATORY]

***

## R

### Raw Material

**Definition:** Any substance used in production or manufacturing of a drug product, including API (active pharmaceutical ingredient) and excipients (inactive ingredients such as binders, fillers, lubricants, disintegrants).

**Context in Batch Record Review:** Batch records must document for each raw material:

* Material name, code, and grade

* Lot number

* Expiry or retest date

* Supplier

* Quantity used (actual vs. theoretical)

* Certificate of Analysis verification

* Dispensing and verification signatures

Automated review flags:

* Expired materials

* Materials without COA approval

* Quantities outside acceptable tolerance

* Traceability gaps

**Regulatory Basis:** 21 CFR 211.84, 21 CFR 211.101, 21 CFR 211.188(b)(3)

**Related Terms:** API, Excipient, Certificate of Analysis, Dispensing

\[CRITICAL]

***

### Related Substances / Impurities

**Definition:** Chemical compounds other than the API that may be present in drug product, including degradation products (formed during storage), process impurities (from synthesis), or residual solvents. Must be identified, quantified, and controlled per ICH Q3A/Q3B.

**Context in Batch Record Review:** Related substances testing is critical release test, typically by HPLC. Specifications include:

* Individual unspecified impurity: ≤0.10% or ≤0.15%

* Individual specified impurity (named): specific limit (e.g., Impurity A ≤0.20%)

* Total impurities: ≤2.0% (example - varies by product)

Automated review flags OOS impurity results which require investigation.

**Regulatory Basis:** ICH Q3A (new drugs), ICH Q3B (new APIs), 21 CFR 211.165

**Related Terms:** HPLC, Degradation Products, Specification, OOS

\[CRITICAL]

***

### Reprocessing

**Definition:** Introducing an API or intermediate that does not conform to specifications back into the manufacturing process and repeating a step or steps that are part of the established manufacturing process. Example: Reblending out-of-spec blend, recompressing tablets with low hardness.

**Context in Batch Record Review:** Reprocessed batches require:

* Documented investigation and root cause for original failure

* Scientific justification that reprocessing is appropriate

* Approved reprocessing procedure

* Additional testing to verify reprocessing was successful

* Documentation linking original batch number to reprocessed batch number

* Mandatory human review (no auto-approve)

* Reduced confidence score (higher risk profile)

Reprocessing without proper investigation/justification may trigger REJECT.

**Regulatory Basis:** 21 CFR 211.115

**Related Terms:** Rework, Deviation, Investigation, Batch Disposition

\[REGULATORY]

***

### Rework

**Definition:** Subjecting an intermediate or API that does not conform to specifications to one or more processing steps that are different from the established manufacturing process to obtain acceptable quality. More significant than reprocessing. Example: Using failed blend in different formulation (if scientifically justified).

**Context in Batch Record Review:** Rework requires:

* Investigation and root cause

* Scientific evaluation and justification

* Approved rework protocol (may require regulatory notification/approval depending on jurisdiction)

* Comprehensive testing to verify quality

* Full documentation

* Mandatory human review

Rework is generally higher risk than reprocessing.

**Regulatory Basis:** 21 CFR 211.115, ICH Q7

**Related Terms:** Reprocessing, Deviation, Batch Disposition

\[REGULATORY]

***

### RSD (Relative Standard Deviation)

**Definition:** Standard deviation expressed as percentage of mean. Measure of variability used in blend uniformity, content uniformity, and other tests. RSD = (Standard Deviation / Mean) × 100.

**Context in Batch Record Review:** Common acceptance criterion. Examples:

* Blend uniformity: RSD ≤5.0% or ≤6.0%

* Assay repeatability: RSD ≤2.0%

Lower RSD indicates better uniformity/precision. Automated review calculates and verifies RSD for tests requiring it.

**Related Terms:** Blend Uniformity, Content Uniformity, Standard Deviation, Variability

***

## S

### Shelf Life

**Definition:** Time period during which a product remains within specification when stored under defined conditions. Established through stability studies per ICH Q1A. Expressed in months (e.g., 24 months, 36 months).

**Context in Batch Record Review:** Shelf life determines expiry date: Expiry = Manufacturing Date + Shelf Life. Stability failures during ongoing studies may trigger retroactive batch holds or recalls.

**Regulatory Basis:** 21 CFR 211.166, ICH Q1A, ICH Q1E

**Related Terms:** Expiry Date, Stability Study, Storage Conditions, Retest Date

\[REGULATORY]

***

### Sieving

**Definition:** Particle size separation process using screens/sieves with defined mesh openings. Used after milling to remove oversized particles or lumps, ensuring uniform particle size for blending and flow.

**Context in Batch Record Review:** Sieving records document:

* Sieve ID and mesh size

* Material quantity before sieving

* Oversized fraction quantity (retained on sieve)

* Through fraction quantity (passed through sieve)

* Yield calculation

* Disposition of oversized fraction (returned for remilling, discarded, etc.)

**Related Terms:** Milling, Particle Size, Granulation

***

### SOP (Standard Operating Procedure)

**Definition:** Approved written procedure giving instructions for performing operations or activities, including manufacturing steps, cleaning, equipment operation, calibration, testing, and documentation. SOPs are referenced in batch records.

**Context in Batch Record Review:** Batch execution must follow applicable SOPs. Batch record references SOP numbers for:

* Equipment setup and operation

* Cleaning procedures

* Sampling procedures

* Calibration procedures

Deviations from SOPs must be documented. Automated review may flag steps not performed per SOP.

**Regulatory Basis:** 21 CFR 211.100

**Related Terms:** Master Batch Record, Procedure, Work Instruction

\[GxP]

***

### Stability / Stability Study

**Definition:** Testing program monitoring physical, chemical, microbiological, and therapeutic properties of a drug product over time under defined storage conditions (temperature, humidity, light) to establish shelf life and storage recommendations.

**Context in Batch Record Review:** Stability program typically includes:

* Long-term stability (e.g., 25°C/60% RH for shelf life determination)

* Accelerated stability (e.g., 40°C/75% RH for stress testing)

* Intermediate stability (if needed)

* Photostability (ICH Q1B)

Stability samples from each batch are pulled and stored per protocol. Batch records document stability sample identification. Stability failures may trigger batch holds or recalls.

**Regulatory Basis:** ICH Q1A (stability testing), 21 CFR 211.166

**Related Terms:** Shelf Life, Expiry Date, Storage Conditions, ICH Q1A

\[REGULATORY]

***

## T

### Tablet

**Definition:** Solid dosage form containing API and excipients, produced by compressing powder or granules into defined shape using tablet press. Types include immediate-release, extended-release, chewable, orally disintegrating (ODT), and effervescent tablets.

**Context in Batch Record Review:** Tablet batch records include compression parameters, in-process testing (weight, hardness, thickness, friability), and release testing (assay, content uniformity, dissolution, disintegration).

**Related Terms:** Compression, Hardness, Disintegration, Dissolution, Content Uniformity

***

### Tablet Press / Compression Machine

**Definition:** Equipment compressing powder or granules between two punches (tooling) to form tablets. Key components: hopper (holds feed), feed frame, dies (tablet shape cavity), punches (upper and lower), compression rollers. Critical parameters: compression force, turret speed, fill depth.

**Context in Batch Record Review:** Tablet press setup and operation documentation includes:

* Equipment ID and tooling specifications

* Pre-compression and main compression force settings

* Turret speed

* Weight control settings

* In-process monitoring frequency and results

* Total run time and tablets produced

* Yield

**Related Terms:** Compression, Tablet, Compression Force, Tooling

***

### Tare Weight

**Definition:** Weight of an empty container before product is added. Used to calculate net weight of product: Net Weight = Gross Weight - Tare Weight.

**Context in Batch Record Review:** Tare weights documented for:

* Dispensing containers (to calculate actual raw material quantity dispensed)

* Mixing containers (to calculate actual batch quantity)

* Packaging containers (to verify fill weight)

Automated review may verify calculation accuracy: Actual quantity = Gross - Tare.

**Related Terms:** Dispensing, Gross Weight, Net Weight, Weight Verification

***

### Theoretical Yield

**Definition:** Expected quantity of product based on formulation and raw material inputs, assuming 100% efficiency with no losses. Calculated from Master Batch Record formula. Used to calculate actual yield percentage: Actual Yield % = (Actual Quantity / Theoretical Quantity) × 100.

**Context in Batch Record Review:** Yield verification is critical. Typical acceptable range: 95-105% for most steps (narrower for critical steps like compression: 97-103%). Automated review flags:

* Yield below minimum (indicates product loss, potential contamination risk)

* Yield above maximum (indicates contamination with foreign material, calculation error, or data integrity issue)

Low yield triggers investigation. High yield also requires explanation.

**Regulatory Basis:** 21 CFR 211.186(b)(7), 21 CFR 211.188(b)(4)

**Related Terms:** Yield, Actual Yield, Reconciliation, Bill of Materials

\[CRITICAL] \[REGULATORY]

***

## V

### Validation

**Definition:** Documented evidence providing high degree of assurance that a specific process, method, system, or equipment will consistently produce results meeting predetermined acceptance criteria. Types include process validation, cleaning validation, method validation, computer system validation.

**Context in Batch Record Review:** Batch manufacturing must occur using validated processes and equipment. Batch records verify:

* Equipment is validated (IQ/OQ/PQ complete)

* Process performed within validated parameters

* Analytical methods validated per ICH Q2(R2)

* Cleaning validated (if shared equipment)

Batches processed before validation is complete cannot be released commercially (except process validation batches themselves, under controlled protocols).

**Regulatory Basis:** 21 CFR 211.100, FDA Process Validation Guidance (2011), EU GMP Annex 15, ICH Q2(R2)

**Related Terms:** Process Validation, IQ/OQ/PQ, Method Validation, Qualification

\[GxP] \[REGULATORY]

***

## Y

### Yield

**Definition:** Percentage of theoretical quantity actually obtained at a manufacturing step or for finished product. Indicates process efficiency and material accountability. Yield % = (Actual Quantity / Theoretical Quantity) × 100.

**Context in Batch Record Review:** Yield calculated and documented at critical steps:

* Post-blending

* Post-granulation

* Post-drying

* Post-milling

* Post-compression/encapsulation

* Post-coating

* Post-packaging

**Typical Specifications:**

* Early steps (granulation, drying, milling): 95-105%

* Compression/encapsulation: 97-103% (tighter due to dose uniformity requirements)

* Packaging: 98-102%

Out-of-spec yield triggers investigation. Low yield: product loss (where did it go?). High yield: contamination or error.

**Regulatory Basis:** 21 CFR 211.186(b)(7), 21 CFR 211.188(b)(4)

**Related Terms:** Theoretical Yield, Reconciliation, Material Balance, Accountability

\[CRITICAL] \[REGULATORY]

***

## Numbers

### 21 CFR Part 11 - Electronic Records; Electronic Signatures

**Definition:** FDA regulation establishing requirements for electronic records and electronic signatures to be considered trustworthy, reliable, and equivalent to paper records and handwritten signatures.

**Context in Batch Record Review:** Electronic batch records must comply with Part 11. Key requirements:

* System validation

* Audit trail (secure, computer-generated, time-stamped)

* Authority checks (only authorized users can perform functions)

* Device checks (verify identity of data input source)

* Controls to prevent unauthorized access

* Electronic signature requirements (unique to one individual, non-reusable, verified at execution)

**Regulatory Basis:** 21 CFR Part 11 (1997, current)

**Related Terms:** Electronic Batch Record (EBR), Audit Trail, Electronic Signature, Data Integrity

\[US REGULATORY]

***

### 21 CFR 211 - Current Good Manufacturing Practice (CGMP)

**Definition:** Primary US regulation establishing minimum cGMP requirements for manufacturing, processing, packing, or holding of drug products (finished pharmaceuticals).

**Key Subparts:**

* Subpart A: General Provisions

* Subpart B: Organization and Personnel (§211.22 - QA responsibilities)

* Subpart C: Buildings and Facilities

* Subpart D: Equipment

* Subpart E: Control of Components and Drug Product Containers and Closures

* Subpart F: Production and Process Controls

* Subpart G: Packaging and Labeling Control

* Subpart H: Holding and Distribution

* Subpart I: Laboratory Controls

* **Subpart J: Records and Reports (§211.180-211.198 - includes batch record requirements §211.188 and review requirement §211.192)**

* Subpart K: Returned and Salvaged Drug Products

**Context in Batch Record Review:** 21 CFR 211 Subpart J is the regulatory foundation for batch record requirements and review. Compliance with Part 211 is verified through batch record review.

**Related Terms:** GMP, cGMP, FDA, Regulatory Compliance

\[US REGULATORY]

***

## Document Usage and Maintenance

**How to Use This Glossary:**

* **For Training:** Assign relevant sections to new hires based on role (manufacturing, QA, QC, regulatory)

* **For Reference:** Quick lookup during batch record review or documentation activities

* **For SOPs:** Cite this glossary for term definitions in SOPs and work instructions

* **For Automation:** Use definitions to develop consistent finding descriptions and field classifications in automated review systems

**Maintenance Schedule:**

* **Quarterly Review:** Verify all definitions remain current with regulations

* **Annual Update:** Add new terms, revise definitions based on regulatory changes or internal feedback

* **Continuous Improvement:** Stakeholders may submit requests for new terms or definition clarifications to Quality Knowledge Management

**Document Revision History:**

| Version | Date       | Author                  | Changes                         |
| ------- | ---------- | ----------------------- | ------------------------------- |
| 1.0     | 2024-01-15 | QA Knowledge Management | Initial release with 150+ terms |

***

**Document Owner:** QA Knowledge Management (in collaboration with Training, Regulatory Affairs, QC)\
**Review Frequency:** Annual\
**Next Review Date:** 2025-01-15

**Approval Signatures:**

* QA Director: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_

* Training Manager: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_

* Regulatory Affairs Director: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_

***

**END OF GLOSSARY**

***

# Consolidated References

All regulatory sources, guidance documents, and references cited throughout this knowledge base.

## Primary Regulatory Sources

### United States (FDA)

* **21 CFR Part 210** — Current Good Manufacturing Practice in Manufacturing, Processing, Packing, or Holding of Drugs; General: <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-210>

* **21 CFR Part 211** — Current Good Manufacturing Practice for Finished Pharmaceuticals: <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211>

* **21 CFR Part 11** — Electronic Records; Electronic Signatures: <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11>

* **FDA Guidance for Industry: Investigating Out-of-Specification (OOS) Test Results** (2006): <https://www.fda.gov/regulatory-information/search-fda-guidance-documents/investigating-out-specification-oos-test-results-pharmaceutical-production>

* **FDA Guidance: Data Integrity and Compliance With Drug CGMP** (2018): <https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers-guidance-industry>

* **FDA Process Validation Guidance** (2011, rev. 2024): <https://www.fda.gov/regulatory-information/search-fda-guidance-documents/process-validation-general-principles-and-practices>

### European Union

* **EudraLex Volume 4** — EU Guidelines for Good Manufacturing Practice: <https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en>

* **EU GMP Annex 11** — Computerised Systems

* **EU GMP Annex 15** — Qualification and Validation

* **EU GMP Annex 16** — Certification by a Qualified Person and Batch Release

* **Directive 2001/83/EC** — Community Code Relating to Medicinal Products for Human Use

### International (ICH)

* **ICH Q7** — Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients: <https://www.ich.org/page/quality-guidelines>

* **ICH Q8(R2)** — Pharmaceutical Development

* **ICH Q9(R1)** — Quality Risk Management

* **ICH Q10** — Pharmaceutical Quality System

* **ICH Q1A(R2)** — Stability Testing of New Drug Substances and Products

### WHO

* **WHO TRS 986 Annex 2** — Good Manufacturing Practices for Pharmaceutical Products: <https://www.who.int/publications/m/item/trs-986-annex-2>

* **WHO Technical Report Series** — Various quality guidance documents

### PIC/S

* **PIC/S PE 009** — Guide to Good Manufacturing Practice for Medicinal Products: <https://picscheme.org/en/publications>

* **PIC/S PI 041-1** — Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments (2021)

## Industry Standards and Guidance

* **ISPE GAMP 5** — A Risk-Based Approach to Compliant GXP Computerized Systems (2022)

* **ISPE Baseline Guide Vol. 7** — Risk-Based Manufacture of Pharmaceutical Products

* **USP General Chapters** — Including <711> Dissolution, <905> Uniformity of Dosage Units, <621> Chromatography

* **MHRA GMP Data Integrity Definitions and Guidance** (2018)

## Key Legal Cases and Precedents

* **United States v. Barr Laboratories** (1993) — Established OOS investigation requirements; defined Phase I/Phase II investigation framework

* **Wolin v. Smith Kline Beecham** — Reinforced data integrity requirements

## All URLs Referenced

* <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211>

* <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11>

* <https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en>

* <https://www.ich.org/page/quality-guidelines>

* <https://www.who.int/publications/m/item/trs-986-annex-2>

* <https://picscheme.org/en/publications>

* <https://www.fda.gov/media/71001/download>

* <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.186>

* <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.188>

* <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.192>

* <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.194>

* <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-J/section-211.180>

* <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-G/section-211.130>

* <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-D/section-211.68>

* <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-F/section-211.165>

* <https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-E/section-211.100>

* <https://www.fda.gov/regulatory-information/search-fda-guidance-documents/investigating-out-specification-oos-test-results-pharmaceutical-production>

* <https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers-guidance-industry>

* <https://www.fda.gov/media/119267/download>

* <https://www.fda.gov/regulatory-information/search-fda-guidance-documents/process-validation-general-principles-and-practices>

* <https://www.fda.gov/media/71021/download>

* <https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-quality-systems-approach-pharmaceutical-cgmp-regulations>

* <https://www.fda.gov/media/71023/download>

* <https://health.ec.europa.eu/system/files/2016-11/2014-11_vol4_chapter_4.pdf>

* <https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf>

* <https://health.ec.europa.eu/system/files/2022-02/2022-02_annex16_0.pdf>

* <https://health.ec.europa.eu/system/files/2016-11/2014-08_vol-4_chapter_6.pdf>

* <https://health.ec.europa.eu/system/files/2016-11/2014-08_vol-4_chapter_1.pdf>

* <https://database.ich.org/sites/default/files/Q7%20Guideline.pdf>

* <https://database.ich.org/sites/default/files/Q8%28R2%29%20Guideline.pdf>

* <https://database.ich.org/sites/default/files/ICH_Q9%28R1%29_Guideline_Step4_2023_0126.pdf>

* <https://database.ich.org/sites/default/files/Q10%20Guideline.pdf>

* <https://database.ich.org/sites/default/files/ICH_Q2%28R2%29_Document_Step4_2023_0126.pdf>

* <https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/production/trs986-annex2-who-gmp-pharmaceutical-products.pdf>

* <https://www.who.int/publications/m/item/who-trs-996-annex05>

* <https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/production/trs996-annex05-data-record-management.pdf>

* <https://picscheme.org/en/publications?tri=gmp>

* <https://picscheme.org/docview/4234>

* <https://www.usp.org/>

* <https://ispe.org/publications/guidance-documents/gamp-5-second-edition>

* <https://www.gov.uk/government/publications/guidance-on-gxp-data-integrity>

* <https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/687246/MHRA_GxP_data_integrity_guide_March_edited_Final.pdf>

* <https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters>

* <https://www.fda.gov/drugs/drug-approvals-and-databases/approved-drug-products-therapeutic-equivalence-evaluations-orange-book>

* <https://purplebooksearch.fda.gov/>

* <https://www.ema.europa.eu/en/medicines>

* <https://www.fda.gov/regulatory-information/search-fda-guidance-documents>

* <https://www.ema.europa.eu/en/human-regulatory/research-development/scientific-guidelines>

* <https://www.who.int/teams/health-product-and-policy-standards/standards-and-specifications/norms-and-standards-for-pharmaceuticals>

***

**Document Version:** 1.0\
**Compiled:** January 2025\
**Source Files:** 12 knowledge base documents (\~16,000 lines, \~680 KB)\
**Regulatory Scope:** FDA, EU GMP, ICH, WHO, PIC/S\
**Maintained by:** ZAMP/PACE Batch Record Review System

***

## 🎯 ACCURACY SCORING — MANDATORY DATASET WRITE

**Every BRR run MUST write its results to the** **`Batch Review Results`** **dataset before closing.**

### Setup

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

### Write the result row after completing your review

```python
relay.upsert_dataset_row(RESULTS_DATASET_ID, run_id, {
    "pair_id":                  pair_id,
    "batch_number":             batch_number,
    "product_name":             product_name,
    "mbr_reference":            mbr_reference,
    "disposition":              disposition,               # "RELEASE" / "HOLD" / "REJECT"
    "primary_finding_type":     primary_finding_type,     # your characterization of the finding
    "primary_finding_severity": primary_finding_severity, # "CRITICAL" / "MAJOR" / "MINOR" / "N/A"
    "finding_count":            total_findings,
    "critical_findings":        critical_count,
    "major_findings":           major_count,
    "minor_findings":           minor_count,
    "observation_findings":     observation_count,
    "total_findings":           total_findings,
    "confidence_pct":           confidence_pct,           # integer 0-100
    "routing":                  routing_action,
    "review_timestamp":         datetime.now(timezone.utc).isoformat(),
})
```

### Run status after writing

* Disposition `RELEASE` → `relay.update_run_status(run_id, "done")`

* Disposition `HOLD` or `REJECT` → `relay.update_run_status(run_id, "needs_attention")`

