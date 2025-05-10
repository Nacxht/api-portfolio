import { Hono } from "@hono/hono";

export const projectRouter = new Hono().basePath("project");

projectRouter.get("/");
projectRouter.post("/");
projectRouter.patch("/:id");
projectRouter.delete("/:id");
