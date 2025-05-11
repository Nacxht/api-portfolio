import { Project } from "../kv_schemas.d.ts";
import { Model } from "./base_model.ts";

export class ProjectModel extends Model {
  async get(id?: string, offset?: string, limit?: string) {
    //
  }

  async create(data: Project) {
    //
  }

  async edit(id: string, data: Project) {
    //
  }

  async delete(id: string) {
    //
  }
}
