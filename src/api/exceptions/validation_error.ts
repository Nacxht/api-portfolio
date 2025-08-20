import { ClientError } from "./client_error.ts";

export class ValidationError extends ClientError {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}
