export const GHL_BASE_URL =
  process.env.GHL_BASE_URL || 'https://services.leadconnectorhq.com';

export function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`${name} is not configured`);
  return v;
}

export function ghlHeaders(version: '2021-04-15' | '2021-07-28') {
  const token = requireEnv('GHL_API_KEY');
  return {
    Authorization: `Bearer ${token}`,
    Version: version,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
}
