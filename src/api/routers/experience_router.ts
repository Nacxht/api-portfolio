import { Hono } from "@hono/hono";

export const experienceRouter = new Hono();

experienceRouter.get("/");
experienceRouter.post("/");
experienceRouter.patch("/");
experienceRouter.delete("/");
