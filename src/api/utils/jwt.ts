import { decode, sign, verify } from "@hono/hono/jwt";

const secret = await crypto.subtle.generateKey(
  {
    name: "HMAC",
    hash: "SHA-512",
  },
  true,
  ["sign", "verify"],
);

export async function jwtSign(
  payload: object,
  expiresIn: number,
): Promise<string> {
  const token = await sign({ ...payload, exp: expiresIn }, secret, "HS512");
  return token;
}

export async function jwtVerify(token: string) {
  const decoded = await verify(token, secret, "HS512");
  return decoded;
}

export function jwtDecode(token: string) {
  const { header, payload } = decode(token);
  return { header, payload };
}
