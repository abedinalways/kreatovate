// src/utils/authClient.ts
import bcrypt from "bcryptjs";

type AuthResult = { ok: true; token?: string } | { ok: false; error: string };

const endpoint = process.env.NEXT_PUBLIC_AUTH_ENDPOINT?.trim();
const publicEmail = process.env.NEXT_PUBLIC_UNLOCK_EMAIL?.trim();

const hashB64Raw = process.env.NEXT_PUBLIC_UNLOCK_PASSWORD_HASH_B64;

// strip wrapping quotes if any
const hashB64 = hashB64Raw?.replace(/^['"]|['"]$/g, "")?.trim();

function decodeB64(b64: string) {
  try {
    if (typeof atob === "function") return atob(b64);
    return Buffer.from(b64, "base64").toString("utf8");
  } catch {
    return null;
  }
}

function resolvedHash(): string | null {
  if (hashB64) {
    const decoded = decodeB64(hashB64);
    return decoded ? decoded.trim() : null;
  }
  return null;
}

async function safeJson(res: Response) {
  try {
    return await res.json();
  } catch {
    return null;
  }
}

export async function authenticate(
  email: string,
  password: string
): Promise<AuthResult> {
  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password: password.trim(),
        }),
      });
      const data = await safeJson(res);
      if (res.ok && (data?.ok ?? true)) return { ok: true, token: data?.token };
      return { ok: false, error: data?.error || "Invalid credentials" };
    } catch {
      // fall back to client
    }
  }

  const hash = resolvedHash();
  if (!publicEmail || !hash)
    return { ok: false, error: "Client auth not configured." };

  const emailOk = email.trim().toLowerCase() === publicEmail.toLowerCase();
  if (!emailOk) return { ok: false, error: "Invalid email or password" };

  const pwOk = await bcrypt.compare(password.trim(), hash);
  return pwOk
    ? { ok: true }
    : { ok: false, error: "Invalid email or password" };
}
