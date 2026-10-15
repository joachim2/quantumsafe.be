# Quantum Readiness Hub

ROUND 1 — Build the Homepage, Design System, Navigation and Routing Foundation

Official partner logo assets are provided as attachments:
- Cyber Security Coalition logo: logo_csc_png.png
- Quantum Circle logo: quantum_circle_logo_2024_pos.svg
Use these official assets directly in the project header, collaboration sections, and footer as specified.

1. Project objective
Build a modern, responsive knowledge platform about Post-Quantum Cryptography (PQC), helping organisations prepare for the quantum era.
The initiative brings together Cyber Security Coalition and Quantum Circle.
Official reference websites:
Cyber Security Coalition: https://cybersecuritycoalition.be/
Quantum Circle: https://quantumcircle.eu/
Use these websites to understand the organisations and their branding. Create an original design inspired by the professional, modern and forward-looking feel of Quantum Circle. Do not copy either website's layout or design.
The platform should feel like a credible European cybersecurity and quantum technology knowledge platform. It must be accessible to decision-makers, useful for security professionals and relevant to technical specialists.
The three-volume guide is the central feature of the website.
This is Round 1 of a multi-stage project.
In this round, build:
The complete homepage.
The foundational design system.
The global header and navigation.
The global footer.
The central site configuration.
The complete routing foundation.
Empty starter layouts for secondary pages.
Reusable components for future development.
Do not fully develop secondary-page content yet. We will develop those pages individually in later rounds.

2. Technical architecture
Use the existing Lovable project's framework and conventions. Do not unnecessarily replace a working project setup.
Build a maintainable, component-based architecture.
Suggested structure, adapted to the project as necessary:
src/config/siteConfig.ts — central configuration.
src/components/layout/ — header, navigation, footer and shared layouts.
src/components/ui/ — reusable buttons, cards and interface components.
src/components/home/ — homepage sections.
src/pages/ — homepage and route-level components.
src/styles/ — design tokens and global styling, or the project's existing equivalent.
Use the project's established routing system. If routing is not configured yet, implement a suitable router compatible with the framework.
Keep content, configuration and presentation separate. Do not duplicate navigation labels, volume metadata or destination URLs across components.

3. Central configuration and route mapping
Create a central configuration file, such as src/config/siteConfig.ts, as the single source of truth for navigation, content metadata and destinations.
It must include:
Website title and description.
Navigation labels and destinations.
Partner names, official website URLs and logo asset paths.
Metadata for all three volumes.
The canonical webpage route for each volume.
Separate PDF download URLs for each volume.
Route aliases and redirect destinations.
Audience pathway metadata.
Resource placeholders.
Footer and legal-page destinations.
Keep each volume's webpage destination and PDF destination separate:
pageUrl — the canonical webpage for the volume.
pdfUrl — the corresponding PDF document.

Explicit route-alias strategy
To avoid ambiguity between the main navigation and the volume pages, do not create separate content pages for the three theme routes.
Instead, configure these redirects:
Navigation routeRedirect destination/understand-pqc/guides/preparing-for-the-quantum-era/plan-the-transition/guides/managing-the-pqc-transition/implement-pqc/guides/implementing-the-pqc-migration
The volume routes are the canonical destinations for this content. The theme routes are aliases that redirect visitors to the appropriate volume.
Implement the redirects using the routing mechanism supported by the existing project. Ensure they work when a visitor navigates through the site, enters an alias URL directly or refreshes the browser.
If the routing framework requires route aliases or redirect rules to be defined separately from siteConfig.ts, keep the mapping centralised in the configuration and derive the framework-specific rules from it where practical. Do not maintain conflicting copies of the same redirect mapping.
Use typed configuration where supported.
Keep the configuration easy to update. Never present placeholder URLs as working links, and do not duplicate URL strings unnecessarily.

4. Design system
Establish a consistent design system before building the homepage.
Visual direction
Create a modern, polished and trustworthy European technology aesthetic.
Use:
Deep navy and dark blue.
White and light neutral backgrounds.
Restrained cyan, teal or blue accents.
Clear contemporary typography.
Generous whitespace.
Consistent spacing and alignment.
Subtle borders and restrained shadows.
Refined cards and buttons.
Subtle abstract quantum-inspired or digital-security visuals.
Avoid excessive neon colours, generic cybersecurity imagery, science-fiction styling, heavy animation and crowded layouts.

Reusable design tokens
Define shared variables or tokens for:
Primary, secondary and accent colours.
Background and surface colours.
Text and muted text colours.
Typography sizes and weights.
Spacing.
Border radii.
Shadows.
Content widths.
Responsive breakpoints where appropriate.
Button variants.
Card styles.
Use the same design tokens throughout the homepage, shared navigation, footer and secondary-page layouts.

5. Branding and partner logos
Use the attached official partner logos:
- Cyber Security Coalition: logo_csc_png.png
- Quantum Circle: quantum_circle_logo_2024_pos.svg
Display both partner identities in a suitable collaboration area and in the footer. Preserve original logo proportions, colours and designs. Keep the assets easy to configure through src/config/siteConfig.ts.

6. Global header and navigation
Build a complete, reusable header with these navigation items:
Home
Understand PQC
Plan the Transition
Implement PQC
Resources
About
Configure destinations as follows:
Home → /
Understand PQC → /understand-pqc
Plan the Transition → /plan-the-transition
Implement PQC → /implement-pqc
Resources → /resources
About → /about
The first three topic links intentionally use the alias routes defined in Section 3. Those aliases must redirect to the corresponding canonical volume pages.
Requirements:
The project identity links to the homepage.
Every navigation item has a configured destination.
The active route has a clear visual state where appropriate.
Desktop navigation is clean and well spaced.
Mobile navigation uses an accessible menu.
Keyboard navigation and visible focus states work.
The header behaves consistently across all routes.
Any sticky-header behaviour is subtle and does not obscure content.
Do not invent extra navigation items.

7. Complete homepage
Build these sections in the specified order.

Section A — Hero
Eyebrow:
PREPARING FOR THE QUANTUM ERA
Headline:
Secure your data. Be ready for what’s next.
Supporting text:
“The quantum era is changing the future of digital security. Understand the quantum threat, explore the impact on your organisation and discover how to prepare for post-quantum cryptography.”
Primary CTA:
Explore the guide
The CTA must smoothly scroll to the “A structured guide to PQC” section.
Use an original, elegant visual related to quantum technology and digital security. Ensure the visual supports the headline rather than overpowering it.

Section B — Introduction
Heading:
Preparing for the quantum era starts with knowledge.
Text:
“Post-quantum cryptography is becoming an important part of long-term digital resilience. Organisations need to understand the risks, establish a transition strategy and prepare for migration. This knowledge platform brings together strategic, organisational and technical guidance to support that journey.”
Introduce three principles:
Understand the threat
Learn why quantum computing matters for today's cryptography.
Plan the transition
Explore governance, risk, planning and investment considerations.
Prepare for implementation
Discover the technical and operational aspects of PQC migration.
Use a balanced layout with generous whitespace and subtle visual elements.

Section C — A structured guide to PQC
Heading:
A structured guide to PQC
Introductory text:
“Three complementary volumes take you from understanding the quantum challenge to planning and implementing your PQC migration.”
Create three consistent, polished cards.
Volume 01 — Preparing for the Quantum Era
Description:
“Understand the quantum threat, the strategic urgency of post-quantum cryptography, potential timelines and the first steps towards quantum readiness.”
Audience:
Decision-makers and organisational leaders.
CTA: Learn more
Destination: /guides/preparing-for-the-quantum-era
Volume 02 — Managing the PQC Transition
Description:
“Explore governance, responsibilities, risk management, planning and investment considerations for a structured transition to post-quantum cryptography.”
Audience:
Security, risk and compliance teams, project managers and transition coordinators.
CTA: Learn more
Destination: /guides/managing-the-pqc-transition
Volume 03 — Implementing the PQC Migration
Description:
“Discover the technical considerations involved in migration, including algorithms, architecture, interoperability, testing and operational implementation.”
Audience:
Engineers, developers, IT architects and IT operations teams.
CTA: Learn more
Destination: /guides/implementing-the-pqc-migration
Each Learn more link must open the canonical webpage for its corresponding volume.
Do not link these buttons directly to PDFs.

Section D — Download the guides
Place this section immediately below the three volume cards.
Heading:
Download the guides
Supporting text:
“Prefer to read offline or share the guidance with your team? Download the three volumes as PDF documents.”
Create three separate download options:
Download Volume 01 (PDF)
Download Volume 02 (PDF)
Download Volume 03 (PDF)
Each download option must use the pdfUrl belonging to its respective volume in the central configuration.
Keep webpage URLs and PDF URLs completely separate.
Use these configurable placeholders until the actual links are supplied:
Volume 01 PDF: [VOLUME_01_PDF_URL]
Volume 02 PDF: [VOLUME_02_PDF_URL]
Volume 03 PDF: [VOLUME_03_PDF_URL]
When a valid PDF URL is configured, make the link work correctly. Where appropriate and supported, allow downloading; otherwise, open the PDF in the browser.
If a URL is missing or remains a placeholder, do not render it as a clickable link. Either hide the download action or show a non-interactive “PDF coming soon” state.
Never substitute a volume webpage URL for a missing PDF URL.

Section E — Audience pathways
Heading:
Where would you like to start?
Supporting text:
“Whether you are setting the direction, coordinating the transition or implementing the technical changes, there is a starting point for you.”
Create three compact cards.
For decision-makers
Understand strategic urgency, organisational exposure and the actions needed to prepare.
CTA: Explore strategic guidance
Destination: Volume 01 canonical page.
For transition teams
Understand governance, risk assessment, planning, prioritisation and investment.
CTA: Explore transition planning
Destination: Volume 02 canonical page.
For technical teams
Explore technical considerations, algorithms, architecture, interoperability and implementation.
CTA: Explore technical guidance
Destination: Volume 03 canonical page.
Keep this content in the central configuration. These pathways complement the main volume cards and should not force visitors to select a role before exploring.

Section F — Latest insights and resources
Heading:
Latest insights and resources
Create a lightweight, reusable section ready for future articles, reports, events and additional PQC resources.
Do not invent publications, dates, events or external links.
If real content has not been supplied, show a clean empty state:
“New insights and resources will be added here.”
Keep the resource-card component ready for future use. Any illustrative placeholder must be clearly identified as such and must not appear to be a real published article.

Section G — About the initiative
Heading:
Working together towards quantum readiness
Text:
“Preparing for the quantum era requires collaboration between cybersecurity professionals, technology experts, researchers and organisations. This platform brings together knowledge and practical guidance to help organisations prepare for the transition to post-quantum cryptography.”
Introduce Cyber Security Coalition and Quantum Circle using official logos provided.
Use the configured official website URLs for their links.
Do not invent endorsements, quotations, statistics or unverified claims.

8. Global footer
Create a reusable footer used throughout the website.
Include:
Project identity.
Cyber Security Coalition logo.
Quantum Circle logo.
Main navigation links.
Links to all three canonical volume pages.
Resources and About links.
Configurable contact information.
Configurable privacy and legal links.
Configurable copyright text.
Do not invent contact details or legal information.
Hide unconfigured links or represent them as non-interactive placeholders until the proper destinations are supplied.

9. Routing and starter pages
Implement the following routing behaviour in Round 1.
Homepage
/ — complete homepage.
Topic alias routes
These routes must redirect to the corresponding volume pages. Do not create separate content pages for them.
/understand-pqc → /guides/preparing-for-the-quantum-era
/plan-the-transition → /guides/managing-the-pqc-transition
/implement-pqc → /guides/implementing-the-pqc-migration
Define these mappings centrally and use the routing system's supported redirect mechanism.
Canonical volume routes
Create one empty starter page for each volume:
/guides/preparing-for-the-quantum-era
/guides/managing-the-pqc-transition
/guides/implementing-the-pqc-migration
Other starter pages
Create empty starter pages for:
/resources
/about

Shared starter-page layout
All canonical volume pages and other starter pages must use the same shared layout, including:
Global header.
Breadcrumbs or page-title area.
A minimal content container.
A short, clearly identified placeholder message.
Global footer.
For volume pages, show the correct volume title.
Use a neutral placeholder message such as:
“Content for this page will be developed in a later round.”
The Resources and About pages may display their page title and a similarly clear placeholder.
Do not develop the full content of these pages in Round 1.

Routing rules
Use /guides/... routes as the canonical destinations for the three volumes.
Use /understand-pqc, /plan-the-transition and /implement-pqc only as redirect aliases.
Do not create duplicate page components for the alias routes.
Do not let the theme routes and volume routes display separate, competing versions of the same content.
Ensure redirects work for internal navigation, direct URL entry and browser refresh.
Preserve the existing framework's routing conventions and avoid unnecessary redirect complexity.
Keep the redirect mapping in the central configuration and derive route rules from it where practical.

10. Responsive design
Build a responsive experience for desktop, tablet and mobile.
Ensure:
No horizontal overflow.
Cards stack cleanly on smaller screens.
Navigation remains accessible.
Typography remains readable.
Buttons are easy to tap.
Logos scale without distortion.
Section spacing adapts to the screen width.
The hero remains visually balanced on mobile.
All routes use the same responsive layout foundation.

11. Accessibility, performance and SEO
Implement good web practices:
Semantic HTML.
Logical heading hierarchy.
Descriptive alternative text for meaningful images.
Keyboard-accessible navigation and controls.
Visible focus states.
Sufficient colour contrast.
Reduced-motion support.
Optimised image assets.
Descriptive page titles and meta descriptions.
Clear link labels.
Minimal unnecessary dependencies.
Efficient rendering and loading.

12. Round 1 acceptance checklist
Before finishing, verify the following.
Homepage
All seven sections are present and ordered correctly.
All three volume cards show the correct descriptions and audiences.
The PDF download section is immediately below the volume cards.
The six webpage/PDF destinations are managed separately.
The hero CTA scrolls to the guide section.
Design system
Shared colours, typography, spacing and component styles are defined.
Cards, buttons and headings are consistent.
Logo assets are integrated and replaceable via siteConfig.ts.
No broken images appear.
Navigation and routing
Every navigation item has a working destination.
/understand-pqc redirects to Volume 01.
/plan-the-transition redirects to Volume 02.
/implement-pqc redirects to Volume 03.
Each volume card opens the correct canonical volume page.
There are no duplicate topic pages.
The Resources and About starter pages work.
Direct URL entry and browser refresh work.
Mobile navigation is keyboard accessible.
Configuration
All volume metadata and destinations are centralised.
Route aliases and redirect destinations have one clear source of truth.
PDF links are independent of webpage routes.
Missing links do not lead to broken or misleading destinations.
Scope
The homepage is complete.
Secondary pages contain only their shared starter layout and clearly identified placeholders.
No full secondary-page content is developed yet.
No login, dashboard or payment functionality is added.
The project builds without errors.

Final instruction
Complete Round 1 only.
Build the entire homepage, the foundational design system, global navigation, global footer, central configuration and working routing structure.
The three topic routes must redirect to the respective canonical volume routes. Do not create duplicate content pages for them.
Keep the Resources and About pages as empty starter layouts. Keep all three canonical volume pages as empty starter layouts as well.
Deliver a polished, working foundation ready for subsequent rounds.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c94a8e63-09b8-4f89-9e72-4d603260a64d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
