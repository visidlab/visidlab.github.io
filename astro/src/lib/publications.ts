export const PLACEHOLDER_IMAGE = '/v602-nunoon-33-rippednotes.jpg';

export function isUrl(value?: string | null): value is string {
  return !!value && /^https?:\/\//i.test(value.trim());
}

// Sortable numeric key from `order` ("YYYY", "YYYY-MM", or "YYYY-MM-DD"), falling back to `year`.
// The optional day lets two papers in the same month be ranked relative to each other.
export function publicationOrderKey(data: { order?: string; year?: number }): number {
  if (data.order) {
    const parts = data.order.split('-');
    const y = Number(parts[0]);
    const m = Number(parts[1] ?? 0);
    const d = Number(parts[2] ?? 0);
    if (!Number.isNaN(y)) {
      return y * 10000 + (Number.isNaN(m) ? 0 : m) * 100 + (Number.isNaN(d) ? 0 : d);
    }
  }
  return (data.year ?? 0) * 10000;
}

// Newest-first publication sort. Ties on `order`/`year` (e.g. no order set, or
// same month) fall back to alphabetical by title, so ordering is always fully
// deterministic without needing manual tiebreak input.
export function comparePublications(
  a: { order?: string; year?: number; title?: string },
  b: { order?: string; year?: number; title?: string },
): number {
  const diff = publicationOrderKey(b) - publicationOrderKey(a);
  if (diff !== 0) return diff;
  return (a.title ?? '').localeCompare(b.title ?? '');
}
