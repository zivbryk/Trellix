import Axios from "axios";

const UNSPLASH_ACCESS_KEY = "A7r5HZgBGCqcEZFBQMKVqww319jkuAKDLBA8SSHiDgs";

export const unSplashService = {
  getTenImgs,
  searchImgs,
};

async function query(keyword = "16:9") {
  const res = await Axios.get(
    `https://api.unsplash.com/search/photos?query=${keyword}&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
  );
  return res.data;
}

async function getTenImgs() {
  const { results } = await query();
  return Promise.resolve(
    results.map((img) => {
      return { id: img.id, small: img.urls.small, full: img.urls.full };
    })
  );
}

async function searchImgs(keyword) {
  const { results } = await query(keyword);
  return Promise.resolve(
    results.map((img) => {
      return { id: img.id, small: img.urls.small, full: img.urls.full };
    })
  );
}
