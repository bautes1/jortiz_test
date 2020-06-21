import axios from "axios";
import service, { URLS } from "../reddit.services";
import { RedditModel } from "../../models/Reddit.model";

describe("My Test Suite", () => {
  it("succesful response", async () => {
    axios.get.mockResolvedValue({ data: {} });

    const data = await service.get();
    expect(data instanceof RedditModel).toBeTruthy();
    expect(data.entries).toEqual([ ]);
  });

  it("failed response", () => {
    axios.get.mockImplementation(() => Promise.reject({ data: null }));

    service.get().catch((data) => {
      expect(data instanceof RedditModel).toBeFalsy();
      expect(data.response).toBeFalsy();
    });
  });
});
