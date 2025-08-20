import * as z from "zod";
import { ValidationError } from "../exceptions/validation_error.ts";

export class IntroValidator {
  private body;

  constructor() {
    this.body = z.object({
      name: z.string().min(3).max(50),
      badges: z.array(z.string()).min(1),
      selfdesc: z.string().min(5),
    });
  }

  async validateBody(body: any) {
    const result = this.body.safeParse(body);

    if (!result.success) {
      throw new ValidationError("Invalid body format.");
    }

    return result.data;
  }
}
