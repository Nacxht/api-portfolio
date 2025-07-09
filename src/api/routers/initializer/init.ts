import type { App } from "../../../main.ts";
import type { Hono } from "@hono/hono";
import { mainRouter } from "../main_router.ts";
import { introRouter } from "../intro_router.ts";
import { projectRouter } from "../project_router.ts";
import { techstackRouter } from "../techstack_router.ts";
import { experienceRouter } from "../experience_router.ts";
import { contactRouter } from "../contact_router.ts";

const routes: Array<Hono> = [
  mainRouter,
  introRouter,
  projectRouter,
  techstackRouter,
  experienceRouter,
  contactRouter,
];

export function routeInit(app: App): void {
  routes.forEach((route) => {
    app.route("/", route);
  });
}
