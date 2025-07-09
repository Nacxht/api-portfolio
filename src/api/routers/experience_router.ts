import { Hono } from "@hono/hono";
import { ExperienceHandler } from "../handlers/experience_handler.ts";

export const experienceRouter = new Hono().basePath("/experience");

experienceRouter.get("/", ExperienceHandler.get);

// jwt middleware

experienceRouter.post("/", ExperienceHandler.store);
experienceRouter.patch("/", ExperienceHandler.edit);
experienceRouter.delete("/", ExperienceHandler.destroy);
