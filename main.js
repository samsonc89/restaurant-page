"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/load.js */ "./src/modules/load.js");


function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = _modules_load_js__WEBPACK_IMPORTED_MODULE_0__["default"];

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());


/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
  console.log("Yee Haw I get called from load.js!");
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3Qzs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHdEQUFPOztBQUV2Qjs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpbnRNZSBmcm9tIFwiLi9tb2R1bGVzL2xvYWQuanNcIjtcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBidG4uaW5uZXJIVE1MID0gXCJDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhXCI7XG4gIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgY29uc29sZS5sb2coXCJZZWUgSGF3IEkgZ2V0IGNhbGxlZCBmcm9tIGxvYWQuanMhXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9