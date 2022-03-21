import Axios from "axios";

const UNSPLASH_ACCESS_KEY = "A7r5HZgBGCqcEZFBQMKVqww319jkuAKDLBA8SSHiDgs";

export const unSplashService = {
  getImgs,
  searchImgs,
};

async function query(keyword = "16:9", page = "1", perPage = "1") {
  const res = await Axios.get(
    `https://api.unsplash.com/search/photos?query=${keyword}&page-${page}&per_page=${perPage}&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
  );
  return res.data;
}

async function getImgs(keyword = "16:9", page = "1", perPage = "6") {
  const { results } = await query(keyword, page, perPage);
  return Promise.resolve(
    results.map((img) => {
      return {
        id: img.id,
        small: img.urls.small,
        full: img.urls.full,
        artistName: img.user.name,
      };
    })
  );
}

async function searchImgs(keyword, page = "1", perPage = "6") {
  const { results } = await query(keyword, page, perPage);
  return Promise.resolve(
    results.map((img) => {
      return { id: img.id, small: img.urls.small, full: img.urls.full };
    })
  );
}
