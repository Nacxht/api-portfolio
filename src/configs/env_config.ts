import "@std/dotenv/load";

const ENVIRONMENT: string = Deno.env.get("ENV") || "";
const CORS_ALLOWED_ORIGIN: string[] = (
  Deno.env.get("CORS_ALLOWED_ORIGIN") || ""
).split(" ");

const KV_URL: string = Deno.env.get("KV_URL") || "";

export const config = {
  server: {
    environment: ENVIRONMENT,
    allowedOrigin: CORS_ALLOWED_ORIGIN,
    kv_url: KV_URL,
  },
};
