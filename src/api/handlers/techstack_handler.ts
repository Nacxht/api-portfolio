import { Context } from "@hono/hono";

export class TechstackHandler {
  static async get(c: Context) {
    return c.text("Get tech stack");
  }

  static async store(c: Context) {
    return c.text("Post tech stack");
  }

  static async edit(c: Context) {
    return c.text("Edit tech stack");
  }
}
