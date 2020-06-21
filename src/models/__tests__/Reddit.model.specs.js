import { RedditModel } from "../Reddit.model";

describe("RedditModel methods", () => {
  it("constructs", () => {
    const myInst = RedditModel.fromJSON({});
    expect(myInst instanceof RedditModel);
  });

  it("getPosts success", () => {
    const mockedTitle = "He lost a lot of pounds.";
    const myInst = RedditModel.fromJSON({
      data: {
        children: [
          {
            data: {
              title: mockedTitle,
              hidden: false,
              pwls: 7,
              link_flair_css_class: null,
              downs: 0,
              thumbnail_height: 140,
              top_awarded_type: null,
              hide_score: false,
              thumbnail: "",
              edited: false,
              preview: {
                images: [],
              },
              created_utc: 1592678542.0,
              num_crossposts: 7,
              media: null,
              is_video: false,
            },
          },
        ],
      },
    });
    expect(myInst.entries[0].getTitle()).toEqual(mockedTitle);
  });

  it("getPosts failed", () => {
    const myInst = RedditModel.fromJSON({});
    expect(myInst.entries).toEqual([]);
  });
});
