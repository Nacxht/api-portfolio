import { Techstack, TechstackCategory } from "../kv_schemas.d.ts";
import { Model } from "./base_model.ts";

class TechstackModel extends Model {
  async get(category?: TechstackCategory, id?: string) {
    //
  }

  async create(data: Techstack) {
    //
  }

  async edit(id: string, data: Techstack) {
    //
  }

  async delete(id: string) {
    //
  }
}
