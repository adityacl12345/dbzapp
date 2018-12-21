(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startpage/startpage.component */ "./src/app/startpage/startpage.component.ts");
/* harmony import */ var _charpage_charpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charpage/charpage.component */ "./src/app/charpage/charpage.component.ts");
/* harmony import */ var _charpage_characters_characters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charpage/characters/characters.component */ "./src/app/charpage/characters/characters.component.ts");
/* harmony import */ var _charpage_chardetails_chardetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charpage/chardetails/chardetails.component */ "./src/app/charpage/chardetails/chardetails.component.ts");







var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_3__["StartpageComponent"] },
    { path: 'characters', component: _charpage_charpage_component__WEBPACK_IMPORTED_MODULE_4__["CharpageComponent"], children: [
            { path: '', redirectTo: 'charlist', pathMatch: 'full' },
            { path: 'charlist', component: _charpage_characters_characters_component__WEBPACK_IMPORTED_MODULE_5__["CharactersComponent"] },
            { path: 'charlist/:id', component: _charpage_chardetails_chardetails_component__WEBPACK_IMPORTED_MODULE_6__["ChardetailsComponent"] }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui.menu{\r\n    margin: 0;\r\n    background: transparent;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWkubWVudXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"ui stackable menu\">\n    <div class=\"item\">\n      <img src=\"../assets/Kame_Cove_Symbol.png\">\n    </div>\n    <a \n      class=\"item\" \n      routerLink=\"home\"\n      routerLinkActive=\"active\">\n      Home\n    </a>\n    <a \n      class=\"item\" \n      routerLink=\"characters\"\n      routerLinkActive=\"active\"\n      (click)=\"loadjs()\">\n      Characters\n    </a>\n    <div class=\"ui dropdown item\">\n      Videos <i class=\"dropdown icon\"></i>\n      <div class=\"menu\">\n        <a class=\"item\" href=\"https://kissanime.ru/Anime/Dragon-Ball-Dub\" target=\"_blank\">Dragon Ball</a>\n        <a class=\"item\" href=\"https://kissanime.ru/Anime/Dragon-Ball-Z-Dub\" target=\"_blank\">Dragon Ball Z</a>\n        <a class=\"item\" href=\"https://kissanime.ru/Anime/Dragon-Ball-GT-Dub\" target=\"_blank\">Dragon Ball GT</a>\n        <a class=\"item\" href=\"https://kissanime.ru/Anime/Dragon-Ball-Super-Dub\" target=\"_blank\">Dragon Ball Super</a>\n        <a class=\"item\" href=\"https://kissanime.ru/Anime/Dragon-Ball-Z-Movie-01-The-Dead-Zone-Dub\" target=\"_blank\">Dragon Ball Movies</a>\n      </div>\n    </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ScriptLoaderService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/ScriptLoaderService */ "./src/app/shared/ScriptLoaderService.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(ScriptLoader) {
        this.ScriptLoader = ScriptLoader;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.loadjs = function () {
        this.ScriptLoader.load('test').then(function (data) {
            // Script Loaded Successfully
        }).catch(function (error) { return console.log(error); });
        ;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_ScriptLoaderService__WEBPACK_IMPORTED_MODULE_2__["ScriptLoaderService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./startpage/startpage.component */ "./src/app/startpage/startpage.component.ts");
/* harmony import */ var _shared_ScriptLoaderService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/ScriptLoaderService */ "./src/app/shared/ScriptLoaderService.ts");
/* harmony import */ var _charpage_charpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./charpage/charpage.component */ "./src/app/charpage/charpage.component.ts");
/* harmony import */ var _charpage_characters_characters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./charpage/characters/characters.component */ "./src/app/charpage/characters/characters.component.ts");
/* harmony import */ var _charpage_chardetails_chardetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./charpage/chardetails/chardetails.component */ "./src/app/charpage/chardetails/chardetails.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_6__["StartpageComponent"],
                _charpage_characters_characters_component__WEBPACK_IMPORTED_MODULE_9__["CharactersComponent"],
                _charpage_charpage_component__WEBPACK_IMPORTED_MODULE_8__["CharpageComponent"],
                _charpage_chardetails_chardetails_component__WEBPACK_IMPORTED_MODULE_10__["ChardetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [_shared_ScriptLoaderService__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/charpage/characters/characters.component.css":
/*!**************************************************************!*\
  !*** ./src/app/charpage/characters/characters.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".charset{\r\n    background: url('dragon-ball-image-free.jpg') no-repeat center top/cover;\r\n    min-height: 1080px;\r\n}\r\n.charbox{\r\n    text-align: center;\r\n    background-color: rgba(245, 226, 202, 0.603);\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnBhZ2UvY2hhcmFjdGVycy9jaGFyYWN0ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5RUFBdUY7SUFDdkYsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsNkNBQTZDO0lBQzdDLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9jaGFycGFnZS9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFyc2V0e1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9kcmFnb24tYmFsbC1pbWFnZS1mcmVlLmpwZykgbm8tcmVwZWF0IGNlbnRlciB0b3AvY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDgwcHg7XHJcbn1cclxuLmNoYXJib3h7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjI2LCAyMDIsIDAuNjAzKTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/charpage/characters/characters.component.html":
/*!***************************************************************!*\
  !*** ./src/app/charpage/characters/characters.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"charset\">\n    <div class=\"container\">\n        <div class=\"header\" style=\"text-align: center\">\n          <img src=\"../../../assets/character-images/Dragon_Ball_Super_Logo.png\" alt=\"\" srcset=\"\" style=\"max-width: 400px; width: 100%\" >\n        </div>\n        <div class=\"charbox\">\n            <h1>Characters</h1>\n            <hr>\n            <div class=\"ui three doubling special stackable cards\">\n                <div *ngFor=\"let char of characters;\" class=\"ui centered card\">\n                        <div \n                        class=\"blurring dimmable image\" style=\"max-height: 300px; overflow: hidden;\">\n                              <div class=\"ui dimmer\">\n                                 <div class=\"center\">\n                                     <div class=\"info\">\n                                          <h2 style=\"color: white\">{{char.name}}</h2>\n                                      </div>\n                                  </div>\n                              </div>\n                              <img src=\"../../../../assets/character-images/{{char.Imgset}}/{{char.Imgset}}_thmb.png\" alt=\"\"\n                              >\n                        </div>\n                        <div class=\"content\" style=\"max-height: 50px\">\n                            <a routerLink=\"{{char.id}}\" routerLinkActive = \"active\">\n                                <h3>{{char.name}}</h3>\n                            </a>\n                        </div>\n                        <div class=\"extra content\" style=\"text-align:justify\">\n                                <span>\n                                    {{char.Summary}}\n                                </span>\n                        </div> \n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/charpage/characters/characters.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/charpage/characters/characters.component.ts ***!
  \*************************************************************/
/*! exports provided: CharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersComponent", function() { return CharactersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CharactersComponent = /** @class */ (function () {
    function CharactersComponent() {
    }
    CharactersComponent.prototype.ngOnInit = function () {
        this.characters = __webpack_require__(/*! ../../../assets/character.json */ "./src/assets/character.json");
    };
    CharactersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-characters',
            template: __webpack_require__(/*! ./characters.component.html */ "./src/app/charpage/characters/characters.component.html"),
            styles: [__webpack_require__(/*! ./characters.component.css */ "./src/app/charpage/characters/characters.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CharactersComponent);
    return CharactersComponent;
}());



/***/ }),

/***/ "./src/app/charpage/chardetails/chardetails.component.css":
/*!****************************************************************!*\
  !*** ./src/app/charpage/chardetails/chardetails.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJwYWdlL2NoYXJkZXRhaWxzL2NoYXJkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/charpage/chardetails/chardetails.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/charpage/chardetails/chardetails.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  chardetails works!\n</p>\n"

/***/ }),

/***/ "./src/app/charpage/chardetails/chardetails.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/charpage/chardetails/chardetails.component.ts ***!
  \***************************************************************/
/*! exports provided: ChardetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChardetailsComponent", function() { return ChardetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChardetailsComponent = /** @class */ (function () {
    function ChardetailsComponent() {
    }
    ChardetailsComponent.prototype.ngOnInit = function () {
    };
    ChardetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chardetails',
            template: __webpack_require__(/*! ./chardetails.component.html */ "./src/app/charpage/chardetails/chardetails.component.html"),
            styles: [__webpack_require__(/*! ./chardetails.component.css */ "./src/app/charpage/chardetails/chardetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChardetailsComponent);
    return ChardetailsComponent;
}());



/***/ }),

/***/ "./src/app/charpage/charpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/charpage/charpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJwYWdlL2NoYXJwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/charpage/charpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/charpage/charpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/charpage/charpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/charpage/charpage.component.ts ***!
  \************************************************/
/*! exports provided: CharpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharpageComponent", function() { return CharpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CharpageComponent = /** @class */ (function () {
    function CharpageComponent() {
    }
    CharpageComponent.prototype.ngOnInit = function () {
    };
    CharpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charpage',
            template: __webpack_require__(/*! ./charpage.component.html */ "./src/app/charpage/charpage.component.html"),
            styles: [__webpack_require__(/*! ./charpage.component.css */ "./src/app/charpage/charpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CharpageComponent);
    return CharpageComponent;
}());



/***/ }),

/***/ "./src/app/shared/ScriptLoaderService.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/ScriptLoaderService.ts ***!
  \***********************************************/
/*! exports provided: ScriptStore, ScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScriptStore = [
    { name: 'test', src: '../../assets/test.js' }
];
var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        var _this = this;
        this.scripts = {};
        ScriptStore.forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    ScriptLoaderService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptLoaderService.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.scripts[name].loaded) {
                //load script
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" || script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('body')[0].appendChild(script_1);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = _this.scripts[name].src;
                var list = document.getElementsByTagName('body')[0].querySelectorAll("script");
                var last = list[list.length - 1];
                document.getElementsByTagName('body')[0].removeChild(last);
                document.getElementsByTagName('body')[0].appendChild(script);
            }
        });
    };
    ScriptLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "./src/app/startpage/startpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/startpage/startpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#startpage{\r\n    background: black url('bg.jpg') no-repeat center top/cover;\r\n    min-height: 1080px;\r\n}\r\n.info{\r\n    display: flex;\r\n}\r\n.figure{\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 100px;\r\n}\r\n.figure img{\r\n    width: 100%;\r\n    max-width: 400px;\r\n    max-height: 800px;\r\n}\r\n.info-box{\r\n    margin-top: 280px;\r\n    background-color: lightblue;\r\n    border-radius: 20px;\r\n    position: relative;\r\n}\r\n.info-box .avatar{\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: -10%;\r\n    left: 2%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnRwYWdlL3N0YXJ0cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkRBQXNFO0lBQ3RFLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsU0FBUztDQUNaIiwiZmlsZSI6InNyYy9hcHAvc3RhcnRwYWdlL3N0YXJ0cGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N0YXJ0cGFnZXtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrIHVybCguLi8uLi9hc3NldHMvYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIHRvcC9jb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwODBweDtcclxufVxyXG4uaW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmZpZ3VyZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLmZpZ3VyZSBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MDBweDtcclxufVxyXG4uaW5mby1ib3h7XHJcbiAgICBtYXJnaW4tdG9wOiAyODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmluZm8tYm94IC5hdmF0YXJ7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTEwJTtcclxuICAgIGxlZnQ6IDIlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/startpage/startpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/startpage/startpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"startpage\">\n    <div class=\"container\">\n        <div class=\"info\">\n              <div class=\"figure\">\n                <img src=\"../../assets/figure.png\" alt=\"\" srcset=\"\" (click)=\"toggle()\" >\n              </div>\n              <div [@openClose]=\"isOpen ? 'open' : 'closed'\" class=\"info-box\">\n                <img src=\"../../assets/goku_avatar.png\" alt=\"\" class=\"avatar\">\n                <h1>Hi there!</h1>\n                <h4>Explore the Dragonball Universe!!</h4>\n                <hr>\n                <p>Being an ardent fan of the dragonball franchise, here I can take you on a ride to multiple universes of the dragonball multiverse and you can have an overview of all the characters and there info! Dont forget to check out the videos too! See you soon Byee!</p>\n              </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/startpage/startpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/startpage/startpage.component.ts ***!
  \**************************************************/
/*! exports provided: StartpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartpageComponent", function() { return StartpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var StartpageComponent = /** @class */ (function () {
    function StartpageComponent() {
        this.isOpen = false;
    }
    StartpageComponent.prototype.ngOnInit = function () {
    };
    StartpageComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    StartpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-startpage',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [
                    // ...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        visibility: "visible",
                        width: '100%',
                        opacity: 1,
                        padding: "30px"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        width: '0',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('closed => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open <=> closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')
                    ]),
                ]),
            ],
            template: __webpack_require__(/*! ./startpage.component.html */ "./src/app/startpage/startpage.component.html"),
            styles: [__webpack_require__(/*! ./startpage.component.css */ "./src/app/startpage/startpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StartpageComponent);
    return StartpageComponent;
}());



/***/ }),

/***/ "./src/assets/character.json":
/*!***********************************!*\
  !*** ./src/assets/character.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = [{"id":"01","name":"Son Goku","Imgset":"01","Summary":"The son of Bardock, a low-class Saiyan warrior; and Gi-ne, Kakarot was born on Planet Vegeta in or around Age 737. Sensing the impeding danger to the Saiyan race from Frieza, Kakarot's parents secretly sent him off planet to Earth when he was only three years old.","DescriptionUrl":"https://comicvine.gamespot.com/goku/4005-19765/"},{"id":"02","name":"Vegeta","Imgset":"02","Summary":"Vegeta, formerly the Prince of all Saiyans, was previously a supervillain who later evolved into an anti-hero and eventually a hero through the duration of the DragonBall franchise. An exceptional fighting prodigy, Vegeta has trained himself since a young age; and has always had natural talents in martial arts and chi control. He is among the last surviving pure Saiyans from the planet Vegeta. Vegeta's obsession to surpass Goku is among the key traits to his character.","DescriptionUrl":"https://comicvine.gamespot.com/vegeta/4005-40722/"},{"id":"03","name":"Whis","Imgset":"03","Summary":"Whis is the attendant and teacher of Beerus the God of Destruction. Brother to Vados.","DescriptionUrl":"https://comicvine.gamespot.com/whis/4005-123535/"},{"id":"04","name":"Lord Beerus","Imgset":"04","Summary":"Lord Beerus is the ancient and powerful God of Destruction of the 7th Universe, tasked with maintaining universal balance through destruction. He is the brother to Champa, and is an extremely feared being throughout the universe.","DescriptionUrl":"https://comicvine.gamespot.com/beerus/4005-105758/"},{"id":"05","name":"Krillin","Imgset":"05","Summary":"Krillin is the most powerful human in the Dragonball Universe. Krillin is short, bald and has six dots tattooed on his forehead. He usually wears the the turtle hermit school name on his uniform. Krillin is married and has a daughter. After the cell games, Krillin eventually grew hair.","DescriptionUrl":"https://comicvine.gamespot.com/krillin/4005-45683/"},{"id":"06","name":"Gohan","Imgset":"06","Summary":"The first son of Goku and Chichi and a half-Human, half-Saiyan, Son Gohan held the potential for enormous power. Growing up a scholar, not a warrior like his father, he nevertheless has answered the call to protect Earth multiple times. He is the most powerful non fused warrior in the Dragon Ball Z universe by the end of Dragon Ball Z series. He is the father of Pan and husband to Videl. He is Goten's older brother and Grandson to both Ox King and Bardock, respectively. (Goku and Chichi's fathers)","DescriptionUrl":"https://comicvine.gamespot.com/gohan/4005-40743/"},{"id":"07","name":"Jiren","Imgset":"07","Summary":"Jiren is a member of the Pride Troopers who participated in the Tournament of Power with the purpose of obtaining a wish from the Super Dragon Balls. Jiren is a quiet and honorable fighter, who believes in strength and justice.","DescriptionUrl":"http://dragonball.wikia.com/wiki/Jiren"},{"id":"08","name":"Toppo","Imgset":"08","Summary":"Top is the leader of the heroic team, the Pride Troopers, guardians of peace within Universe 11.[1] He is also a candidate to become Universe 11's next God of Destruction. Top is a humble, hot-blooded, and respectful, fighter who strongly believes in Justice.","DescriptionUrl":"http://dragonball.wikia.com/wiki/Top"},{"id":"09","name":"Zeno","Imgset":"09","Summary":"Grand Zeno, the Omni-King, is one of the kings of the 12 Universes, one of the two entities who stands above the entire multiverse, alongside his future counterpart, Future Zeno.","DescriptionUrl":"http://dragonball.wikia.com/wiki/Zeno"},{"id":"10","name":"Zamasu","Imgset":"10","Summary":"Zamasu is the Supreme Kai apprentice serving the Supreme Kai of Universe 10, Gowasu. He is also the former North Kai of Universe 10.","DescriptionUrl":"http://dragonball.wikia.com/wiki/Zamasu"},{"id":"11","name":"Broly","Imgset":"11","Summary":"Broly is the main antagonist in the Broly Triple Threat trilogy. He appears to be the latest of the Legendary Super Saiyans who appears every thousand years.","DescriptionUrl":"http://dragonball.wikia.com/wiki/Broly"},{"id":"12","name":"Frieza","Imgset":"12","Summary":"Frieza is the emperor of Universe 7, who controlled his own imperial army and feared for his ruthlessness and power. He is the descendant of Chilled, the second son of King Cold, the younger brother of Cooler, and the father of Kuriza. Frieza is the catalyst antagonist of the entire franchise, as it is his actions that led to Goku arriving on Earth. He has made several comebacks since his fight with Goku on Namek, including multiple invasions of Earth. Recently, he has been chosen to represent Universe 7 as the tenth member of Team Universe 7 for the Tournament of Power as a replacement for Good Buu. This makes him the most recurring villain of the Dragon Ball series. After the events of the Tournament of Power, he is revived and recovers his title as Emperor of Universe 7.","DescriptionUrl":"http://dragonball.wikia.com/wiki/Frieza"}];

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aditya.ghosh\Desktop\myangapp\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map