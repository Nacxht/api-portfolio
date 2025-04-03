import { Hono } from "@hono/hono";

export const mainRouter = new Hono();

mainRouter.get("/", (c) => c.text("Hello Hono", 200));
