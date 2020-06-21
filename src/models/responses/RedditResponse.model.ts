export interface RedditImageSourceInterface {
  url: string;
  width: number;
  height: number;
}

export interface RedditImageInterface {
  source: RedditImageSourceInterface;
  resolutions: RedditImageSourceInterface[];
  id: string;
}

export interface RedditEntryInterface {
  subreddit: string;
  author_fullname: string;
  saved: boolean;
  title: string;
  pwls: number;
  downs: number;
  thumbnail_height: number;
  name: string;
  upvote_ratio: number;
  ups: number;
  thumbnail_width: number;
  score: number;
  thumbnail: string;
  created: number;
  over_18: boolean;
  preview: {
    images: RedditImageInterface[];
    enabled: true;
  };
  id: string;
  num_comments: number;
  permalink: string;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: string | null;
  is_video: boolean;
}

export interface RedditEntryDataInterface {
  data: RedditEntryInterface;
}

export interface RedditResponseInterface {
  kind: string;
  data: {
    modhash: string;
    dist: number;
    children: RedditEntryDataInterface[];
    after: string;
    before: string;
  };
}
