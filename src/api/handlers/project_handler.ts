import { Context } from "@hono/hono";

export class ProjectHandler {
  static async get(c: Context) {
    return c.text("Get projects");
  }

  static async store(c: Context) {
    return c.text("Post project");
  }

  static async edit(c: Context) {
    return c.text("Edit project");
  }

  static async destroy(c: Context) {
    return c.text("Delete project");
  }
}
