import { ClientError } from "../../exceptions/client_error.ts";
import { InvariantError } from "../../exceptions/invariant_error.ts";
import { Project } from "../schemas/project_schema.d.ts";
import { Model } from "./base_model.ts";

export class ProjectModel extends Model {
  async get(lastKey?: string, limit: number = 6) {
    const kvKey = ["projects"];
    const entries = this.kv.list<Project>({ prefix: kvKey }, { limit: limit });
  }

  async gets(id: string) {
    const kvKey = ["projects", id];
    const { value } = await this.kv.get<Project>(kvKey);

    return value;
  }

  async create(newData: Project) {
    const kvKey = ["projects", newData.id];
    const entry = await this.gets(newData.id);

    if (entry) {
      throw new InvariantError(
        "Failed to create a project's data. Current ID already exist.",
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
      throw new InvariantError("Failed to create a project data.");
    }
  }

  async edit(id: string, editedData: Project) {
    const kvKey = ["projects", id];
    const entry = await this.kv.get<Project>(kvKey);

    if (!entry.value) {
      throw new ClientError(
        "Failed to edit a project data. Data not found.",
        404,
      );
    }

    const result = await this.kv.atomic()
      .check(entry)
      .set(kvKey, editedData)
      .commit();

    if (!result.ok) {
      throw new InvariantError("Failed to edit a project data.");
    }
  }

  async delete(id: string) {
    const kvKey = ["projects", id];
    const entry = await this.kv.get<Project>(kvKey);

    if (!entry.value) {
      throw new ClientError(
        "Failed to delete a project data. Data not found.",
        404,
      );
    }

    const result = await this.kv.atomic()
      .check(entry)
      .delete(kvKey)
      .commit();

    if (!result.ok) {
      throw new InvariantError("Failed to delete a project data.");
    }
  }
}
