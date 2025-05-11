import { kv as main_kv } from "../kv_db.ts";
import type { KV } from "../kv_db.ts";

export class Model {
  protected kv: KV;

  constructor() {
    this.kv = main_kv;
  }
}
