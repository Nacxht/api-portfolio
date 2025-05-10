import { Hono } from "@hono/hono";

export const educationRouter = new Hono();

educationRouter.get("/");
educationRouter.post("/");
educationRouter.patch("/:id");
educationRouter.delete("/:id");
