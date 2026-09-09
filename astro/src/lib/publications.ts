export const PLACEHOLDER_IMAGE = '/v602-nunoon-33-rippednotes.jpg';

export function isUrl(value?: string | null): value is string {
  return !!value && /^https?:\/\//i.test(value.trim());
}

// Sortable numeric key from `order` ("YYYY", "YYYY-MM", or "YYYY-MM-DD"), falling back to `year`.
// The optional day lets two papers in the same month be ranked relative to each other.
export function publicationOrderKey(data: { order?: string; year?: number }): number {
  if (data.order) {
    const [y, m, d] = data.order.split('-').map(Number);
    if (!Number.isNaN(y)) {
      return y * 10000 + (Number.isNaN(m) ? 0 : m) * 100 + (Number.isNaN(d) ? 0 : d);
    }
  }
  return (data.year ?? 0) * 10000;
}
