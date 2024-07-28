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
  let flag = false;
  (0,_home__WEBPACK_IMPORTED_MODULE_0__.showHome)();
  const btn = document.querySelector('.search-btn');
  btn.addEventListener('click', async event => {
    event.preventDefault();
    const cityName = document.querySelector('#city-name').value;
    const data = await (0,_extract_data__WEBPACK_IMPORTED_MODULE_2__.extractData)(cityName);
    await (0,_weather_content__WEBPACK_IMPORTED_MODULE_1__.showWeather)(data.temp, data.humidity, data.windSpeed, data.condition, data.sunrise, data.sunset, data.city, data.icon);
    const navSearchBtn = document.querySelector('.nav-search-btn');
    navSearchBtn.addEventListener('click', async function cb() {
      const cityName = document.querySelector('#nav-city-name').value;
      const data = await (0,_extract_data__WEBPACK_IMPORTED_MODULE_2__.extractData)(cityName);
      await (0,_weather_content__WEBPACK_IMPORTED_MODULE_1__.showWeather)(data.temp, data.humidity, data.windSpeed, data.condition, data.sunrise, data.sunset, data.city, data.icon);
      setTimeout(() => {
        // do nothing
      }, 1000);
    });
  }, {
    once: true
  });
  homeBtn.addEventListener('click', () => {
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.showHome)();
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', async event => {
      event.preventDefault();
      const cityName = document.querySelector('#city-name').value;
      const data = await (0,_extract_data__WEBPACK_IMPORTED_MODULE_2__.extractData)(cityName);
      await (0,_weather_content__WEBPACK_IMPORTED_MODULE_1__.showWeather)(data.temp, data.humidity, data.windSpeed, data.condition, data.sunrise, data.sunset, data.city, data.icon);
      const nvSearchBtn = document.querySelector('.nav-search-btn');
      nvSearchBtn.addEventListener('click', async function cb2() {
        const cityName = document.querySelector('#nav-city-name').value;
        const data = await (0,_extract_data__WEBPACK_IMPORTED_MODULE_2__.extractData)(cityName);
        await (0,_weather_content__WEBPACK_IMPORTED_MODULE_1__.showWeather)(data.temp, data.humidity, data.windSpeed, data.condition, data.sunrise, data.sunset, data.city, data.icon);
        setTimeout(() => {
          // do nothing
        }, 1000);
      });
      setTimeout(() => {
        // do nothing
      }, 2000);
    }, {
      once: true
    });
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
    console.log('from catch');
    console.error(error);
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
  const navInput = document.querySelector('#nav-city-name');
  const navBtn = document.querySelector('.nav-search-btn');
  main.classList = '';
  main.innerHTML = '';
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
  form.appendChild(btn);
  div.appendChild(form);
  main.appendChild(div);
  if (navBtn && navInput) {
    navBtn.remove();
    navInput.remove();
  }
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAAmD;AACvD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,oBAAoB;IACpB,mDAAmD;AACvD;;AAEA;IACI,4BAA4B;IAC5B,8BAA8B;IAC9B,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,cAAc;IACd,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,qBAAqB;IACrB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,aAAa;IACb,0CAA0C;IAC1C,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;;IAEI,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,kCAAkC;IAClC,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,OAAO;IACP,SAAS;AACb;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,OAAO;IACP,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;;;IAGI,SAAS;AACb;;AAEA;IACI,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb","sourcesContent":["@font-face {\n    font-family: 'inter';\n    src: url(./fonts/Inter-VariableFont_slnt\\,wght.ttf);\n}\n\n* {\n    box-sizing: border-box;\n}\n\n:root {\n    --red: #f22e2e;\n    --light-red: #ff4d4d;\n    --dark-blue: #1e4554;\n    --font-group: 'inter', Arial, Helvetica, sans-serif;\n}\n\nbody {\n    background-color: var(--red);\n    font-family: var(--font-group);\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    padding: 0 15%;\n    gap: 60px;\n}\n\n.logo {\n    height: 77px;\n}\n\nul,\nnav {\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n}\n\nul {\n    gap: 15px;\n}\n\nli {\n    font-size: 18px;\n    color: white;\n    font-weight: 400;\n}\n\n.home-main {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.inp-n-wt-div {\n    background-color: var(--light-red);\n    padding: 17px;\n    box-shadow: 0px 7px 15px rgb(0, 0, 0, 0.3);\n    border-radius: 15px;\n}\n\n.input-div {\n    width: 250px;\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    color: white;\n    align-items: flex-start;\n}\n\n#city-name,\n#nav-city-name {\n    padding: 8px 10px;\n    border: none;\n    border-radius: 7px;\n    font-family: var(--font-group);\n}\n\n#nav-city-name {\n    width: 190px;\n}\n\n#city-name {\n    width: 100%;\n}\n\n.search-btn,\n.nav-search-btn {\n    background-color: var(--dark-blue);\n    border: none;\n    color: white;\n    padding: 0.5em 1em;\n    border-radius: 7px;\n    cursor: pointer;\n}\n\nli {\n    cursor: pointer;\n}\n\n.nav-search-btn {\n    margin-left: 10px;\n}\n\n.search-btn {\n    align-self: flex-end;\n    margin-top: 10px;\n}\n\n.weather-main {\n    display: flex;\n    padding: 7% 15%;\n    gap: 30px;\n}\n\n.icon-div {\n    display: flex;\n    color: white;\n    flex: 2;\n    gap: 25px;\n}\n\n.icon-div,\n.data-div {\n    min-height: 190px;\n}\n\n.data-div {\n    display: flex;\n    flex-direction: column;\n    color: white;\n    padding: 40px;\n    flex: 1;\n    gap: 15px;\n    max-width: 300px;\n}\n\n.icon-container {\n    width: 200px;\n}\n\n.icon {\n    width: 100%;\n}\n\nh1 {\n    font-size: 38px;\n    font-weight: 600;\n}\n\nh2 {\n    font-size: 22px;\n    font-weight: 500;\n}\n\nh3 {\n    font-size: 14px;\n    font-weight: 300;\n}\n\nh1,\nh2,\nh3 {\n    margin: 0;\n}\n\np {\n    font-size: 18px;\n    margin: 0;\n}\n\n.sun-icons-div {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    gap: 25px;\n}\n\n.h-n-ws {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFB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eURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9leHRyYWN0LWRhdGEuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZmV0Y2gtZ2lmLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2ZldGNoLXdlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3dlYXRoZXItY29udGVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hvd0hvbWUgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgc2hvd1dlYXRoZXIgfSBmcm9tICcuL3dlYXRoZXItY29udGVudCc7XG5pbXBvcnQgeyBleHRyYWN0RGF0YSB9IGZyb20gJy4vZXh0cmFjdC1kYXRhJztcblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xuXG4gICAgc2hvd0hvbWUoKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ0bicpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5LW5hbWUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBleHRyYWN0RGF0YShjaXR5TmFtZSk7XG4gICAgICAgICAgICBhd2FpdCBzaG93V2VhdGhlcihcbiAgICAgICAgICAgICAgICBkYXRhLnRlbXAsXG4gICAgICAgICAgICAgICAgZGF0YS5odW1pZGl0eSxcbiAgICAgICAgICAgICAgICBkYXRhLndpbmRTcGVlZCxcbiAgICAgICAgICAgICAgICBkYXRhLmNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICBkYXRhLnN1bnJpc2UsXG4gICAgICAgICAgICAgICAgZGF0YS5zdW5zZXQsXG4gICAgICAgICAgICAgICAgZGF0YS5jaXR5LFxuICAgICAgICAgICAgICAgIGRhdGEuaWNvbixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBuYXZTZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXNlYXJjaC1idG4nKTtcbiAgICAgICAgICAgIG5hdlNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIGNiKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1jaXR5LW5hbWUnKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZXh0cmFjdERhdGEoY2l0eU5hbWUpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHNob3dXZWF0aGVyKFxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRlbXAsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaHVtaWRpdHksXG4gICAgICAgICAgICAgICAgICAgIGRhdGEud2luZFNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zdW5yaXNlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLnN1bnNldCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jaXR5LFxuICAgICAgICAgICAgICAgICAgICBkYXRhLmljb24sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHsgb25jZTogdHJ1ZSB9LFxuICAgICk7XG5cbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaG93SG9tZSgpO1xuICAgICAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ0bicpO1xuICAgICAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHktbmFtZScpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBleHRyYWN0RGF0YShjaXR5TmFtZSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgc2hvd1dlYXRoZXIoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGVtcCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5odW1pZGl0eSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YS53aW5kU3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY29uZGl0aW9uLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLnN1bnJpc2UsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3Vuc2V0LFxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNpdHksXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaWNvbixcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbnZTZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXNlYXJjaC1idG4nKTtcbiAgICAgICAgICAgICAgICBudlNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIGNiMigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2l0eU5hbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1jaXR5LW5hbWUnKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGV4dHJhY3REYXRhKGNpdHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2hvd1dlYXRoZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRlbXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmh1bWlkaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS53aW5kU3BlZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3VucmlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3Vuc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pY29uLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICAgICAgKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheSB9O1xuIiwiaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gJy4vZmV0Y2gtd2VhdGhlci1kYXRhJztcblxuYXN5bmMgZnVuY3Rpb24gZXh0cmFjdERhdGEobmFtZSkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKG5hbWUpO1xuICAgIGNvbnN0IHRlbXAgPSBkYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXAudG9GaXhlZCgpO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5odW1pZGl0eS50b0ZpeGVkKCk7XG4gICAgY29uc3Qgd2luZFNwZWVkID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy53aW5kc3BlZWQudG9GaXhlZCgpO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucztcbiAgICBjb25zdCBpY29uID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5pY29uO1xuICAgIGNvbnN0IHN1bnJpc2UgPSBkYXRhLmN1cnJlbnRDb25kaXRpb25zLnN1bnJpc2U7XG4gICAgY29uc3Qgc3Vuc2V0ID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5zZXQ7XG4gICAgY29uc3QgY2l0eSA9IGRhdGEuYWRkcmVzcztcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhjaXR5KTtcbiAgICBjb25zb2xlLmxvZyhgJHt0ZW1wfcKwRmApO1xuICAgIGNvbnNvbGUubG9nKGAke2h1bWlkaXR5fSVgKTtcbiAgICBjb25zb2xlLmxvZyhgJHt3aW5kU3BlZWR9a20vaGApO1xuICAgIGNvbnNvbGUubG9nKGNvbmRpdGlvbik7XG4gICAgY29uc29sZS5sb2coaWNvbik7XG4gICAgY29uc29sZS5sb2coc3VucmlzZSk7XG4gICAgY29uc29sZS5sb2coc3Vuc2V0KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXAsXG4gICAgICAgIGh1bWlkaXR5LFxuICAgICAgICB3aW5kU3BlZWQsXG4gICAgICAgIGNvbmRpdGlvbixcbiAgICAgICAgaWNvbixcbiAgICAgICAgc3VucmlzZSxcbiAgICAgICAgc3Vuc2V0LFxuICAgICAgICBjaXR5LFxuICAgIH07XG59XG5cbmV4cG9ydCB7IGV4dHJhY3REYXRhIH07XG4iLCJhc3luYyBmdW5jdGlvbiBnZXRHaWYobmFtZSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT1XZTNMZE1VYmhHM2ttZmlud3lURXE2VnRoUWpkMFRwRCZzPSR7bmFtZX1gLFxuICAgICAgICB7IG1vZGU6ICdjb3JzJyB9LFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG59XG5cbmV4cG9ydCB7IGdldEdpZiB9O1xuIiwiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihuYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke25hbWV9P2tleT1KWFU5N1FINVdWRzk5SE41WFJXSzhIR0o2YCxcbiAgICAgICAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZnJvbSBjYXRjaCcpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXIgfTtcbiIsImZ1bmN0aW9uIHNob3dIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbmF2SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWNpdHktbmFtZScpO1xuICAgIGNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtc2VhcmNoLWJ0bicpO1xuICAgIG1haW4uY2xhc3NMaXN0ID0gJyc7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hvbWUtbWFpbicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1kaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaW5wLW4td3QtZGl2Jyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY2l0eS1uYW1lJyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjaXR5LW5hbWUnKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ0bicpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0NpdHk6JztcbiAgICBidG4udGV4dENvbnRlbnQgPSAnU2VhcmNoJztcbiAgICBidG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgaWYgKG5hdkJ0biAmJiBuYXZJbnB1dCkge1xuICAgICAgICBuYXZCdG4ucmVtb3ZlKCk7XG4gICAgICAgIG5hdklucHV0LnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgc2hvd0hvbWUgfTtcbiIsImltcG9ydCB7IGRpc3BsYXkgfSBmcm9tICcuL2Rpc3BsYXknO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2ltYWdlcy93ZWF0aGVyLWFwcC1sb2dvLnN2Zyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XG4gICAgaW1nLnNyYyA9IGxvZ287XG4gICAgYXdhaXQgZGlzcGxheSgpO1xufSk7XG4iLCJpbXBvcnQgc3VucmlzZUljb24gZnJvbSAnLi9pbWFnZXMvc3VucmlzZS5zdmcnO1xuaW1wb3J0IHN1bnNldEljb24gZnJvbSAnLi9pbWFnZXMvc3Vuc2V0LnN2Zyc7XG5pbXBvcnQgeyBnZXRHaWYgfSBmcm9tICcuL2ZldGNoLWdpZic7XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dXZWF0aGVyKFxuICAgIHRlbXAsXG4gICAgaHVtaWRpdHksXG4gICAgd2luZFNwZWVkLFxuICAgIGNvbmRpdGlvbixcbiAgICBzdW5yaXNlLFxuICAgIHN1bnNldCxcbiAgICBjaXR5LFxuICAgIGljb24sXG4pIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbiAgICBjb25zdCBzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1zZWFyY2gtYnRuJyk7XG4gICAgY29uc3QgaW5wdXROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWNpdHktbmFtZScpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3QgaWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBnaWZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpY0R2VHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgZGF0YURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN1bkljb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc25ySWNEdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNuckljSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3Qgc25yUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBzbnNJY0R2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc25zSWNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBzbnNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGhOV3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB3cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgaWNvbkRpdi5jbGFzc0xpc3QgPSAnaWNvbi1kaXYgaW5wLW4td3QtZGl2JztcbiAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdpY29uLWNvbnRhaW5lcic7XG4gICAgZ2lmSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICBpY0R2VHh0LmNsYXNzTGlzdC5hZGQoJ2ljb24tZGl2LXR4dCcpO1xuICAgIGRhdGFEaXYuY2xhc3NMaXN0ID0gJ2RhdGEtZGl2IGlucC1uLXd0LWRpdic7XG4gICAgc3VuSWNvbnNEaXYuY2xhc3NMaXN0LmFkZCgnc3VuLWljb25zLWRpdicpO1xuICAgIHNuckljRHYuY2xhc3NMaXN0LmFkZCgnc3VucmlzZS1pY29uLWRpdicpO1xuICAgIHNuckljSW1nLmNsYXNzTGlzdC5hZGQoJ3N1bnJpc2UtaWNvbicpO1xuICAgIHNuclAuY2xhc3NMaXN0LmFkZCgnc3VucmlzZS10aW1lJyk7XG4gICAgc25zSWNEdi5jbGFzc0xpc3QuYWRkKCdzdW5zZXQtaWNvbi1kaXYnKTtcbiAgICBzbnNJY0ltZy5jbGFzc0xpc3QuYWRkKCdzdW5zZXQtaWNvbicpO1xuICAgIHNuc1AuY2xhc3NMaXN0LmFkZCgnc3Vuc2V0LXRpbWUnKTtcbiAgICBoTldzLmNsYXNzTGlzdC5hZGQoJ2gtbi13cycpO1xuICAgIG1haW4uY2xhc3NMaXN0ID0gJyc7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLW1haW4nKTtcbiAgICBnaWZJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnaWNvbicpO1xuICAgIGdpZkltZy5zcmMgPSBhd2FpdCBnZXRHaWYoaWNvbik7XG4gICAgc25ySWNJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnc3VucmlzZSBpY29uJyk7XG4gICAgc25ySWNJbWcuc3JjID0gc3VucmlzZUljb247XG4gICAgc25zSWNJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnc3Vuc2V0IGljb24nKTtcbiAgICBzbnNJY0ltZy5zcmMgPSBzdW5zZXRJY29uO1xuICAgIGgxLnRleHRDb250ZW50ID0gYCR7dGVtcH3CsEZgO1xuICAgIGgyLnRleHRDb250ZW50ID0gY29uZGl0aW9uO1xuICAgIGgzLnRleHRDb250ZW50ID0gY2l0eTtcbiAgICBzbnJQLnRleHRDb250ZW50ID0gc3VucmlzZTtcbiAgICBzbnNQLnRleHRDb250ZW50ID0gc3Vuc2V0O1xuICAgIGhQLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2h1bWlkaXR5fSVgO1xuICAgIHdzLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWQ6ICR7d2luZFNwZWVkfWttL2hgO1xuICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZ2lmSW1nKTtcbiAgICBpY0R2VHh0LmFwcGVuZENoaWxkKGgxKTtcbiAgICBpY0R2VHh0LmFwcGVuZENoaWxkKGgyKTtcbiAgICBpY0R2VHh0LmFwcGVuZENoaWxkKGgzKTtcbiAgICBpY29uRGl2LmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuICAgIGljb25EaXYuYXBwZW5kQ2hpbGQoaWNEdlR4dCk7XG4gICAgc25ySWNEdi5hcHBlbmRDaGlsZChzbnJJY0ltZyk7XG4gICAgc25ySWNEdi5hcHBlbmRDaGlsZChzbnJQKTtcbiAgICBzbnNJY0R2LmFwcGVuZENoaWxkKHNuc0ljSW1nKTtcbiAgICBzbnNJY0R2LmFwcGVuZENoaWxkKHNuc1ApO1xuICAgIHN1bkljb25zRGl2LmFwcGVuZENoaWxkKHNuckljRHYpO1xuICAgIHN1bkljb25zRGl2LmFwcGVuZENoaWxkKHNuc0ljRHYpO1xuICAgIGhOV3MuYXBwZW5kQ2hpbGQoaFApO1xuICAgIGhOV3MuYXBwZW5kQ2hpbGQod3MpO1xuICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQoc3VuSWNvbnNEaXYpO1xuICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQoaE5Xcyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChpY29uRGl2KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRhdGFEaXYpO1xuICAgIGlmIChzQnRuICYmIGlucHV0TmF2KSB7XG4gICAgICAgIGlucHV0TmF2LnZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYXYtY2l0eS1uYW1lJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtc2VhcmNoLWJ0bicpO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnU2VhcmNoJztcbiAgICAgICAgbmF2Lmluc2VydEJlZm9yZShidG4sIG5hdi5maXJzdENoaWxkKTtcbiAgICAgICAgbmF2Lmluc2VydEJlZm9yZShpbnB1dCwgbmF2LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgc2hvd1dlYXRoZXIgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0ludGVyLVZhcmlhYmxlRm9udF9zbG50LHdnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2ludGVyJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIC0tcmVkOiAjZjIyZTJlO1xuICAgIC0tbGlnaHQtcmVkOiAjZmY0ZDRkO1xuICAgIC0tZGFyay1ibHVlOiAjMWU0NTU0O1xuICAgIC0tZm9udC1ncm91cDogJ2ludGVyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ncm91cCk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMCAxNSU7XG4gICAgZ2FwOiA2MHB4O1xufVxuXG4ubG9nbyB7XG4gICAgaGVpZ2h0OiA3N3B4O1xufVxuXG51bCxcbm5hdiB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudWwge1xuICAgIGdhcDogMTVweDtcbn1cblxubGkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmhvbWUtbWFpbiB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnAtbi13dC1kaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXJlZCk7XG4gICAgcGFkZGluZzogMTdweDtcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDE1cHggcmdiKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmlucHV0LWRpdiB7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuXG4uZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuI2NpdHktbmFtZSxcbiNuYXYtY2l0eS1uYW1lIHtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWdyb3VwKTtcbn1cblxuI25hdi1jaXR5LW5hbWUge1xuICAgIHdpZHRoOiAxOTBweDtcbn1cblxuI2NpdHktbmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWFyY2gtYnRuLFxuLm5hdi1zZWFyY2gtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYtc2VhcmNoLWJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5zZWFyY2gtYnRuIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ud2VhdGhlci1tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDclIDE1JTtcbiAgICBnYXA6IDMwcHg7XG59XG5cbi5pY29uLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZmxleDogMjtcbiAgICBnYXA6IDI1cHg7XG59XG5cbi5pY29uLWRpdixcbi5kYXRhLWRpdiB7XG4gICAgbWluLWhlaWdodDogMTkwcHg7XG59XG5cbi5kYXRhLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGZsZXg6IDE7XG4gICAgZ2FwOiAxNXB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmgxLFxuaDIsXG5oMyB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc3VuLWljb25zLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGdhcDogMjVweDtcbn1cblxuLmgtbi13cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQiw0Q0FBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLE9BQU87SUFDUCxTQUFTO0FBQ2I7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLE9BQU87SUFDUCxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTs7O0lBR0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2ludGVyJztcXG4gICAgc3JjOiB1cmwoLi9mb250cy9JbnRlci1WYXJpYWJsZUZvbnRfc2xudFxcXFwsd2dodC50dGYpO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXJlZDogI2YyMmUyZTtcXG4gICAgLS1saWdodC1yZWQ6ICNmZjRkNGQ7XFxuICAgIC0tZGFyay1ibHVlOiAjMWU0NTU0O1xcbiAgICAtLWZvbnQtZ3JvdXA6ICdpbnRlcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ncm91cCk7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMCAxNSU7XFxuICAgIGdhcDogNjBweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDc3cHg7XFxufVxcblxcbnVsLFxcbm5hdiB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbmxpIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5ob21lLW1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucC1uLXd0LWRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXJlZCk7XFxuICAgIHBhZGRpbmc6IDE3cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA3cHggMTVweCByZ2IoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmlucHV0LWRpdiB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY2l0eS1uYW1lLFxcbiNuYXYtY2l0eS1uYW1lIHtcXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ncm91cCk7XFxufVxcblxcbiNuYXYtY2l0eS1uYW1lIHtcXG4gICAgd2lkdGg6IDE5MHB4O1xcbn1cXG5cXG4jY2l0eS1uYW1lIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZWFyY2gtYnRuLFxcbi5uYXYtc2VhcmNoLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5saSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1zZWFyY2gtYnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi53ZWF0aGVyLW1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA3JSAxNSU7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmljb24tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmbGV4OiAyO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5pY29uLWRpdixcXG4uZGF0YS1kaXYge1xcbiAgICBtaW4taGVpZ2h0OiAxOTBweDtcXG59XFxuXFxuLmRhdGEtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxufVxcblxcbi5pY29uLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmljb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbnAge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnN1bi1pY29ucy1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4uaC1uLXdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsic2hvd0hvbWUiLCJzaG93V2VhdGhlciIsImV4dHJhY3REYXRhIiwiZGlzcGxheSIsImhvbWVCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmbGFnIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjaXR5TmFtZSIsInZhbHVlIiwiZGF0YSIsInRlbXAiLCJodW1pZGl0eSIsIndpbmRTcGVlZCIsImNvbmRpdGlvbiIsInN1bnJpc2UiLCJzdW5zZXQiLCJjaXR5IiwiaWNvbiIsIm5hdlNlYXJjaEJ0biIsImNiIiwic2V0VGltZW91dCIsIm9uY2UiLCJzZWFyY2hCdG4iLCJudlNlYXJjaEJ0biIsImNiMiIsImdldFdlYXRoZXIiLCJuYW1lIiwiY3VycmVudENvbmRpdGlvbnMiLCJ0b0ZpeGVkIiwid2luZHNwZWVkIiwiY29uZGl0aW9ucyIsImFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0R2lmIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwiaW1hZ2VzIiwib3JpZ2luYWwiLCJ1cmwiLCJlcnJvciIsIm1haW4iLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJuYXZJbnB1dCIsIm5hdkJ0biIsImNsYXNzTGlzdCIsImlubmVySFRNTCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmUiLCJsb2dvIiwid2luZG93IiwiaW1nIiwic3JjIiwic3VucmlzZUljb24iLCJzdW5zZXRJY29uIiwibmF2Iiwic0J0biIsImlucHV0TmF2IiwiaWNvbkRpdiIsImljb25Db250YWluZXIiLCJnaWZJbWciLCJpY0R2VHh0IiwiaDEiLCJoMiIsImgzIiwiZGF0YURpdiIsInN1bkljb25zRGl2Iiwic25ySWNEdiIsInNuckljSW1nIiwic25yUCIsInNuc0ljRHYiLCJzbnNJY0ltZyIsInNuc1AiLCJoTldzIiwiaFAiLCJ3cyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiXSwic291cmNlUm9vdCI6IiJ9