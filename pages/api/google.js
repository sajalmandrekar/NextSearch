module.exports = {
    get_google_search_response: async function (keyword, max_results = 10) {
        require("dotenv").config();

        const base_url = new URL("https://www.googleapis.com/customsearch/v1");
        const search_engine_id = "875116038a99f4a6c";
        const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

        base_url.searchParams.set("q", keyword);
        base_url.searchParams.set("cx", search_engine_id);
        base_url.searchParams.set("key", GOOGLE_API_KEY);
        base_url.searchParams.set("num", max_results);

        const response = await fetch(base_url)
            .then((response) => response.json())
            .then((json) => console.log(json));

        console.log(base_url);
        return response;
    },
};
