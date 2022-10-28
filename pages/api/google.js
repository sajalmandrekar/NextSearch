var BASE_URL = new URL("https://www.googleapis.com/customsearch/v1");
var GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
var SEARCH_ENGINE_ID = process.env.SEARCH_ENGINE_ID;
var MAX_RESULTS = 9;

export default async function handler(req, res) {
    let { keyword } = req.query;

    BASE_URL.searchParams.set("q", keyword);
    BASE_URL.searchParams.set("cx", SEARCH_ENGINE_ID);
    BASE_URL.searchParams.set("key", GOOGLE_API_KEY);
    //BASE_URL.searchParams.set("num", MAX_RESULTS);
    // console.log(BASE_URL);
    let response = await fetch(BASE_URL);
    let result = await response.json();

    res.status(200).json(result);
}
