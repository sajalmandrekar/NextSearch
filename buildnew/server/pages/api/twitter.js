"use strict";
(() => {
var exports = {};
exports.id = 469;
exports.ids = [469];
exports.modules = {

/***/ 618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
var BASE_URL = new URL("https://api.twitter.com/1.1/search/tweets.json");
async function handler(req, res) {
    let { keyword , max_results =10  } = req.query;
    BASE_URL.searchParams.set("q", keyword);
    BASE_URL.searchParams.set("count", max_results);
    const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
    const defaultFetchOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`
        }
    };
    let response = await fetch(BASE_URL, defaultFetchOptions);
    let result = await response.json();
    res.status(200).json(result);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(618));
module.exports = __webpack_exports__;

})();