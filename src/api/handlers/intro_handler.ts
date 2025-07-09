import { Context } from "@hono/hono";

export class IntroHandler {
  static async get(c: Context) {
    return c.text("Intro page");
  }

  static async store(c: Context) {
    return c.text("Post intro");
  }

  static async edit(c: Context) {
    return c.text("Edit intro");
  }

  static async destroy(c: Context) {
    return c.text("Delete intro");
  }
}
