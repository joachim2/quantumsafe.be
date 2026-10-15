// Volume 3: Implementing the PQC Migration — draft v0.7 technical guide.
// Reader-facing content only; unresolved editorial material lives in
// volume3ReviewRegister.ts, not here.
import type { GuideContent } from "./types";

export const volume3: GuideContent = {
  id: "volume-3",
  purpose:
    "Technical and migration guidance for engineers, developers, architects, platform owners, PKI and HSM teams, and IT operations implementing a PQC migration.",
  sections: [
    {
      id: "draft-status",
      title: "Draft status and scope",
      navLabel: "Draft status",
      blocks: [
        {
          type: "callout",
          variant: "draft",
          title: "Draft - ready for review, version 0.7",
          paragraphs: [
            "This volume is version 0.7 of the draft, marked \"ready for review.\" Unresolved editorial material from the source document — reviewer comments, placeholder items, and unconfirmed cross-references — has been separated from the guidance below and tracked in an internal editorial review register rather than presented as settled advice.",
            "Where the source labels content as still under industry debate or standardization, this guide carries that qualification forward rather than presenting it as resolved.",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "This volume provides technical guidance on post-quantum cryptography and PQC migrations, including algorithm choices, implementation considerations, interoperability, testing, and operational deployment. Its target audience is engineers, developers, and IT architecture and operations teams.",
            "The three-volume series moves from awareness and decision-making (Volume 1) to governance, planning, and investment (Volume 2) to technical implementation (this volume). Volume 1 answers why the organization must act; Volume 2 answers how the transition should be governed, funded, prioritized, and coordinated; this volume answers how systems, protocols, platforms, PKI, testing, and operations should be migrated.",
            "This document concentrates on approaches, tools, and techniques that can be used now and do not depend on future developments. Many of the recommendations are effectively workaround solutions to issues that will take organizations considerable time to resolve, such as the unavailability of PQC-enabled products, long product upgrade cycles, and limited experience operating PQC in mature production environments.",
          ],
        },
      ],
    },
    {
      id: "recommendations",
      title: "Twelve implementation recommendations",
      navLabel: "Recommendations",
      intro:
        "These recommendations summarize the practical guidance developed across the rest of this volume.",
      blocks: [
        {
          type: "cards",
          columns: 3,
          items: [
            {
              label: "R1",
              title: "Account for TNFL, not only HNDL",
              text: "Adapt current PQC risk analysis and implementation plans to take account of the trust-now, forge-later (TNFL) threat, alongside the harvest-now, decrypt-later (HNDL) threat.",
              href: "#foundations",
            },
            {
              label: "R2",
              title: "Don't let agility delay migration",
              text: "Adopt crypto-agility measures wherever possible, but do not necessarily prioritize crypto-agility over actual migration opportunities: agility is an efficiency mechanism, while migration delivers risk reduction on challenging timescales.",
              href: "#foundations",
            },
            {
              label: "R3",
              title: "Inventory and migrate in parallel",
              text: "Continue building cryptographic inventories, but not at the expense of carrying out actual migrations. These activities are not sequential and can be performed in parallel.",
              href: "#foundations",
            },
            {
              label: "R4",
              title: "Prioritize with more than the crypto inventory",
              text: "Drive migration priorities from application functionality, the data being processed, and the cryptographic implementation together. Use all relevant inventories; do not over-rely on the cryptographic inventory alone.",
              href: "#inventory",
            },
            {
              label: "R5",
              title: "Split TLS key exchange from certificate authentication",
              text: "Give serious consideration to prioritizing migration of applications using TLS. Migrate the key exchange mechanism first and defer certificate migration (authentication) to a second step.",
              href: "#application-guidance",
            },
            {
              label: "R6",
              title: "Use local proxies under control",
              text: "Where applications or infrastructure cannot be immediately migrated, consider a local proxy (operating over the loopback address) to provide TLS 1.3 and PQC functionality as an intermediate step.",
              href: "#application-guidance",
            },
            {
              label: "R7",
              title: "Adopt hybrid approaches",
              text: "Adopt hybrid approaches to PQC to mitigate the risk of either the classical or the PQC implementation being broken.",
              href: "#application-guidance",
            },
            {
              label: "R8",
              title: "Verify HSM certification status",
              text: "Verify the certification status of PQC-enabled Hardware Security Modules (HSMs) to ensure their use is compatible with legal and regulatory requirements, such as eIDAS.",
              href: "#application-guidance",
            },
            {
              label: "R9",
              title: "Increase crypto-agility where practical",
              text: "Identify opportunities to increase crypto-agility — such as a high-level cryptographic service-provider interface for applications and centralized certificate and key lifecycle management — and plan for their implementation.",
              href: "#crypto-agility",
            },
            {
              label: "R10",
              title: "Invest in internal skills",
              text: "Define a recruitment and retention approach that recognizes PQC migration skills are currently in short supply. Internal development of staff should be strongly considered as part of this approach.",
              href: "#application-guidance",
            },
            {
              label: "R11",
              title: "Consider infrastructure in the first wave",
              text: "Consider migrating core infrastructure in a first migration wave, since cryptography is often implemented in infrastructure components whose use is mutualized across many applications.",
              href: "#testing-and-operations",
            },
            {
              label: "R12",
              title: "Reuse existing discovery tools first",
              text: "Leverage existing tools within the environment wherever possible for cryptographic discovery. Where gaps remain, consider acquiring an automated cryptographic discovery tool.",
              href: "#inventory",
            },
          ],
        },
      ],
    },
    {
      id: "foundations",
      title: "Broader risk and architecture foundations",
      navLabel: "Foundations",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The transition to post-quantum cryptography is often perceived as a cryptographic upgrade or algorithm replacement. In reality, it represents a broader cyber risk and resilience challenge affecting technology, processes, suppliers, and governance. Organizations should treat PQC migration as part of enterprise risk management and integrate it with existing vulnerability management, threat intelligence, supply chain security, and operational resilience programs.",
            "Compliance deadlines are typically based on current assessments of when a cryptographically relevant quantum computer could pose a practical threat to widely deployed public-key cryptography. These assessments are inherently uncertain: future breakthroughs could accelerate timelines, while implementation and migration challenges may require longer preparation than expected. Organizations should view regulatory deadlines as minimum planning assumptions rather than optimal targets, and may choose more ambitious timelines based on data sensitivity, system lifecycles, supplier dependency, and HNDL exposure. Performing a risk assessment today is already relevant.",
            "As organizations progressively adopt PQC, they must also manage a hybrid cryptographic environment in which classical and quantum-resistant algorithms coexist for an extended period. This transitional state expands the attack surface through potential implementation bugs, coexistence risks, and integration weaknesses at the boundaries between legacy and quantum-safe systems.",
          ],
        },
        {
          type: "subsection",
          title: "HNDL and TNFL",
          id: "hndl-tnfl",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Advice to PQC migration teams has mainly been anchored in a \"harvest now, decrypt later\" (HNDL) framing: an adversary records encrypted traffic today and decrypts it once a cryptographically relevant quantum computer (CRQC) exists. HNDL remains real, particularly for data with long confidentiality requirements, and hybrid TLS key exchange is the correct near-term response to it.",
                "HNDL is no longer the only lens worth equal weight. A second threat pattern, \"trust now, forge later\" (TNFL), deserves at least as much attention: once a CRQC exists, an adversary can forge signatures or certificates in real time. Unlike HNDL, TNFL needs no advance collection — the adversary simply needs the capability to exist when they choose to impersonate an endpoint, forge a code-signing signature, or issue a fraudulent certificate. This shifts the highest-risk assets toward signing infrastructure: certificate authorities, code-signing keys, firmware and secure-boot authentication, and document and timestamp signing.",
                "The two threats behave differently depending on how a signature is used. Interactive, ephemeral signatures (such as a TLS handshake or login exchange) have little value to an attacker once the session ends; the relevant question is whether migration completes before quantum capability arrives. Signatures that must remain verifiable for years — code signing, long-term-validity (LTV) document signatures, and archival records — are different: their integrity typically depends on trusted timestamps, and a timestamp only protects a record for as long as the timestamp itself is unforgeable. Where existing long-term-validity records rely on classically signed timestamps, organizations will eventually need to renew that protection with a post-quantum-signed timestamp before a CRQC arrives, or the records lose their evidentiary value retroactively. How large that backlog is, and how realistic re-timestamping at scale is within the available time, is an open operational question that most organizations have not yet scoped.",
                "Google, Cloudflare, and Microsoft have all published 2029 as an internal target for post-quantum migration. 2029 is a plausible date for cloud-scale, software-upgradeable infrastructure such as key exchange, but considerably less plausible for full certificate-authentication migration across a typical enterprise, given where HSM certification, CA/Browser Forum requirements, and IETF signature standardization currently stand. This guide treats 2029 as a target worth tracking, not a deadline most organizations should necessarily plan around meeting in full.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Crypto-agility as architectural capability, not a reason to wait",
          id: "agility-foundation",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The appropriate framing for PQC work at the platform and application layer is not \"deploy post-quantum cryptography\" as a discrete project milestone, but \"ensure systems are architecturally capable of evolving their cryptographic mechanisms without structural redesign.\" A platform that can update its key exchange algorithms, cipher suites, and certificate configurations through configuration and library updates — without application code changes — is in a fundamentally better position than one optimized around a specific algorithm set.",
                "Crypto-agility, however, is a means, not the goal. For systems facing a hard migration deadline, a successful, on-time migration to PQC takes priority over building perfect agility first. The hybrid TLS case study later in this guide illustrates both sides of this trade-off: agility work done in advance made rapid migration possible, but that work did not need to be exhaustive before migration itself could begin. The proxy and wrapper approach described in application guidance is a concrete example of the same trade-off: a host-bound proxy is not itself agile, but it is often the fastest way to bring an older or unmigratable system under protection while a more architecturally sound fix is developed.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Dependencies and parallel inventory/migration",
          id: "dependencies-parallel",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "A consistent finding across PQC assessments is that TLS endpoints represent only a fraction of an organization's total cryptographic surface. Cryptography is embedded in service meshes, identity systems, internal APIs, SDKs, messaging infrastructure, and third-party dependencies, often without explicit visibility at the platform layer. Devices such as printers and IoT cameras often embed cryptographic implementations as well.",
                "Algorithm-level detail — which specific key size or curve a given asymmetric implementation uses — is lower-value than earlier guidance assumed: if a CRQC is expected to break RSA, ECC, and comparable schemes regardless of key size, cataloguing the exact key size adds little to migration prioritization. What matters far more is which applications and services depend on that cryptography for authentication or trust, what signs what, and where cryptographic material is baked in at manufacture time with no update path. Application- and service-level inventory — not algorithm-level scoring — is the critical output, and a Cryptographic Bill of Materials (CBOM) should be built with that emphasis: mapping dependency chains and trust relationships rather than scoring individual algorithms.",
                "Do not wait for a complete inventory before starting to migrate. A structured but imperfect view of the highest-risk, internet-facing, or longest-lived systems is enough to start the first migration wave. Inventory and migration should run in parallel and inform each other, rather than treating a finished inventory as a gate that must close before implementation begins.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "application-guidance",
      title: "Application and platform-owner guidance",
      navLabel: "Application guidance",
      blocks: [
        {
          type: "table",
          caption: "TLS migration workstreams",
          columns: ["Workstream", "Threat", "Implementation focus", "Required evidence"],
          rows: [
            [
              "Key exchange",
              "HNDL",
              "Supported hybrid key establishment, such as X25519 plus ML-KEM profiles.",
              "Negotiated group, fallback rates, client coverage, performance, and errors.",
            ],
            [
              "Certificate authentication",
              "TNFL",
              "PQC or hybrid signatures, PKI transition, certificate automation, HSM and client support.",
              "Validated chain, signature, trust path, revocation, size, and compatibility.",
            ],
          ],
          note: "Treat key exchange and certificate authentication as separate migration workstreams with different urgency and timelines, not a single \"PQC for TLS\" project with authentication as an afterthought.",
        },
        {
          type: "prose",
          paragraphs: [
            "TLS is the most mature and operationally relevant entry point for PQC adoption. It benefits from active IETF standardization, and its TLS 1.3 negotiation model lets client and server agree on the strongest mutually supported algorithm suite, enabling gradual deployment and safe fallback to classical cryptography.",
            "Key exchange protects session confidentiality and is the direct countermeasure to HNDL. Current hybrid TLS deployments — combining X25519 with ML-KEM-768 in constructions such as X25519MLKEM768 — address this workstream and are deployable today at production scale.",
            "Certificate signing algorithms (ECDSA P-256, RSA) remain classical in essentially all current deployments. A quantum-capable adversary could, in principle, forge certificates once sufficient quantum capability exists, regardless of whether the session's key exchange is post-quantum protected — this is the TNFL threat. The path toward post-quantum certificate authentication (ML-DSA or equivalent signatures integrated into CA/Browser Forum baseline requirements) is well-defined in ongoing standardization work but is not yet available at production scale. Hybrid TLS key exchange is the right, deployable-now response to HNDL, but it should not be reported as \"PQC for TLS is done\" — certificate authentication is the workstream where the ecosystem is furthest behind.",
            "A practical obstacle to deploying ML-DSA in certificate chains is message size: an ML-DSA-65 signature is approximately 3.3 KB compared to roughly 70 bytes for ECDSA P-256; a typical three-certificate chain using ML-DSA signatures could add on the order of 15–25 KB to a TLS handshake. This amplifies handshake cost on mobile networks and creates fragmentation issues with QUIC. Merkle Tree Certificates (MTC), being standardized by the IETF PLANTS working group, address this by having the server transmit only a compact Merkle inclusion proof of a few hundred bytes rather than a full certificate chain. Chrome and Cloudflare are actively experimenting with MTC, and Let's Encrypt has publicly discussed staged experimentation and future readiness goals. Platform owners planning certificate infrastructure should treat MTC as an emerging near-term consideration. Certificate formats are not converging on a single standard: X.509 will likely need to support several PQC signature formats simultaneously, and MTC is being shaped around the public WebPKI's certificate-transparency infrastructure, which may not transfer cleanly to private or enterprise PKI. Organizations building internal certificate automation now should avoid a hard dependency on a single PQC certificate format.",
            "An accelerating reduction in TLS certificate validity periods adds further pressure: the CA/Browser Forum has committed to a staged reduction, with a 200-day maximum effective March 2026, reducing to 100 days by March 2027, and 47 days by March 2029. This increases the operational load on certificate issuance, rotation automation, and monitoring, and the patterns established for short-lived classical certificates will form the foundation on which post-quantum certificate rotation will eventually run.",
          ],
        },
        {
          type: "subsection",
          title: "Legacy proxies and wrappers",
          id: "proxies-wrappers",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "In many cases, organizations will not be able to migrate directly to PQC-enabled versions of core products — for example, due to the need to progress through intermediate versions or organizational policies on software rollout. In such cases, consider proxies or wrappers (for example, stunnel or Nginx in proxy mode) that run on the connection-termination devices themselves, avoiding exposed network segments. These typically also offer TLS 1.3, which older software might not support, and this approach can also be used when there is no product to migrate to. It is particularly relevant for systems running on older operating systems that cannot support modern TLS stacks directly.",
                "This approach sacrifices architectural agility — the proxy is a fixed, host-bound point solution rather than a configurable abstraction — but under a hard deadline, early, non-agile protection is preferable to a later, fully agile one. Controlled trust boundaries, visibility into both sides of the proxy, documented rollback, and a retained native-migration plan are required for this to be a sound interim step.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Hybrid versus pure PQC",
          id: "hybrid-vs-pure",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Hybrid approaches remain the recommendation across TLS workstreams, including for signatures, though for signatures this should not be considered settled: there is ongoing industry debate regarding hybrid versus pure PQC signatures, and future standards and best practices may evolve accordingly.",
                "Hybrid protects against both classical and quantum adversaries simultaneously, is deployable without waiting for full ecosystem support, and avoids a hard dependency on any single, still-maturing PQC approach. This applies to key exchange, where hybrid is already the practical default, and to signatures, even though pure PQC signature schemes are being discussed for parts of the WebPKI specifically to reduce handshake overhead. A move to pure PQC should be treated as something to revisit as the ecosystem matures, not as the current recommendation.",
                "Choosing hybrid now does not mean deferring the work a later move to pure PQC will require. Organizations that implement hybrid through a configurable abstraction — algorithm choice exposed as configuration rather than hardcoded into application logic — put themselves in a position to drop the classical component later with a configuration change rather than a redesign. As with any cryptographic negotiation, deploying hybrid is not the same as confirming it is in effect: negotiated parameters must be verified rather than assumed from configuration.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "HSM and assurance",
          id: "hsm-assurance",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Upgrading an HSM to support PQC algorithms can invalidate its existing FIPS 140-2/3 validation or Common Criteria certification, requiring formal revalidation before it can be used in the same regulated contexts. FIPS 140 and Common Criteria are two separate certification schemes, and the distinction matters for planning: FIPS 140 is a US/NIST-run scheme relevant to US federal and some commercial procurement, while eIDAS Qualified Signature Creation Device (QSCD) status — the certification that actually governs whether an HSM can hold keys for eIDAS Qualified Certificates — is assessed under Common Criteria against EU protection profiles (for example EN 419 221-5, EN 419 241-2), not FIPS. An HSM can be fully FIPS-validated for PQC and still not be usable for qualified signatures until it separately holds PQC-capable Common Criteria/eIDAS certification, or vice versa.",
                "Availability is genuinely uneven rather than uniformly distant: some vendors already ship PQC-capable HSMs with FIPS 140-3 validation, and Common Criteria certification for PQC-enabled hardware is actively underway at leading vendors. Treat \"certified hardware isn't available yet\" as a claim to verify per vendor and per certification scheme, not as a fixed industry-wide constraint.",
                "Do not describe an HSM as \"PQC certified\" without identifying the relevant product, version, algorithm scope, assurance scheme, and certificate status. Procurement should explicitly ask vendors which certifications (FIPS, Common Criteria/eIDAS, or both) their PQC-capable hardware currently holds or has scheduled, and should require a credible upgrade path that avoids an unplanned re-certification cycle on either scheme. Request evidence on algorithms, firmware, certificates, partitions, backup/recovery, migration, evaluation schedules, and re-certification impact. Organizations relying on QSCD-certified hardware for qualified signatures should track Common Criteria/eIDAS certification status specifically, since FIPS status alone does not indicate eIDAS readiness; where PQC-capable, eIDAS-certified hardware is not yet available for a given use case, planning for parallel infrastructure — currently certified HSMs for qualified signatures alongside a separate PQC-capable path for other signing needs — remains the sensible interim position.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Performance",
          id: "performance",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The performance implications of post-quantum cryptography are concentrated primarily in connection establishment rather than steady-state application traffic. Hybrid key exchange introduces additional computational overhead and larger handshake messages, resulting in higher latency during session initiation under certain conditions. Once a secure connection is established, application-level throughput remains effectively unchanged, since bulk encryption is independent of the key exchange mechanism, and network latency often dominates end-to-end connection setup times.",
                "Performance considerations are most relevant in systems with high connection churn, short-lived sessions, or frequent re-establishment of secure channels, where the cumulative cost of repeated handshakes can become measurable. Session resumption mitigates much of this overhead, but resumed sessions generally reuse previously established session state rather than performing a fresh post-quantum key exchange on every reconnection — a trade-off between performance and the frequency of new post-quantum key establishment that may matter for environments with strict long-term confidentiality requirements. Before any production rollout, hybrid TLS configurations should be validated against production-representative traffic, covering both modern and legacy client populations, to confirm compatibility and establish an observability baseline.",
                "Relevant measurements include handshake latency, CPU, memory, packetization, certificate and signature size, throughput, resumption, and connection churn.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Interoperability",
          id: "interoperability",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The broader cryptographic ecosystem has reached a level of maturity where post-quantum and hybrid TLS deployment is no longer experimental, but support remains uneven across environments. Enterprise systems, legacy runtimes, and older cryptographic providers may not yet support hybrid mechanisms and will silently revert to classical cryptography without an explicit failure condition. This behavior is by design within TLS negotiation, but it introduces variability in the actual level of post-quantum protection achieved across heterogeneous client bases. Post-quantum adoption at the transport layer should therefore be understood as a gradual coverage expansion rather than an instantaneous state change; the most meaningful metric is the observed proportion of connections that successfully negotiate post-quantum or hybrid key exchange over time.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Observability",
          id: "observability",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "A recurring operational challenge in early post-quantum deployments is the absence of reliable visibility into whether hybrid key exchange is actually being used in production traffic. Because fallback to classical cryptography is both silent and protocol-compliant, successful connectivity alone does not provide evidence of post-quantum protection; intermediate TLS-terminating systems without hybrid support can unintentionally downgrade traffic without any explicit indication at the application level.",
                "Organizations need explicit telemetry on negotiated cryptographic parameters to distinguish classical from hybrid-protected sessions at scale. Cryptographic algorithm use can currently be verified with standard network tools such as Wireshark or tcpdump, though this is a low-level check requiring significant expertise. Without this visibility, it is impossible to accurately assess the extent of post-quantum adoption in production or to detect unintended fallback caused by infrastructure intermediaries. Observability should be treated as a core, first-order capability of any post-quantum deployment strategy — capturing negotiated groups, algorithms, certificate chains, fallback, unsupported clients, errors, exceptions, and residual classical-only paths — rather than relying on configuration state alone.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Skills",
          id: "skills",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "PQC migration requires expertise across applied cryptography, network protocols, PKI operations, and infrastructure security that is not widely distributed across engineering organizations. The gap is structural: the number of practitioners with production-grade experience across all of these domains is small and will remain a constraint throughout the migration period. Internal capability building — through training, mentorship, and deliberate exposure of engineers to cryptographic decision-making — is not optional; organizations should not treat external supply as a substitute for internal development.",
                "Decisions made under time pressure by teams without deep expertise in cryptography represent a significant risk vector. Deploying hybrid TLS from a well-maintained library is low-risk; making compositional decisions about how to combine primitives, design key derivation schemes, or extend hybrid patterns to nonstandard protocols without specialist input is not. Mapping where cryptographic expertise is genuinely required, versus where following well-defined library interfaces is sufficient, is itself a useful risk management exercise.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Shared infrastructure",
          id: "shared-infrastructure",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "For architectures with many downstream applications behind shared components — reverse proxies, TLS-terminating load balancers, API gateways — migrating at that infrastructure layer can cover many applications in a single step, without requiring every application team to change anything. This is particularly relevant to certificate authentication: a reverse proxy that enforces PQ-safe certificate validation protects everything behind it immediately. The trade-off is visibility: infrastructure-layer migration can mask applications that still use classical cryptography for internal, service-to-service communication behind that layer, so it should complement, not replace, inventory work. An edge upgrade is not the same as end-to-end completion.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "inventory",
      title: "Cryptographic inventory",
      navLabel: "Inventory",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A cryptographic inventory is a necessity for organizations supporting the transition to PQC. It provides visibility into cryptographic assets, their usage, and operational context, enabling informed decision-making and risk-driven prioritization. This inventory is only part of a bigger picture: many factors relevant to migration prioritization — such as data criticality, regulatory requirements, and system dependencies — are found in other inventories, not the cryptographic inventory alone.",
            "A cryptographic inventory also supports broader vulnerability management, compliance objectives (for example DORA), and crypto-agility. An accurate asset inventory is a prerequisite for an accurate cryptographic inventory: blind spots at the asset level risk missing related cryptographic assets, and a good asset inventory helps prioritize cryptographic discovery toward the most critical assets.",
            "A complete cryptographic inventory is not required to start planning migration for the most critical components; it is recommended to start migrating critical systems as soon as possible. There is also a compelling case for migrating shared infrastructure as a first step, since it benefits many applications simultaneously and will be required anyway for individual-application migration.",
          ],
        },
        {
          type: "table",
          caption: "Cryptographic inventory layers, evidence sources, and typical gaps",
          columns: ["Layer", "Evidence sources", "Typical gaps"],
          rows: [
            [
              "Network and transport",
              "Scanners, proxy and load-balancer configuration, packet analysis, certificate telemetry.",
              "Silent fallback, internal service-to-service traffic, unmanaged endpoints.",
            ],
            [
              "Applications and source",
              "Code scanning, manifests, SBOM/CBOM, runtime tracing, architecture review.",
              "Dynamic loading, custom wrappers, proprietary libraries, embedded secrets.",
            ],
            [
              "Platforms and cloud",
              "Configuration APIs, KMS/HSM inventory, service mesh, identity and certificate systems.",
              "Managed-service internals and provider roadmap dependencies.",
            ],
            [
              "Devices and OT",
              "Asset records, firmware analysis, vendor surveys, maintenance records.",
              "Non-upgradeable bootloaders, long refresh cycles, inaccessible networks.",
            ],
            [
              "Third parties and SaaS",
              "Contracts, questionnaires, roadmap evidence, attestations.",
              "Unknown cryptography, shared upstream components, uncertain roadmaps.",
            ],
          ],
        },
        {
          type: "bullets",
          title: "Building and maintaining the inventory",
          items: [
            "Begin with systematic, automated discovery extending across applications (custom-built, commercial off-the-shelf, or SaaS), infrastructure (servers, containers, cloud resources), endpoints, mobile devices, network appliances, and third-party integrations or APIs.",
            "Reuse existing scanning and assessment capabilities first — vulnerability management platforms often already detect cryptographic configurations — and add specialized discovery tooling only where material gaps remain (R12).",
            "Develop a coverage matrix mapping detection capabilities to asset types and environments, identifying which in-house tools can detect which cryptographic elements and where gaps exist, to support informed prioritization.",
            "Normalize evidence to stable asset or service identifiers and connect it to ownership and business context (for example IP address, related application or process, data sensitivity, exposure level).",
            "Assign clear ownership: owners should be responsible for designing, planning, and implementing the transition for their assets.",
            "Record evidence source, observation date, confidence, exposure, lifecycle, supplier control, and next action, since an asset may carry several cryptographic issues with different risk estimations and mitigation timelines.",
            "Maintain the inventory continuously; cryptographic environments change frequently as applications, infrastructure, and dependencies evolve.",
            "Protect the inventory itself, since it maps sensitive trust relationships and weaknesses across the organization.",
          ],
        },
      ],
    },
    {
      id: "crypto-agility",
      title: "Crypto-agility in architecture and operations",
      navLabel: "Crypto-agility",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A PQC migration does not require crypto-agility, but crypto-agility makes it easier. Crypto-agility is the capability to quickly move from one cryptographic mechanism to another — for example, from RSA-2048 to RSA-4096, or from RSA-2048 to ML-KEM-512 — with minimal effort, ideally through a single configuration change across an entire infrastructure component.",
            "The current migration isn't the first and likely won't be the last: as cryptanalysis evolves, cryptographic changes are likely to become more frequent. Past migrations show they require substantial time and money, so the ability to migrate quickly pays off over the long term and improves organizational resilience when new vulnerabilities are found in a given algorithm.",
            "Crypto-agility depends heavily on the asset and cryptographic inventory: migration to a new configuration is not possible when the asset is not identified, and the inventory must be kept current so algorithm swaps apply to the latest assets. The crypto-agility implementation timeline can differ by asset criticality — critical systems may be made crypto-agile after the PQC migration itself, while less critical systems with more available time can build in crypto-agility from the start.",
            "In environments with limited performance, latency, memory, and interoperability constraints, transitioning to new algorithms can be relatively straightforward where appropriate abstraction layers exist. The situation is markedly more difficult in constrained, highly distributed, or long-lived cryptographic ecosystems — embedded and IoT devices, PKIs, HSMs, smart cards, industrial control systems, and archival signing systems — where migration can require protocol revisions to accommodate larger keys or signatures, additional hardware memory or computation, PKI redesign for larger certificate formats, and large-scale re-signing combined with quantum-resistant timestamping. As a result, crypto-agility should be viewed as a strategic architectural capability rather than merely the ability to substitute one algorithm for another.",
          ],
        },
        {
          type: "bullets",
          title: "Design practices for crypto-agility",
          items: [
            "Use stable interfaces for key establishment, encryption, signing, and verification rather than hardcoded algorithms, libraries, or providers in application code.",
            "Prefer provider/plugin patterns with dynamic linking, so cryptographic implementations can be replaced, upgraded, or reconfigured independently of the application.",
            "Externalize cryptographic policy, algorithm selection, certificate profiles, and trust stores into centrally managed, policy-driven controls rather than embedding them in application logic.",
            "Version formats and metadata so stored content can be identified, rewrapped, re-encrypted, re-signed, or re-timestamped later.",
            "Maintain compatibility tests, rollback, telemetry, and secure update paths, and avoid manual, disruptive update processes such as system-wide patching or reinstallation for cryptographic changes.",
          ],
        },
        {
          type: "callout",
          variant: "implementation",
          title: "Agility is desirable, but not the priority under a hard deadline",
          paragraphs: [
            "As timelines compress for critical applications and systems, a successful, on-time migration to PQC is more important than being fully crypto-agile first. Crypto-agility can be implemented afterward, once the main threat is addressed. For less critical applications and systems with longer timelines, crypto-agility can be built in as part of the migration effort itself.",
          ],
        },
      ],
    },
    {
      id: "technical-challenges",
      title: "Technical challenges",
      navLabel: "Technical challenges",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A great deal of attention has gone to the harvest-now, decrypt-later threat. A more fundamental threat once a cryptographically relevant quantum computer exists concerns authentication: classical cryptographic signatures generated after that point can no longer be trusted. Because migration takes time — especially where it involves managing long-term keys and certificates, not just upgrading algorithms — the time to act is sooner rather than later. There is still debate on which signature scheme to use, whether to use hybrid mode, and on the PKI architecture around it.",
          ],
        },
        {
          type: "subsection",
          title: "Signature families",
          id: "signature-families",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The current best practice for post-quantum signatures is to use lattice-based signatures (ML-DSA) for most applications and hash-based signatures (SLH-DSA) for specific use cases such as those needing long-term validity. ML-DSA is standardized by NIST as FIPS 204 and SLH-DSA as FIPS 205 (with fast and small variants). NIST has also defined an additional SLH-DSA parameter set for limited-signature use cases (up to 224 signatures) in SP 800-230, still an initial public draft at the time of writing.",
              ],
            },
            {
              type: "table",
              caption: "Signature family strengths and constraints",
              columns: ["Family", "Strengths", "Constraints"],
              rows: [
                [
                  "ML-DSA",
                  "Standardized (FIPS 204); strong performance for many uses; currently the primary choice for TLS.",
                  "Larger artifacts than ECC; implementation and side-channel considerations.",
                ],
                [
                  "SLH-DSA",
                  "Conservative hash-based assumptions; standardized (FIPS 205); small public keys.",
                  "Large signatures and lower performance; slower key generation and verification.",
                ],
                [
                  "FN-DSA",
                  "Compact lattice-based signatures and public keys.",
                  "Implementation complexity, computationally heavy key generation, and hardware constraints from floating-point arithmetic.",
                ],
                [
                  "LMS / XMSS",
                  "Useful for selected bounded-signature workflows, such as firmware updates or code signing.",
                  "Strict state management; signature reuse can be catastrophic.",
                ],
                [
                  "Other candidates",
                  "Algorithm diversity and specialized goals; examples include code-based (Classical McEliece/CFS), multivariate (UOV, MAYO), and isogeny-based (SQIsign) candidates.",
                  "Different maturity, size, performance, and standardization status; for example, code-based public keys can reach 250 KB–1 MB, and isogeny-based trust was affected by the 2022 break of the related SIKE key-exchange scheme.",
                ],
              ],
              note: "There are more signature families under active research, so as not to depend solely on lattice-based cryptography if it were ever found vulnerable.",
            },
          ],
        },
        {
          type: "subsection",
          title: "PKI",
          id: "pki-patterns",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "PKI use cases are wide-spread. A typical TLS handshake on the public web transmits two public keys and five signatures to establish a secure, authenticated HTTPS connection; with post-quantum key and signature sizes significantly larger than today's, this could amount to 15–25 KB of overhead for ML-DSA-65, compared to 300–500 bytes for elliptic curve cryptography. Browsers are currently exploring Merkle Tree Certificates (MTC) as a new architecture for public server authentication certificates, with pilot projects expected in the coming year; MTC PKIs will likely only be used by publicly trusted external CAs (WebPKI), and internal PKI environments will most likely not adopt this approach.",
                "S/MIME certificates for securing email are another PKI use case: the use of both ML-DSA and ML-KEM has been added to the CA/Browser Forum Baseline Requirements for S/MIME, while for code-signing certificates discussion is ongoing with no formal decisions yet. Qualified certificates (QWAC, QSign, QSeal) issued by Qualified Trust Service Providers should also be considered; as elsewhere, these signatures are only valid as long as the associated timestamp can be validated, and are expected to need reconsideration in the future to guarantee timestamp integrity.",
                "To support hybrid certificates within a PKI architecture, several design patterns are being considered; the industry has not settled on a best practice or model.",
              ],
            },
            {
              type: "table",
              caption: "PKI patterns for introducing PQC",
              columns: ["PKI pattern", "Benefits", "Trade-offs"],
              rows: [
                [
                  "Parallel classical and PQC PKI",
                  "Clean separation, straightforward rollback, easy rollover once hybridization is no longer required.",
                  "More certificates, validation paths, and operating overhead; twice the certificates and validations to manage.",
                ],
                [
                  "Alternative public key",
                  "Single certificate lifecycle; backward compatible, usable even where a protocol does not support PQC.",
                  "Larger certificates and uneven support; standards not yet adopted to facilitate this certificate type.",
                ],
                [
                  "Mixed hierarchy",
                  "Incremental change and reuse of current CAs; migration can start using the existing PKI environment; usable even when the PKI is not fully owned by the organization.",
                  "Complex validation and interoperability; validation requires multiple algorithms in one chain, which can cause compatibility challenges.",
                ],
                [
                  "Composite certificate",
                  "Single lifecycle and combined validation; offers a high level of security since validation fails if either component fails.",
                  "Large artifacts and limited support for the hybrid keys used.",
                ],
                [
                  "Full PQC",
                  "Direct target state; straightforward implementation; single certificate to manage.",
                  "New trust infrastructure required; no support for classical algorithms.",
                ],
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Privacy-enhancing cryptography",
          id: "privacy-enhancing-cryptography",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Privacy-enhancing cryptography (PEC) is a collection of cryptographic schemes with powerful capabilities, including zero-knowledge proofs, anonymous credentials, and oblivious pseudo-random functions. Although less widely used than standardized cryptographic workhorses, PEC schemes are still fairly broadly adopted. Since PEC is generally not standardized, applying it in real-world environments comes with additional cost and risk, and the most prevalent threat today for several PEC categories is the lack of mature, practical quantum-safe schemes.",
                "Where no competitive quantum-safe PEC alternative is yet available, it is recommended to prepare for a future migration by making existing PEC-using systems crypto-agile, and to perform the actual migration once a sufficiently performant quantum-safe alternative reaches sufficient maturity — an approach already underway, for example, in the Yivi anonymous-credentials project.",
              ],
            },
            {
              type: "table",
              caption: "Quantum-readiness of four privacy-enhancing cryptography categories",
              columns: ["Category", "Purpose", "Draft readiness treatment"],
              rows: [
                [
                  "Zero-knowledge proofs",
                  "Prove claims without revealing underlying data.",
                  "Quantum-safe alternatives exist, but proofs are orders of magnitude larger or still in a research phase.",
                ],
                [
                  "Anonymous credentials",
                  "Selective disclosure and unlinkability.",
                  "Quantum-safe proposals are less mature and may be less efficient.",
                ],
                [
                  "Oblivious pseudo-random functions",
                  "Joint PRF evaluation while protecting inputs and keys.",
                  "No battle-tested efficient quantum-safe alternative available today; promising research breakthroughs, limited production maturity.",
                ],
                [
                  "Fully homomorphic encryption",
                  "Compute on encrypted data.",
                  "Quantum-resistant foundations, but performance and standardization remain constraints; hardware acceleration required for practical use.",
                ],
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Constrained systems",
          id: "constrained-systems",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Crypto-agility is considerably harder to achieve in constrained, highly distributed, or long-lived cryptographic ecosystems — embedded and IoT devices, PKIs, HSMs, smart cards, industrial control systems, and archival signing systems — than in general application development. Hardware platforms may require additional memory, storage, or computational capability to support PQC's increased resource requirements, or may simply lack a suitable implementation of the new algorithm. Additional challenges arise from interoperability requirements, dependence on third-party vendors, certification processes, regulatory compliance obligations, and the need to maintain legacy-system support during extended transition periods.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Evolving standards",
          id: "evolving-standards",
          blocks: [
            {
              type: "bullets",
              items: [
                "Track: 2029 internal post-quantum migration targets published by Google, Cloudflare, and Microsoft, and the accelerating CA/Browser Forum certificate-validity reductions (200 days from March 2026, 100 days by March 2027, 47 days by March 2029).",
                "Track: the IETF PLANTS working group's standardization of Merkle Tree Certificates (MTC), and related Chrome, Cloudflare, and Let's Encrypt experimentation.",
                "Track: Extended Key Usage (EKU) extension standardization for PQC certificates and its interaction with shorter CA/Browser Forum renewal periods.",
                "Evaluate: hybrid versus pure PQC signature schemes for the WebPKI, which remains an area of active industry debate.",
                "Evaluate: Common Criteria/eIDAS certification of PQC-capable HSMs on a per-vendor, per-scheme basis rather than assuming a fixed industry-wide timeline.",
                "Draft guidance: integration of ML-DSA and other PQC signatures into CA/Browser Forum baseline requirements for TLS server and S/MIME certificates, and into code-signing certificate requirements, where formal decisions have not yet been taken.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "testing-and-operations",
      title: "Testing, deployment, monitoring, and operations",
      navLabel: "Testing & operations",
      blocks: [
        {
          type: "subsection",
          title: "Testing",
          id: "testing",
          blocks: [
            {
              type: "bullets",
              items: [
                "Use production-representative clients, intermediaries, traffic, connection churn, constrained networks, failure injection, and rollback.",
                "Measure handshake latency, CPU, memory, artifact size, fragmentation, throughput, resumption, errors, and provider/hardware differences.",
                "Verify negotiated outcomes directly; configuration alone is not evidence of protection.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Deployment and monitoring",
          id: "deployment-monitoring",
          blocks: [
            {
              type: "bullets",
              items: [
                "Track hybrid/PQC coverage by service, client, protocol, geography, and intermediary where relevant.",
                "Alert on unexpected fallback, unsupported clients, certificate or provider mismatch, policy exceptions, and stale evidence.",
                "Instrument both sides of any proxy or wrapper deployment, and document rollback paths and retained native-migration plans.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Fallback and exceptions",
          id: "fallback-exceptions",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Fallback to classical cryptography during TLS negotiation is silent and protocol-compliant by design: a client negotiating classical X25519 because it does not support ML-KEM will not produce an error or a log entry distinguishable from a successful PQ-negotiated connection without deliberate instrumentation. This is not a flaw in the hybrid approach — backward compatibility is its purpose — but it means PQ protection is not uniform across all client connections from the moment of deployment and must be verified through operational telemetry rather than assumed.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Migration waves",
          id: "migration-waves",
          blocks: [
            {
              type: "roadmap",
              items: [
                {
                  label: "Wave 1",
                  title: "Shared infrastructure and highest-risk systems",
                  text: "Consider migrating core, mutualized infrastructure components first, since securing them contributes to the security of all applications that depend on them, and start migration of the highest-risk, internet-facing, or longest-lived systems even before the inventory is complete.",
                },
                {
                  label: "Wave 2",
                  title: "TLS key exchange across applications",
                  text: "Prioritize applications using TLS, migrating the key exchange mechanism (the direct countermeasure to HNDL) first, using hybrid approaches and proxies or wrappers where native migration is not yet available.",
                },
                {
                  label: "Wave 3",
                  title: "Certificate authentication",
                  text: "Address certificate authentication as a distinct, later workstream, tracking PKI pattern choice, HSM and CA/Browser Forum readiness, and emerging approaches such as Merkle Tree Certificates as they mature.",
                },
              ],
            },
            {
              type: "prose",
              paragraphs: [
                "These waves are not strictly sequential: inventory and migration work should proceed in parallel, and crypto-agility improvements can continue throughout, prioritized according to each asset's criticality and available timeline.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "case-study",
      title: "Real-world hybrid TLS case study",
      navLabel: "Case study",
      blocks: [
        {
          type: "callout",
          variant: "draft",
          title: "Results are implementation-specific",
          paragraphs: [
            "The measurements in this case study were produced on a specific implementation, software stack, and test environment. They illustrate orders of magnitude and the relative balance between computation and wire-time overhead; they are not a performance guarantee for other environments. Organizations should reproduce comparable measurements locally, under their own production-representative conditions, before relying on these figures for planning.",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Klarrio's work on post-quantum cryptography began in 2024, when an enterprise customer in a regulated sector asked whether their platform would remain resilient against future quantum computing risks. That question prompted a structured review that extended beyond the immediate customer concern. PQC relevance is driven by three converging developments: regulated industries increasingly expect demonstrable long-term data confidentiality; harvest-now, decrypt-later scenarios are shifting the risk horizon from a future problem to a present one for data with long retention periods; and the cryptographic ecosystem has matured to the point where hybrid, production-grade PQC deployments are feasible without custom cryptographic forks. A fourth driver has since become clearer: trust-now, forge-later (TNFL) signature and certificate forgery is a separate risk from HNDL and, for an authentication-heavy platform, arguably the more consequential one going forward.",
          ],
        },
        {
          type: "roadmap",
          title: "Phased journey",
          items: [
            {
              label: "2024",
              title: "Cryptographic inventory and feasibility assessment",
              text: "Scoped deliberately as a readiness exercise rather than a deployment project: mapping which services used TLS, which library versions underpinned them, which PKI components would need updating, and which architectural constraints would affect changing cryptographic primitives.",
              points: [
                "PQC algorithms were technically well-specified, but production deployment at that stage would have required maintaining custom cryptographic forks, since mainstream library support was incomplete and client-side negotiation was inconsistent across browsers and runtimes.",
                "The decision not to deploy in 2024 was an ecosystem-readiness judgment, not a capability gap; organizations that deployed pre-standard implementations in that period faced maintenance burden when NIST finalized ML-KEM in FIPS 203 in August 2024.",
              ],
            },
            {
              label: "2025",
              title: "Ecosystem stabilization and deployment readiness",
              text: "By 2025, current Chromium- and Firefox-based browser releases supported hybrid X25519MLKEM768 TLS key exchange, Go 1.24 introduced native support in its standard crypto/tls package, and OpenSSL 3.5 added standards-aligned ML-KEM support.",
              points: [
                "By mid-2025, a server configured to prefer X25519MLKEM768 could negotiate hybrid key exchange with most modern clients while falling back transparently to X25519 for those that did not yet support it.",
                "Not all client environments had reached this baseline: many enterprise Java and .NET environments on older runtimes, and legacy curl builds not linked against OpenSSL 3.5, would still fall back to classical negotiation.",
              ],
            },
            {
              label: "Q1 2026",
              title: "Production hybrid key-exchange deployment",
              text: "Klarrio completed a production migration of tutorrio, its academy platform, to hybrid TLS key exchange combining X25519 with ML-KEM-768 as standardized in FIPS 203, chosen because it maintains security against both classical and quantum adversaries, preserves backward compatibility, and avoids a hard dependency on any single approach while the ecosystem consolidates.",
              points: [
                "This addressed the key-exchange workstream (the direct countermeasure to HNDL collection of session traffic) as the correct first step.",
                "It did not address certificate authentication, which remains the more strategically significant workstream under a TNFL threat model because it governs whether an adversary can actively impersonate an endpoint.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Measured performance",
          id: "measured-performance",
          blocks: [
            {
              type: "bullets",
              title: "Test environment, method, traffic profile, and configuration",
              items: [
                "Environment and tooling: measurements were produced with Node.js v26.2.0 and OpenSSL 3.5.6.",
                "Method: 250,000 handshakes were measured per configuration after a 25,000-handshake warm-up; further validation runs ranging from 10,000 to 1,000,000 samples confirmed consistent results within the ranges shown.",
                "Traffic profile: handshake-latency figures were measured on loopback (pure cryptographic overhead, no network); throughput figures used a median of seven 10 MB transfer measurements per configuration; concurrent-load figures used 50 simultaneous connections.",
                "Configuration compared: classical X25519 key exchange versus hybrid PQC X25519MLKEM768, both negotiating AES-256-GCM for bulk encryption.",
              ],
            },
            {
              type: "table",
              caption: "Handshake latency, loopback (pure cryptographic overhead, no network)",
              columns: ["Configuration", "Median", "p95", "p99"],
              rows: [
                ["Classical (X25519)", "0.705 ms", "0.928 ms", "1.432 ms"],
                ["Hybrid PQC (X25519MLKEM768)", "0.850 ms", "1.091 ms", "1.605 ms"],
                ["Overhead", "+0.145 ms (+21%)", "+0.163 ms (+18%)", "+0.173 ms (+12%)"],
              ],
              note: "These figures represent maximum cryptographic overhead with no network in the path. Repeated runs observed a median overhead of roughly 10–20%, reflecting normal variation from CPU frequency scaling and system load.",
            },
            {
              type: "table",
              caption: "Projected total connection latency at representative network round-trip times",
              columns: ["Network RTT", "Classical", "Hybrid PQC", "PQC overhead"],
              rows: [
                ["10 ms", "10.75 ms", "10.89 ms", "+1.36%"],
                ["25 ms", "25.75 ms", "25.89 ms", "+0.57%"],
                ["50 ms", "50.75 ms", "50.90 ms", "+0.29%"],
                ["100 ms", "100.75 ms", "100.89 ms", "+0.14%"],
              ],
              note: "TLS 1.3 requires one full round trip to complete the handshake, so total connection latency is approximately loopback cryptographic overhead plus RTT. At 50 ms RTT, representative of inter-region API calls, hybrid overhead is approximately 0.3%; at 100 ms RTT it falls to under 0.2%.",
            },
            {
              type: "prose",
              paragraphs: [
                "Post-handshake application throughput was statistically identical across configurations: 1360 Mbps (classical) versus 1382 Mbps (hybrid), a difference within measurement noise, because both configurations negotiate AES-256-GCM for bulk encryption independent of the key exchange group. Under concurrent load at 50 simultaneous connections, hybrid PQC sustained approximately 984 handshakes per second versus 1161 for classical, a reduction of about 15%, most relevant in architectures with high connection churn and short-lived sessions; session resumption mitigates this in practice.",
                "Key share overhead: X25519MLKEM768 transmits approximately 2336 bytes of key material per connection, compared to 64 bytes for classical X25519 alone — a 36x increase, but a one-time, per-connection cost rather than a repeated one. At a 10 Mbps connection this adds under 2 ms of additional wire time, and at 100 Mbps and above the additional 2.3 KB transmits in well under 0.2 ms, comparable to or faster than the ML-KEM computation time itself. The 10–20% latency overhead reflects additional CPU computation time; the 36x size increase reflects additional bytes transmitted — these are distinct effects and should not be conflated. This distinction matters for planning the certificate-authentication phase, where unoptimized ML-DSA certificate chains could add on the order of 15–25 KB per handshake, a wire-time-dominant problem that approaches such as Merkle Tree Certificates aim to address.",
              ],
            },
            {
              type: "callout",
              variant: "implementation",
              title: "Limitations",
              paragraphs: [
                "These figures reflect a specific stack (Node.js v26.2.0, OpenSSL 3.5.6) and test harness; absolute latency and throughput numbers will vary with hardware, language runtime, library version, and network conditions. The loopback figures isolate cryptographic computation only and do not include real-world network variability beyond the RTT projections shown. The broader conclusion — that PQC adoption is primarily an architectural integration challenge rather than a computational performance constraint — is the engineering takeaway; the specific millisecond and percentage figures are not intended as universal benchmarks.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Observability in production",
          id: "case-study-observability",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Verifying that post-quantum key exchange is actually occurring in production, rather than silently falling back to classical negotiation, is a critical operational detail that is frequently underspecified in PQC deployment guidance. Misconfigured TLS stacks, intermediate proxies that terminate and re-establish TLS without hybrid group support, and client populations that predate ecosystem maturity can all result in classical-only connections without any visible error.",
                "In Go-based services, negotiated TLS parameters are available through tls.Conn.ConnectionState(), including the CurveID identifying the key-exchange mechanism actually used, making it possible to distinguish a hybrid X25519MLKEM768 exchange from a classical X25519 exchange. Where a TLS stack does not expose equivalent information directly, visibility may instead require TLS debug logging, reverse-proxy telemetry, packet-level inspection, or other application-layer instrumentation. Building this verification into the deployment pipeline was one of the more practical lessons from this implementation.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Authentication: the next workstream",
          id: "case-study-authentication-next",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Two structural points define what comes next rather than limitations of what was deployed. First, session resumption: on current TLS 1.3 stacks, resumed sessions typically derive key material from previously established session secrets carried through PSK/session-ticket mechanisms rather than performing a fresh ML-KEM key exchange on reconnection, reducing the frequency of new post-quantum key establishment even after an original hybrid-negotiated connection. For most use cases this is an acceptable trade-off given short ticket validity windows; for connections carrying data with extended confidentiality requirements, mitigations include shortening ticket lifetimes, increasing rotation frequency, or disabling session resumption for the relevant connection profiles. PQ-safe session-ticket mechanisms are an active area of standardization work but are not yet available in production stacks.",
                "Second, certificate authentication: this deployment protects TLS key exchange and therefore an important part of the HNDL threat, but certificate signing algorithms remain classical, so a quantum-capable adversary could, in principle, forge certificates once sufficient quantum capability exists (the TNFL risk) even though it could not recover session keys from recorded traffic. This reflects the current state of the ecosystem rather than a gap unique to this implementation: post-quantum signature algorithms including ML-DSA (FIPS 204) are not yet integrated into CA/Browser Forum baseline requirements, and publicly trusted WebPKI certificate issuance remains classically signed. Merkle Tree Certificates are one of the leading candidate approaches for resolving this limitation at production scale, and the IETF PLANTS working group is actively standardizing them, with Chrome and Cloudflare running live feasibility experiments since early 2026 and Let's Encrypt discussing staged experimentation publicly.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Key takeaways",
          id: "case-study-takeaways",
          blocks: [
            {
              type: "bullets",
              items: [
                "Post-quantum readiness is primarily an exercise in system architecture and operational maturity, not cryptographic performance: the measured overhead was real but negligible once realistic network latency was taken into account.",
                "The decisive factor in successful deployment was crypto-agility across the platform stack: the 2024–2025 readiness work enabled rapid migration in 2026 by ensuring cryptographic dependencies and substitution points were already understood, eliminating the need for custom cryptographic forks required by earlier experimental implementations.",
                "PQC deployment cannot be assumed from configuration alone; hybrid TLS introduces silent fallback to classical key exchange in heterogeneous client environments, making observability a first-order requirement.",
                "Post-quantum transition is inherently staged across cryptographic functions: key exchange is maturing toward hybrid deployment while certificate authentication remains classical, and these should be treated as independent workstreams rather than a single migration step.",
                "The more pressing open question beyond these performance findings is when certificate authentication — addressing the trust-now, forge-later risk — can follow; that timeline is governed by ecosystem factors (IETF PLANTS standardization, CA/Browser Forum requirements, HSM vendor readiness) outside any single organization's control.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "appendices",
      title: "Appendices",
      navLabel: "Appendices",
      blocks: [
        {
          type: "disclosure",
          title: "Collaboration and continuous learning",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "PQC transition is not an isolated effort; it is a collective challenge that spans industries, supply chains, and national boundaries. Organizations are encouraged to actively participate in industry groups and knowledge-sharing forums, such as the Quantum Circle and the Cyber Security Coalition. Sharing experience from pilots, aligning on best practices, and contributing to open tools or training initiatives accelerates progress for everyone. In Belgium, initiatives such as the Q-Ready COOCK project facilitate the transfer of knowledge and practical experience on post-quantum migration.",
              ],
            },
          ],
        },
        {
          type: "disclosure",
          title: "This paper is a collaborative effort",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "This white paper is the result of a collaborative effort bringing together expertise from the Belgian Cyber Security Coalition, the Quantum Circle, and the Centre for Cybersecurity Belgium (CCB). It has been produced to the best of the contributors' abilities.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "next-steps",
      title: "Next steps",
      navLabel: "Next steps",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "This volume sits alongside the other two volumes of the series. Decision-makers looking for the broader rationale and timeline for quantum risk should start with Volume 1; governance, risk, and program-management teams coordinating the transition should see Volume 2.",
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Preparing for the Quantum Era",
              text: "Volume 1 introduces the quantum threat and the urgency of post-quantum migration for decision-makers.",
              href: "/guides/preparing-for-the-quantum-era",
            },
            {
              title: "Managing the PQC Transition",
              text: "Volume 2 covers governance, planning, responsibilities, funding, and coordination across stakeholders.",
              href: "/guides/managing-the-pqc-transition",
            },
          ],
        },
      ],
    },
  ],
  references: [
    {
      title: "RFC 9958: Post-Quantum Cryptography for Engineers",
      url: "https://www.rfc-editor.org/info/rfc9958/",
    },
    {
      title: "RFC 10024: Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3",
      url: "https://www.rfc-editor.org/rfc/rfc10024",
    },
    {
      title: "Cloudflare: Post-Quantum Cryptography (PQC)",
      publisher: "Cloudflare",
      url: "https://developers.cloudflare.com/ssl/post-quantum-cryptography/",
    },
    {
      title: "Cloudflare: PQC Support",
      publisher: "Cloudflare",
      url: "https://developers.cloudflare.com/ssl/post-quantum-cryptography/pqc-support/",
    },
    {
      title: "Cloudflare: PQC to Origin Servers",
      publisher: "Cloudflare",
      url: "https://developers.cloudflare.com/ssl/post-quantum-cryptography/pqc-to-origin/",
    },
    {
      title: "IETF: Updated Recommendations for TLS Keyshares",
      publisher: "IETF (Internet-Draft)",
      url: "https://datatracker.ietf.org/doc/draft-westerbaan-tls-keyshare-recommendations/",
    },
    {
      title: "NIST NCCoE: Migration to Post-Quantum Cryptography",
      publisher: "NIST NCCoE",
      url: "https://www.nccoe.nist.gov/applied-cryptography/migration-to-pqc",
    },
    {
      title: "NCSC: Next Steps in Preparing for Post-Quantum Cryptography",
      publisher: "NCSC",
      url: "https://www.ncsc.gov.uk/whitepaper/next-steps-preparing-for-post-quantum-cryptography",
    },
    {
      title: "CA/Browser Forum: TLS Server Certificate Baseline Requirements",
      publisher: "CA/Browser Forum",
      url: "https://cabforum.org/working-groups/server/baseline-requirements/",
    },
    {
      title: "CA/Browser Forum: Latest S/MIME Baseline Requirements",
      publisher: "CA/Browser Forum",
      url: "https://cabforum.org/working-groups/smime/requirements/",
    },
    {
      title: "ETSI TR 104 016: Quantum-Safe Cryptography — A Repeatable Framework for Quantum-Safe Migrations",
      publisher: "ETSI",
      url: "https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf",
    },
    {
      title: "ENISA / ECCG: Agreed Cryptographic Mechanisms, Version 3",
      publisher: "ENISA",
      url: "https://certification.enisa.europa.eu/publications/eucc-guidelines-cryptography_en",
    },
    {
      title: "HAPKIDO Handbook: Navigating the Transition to Quantum-Safe PKI",
      publisher: "HAPKIDO",
      url: "https://project-hapkido.nl/deliverables/navigating-transition-quantum-safe-pki/",
    },
    {
      title: "PKI Consortium: Architecting PKI Hierarchies for Graceful PQ Migration",
      publisher: "PKI Consortium (YouTube)",
      url: "https://www.youtube.com/watch?v=26lxuHIdvLg&list=PL-BLLaXQJAfTLuRXJYwAAiJmZRGzhOvFd&index=34",
    },
  ],
};
