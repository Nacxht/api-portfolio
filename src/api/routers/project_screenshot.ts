import { Hono } from "@hono/hono";

export const projectScreenshotRouter = new Hono();

projectScreenshotRouter.get("/");
projectScreenshotRouter.post("/");
projectScreenshotRouter.patch("/");
projectScreenshotRouter.delete("/");
