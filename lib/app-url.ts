/**
 * Builds the app URL with UTM parameters only.
 * No `screen`, no `plan` — the app is a SPA and does not use these for routing.
 * Always same-window navigation (window.location.href).
 */
export function buildAppUrl({ utm_content }: { utm_content: string }): string {
  const params = new URLSearchParams({
    utm_source: 'landing',
    utm_medium: 'cta',
    utm_content,
  });
  return `https://app.drumion.app/?${params.toString()}`;
}
