import { Hono } from "@hono/hono";
import { EducationHandler } from "../handlers/education_handler.ts";

export const educationRouter = new Hono().basePath("/education");

educationRouter.get("/", EducationHandler.get);

// jwt middleware

educationRouter.post("/", EducationHandler.store);
educationRouter.patch("/:id", EducationHandler.edit);
educationRouter.delete("/:id", EducationHandler.destroy);
