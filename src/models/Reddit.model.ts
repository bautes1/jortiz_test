import { BaseModel } from "./Base.model";
import {
  RedditResponseInterface,
  RedditEntryDataInterface,
  RedditEntryInterface,
} from "./responses/RedditResponse.model";

export class RedditEntry extends BaseModel {
  response?: RedditEntryInterface;
  getTitle(): string {
    return this.response?.title || "";
  }
}

export class RedditModel {
  entries: RedditEntry[] = [];

  static fromJSON(json: RedditResponseInterface) {
    return Object.assign(new this(), {
      entries:
        json.data?.children?.map((c: RedditEntryDataInterface) =>
          RedditEntry.fromJSON(c.data)
        ) || [],
    });
  }
}
