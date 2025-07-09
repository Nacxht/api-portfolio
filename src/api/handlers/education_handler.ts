import { Context } from "@hono/hono";

export class EducationHandler {
  static async get(c: Context) {
    return c.text("Get all educations");
  }

  static async store(c: Context) {
    return c.text("Post education");
  }

  static async edit(c: Context) {
    return c.text("Edit education");
  }

  static async destroy(c: Context) {
    return c.text("Delete education");
  }
}
