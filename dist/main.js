/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.scores {\n    margin-bottom: 20px;\n}\n\n#playerShipsLeft, #cpuShipsLeft {\n    color: white;\n    font-weight: 900;\n    font-size: 22px;\n}\n\n#turnIndicator {\n    color: white;\n    font-size: 25px;\n}\n\n.boardSquare[data-state=\"hit\"]{\n    background-color: red;\n}\n.boardSquare[data-state=\"missed\"] {\n    background-color:blue;\n}\n\n\n.boardSquare {\n    width: 50px;\n    height: 50px;\n    border: 1px solid black;\n    background-color: gray;\n    transition: all .1s ease-in-out;\n}\n\n.boardSquare[data-ship=\"ship\"] {\n    background-color: white;\n}\n\n.boardSquare:not(.boardSquare[data-state=\"missed\"]):not(.boardSquare[data-state=\"hit\"]):hover {\n    background-color: rgba(255, 255, 255, 0.658);\n    transform: scale(1.1);\n}\n\n.boards{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 741px;\n    min-height: 100%;\n    background-color: rgb(61, 61, 61);\n    gap: 20px;\n}\n\n.scores {\n    display: flex;\n    justify-content: space-around;\n    gap: 100px;\n\n}\n\n#playerBoard, #cpuBoard {\n    display: grid;\n    place-items: center;\n}\n\nbody {\n    background-color: #242424;\n    display: grid;\n    place-items: center;\n\n}\n\n.gameOver {\n    display: none;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.438);\n\n}\n\n#gameOverText, #winner {\n    color: white;\n    font-size: 40px;\n    font-weight: 900;\n    text-shadow: 1px 1px .5px white;\n}\n\n.restartBtn {\n    font-size: 20px;\n    width: 100px;\n    padding: 5px;\n    cursor: pointer;\n    transition: all .2s ease-in-out;\n    border-radius: 7%;\n}\n\n.restartBtn:hover {\n    transform: scale(1.2) ;\n    background-color: white;\n}\n\n.restartBtn:active {\n    box-shadow: inset 1px 1px 2px black;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ComputerAi.js":
/*!***************************!*\
  !*** ./src/ComputerAi.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ComputerAi)\n/* harmony export */ });\nclass ComputerAi {\n  constructor(gameboardSize) {\n    this.gameboardSize = gameboardSize;\n    this.usedCords = new Set();\n  }\n\n  getRandomCords() {\n    let cordX;\n    let cordY;\n    do {\n      cordX = getRandomInt(this.gameboardSize);\n      cordY = getRandomInt(this.gameboardSize);\n    } while (\n      !cordX > 0 &&\n      !cordY <= this.gameboardSize &&\n      !this.usedCords.has(`${cordX},${cordY}`)\n    );\n\n    this.usedCords.add(`${cordX},${cordY}`);\n    return [cordX, cordY];\n  }\n}\n\nfunction getRandomInt(max) {\n  return Math.floor(Math.random() * max);\n}\n\n\n//# sourceURL=webpack://battleship/./src/ComputerAi.js?");

/***/ }),

/***/ "./src/CreateboardDom.js":
/*!*******************************!*\
  !*** ./src/CreateboardDom.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBoardSquare: () => (/* binding */ createBoardSquare),\n/* harmony export */   createGameboardDom: () => (/* binding */ createGameboardDom)\n/* harmony export */ });\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n\n\nfunction createGameboardDom(boardSize, id) {\n  const gameboard = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard(boardSize);\n  const wrapper = document.createElement(\"div\");\n  wrapper.id = id;\n  wrapper.style = `display:grid; grid-template-columns: repeat(${boardSize}, 1fr)`;\n  const domBoard = document.getElementById(\"board\");\n  for (let x = 0; x < gameboard.boardSize; x++) {\n    for (let y = 0; y < gameboard.boardSize; y++) {\n      wrapper.append(createBoardSquare(`${id}x${x}y${y}`, [x, y]));\n    }\n  }\n  document.getElementById(\"boards\").append(wrapper);\n  return gameboard;\n}\n\nfunction createBoardSquare(id, [datasetX, datasetY]) {\n  const square = document.createElement(\"div\");\n  square.classList.add(\"boardSquare\");\n  square.id = id;\n  square.dataset.x = datasetX;\n  square.dataset.y = datasetY;\n\n  return square;\n}\n\n\n//# sourceURL=webpack://battleship/./src/CreateboardDom.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n\n\nclass Gameboard {\n  constructor(boardSize) {\n    this.missedShots = new Set();\n    this.hitShots = new Set();\n    this.boardSize = boardSize;\n    this.shipsLeft = 0;\n    this.boardGraph = new Map();\n    this.buildBoard();\n  }\n\n  buildBoard() {\n    for (let x = 0; x < this.boardSize; x++) {\n      for (let y = 0; y < this.boardSize; y++) {\n        this.boardGraph.set(`${x},${y}`, null);\n      }\n    }\n  }\n\n  isValidPosition([x, y]) {\n    return x >= 0 && x < this.boardSize && y >= 0 && y < this.boardSize;\n  }\n\n  placeShip([x, y], length, direction = \"vertical\") {\n    const ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(length);\n    if (\n      direction === \"vertical\" &&\n      this.isValidPosition([x, y]) &&\n      this.isValidPosition([x + length, y]) &&\n      this.canPlaceShip([x, y], length, direction)\n    ) {\n      let index = 0;\n      let currentX = x;\n\n      while (index < length) {\n        let position = `${currentX},${y}`;\n        this.boardGraph.set(position, ship);\n        index++;\n        currentX++;\n      }\n\n      this.shipsLeft++;\n      return true;\n    } else if (\n      direction === \"horizontal\" &&\n      this.isValidPosition([x, y]) &&\n      this.isValidPosition([x, y + length]) &&\n      this.canPlaceShip([x, y], length, direction)\n    ) {\n      let index = 0;\n      let currentY = y;\n      while (index < length) {\n        let position = `${x},${currentY}`;\n        this.boardGraph.set(position, ship);\n        index++;\n        currentY++;\n      }\n      this.shipsLeft++;\n      return true;\n    }\n    return false;\n  }\n\n  placeAllShips(amount) {\n    for (let i = 1; i < amount + 1; i++) {\n      let isPlace = false;\n      while (!isPlace) {\n        const direction = Math.random() < 0.5 ? \"horizontal\" : \"vertical\";\n        if (this.placeShip(getRandomCords(this.boardSize), i, direction)) {\n          isPlace = true;\n        }\n      }\n    }\n  }\n\n  canPlaceShip([x, y], length, direction) {\n    const positionsToVisit = [];\n    if (direction === \"vertical\")\n      for (let i = x; i < x + length; i++) {\n        positionsToVisit.push(`${i},${y}`);\n      }\n    else if (direction === \"horizontal\") {\n      for (let i = y; i < y + length; i++) {\n        positionsToVisit.push(`${x},${i}`);\n      }\n    }\n    return positionsToVisit.every(\n      (position) => this.boardGraph.get(position) === null\n    );\n  }\n\n  recieveAttack([x, y]) {\n    if (\n      this.isValidPosition([x, y]) &&\n      this.boardGraph.get(`${x},${y}`) !== null\n    ) {\n      if (!this.hitShots.has(`${x},${y}`)) {\n        const ship = this.boardGraph.get(`${x},${y}`);\n        ship.hit();\n        if (ship.isSunk()) this.shipsLeft--;\n        this.hitShots.add(`${x},${y}`);\n        return true;\n      }\n    } else if (\n      this.isValidPosition([x, y]) &&\n      this.boardGraph.get(`${x},${y}`) === null\n    ) {\n      console.log(\"You Missed The Shot!\");\n      this.missedShots.add(`${x},${y}`);\n      return false;\n    }\n  }\n\n  clearBoard() {\n    this.shipsLeft = 0;\n    this.boardGraph = this.buildBoard();\n  }\n}\n\nfunction getRandomCords(boardSize) {\n  return [\n    Math.floor(Math.random() * boardSize),\n    Math.floor(Math.random() * boardSize),\n  ];\n}\n\n\n//# sourceURL=webpack://battleship/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(length) {\n        this._length = length;\n        this._hits = 0;\n    }\n\n    hit() {\n        this._hits++;\n    }\n\n    isSunk() {\n        return this._hits >= this._length;\n    }\n\n    get hits() { return this._hits }\n}\n\n//# sourceURL=webpack://battleship/./src/Ship.js?");

/***/ }),

/***/ "./src/domModule.js":
/*!**************************!*\
  !*** ./src/domModule.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeTurnsIndicator: () => (/* binding */ changeTurnsIndicator),\n/* harmony export */   displayGameOver: () => (/* binding */ displayGameOver),\n/* harmony export */   displayPlayerShips: () => (/* binding */ displayPlayerShips),\n/* harmony export */   updateScore: () => (/* binding */ updateScore)\n/* harmony export */ });\nfunction displayGameOver(winner) {\n  const gameOverScreen = document.querySelector(\".gameOver\");\n  const winnerText = document.getElementById(\"winner\");\n  winnerText.innerText = `${winner} Wins!`;\n  gameOverScreen.style.display = \"flex\";\n}\n\nfunction updateScore(player, score) {\n  if (player === \"player\") {\n    const playerScore = document.getElementById(\"playerShipsLeft\");\n    playerScore.innerText = `Player ships left: ${score}`;\n  } else {\n    const cpuScore = document.getElementById(\"cpuShipsLeft\");\n    cpuScore.innerText = `Cpu ships left: ${score}`;\n  }\n}\n\nfunction changeTurnsIndicator() {\n  const turnIndicator = document.getElementById(\"turnIndicator\");\n  turnIndicator.innerText = turnIndicator.innerText === \"<\" ? \">\" : \"<\";\n}\n\nfunction displayPlayerShips(gameboard, id) {\n  for (let x = 0; x < gameboard.boardSize; x++) {\n    for (let y = 0; y < gameboard.boardSize; y++) {\n      if (gameboard.boardGraph.get(`${x},${y}`)) {\n        document.querySelector(`#${id}x${x}y${y}`).dataset.ship = \"ship\";\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/domModule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _CreateboardDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateboardDom.js */ \"./src/CreateboardDom.js\");\n/* harmony import */ var _ComputerAi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputerAi.js */ \"./src/ComputerAi.js\");\n/* harmony import */ var _domModule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domModule.js */ \"./src/domModule.js\");\n\n\n\n\n\nconst restartBtn = document.querySelector(\".restartBtn\");\nconst player = { isPlayersTurn: true };\nlet playerBoard = (0,_CreateboardDom_js__WEBPACK_IMPORTED_MODULE_1__.createGameboardDom)(7, \"playerBoard\");\nconst computer = new _ComputerAi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](playerBoard.boardSize);\nlet cpuBoard = (0,_CreateboardDom_js__WEBPACK_IMPORTED_MODULE_1__.createGameboardDom)(playerBoard.boardSize, \"cpuBoard\");\nlet domCpuBoard = document.getElementById(\"cpuBoard\");\nlet gameOver = false;\nplayerBoard.placeAllShips(3);\n(0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.displayPlayerShips)(playerBoard, \"playerBoard\");\ncpuBoard.placeAllShips(3);\n\n(0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.updateScore)(\"player\", playerBoard.shipsLeft);\n(0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.updateScore)(\"Cpu\", cpuBoard.shipsLeft);\n\ndomCpuBoard.addEventListener(\"click\", attack);\n\n// the AI will attack with this interval every second will check if is his turn or not\nsetInterval(() => {\n  if (!player.isPlayersTurn && !gameOver) {\n    const randomCords = computer.getRandomCords();\n    if (playerBoard.recieveAttack(randomCords) === true) {\n      const hitLocation = document.getElementById(\n        `playerBoardx${randomCords[0]}y${randomCords[1]}`\n      );\n      hitLocation.dataset.state = \"hit\";\n      hitLocation.dataset.ship = null;\n\n      player.isPlayersTurn = true;\n      (0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.changeTurnsIndicator)();\n      (0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.updateScore)(\"player\", playerBoard.shipsLeft);\n      if (playerBoard.shipsLeft === 0) {\n        gameOver = true;\n        (0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.displayGameOver)(\"Cpu\");\n      }\n    } else if (playerBoard.recieveAttack(randomCords) === false) {\n      // missed the shot\n      document.getElementById(\n        `playerBoardx${randomCords[0]}y${randomCords[1]}`\n      ).dataset.state = \"missed\";\n      player.isPlayersTurn = true;\n      (0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.changeTurnsIndicator)();\n    }\n  }\n}, 1000);\n\nrestartBtn.addEventListener(\"click\", restartGame);\n\nfunction restartGame() {\n  gameOver = false;\n  document.querySelector(\".boards\").innerHTML = \" \";\n  document.querySelector(\".gameOver\").style.display = \"none\";\n  playerBoard = (0,_CreateboardDom_js__WEBPACK_IMPORTED_MODULE_1__.createGameboardDom)(playerBoard.boardSize, \"playerBoard\");\n  cpuBoard = (0,_CreateboardDom_js__WEBPACK_IMPORTED_MODULE_1__.createGameboardDom)(cpuBoard.boardSize, \"cpuBoard\");\n  playerBoard.placeAllShips(3);\n  (0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.displayPlayerShips)(playerBoard, \"playerBoard\");\n  cpuBoard.placeAllShips(3);\n  (0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.updateScore)(\"player\", playerBoard.shipsLeft);\n  (0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.updateScore)(\"cpu\", cpuBoard.shipsLeft);\n  domCpuBoard = document.getElementById(\"cpuBoard\");\n  domCpuBoard.addEventListener(\"click\", attack);\n}\n\nfunction attack(e) {\n  if (player.isPlayersTurn && !gameOver) {\n    const cordX = e.target.dataset.x;\n    const cordY = e.target.dataset.y;\n    if (\n      cpuBoard.missedShots.has(`${cordX},${cordY}`) ||\n      cpuBoard.hitShots.has(`${cordX},${cordY}`)\n    ) {\n      return;\n    }\n\n    const currentAttack = cpuBoard.recieveAttack([cordX, cordY]);\n    if (currentAttack === true) {\n      // hit the shot\n      e.target.dataset.state = \"hit\";\n      player.isPlayersTurn = false;\n      (0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.changeTurnsIndicator)();\n      (0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.updateScore)(\"Cpu\", cpuBoard.shipsLeft);\n      if (cpuBoard.shipsLeft === 0) {\n        gameOver = true;\n        (0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.displayGameOver)(\"Player\");\n      }\n    } else if (currentAttack === false) {\n      // missed the shot\n      e.target.dataset.state = \"missed\";\n      player.isPlayersTurn = false;\n      (0,_domModule_js__WEBPACK_IMPORTED_MODULE_3__.changeTurnsIndicator)();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;