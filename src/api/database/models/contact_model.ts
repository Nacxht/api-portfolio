import { Contact } from "../kv_schemas.d.ts";
import { Model } from "./main_model.ts";

export class ContactModel extends Model {
  async get(id?: string) {
    //
  }

  async create(data: Contact) {
    //
  }

  async edit(id: string, data: Contact) {
    //
  }

  async delete(id: string) {
    //
  }
}
