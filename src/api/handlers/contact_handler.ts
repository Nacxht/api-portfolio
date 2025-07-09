import { Context } from "@hono/hono";

export class ContactHandler {
  static async get(c: Context) {
    return c.text("Get all contact");
  }

  static async getById(c: Context) {
    return c.text("Get contact details");
  }

  static async store(c: Context) {
    return c.text("Post contact");
  }

  static async edit(c: Context) {
    return c.text("Edit contact");
  }

  static async destroy(c: Context) {
    return c.text("Delete contact");
  }
}
