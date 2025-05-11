import { Hono } from "@hono/hono";

export const introRouter = new Hono().basePath("/intro");
export type IntroRouter = typeof introRouter;

introRouter.get("/:id", (c) => c.text("GET intro"));
introRouter.post("/");
introRouter.patch("/:id");
introRouter.delete("/:id");
