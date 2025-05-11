import { decode, sign, verify } from "@hono/hono/jwt";

const secret = await crypto.subtle.generateKey(
  {
    name: "HMAC",
    hash: "SHA-512",
  },
  true,
  ["sign", "verify"],
);

async function jwtSign(payload: object, expiresIn: number): Promise<string> {
  const token = await sign({ ...payload, exp: expiresIn }, secret, "HS512");
  return token;
}

async function jwtVerify(token: string) {
  const decoded = await verify(token, secret, "HS512");
  return decoded;
}

async function jwtDecode(token: string) {
  const { header, payload } = await decode(token);
  return { header, payload };
}
