/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n// Define Monad Testnet\nconst monadTestnet = {\n    id: 10143,\n    name: \"Monad Testnet\",\n    network: \"monad-testnet\",\n    nativeCurrency: {\n        name: \"Monad\",\n        symbol: \"MON\",\n        decimals: 18\n    },\n    rpcUrls: {\n        default: {\n            http: [\n                \"https://testnet-rpc.monad.xyz\"\n            ]\n        },\n        public: {\n            http: [\n                \"https://testnet-rpc.monad.xyz\"\n            ]\n        }\n    },\n    blockExplorers: {\n        default: {\n            name: \"Monad Explorer\",\n            url: \"https://testnet.monadexplorer.com\"\n        }\n    },\n    testnet: true\n};\n// Configure chains\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    monadTestnet\n], [\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__.jsonRpcProvider)({\n        rpc: (chain)=>({\n                http: chain.rpcUrls.default.http[0]\n            })\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Custom Dex\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\n// Custom RainbowKit theme\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/Playground/Documents/Tobi/projects/token-marketplace/pages/_app.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Playground/Documents/Tobi/projects/token-marketplace/pages/_app.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Playground/Documents/Tobi/projects/token-marketplace/pages/_app.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFFRTtBQUNVO0FBTVg7QUFFbUM7QUFDVDtBQUNGO0FBRXhELHVCQUF1QjtBQUN2QixNQUFNUyxZQUFZLEdBQUc7SUFDbkJDLEVBQUUsRUFBRSxLQUFLO0lBQ1RDLElBQUksRUFBRSxlQUFlO0lBQ3JCQyxPQUFPLEVBQUUsZUFBZTtJQUN4QkMsY0FBYyxFQUFFO1FBQ2RGLElBQUksRUFBRSxPQUFPO1FBQ2JHLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLFFBQVEsRUFBRSxFQUFFO0tBQ2I7SUFDREMsT0FBTyxFQUFFO1FBQ1BDLE9BQU8sRUFBRTtZQUFFQyxJQUFJLEVBQUU7Z0JBQUMsK0JBQStCO2FBQUM7U0FBRTtRQUNwREMsTUFBTSxFQUFFO1lBQUVELElBQUksRUFBRTtnQkFBQywrQkFBK0I7YUFBQztTQUFFO0tBQ3BEO0lBQ0RFLGNBQWMsRUFBRTtRQUNkSCxPQUFPLEVBQUU7WUFBRU4sSUFBSSxFQUFFLGdCQUFnQjtZQUFFVSxHQUFHLEVBQUUsbUNBQW1DO1NBQUU7S0FDOUU7SUFDREMsT0FBTyxFQUFFLElBQUk7Q0FDZDtBQUVELG1CQUFtQjtBQUNuQixNQUFNLEVBQUVDLE1BQU0sR0FBRUMsUUFBUSxHQUFFLEdBQUdwQixzREFBZSxDQUMxQztJQUFDSyxZQUFZO0NBQUMsRUFDZDtJQUNFRix3RUFBZSxDQUFDO1FBQ2RrQixHQUFHLEVBQUUsQ0FBQ0MsS0FBSyxHQUFLLENBQUM7Z0JBQUVSLElBQUksRUFBRVEsS0FBSyxDQUFDVixPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUFFLENBQUM7S0FDMUQsQ0FBQztJQUNGVixzRUFBYyxFQUFFO0NBQ2pCLENBQ0Y7QUFFRCxNQUFNLEVBQUVtQixVQUFVLEdBQUUsR0FBRzFCLHlFQUFpQixDQUFDO0lBQ3ZDMkIsT0FBTyxFQUFFLFlBQVk7SUFDckJMLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTU0sV0FBVyxHQUFHeEIsbURBQVksQ0FBQztJQUMvQnlCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVO0lBQ1ZILFFBQVE7Q0FDVCxDQUFDO0FBRUYsMEJBQTBCO0FBQzFCLE1BQU1PLE9BQU8sR0FBRy9CLG1EQUFLLENBQUNHLHFFQUFhLEVBQUUsRUFBRTtJQUNyQzZCLE1BQU0sRUFBRTtRQUNOQyxXQUFXLEVBQUUsU0FBUztRQUN0QkMscUJBQXFCLEVBQUUsTUFBTTtLQUM5QjtDQUNGLENBQUM7QUFFRixTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQy9CLDhDQUFXO1FBQUNnQyxNQUFNLEVBQUVULFdBQVc7a0JBQzlCLDRFQUFDM0Isc0VBQWtCO1lBQUNxQixNQUFNLEVBQUVBLE1BQU07WUFBRWdCLEtBQUssRUFBRVIsT0FBTztzQkFDaEQsNEVBQUNLLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNUOzs7OztZQUNULENBQ2Q7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmlzd2FwLXRva2VuLW1hcmtldHBsYWNlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5pbXBvcnQgbWVyZ2UgZnJvbSBcImxvZGFzaC9tZXJnZVwiO1xuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCB7XG4gIGdldERlZmF1bHRXYWxsZXRzLFxuICBSYWluYm93S2l0UHJvdmlkZXIsXG4gIG1pZG5pZ2h0VGhlbWUsXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5cbmltcG9ydCB7IGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsganNvblJwY1Byb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9qc29uUnBjXCI7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7XG5cbi8vIERlZmluZSBNb25hZCBUZXN0bmV0XG5jb25zdCBtb25hZFRlc3RuZXQgPSB7XG4gIGlkOiAxMDE0MyxcbiAgbmFtZTogXCJNb25hZCBUZXN0bmV0XCIsXG4gIG5ldHdvcms6IFwibW9uYWQtdGVzdG5ldFwiLFxuICBuYXRpdmVDdXJyZW5jeToge1xuICAgIG5hbWU6IFwiTW9uYWRcIixcbiAgICBzeW1ib2w6IFwiTU9OXCIsXG4gICAgZGVjaW1hbHM6IDE4LFxuICB9LFxuICBycGNVcmxzOiB7XG4gICAgZGVmYXVsdDogeyBodHRwOiBbXCJodHRwczovL3Rlc3RuZXQtcnBjLm1vbmFkLnh5elwiXSB9LFxuICAgIHB1YmxpYzogeyBodHRwOiBbXCJodHRwczovL3Rlc3RuZXQtcnBjLm1vbmFkLnh5elwiXSB9LFxuICB9LFxuICBibG9ja0V4cGxvcmVyczoge1xuICAgIGRlZmF1bHQ6IHsgbmFtZTogXCJNb25hZCBFeHBsb3JlclwiLCB1cmw6IFwiaHR0cHM6Ly90ZXN0bmV0Lm1vbmFkZXhwbG9yZXIuY29tXCIgfSxcbiAgfSxcbiAgdGVzdG5ldDogdHJ1ZSxcbn07XG5cbi8vIENvbmZpZ3VyZSBjaGFpbnNcbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbbW9uYWRUZXN0bmV0XSxcbiAgW1xuICAgIGpzb25ScGNQcm92aWRlcih7XG4gICAgICBycGM6IChjaGFpbikgPT4gKHsgaHR0cDogY2hhaW4ucnBjVXJscy5kZWZhdWx0Lmh0dHBbMF0gfSksXG4gICAgfSksXG4gICAgcHVibGljUHJvdmlkZXIoKSwgLy8gZmFsbGJhY2sgcHJvdmlkZXJcbiAgXVxuKTtcblxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6IFwiQ3VzdG9tIERleFwiLFxuICBjaGFpbnMsXG59KTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXIsXG59KTtcblxuLy8gQ3VzdG9tIFJhaW5ib3dLaXQgdGhlbWVcbmNvbnN0IG15VGhlbWUgPSBtZXJnZShtaWRuaWdodFRoZW1lKCksIHtcbiAgY29sb3JzOiB7XG4gICAgYWNjZW50Q29sb3I6IFwiIzE4MTgxYlwiLFxuICAgIGFjY2VudENvbG9yRm9yZWdyb3VuZDogXCIjZmZmXCIsXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlciBjaGFpbnM9e2NoYWluc30gdGhlbWU9e215VGhlbWV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICA8L1dhZ21pQ29uZmlnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJtZXJnZSIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwibWlkbmlnaHRUaGVtZSIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwianNvblJwY1Byb3ZpZGVyIiwicHVibGljUHJvdmlkZXIiLCJtb25hZFRlc3RuZXQiLCJpZCIsIm5hbWUiLCJuZXR3b3JrIiwibmF0aXZlQ3VycmVuY3kiLCJzeW1ib2wiLCJkZWNpbWFscyIsInJwY1VybHMiLCJkZWZhdWx0IiwiaHR0cCIsInB1YmxpYyIsImJsb2NrRXhwbG9yZXJzIiwidXJsIiwidGVzdG5ldCIsImNoYWlucyIsInByb3ZpZGVyIiwicnBjIiwiY2hhaW4iLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJteVRoZW1lIiwiY29sb3JzIiwiYWNjZW50Q29sb3IiLCJhY2NlbnRDb2xvckZvcmVncm91bmQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();