import { InvariantError } from "../../exceptions/invariant_error.ts";
import { ClientError } from "../../exceptions/client_error.ts";
import { Intro } from "../schemas/intro_schema.d.ts";
import { Model } from "./base_model.ts";

export class IntroModel extends Model {
  async get() {
    const kvKey = ["intro"];
    const { value } = await this.kv.get<Intro>(kvKey);

    return value;
  }

  async create(newData: Intro) {
    const kvKey = ["intro"];
    const entry = await this.get();

    if (entry) {
      throw new InvariantError(
        "Failed to create Intro data. Data already exist.",
      );
    }

    const result = await this.kv.atomic()
      .check({
        key: kvKey,
        versionstamp: null,
      })
      .set(kvKey, newData)
      .commit();

    if (!result.ok) {
      throw new InvariantError("Failed to create intro data.");
    }
  }

  async edit(editedData: Intro) {
    const kvKey = ["intro"];
    const entry = await this.kv.get<Intro>(kvKey);

    if (!entry) {
      throw new ClientError(
        "Failed to edit intro data. Intro don't have any data yet.",
        404,
      );
    }

    const result = await this.kv.atomic()
      .check(entry)
      .set(kvKey, editedData)
      .commit();

    if (!result.ok) {
      throw new InvariantError("Failed to edit intro data.");
    }
  }

  async delete() {
    const kvKey = ["intro"];
    const entry = await this.kv.get<Intro>(kvKey);

    if (!entry.value) {
      throw new ClientError(
        "Failed to delete intro data. Intro don't have any data yet.",
        404,
      );
    }

    const result = await this.kv.atomic()
      .check(entry)
      .delete(kvKey)
      .commit();

    if (!result.ok) {
      throw new InvariantError("Failed to delete intro data.");
    }
  }
}
