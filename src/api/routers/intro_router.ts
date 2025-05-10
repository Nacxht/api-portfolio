import { Hono } from "@hono/hono";

export const introRouter = new Hono().basePath("/intro");

introRouter.get("/:id");
introRouter.post("/");
introRouter.patch("/:id");
introRouter.delete("/:id");
