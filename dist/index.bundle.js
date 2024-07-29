"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["index"],{

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   display: () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _weather_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-content */ "./src/weather-content.js");
/* harmony import */ var _extract_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extract-data */ "./src/extract-data.js");



async function display() {
  const homeBtn = document.querySelector('.home');
  (0,_home__WEBPACK_IMPORTED_MODULE_0__.showHome)();
  const btn = document.querySelector('.search-btn');
  const input = document.querySelector('#city-name');
  btn.disabled = true;
  input.addEventListener('change', () => {
    if (!(input.value === '')) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });
  eventLisFun(btn);
  homeBtn.addEventListener('click', () => {
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.showHome)();
    const searchBtn = document.querySelector('.search-btn');
    const input = document.querySelector('#city-name');
    searchBtn.disabled = true;
    input.addEventListener('change', () => {
      if (!(input.value === '')) {
        searchBtn.disabled = false;
      } else {
        searchBtn.disabled = true;
      }
    });
    eventLisFun(searchBtn);
  });
}
function eventLisFun(btn) {
  btn.addEventListener('click', async () => {
    try {
      const cityName = document.querySelector('#city-name').value;
      if (!isNaN(Number(cityName))) {
        const p = document.querySelector('.home-err-msg');
        p.textContent = 'Please enter a valid value.';
        eventLisFun(btn);
      } else {
        const data = await (0,_extract_data__WEBPACK_IMPORTED_MODULE_2__.extractData)(cityName);
        await (0,_weather_content__WEBPACK_IMPORTED_MODULE_1__.showWeather)(data.temp, data.humidity, data.windSpeed, data.condition, data.sunrise, data.sunset, data.city, data.icon);
        navEvLsFn();
      }
    } catch (error) {
      const p = document.querySelector('.home-err-msg');
      p.textContent = 'No such place.';
      eventLisFun(btn);
    }
  }, {
    once: true
  });
}
function navEvLsFn() {
  const navSearchBtn = document.querySelector('.nav-search-btn');
  const input = document.querySelector('#nav-city-name');
  const cb = function () {
    if (!(input.value === '')) {
      navSearchBtn.disabled = false;
    } else {
      navSearchBtn.disabled = true;
    }
  };
  navSearchBtn.disabled = true;
  input.removeEventListener('change', cb);
  input.addEventListener('change', cb);
  navSearchBtn.addEventListener('click', async () => {
    try {
      const cityName = document.querySelector('#nav-city-name').value;
      if (!isNaN(Number(cityName))) {
        const p = document.createElement('p');
        const main = document.querySelector('main');
        main.classList = '';
        p.classList.add('error-msg');
        main.classList.add('error-main');
        main.innerHTML = '';
        p.textContent = 'Please enter a valid value.';
        main.appendChild(p);
        navEvLsFn();
      } else {
        const data = await (0,_extract_data__WEBPACK_IMPORTED_MODULE_2__.extractData)(cityName);
        await (0,_weather_content__WEBPACK_IMPORTED_MODULE_1__.showWeather)(data.temp, data.humidity, data.windSpeed, data.condition, data.sunrise, data.sunset, data.city, data.icon);
        navEvLsFn();
      }
    } catch (error) {
      const p = document.createElement('p');
      const main = document.querySelector('main');
      main.classList = '';
      p.classList.add('error-msg');
      main.classList.add('error-main');
      main.innerHTML = '';
      p.textContent = 'No such place.';
      main.appendChild(p);
      navEvLsFn();
    }
  }, {
    once: true
  });
}


/***/ }),

/***/ "./src/extract-data.js":
/*!*****************************!*\
  !*** ./src/extract-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractData: () => (/* binding */ extractData)
/* harmony export */ });
/* harmony import */ var _fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-weather-data */ "./src/fetch-weather-data.js");

async function extractData(name) {
  const data = await (0,_fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__.getWeather)(name);
  const temp = data.currentConditions.temp.toFixed();
  const humidity = data.currentConditions.humidity.toFixed();
  const windSpeed = data.currentConditions.windspeed.toFixed();
  const condition = data.currentConditions.conditions;
  const icon = data.currentConditions.icon;
  const sunrise = data.currentConditions.sunrise;
  const sunset = data.currentConditions.sunset;
  const city = data.address;
  console.log(data);
  console.log(city);
  console.log(`${temp}°F`);
  console.log(`${humidity}%`);
  console.log(`${windSpeed}km/h`);
  console.log(condition);
  console.log(icon);
  console.log(sunrise);
  console.log(sunset);
  return {
    temp,
    humidity,
    windSpeed,
    condition,
    icon,
    sunrise,
    sunset,
    city
  };
}


/***/ }),

/***/ "./src/fetch-gif.js":
/*!**************************!*\
  !*** ./src/fetch-gif.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGif: () => (/* binding */ getGif)
/* harmony export */ });
async function getGif(name) {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=We3LdMUbhG3kmfinwyTEq6VthQjd0TpD&s=${name}`, {
    mode: 'cors'
  });
  const data = await response.json();
  return data.data.images.original.url;
}


/***/ }),

/***/ "./src/fetch-weather-data.js":
/*!***********************************!*\
  !*** ./src/fetch-weather-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
async function getWeather(name) {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?key=JXU97QH5WVG99HN5XRWK8HGJ6`, {
      mode: 'cors'
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    // do nothing
  }
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showHome: () => (/* binding */ showHome)
/* harmony export */ });
function showHome() {
  const main = document.querySelector('main');
  const div = document.createElement('div');
  const form = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const btn = document.createElement('button');
  const p = document.createElement('p');
  const navInput = document.querySelector('#nav-city-name');
  const navBtn = document.querySelector('.nav-search-btn');
  main.classList = '';
  main.innerHTML = '';
  p.classList.add('home-err-msg');
  main.classList.add('home-main');
  div.classList.add('input-div');
  div.classList.add('inp-n-wt-div');
  form.classList.add('form');
  label.setAttribute('for', 'city-name');
  input.setAttribute('id', 'city-name');
  btn.classList.add('search-btn');
  label.textContent = 'City:';
  btn.textContent = 'Search';
  btn.setAttribute('type', 'button');
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(p);
  form.appendChild(btn);
  div.appendChild(form);
  main.appendChild(div);
  if (navBtn && navInput) {
    navBtn.remove();
    navInput.remove();
  }
  input.addEventListener('keypress', () => {
    p.textContent = '';
  });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_weather_app_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/weather-app-logo.svg */ "./src/images/weather-app-logo.svg");



window.addEventListener('DOMContentLoaded', async () => {
  const img = document.querySelector('.logo');
  img.src = _images_weather_app_logo_svg__WEBPACK_IMPORTED_MODULE_2__;
  await (0,_display__WEBPACK_IMPORTED_MODULE_0__.display)();
});

/***/ }),

/***/ "./src/weather-content.js":
/*!********************************!*\
  !*** ./src/weather-content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showWeather: () => (/* binding */ showWeather)
/* harmony export */ });
/* harmony import */ var _images_sunrise_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/sunrise.svg */ "./src/images/sunrise.svg");
/* harmony import */ var _images_sunset_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/sunset.svg */ "./src/images/sunset.svg");
/* harmony import */ var _fetch_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-gif */ "./src/fetch-gif.js");



async function showWeather(temp, humidity, windSpeed, condition, sunrise, sunset, city, icon) {
  const nav = document.querySelector('nav');
  const sBtn = document.querySelector('.nav-search-btn');
  const inputNav = document.querySelector('#nav-city-name');
  const main = document.querySelector('main');
  const iconDiv = document.createElement('div');
  const iconContainer = document.createElement('div');
  const gifImg = document.createElement('img');
  const icDvTxt = document.createElement('div');
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const dataDiv = document.createElement('div');
  const sunIconsDiv = document.createElement('div');
  const snrIcDv = document.createElement('div');
  const snrIcImg = document.createElement('img');
  const snrP = document.createElement('p');
  const snsIcDv = document.createElement('div');
  const snsIcImg = document.createElement('img');
  const snsP = document.createElement('p');
  const hNWs = document.createElement('div');
  const hP = document.createElement('p');
  const ws = document.createElement('p');
  main.innerHTML = '';
  iconDiv.classList = 'icon-div inp-n-wt-div';
  iconContainer.classList = 'icon-container';
  gifImg.classList.add('icon');
  icDvTxt.classList.add('icon-div-txt');
  dataDiv.classList = 'data-div inp-n-wt-div';
  sunIconsDiv.classList.add('sun-icons-div');
  snrIcDv.classList.add('sunrise-icon-div');
  snrIcImg.classList.add('sunrise-icon');
  snrP.classList.add('sunrise-time');
  snsIcDv.classList.add('sunset-icon-div');
  snsIcImg.classList.add('sunset-icon');
  snsP.classList.add('sunset-time');
  hNWs.classList.add('h-n-ws');
  main.classList = '';
  main.classList.add('weather-main');
  gifImg.setAttribute('alt', 'icon');
  gifImg.src = await (0,_fetch_gif__WEBPACK_IMPORTED_MODULE_2__.getGif)(icon);
  snrIcImg.setAttribute('alt', 'sunrise icon');
  snrIcImg.src = _images_sunrise_svg__WEBPACK_IMPORTED_MODULE_0__;
  snsIcImg.setAttribute('alt', 'sunset icon');
  snsIcImg.src = _images_sunset_svg__WEBPACK_IMPORTED_MODULE_1__;
  h1.textContent = `${temp}°F`;
  h2.textContent = condition;
  h3.textContent = city;
  snrP.textContent = sunrise;
  snsP.textContent = sunset;
  hP.textContent = `Humidity: ${humidity}%`;
  ws.textContent = `Wind speed: ${windSpeed}km/h`;
  iconContainer.appendChild(gifImg);
  icDvTxt.appendChild(h1);
  icDvTxt.appendChild(h2);
  icDvTxt.appendChild(h3);
  iconDiv.appendChild(iconContainer);
  iconDiv.appendChild(icDvTxt);
  snrIcDv.appendChild(snrIcImg);
  snrIcDv.appendChild(snrP);
  snsIcDv.appendChild(snsIcImg);
  snsIcDv.appendChild(snsP);
  sunIconsDiv.appendChild(snrIcDv);
  sunIconsDiv.appendChild(snsIcDv);
  hNWs.appendChild(hP);
  hNWs.appendChild(ws);
  dataDiv.appendChild(sunIconsDiv);
  dataDiv.appendChild(hNWs);
  main.appendChild(iconDiv);
  main.appendChild(dataDiv);
  if (sBtn && inputNav) {
    inputNav.value = '';
  } else {
    const input = document.createElement('input');
    const btn = document.createElement('button');
    input.setAttribute('id', 'nav-city-name');
    btn.classList.add('nav-search-btn');
    btn.textContent = 'Search';
    nav.insertBefore(btn, nav.firstChild);
    nav.insertBefore(input, nav.firstChild);
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Inter-VariableFont_slnt,wght.ttf */ "./src/fonts/Inter-VariableFont_slnt,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'inter';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

* {
    box-sizing: border-box;
}

:root {
    --red: #f22e2e;
    --light-red: #ff4d4d;
    --dark-blue: #1e4554;
    --font-group: 'inter', Arial, Helvetica, sans-serif;
}

body {
    background-color: var(--red);
    font-family: var(--font-group);
    height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    display: flex;
    justify-content: space-between;
    padding: 0 15%;
    gap: 60px;
}

.logo {
    height: 77px;
}

ul,
nav {
    list-style-type: none;
    display: flex;
    align-items: center;
}

ul {
    gap: 15px;
}

li {
    font-size: 18px;
    color: white;
    font-weight: 400;
}

.home-main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inp-n-wt-div {
    background-color: var(--light-red);
    padding: 17px;
    box-shadow: 0px 7px 15px rgb(0, 0, 0, 0.3);
    border-radius: 15px;
}

.input-div {
    width: 250px;
}

.form {
    display: flex;
    flex-direction: column;
    color: white;
    align-items: flex-start;
}

#city-name,
#nav-city-name {
    padding: 8px 10px;
    border: none;
    border-radius: 7px;
    font-family: var(--font-group);
}

#nav-city-name {
    width: 190px;
}

#city-name {
    width: 100%;
}

.search-btn,
.nav-search-btn {
    background-color: var(--dark-blue);
    border: none;
    color: white;
    padding: 0.5em 1em;
    border-radius: 7px;
    cursor: pointer;
}

li {
    cursor: pointer;
}

.nav-search-btn {
    margin-left: 10px;
}

.search-btn {
    align-self: flex-end;
    margin-top: 10px;
}

.weather-main {
    display: flex;
    padding: 7% 15%;
    gap: 30px;
}

.icon-div {
    display: flex;
    color: white;
    flex: 2;
    gap: 25px;
}

.icon-div,
.data-div {
    min-height: 190px;
}

.data-div {
    display: flex;
    flex-direction: column;
    color: white;
    padding: 40px;
    flex: 1;
    gap: 15px;
    max-width: 300px;
}

.icon-container {
    width: 200px;
}

.icon {
    width: 100%;
}

h1 {
    font-size: 38px;
    font-weight: 600;
}

h2 {
    font-size: 22px;
    font-weight: 500;
}

h3 {
    font-size: 14px;
    font-weight: 300;
}

h1,
h2,
h3 {
    margin: 0;
}

p {
    font-size: 18px;
    margin: 0;
}

.sun-icons-div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 25px;
}

.h-n-ws {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.error-msg {
    color: white;
    display: flex;
    justify-content: center;
    padding-top: 60px;
}

.home-err-msg {
    font-size: 14px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAAmD;AACvD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,oBAAoB;IACpB,mDAAmD;AACvD;;AAEA;IACI,4BAA4B;IAC5B,8BAA8B;IAC9B,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,cAAc;IACd,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,qBAAqB;IACrB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,aAAa;IACb,0CAA0C;IAC1C,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;;IAEI,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,kCAAkC;IAClC,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,OAAO;IACP,SAAS;AACb;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,OAAO;IACP,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;;;IAGI,SAAS;AACb;;AAEA;IACI,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["@font-face {\n    font-family: 'inter';\n    src: url(./fonts/Inter-VariableFont_slnt\\,wght.ttf);\n}\n\n* {\n    box-sizing: border-box;\n}\n\n:root {\n    --red: #f22e2e;\n    --light-red: #ff4d4d;\n    --dark-blue: #1e4554;\n    --font-group: 'inter', Arial, Helvetica, sans-serif;\n}\n\nbody {\n    background-color: var(--red);\n    font-family: var(--font-group);\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    padding: 0 15%;\n    gap: 60px;\n}\n\n.logo {\n    height: 77px;\n}\n\nul,\nnav {\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n}\n\nul {\n    gap: 15px;\n}\n\nli {\n    font-size: 18px;\n    color: white;\n    font-weight: 400;\n}\n\n.home-main {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.inp-n-wt-div {\n    background-color: var(--light-red);\n    padding: 17px;\n    box-shadow: 0px 7px 15px rgb(0, 0, 0, 0.3);\n    border-radius: 15px;\n}\n\n.input-div {\n    width: 250px;\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    color: white;\n    align-items: flex-start;\n}\n\n#city-name,\n#nav-city-name {\n    padding: 8px 10px;\n    border: none;\n    border-radius: 7px;\n    font-family: var(--font-group);\n}\n\n#nav-city-name {\n    width: 190px;\n}\n\n#city-name {\n    width: 100%;\n}\n\n.search-btn,\n.nav-search-btn {\n    background-color: var(--dark-blue);\n    border: none;\n    color: white;\n    padding: 0.5em 1em;\n    border-radius: 7px;\n    cursor: pointer;\n}\n\nli {\n    cursor: pointer;\n}\n\n.nav-search-btn {\n    margin-left: 10px;\n}\n\n.search-btn {\n    align-self: flex-end;\n    margin-top: 10px;\n}\n\n.weather-main {\n    display: flex;\n    padding: 7% 15%;\n    gap: 30px;\n}\n\n.icon-div {\n    display: flex;\n    color: white;\n    flex: 2;\n    gap: 25px;\n}\n\n.icon-div,\n.data-div {\n    min-height: 190px;\n}\n\n.data-div {\n    display: flex;\n    flex-direction: column;\n    color: white;\n    padding: 40px;\n    flex: 1;\n    gap: 15px;\n    max-width: 300px;\n}\n\n.icon-container {\n    width: 200px;\n}\n\n.icon {\n    width: 100%;\n}\n\nh1 {\n    font-size: 38px;\n    font-weight: 600;\n}\n\nh2 {\n    font-size: 22px;\n    font-weight: 500;\n}\n\nh3 {\n    font-size: 14px;\n    font-weight: 300;\n}\n\nh1,\nh2,\nh3 {\n    margin: 0;\n}\n\np {\n    font-size: 18px;\n    margin: 0;\n}\n\n.sun-icons-div {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    gap: 25px;\n}\n\n.h-n-ws {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.error-msg {\n    color: white;\n    display: flex;\n    justify-content: center;\n    padding-top: 60px;\n}\n\n.home-err-msg {\n    font-size: 14px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Inter-VariableFont_slnt,wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Inter-VariableFont_slnt,wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "853e01975d2783d9fa29.ttf";

/***/ }),

/***/ "./src/images/sunrise.svg":
/*!********************************!*\
  !*** ./src/images/sunrise.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9257a0dbd221f6cabeb4.svg";

/***/ }),

/***/ "./src/images/sunset.svg":
/*!*******************************!*\
  !*** ./src/images/sunset.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca8e8ac0a95fcb72a918.svg";

/***/ }),

/***/ "./src/images/weather-app-logo.svg":
/*!*****************************************!*\
  !*** ./src/images/weather-app-logo.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cf204b225fc9a049e48.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFV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OztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9leHRyYWN0LWRhdGEuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZmV0Y2gtZ2lmLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2ZldGNoLXdlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3dlYXRoZXItY29udGVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hvd0hvbWUgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgc2hvd1dlYXRoZXIgfSBmcm9tICcuL3dlYXRoZXItY29udGVudCc7XG5pbXBvcnQgeyBleHRyYWN0RGF0YSB9IGZyb20gJy4vZXh0cmFjdC1kYXRhJztcblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcblxuICAgIHNob3dIb21lKCk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idG4nKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5LW5hbWUnKTtcbiAgICBidG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgaWYgKCEoaW5wdXQudmFsdWUgPT09ICcnKSkge1xuICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBldmVudExpc0Z1bihidG4pO1xuXG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hvd0hvbWUoKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idG4nKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1uYW1lJyk7XG4gICAgICAgIHNlYXJjaEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghKGlucHV0LnZhbHVlID09PSAnJykpIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXZlbnRMaXNGdW4oc2VhcmNoQnRuKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZXZlbnRMaXNGdW4oYnRuKSB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1uYW1lJykudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihOdW1iZXIoY2l0eU5hbWUpKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtZXJyLW1zZycpO1xuICAgICAgICAgICAgICAgICAgICBwLnRleHRDb250ZW50ID0gJ1BsZWFzZSBlbnRlciBhIHZhbGlkIHZhbHVlLic7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TGlzRnVuKGJ0bik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGV4dHJhY3REYXRhKGNpdHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2hvd1dlYXRoZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRlbXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmh1bWlkaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS53aW5kU3BlZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3VucmlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3Vuc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pY29uLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBuYXZFdkxzRm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1lcnItbXNnJyk7XG4gICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9ICdObyBzdWNoIHBsYWNlLic7XG4gICAgICAgICAgICAgICAgZXZlbnRMaXNGdW4oYnRuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgeyBvbmNlOiB0cnVlIH0sXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gbmF2RXZMc0ZuKCkge1xuICAgIGNvbnN0IG5hdlNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtc2VhcmNoLWJ0bicpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1jaXR5LW5hbWUnKTtcbiAgICBjb25zdCBjYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEoaW5wdXQudmFsdWUgPT09ICcnKSkge1xuICAgICAgICAgICAgbmF2U2VhcmNoQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYXZTZWFyY2hCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBuYXZTZWFyY2hCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNiKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjYik7XG4gICAgbmF2U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWNpdHktbmFtZScpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKGNpdHlOYW1lKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBtYWluLmNsYXNzTGlzdCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1zZycpO1xuICAgICAgICAgICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1haW4nKTtcbiAgICAgICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCB2YWx1ZS4nO1xuICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHApO1xuICAgICAgICAgICAgICAgICAgICBuYXZFdkxzRm4oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZXh0cmFjdERhdGEoY2l0eU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzaG93V2VhdGhlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGVtcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaHVtaWRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLndpbmRTcGVlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY29uZGl0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zdW5yaXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zdW5zZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmljb24sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIG5hdkV2THNGbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QgPSAnJztcbiAgICAgICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1zZycpO1xuICAgICAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWFpbicpO1xuICAgICAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9ICdObyBzdWNoIHBsYWNlLic7XG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgICAgICAgICBuYXZFdkxzRm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgeyBvbmNlOiB0cnVlIH0sXG4gICAgKTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheSB9O1xuIiwiaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gJy4vZmV0Y2gtd2VhdGhlci1kYXRhJztcblxuYXN5bmMgZnVuY3Rpb24gZXh0cmFjdERhdGEobmFtZSkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKG5hbWUpO1xuICAgIGNvbnN0IHRlbXAgPSBkYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXAudG9GaXhlZCgpO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5odW1pZGl0eS50b0ZpeGVkKCk7XG4gICAgY29uc3Qgd2luZFNwZWVkID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy53aW5kc3BlZWQudG9GaXhlZCgpO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucztcbiAgICBjb25zdCBpY29uID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5pY29uO1xuICAgIGNvbnN0IHN1bnJpc2UgPSBkYXRhLmN1cnJlbnRDb25kaXRpb25zLnN1bnJpc2U7XG4gICAgY29uc3Qgc3Vuc2V0ID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5zZXQ7XG4gICAgY29uc3QgY2l0eSA9IGRhdGEuYWRkcmVzcztcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhjaXR5KTtcbiAgICBjb25zb2xlLmxvZyhgJHt0ZW1wfcKwRmApO1xuICAgIGNvbnNvbGUubG9nKGAke2h1bWlkaXR5fSVgKTtcbiAgICBjb25zb2xlLmxvZyhgJHt3aW5kU3BlZWR9a20vaGApO1xuICAgIGNvbnNvbGUubG9nKGNvbmRpdGlvbik7XG4gICAgY29uc29sZS5sb2coaWNvbik7XG4gICAgY29uc29sZS5sb2coc3VucmlzZSk7XG4gICAgY29uc29sZS5sb2coc3Vuc2V0KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXAsXG4gICAgICAgIGh1bWlkaXR5LFxuICAgICAgICB3aW5kU3BlZWQsXG4gICAgICAgIGNvbmRpdGlvbixcbiAgICAgICAgaWNvbixcbiAgICAgICAgc3VucmlzZSxcbiAgICAgICAgc3Vuc2V0LFxuICAgICAgICBjaXR5LFxuICAgIH07XG59XG5cbmV4cG9ydCB7IGV4dHJhY3REYXRhIH07XG4iLCJhc3luYyBmdW5jdGlvbiBnZXRHaWYobmFtZSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT1XZTNMZE1VYmhHM2ttZmlud3lURXE2VnRoUWpkMFRwRCZzPSR7bmFtZX1gLFxuICAgICAgICB7IG1vZGU6ICdjb3JzJyB9LFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG59XG5cbmV4cG9ydCB7IGdldEdpZiB9O1xuIiwiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihuYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke25hbWV9P2tleT1KWFU5N1FINVdWRzk5SE41WFJXSzhIR0o2YCxcbiAgICAgICAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyIH07XG4iLCJmdW5jdGlvbiBzaG93SG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbmF2SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWNpdHktbmFtZScpO1xuICAgIGNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtc2VhcmNoLWJ0bicpO1xuICAgIG1haW4uY2xhc3NMaXN0ID0gJyc7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2hvbWUtZXJyLW1zZycpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaG9tZS1tYWluJyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWRpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpbnAtbi13dC1kaXYnKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjaXR5LW5hbWUnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NpdHktbmFtZScpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYnRuJyk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSAnQ2l0eTonO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdTZWFyY2gnO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIGlmIChuYXZCdG4gJiYgbmF2SW5wdXQpIHtcbiAgICAgICAgbmF2QnRuLnJlbW92ZSgpO1xuICAgICAgICBuYXZJbnB1dC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsICgpID0+IHtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBzaG93SG9tZSB9O1xuIiwiaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gJy4vZGlzcGxheSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1hZ2VzL3dlYXRoZXItYXBwLWxvZ28uc3ZnJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcbiAgICBpbWcuc3JjID0gbG9nbztcbiAgICBhd2FpdCBkaXNwbGF5KCk7XG59KTtcbiIsImltcG9ydCBzdW5yaXNlSWNvbiBmcm9tICcuL2ltYWdlcy9zdW5yaXNlLnN2Zyc7XG5pbXBvcnQgc3Vuc2V0SWNvbiBmcm9tICcuL2ltYWdlcy9zdW5zZXQuc3ZnJztcbmltcG9ydCB7IGdldEdpZiB9IGZyb20gJy4vZmV0Y2gtZ2lmJztcblxuYXN5bmMgZnVuY3Rpb24gc2hvd1dlYXRoZXIoXG4gICAgdGVtcCxcbiAgICBodW1pZGl0eSxcbiAgICB3aW5kU3BlZWQsXG4gICAgY29uZGl0aW9uLFxuICAgIHN1bnJpc2UsXG4gICAgc3Vuc2V0LFxuICAgIGNpdHksXG4gICAgaWNvbixcbikge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuICAgIGNvbnN0IHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXNlYXJjaC1idG4nKTtcbiAgICBjb25zdCBpbnB1dE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtY2l0eS1uYW1lJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGdpZkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGljRHZUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBkYXRhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3VuSWNvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzbnJJY0R2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc25ySWNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBzbnJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHNuc0ljRHYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzbnNJY0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHNuc1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaE5XcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBpY29uRGl2LmNsYXNzTGlzdCA9ICdpY29uLWRpdiBpbnAtbi13dC1kaXYnO1xuICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0ID0gJ2ljb24tY29udGFpbmVyJztcbiAgICBnaWZJbWcuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgIGljRHZUeHQuY2xhc3NMaXN0LmFkZCgnaWNvbi1kaXYtdHh0Jyk7XG4gICAgZGF0YURpdi5jbGFzc0xpc3QgPSAnZGF0YS1kaXYgaW5wLW4td3QtZGl2JztcbiAgICBzdW5JY29uc0Rpdi5jbGFzc0xpc3QuYWRkKCdzdW4taWNvbnMtZGl2Jyk7XG4gICAgc25ySWNEdi5jbGFzc0xpc3QuYWRkKCdzdW5yaXNlLWljb24tZGl2Jyk7XG4gICAgc25ySWNJbWcuY2xhc3NMaXN0LmFkZCgnc3VucmlzZS1pY29uJyk7XG4gICAgc25yUC5jbGFzc0xpc3QuYWRkKCdzdW5yaXNlLXRpbWUnKTtcbiAgICBzbnNJY0R2LmNsYXNzTGlzdC5hZGQoJ3N1bnNldC1pY29uLWRpdicpO1xuICAgIHNuc0ljSW1nLmNsYXNzTGlzdC5hZGQoJ3N1bnNldC1pY29uJyk7XG4gICAgc25zUC5jbGFzc0xpc3QuYWRkKCdzdW5zZXQtdGltZScpO1xuICAgIGhOV3MuY2xhc3NMaXN0LmFkZCgnaC1uLXdzJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QgPSAnJztcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItbWFpbicpO1xuICAgIGdpZkltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdpY29uJyk7XG4gICAgZ2lmSW1nLnNyYyA9IGF3YWl0IGdldEdpZihpY29uKTtcbiAgICBzbnJJY0ltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdzdW5yaXNlIGljb24nKTtcbiAgICBzbnJJY0ltZy5zcmMgPSBzdW5yaXNlSWNvbjtcbiAgICBzbnNJY0ltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdzdW5zZXQgaWNvbicpO1xuICAgIHNuc0ljSW1nLnNyYyA9IHN1bnNldEljb247XG4gICAgaDEudGV4dENvbnRlbnQgPSBgJHt0ZW1wfcKwRmA7XG4gICAgaDIudGV4dENvbnRlbnQgPSBjb25kaXRpb247XG4gICAgaDMudGV4dENvbnRlbnQgPSBjaXR5O1xuICAgIHNuclAudGV4dENvbnRlbnQgPSBzdW5yaXNlO1xuICAgIHNuc1AudGV4dENvbnRlbnQgPSBzdW5zZXQ7XG4gICAgaFAudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7aHVtaWRpdHl9JWA7XG4gICAgd3MudGV4dENvbnRlbnQgPSBgV2luZCBzcGVlZDogJHt3aW5kU3BlZWR9a20vaGA7XG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChnaWZJbWcpO1xuICAgIGljRHZUeHQuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGljRHZUeHQuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGljRHZUeHQuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGljb25EaXYuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG4gICAgaWNvbkRpdi5hcHBlbmRDaGlsZChpY0R2VHh0KTtcbiAgICBzbnJJY0R2LmFwcGVuZENoaWxkKHNuckljSW1nKTtcbiAgICBzbnJJY0R2LmFwcGVuZENoaWxkKHNuclApO1xuICAgIHNuc0ljRHYuYXBwZW5kQ2hpbGQoc25zSWNJbWcpO1xuICAgIHNuc0ljRHYuYXBwZW5kQ2hpbGQoc25zUCk7XG4gICAgc3VuSWNvbnNEaXYuYXBwZW5kQ2hpbGQoc25ySWNEdik7XG4gICAgc3VuSWNvbnNEaXYuYXBwZW5kQ2hpbGQoc25zSWNEdik7XG4gICAgaE5Xcy5hcHBlbmRDaGlsZChoUCk7XG4gICAgaE5Xcy5hcHBlbmRDaGlsZCh3cyk7XG4gICAgZGF0YURpdi5hcHBlbmRDaGlsZChzdW5JY29uc0Rpdik7XG4gICAgZGF0YURpdi5hcHBlbmRDaGlsZChoTldzKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGljb25EaXYpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGF0YURpdik7XG4gICAgaWYgKHNCdG4gJiYgaW5wdXROYXYpIHtcbiAgICAgICAgaW5wdXROYXYudmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1jaXR5LW5hbWUnKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1zZWFyY2gtYnRuJyk7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICdTZWFyY2gnO1xuICAgICAgICBuYXYuaW5zZXJ0QmVmb3JlKGJ0biwgbmF2LmZpcnN0Q2hpbGQpO1xuICAgICAgICBuYXYuaW5zZXJ0QmVmb3JlKGlucHV0LCBuYXYuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBzaG93V2VhdGhlciB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnaW50ZXInO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gICAgLS1yZWQ6ICNmMjJlMmU7XG4gICAgLS1saWdodC1yZWQ6ICNmZjRkNGQ7XG4gICAgLS1kYXJrLWJsdWU6ICMxZTQ1NTQ7XG4gICAgLS1mb250LWdyb3VwOiAnaW50ZXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWdyb3VwKTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDE1JTtcbiAgICBnYXA6IDYwcHg7XG59XG5cbi5sb2dvIHtcbiAgICBoZWlnaHQ6IDc3cHg7XG59XG5cbnVsLFxubmF2IHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG51bCB7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG5saSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaG9tZS1tYWluIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucC1uLXd0LWRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcmVkKTtcbiAgICBwYWRkaW5nOiAxN3B4O1xuICAgIGJveC1zaGFkb3c6IDBweCA3cHggMTVweCByZ2IoMCwgMCwgMCwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uaW5wdXQtZGl2IHtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbi5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4jY2l0eS1uYW1lLFxuI25hdi1jaXR5LW5hbWUge1xuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZ3JvdXApO1xufVxuXG4jbmF2LWNpdHktbmFtZSB7XG4gICAgd2lkdGg6IDE5MHB4O1xufVxuXG4jY2l0eS1uYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXJjaC1idG4sXG4ubmF2LXNlYXJjaC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1zZWFyY2gtYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnNlYXJjaC1idG4ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi53ZWF0aGVyLW1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogNyUgMTUlO1xuICAgIGdhcDogMzBweDtcbn1cblxuLmljb24tZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmbGV4OiAyO1xuICAgIGdhcDogMjVweDtcbn1cblxuLmljb24tZGl2LFxuLmRhdGEtZGl2IHtcbiAgICBtaW4taGVpZ2h0OiAxOTBweDtcbn1cblxuLmRhdGEtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgZmxleDogMTtcbiAgICBnYXA6IDE1cHg7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLmljb24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbi5pY29uIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmgzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zdW4taWNvbnMtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4uaC1uLXdzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4uZXJyb3ItbXNnIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbn1cblxuLmhvbWUtZXJyLW1zZyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUFtRDtBQUN2RDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osT0FBTztJQUNQLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsT0FBTztJQUNQLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7SUFHSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2ludGVyJztcXG4gICAgc3JjOiB1cmwoLi9mb250cy9JbnRlci1WYXJpYWJsZUZvbnRfc2xudFxcXFwsd2dodC50dGYpO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXJlZDogI2YyMmUyZTtcXG4gICAgLS1saWdodC1yZWQ6ICNmZjRkNGQ7XFxuICAgIC0tZGFyay1ibHVlOiAjMWU0NTU0O1xcbiAgICAtLWZvbnQtZ3JvdXA6ICdpbnRlcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ncm91cCk7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMCAxNSU7XFxuICAgIGdhcDogNjBweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDc3cHg7XFxufVxcblxcbnVsLFxcbm5hdiB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbmxpIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5ob21lLW1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucC1uLXd0LWRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXJlZCk7XFxuICAgIHBhZGRpbmc6IDE3cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA3cHggMTVweCByZ2IoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmlucHV0LWRpdiB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY2l0eS1uYW1lLFxcbiNuYXYtY2l0eS1uYW1lIHtcXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ncm91cCk7XFxufVxcblxcbiNuYXYtY2l0eS1uYW1lIHtcXG4gICAgd2lkdGg6IDE5MHB4O1xcbn1cXG5cXG4jY2l0eS1uYW1lIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZWFyY2gtYnRuLFxcbi5uYXYtc2VhcmNoLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5saSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1zZWFyY2gtYnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi53ZWF0aGVyLW1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA3JSAxNSU7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmljb24tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmbGV4OiAyO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5pY29uLWRpdixcXG4uZGF0YS1kaXYge1xcbiAgICBtaW4taGVpZ2h0OiAxOTBweDtcXG59XFxuXFxuLmRhdGEtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxufVxcblxcbi5pY29uLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmljb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbnAge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnN1bi1pY29ucy1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4uaC1uLXdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uZXJyb3ItbXNnIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxufVxcblxcbi5ob21lLWVyci1tc2cge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJzaG93SG9tZSIsInNob3dXZWF0aGVyIiwiZXh0cmFjdERhdGEiLCJkaXNwbGF5IiwiaG9tZUJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ0biIsImlucHV0IiwiZGlzYWJsZWQiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJldmVudExpc0Z1biIsInNlYXJjaEJ0biIsImNpdHlOYW1lIiwiaXNOYU4iLCJOdW1iZXIiLCJwIiwidGV4dENvbnRlbnQiLCJkYXRhIiwidGVtcCIsImh1bWlkaXR5Iiwid2luZFNwZWVkIiwiY29uZGl0aW9uIiwic3VucmlzZSIsInN1bnNldCIsImNpdHkiLCJpY29uIiwibmF2RXZMc0ZuIiwiZXJyb3IiLCJvbmNlIiwibmF2U2VhcmNoQnRuIiwiY2IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3JlYXRlRWxlbWVudCIsIm1haW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImdldFdlYXRoZXIiLCJuYW1lIiwiY3VycmVudENvbmRpdGlvbnMiLCJ0b0ZpeGVkIiwid2luZHNwZWVkIiwiY29uZGl0aW9ucyIsImFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0R2lmIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwiaW1hZ2VzIiwib3JpZ2luYWwiLCJ1cmwiLCJkaXYiLCJmb3JtIiwibGFiZWwiLCJuYXZJbnB1dCIsIm5hdkJ0biIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsImxvZ28iLCJ3aW5kb3ciLCJpbWciLCJzcmMiLCJzdW5yaXNlSWNvbiIsInN1bnNldEljb24iLCJuYXYiLCJzQnRuIiwiaW5wdXROYXYiLCJpY29uRGl2IiwiaWNvbkNvbnRhaW5lciIsImdpZkltZyIsImljRHZUeHQiLCJoMSIsImgyIiwiaDMiLCJkYXRhRGl2Iiwic3VuSWNvbnNEaXYiLCJzbnJJY0R2Iiwic25ySWNJbWciLCJzbnJQIiwic25zSWNEdiIsInNuc0ljSW1nIiwic25zUCIsImhOV3MiLCJoUCIsIndzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=