import { formatDistanceToNow, fromUnixTime } from "date-fns";
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
  dismissed: boolean = false;
  alreadyseen: boolean = false;

  getId(): string {
    return this.response?.id || "";
  }

  getTitle(): string {
    return this.response?.title || "";
  }

  getDefaultImage(): RedditImageSourceInterface | undefined {
    return this.response && /http/.test(this.response.thumbnail || "")
      ? {
          url: this.response.thumbnail,
          width: this.response.thumbnail_width,
          height: this.response.thumbnail_height,
        }
      : undefined;
  }

  getImages(): RedditImageInterface[] {
    return this.response?.preview?.images || [];
  }

  getTimePassed(): string {
    if (!this.response) return "";
    return formatDistanceToNow(fromUnixTime(this.response.created_utc)).replace(/^\w*/, "");
  }

  getNumberOfComments(): number {
    return this.response?.num_comments || 0;
  }

  notDismissed(): boolean {
    return !this.dismissed;
  }

  setDismissed(isDismissed: boolean): RedditEntry {
    this.dismissed = isDismissed;
    return this;
  }

  setSeen(): RedditEntry {
    this.alreadyseen = true;
    return this;
  }
}

export class RedditModel {
  entries: RedditEntry[] = [];

  static fromJSON(json: RedditResponseInterface) {
    return Object.assign(new this(), {
      entries:
        json.data?.children?.map((c: RedditEntryDataInterface) =>
          RedditEntry.fromJSON({response: c.data, dismissed: false})
        ) || [],
    });
  }
}
