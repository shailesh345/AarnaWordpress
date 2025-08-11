export const isBot = (values: Record<string, any>, startedAt: number) => {
  const honeypot = values.website?.trim();
  const elapsed = Date.now() - startedAt;
  if (honeypot) return true; // hidden field filled
  if (elapsed < 1500) return true; // too fast
  return false;
};
