export const PLACEHOLDER_IMAGE = '/v602-nunoon-33-rippednotes.jpg';

export function isUrl(value?: string | null): value is string {
  return !!value && /^https?:\/\//i.test(value.trim());
}

// Sortable numeric key from `order` ("YYYY-M" or "YYYY-MM"), falling back to `year`.
export function publicationOrderKey(data: { order?: string; year?: number }): number {
  if (data.order) {
    const [y, m] = data.order.split('-').map(Number);
    if (!Number.isNaN(y)) return y * 100 + (Number.isNaN(m) ? 0 : m);
  }
  return (data.year ?? 0) * 100;
}
