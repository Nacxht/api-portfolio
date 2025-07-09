import { Context } from "@hono/hono";

export class ExperienceHandler {
  static async get(c: Context) {
    return c.text("Get experiences");
  }

  static async store(c: Context) {
    return c.text("Post experience");
  }

  static async edit(c: Context) {
    return c.text("Edit experience");
  }

  static async destroy(c: Context) {
    return c.text("Delete experience");
  }
}
