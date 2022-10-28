"use strict";
(() => {
var exports = {};
exports.id = 713;
exports.ids = [713];
exports.modules = {

/***/ 223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
var BASE_URL = new URL("https://api.github.com/search/repositories");
async function handler(req, res) {
    let { keyword , max_results =15  } = req.query;
    BASE_URL.searchParams.set("q", keyword);
    BASE_URL.searchParams.set("per_page", max_results);
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
var __webpack_exports__ = (__webpack_exec__(223));
module.exports = __webpack_exports__;

})();