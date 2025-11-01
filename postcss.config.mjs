/**
 * PostCSS configuration — only include PostCSS-compatible fields here.
 * Tailwind-specific config (content, theme, etc.) belongs in `tailwind.config.mjs`.
 */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
