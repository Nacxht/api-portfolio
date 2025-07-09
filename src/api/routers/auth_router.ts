import { Hono } from "@hono/hono";

export const authRouter = new Hono().basePath("/auth");
