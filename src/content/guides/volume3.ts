// Volume 3: Implementing the PQC Migration — final edition.
import type { GuideContent } from "./types";

export const volume3: GuideContent = {
  id: "volume-3",
  purpose:
    "Technical and migration guidance for engineers, developers, architects and operations teams implementing post-quantum cryptography across applications, platforms, infrastructure and digital trust.",
  sections: [
    {
      id: "summary",
      title: "Summary",
      navLabel: "Summary",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This volume covers algorithm choices, implementation, interoperability, testing and operational deployment. It concentrates on approaches, tools and techniques that can be used now, including intermediate solutions where PQC-enabled products are unavailable or product upgrade cycles are long.",
            "The series moves from awareness and decision-making to governance, planning and investment, and then to technical implementation. Migration should reduce risk now while preparing systems to evolve as standards, products and operational experience mature.",
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Volume 1: Preparing for the Quantum Era",
              text: "Quantum threats, timelines, policy developments and the urgency of migration for decision-makers.",
              href: "/guides/preparing-for-the-quantum-era",
            },
            {
              title: "Volume 2: Managing the PQC Transition",
              text: "Governance, planning, responsibilities, funding and coordination for GRC teams, project managers and technical coordinators.",
              href: "/guides/managing-the-pqc-transition",
            },
          ],
        },
        {
          type: "cards",
          title: "Implementation recommendations",
          columns: 3,
          items: [
            {
              label: "R1",
              title: "Include trust now, forge later",
              text: "Adapt PQC risk analysis and implementation plans to account for the trust-now-forge-later threat as well as harvest-now-decrypt-later.",
              href: "#trust-now-forge-later",
            },
            {
              label: "R2",
              title: "Do not let agility delay protection",
              text: "Adopt crypto-agility wherever possible, but do not necessarily prioritise it over migration opportunities: agility improves efficiency, while migration reduces risk.",
              href: "#architectural-capability",
            },
            {
              label: "R3",
              title: "Inventory and migrate in parallel",
              text: "Continue building cryptographic inventories without postponing actual migrations. These activities need not be sequential.",
              href: "#inventory-foundation",
            },
            {
              label: "R4",
              title: "Combine inventory and business context",
              text: "Use application functionality, data characteristics and cryptographic implementation together. Combine asset inventories and data-classification systems with the cryptographic inventory.",
              href: "#cryptographic-inventory",
            },
            {
              label: "R5",
              title: "Consider prioritising TLS applications",
              text: "Give serious consideration to prioritising migration of applications using Transport Layer Security.",
              href: "#tls-workstreams",
            },
            {
              label: "R6",
              title: "Separate key exchange and authentication",
              text: "Consider migrating TLS key exchange first and deferring certificate authentication to a second step, with its own plan and progress tracking.",
              href: "#tls-workstreams",
            },
            {
              label: "R7",
              title: "Use local proxies where necessary",
              text: "When applications or infrastructure cannot immediately migrate, consider a proxy on the loopback address to provide TLS 1.3 and PQC as an intermediate step.",
              href: "#proxies-wrappers",
            },
            {
              label: "R8",
              title: "Adopt hybrid approaches",
              text: "Combine classical and post-quantum cryptography to mitigate the risk of either implementation being broken. Signature approaches remain subject to industry debate.",
              href: "#hybrid-pure-pqc",
            },
            {
              label: "R9",
              title: "Verify HSM certification",
              text: "Check that PQC-enabled hardware security modules retain the certifications required for their intended legal and regulatory uses, including eIDAS.",
              href: "#hsm-certification",
            },
            {
              label: "R10",
              title: "Develop and retain skills",
              text: "Recognise the shortage of PQC migration skills in recruitment and retention plans. Strongly consider developing existing staff.",
              href: "#migration-skills",
            },
            {
              label: "R11",
              title: "Guide system-owning teams",
              text: "Most migration consists of standard IT and software upgrades performed by system owners. Consider a small advisory task force spanning cryptography, architecture and IT operations.",
              href: "#migration-skills",
            },
            {
              label: "R12",
              title: "Consider infrastructure first",
              text: "Shared infrastructure often implements cryptography for many applications. Consider migrating it in the first wave to benefit multiple dependent applications.",
              href: "#infrastructure-migration",
            },
            {
              label: "R13",
              title: "Reuse existing tools",
              text: "Use existing CMDBs and vulnerability scanners for discovery and CI/CD pipelines for rollout wherever possible. Consider additional tools where gaps remain.",
              href: "#discovery-guidelines",
            },
          ],
        },
      ],
    },
    {
      id: "broader-risk-perspective",
      title: "Broader Risk Perspective",
      navLabel: "Risk",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "PQC migration is a cyber-risk and resilience challenge affecting technology, processes, suppliers and governance, not merely an algorithm replacement. Integrate it with enterprise risk management, the software development life cycle, vulnerability management, threat intelligence, supply-chain security and operational resilience.",
            "The long-term objective is a resilient, crypto-agile security architecture capable of adapting to an evolving threat landscape.",
          ],
        },
        {
          type: "subsection",
          id: "risk-regulatory-compliance",
          title: "2.1 Risk Reduction and Regulatory Compliance",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Regulatory deadlines reflect uncertain assessments of when cryptographically relevant quantum computers could threaten deployed public-key cryptography. Breakthroughs may accelerate those timelines, while implementation difficulties may lengthen migration.",
                "Treat regulatory deadlines as minimum planning assumptions rather than the latest completion dates. Data sensitivity, system lifecycles, supplier dependencies and exposure to harvest-now-decrypt-later attacks may justify more ambitious internal timelines.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "managing-migration-risks",
          title: "2.2 Managing PQC Migration Risks",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Classical and quantum-resistant mechanisms will coexist for an extended period. Manage the expanded attack surface from implementation bugs, dual certificate chains, silent fallback to classical algorithms and integration weaknesses between legacy and quantum-safe systems.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "start-reducing-risk",
          title: "2.3 Start Reducing Risk Now",
          blocks: [
            {
              type: "callout",
              variant: "implementation",
              title: "Deploy a consistent baseline",
              paragraphs: [
                "A pragmatic way to begin reducing risk is to deploy a small, consistent baseline such as X25519MLKEM768 broadly, even before regulation requires it. Keep the separate certificate-authentication workstream visible.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "application-platform-owners",
      title: "Guidance for Application & Platform Owners",
      navLabel: "Applications",
      blocks: [
        {
          type: "subsection",
          id: "harvest-now-decrypt-later",
          title: "3.1 Harvest Now, Decrypt Later (HNDL)",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "An adversary can record encrypted traffic and public-key material today and decrypt it after obtaining a cryptographically relevant quantum computer. This remains particularly important for information with long-term confidentiality requirements. Hybrid TLS key exchange is the appropriate near-term response for recorded traffic.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "trust-now-forge-later",
          title: "3.2 Trust Now, Forge Later (TNFL)",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Once sufficient quantum capability exists, an attacker could forge signatures or certificates without collecting anything in advance. Endpoint impersonation, fraudulent certificates and forged code signatures enable active attacks. Assess certificate authorities, code-signing keys, firmware and secure-boot authentication, document signing and timestamp services accordingly.",
                "Interactive signatures used only during a TLS handshake or login have essentially no value after the session ends; migration must finish before quantum capability arrives. Signatures that must remain verifiable for years have a different exposure.",
                "Long-term documents, code signatures and archives commonly depend on trusted timestamps. A timestamp protects a record only while the timestamp remains unforgeable. Existing records protected by classical timestamps will need renewed protection through post-quantum-signed timestamps before a quantum computer can forge them. Scope the backlog and the feasibility of re-timestamping it at scale; otherwise evidentiary value may be lost retroactively.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "architectural-capability",
          title: "3.3 The Starting Point: Architectural Capability, Not Feature Deployment",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Design platforms to evolve key exchange, cipher suites and certificate configurations through configuration and library updates rather than structural redesign or application-code changes.",
                "Crypto-agility is a means, not the goal. Under hard deadlines, successful migration takes priority over perfect agility. A host-bound proxy may provide earlier protection while a more flexible native solution is developed. Earlier agility work can accelerate migration without needing to be exhaustive first.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "inventory-foundation",
          title: "3.4 Cryptographic Inventory as the Foundation",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Discover more than TLS endpoints: include service meshes, identity systems, internal APIs, SDKs, messaging, operating-system packages, cryptographic libraries such as OpenSSL, third-party dependencies, printers, IoT cameras and other embedded hardware. Mobile phones are also an important future target platform.",
                "Prioritisation needs application and service dependencies, signing relationships and material embedded at manufacture without an update path. Fine-grained scoring of RSA or ECC key sizes is less useful when the relevant quantum threat breaks the underlying algorithm family.",
                "Build the cryptographic bill of materials around dependency chains and trust relationships. Combine it with asset management and data classification. A structured but incomplete view of high-risk, internet-facing or long-lived systems is enough to start migration while discovery continues.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "tls-workstreams",
          title: "3.5 TLS as the Primary Migration Surface — Two Workstreams, Not One",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "TLS is a mature, operationally relevant entry point. TLS 1.3 is a prerequisite: current PQC key-exchange mechanisms are being integrated there rather than retrofitted into earlier versions. Negotiation permits gradual deployment and compatibility with clients that do not yet support PQC.",
              ],
            },
            {
              type: "table",
              caption: "Separate TLS migration workstreams",
              columns: ["Workstream", "Threat addressed", "Mechanism and maturity", "Migration treatment"],
              rows: [
                [
                  "Key exchange",
                  "HNDL: later decryption of recorded traffic.",
                  "Hybrid X25519 with ML-KEM-768, including X25519MLKEM768, is deployable at production scale.",
                  "Proceed now where supported; verify actual negotiation and fallback.",
                ],
                [
                  "Certificate authentication",
                  "TNFL: active impersonation through forged certificates or signatures.",
                  "ML-DSA or equivalent signatures in certificate chains require wider PKI and CA/Browser Forum integration; production-scale support remains behind key exchange.",
                  "Maintain a separate roadmap covering signatures, certificate sizes, issuance, validation and ecosystem dependencies.",
                ],
              ],
            },
            {
              type: "callout",
              variant: "warning",
              title: "Hybrid key exchange does not complete TLS migration",
              paragraphs: [
                "Quantum-safe key exchange does not stop an attacker forging a classically signed certificate. Do not report the whole TLS migration as complete when only session confidentiality has been addressed.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "proxies-wrappers",
          title: "3.6 Intermediate Migration Targets — Use of Proxies and Wrappers",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Where native upgrades are unavailable, require intermediate product versions or conflict with rollout policies, consider wrappers or proxies such as stunnel or Nginx in proxy mode.",
                "Run them on the connection-termination devices themselves, using loopback, so that an unprotected network segment is not introduced between application and proxy. They can provide TLS 1.3 and PQC for older software or operating systems.",
                "This is a fixed, host-bound intermediate solution rather than ideal architectural agility. It can nevertheless provide immediate protection and buy time for a native migration, including where no replacement product exists.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "hybrid-pure-pqc",
          title: "3.7 Hybrid Versus Pure PQC",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The paper recommends hybrid approaches that combine classical and post-quantum algorithms, avoiding dependence on a single maturing implementation and protecting against failure of either component.",
                "This recommendation includes signatures, but the hybrid-versus-pure-PQC signature question is not settled. Standards, best practices and ecosystem support may change; preserve that qualification in design and procurement decisions.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "platform-ecosystem",
          title: "3.8 Platform and Ecosystem Readiness",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Readiness depends on the complete client, library, runtime and infrastructure path, not simply a server configuration. Heterogeneous or older clients can continue negotiating classical key exchange. Track the proportion of connections that actually negotiate hybrid or post-quantum protection over time.",
                "The paper identifies staged reductions in maximum TLS certificate validity: 200 days from March 2026, 100 days by March 2027 and 47 days by March 2029. These increase issuance, rotation and monitoring demands. Establish automation and agility for short-lived classical certificates as the operational foundation for future post-quantum certificate rotation.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "hsm-certification",
          title: "3.9 HSM, FIPS and eIDAS Complications",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Adding PQC algorithms can invalidate existing FIPS 140-3 validation or Common Criteria certification and require formal revalidation. Verify certification for the actual hardware, software version, algorithms and intended regulated use.",
                "Availability is uneven rather than uniformly distant. The paper reports PQC-capable FIPS 140-3-validated products and Common Criteria work underway, with some vendors expecting completion within one to two years rather than by 2029. Treat availability claims as vendor- and scheme-specific and confirm them during procurement.",
              ],
            },
            {
              type: "table",
              caption: "Certification distinctions for HSM planning",
              columns: ["Scheme", "Relevance", "Required action"],
              rows: [
                [
                  "FIPS 140",
                  "US/NIST cryptographic-module validation relevant to federal and some commercial procurement.",
                  "Verify PQC validation and the effect of firmware or algorithm upgrades.",
                ],
                [
                  "Common Criteria and eIDAS QSCD",
                  "Qualified signature use is assessed against European protection profiles such as EN 419 221-5 and EN 419 241-2.",
                  "Check PQC-capable certification specifically; FIPS validation alone does not establish eIDAS readiness.",
                ],
              ],
            },
            {
              type: "bullets",
              items: [
                "Ask vendors which certifications their PQC-capable hardware holds and which are scheduled.",
                "Require a credible upgrade path that avoids unexpected re-certification under either scheme.",
                "Where a qualified-signature use case lacks appropriate PQC-certified hardware, plan parallel infrastructure: currently certified HSMs for qualified signatures and a separate PQC-capable path for other signing needs.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "performance-operational-impact",
          title: "3.10 Performance and Operational Impact",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Hybrid key exchange increases computation and handshake message sizes. The principal impact is connection establishment, not steady-state traffic: bulk encryption is independent of the key-exchange mechanism, and network latency often dominates total setup time.",
                "Evaluate high connection churn, short sessions and repeated secure-channel establishment under realistic loads. Session resumption reduces full handshakes but generally reuses established state rather than performing fresh post-quantum key exchange on every reconnection. Balance performance against requirements for fresh key establishment.",
                "Before production rollout, validate modern and legacy client populations with representative traffic, confirm compatibility and establish an observability baseline.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "cryptographic-observability",
          title: "3.11 Observability as an Operational Requirement",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Classical fallback may be silent and protocol-compliant. A successful connection therefore does not prove post-quantum protection. Intermediate TLS terminators can also downgrade protection without an application-visible error.",
                "Collect explicit telemetry on negotiated parameters to distinguish classical and hybrid sessions at scale. Wireshark and tcpdump can verify negotiation, but require specialist low-level analysis. Treat continuous verification as a core operational capability rather than relying on configuration state alone.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "migration-skills",
          title: "3.12 Skills and the Structural Dependency on Cryptographic Expertise",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Production expertise spanning applied cryptography, network protocols, PKI and infrastructure security is scarce. Build internal capability through training, mentorship and deliberate exposure to cryptographic decision-making; recruitment and external academic pipelines do not replace this.",
                "Distinguish deployment through well-maintained library interfaces from specialist work. Combining primitives, designing key derivation or extending hybrid approaches into non-standard protocols needs cryptographic expertise.",
                "Most migration work depends on software architecture, operational resilience and release engineering. System-owning teams perform the actual upgrades. A small cross-functional advisory task force can guide them rather than becoming the delivery team for every system.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "infrastructure-migration",
          title: "3.13 Migrating at the Infrastructure Layer: Securing Waves, Not Just Applications",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Migrating reverse proxies, TLS-terminating load balancers and API gateways can cover many downstream applications in one wave without changing every application. Where supported, certificate-validation controls at this layer can likewise protect dependent services.",
                "Infrastructure protection can mask classical service-to-service cryptography behind the boundary. Use infrastructure migration alongside, not instead of, application-level discovery and follow-up migration.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "cryptographic-inventory",
      title: "Cryptographic Inventory",
      navLabel: "Inventory",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A cryptographic inventory records assets, usage and operational context. It supports risk-driven migration, vulnerability management, compliance objectives such as DORA and CRA, and crypto-agility. It is only part of prioritisation: business criticality, data sensitivity, regulatory requirements and dependencies often reside in other inventories.",
            "An accurate asset inventory reduces discovery blind spots. Keep cryptographic information continuously updated as applications, infrastructure and dependencies change. Begin critical migrations before completeness; shared infrastructure may be an effective first step.",
          ],
        },
        {
          type: "subsection",
          id: "discovery-guidelines",
          title: "4.2 Practical Discovery Guidelines",
          blocks: [
            {
              type: "bullets",
              ordered: true,
              items: [
                "Discover custom applications, commercial software, SaaS, servers, containers, cloud resources, endpoints, mobile devices, network appliances, third-party integrations and APIs.",
                "Reuse vulnerability scanners, CMDBs, code scanning, network scanning and manual assessment before adding tools. Reuse CI/CD pipelines for rollout. Additional agents and products should address identified gaps.",
                "Build a coverage matrix linking asset types and environments to available detection methods, missing coverage and rollout priorities. The cited CADI studies found capability and maturity differences and no single complete discovery solution.",
                "Aggregate, normalise and enrich findings into a unified view. Link cryptographic metadata to IP addresses, applications, processes, owners, business criticality, data sensitivity and exposure.",
                "Consider aggregation tooling that supports cryptographic policies, including internal, NIST and ENISA policies.",
                "Assign owners who are responsible for designing, planning and implementing migration and resolving findings.",
              ],
            },
            {
              type: "table",
              caption: "Discovery coverage matrix: dimensions from the paper’s illustrative example",
              columns: ["Dimension", "Coverage to record"],
              rows: [
                ["Cryptographic assets", "Keys, certificates, algorithms, protocols, libraries, languages, keystores and tokens."],
                ["External network", "Discovery by domain, individual IP address and IP address range."],
                ["Internal network", "Discovery by domain, individual IP address and IP address range."],
                ["Operating systems", "Windows and Linux."],
                ["Application and source code", "Bitbucket, GitHub, GitLab and CI/CD pipelines."],
                ["Cloud", "Amazon Web Services, Microsoft Azure and Google Cloud."],
                ["Each applicable intersection", "Existing tool or manual method, unavailable coverage, missing tooling and priority level."],
              ],
              note: "The source matrix is a simplified theoretical example, not a product evaluation or a universal coverage claim. It distinguishes in-house tools, missing capabilities, priorities and non-applicable cells.",
            },
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Readiness foundations",
              text: "Volume 1 introduces cryptographic inventory as a readiness activity.",
              href: "/guides/preparing-for-the-quantum-era",
            },
            {
              title: "Risk-based prioritisation",
              text: "Volume 2 explains how inventory supports migration priorities, including its practical prioritisation model.",
              href: "/guides/managing-the-pqc-transition",
            },
          ],
        },
      ],
    },
    {
      id: "crypto-agility",
      title: "Crypto-Agility",
      navLabel: "Agility",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Crypto-agility is the ability to move quickly between cryptographic mechanisms with minimal effort, ideally through configuration rather than application changes. PQC migration does not require agility, but agility makes this and future migrations easier.",
            "TLS 1.3 negotiation provides only protocol-layer agility. Artefact signing, authentication tokens and encryption at rest require equivalent application design discipline. Agility depends on current asset and cryptographic inventories.",
            "Practical constraints matter. Embedded and IoT devices, PKIs, HSMs, smart cards, industrial control systems and archival signing may require protocol changes, more memory or storage, new hardware, certificate redesign, extensive validation and operational coordination. A provider abstraction alone cannot remove those dependencies.",
          ],
        },
        {
          type: "bullets",
          title: "Architectural practices",
          items: [
            "Decouple cryptographic implementations from business logic through stable, high-level interfaces exposing encryption, signing and key exchange rather than individual algorithms.",
            "Where feasible, use dynamic linking or provider substitution so implementations can be upgraded, replaced or configured independently, ideally without recompilation or redeployment.",
            "Use mature cryptographic libraries and service-provider interfaces; the paper cites Google Tink as an example of a high-level interface.",
            "Centralise certificate and key lifecycle management and automate policy-controlled configuration changes.",
            "Maintain visibility of dependencies, compatibility, performance and operational constraints rather than assuming every algorithm can be swapped without wider change.",
          ],
        },
        {
          type: "callout",
          variant: "decision",
          title: "Migration deadlines take precedence",
          paragraphs: [
            "For critical systems with compressed timelines, prioritise successful PQC migration over perfect agility and improve agility later. For less critical systems with longer timelines, integrate agility into the migration effort.",
          ],
        },
      ],
    },
    {
      id: "next-pqc-challenges",
      title: "Addressing the Next PQC Challenges",
      navLabel: "Next challenges",
      blocks: [
        {
          type: "subsection",
          id: "signature-schemes",
          title: "6.2 Signature Schemes",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The paper recommends lattice-based ML-DSA for most applications and hash-based SLH-DSA for specific needs such as long-term validity. NIST standardises them in FIPS 204 and FIPS 205 respectively. SLH-DSA has small and fast variants, denoted s and f.",
                "Security levels 1, 3 and 5 correspond to the stated effort of breaking AES-128, AES-192 and AES-256 respectively. ECDSA is included only as a size reference and is not post-quantum secure. Research into other signature families reduces dependence on lattice assumptions.",
              ],
            },
            {
              type: "table",
              caption: "Signature key and signature sizes",
              columns: ["Scheme", "Level", "Private key", "Public key", "Signature"],
              rows: [
                ["ML-DSA-44", "2", "2.56 kB", "1.31 kB", "2.42 kB"],
                ["ML-DSA-65", "3", "4.03 kB", "1.95 kB", "3.31 kB"],
                ["ML-DSA-87", "5", "4.90 kB", "2.59 kB", "4.63 kB"],
                ["SLH-DSA-*-128s/f", "1", "64 B", "32 B", "7.86/17.09 kB"],
                ["SLH-DSA-*-192s/f", "3", "96 B", "48 B", "16.22/35.66 kB"],
                ["SLH-DSA-*-256s/f", "5", "128 B", "64 B", "29.79/49.86 kB"],
                ["ECDSA P-256", "Not post-quantum secure", "32 B", "33–65 B", "64 B"],
                ["ECDSA P-521", "Not post-quantum secure", "66 B", "67–133 B", "132 B"],
              ],
              note: "For ML-DSA, storing the seed rather than the expanded private key requires 32 bytes at every level.",
            },
          ],
        },
        {
          type: "subsection",
          id: "pki-transition",
          title: "6.3 PKI",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "A typical public-web TLS handshake transmits two public keys and five signatures: leaf and intermediate keys; one handshake signature; two certificate-chain signatures; and two certificate-transparency signed timestamps. Roots are embedded in browsers.",
                "The paper estimates 15–25 kB of overhead for ML-DSA-65 instead of 300–500 bytes for elliptic-curve mechanisms. Assess bandwidth, fragmentation, protocol limits, validation costs and certificate-handling infrastructure.",
                "PKI migration includes more than web servers: consider client authentication, secure email, qualified signatures, seals and website authentication. Qualified certificates depend on Qualified Trust Service Providers. Long-term signature validity also requires maintaining timestamp integrity.",
                "RFC 10073 standardises composite ML-DSA certificates and signatures. Parallel, alternative-public-key, mixed, composite and fully PQC models offer different trade-offs; the industry has not converged on one model.",
                "Merkle Tree Certificates seek to reduce repeated transmission of large signatures through tree-based authentication. The paper treats them as ongoing standardisation work rather than a broadly deployable replacement. Follow ecosystem support and do not postpone available migration measures while waiting for them.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "operational-technology",
          title: "6.4 Operational Technology",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The OT objective is trustworthy access, operations and software while preserving safety and availability. Equipment can remain in service for decades; PQC is not a reason to replace or alter every device.",
                "Start at upgradeable trust boundaries: remote access, external links, shared gateways, certificate validation, firmware and software signing. Assess cryptographic risk against operational change risk, and test interoperability, performance, recovery and rollback before expansion.",
                "Retain segmentation and established OT controls. PQC cannot secure a protocol that lacks cryptographic protection. Include crypto-agility and field-upgradeability in procurement and refresh cycles.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "privacy-enhancing-cryptography",
          title: "6.5 Privacy-Enhancing Cryptography",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Privacy-enhancing cryptography provides capabilities beyond ordinary encryption and authentication. Many schemes are not standardised, and mature, practical quantum-safe replacements are not always available. Prepare affected systems for substitution rather than treating experimental alternatives as production-ready.",
              ],
            },
            {
              type: "table",
              caption: "Privacy-enhancing cryptography and quantum readiness",
              columns: ["Category", "Capability", "Quantum readiness"],
              rows: [
                ["Zero-knowledge proofs", "Prove a claim without disclosing further details.", "Alternatives exist, but proofs may be orders of magnitude larger or remain research-stage."],
                ["Anonymous credentials", "Selectively disclose attributes, such as age over 18, rather than an entire identity document.", "Quantum-safe alternatives are new and insufficiently performant."],
                ["Oblivious pseudo-random functions", "Jointly compute a keyed function so only the client learns its result and the server learns nothing about the input.", "No battle-tested efficient quantum-safe alternatives; recent research is promising."],
                ["Fully homomorphic encryption", "Perform arbitrary computations on encrypted data.", "Quantum-safe approaches exist; practical performance requires acceleration and continued improvement."],
              ],
            },
            {
              type: "prose",
              paragraphs: [
                "Other categories include secure multi-party computation, private set intersection and oblivious transfer. Where competitive quantum-safe alternatives are unavailable, make systems crypto-agile and migrate when sufficiently performant alternatives mature.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "klarrio-use-case",
      title: "Real-World Use Case: Klarrio",
      navLabel: "Klarrio",
      blocks: [
        {
          type: "roadmap",
          title: "From assessment to production",
          items: [
            {
              label: "2024",
              title: "Assessment and architectural preparation",
              text: "A regulated-sector customer prompted a structured review of cryptographic dependencies, PKI components and substitution constraints. Incomplete mainstream support and inconsistent client negotiation would have required custom forks, so production deployment was deferred on ecosystem-readiness grounds.",
            },
            {
              label: "2025",
              title: "Readiness and ecosystem monitoring",
              text: "Inventory and architectural work continued while mainstream cryptographic libraries and clients matured. Older runtimes and curl builds without appropriate OpenSSL support could still fall back to classical negotiation.",
            },
            {
              label: "Q1 2026",
              title: "Production hybrid TLS",
              text: "Klarrio migrated its tutorrio academy platform to X25519MLKEM768, combining X25519 with FIPS 203 ML-KEM-768. TLS was selected as the external cryptographic boundary and deployable response to HNDL.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "The paper reports measurements using Node.js v26.2.0 and OpenSSL 3.5.6, with 250,000 handshakes per configuration after a 25,000-handshake warm-up. Additional runs from 10,000 to 1,000,000 samples confirmed consistent ranges. These are case-study measurements, not universal performance guarantees.",
          ],
        },
        {
          type: "table",
          caption: "Measured loopback handshake latency: no network",
          columns: ["Configuration", "Median", "P95", "P99"],
          rows: [
            ["Classical X25519", "0.705 ms", "0.928 ms", "1.432 ms"],
            ["Hybrid X25519MLKEM768", "0.850 ms", "1.091 ms", "1.605 ms"],
            ["Overhead", "+0.145 ms (+21%)", "+0.163 ms (+18%)", "+0.173 ms (+12%)"],
          ],
          note: "The source reports normal variation from CPU frequency scaling and system load, with repeated median overhead around 10–20%.",
        },
        {
          type: "table",
          caption: "Projected connection latency at real-world network round-trip times",
          columns: ["Network RTT", "Classical", "Hybrid", "PQC overhead"],
          rows: [
            ["10 ms", "10.75 ms", "10.89 ms", "+1.36%"],
            ["25 ms", "25.75 ms", "25.89 ms", "+0.57%"],
            ["50 ms", "50.75 ms", "50.90 ms", "+0.29%"],
            ["100 ms", "100.75 ms", "100.89 ms", "+0.14%"],
          ],
          note: "These are the paper’s projections, not additional network measurements. TLS 1.3 connection latency is approximated as cryptographic overhead plus one RTT.",
        },
        {
          type: "table",
          caption: "Other reported performance results",
          columns: ["Measure", "Classical", "Hybrid", "Interpretation"],
          rows: [
            ["Post-handshake throughput", "1,360 Mbps", "1,382 Mbps", "Median of seven 10 MB transfers per configuration; difference within measurement noise. Both use AES-256-GCM."],
            ["Handshake rate at 50 simultaneous connections", "1,161 per second", "Approximately 984 per second", "About 15% reduction; relevant to high connection churn and short-lived sessions."],
            ["Key material per connection", "64 bytes", "Approximately 2,336 bytes", "36-fold increase; approximately 2.3 kB additional data once per full handshake."],
            ["Additional transmission time", "Not applicable", "Under 2 ms at 10 Mbps; under 0.2 ms at 100 Mbps and above", "Wire-size growth is distinct from computational latency."],
          ],
        },
        {
          type: "bullets",
          title: "Operational lessons",
          items: [
            "Measure latency, CPU, concurrent throughput and reliability with production-like traffic. The main cost is connection establishment rather than steady-state bulk traffic.",
            "Use session resumption to reduce full-handshake frequency, while considering requirements for fresh key establishment.",
            "Verify negotiated groups rather than assuming configuration proves protection. In Go, inspect tls.Conn.ConnectionState() and the CurveID; use equivalent TLS-stack, proxy or packet-analysis visibility elsewhere.",
            "Track hybrid adoption and classical fallback across heterogeneous clients and TLS-terminating intermediaries.",
            "Treat dependency management, instrumentation, infrastructure compatibility and client readiness as the main integration work.",
            "Inventory and substitution boundaries prepared in 2024–2025 enabled migration without structural redesign in 2026; completeness was not required before starting.",
          ],
        },
        {
          type: "callout",
          variant: "important",
          title: "The authentication workstream remains open",
          paragraphs: [
            "The deployment protects session confidentiality against HNDL, not certificate authentication against TNFL. Publicly trusted certificate signatures remain classical in the reported deployment. Completion depends on IETF standardisation, CA/Browser Forum requirements, issuance infrastructure and suitable certified HSM support.",
          ],
        },
      ],
    },
    {
      id: "collaboration-continuous-learning",
      title: "Collaboration & Continuous Learning",
      navLabel: "Collaboration",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "PQC transition spans industries, supply chains and national boundaries. Participate in industry groups and knowledge-sharing forums such as Quantum Circle and the Cyber Security Coalition.",
            "Share pilot experience, align on practices and contribute to open tools and training. In Belgium, the Q-Ready COOCK project supports transfer of PQC knowledge and practical experience to SMEs through guidance, tools and awareness activities.",
          ],
        },
      ],
    },
    {
      id: "appendixes",
      title: "Appendixes",
      navLabel: "Appendixes",
      blocks: [
        {
          type: "disclosure",
          title: "Appendix A: Signature Schemes",
          blocks: [
            {
              type: "table",
              caption: "Signature families and implementation trade-offs",
              columns: ["Family", "Schemes and status in the paper", "Trade-offs"],
              rows: [
                ["Hash-based", "SLH-DSA; stateful LMS and XMSS standardised in IETF RFCs.", "Conservative hash-based assumptions. Stateful schemes permit a predetermined number of signatures and require careful state management; they can suit firmware or code signing where usage is bounded or keys rotate readily."],
                ["Lattice-based", "ML-DSA and FN-DSA.", "Performance comparable to elliptic-curve signatures, but larger public keys and signatures; side-channel resistance needs attention."],
                ["Code-based", "CFS hash-and-sign.", "Slow performance and public keys around 250 kB to 1 MB; not considered for NIST standardisation in the paper’s account."],
                ["Multivariate: UOV", "NIST candidate with over 25 years of public cryptanalysis.", "Fast signing and verification; signatures around 100 bytes, but public keys around 40–60 kB."],
                ["Multivariate: MAYO", "NIST candidate adapting UOV.", "Public keys around 600–1,000 bytes and signatures under 400 bytes; newer construction lacks UOV’s long track record."],
                ["Isogeny-based: SQIsign", "NIST candidate.", "Public keys around 64 bytes and signatures around 177 bytes; fast verification but slow signing. The 2022 break of the related SIKE key-exchange scheme warrants caution about this mathematical family."],
              ],
            },
            {
              type: "prose",
              paragraphs: [
                "Hash-based designs can trade signature size against key-generation and signing speed. A smaller signature is not automatically operationally preferable if generation becomes impractical. Evaluate the signing rate, verification rate, signature lifetime and key-management model rather than choosing on size alone.",
              ],
            },
          ],
        },
        {
          type: "disclosure",
          title: "Appendix B: PQC Within PKI Environments",
          blocks: [
            {
              type: "table",
              caption: "PKI migration models",
              columns: ["Model", "Design", "Benefits", "Disadvantages"],
              rows: [
                ["Parallel PKI", "Separate classical and PQC hierarchies; endpoints receive two certificates, potentially requiring both to validate.", "Clean separation, continued classical operation, straightforward rollback and rollover after hybridisation.", "Twice the certificates and validations; greater operational and policy complexity."],
                ["Hybrid with alternative public key", "A classical-style certificate carries a non-critical extension for the PQC public key and signature.", "One lifecycle, lower operational overhead and backward compatibility.", "Larger certificates; standards adoption and support vary."],
                ["Mixed hierarchy", "Classical, hybrid and PQC certificates coexist within a chain.", "Can start from an existing or partly externally owned PKI and retain long-lived CAs.", "Multiple algorithms in one chain create validation and compatibility challenges."],
                ["Composite certificate", "Public keys and signatures combine traditional and PQC components.", "One lifecycle; validation requires both components, so failure of either causes validation failure.", "Large certificates and limited support for hybrid keys."],
                ["Full PQC", "The complete PKI uses post-quantum mechanisms.", "Straightforward model with one certificate to manage.", "Requires a new PKI setup and does not support classical algorithms."],
              ],
            },
          ],
        },
        {
          type: "disclosure",
          title: "Appendix C: PQC in Operational Technology",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "OT assets can last decades while their trust mechanisms need to change sooner. Scarce maintenance windows, vendor dependencies, physical access, regression testing, outages and renewed certification make technically successful cryptographic changes potentially unacceptable operationally.",
                "Start by identifying existing public-key trust protecting access, commands, software and identities and the process or business risk it mitigates. Plans will differ between centralised plants, remote installations and mobile machinery.",
                "Prioritise remote operator and vendor access, plant-to-grid and control-centre links, certificates and firmware or controller-logic signing. Gateways and access brokers are generally easier to upgrade than embedded controllers. Introduce hybrid key establishment in stages while allowing for slower signature and PKI migration.",
                "A forged remote identity, shared OEM trust root or firmware signature can create fleet-wide consequences. Firmware, controller logic, configuration packages, recovery images and trust-store updates may need authenticity for years or decades. Root replacement may require vendors, testing, outages and site access. Include CRA support-period obligations in planning.",
                "Safety functions, local limits and independent protections must not depend on one remote identity or certificate hierarchy. Preserve safe local operation and shutdown when WAN connectivity, vendor platforms or PKI are unavailable or untrustworthy.",
                "Legacy Modbus, Modbus TCP, PROFIBUS, PROFINET, CAN and proprietary real-time buses may lack native encryption or strong authentication. PQC does not repair that absence. Retain segmentation, access control, monitoring and other established protections; some deep field layers may migrate last or not at all.",
              ],
            },
            {
              type: "bullets",
              title: "Practical migration approach",
              ordered: true,
              items: [
                "Discover trust relationships, owners, certificate and signing dependencies, support lifetimes and update paths.",
                "Rank exposures by safety, availability, operational impact, confidentiality lifetime and trust lifetime.",
                "Engage vendors on supported algorithms, upgradeable gateways, firmware verification, trust-store rotation, certification and field recovery.",
                "Pilot at relatively upgradeable boundaries using representative devices, traffic and constrained links.",
                "Test latency, CPU and memory, packet growth and fragmentation, interoperability, failover, certificate renewal, recovery and rollback.",
                "Deploy in controlled waves aligned with maintenance windows, retaining safe local operation and monitoring actual negotiated protection.",
                "Include cryptographic agility, field upgradeability and lifecycle support in procurement and refresh requirements.",
              ],
            },
          ],
        },
        {
          type: "disclosure",
          title: "Appendix D: Privacy-Enhancing Cryptography",
          blocks: [
            {
              type: "table",
              caption: "PEC adoption and migration constraints",
              columns: ["Technology", "Examples and numerical context", "Migration implication"],
              rows: [
                ["Zero-knowledge proofs", "Common zk-SNARKs and Bulletproofs are not quantum-resistant. Introduced in 2018, zk-STARKs increase typical proof sizes from 0.2–0.6 kB to 45–200 kB, roughly 300-fold.", "Quantum-safe alternatives can impose major communication and maturity costs."],
                ["Google Longfellow", "Released in 2025; selective disclosure for EUDI Wallet use. A single-attribute proof is around 325 kB.", "Computationally efficient but large; currently cannot derive proofs from identity documents signed with PQC algorithms."],
                ["LaZeR", "IBM Research library for concise, computationally efficient quantum-safe proofs.", "Research-stage, not production-ready."],
                ["Anonymous credentials", "Examples include British Columbia, Yivi, Signal private groups and Intel EPID. The paper reports approximately 70 million Signal users and more than 2.5 billion EPID credentials.", "Existing deployments are quantum-vulnerable; proposed replacements remain new and less efficient."],
                ["Oblivious pseudo-random functions", "Used in password-based authenticated key exchange and confidential breach-list checks; Leap is a recent lattice-based proposal.", "No battle-tested efficient quantum-safe alternative; recent results remain experimental."],
                ["Fully homomorphic encryption", "Proposed in 1978; first scheme in 2009. Uses include Microsoft Edge password monitoring and Apple private retrieval applications.", "Lattice and Learning With Errors assumptions support quantum-safe designs, but performance and standardisation remain important constraints."],
              ],
            },
            {
              type: "prose",
              paragraphs: [
                "Anonymous credentials support selective disclosure, conditional anonymity and unlinkability. Unlike proofs over legacy identity documents, they use their own algebraic structures. Replacements must preserve these properties as well as meet performance needs.",
                "Fully homomorphic encryption may provide a common quantum-safe building block for OPRFs, private set intersection and oblivious transfer, but generic constructions can currently be extremely slow. Algorithmic improvements, hardware acceleration and future standardisation may broaden practical use.",
                "Where mature, competitive alternatives do not exist, prepare systems for substitution and migrate when those alternatives become sufficiently performant. Avoid replacing deployed schemes with research constructions solely to claim migration completion.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "acronyms",
      title: "Acronyms",
      navLabel: "Acronyms",
      blocks: [
        {
          type: "table",
          caption: "Acronyms used in the paper",
          columns: ["Acronym", "Meaning"],
          rows: [
            ["AES", "Advanced Encryption Standard"],
            ["API", "Application Programming Interface"],
            ["CA", "Certificate Authority"],
            ["CADI", "Cryptographic Asset Discovery and Inventory"],
            ["CAN", "Controller Area Network"],
            ["CBOM", "Cryptographic Bill of Materials"],
            ["CCB", "Centre for Cybersecurity Belgium"],
            ["CI/CD", "Continuous Integration and Continuous Delivery/Deployment"],
            ["CISO", "Chief Information Security Officer"],
            ["CMDB", "Configuration Management Database"],
            ["CPU", "Central Processing Unit"],
            ["CRA", "Cyber Resilience Act"],
            ["CRQC", "Cryptographically Relevant Quantum Computer"],
            ["DORA", "Digital Operational Resilience Act"],
            ["ECC", "Elliptic Curve Cryptography"],
            ["ECDSA", "Elliptic Curve Digital Signature Algorithm"],
            ["eIDAS", "Electronic Identification, Authentication and Trust Services"],
            ["ENISA", "European Union Agency for Cybersecurity"],
            ["EPID", "Enhanced Privacy ID"],
            ["ETSI", "European Telecommunications Standards Institute"],
            ["EU", "European Union"],
            ["EUDI", "European Digital Identity"],
            ["FHE", "Fully Homomorphic Encryption"],
            ["FIPS", "Federal Information Processing Standards"],
            ["FN-DSA", "Fast-Fourier Transform over NTRU-Lattice-Based DSA"],
            ["GRC", "Governance, Risk and Compliance"],
            ["HNDL", "Harvest Now, Decrypt Later"],
            ["HSM", "Hardware Security Module"],
            ["HTTPS", "Hypertext Transfer Protocol Secure"],
            ["ICT", "Information and Communications Technology"],
            ["IEC", "International Electrotechnical Commission"],
            ["IETF", "Internet Engineering Task Force"],
            ["IoT", "Internet of Things"],
            ["IP", "Internet Protocol"],
            ["ISO", "International Organization for Standardization"],
            ["IT", "Information Technology"],
            ["JDK", "Java Development Kit"],
            ["KVAC", "Keyed-Verification Anonymous Credential"],
            ["KYC", "Know Your Customer"],
            ["LMS", "Leighton-Micali Signature"],
            ["LTV", "Long-Term Validation"],
            ["LWE", "Learning With Errors"],
            ["ML-DSA", "Module-Lattice-Based Digital Signature Algorithm"],
            ["ML-KEM", "Module-Lattice-Based Key-Encapsulation Mechanism"],
            ["MTC", "Merkle Tree Certificate"],
            ["MTU", "Maximum Transmission Unit"],
            ["NCCoE", "National Cybersecurity Center of Excellence"],
            ["NCSC", "National Cyber Security Centre"],
            ["NIST", "National Institute of Standards and Technology"],
            ["OEM", "Original Equipment Manufacturer"],
            ["OPRF", "Oblivious Pseudo-Random Function"],
            ["OT", "Operational Technology"],
            ["PAKE", "Password-Based Authenticated Key Exchange"],
            ["PEC", "Privacy-Enhancing Cryptography"],
            ["PKI", "Public Key Infrastructure"],
            ["POI", "Points of Interest"],
            ["PQ/T", "Post-Quantum/Traditional"],
            ["PQC", "Post-Quantum Cryptography"],
            ["PRF", "Pseudo-Random Function"],
            ["PSI", "Private Set Intersection"],
            ["QSCD", "Qualified Signature Creation Device"],
            ["QSEAL", "Qualified Electronic Seal"],
            ["QSIGN", "Qualified Electronic Signature"],
            ["QWAC", "Qualified Website Authentication Certificate"],
            ["RFC", "Request for Comments"],
            ["RSA", "Rivest-Shamir-Adleman"],
            ["RTT", "Round-Trip Time"],
            ["SaaS", "Software as a Service"],
            ["SDK", "Software Development Kit"],
            ["SDLC", "Software Development Life Cycle"],
            ["SGX", "Software Guard Extensions"],
            ["SIKE", "Supersingular Isogeny Key Encapsulation"],
            ["SLH-DSA", "Stateless Hash-Based Digital Signature Algorithm"],
            ["SME", "Small and Medium-Sized Enterprise"],
            ["S/MIME", "Secure/Multipurpose Internet Mail Extensions"],
            ["SNARK", "Succinct Non-Interactive Argument of Knowledge"],
            ["SQIsign", "Short Quaternion and Isogeny Signature"],
            ["SSDF", "Secure Software Development Framework"],
            ["STARK", "Scalable Transparent Argument of Knowledge"],
            ["TLS", "Transport Layer Security"],
            ["TNFL", "Trust Now, Forge Later"],
            ["TPM", "Trusted Platform Module"],
            ["UOV", "Unbalanced Oil and Vinegar"],
            ["URL", "Uniform Resource Locator"],
            ["VPN", "Virtual Private Network"],
            ["WAN", "Wide Area Network"],
            ["WebPKI", "Web Public Key Infrastructure"],
            ["XMSS", "eXtended Merkle Signature Scheme"],
            ["ZKP", "Zero-Knowledge Proof"],
          ],
        },
      ],
    },
  ],
  references: [
    {
      title: "RFC 9958: Post-Quantum Cryptography for Engineers",
      publisher: "IETF",
      url: "https://www.rfc-editor.org/info/rfc9958",
    },
    {
      title: "RFC 10024: Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3",
      publisher: "IETF",
      url: "https://www.rfc-editor.org/rfc/rfc10024",
    },
    {
      title: "RFC 10073: Composite Module-Lattice-Based Digital Signature Algorithm (ML-DSA) for Use in X.509 Public Key Infrastructure",
      publisher: "IETF",
      url: "https://www.rfc-editor.org/rfc/rfc10073",
    },
    {
      title: "Post-Quantum Cryptography (PQC)",
      publisher: "Cloudflare",
      url: "https://developers.cloudflare.com/ssl/post-quantum-cryptography",
    },
    {
      title: "PQC Support",
      publisher: "Cloudflare",
      url: "https://developers.cloudflare.com/ssl/post-quantum-cryptography/pqc-support",
    },
    {
      title: "PQC to Origin Servers",
      publisher: "Cloudflare",
      url: "https://developers.cloudflare.com/ssl/post-quantum-cryptography/pqc-to-origin",
    },
    {
      title: "Updated Recommendations for TLS Keyshares",
      publisher: "IETF",
      url: "https://datatracker.ietf.org/doc/draft-westerbaan-tls-keyshare-recommendations",
    },
    {
      title: "Migration to Post-Quantum Cryptography",
      publisher: "NIST NCCoE",
      url: "https://www.nccoe.nist.gov/applied-cryptography/migration-to-pqc",
    },
    {
      title: "Next Steps in Preparing for Post-Quantum Cryptography",
      publisher: "NCSC",
      url: "https://www.ncsc.gov.uk/whitepaper/next-steps-preparing-for-post-quantum-cryptography",
    },
    {
      title: "TLS Server Certificate Baseline Requirements",
      publisher: "CA/Browser Forum",
      url: "https://cabforum.org/working-groups/server/baseline-requirements",
    },
    {
      title: "Latest S/MIME Baseline Requirements",
      publisher: "CA/Browser Forum",
      url: "https://cabforum.org/working-groups/smime/requirements",
    },
    {
      title: "ETSI TR 104 016: Quantum-Safe Cryptography — A Repeatable Framework for Quantum-Safe Migrations",
      publisher: "ETSI",
    },
    {
      title: "Agreed Cryptographic Mechanisms, Version 3",
      publisher: "ENISA/ECCG",
      url: "https://certification.enisa.europa.eu/publications/eucc-guidelines-cryptography_en",
    },
    {
      title: "HAPKIDO Handbook: Navigating the Transition to Quantum-Safe PKI",
      publisher: "HAPKIDO",
      url: "https://project-hapkido.nl/deliverables/navigating-transition-quantum-safe-pki",
    },
    {
      title: "Architecting PKI Hierarchies for Graceful PQ Migration",
      publisher: "PKI Consortium",
      url: "https://www.youtube.com/watch?v=26lxuHIdvLg&list=PL-BLLaXQJAfTLuRXJYwAAiJmZRGzhOvFd&index=34",
    },
  ],
};