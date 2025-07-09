import { Hono } from "@hono/hono";
import { IntroHandler } from "../handlers/intro_handler.ts";

export const introRouter = new Hono().basePath("/intro");

introRouter.get("/:id", IntroHandler.get);

// jwt middleware

introRouter.post("/", IntroHandler.store);
introRouter.patch("/:id", IntroHandler.edit);
introRouter.delete("/:id", IntroHandler.destroy);
