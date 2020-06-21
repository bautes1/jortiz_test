import axios from "axios";
import { RedditResponseInterface } from "../models/responses/RedditResponse.model";
import { RedditModel } from "../models/Reddit.model";

export const URLS = {
  get: 'https://www.reddit.com/top/.json'
}

const getFromReddit = async (limit: number = 50) => {
  const url = `${URLS.get}?count=${limit}`;
  const response = await axios.get<RedditResponseInterface>(url);
  return RedditModel.fromJSON(response?.data);
};

export default {
  get: getFromReddit,
};
