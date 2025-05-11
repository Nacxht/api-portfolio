import { Token } from "../database/kv_schemas.d.ts";
import { createMiddleware } from "@hono/hono/factory";
import { jwtVerify } from "../utils/jwt.ts";

export type JwtEnv = {
  Variables: {
    payload: Token;
  };
};

export const jwtMiddleware = createMiddleware<JwtEnv>(async (c, next) => {
  const authHeader = c.req.header("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const payload = await jwtVerify(token);

    c.set(
      "payload",
      payload as { id: string; userId: string; expiresAt: number },
    );
  } catch (error: any) {
    //
  }
});
