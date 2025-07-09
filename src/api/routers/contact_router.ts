import { Hono } from "@hono/hono";
import { ContactHandler } from "../handlers/contact_handler.ts";

export const contactRouter = new Hono().basePath("/contact");

contactRouter.get("/", ContactHandler.get);
contactRouter.get("/:id", ContactHandler.getById);

// jwt middleware

contactRouter.post("/", ContactHandler.store);
contactRouter.patch("/:id", ContactHandler.edit);
contactRouter.delete("/:id", ContactHandler.destroy);
