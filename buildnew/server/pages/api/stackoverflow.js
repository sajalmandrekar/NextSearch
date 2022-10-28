"use strict";
(() => {
var exports = {};
exports.id = 107;
exports.ids = [107];
exports.modules = {

/***/ 830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
var BASE_URL = new URL("https://api.stackexchange.com/2.3/search");
async function handler(req, res) {
    let { keyword , max_results =15  } = req.query;
    BASE_URL.searchParams.set("order", "desc");
    BASE_URL.searchParams.set("sort", "activity");
    BASE_URL.searchParams.set("intitle", keyword);
    BASE_URL.searchParams.set("site", "stackoverflow");
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
var __webpack_exports__ = (__webpack_exec__(830));
module.exports = __webpack_exports__;

})();