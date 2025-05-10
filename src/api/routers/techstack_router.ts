import { Hono } from "@hono/hono";

export const techstackRouter = new Hono().basePath("/techstack");

techstackRouter.get("/");
techstackRouter.post("/");
techstackRouter.patch("/");
techstackRouter.delete("/");
