import { Hono } from "@hono/hono";

export const contactRouter = new Hono();

contactRouter.get("/");
contactRouter.post("/");
contactRouter.patch("/");
contactRouter.delete("/");
