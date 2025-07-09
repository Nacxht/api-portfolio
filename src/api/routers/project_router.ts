import { Hono } from "@hono/hono";
import { ProjectHandler } from "../handlers/project_handler.ts";

export const projectRouter = new Hono().basePath("project");

projectRouter.get("/", ProjectHandler.get);

// jwt middleware

projectRouter.post("/", ProjectHandler.store);
projectRouter.patch("/:id", ProjectHandler.edit);
projectRouter.delete("/:id", ProjectHandler.destroy);
