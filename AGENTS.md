<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Use TanStack Start file routes with the global header and footer in the root layout; this preserves consistent navigation and direct-link support.
- Keep volume metadata, navigation, partner assets, PDF URLs and alias mappings in `src/config/siteConfig.ts`; this prevents competing destination definitions.
- Topic routes redirect via `beforeLoad` using the central alias mapping; canonical guide pages alone own volume content.
- Keep homepage sections in `src/components/home` and secondary pages on a shared starter layout; this separates content presentation and future page development.
- Use global semantic CSS tokens and the existing Button component for controls; this keeps presentation consistent and accessible.
