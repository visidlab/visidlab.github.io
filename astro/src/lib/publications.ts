export const PLACEHOLDER_IMAGE = '/v602-nunoon-33-rippednotes.jpg';

export function isUrl(value?: string | null): value is string {
  return !!value && /^https?:\/\//i.test(value.trim());
}
