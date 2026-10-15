// Internal editorial review register for Volume 3 (draft v0.7).
// Not rendered as reader-facing guidance; tracks unresolved source material
// separated out of volume3.ts per the Volume 3 editorial treatment rules.
import type { ReviewRegisterItem } from "./types";

export const volume3ReviewRegister: ReviewRegisterItem[] = [
  {
    sourceSection: "1.2 Summary / R1 (reviewer comment [RP1])",
    issue:
      "Reviewer comment notes R1 wording was 'revised' and that the instruction to 'leverage currently available tools first' still needed to be updated later; the surrounding recommendation text was left unresolved.",
    disposition: "Qualified in web text",
    webTreatment:
      "R1 is presented using the settled wording from the summary (adapt risk analysis for TNFL alongside HNDL); the tool-reuse point is instead grounded in R12, which the source states clearly.",
  },
  {
    sourceSection: "3. Guidance for application & platform owners (TLS workstreams, comment [WV2])",
    issue:
      "Reviewer comment flags that a cross-reference to another document section 'is most likely going to change as part of the document split' and asks for confirmation once the split is finalized.",
    disposition: "Omitted pending review",
    webTreatment:
      "The surrounding guidance on TLS key exchange versus certificate authentication is retained, but no specific cross-document section reference is included in the web text.",
  },
  {
    sourceSection: "3. Hybrid versus pure PQC (comment [JV3])",
    issue:
      "Reviewer comment instructs the author to 'refer to appendix \"kaderke\"' (a placeholder/working name for a callout box), with no resolved appendix content supplied.",
    disposition: "Omitted pending review",
    webTreatment:
      "The hybrid-versus-pure-PQC guidance is presented as prose/draft callout content without an unresolved appendix cross-reference.",
  },
  {
    sourceSection: "4.2 Practical discovery guidelines (comments [DM4], [JV5R4])",
    issue:
      "Reviewer comments indicate that detailed discovery-matrix material 'has been moved to Annex' and that a cross-reference to Volume 2 still needs confirmation ('reference is still correct in final version of Volume 2').",
    disposition: "Needs author confirmation",
    webTreatment:
      "The inventory layer/evidence/gap content that is settled in the source is retained in the inventory section; the Volume 2 prioritisation-model cross-reference is mentioned only generally, without asserting it is final.",
  },
  {
    sourceSection: "6.3 PKI (comment [RP6])",
    issue:
      "Reviewer comment requests a cross-check of whether a reference (to the CA/Browser Forum Baseline Requirements addition of ML-DSA/ML-KEM for S/MIME) 'still holds in the final document'.",
    disposition: "Retained as draft note",
    webTreatment:
      "The S/MIME certificate point is presented as current draft status without being described as final or confirmed.",
  },
  {
    sourceSection: "10. Team / Expert Reviewers list",
    issue:
      "The source contains an unresolved reviewer attribution query ('Or BNP Paribas Fortis?' as comment [JV8]), a literal <TODO> placeholder in the reviewer list, and an incomplete-entry comment ('Complete this', [JV9]).",
    disposition: "Omitted pending review",
    webTreatment:
      "Individual named contributors, affiliations-in-question, and the incomplete reviewer entry are not reproduced in the web guide; the appendices section notes only that the paper is the result of a named collaborative effort (Cyber Security Coalition, Quantum Circle, CCB) without an unresolved roster.",
  },
  {
    sourceSection: "Appendix A heading (comment [V(10])",
    issue:
      "Reviewer comment instructs that the detailed signature-family appendix content should be 'moved to annex and replaced with a summary table', indicating the body placement was still unsettled at v0.7.",
    disposition: "Qualified in web text",
    webTreatment:
      "Signature-family detail is presented web-side as a comparison table in the technical-challenges section, consistent with the requested summary-table treatment, rather than as long-form appendix prose.",
  },
  {
    sourceSection: "Appendix B introduction (comments [JV11], [V(12R11])",
    issue:
      "Reviewer comments attach an unresolved personal author attribution (an email address) and record an in-progress editorial decision to move detailed content to an annex and replace the introduction with a summary of PEC/PQC challenges.",
    disposition: "Omitted pending review",
    webTreatment:
      "The personal author attribution is not reproduced. Privacy-enhancing cryptography is presented web-side as the requested category/purpose/draft-readiness summary table, consistent with the editorial direction in the comment.",
  },
  {
    sourceSection: "Appendix B, zk-STARKs discussion (comments [RP13], [KV14R13])",
    issue:
      "Reviewers disagree in comments over whether the zk-STARK / proof-size illustration should be removed ('remove?') or kept ('I think it illustrates the power of the technology'); not resolved in v0.7.",
    disposition: "Retained as draft note",
    webTreatment:
      "The zk-STARK proof-size comparison is retained as illustrative detail within the zero-knowledge-proofs discussion, without taking a position on the open removal question.",
  },
  {
    sourceSection: "Appendix B, anonymous credentials wording (comments [RP15], [KV16R15])",
    issue:
      "Reviewers debate terminology choice between 'user' and 'citizen' in the anonymous-credentials description; left open in the comment thread.",
    disposition: "Qualified in web text",
    webTreatment:
      "Web text uses a generic, audience-neutral description (\"an individual\") for the anonymous-credentials example rather than adopting either disputed term outright.",
  },
  {
    sourceSection: "Section headings 3, 4, 6 (author attribution labels in table of contents)",
    issue:
      "Source section headings embed internal drafting attributions in parentheses, e.g. 'Guidance for application & platform owners (Klarrio:Werner)', 'Cryptographic inventory (EY: Sarah, Charles/KBC: Dirk)', 'Challenges (BNPPF: Steve/ITSME:Roel/SopraSteria:Reyhane)', which are internal authorship notes rather than reader-facing content.",
    disposition: "Omitted pending review",
    webTreatment:
      "Section titles in the web guide use the plain topic name only (e.g. \"Application and platform-owner guidance\"); drafting-team attributions are not shown to readers.",
  },
  {
    sourceSection: "Distribution list, history of changes, and reviewed-by tables",
    issue:
      "Front-matter tables list named individuals, organisations, and an empty 'Reviewed on' column with no reader-facing value.",
    disposition: "Omitted pending review",
    webTreatment:
      "Not reproduced in the web guide; the draft-status callout communicates version (0.7) and review status instead.",
  },
];
