import { Hono } from "@hono/hono";
import { IntroHandler } from "../handlers/intro_handler.ts";

export const introRouter = new Hono().basePath("/intro");
const introHandler = new IntroHandler();

introRouter.get("/", introHandler.get);

// jwt middleware

introRouter.post("/", introHandler.store);
introRouter.put("/", introHandler.edit);
introRouter.delete("/", introHandler.destroy);
