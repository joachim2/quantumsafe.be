import { priorityCalculatorUrl } from "@/config/siteConfig";
import type { GuideContent } from "./types";

export const volume2: GuideContent = {
  id: "volume-2",
  purpose:
    "Explains how to govern, fund, prioritize, and coordinate a PQC transition program, bridging executive urgency and the technical execution covered in Volume 3.",
  sections: [
    {
      id: "scope",
      title: "Scope",
      intro:
        "This volume helps organizations answer the question: what is needed to initiate, govern, fund, and coordinate a PQC transition?",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Volume 2 is the bridge between executive urgency and technical execution. It does not attempt to define migration patterns in detail. Instead, it provides the organizational, financial, and governance scaffolding required to make the technical work in Volume 3 feasible, funded, prioritized, auditable, and sustainable.",
            "The intended outcome is a controlled transition program: one that is risk-based, funded, integrated into existing governance processes, aligned with external timelines, and capable of moving from discovery to pilots and then to migration waves.",
            "Volume 3 will build on this foundation by translating the program roadmap into technical execution, providing detailed guidance on cryptographic discovery, solution selection, migration architectures, testing approaches, implementation patterns, and operational integration. Together, the two volumes help organizations move from strategic planning to practical deployment.",
          ],
        },
        {
          type: "table",
          caption: "What this volume provides compared with Volume 3",
          columns: ["Topic", "What this volume provides", "What Volume 3 covers instead"],
          rows: [
            ["Roadmap", "Milestones, sequencing, program phases.", "Technical implementation details."],
            [
              "Governance",
              "Steering Committee, Program Office, RACI, reporting, escalation.",
              "Interoperability management, shared infrastructure coordination.",
            ],
            ["Risk", "Prioritization logic, risk assessment.", "Detailed cryptographic inventory."],
            [
              "Compliance",
              "Regulatory compliance, auditability, evidence.",
              "Controls and implementation validation.",
            ],
            ["Procurement", "Vendor roadmaps, contractual readiness.", "Technical requirements."],
            [
              "Finance",
              "Cost categories, phased budgeting, business case.",
              "Technical cost considerations and trade-offs.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "important",
          title: "See the technical guidance in Volume 3",
          paragraphs: [
            "For detailed migration patterns, cryptographic discovery, implementation, and operational deployment guidance, see /guides/implementing-the-pqc-migration.",
          ],
        },
      ],
    },
    {
      id: "stakeholders",
      title: "Stakeholder Guidance",
      intro:
        "Several groups play a decisive role at this preparation stage. This section sets out what each of them is expected to contribute.",
      blocks: [
        {
          type: "table",
          caption: "Stakeholder responsibilities for the PQC transition",
          columns: ["Stakeholder", "Required guidance"],
          rows: [
            [
              "Security leadership",
              "Position PQC as a strategic resilience issue rather than only a compliance or cryptography project. Secure a named executive sponsor, fund a quantum-readiness assessment, add PQC to enterprise risk registers and Board or Steering Committee reporting, link the roadmap to architecture, security, cloud, PKI, identity, and procurement strategy, and engage vendors on their PQC roadmap commitments.",
            ],
            [
              "Project managers and technical coordinators",
              "Act as the central audience for this volume, translating strategic intent into an executable program. Coordinate workstream planning and dependencies, inventory and discovery activities, risk prioritization workshops, vendor evidence collection, pilot planning and lessons learned, migration wave sequencing, budget planning and tracking, and reporting to the Program Office and Steering Committee. They do not need to make all technical cryptographic decisions themselves, but must ensure the right experts and stakeholders are involved at the right time.",
            ],
            [
              "GRC / audit",
              "Embed PQC into governance, risk, and compliance processes to secure regulatory alignment and sustained oversight. Treat PQC as a long-horizon, strategic cybersecurity risk rather than a purely technical upgrade. Integrate PQC into audit frameworks, control testing, and compliance reporting; ensure visibility of dependencies, vendor readiness, and migration status; and provide evidence that PQC is actively managed as an ongoing risk, not a future concern.",
            ],
            [
              "Procurement",
              "Extend PQC considerations across the supply chain, since vendor dependencies can significantly affect the overall transition timeline. Embed PQC requirements into procurement policies, contracts, and supplier selection criteria; require vendors to disclose their use of cryptography and provide clear PQC transition roadmaps; integrate PQC into third-party risk assessments, audits, and security questionnaires; and monitor vendor readiness through structured, repeatable mechanisms such as quantum-readiness surveys.",
            ],
            [
              "Application and platform owners",
              "Own evidence, testing, implementation, lifecycle management, exceptions, and residual risk for the systems under their responsibility, working with the Program Office and technical coordinators to deliver migration waves.",
            ],
            [
              "Suppliers",
              "Disclose their use of cryptography, provide clear PQC transition roadmaps, respond to vendor readiness surveys and questionnaires, and align their upgrade timelines with customer migration schedules so they do not become bottlenecks in the transition.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "important",
          title: "Compliance is now a supply-chain concern",
          paragraphs: [
            "Regulatory frameworks such as NIS2 increasingly require organizations to adopt state-of-the-art cryptographic practices, making PQC integration not only a forward-looking measure but also a compliance necessity. PQC considerations must extend across the supply chain, as vendor dependencies can significantly affect the overall transition timeline.",
          ],
        },
      ],
    },
    {
      id: "reference-roadmap",
      title: "Roadmap & Timeline for Transition",
      intro:
        "A PQC transition should be planned as a phased, risk-based, and iterative program. Its roadmap should align with regulatory expectations and technical readiness, covering inventory, risk assessment, awareness, pilots, migration planning, and the eventual transition of high-, medium-, and low-risk systems.",
      blocks: [
        {
          type: "bullets",
          title: "Roadmap planning principles",
          items: [
            "Start with the highest-risk use cases: prioritize systems protecting long-lived sensitive data, critical infrastructure, authentication, signing, firmware, certificates, and systems with long replacement cycles.",
            "Run inventory and migration in parallel: a complete inventory is valuable, but waiting for perfection can delay action. Document known gaps, assumptions, responsible owners, and actions to close discovery gaps, and continue inventory activities throughout the program, updating risk assessments and plans as significant new findings emerge.",
            "Use pilots to build confidence: early pilots, such as hybrid TLS in controlled environments, help test governance, vendor readiness, operational impact, and technical feasibility without committing the whole enterprise at once.",
            "Embed PQC into existing governance: integrate PQC into risk management, architecture review, secure development, procurement, supplier management, compliance, and change processes rather than treating it as an isolated initiative.",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Organizations should start by forming a core PQC team and running a workshop on quantum risk, so that IT and security leaders share the same picture. In parallel, they should secure executive sponsorship and budget for a formal PQC program.",
          ],
        },
        {
          type: "roadmap",
          title: "Reference roadmap",
          items: [
            {
              label: "Through end 2026",
              title: "Mobilization and governance",
              text: "Establish sponsorship, define ownership, run awareness and risk framing, approve a PQC program charter, engage vendors, and update policies and procurement.",
            },
            {
              label: "2026-2027",
              title: "Inventory and initial risk assessment",
              text: "Build crypto visibility, identify high-risk use cases, launch pilots, define reporting, and establish the initial migration backlog.",
            },
            {
              label: "2027-2028",
              title: "Migration planning",
              text: "Plan critical systems, validate technical patterns, align vendor roadmaps, confirm the migration budget, and define migration waves for the initial backlog.",
            },
            {
              label: "2027-2030",
              title: "High-risk use cases",
              text: "Transition critical infrastructure, protect sensitive data, migrate high-risk authentication and signing systems, and address assets with long migration lead times.",
            },
            {
              label: "2031-2035",
              title: "Broad adoption and crypto-agility",
              text: "Continue lower-risk migrations, embed PQC in the asset lifecycle, operate quantum-safe by default, and maintain continuous monitoring.",
            },
          ],
        },
        {
          type: "callout",
          variant: "important",
          title: "Inventory and migration proceed in parallel",
          paragraphs: [
            "These stages are not rigid sequential gates. Inventory and migration should overlap: known gaps, assumptions, and owners should be documented and reviewed regularly rather than waiting for a complete inventory before beginning migration work.",
            "These reference dates draw on the EU coordinated roadmap's recommended milestones and on BIPT's supervised sectoral timetable for Belgian telecommunications operators.",
          ],
        },
      ],
    },
    {
      id: "governance",
      title: "Governance & Program Management",
      intro:
        "Clarity of ownership is essential. PQC migration touches many domains, and ambiguity quickly leads to stalled execution.",
      blocks: [
        {
          type: "subsection",
          title: "Dedicated program versus integration",
          id: "dedicated-vs-integration",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Organizations should establish a Program Office (PMO) responsible for driving and coordinating the PQC transformation as a dedicated, structured function in the near term: a central team with a program manager supported by technical migration coordinators, giving unified tracking of progress, dependencies, and risks, acting as a cross-functional liaison between strategic governance and operational teams, and ensuring consistency across business units and workstreams.",
                "Over time, PQC should be integrated into normal governance structures rather than run indefinitely as a separate program. Embedding PQC into existing governance, risk, and compliance processes makes quantum readiness part of normal risk and compliance management rather than an isolated initiative, resulting in a transition path that is owned, prioritized, funded, enforceable, and auditable.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Steering Committee and Program Office",
          id: "steering-committee-pmo",
          blocks: [
            {
              type: "bullets",
              title: "Program Office (PMO) responsibilities",
              items: [
                "Coordinate enterprise-wide PQC activities and workstreams.",
                "Maintain the migration inventory and tracking repository.",
                "Manage dependencies across systems, vendors, and platforms.",
                "Track progress, KPIs, and risk exposure.",
                "Support prioritization of systems and use cases.",
                "Ensure alignment with regulatory and compliance expectations.",
                "Escalate issues and blockers to the Steering Committee.",
              ],
            },
            {
              type: "prose",
              paragraphs: [
                "The PMO functions as the operational engine room of the PQC transition, translating strategic intent into coordinated execution across a highly distributed technology landscape. The Steering Committee holds accountability for PQC strategy and roadmap approval, with decision-making authority and execution responsibility clearly separated but tightly coordinated with the PMO.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Executive buy-in and board oversight",
          id: "executive-buy-in",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "PQC migration requires sustained executive commitment because of long timelines (often 5-10+ years), significant investment in systems and processes, and dependencies on external vendors and standards evolution. PQC should be framed as a strategic risk initiative, not just a technical upgrade.",
              ],
            },
            {
              type: "bullets",
              title: "Regular board-level reporting should include",
              items: [
                "PQC readiness of critical systems.",
                "Vendor compliance status.",
                "Residual quantum risk exposure.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Governance best practices",
          id: "governance-best-practices",
          blocks: [
            {
              type: "bullets",
              items: [
                "Establish clear policies and standards: update the cryptography policy to explicitly include approved PQC and hybrid algorithms, crypto-agility requirements, migration timelines and priorities, and key management and lifecycle considerations, creating a single source of truth for all teams.",
                "Implement structured progress and risk reporting on a consistent cadence (for example, quarterly), combining migration progress against roadmap, the percentage of systems assessed or migrated, risk exposure trends, and vendor readiness. Dashboards should focus on trends, forecast completion, emerging risks, and decisions required, not just completed tasks. Recommended indicators include budget execution against plan, migration progress and forecast-to-complete, vendor dependency exposure, and exception ageing.",
                "Leverage existing processes: use existing architecture boards to approve PQC designs, risk committees to track quantum-related risks, and procurement workflows to enforce vendor compliance, adapting these processes to include PQC criteria rather than duplicating structures.",
                "Drive cross-functional coordination: encourage shared ownership across teams, regular cross-functional workshops, and centralized documentation and standards. Without this, the program risks becoming a collection of isolated migrations that do not fit together.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Parallel workstreams",
          id: "parallel-workstreams",
          blocks: [
            {
              type: "bullets",
              items: [
                "Governance and risk.",
                "Inventory and tooling.",
                "Prioritization.",
                "Policy and standards.",
                "Vendors and procurement.",
                "Pilots and validation.",
                "Migration waves.",
                "Monitoring and adaptation.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "raci",
      title: "Roles and Responsibilities (RACI)",
      intro:
        "The RACI-style model below shows how responsibilities are typically distributed across the PQC program, ensuring that decision-making authority and execution responsibility are clearly separated but tightly coordinated.",
      blocks: [
        {
          type: "table",
          caption:
            "Roles and Responsibilities for key PQC program activities",
          columns: ["Activity", "Accountable", "Responsible / coordinating", "Consulted / informed"],
          rows: [
            [
              "PQC strategy",
              "Executive sponsor",
              "Steering Committee",
              "PMO, security, architecture, application/platform owners (consulted); internal audit (informed)",
            ],
            [
              "Roadmap approval",
              "Executive sponsor",
              "Steering Committee",
              "PMO, security, architecture, application/platform owners, procurement (consulted); internal audit (informed)",
            ],
            [
              "Inventory coordination",
              "PMO (joint with Steering Committee)",
              "Application and platform owners",
              "Steering Committee, architecture, compliance (consulted); executive sponsor, procurement, risk, internal audit (informed)",
            ],
            [
              "Risk prioritization",
              "Executive sponsor",
              "Steering Committee and PMO",
              "Architecture, application/platform owners, compliance, risk (consulted); internal audit (informed)",
            ],
            [
              "Technical standards",
              "Steering Committee",
              "Architecture",
              "PMO, application/platform owners, compliance (consulted); executive sponsor, internal audit (informed)",
            ],
            [
              "Vendor readiness",
              "PMO (joint with procurement)",
              "Procurement",
              "Application/platform owners, risk (consulted); executive sponsor, architecture, compliance, internal audit (informed)",
            ],
            [
              "Migration execution",
              "PMO (joint with application/platform owners)",
              "Application and platform owners",
              "Steering Committee, architecture, compliance (consulted); executive sponsor, procurement, internal audit (informed)",
            ],
            [
              "Audit evidence",
              "Compliance and internal audit (joint)",
              "PMO",
              "Steering Committee, architecture, procurement, internal audit (consulted); executive sponsor, application/platform owners (informed)",
            ],
          ],
        },
      ],
    },
    {
      id: "business-case",
      title: "The Business Case & Financial Planning",
      intro:
        "A business case is needed to estimate the scale of work, avoid underfunding discovery and planning, sequence spending across budget cycles, align migration with technology refresh cycles, fund pilots before enterprise rollout, make vendor and hardware replacement dependencies visible, and support risk acceptance where migration cannot be completed immediately.",
      blocks: [
        {
          type: "callout",
          variant: "important",
          title: "Without a structured estimate",
          paragraphs: [
            "Without a structured estimate of the expected effort, organizations risk underestimating the scale of the transition.",
          ],
        },
        {
          type: "table",
          caption: "Cost categories, aligned with the program workstreams",
          columns: ["Cost category", "Examples"],
          rows: [
            [
              "Governance and risk",
              "PMO, reporting, steering, risk management, coordination.",
            ],
            [
              "Inventory and tooling",
              "Discovery tooling, asset enrichment, CBOM/SBOM processing, integration with CMDB/GRC.",
            ],
            [
              "Technical assessment",
              "Application reviews, platform assessments, PKI analysis, HSM/vendor readiness.",
            ],
            [
              "Vendor and procurement",
              "Product upgrades, roadmap commitments, contract changes, external assessments.",
            ],
            [
              "Pilots and migration execution",
              "Engineering effort, testing, release management, rollback planning.",
            ],
            [
              "Operations and ongoing monitoring",
              "Crypto policy review, dashboarding, audit evidence.",
            ],
            [
              "Training and awareness",
              "Security, architecture, procurement, application owner, and operations training.",
            ],
          ],
        },
        {
          type: "prose",
          title: "Phased investment and a living estimate",
          paragraphs: [
            "A simplified cost estimation template (an Excel workbook) is provided alongside the source white paper to help organizations quantify the PQC effort and build a business case. It is structured to capture the major cost inputs above and project them over the program timeline, letting organizations tailor assumptions (such as size, complexity, duration, and scope) to compute an approximate budget. The template does not produce a precise quote; it provides a starting point, and organizations should adjust assumptions using internal labor rates and any extra categories unique to their situation, so that the timeline of spend is visible (for example, lighter in early years for inventory and design, heavier in later years for implementation, with steady ongoing maintenance).",
            "Costs can be spread across multiple budget cycles, aligned with natural technology refresh cycles such as end-of-life replacements, embedded into existing hardware or software upgrade plans, and combined with overlapping initiatives such as cloud transformation or NIS2/DORA compliance programs.",
            "At each major program milestone, generic assumptions should be replaced with observed organizational data, allowing the estimate to progressively improve in accuracy and confidence. This iterative approach enables organizations to transition from estimates and broad industry benchmarks toward evidence-based forecasting that reflects their own architecture, supplier landscape, operational constraints, and migration progress.",
          ],
        },
        {
          type: "callout",
          variant: "important",
          title: "Treat published cost figures as directional only",
          paragraphs: [
            "Published figures can provide useful reference points for calibrating estimates, provided they are treated as indicative. One published estimate suggests that a large-enterprise discovery program may require approximately $2 million to $5 million, involving 5 to 15 specialists over six to twelve months, with the same source estimating $0.5 million to $1.5 million for a mid-sized organization. These figures should be viewed only as directional reference points, as actual costs depend heavily on organizational complexity, asset diversity, and the maturity of existing inventory processes. Estimates should be reviewed and refined throughout the program as discovery activities and practical migration experience provide greater visibility into actual costs and resource requirements.",
            "Discovery is far more complex than procuring and deploying a scanning tool: automated discovery solutions may fail to identify embedded cryptography, customized applications, inaccessible environments, shadow IT assets, or vendor-managed implementations, so organizations frequently underestimate the discovery budget. Manual validation, asset enrichment, architectural analysis, and supplier engagement remain essential.",
            "Implementation typically becomes the largest cost component of a PQC migration program, driven by application modifications, integration and regression testing, PKI and identity-management changes, vendor-provided upgrades and product replacements, operational deployment, and the replacement or decommissioning of systems that cannot support PQC or hybrid approaches. Its relative share should be derived from organization-specific analysis rather than assumed through predefined allocations.",
          ],
        },
        {
          type: "prose",
          title: "Articulating value: risk reduction, compliance, and agility",
          paragraphs: [
            "Justifying PQC investments requires reframing return on investment in terms of risk mitigation and strategic value rather than revenue. Unlike traditional initiatives, a quantum-safe program primarily delivers value by avoiding future losses and ensuring long-term continuity.",
          ],
        },
        {
          type: "bullets",
          title: "Key points to articulate in the business case",
          items: [
            "Regulatory compliance and fine avoidance: authorities such as BIPT have begun establishing minimum requirements for the transition to PQC, so delayed or inadequate action may contribute to audit findings, enforced remediation, or financial penalties.",
            "Reducing breach risk and cost of inaction: a PQC program serves as an insurance policy against the cost of a breach of long-lived sensitive data, including data breach costs, customer churn, and incident response; some models frame this as an annual cost-of-inaction figure.",
            "Protecting long-lived data and customer trust: for industries such as telecom, finance, or healthcare, data must often remain confidential for decades, and becoming quantum-safe protects brand reputation and customer trust.",
            "Competitive differentiation: being an early quantum-safe organization can be a market differentiator, particularly in B2B markets and public-sector procurement, where early movers may win deals or command a premium by providing higher assurance.",
            "Crypto-agility as future cost avoidance: investing in agile frameworks now, such as abstraction layers for crypto and automated certificate management, lowers the cost and time to respond to future cryptographic changes, quantum-related or not.",
            "Preserving license to operate: for critical infrastructure companies and financial institutions, quantum security will increasingly be seen as part of the basic duty of care, and falling behind could result in fines, loss of business contracts, or loss of government accreditations.",
            "Organizations can also contain costs by aligning PQC adoption with existing hardware and software renewal cycles, which are the moments at which vendors can be required to include PQC support.",
          ],
        },
      ],
    },
    {
      id: "risk-prioritization",
      title: "Risk Framing & Migration Prioritization",
      intro:
        "PQC risk should be assessed across two complementary dimensions: confidentiality risk (the potential exposure of sensitive information due to cryptographic failure) and trust and authenticity risk (the potential breakdown of confidence in identities, integrity, and security decisions that rely on cryptographic assurance). Treating only one dimension creates blind spots, because a system may appear protected from disclosure while still being exposed to failures of trust, validation, or assurance.",
      blocks: [
        {
          type: "table",
          caption: "Risk dimensions, examples, and governance implications",
          columns: ["Dimension", "Examples", "Governance implication"],
          rows: [
            [
              "Confidentiality risk",
              "Sensitive traffic, stored encrypted archives, long-lived customer data, state secrets, health or financial data.",
              "Prioritize data with long confidentiality lifetimes and systems with slow migration timelines.",
            ],
            [
              "Trust and authenticity risk",
              "PKI, certificates, code signing, firmware signing, secure boot, document signing, identity systems.",
              "Identify signing and trust infrastructure early.",
            ],
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "As in traditional vulnerability management, it is almost impossible to tackle every problem at once. High-risk assets should be addressed first, whether in the discovery phase (scanning and investigating high-risk assets first) or in the remediation phase (fixing critical cryptographic vulnerabilities found on high-risk assets first). Organizations should begin migration with a proof of concept or quick win, such as migrating less critical web servers to post-quantum TLS, before following a risk-based approach for further rollout.",
            "Not all assets can be migrated to PQC immediately. Certain assets, particularly those that depend on digital signatures or digital certificates, may currently face migration constraints due to the evolving maturity of post-quantum certificate and signature ecosystems and the limited availability of broadly supported implementation standards. Despite these constraints, such assets should retain the prioritization score initially assigned during the migration assessment, reflecting their continued cryptographic exposure and long-term migration requirements. Where migration is not yet technically or operationally feasible, the resulting residual risk should be formally assessed, documented, and actively managed until a viable and widely supported migration path becomes available.",
            "It is very likely that external TLS connections score very high because of their internet exposure. Files exchanged over the internet using SFTP, and downloadable signed content, will also score high. Internal TLS connections will score lower, and databases encrypted with symmetric algorithms will be found at the lower end of the scale.",
          ],
        },
        {
          type: "table",
          caption: "Risk prioritization factors",
          columns: ["Factor", "Meaning"],
          rows: [
            [
              "C - Protected asset criticality",
              "The sensitivity or criticality of the data protected by the cryptography, ranging from public data to highly sensitive data such as defense, authentication secrets, or cryptographic keys.",
            ],
            [
              "E - Exposure level",
              "Whether the asset is internet-exposed (public exposure), partner-accessible, or has internal exposure only. Internet-exposed systems carry higher risk of harvest-now-decrypt-later and trust-now-forge-later attacks.",
            ],
            [
              "V - Cryptographic vulnerability",
              "The quantum vulnerability of the cryptographic mechanism in use (for example RSA, ECDHE, ECDSA, or AES key sizes and modes). Where a single device or process holds several cryptographic assets, V is the maximum vulnerability across those assets.",
            ],
            [
              "R - Retention or asset lifetime",
              "How long data must remain confidential (influencing harvest-now-decrypt-later risk) or how long the asset itself will remain in service before replacement or end-of-life (influencing trust-now-forge-later risk).",
            ],
            [
              "W - Estimated workload",
              "The effort required for change, validation, replacement, rollout, and operational effort, ranging from under one month to more than 18 months.",
            ],
          ],
        },
        {
          type: "prose",
          title: "Scoring formula and priority bands",
          paragraphs: [
            "The total risk score is computed by selecting the relevant criteria and applying a weight to each criterion. Whichever approach is chosen, it must meet the following conditions: each factor is greater than or equal to 0 and less than or equal to 1, with higher values indicating greater importance; the total sum of the weights must equal 1; and the output range is greater than or equal to 0 and less than or equal to 1, with higher scores meaning the asset should be migrated earlier.",
            "A high-level assessment can use a simple three-factor metric: Priority = (weight-C x C) + (weight-E x E) + (weight-W x W). A more fine-grained assessment can incorporate all five factors: Priority = (weight-C x C) + (weight-E x E) + (weight-V x V) + (weight-R x R) + (weight-W x W), where the weights are chosen per organization and sum to 1.",
          ],
        },
        {
          type: "table",
          caption: "Priority bands and recommended actions",
          columns: ["Score range", "Priority", "Action"],
          rows: [
            ["0.80-1.00", "Critical", "Immediate migration."],
            ["0.60-0.79", "High", "Plan in next phase."],
            ["0.40-0.59", "Medium", "Include in roadmap."],
            ["Below 0.40", "Low", "Monitor or defer."],
          ],
        },
        {
          type: "subsection",
          title: "Worked example: internet-exposed website showing public data",
          id: "worked-example-public-website",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Using a simple metric, Priority = (0.5 x C) + (0.3 x E) + (0.2 x W), with C = 0.1 (public data), E = 1.0 (public exposure), and W = 0.5 (one month or less, due to changing TLS configuration and testing compatibility): Priority = (0.5 x 0.1) + (0.3 x 1.0) + (0.2 x 0.5) = 0.45. Outcome: include in roadmap.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Worked example: patient record system exchanging medical data via TLS API",
          id: "worked-example-patient-records",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Using a fine-grained approach, Priority = (0.3 x C) + (0.2 x E) + (0.2 x V) + (0.15 x R) + (0.15 x W), with C = 0.95 (medical/health data), E = 1.0 (public exposure), V = 0.95 (ECDHE with P-256 + AES-128 TLS), R = 1.0 (ten-year retention), and W = 0.7 (three to six months, for compatibility with legacy systems): Priority = (0.3 x 0.95) + (0.2 x 1.0) + (0.2 x 0.95) + (0.15 x 1) + (0.15 x 0.7) = 0.93. Outcome: immediate migration.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Worked example: digitally signed vehicle firmware",
          id: "worked-example-vehicle-firmware",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Using a fine-grained approach, Priority = (0.35 x C) + (0.15 x E) + (0.15 x V) + (0.25 x R) + (0.1 x W), with C = 0.85 (business-critical firmware), E = 1.0 (public exposure), V = 0.8 (RSA 2048 signature), R = 1.0 (end-of-life not expected for ten years), and W = 0.9 (design, implementation, validation, and rollout phases): Priority = (0.35 x 0.85) + (0.15 x 1.0) + (0.15 x 0.8) + (0.25 x 1.0) + (0.1 x 0.9) = 0.91. Outcome: immediate migration.",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Scoring disclaimer",
          paragraphs: [
            "This model is illustrative and customizable, not a universal regulatory score. It can be adapted to reflect organization-specific risk factors, operational requirements, and migration priorities. A high estimated workload must never be used to hide or deprioritize critical residual risk: where migration is not yet feasible, the residual risk must still be formally assessed, documented, and actively managed.",
          ],
        },
      ],
    },
    {
      id: "case-study",
      title: "Real-World Example: Incumbent Telecom Operator",
      intro:
        "The incumbent telecom operator is a national critical infrastructure provider with long-lived data and systems. Recognising the risk that emerging quantum computers pose to its networks and encrypted data, the operator treats post-quantum cryptography as a strategic resilience and regulatory priority.",
      blocks: [
        {
          type: "prose",
          title: "The PQC journey",
          paragraphs: [
            "The operator's PQC journey began in 2025 as part of an initial quantum risk assessment. A 2026 requirement from the national telecommunications regulator to produce a formal PQC transition plan then acted as a catalyst, placing quantum readiness alongside the operator's other regulated risk topics.",
            "To justify the upgrades and sequence them across asset lifecycles measured in decades, the company applied a Quantum-Safe Business Case Framework (QS-BCF), which quantifies the cost of inaction against the cost of migrating early. The result is a phased, three-horizon roadmap: an initial foundation phase to build inventory and skills (Horizon 1, through approximately 2027); a domain execution phase upgrading core network, IT systems, and key infrastructure (Horizon 2, approximately 2028-2030); and a full integration phase.",
          ],
        },
        {
          type: "prose",
          title: "Governance and execution",
          paragraphs: [
            "The PQC transition is a long-term transformation. To manage this, the telecom operator has established a structured governance and program management approach, bringing together cross-functional working groups across security, IT, network architecture, risk and compliance, and procurement. Security policies are being updated to incorporate PQC within broader security and resilience initiatives. Over time, these efforts will be further embedded into existing risk management and compliance frameworks, ensuring a sustainable and integrated approach.",
          ],
        },
        {
          type: "prose",
          title: "Early vendor engagement and hands-on pilots",
          paragraphs: [
            "The telecom operator engaged its technology suppliers and broader ecosystem early in the process, issuing quantum-readiness surveys to vendors asking about their PQC roadmaps, dependencies, and timelines. This proactive vendor engagement informs procurement decisions, helps synchronize upgrade timelines, and encourages suppliers to accelerate their own quantum-safe product development.",
            "The operator is also planning proof-of-concept projects, deploying hybrid cryptography (mixing classical and PQC algorithms) in controlled environments to validate the performance of new algorithms and assess the readiness of vendor products. Recognizing the importance of the supply chain, the telecom operator engages vendors early to evaluate their PQC readiness and influence their decisions on implementing quantum-safe algorithms.",
          ],
        },
        {
          type: "bullets",
          title: "Lessons and maturity dimensions reflected in the case",
          items: [
            "Regulatory catalysts can accelerate internal prioritization and secure executive attention.",
            "A phased, multi-horizon roadmap helps sequence upgrades across asset lifecycles measured in decades.",
            "A dedicated cost-of-inaction-versus-cost-of-migration framework (QS-BCF) supports investment justification.",
            "Cross-functional governance bringing together security, IT, network architecture, risk and compliance, and procurement is essential to sustain the transformation.",
            "Early, proactive vendor engagement through readiness surveys and controlled pilots reduces the risk of suppliers becoming bottlenecks.",
          ],
        },
      ],
    },
    {
      id: "external-guidance",
      title: "External Guidance",
      intro:
        "The following external resources provide complementary guidance, tooling, and assessment frameworks referenced in this volume.",
      blocks: [
        {
          type: "bullets",
          items: [
            "PQC Migration Handbook (AIVD): official publication providing practical guidance for organizations to mitigate quantum-computing risks to cryptography and structure a PQC migration program.",
            "PQC Migration Framework (Marin Ivezic / Applied Quantum): open-access practitioner framework for enterprise-wide PQC migration, covering governance, cryptographic inventory/CBOM, risk-prioritized roadmaps, pilots, and vendor governance, with sector extensions for financial services, payments, telecommunications, critical infrastructure and OT, government and defence, and digital assets.",
            "Framework Cryptography Policy for the Central Government (Dutch Digital Government): a governance template for embedding cryptography processes, architecture principles, and implementation requirements into enterprise policy.",
            "Framework for Estimating the Costs of Migrating to PQC: developed to provide collective insight into the costing factors present in a successful quantum-safe migration.",
            "Citi Quantum Readiness Survey: a supplier questionnaire capturing vendor PQC awareness, migration plans, algorithm support, deprecation timelines, certification plans, and testing readiness, useful as a practical model for third-party quantum-readiness assessments.",
            "PQC Maturity Model (PKI Consortium): a vendor-facing framework defining six maturity levels (0-5) for post-quantum cryptography adoption in products and services, helping organizations assess supply-chain readiness during procurement.",
            "The QRAMM Assessment Toolkit: a comprehensive Excel-based tool for evaluating organizational quantum readiness across 120 questions, with automated scoring, dynamic visualizations, and compliance mapping to 8 major frameworks.",
          ],
        },
      ],
    },
    {
      id: "appendices",
      title: "Appendices",
      intro:
        "The following disclosures contain supporting detail on the risk prioritization model and the acronyms used throughout this volume.",
      blocks: [
        {
          type: "disclosure",
          title: "Appendix: risk prioritization scoring model",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "This model provides a structured methodology for prioritizing asset migration to PQC. It evaluates the characteristics and risk profile of individual assets and supports two calculation approaches, enabling organizations to select the level of assessment granularity appropriate to their environment. The resulting score ranges from 0 to 1, where higher values indicate greater urgency for migration. While the model is designed as a broadly applicable framework suitable for most enterprise environments, it can be customized to reflect organization-specific risk factors, operational requirements, and migration priorities.",
              ],
            },
            {
              type: "table",
              caption: "Exposure level (E) reference values",
              columns: ["Exposure category", "Value"],
              rows: [
                ["Public exposure", "1.0"],
                ["Partner-accessible", "0.7"],
                ["Internal exposure", "0.4"],
              ],
              note: "Internet-exposed systems are at higher risk of harvest-now-decrypt-later and trust-now-forge-later attacks.",
            },
            {
              type: "table",
              caption: "Protected asset criticality (C) reference values",
              columns: ["Data or asset category", "Value"],
              rows: [
                ["Public data", "0.1"],
                ["Internal operational", "0.4"],
                ["Intellectual property", "0.7"],
                ["PII (personal data)", "0.85"],
                ["Business-critical software or firmware", "0.85"],
                ["Financial data", "0.9"],
                ["Legal or contractual records", "0.9"],
                ["Medical / health data", "0.95"],
                ["Highly sensitive (defense, authentication secrets, crypto keys)", "1.0"],
              ],
            },
            {
              type: "table",
              caption: "Estimated workload (W) reference values",
              columns: ["Workload duration", "Value"],
              rows: [
                ["Less than 1 month", "0.5"],
                ["1-3 months", "0.6"],
                ["3-6 months", "0.7"],
                ["6-12 months", "0.8"],
                ["12-18 months", "0.9"],
                ["More than 18 months", "1.0"],
              ],
            },
            {
              type: "table",
              caption: "Cryptographic vulnerability (V) reference values (selected mechanisms)",
              columns: ["Mechanism", "Value"],
              rows: [
                ["RSA 1024 / RSA 2048 (key exchange)", "1.0"],
                ["RSA 3072", "0.9"],
                ["RSA 4096", "0.8"],
                ["ECDHE P-256", "0.95"],
                ["ECDHE P-384", "0.9"],
                ["ECDHE P-521", "0.8"],
                ["RSA Signatures 1024", "0.9"],
                ["RSA Signatures 2048", "0.8"],
                ["RSA Signatures 4096", "0.7"],
                ["ECDSA P-256", "0.8"],
                ["ECDSA P-384", "0.7"],
                ["Ed25519", "0.8"],
                ["Ed448", "0.7"],
                ["TLS (RSA key exchange)", "1.0"],
                ["TLS (ECDHE P-256)", "0.95"],
                ["TLS (ECDHE P-384)", "0.9"],
                ["AES-128", "0.3"],
              ],
              note: "Where a single device or process holds several cryptographic assets, V is the maximum vulnerability across those assets.",
            },
            {
              type: "table",
              caption: "Retention period and asset lifetime (R) reference values",
              columns: ["Category", "Value"],
              rows: [
                ["Data retention: less than 1 year", "0.4"],
                ["Data retention: 1-5 years", "0.7"],
                ["Data retention: more than 5 years", "1.0"],
                ["Asset lifetime: replacement/end-of-life before 2030", "0.4"],
                ["Asset lifetime: replacement/end-of-life before 2035", "0.7"],
                ["Asset lifetime: replacement/end-of-life after 2035", "1.0"],
              ],
              note: "Retention periods primarily influence harvest-now-decrypt-later risk; asset lifetime primarily influences trust-now-forge-later risk.",
            },
          ],
        },
        {
          type: "disclosure",
          title: "Appendix: acronyms",
          blocks: [
            {
              type: "table",
              caption: "Acronyms used in this volume",
              columns: ["Acronym", "Meaning"],
              rows: [
                ["AES", "Advanced Encryption Standard"],
                ["API", "Application Programming Interface"],
                ["BIPT", "Belgian Institute for Postal Services and Telecommunications"],
                ["CCB", "Centre for Cybersecurity Belgium"],
                ["CBOM", "Cryptography Bill of Materials"],
                ["CIO", "Chief Information Officer"],
                ["CISO", "Chief Information Security Officer"],
                ["CMDB", "Configuration Management Database"],
                ["CRA", "Cyber Resilience Act"],
                ["CTO", "Chief Technology Officer"],
                ["DORA", "Digital Operational Resilience Act"],
                ["ECC", "Elliptic Curve Cryptography"],
                ["ECDHE", "Elliptic Curve Diffie-Hellman Ephemeral"],
                ["ECDSA", "Elliptic Curve Digital Signature Algorithm"],
                ["EdDSA", "Edwards-curve Digital Signature Algorithm"],
                ["GRC", "Governance, Risk Management and Compliance"],
                ["HSM", "Hardware Security Module"],
                ["IAM", "Identity and Access Management"],
                ["IT", "Information Technology"],
                ["KPI", "Key Performance Indicator"],
                ["NIS2", "Network and Information Systems Directive 2"],
                ["OT", "Operational Technology"],
                ["PII", "Personally Identifiable Information"],
                ["PKI", "Public Key Infrastructure"],
                ["PMO", "Programme Management Office"],
                ["PQC", "Post-Quantum Cryptography"],
                ["QS-BCF", "Quantum-Safe Business Case Framework"],
                ["QSRM", "Quantum-Safe Readiness Model"],
                ["RACI", "Responsible, Accountable, Consulted and Informed"],
                ["RSA", "Rivest-Shamir-Adleman"],
                ["SBOM", "Software Bill of Materials"],
                ["SDLC", "Software Development Life Cycle"],
                ["SFTP", "Secure File Transfer Protocol"],
                ["TLS", "Transport Layer Security"],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "conclusion",
      title: "What's Next?",
      intro:
        "The transition to post-quantum cryptography is no longer a future consideration; it is an active, industry-wide transformation that must begin now.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Regulatory momentum, ecosystem initiatives, and early adoption efforts across sectors such as telecom, finance, and government are rapidly converging. Organizations that delay run the risk of falling behind, both in compliance and in their ability to protect long-lived data and critical systems against future quantum threats. The next step is therefore clear: move from awareness and planning into structured execution.",
            "While this volume has focused on governance, program structure, and financial planning, the next volume provides the technical guidance required to operationalize the transition. It addresses how to implement PQC in practice, covering cryptographic inventory, crypto-agility, hybrid migration strategies, TLS and PKI evolution, and the practical challenges of deploying post-quantum algorithms in real-world environments.",
            "Ultimately, organizations that take action now will not only mitigate quantum-related risks but also strengthen their overall cybersecurity posture. By investing in PQC readiness, they enhance resilience, improve cryptographic governance, and build trust with customers, partners, and regulators. The journey ahead is complex, but with the right governance foundation and a clear path toward technical implementation, it becomes a manageable, and strategically valuable, transformation.",
            "The PQC transition is also a collective challenge that spans industries, supply chains, and national boundaries. Organizations are encouraged to actively participate in industry groups and knowledge-sharing forums, such as the Quantum Circle and the Cyber Security Coalition, sharing experiences from pilots, aligning on best practices, and contributing to open tools or training initiatives to accelerate progress for all.",
          ],
        },
        {
          type: "callout",
          variant: "important",
          title: "Continue to Volume 3",
          paragraphs: [
            "For the technical guidance needed to operationalize this transition, including cryptographic inventory, crypto-agility, hybrid migration strategies, and TLS and PKI evolution, see /guides/implementing-the-pqc-migration.",
          ],
        },
      ],
    },
  ],
  references: [
    {
      title: "Coordinated implementation roadmap for the transition to post-quantum cryptography",
      publisher: "European Commission",
      url: "https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography",
    },
    {
      title:
        "Communication of 13 January 2026 on minimum requirements and roadmap for the post-quantum transition in the telecommunications sector",
      publisher: "BIPT",
      url: "https://www.bipt.be/operators/publication/communication-of-13-january-2026-on-minimum-requirements-and-roadmap-for-the-post-quantum-transition-in-the-telecommunications-sector",
    },
    {
      title: "Framework for Estimating the Costs of Migrating to PQC",
      publisher: "Canadian Forum for Digital Infrastructure Resilience (CFDIR)",
      url: "https://ised-isde.canada.ca/site/spectrum-management-telecommunications/en/learn-more/committees-and-stakeholders/committees-and-councils/canadian-forum-digital-infrastructure-resilience-cfdir",
    },
    {
      title: "PQC migration cost estimate",
      publisher: "postquantum.com",
      url: "https://postquantum.com/pqc-governance/pqc-migration-cost",
    },
    {
      title: "PQC Migration Priority Calculator",
      publisher: "quantumsafe.be",
      url: priorityCalculatorUrl,
    },
    {
      title: "The PQC Migration Handbook",
      publisher: "AIVD",
      url: "https://english.aivd.nl/documents/2024/12/3/the-pqc-migration-handbook",
    },
    {
      title: "PQC Migration Framework",
      publisher: "Marin Ivezic / Applied Quantum",
      url: "https://pqcframework.com",
    },
    {
      title: "Framework Cryptography Policy for the Central Government",
      publisher: "Dutch Digital Government",
      url: "https://www.nldigitalgovernment.nl/document/framework-cryptography-policy-for-the-central-government",
    },
    {
      title: "Citi Quantum Readiness Survey",
      publisher: "Citi",
      url: "https://www.citibank.com/tts/surveys/2025/2362659-quantum-readiness/form.jsp",
    },
    {
      title: "PQC Maturity Model",
      publisher: "PKI Consortium",
      url: "https://pkic.org/wg/pqc/pqcmm",
    },
    {
      title: "The QRAMM Assessment Toolkit",
      publisher: "QRAMM",
      url: "https://qramm.org/toolkit-overview.html",
    },
  ],
};
