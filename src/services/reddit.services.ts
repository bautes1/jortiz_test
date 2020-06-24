import axios from "axios";
import { RedditResponseInterface } from "../models/responses/RedditResponse.model";
import { RedditModel } from "../models/Reddit.model";

export const URLS = {
  get: "https://www.reddit.com/top/.json",
};

const LIMIT = 10;

const getFromReddit = async (
  after?: string,
) => {
  const dataParams = Object.assign({}, { limit: `${LIMIT}`, after: after ? `t3_${after}` : '' });
  const params = new URLSearchParams(dataParams);
  const url = `${URLS.get}?${params}`;
  const response = await axios.get<RedditResponseInterface>(url);
  return RedditModel.fromJSON(response?.data);
};

export default {
  get: getFromReddit,
};
