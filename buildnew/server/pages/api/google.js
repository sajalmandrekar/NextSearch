"use strict";
(() => {
var exports = {};
exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
var BASE_URL = new URL("https://www.googleapis.com/customsearch/v1");
var GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
var SEARCH_ENGINE_ID = "875116038a99f4a6c";
var MAX_RESULTS = 9;
async function handler(req, res) {
    let { keyword  } = req.query;
    BASE_URL.searchParams.set("q", keyword);
    BASE_URL.searchParams.set("cx", SEARCH_ENGINE_ID);
    BASE_URL.searchParams.set("key", GOOGLE_API_KEY);
    //BASE_URL.searchParams.set("num", MAX_RESULTS);
    console.log(BASE_URL);
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
var __webpack_exports__ = (__webpack_exec__(526));
module.exports = __webpack_exports__;

})();