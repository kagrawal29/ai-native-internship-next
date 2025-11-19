# AI Native Internship Website

Next.js (App Router) port of the original static `index.html` + `styles.css` landing page.

## Local Development

1. Ensure Node 20 is on your `PATH` (Homebrew install):

   ```bash
   export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
   ```

2. Install deps (first run only):

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

   Default port is `3000` (Next will auto-bump if it is occupied).

## Project Structure

- `app/layout.tsx` – global HTML shell + metadata, imports the legacy CSS (`app/styles.css`).
- `app/page.tsx` – composes the landing page from section components.
- `app/components/*` – one component per section (Header, Hero, Program, Journey, etc.).
- `app/styles.css` – original handcrafted CSS from the static site.
- `public/curriculum.md` – linked asset used by the “Tools & stack” section.

## Scripts

- `npm run dev` – start Next.js in development mode.
- `npm run lint` – ESLint check (must be clean before shipping).

## Notes

- Keep visual parity with the static version; any design/motion work happens in later phases.
- Anchor links (`#program`, `#journey`, …) must keep working across sections.
