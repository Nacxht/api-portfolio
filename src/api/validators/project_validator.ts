import * as z from "zod";
import { ValidationError } from "../exceptions/validation_error.ts";

export class ProjectValidator {
  private body;
  private id;

  constructor() {
    this.id = z.ulid();
    this.body = z.object({
      //
    });
  }

  async validateBody(body: any) {
    const result = this.body.safeParse(body);

    if (!result.success) {
      throw new ValidationError("Invalid body format.");
    }
  }

  async validateId(param: any) {
    const result = this.id.safeParse(param);

    if (!result.success) {
      throw new ValidationError("Invalid ID format.");
    }
  }
}
