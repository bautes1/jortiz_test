import { BaseModel } from "./Base.model";
import {
  RedditResponseInterface,
  RedditEntryDataInterface,
  RedditEntryInterface,
  RedditImageInterface,
  RedditImageSourceInterface,
} from "./responses/RedditResponse.model";

export class RedditEntry extends BaseModel {
  response?: RedditEntryInterface;

  getTitle(): string {
    return this.response?.title || "";
  }

  getDefaultImage(): RedditImageSourceInterface | undefined {
    return this.response?.thumbnail ? {
      url: this.response.thumbnail,
      width: this.response.thumbnail_width,
      height: this.response.thumbnail_height
    } : undefined;
  } 

  getImages(): RedditImageInterface[] {
    return this.response?.preview.images || [];
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
