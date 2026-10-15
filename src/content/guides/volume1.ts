import type { GuideContent } from "./types";

export const volume1: GuideContent = {
  id: "volume-1",
  purpose:
    "An executive guide to why post-quantum migration cannot wait: the quantum threat to today's cryptography, what PQC is, and the organizational decisions leaders should start now.",
  sections: [
    {
      id: "executive-summary",
      title: "Executive Summary",
      navLabel: "Executive Summary",
      intro:
        "Quantum computing will eventually undermine the cryptographic foundations of today's digital world. The risk horizon is shrinking, and post-quantum readiness has moved from a long-term research topic to a practical cybersecurity priority.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "When the previous Preparing for the Quantum Era white paper was published in October 2025, its core message was awareness: quantum computing will eventually undermine the cryptographic foundations of today's digital world; \"harvest now, decrypt later\" makes some sensitive data vulnerable already; and migrating to post-quantum cryptography (PQC) will take many years.",
            "The past year has changed the tone of the debate around quantum risk. The timeline remains uncertain, but the risk horizon is shrinking: industry roadmaps, public-policy signals, and expert assessments increasingly point to the need for earlier action.",
            "At the same time, post-quantum readiness has evolved from a long-term research topic into a practical cybersecurity priority, increasingly reflected in cybersecurity strategies, regulatory expectations, and resilience planning.",
            "Early action is no longer driven primarily by the need to protect long-lived confidential data against future decryption. Starting the transition now provides organizations with the time and flexibility to address a broader set of cryptographic dependencies, including authentication and digital signatures, rather than being forced into a narrowly focused or rushed migration later.",
            "For C-level executives, CIOs, CISOs, and IT decision-makers, the imperative is clear: preparation cannot wait.",
          ],
        },
        {
          type: "callout",
          variant: "important",
          title: "Leadership in the quantum era",
          paragraphs: [
            "Leadership in the quantum era means anticipating change before it becomes disruption. Quantum computers will ultimately be able to break public-key algorithms such as RSA and ECC, putting secure communications, encrypted data, and digital signatures at risk.",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Although large-scale machines are not yet available, governments and security agencies are already urging a shift to post-quantum cryptography. Migration is complex: updating systems across diverse infrastructures can take many years. The urgency is heightened by the \"harvest now, decrypt later\" model, where adversaries collect encrypted data today to decrypt once quantum capabilities mature. Sectors with long data-retention requirements — government, healthcare, finance, critical infrastructure — are especially exposed to this risk.",
            "Starting the migration early is essential to ensure data protection and operational continuity in the quantum era.",
          ],
        },
        {
          type: "subsection",
          title: "Post-Quantum Cryptography Explained",
          id: "pqc-explained-summary",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Post-quantum cryptography (PQC) refers to cryptographic algorithms designed to run on today's classical computers while resisting attacks from both classical and quantum computers. Standardization bodies such as NIST have already published the first PQC standards, and organizations should begin planning their adoption.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Steps Towards Quantum Readiness",
          id: "steps-summary",
          blocks: [
            {
              type: "bullets",
              items: [
                "Assess: Identify quantum risks and evaluate exposure.",
                "Plan: Build a migration roadmap aligned with compliance needs.",
                "Implement: Deploy PQC solutions and ensure resilience.",
              ],
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Quantum readiness is no longer a distant concern — it is a strategic imperative. If you are a C-level executive, CIO, CISO, or IT leader, your role is pivotal in preparing your organization for the post-quantum era. Acting now not only safeguards data and operations but also positions your organization as a leader in digital resilience. This is the moment to build trust, ensure compliance, and future-proof infrastructure against emerging threats. The time to act is now.",
          ],
        },
      ],
    },
    {
      id: "strategic-recommendations",
      title: "Strategic Recommendations",
      navLabel: "Recommendations",
      intro:
        "The most consequential near-term actions for security leadership are not technical. They are organizational.",
      blocks: [
        {
          type: "cards",
          columns: 3,
          items: [
            {
              label: "01",
              title: "Fund",
              text: "Secure funding and scope for a quantum readiness programme.",
              href: "#executive-action-plan",
            },
            {
              label: "02",
              title: "Organize",
              text: "Make sure that ownership roles across security, architecture, compliance, and infrastructure are explicitly assigned rather than assumed.",
              href: "/guides/managing-the-pqc-transition",
            },
            {
              label: "03",
              title: "Inventory",
              text: "Catalogue cryptographic assets and assess data sensitivity and retention.",
              href: "#first-steps",
            },
            {
              label: "04",
              title: "Plan",
              text: "Develop a migration strategy aligned with EU roadmap milestones, prioritizing high-risk and long-lived systems.",
              href: "#migration-timeline",
            },
            {
              label: "05",
              title: "Engage",
              text: "Work with vendors to ensure PQC readiness and update contracts with transparency clauses.",
              href: "#first-steps",
            },
            {
              label: "06",
              title: "Implement",
              text: "Deploy hybrid cryptographic solutions to ensure continuity and enable future upgrades.",
              href: "/guides/implementing-the-pqc-migration",
            },
            {
              label: "07",
              title: "Invest",
              text: "Build crypto-agility to adapt quickly to evolving standards and threats.",
              href: "#understanding-pqc",
            },
            {
              label: "08",
              title: "Report",
              text: "Ensure that PQC appears in risk reporting to boards and steering committees.",
              href: "/guides/managing-the-pqc-transition",
            },
            {
              label: "09",
              title: "Monitor",
              text: "Track quantum developments, assess cybersecurity implications, and join industry collaborations to stay informed.",
              href: "#executive-action-plan",
            },
          ],
        },
      ],
    },
    {
      id: "quantum-threat",
      title: "Understanding the Quantum Threat",
      navLabel: "The Quantum Threat",
      intro:
        "Quantum computing is advancing from a science-fiction concept into a practical engineering race, with direct consequences for the cryptography that underpins today's digital infrastructure.",
      blocks: [
        {
          type: "subsection",
          title: "A New Computing Paradigm — With Consequences",
          id: "new-computing-paradigm",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Quantum computing, once a science-fiction concept, is now advancing rapidly. With billions in investment from governments and technology giants, the arrival of usable quantum machines is no longer a question of if but when.",
                "Its power comes from two principles of quantum mechanics: superposition and entanglement. Superposition allows a qubit to exist in multiple states at once, while entanglement links qubits so that the state of one instantly influences another. Together, they enable quantum computers to solve problems that would take classical machines centuries.",
                "The possibilities are transformative: breakthroughs in materials science, logistics, and drug development; faster training of AI models; and optimization problems beyond the reach of today's technology.",
                "But this power carries risk. The same mathematical problems that secure digital systems today — such as factoring large numbers — become solvable with a cryptographically relevant quantum computer (CRQC). Widespread cryptographic algorithms could be broken, undermining the security of global digital infrastructure.",
                "Cryptography underpins online banking, government services, secure communications, and critical infrastructure. Every time we log in, update software, or access a secure website, cryptography ensures confidentiality and integrity. If those algorithms fail, the consequences will be severe. The same power that drives innovation also breaks cryptography.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Acting Before It's Too Late",
          id: "acting-before-too-late",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The quantum threat is not a distant science-fiction scenario. Even without a fully developed CRQC, the risk is real: the possibility of one emerging in the coming decades demands urgent action today.",
                "Migration to quantum-safe cryptography is complex. It requires mapping interdependencies, testing algorithms, and coordinating across vendors, partners, and legacy systems. This is far more than a software update; some systems may take years, others a decade or more. Past experience proves the challenge — phasing out TLS 1.0, for example, took over ten years. The long migration time makes early preparation critical.",
                "Another driver of urgency is the \"harvest now, decrypt later\" model. Adversaries may already be storing encrypted data, waiting until quantum machines can break it. When that day comes, archives containing government communications, corporate secrets, or health records could all be exposed. Any long-lived data is at risk.",
                "Declassification laws highlight the danger. In 2022, the federal government set timelines of 20, 30, or 50 years depending on sensitivity. Yet intercepted cables could be decrypted decades earlier if a CRQC appears within 10–15 years — undermining sovereignty and public trust.",
                "This risk is not theoretical. Nation-states are investing heavily in quantum research, seeking the first-mover advantage of breaking encryption at scale. Equally concerning is the risk of forged digital signatures. These underpin services from software updates and secure logins to identity documents and financial transactions. Without post-quantum signatures, attackers could fake updates, insert malicious code, and block remediation. The same threat extends to digital identities, payment systems, and authentication frameworks.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Confidentiality Risk Versus Trust and Authenticity Risk",
          id: "confidentiality-vs-trust-risk",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "It is useful to distinguish between two eras of risk, and between two different kinds of harm: the loss of confidentiality through harvest-now-decrypt-later, and the loss of trust and authenticity through future forgery of signatures.",
              ],
            },
            {
              type: "cards",
              columns: 2,
              items: [
                {
                  title: "Before a CRQC exists: harvest now, decrypt later",
                  text: "Long-lived data and long-lived digital signatures are vulnerable today. Data encrypted now may be harvested and decrypted once a CRQC becomes available, and signatures relied upon for years may later be forged. Confidentiality risk accrues silently in the present.",
                },
                {
                  title: "After a CRQC is achieved: real-time compromise",
                  text: "The risk becomes immediate. Harvested data can be decrypted, live communications broken, and digital signatures forged in real time. Existing authentication and authorization infrastructure would collapse overnight, undermining trust rather than only confidentiality.",
                },
              ],
            },
            {
              type: "prose",
              paragraphs: [
                "These two realities — long-term data vulnerability and slow migration — make the quantum threat urgent today, even though the arrival date of a CRQC is uncertain. As organizations gradually adopt PQC, they must also contend with a hybrid cryptographic environment where new and old algorithms co-exist. This transitional state expands the attack surface through potential implementation bugs, coexistence risks, and integration weaknesses between classical and quantum-safe systems.",
                "Uncertainty in CRQC timing does not remove the planning problem. Migration timelines are also shaped by regulation, customers, vendors, infrastructure readiness, and system lifecycle, so waiting for certainty is itself a decision with consequences. The direction of travel is clear: the threat is real, the consequences severe, and the time to act is now.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "migration-timeline",
      title: "Timeline for PQC Migration",
      navLabel: "Migration Timeline",
      intro:
        "While the exact moment when quantum computers will break modern cryptographic algorithms remains uncertain, this uncertainty is irrelevant to strategic planning. Governments and regulators are setting migration timelines based on risk and infrastructure readiness.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "For decision-makers, the implication is clear: waiting is no longer an option. Action is required now, regardless of when quantum computers arrive. The European Union's Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography sets three milestones.",
          ],
        },
        {
          type: "roadmap",
          title: "EU Coordinated Implementation Roadmap",
          items: [
            {
              label: "2026",
              title: "National Strategies Established",
              text: "National strategies and awareness campaigns established by Member States.",
            },
            {
              label: "2030",
              title: "High-Risk Use Cases Migrated",
              text: "Critical infrastructure and high-risk use cases protected with PQC.",
            },
            {
              label: "2035",
              title: "Lower-Risk Uses Migrated",
              text: "Broad adoption across all sectors and lower-risk use systems completed.",
            },
          ],
        },
      ],
    },
    {
      id: "understanding-pqc",
      title: "Understanding Post-Quantum Cryptography",
      navLabel: "Understanding PQC",
      intro:
        "Understanding the quantum threat requires first looking at how cryptography is used today, why some algorithms are more vulnerable than others, and what post-quantum alternatives already exist.",
      blocks: [
        {
          type: "subsection",
          title: "Currently Deployed Cryptography",
          id: "currently-deployed-cryptography",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "There are two main categories: confidentiality and authentication. In symmetric cryptography, the same key is shared by sender and receiver. Block and stream ciphers provide confidentiality, while hash functions and Message Authentication Code (MAC) algorithms ensure authentication. Most real-world systems use both, achieved through authenticated encryption with a single key.",
                "As of 2025, around 90 billion devices and applications use cryptography for confidentiality and authentication. Roughly 60 billion rely on public-key cryptography (often combined with symmetric methods), while 30 billion use only symmetric-key cryptography.",
                "Public-key cryptography lets a sender encrypt a key with the recipient's public key, decrypted with the private key; or lets two users establish a shared secret by exchanging public keys. This authentication problem is addressed through digital signatures: a Certification Authority (CA) signs a user's name and public key with its private key, enabling anyone with the CA's public key to verify authenticity, shifting trust to the CA's key.",
                "The public-key algorithms used in today's protocols rely on two number-theory problems considered hard for classical computers: factoring large integers (the basis of RSA for encryption and digital signatures), and computing discrete logarithms in multiplicative groups modulo a large prime or elliptic curve groups (underpinning DSA, ECDSA, EdDSA, and the Diffie-Hellman key exchange protocol).",
                "Public-key cryptography is always combined with symmetric-key cryptography, which is two to three orders of magnitude more efficient — traditionally called \"cryptography in hybrid mode.\" The most widely used symmetric algorithms are block ciphers such as AES and 3-DES and stream ciphers such as ChaCha20 and SNOW-3G, paired with MAC algorithms for authenticated encryption (e.g. AES-GCM, ChaCha20-Poly1305). Digital signature schemes are combined with hash functions such as SHA-2 and SHA-3.",
              ],
            },
            {
              type: "table",
              caption: "Current cryptographic mechanisms, their use, quantum impact, and migration direction",
              columns: ["Mechanism", "Typical use", "Quantum impact", "Migration direction"],
              rows: [
                [
                  "Public-key encryption / key establishment (RSA, Diffie-Hellman, ECC)",
                  "TLS/SSH key exchange, data-at-rest key protection, VPNs",
                  "Broken by Shor's algorithm on a CRQC",
                  "Replace with ML-KEM or another standardized KEM, ideally in hybrid mode",
                ],
                [
                  "Digital signatures (RSA, DSA, ECDSA, EdDSA)",
                  "Code signing, secure boot, TLS authentication, e-ID, FIDO2/OpenID Connect",
                  "Broken by Shor's algorithm on a CRQC",
                  "Replace with ML-DSA, SLH-DSA, or FN-DSA, ideally in hybrid mode",
                ],
                [
                  "Symmetric encryption (AES, 3-DES, ChaCha20)",
                  "Bulk data confidentiality, authenticated encryption",
                  "Weakened by Grover's algorithm, but not broken; mitigated by larger key sizes",
                  "Move to AES-256 and equivalent parameters where not already used",
                ],
                [
                  "Hash functions and MACs (SHA-2, SHA-3)",
                  "Integrity, authentication, basis for hash-based signatures",
                  "Weakened by Grover's algorithm, but not broken at moderate cost",
                  "Confirm adequate output length and parameters",
                ],
              ],
              note: "Experts believe Grover's algorithm will not be feasible to implement for decades, so the timeline for upgrading symmetric systems is far less urgent than for public-key cryptography.",
            },
          ],
        },
        {
          type: "subsection",
          title: "Research on Post-Quantum Algorithms",
          id: "pqc-research",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The publication of Shor's algorithm in 1994 renewed interest in alternatives to number-theory-based public-key cryptography, grouped under the term post-quantum cryptography (PQC) or quantum-safe cryptography. The field grew steadily, and the first PQC conference was held in Leuven in 2006.",
                "Lattice-based cryptography relies, for encryption, on the hardness of solving large linear equations with added noise (the Learning With Errors, or LWE, problem), and for digital signatures on the hardness of the Short Integer Solutions (SIS) problem. Other families include code-based cryptography, hash-based signatures, and isogeny-based cryptography; no quantum algorithm is currently known that can efficiently solve the underlying problems of these families. Belgian researchers have played a major role in PQC development, including innovative lattice-based algorithms built on rounding.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Post-Quantum Public-Key Standards",
          id: "pqc-standards",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "NIST has finalized the first generation of post-quantum public-key standards, and the IETF has standardized two stateful hash-based signature schemes. Other schemes remain under evaluation or are favored by specific national bodies.",
              ],
            },
            {
              type: "table",
              caption: "Post-quantum public-key standards referenced in the source document",
              columns: ["Algorithm", "Full name / family", "Status per source"],
              rows: [
                ["ML-KEM", "Module-Lattice-Based Key-Encapsulation Mechanism (formerly CRYSTALS-Kyber)", "Finalized as FIPS 203, August 2024"],
                ["ML-DSA", "Module-Lattice-Based Digital Signature Algorithm (formerly CRYSTALS-Dilithium)", "Finalized as FIPS 204, August 2024"],
                ["SLH-DSA", "State-Less Hash-based Digital Signature Algorithm (formerly SPHINCS+)", "Finalized as FIPS 205, August 2024"],
                ["FN-DSA", "FFT over NTRU-Lattice-based Digital Signature Algorithm (formerly Falcon)", "Expected as FIPS 206 in 2026"],
                ["HQC-KEM", "Hamming Quasi-Cyclic Key Encapsulation Mechanism, a code-based scheme", "Expected as FIPS 207 in 2027"],
                ["XMSS", "eXtended Merkle Signature Scheme", "Published by the IETF as RFC 8391; stateful, requires careful state management"],
                ["LMS", "Leighton-Micali Hash-Based Signatures", "Published by the IETF as RFC 8554; stateful, requires careful state management"],
              ],
              note: "XMSS and LMS are more efficient than SLH-DSA but require the signer to maintain state — loss of state breaks security — making them unsuitable for replicated environments. NIST is still evaluating an alternative signature scheme with better performance. Some EU member states favor Frodo-KEM over ML-KEM, and Germany's BSI supports Classic McEliece. China, Japan, Malaysia, and Korea are also considering national PQC standards that may diverge from NIST's selections.",
            },
          ],
        },
        {
          type: "subsection",
          title: "Performance",
          id: "pqc-performance",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "With new standards emerging, many organizations ask how these algorithms compare in practice. Several companies have released libraries implementing the new standards; for research and testing, the Linux Foundation's Open Quantum Safe project is useful, though not production-ready.",
                "In terms of speed (key generation, encryption, decryption, signing, verification), ML-KEM and ML-DSA perform close to current standards, with differences largely offset by newer hardware. Legacy devices may see slowdowns, and no PQC scheme matches the extremely fast verification of RSA signatures with exponent e = 3. SLH-DSA (SPHINCS+) has efficiency issues, though limiting the number of signatures could improve performance.",
                "The main challenge is size: public keys, ciphertexts, and signatures can be three to ten times larger, or more. In some contexts — embedded devices, small packet sizes, large certificate chains — substituting PQC schemes directly may break applications. This issue is compounded when combining classical and post-quantum schemes in hybrid mode. For communications security, standards are advancing quickly, but PKI remains a bottleneck; some experts propose new architectures for distributing authenticated public keys rather than adapting the current PKI. Finally, securing implementations against physical attacks, such as side-channel or fault attacks, remains difficult, especially in embedded devices.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Cryptography in Hybrid Mode",
          id: "hybrid-mode",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Although confidence in post-quantum schemes is growing, experts agree it is too early to replace all classical algorithms outright. The preferred migration path is therefore hybrid cryptography, which combines classical and post-quantum protection. Both sender and receiver must support both algorithms.",
                "For encryption and key establishment, a key is encrypted first with a classical algorithm, then with a post-quantum algorithm, or a shared key is derived via both Diffie-Hellman and a post-quantum scheme and then combined. For digital signatures, both a classical and a post-quantum signature are generated, and the verifier must check both.",
                "The drawback of hybrid schemes is higher cost, complexity, and therefore attack surface. The benefit is greater crypto-agility: once a hybrid approach is deployed, replacing the classical algorithm with a new post-quantum one becomes easier.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "first-steps",
      title: "Taking the First Steps Towards Post-Quantum Readiness",
      navLabel: "First Steps",
      intro:
        "National agencies, industry consortia, and international bodies have published detailed guidance. While each organization's case is unique, most will follow a similar three-phase journey towards quantum-safe readiness. These phases may overlap in practice, but their sequential logic provides a valuable structure for prioritizing actions and allocating resources.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The EU Coordinated Implementation Roadmap sets phased targets: national strategies by 2026, protection of critical infrastructure and other high-risk use cases by 2030, and broad adoption across sectors by 2035. Organizations should align their plans with these milestones. Taking the first step today — even just gaining awareness of the issue and assessing exposure — can save significant effort and cost in the years ahead.",
          ],
        },
        {
          type: "roadmap",
          title: "The Three-Phase Journey to Quantum-Safe Readiness",
          items: [
            {
              label: "Phase 1",
              title: "Awareness and Assessment",
              text: "Build an organization-wide understanding of quantum computing and its impact on cybersecurity, then assess data sensitivity, lifespan, and migration effort, identify and inventory cryptographic assets, and flag vulnerabilities. Inventory and migration should overlap rather than form rigid sequential gates: a full inventory is valuable but should not delay migration, and the inventory must remain a living document as systems evolve.",
              points: [
                "Assess data by type, handling assets, confidentiality/integrity/availability value, classification, retention period, protection mechanisms, and ease of replacement.",
                "Prioritize highly sensitive, long-lived data first; data in transit relying on public-key cryptography generally carries more risk than symmetric data at rest.",
                "Build a cryptographic inventory covering algorithms, libraries, hardware, protocols, and supplier dependencies; use automated tools such as network scans, code scanning, and database checks where possible.",
                "Request cryptographic bills of materials (CBOMs) from vendors and update contracts and SLAs to require transparency on PQC support; also inventory internal collaboration tools, messaging, and shadow IT.",
                "Flag legacy and operational technology systems that cannot transition to PQC and plan for their phase-out early, since replacements can take years.",
                "Identify early wins, such as replacing already-weak classical algorithms or protocols (e.g. SHA-1, TLS 1.1), to build experience ahead of the PQC migration.",
              ],
            },
            {
              label: "Phase 2",
              title: "Planning and Strategy",
              text: "Define a clear strategy and roadmap for the transition, select the most suitable post-quantum algorithms for each priority identified in Phase 1, and assign the methodology and resources needed for execution, including whether external support is required.",
              points: [
                "Select algorithms consistent with organizational policy, drawing on the current standards; because standardization is ongoing, staying up to date is essential.",
                "Run a proof of concept on a simple use case, ideally in a test or development environment, to reveal knowledge or resource gaps and build confidence.",
                "Use public resources such as the Dutch PQC Migration Handbook for practical guidance on designing roadmaps and anticipating implementation challenges.",
              ],
            },
            {
              label: "Phase 3",
              title: "Implementation and Beyond",
              text: "Execute the migration plan using a risk-based, iterative approach, deploy standardized and tested hybrid solutions where feasible, and embed continuous monitoring, industry collaboration, and crypto-agility into ongoing operations.",
              points: [
                "Pay particular attention to operational technology and long-lived hardware, where replacement or phase-out may be required and algorithm choice must prioritize robustness.",
                "After deployment, monitor the cryptographic landscape, track standards bodies such as NIST and ETSI, and adapt to new vulnerabilities, implementation issues, or updated standards.",
                "Collaborate with industry peers, sector groups, and Belgian and European authorities to raise vendor awareness, influence roadmaps, and support interoperable solutions.",
                "Build toward crypto-agility — the ability to replace cryptographic mechanisms through configuration rather than redevelopment — through system design, procurement, change management, and policy.",
                "Identify synergies between PQC programmes and other initiatives such as NIS2, DORA, and the Cyber Resilience Act (CRA), which mandates crypto-agility for new products from December 2027, to improve efficiency and reduce duplication.",
              ],
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Governance detail for running an organization-wide PQC programme — ownership, funding, reporting, and coordination across stakeholders — is covered in Volume 2: Managing the PQC Transition. Technical detail on algorithm selection, implementation, and operational deployment is covered in Volume 3: Implementing the PQC Migration.",
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Governance and programme guidance",
              text: "Ownership, planning, responsibilities, funding, and stakeholder coordination for the PQC transition.",
              href: "/guides/managing-the-pqc-transition",
            },
            {
              title: "Technical migration guidance",
              text: "Algorithm choices, implementation considerations, interoperability, testing, and operational deployment.",
              href: "/guides/implementing-the-pqc-migration",
            },
          ],
        },
      ],
    },
    {
      id: "executive-action-plan",
      title: "Executive Action Plan",
      navLabel: "Executive Action Plan",
      intro:
        "A roadmap of what decision-makers should do, and when, together with the questions CIOs and CISOs should be ready to answer.",
      blocks: [
        {
          type: "roadmap",
          title: "Executive Roadmap: What to Do and When",
          items: [
            {
              label: "Next 6 months",
              title: "Start the groundwork",
              text: "Begin the cryptographic asset inventory and engage leadership and vendors.",
              points: [
                "Initiate a cryptographic asset inventory.",
                "Identify high-risk systems.",
                "Engage CIO/CISO on quantum readiness.",
                "Begin vendor discussions.",
              ],
            },
            {
              label: "Next 12 months",
              title: "Set strategy and pilot",
              text: "Turn awareness into a documented strategy and first pilots.",
              points: [
                "Develop a post-quantum migration strategy.",
                "Update procurement and security policies.",
                "Launch pilot projects with PQC algorithms.",
                "Begin staff awareness and training.",
              ],
            },
            {
              label: "Next 5 years",
              title: "Migrate and institutionalize",
              text: "Complete migration of critical systems and make crypto-agility standard practice.",
              points: [
                "Complete migration of critical systems.",
                "Establish crypto-agility as standard practice.",
                "Monitor the quantum threat landscape.",
              ],
            },
          ],
        },
        {
          type: "bullets",
          title: "Key Questions for CIO/CISO",
          items: [
            "What cryptographic assets are currently in use across our organization?",
            "Which systems or data are most vulnerable to \"harvest now, decrypt later\" attacks?",
            "Are our vendors and partners preparing for post-quantum cryptography?",
            "How are we ensuring crypto-agility in future system designs?",
            "What internal capabilities or external support do we need to succeed?",
          ],
        },
      ],
    },
    {
      id: "conclusion",
      title: "Conclusion",
      navLabel: "Conclusion",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Quantum computing is no longer a distant possibility — it is becoming a reality. This white paper was written to help business leaders understand the profound implications of this shift and to guide them in preparing their organizations for the post-quantum era.",
            "The threat is clear: quantum computers will eventually break the cryptographic systems that protect today's most critical systems and sensitive data. The time to act is not when quantum computers arrive, but now, while there is still time to prepare.",
            "Migration to post-quantum cryptography is not a simple software update. It requires a strategic, organization-wide effort: inventorying cryptographic assets, engaging vendors, updating contracts, and investing in crypto-agile systems. It also requires leadership — executives who understand the stakes and are willing to drive change.",
            "But this is more than a defensive move. Organizations that lead on quantum readiness will not only protect their data and operations — they will build trust with customers, partners, and regulators. They will show resilience, foresight, and a commitment to security that sets them apart.",
            "Preparing for the quantum era is not only about mitigating risk — it is also about seizing opportunity. A secure organization is a confident one, ready to innovate and grow in a digital world that is changing faster than ever. The future belongs to those who act today.",
          ],
        },
        {
          type: "callout",
          variant: "important",
          title: "Quantum resilience is a leadership challenge, not just a technical one",
          paragraphs: [
            "What you need to know: migration to PQC is complex and requires strategic planning, vendor coordination, and leadership. Early action builds trust with customers, regulators, and partners. Quantum readiness is a competitive advantage that enables innovation and resilience. The time to act is now — waiting increases exposure and cost.",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "This volume has introduced the quantum threat, explained post-quantum cryptography, and outlined the first steps toward readiness for decision-makers. Volume 2, Managing the PQC Transition, builds on this foundation with governance, planning, responsibilities, funding considerations, and coordination across stakeholders for organizations beginning their PQC programme.",
          ],
        },
      ],
    },
    {
      id: "glossary",
      title: "Glossary of Acronyms",
      navLabel: "Glossary",
      blocks: [
        {
          type: "table",
          caption: "Acronyms used in this guide",
          columns: ["Acronym", "Meaning"],
          rows: [
            ["3-DES", "Triple Data Encryption Algorithm"],
            ["AES", "Advanced Encryption Standard"],
            ["AES-GCM", "Advanced Encryption Standard with Galois/Counter Mode"],
            ["BSI", "Bundesamt für Sicherheit in der Informationstechnik"],
            ["CA", "Certification Authority"],
            ["CBOM", "Cryptographic Bill of Materials"],
            ["CIO", "Chief Information Officer"],
            ["CISO", "Chief Information Security Officer"],
            ["CRA", "Cyber Resilience Act"],
            ["CRQC", "Cryptographically relevant quantum computer"],
            ["DORA", "Digital Operational Resilience Act"],
            ["DSA", "Digital Signature Algorithm"],
            ["ECC", "Elliptic Curve Cryptography"],
            ["ECDSA", "Elliptic Curve Digital Signature Algorithm"],
            ["EdDSA", "Edwards-curve Digital Signature Algorithm"],
            ["FIDO2", "Fast IDentity Online 2"],
            ["FIPS", "Federal Information Processing Standards"],
            ["FN-DSA", "Fast Fourier Transform over NTRU-Lattice-Based Digital Signature Algorithm"],
            ["HQC-KEM", "Hamming Quasi-Cyclic Key Encapsulation Mechanism"],
            ["IETF", "Internet Engineering Task Force"],
            ["KEM", "Key Encapsulation Method"],
            ["LMS", "Leighton-Micali Hash-Based Signatures"],
            ["LWE", "Learning With Errors"],
            ["MAC", "Message Authentication Code"],
            ["ML-DSA", "Module-Lattice-Based Digital Signature Algorithm"],
            ["ML-KEM", "Module-Lattice-Based Key-Encapsulation Mechanism"],
            ["NIS2", "Network and Information Systems Directive 2"],
            ["NIST", "National Institute of Standards and Technology"],
            ["OT", "Operational Technology"],
            ["PKI", "Public Key Infrastructure"],
            ["PQC", "Post-Quantum Cryptography"],
            ["RSA", "Rivest-Shamir-Adleman"],
            ["SIS", "Short Integer Solutions"],
            ["SLH-DSA", "State-Less Hash-based Digital Signature Algorithm"],
            ["TLS", "Transport Layer Security"],
            ["XMSS", "eXtended Merkle Signature Scheme"],
          ],
        },
      ],
    },
  ],
  references: [
    {
      title: "Preparing for the Quantum Era, Volume 1: Updated Strategic Guidance",
      publisher: "Belgian Cyber Security Coalition, Quantum Circle, Centre for Cybersecurity Belgium",
      url: "https://cybersecuritycoalition.be/resource/white-paper-preparing-for-the-quantum-era",
    },
    {
      title: "The PQC Migration Handbook",
      publisher: "Algemene Inlichtingen- en Veiligheidsdienst (AIVD)",
      url: "https://english.aivd.nl/documents/2024/12/3/the-pqc-migration-handbook",
    },
    {
      title: "Coordinated Implementation Roadmap for the Transition to Post-Quantum Cryptography (PQC)",
      publisher: "European Commission, Digital Strategy",
      url: "https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography",
    },
    {
      title: "Open Quantum Safe project",
      publisher: "Linux Foundation",
      url: "https://openquantumsafe.org",
    },
    {
      title: "IEEE Xplore document referenced for cryptography in hybrid mode",
      publisher: "IEEE",
      url: "https://ieeexplore.ieee.org/document/8490169",
    },
  ],
};
