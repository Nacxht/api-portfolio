import { Context } from "@hono/hono";
import { IntroModel } from "../database/models/intro_model.ts";
import { IntroValidator } from "../validators/intro_validator.ts";

export class IntroHandler {
  private model;
  private validator;

  constructor() {
    this.model = new IntroModel();
    this.validator = new IntroValidator();
  }

  async get(c: Context) {
    const result = await this.model.get();

    return c.json({
      status: "success",
      data: result,
    });
  }

  async store(c: Context) {
    const body = await c.req.json();
    const data = await this.validator.validateBody(body);
    await this.model.create(data);

    return c.json({
      status: "success",
      message: "Successfully created intro data.",
    }, 201);
  }

  async edit(c: Context) {
    const body = await c.req.json();

    const data = await this.validator.validateBody(body);
    await this.model.edit(data);

    return c.json({
      status: "success",
      message: "Successfully edited intro data.",
    });
  }

  async destroy(c: Context) {
    await this.model.delete();

    return c.json({
      status: "success",
      message: "Successfully deleted intro data.",
    });
  }
}
