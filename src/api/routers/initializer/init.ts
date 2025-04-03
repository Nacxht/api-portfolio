import type { App } from "../../../main.ts";
import type { Hono } from "@hono/hono";
import { mainRouter } from "../main_router.ts";

const routes: Array<Hono> = [
  mainRouter,
];

export function routeInit(app: App): void {
  routes.forEach((route) => {
    app.route("/", route);
  });
}
