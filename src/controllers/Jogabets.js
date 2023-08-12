import * as cheerio from "cheerio";
import fetch from "node-fetch";

const get_data = async () => {
  const url = "";
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html, null, false);

  const movie_titles = $(".movie-title");

  for (const o of movie_titles) {
    console.log(o.children[0].data);
  }
};

export { get_data };
