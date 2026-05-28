# Accessibility notes

This CV landing page is intentionally built as a small accessibility signal, not only a visual resume.

## Implemented patterns

- Semantic landmarks: `header`, `nav`, `main`, `section`, `aside`.
- Skip link for keyboard users.
- Visible focus states on navigation and calls to action.
- Section headings are connected with `aria-labelledby`.
- Decorative icons and visual blobs are hidden from assistive technology with `aria-hidden`.
- The portrait image uses descriptive `alt` text.
- Navigation and mail links use meaningful accessible names.
- Accessibility code stickers are visual only and hidden from assistive technology.
- Motion is reduced when `prefers-reduced-motion: reduce` is enabled.

## Why this matters for the role

The page mirrors the work described in the Brisk Teaching accessibility contractor role: turning audit findings into practical, testable frontend changes. It also highlights production experience with WCAG remediation, NVDA checks, keyboard navigation, focus behavior, semantic HTML, accessible names, and reusable component-level fixes.

## Manual checks before sending

- Tab through the full page.
- Verify skip link appears on focus and lands on main content.
- Check visible focus on navigation and CTA buttons.
- Confirm the portrait loads from `public/monika-kowalewska.jpg`.
- Run Lighthouse accessibility check.
- Run axe DevTools if available.
- Check the page with NVDA on Windows.
