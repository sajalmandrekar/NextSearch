"use strict";
(() => {
var exports = {};
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
var BASE_URL = new URL("https://youtube.googleapis.com/youtube/v3/search");
var API_KEY = process.env.YOUTUBE_API_KEY;
var MAX_RESULTS = 15;
async function handler(req, res) {
    let { keyword  } = req.query;
    BASE_URL.searchParams.set("part", "snippet");
    BASE_URL.searchParams.set("q", keyword);
    BASE_URL.searchParams.set("maxResults", MAX_RESULTS);
    BASE_URL.searchParams.set("key", API_KEY);
    let response = await fetch(BASE_URL);
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
var __webpack_exports__ = (__webpack_exec__(690));
module.exports = __webpack_exports__;

})();