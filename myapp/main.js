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
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/characters.component */ "./src/app/characters/characters.component.ts");





var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_3__["StartpageComponent"] },
    { path: 'characters', component: _characters_characters_component__WEBPACK_IMPORTED_MODULE_4__["CharactersComponent"] }
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
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters/characters.component */ "./src/app/characters/characters.component.ts");
/* harmony import */ var _characters_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./characters/list-item/list-item.component */ "./src/app/characters/list-item/list-item.component.ts");
/* harmony import */ var _shared_ScriptLoaderService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/ScriptLoaderService */ "./src/app/shared/ScriptLoaderService.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_6__["StartpageComponent"],
                _characters_characters_component__WEBPACK_IMPORTED_MODULE_7__["CharactersComponent"],
                _characters_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_8__["ListItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [_shared_ScriptLoaderService__WEBPACK_IMPORTED_MODULE_9__["ScriptLoaderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/characters/characters.component.css":
/*!*****************************************************!*\
  !*** ./src/app/characters/characters.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.header-socials {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.list-inline {\r\n    padding-left: 0;\r\n    margin-left: -5px;\r\n    list-style: none;\r\n}\r\n\r\n.list-inline a{\r\n    padding: 0;\r\n}\r\n\r\n.list-inline>li {\r\n    display: inline-block;\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.header-socials li i {\r\n    font-size: 16px;\r\n}\r\n\r\ni.icon-bg-brown {\r\n    background: brown;\r\n}\r\n\r\ni.icon-custom {\r\n    color: white;\r\n    width: 40px;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    line-height: 40px;\r\n    margin-bottom: 5px;\r\n    text-align: center;\r\n    display: inline-block;\r\n    border: solid 0px transparent;\r\n}\r\n\r\n.rounded-x {\r\n    border-radius: 50% !important;\r\n}\r\n\r\n.copyright-text {\r\n    color: #555;\r\n    font-size: 12px;\r\n    text-align: center;\r\n}\r\n\r\n.logo{\r\n    text-align: center;\r\n}\r\n\r\n#menucontent nav li{\r\n    width: 300px;\r\n}\r\n\r\n.dimmer-info{\r\n    margin: 25px;\r\n    padding: 20px;\r\n    font-size: 20px;\r\n    background: linear-gradient(to right,transparent, rgba(165, 42, 42, 0.356), transparent)\r\n}\r\n\r\n@media (min-width: 768px){\r\n    .gamemenu .navbar-default{\r\n        top: 0;\r\n        width: 300px;\r\n        height: 100%;\r\n        position: fixed;\r\n        padding-top: 30px;\r\n        overflow-y: scroll;\r\n        overflow-x: hidden;\r\n        background-color: wheat;\r\n    }\r\n    .navbar-default .navbar-toggler {\r\n        display: none;\r\n    }\r\n    .navbar-expand-lg .navbar-collapse {\r\n        display: block !important;\r\n        text-align: center;\r\n        margin-top: 30px;\r\n        margin-bottom: 30px;\r\n    }\r\n    .navbar{\r\n        display: block;\r\n        text-align: center;\r\n        padding: 0px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVycy9jaGFyYWN0ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLFdBQVc7Q0FDZDs7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCOztBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUNEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qiw4QkFBOEI7Q0FDakM7O0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakM7O0FBQ0Q7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7O0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix3RkFBd0Y7Q0FDM0Y7O0FBQ0Q7SUFDSTtRQUNJLE9BQU87UUFDUCxhQUFhO1FBQ2IsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQix3QkFBd0I7S0FDM0I7SUFDRDtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLDBCQUEwQjtRQUMxQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtLQUN2QjtJQUNEO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixhQUFhO0tBQ2hCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGVhZGVyLXNvY2lhbHMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5saXN0LWlubGluZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLmxpc3QtaW5saW5lIGF7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5saXN0LWlubGluZT5saSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4uaGVhZGVyLXNvY2lhbHMgbGkgaSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuaS5pY29uLWJnLWJyb3duIHtcclxuICAgIGJhY2tncm91bmQ6IGJyb3duO1xyXG59XHJcbmkuaWNvbi1jdXN0b20ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogc29saWQgMHB4IHRyYW5zcGFyZW50O1xyXG59XHJcbi5yb3VuZGVkLXgge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvcHlyaWdodC10ZXh0IHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jbWVudWNvbnRlbnQgbmF2IGxpe1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbi5kaW1tZXItaW5mb3tcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsdHJhbnNwYXJlbnQsIHJnYmEoMTY1LCA0MiwgNDIsIDAuMzU2KSwgdHJhbnNwYXJlbnQpXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5nYW1lbWVudSAubmF2YmFyLWRlZmF1bHR7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhcntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/characters/characters.component.html":
/*!******************************************************!*\
  !*** ./src/app/characters/characters.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"charset\">\n    <div class=\"container\">\n        <div class=\"header\" style=\"text-align: center\">\n          <img src=\"../../assets/character-images/Dragon_Ball_Super_Logo.png\" alt=\"\" srcset=\"\" style=\"max-width: 400px; width: 100%\" >\n          <h1>Characters</h1>\n          <hr>\n        </div>\n        <div class=\"ui three doubling special stackable cards\">\n    \n            <div *ngFor = \"let charEl of characters\" class=\"ui centered card\">\n                      <div class=\"blurring dimmable image\" style=\"text-align: center\">\n                          <div class=\"ui dimmer\">\n                             <div class=\"center\">\n                                 <div class=\"info\">\n                                      <h4>{{charEl.name}}</h4>\n                                      <p>{{charEl.summary}}</p>\n                                  </div>\n                              </div>\n                          </div>\n                          <img src=\"../../assets/character-images/{{charEl.Imgset}}_thmb.png\" alt=\"\" style=\"max-height: 300px;\">\n                      </div>\n                      <div class=\"ui page dimmer\">\n                              <div class=\"content\">\n                                  <i class=\"close icon exit\"></i>\n                                  <img style=\"width: 100%; max-width: 1000px;\" src=\"\" alt=\"\">\n                                  <div class=\"dimmer-info\">\n                                      <h4>{{charEl.name}}</h4>\n                                      <p>{{charEl.summary}}</p>\n                                  </div>\n                              </div>\n                      </div> \n            </div>\n          </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/characters/characters.component.ts":
/*!****************************************************!*\
  !*** ./src/app/characters/characters.component.ts ***!
  \****************************************************/
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
        this.characters = __webpack_require__(/*! ../../assets/character.json */ "./src/assets/character.json");
    };
    CharactersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-characters',
            template: __webpack_require__(/*! ./characters.component.html */ "./src/app/characters/characters.component.html"),
            styles: [__webpack_require__(/*! ./characters.component.css */ "./src/app/characters/characters.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CharactersComponent);
    return CharactersComponent;
}());



/***/ }),

/***/ "./src/app/characters/list-item/list-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/characters/list-item/list-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n    min-width: 300px;\r\n    text-align: left;\r\n    padding-left: 30px;\r\n}\r\na {\r\n    padding: 5px 0px;\r\n    text-decoration: none;\r\n    font-size: 1em;\r\n    color: black;\r\n    display: block;\r\n}\r\na:hover, a.active {\r\n    color: brown;\r\n}\r\nli:hover, li.active {\r\n    background-color: rgba(165, 42, 42, 0.137);\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVycy9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsYUFBYTtJQUNiLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLDJDQUEyQztJQUMzQyxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9jaGFyYWN0ZXJzL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpe1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuYSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYTpob3ZlciwgYS5hY3RpdmUge1xyXG4gICAgY29sb3I6IGJyb3duO1xyXG59XHJcblxyXG5saTpob3ZlciwgbGkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCA0MiwgNDIsIDAuMTM3KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/characters/list-item/list-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/characters/list-item/list-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"gamename\">\n    <a\n      style=\"cursor: pointer;\"\n      [routerLink]=\"[char.id]\"\n      routerLinkActive=\"active\"\n      >\n      {{ char.name }}\n    </a>\n  </li> "

/***/ }),

/***/ "./src/app/characters/list-item/list-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/characters/list-item/list-item.component.ts ***!
  \*************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_character_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/character.model */ "./src/app/shared/character.model.ts");



var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
    }
    ListItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_character_model__WEBPACK_IMPORTED_MODULE_2__["Character"])
    ], ListItemComponent.prototype, "char", void 0);
    ListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-item',
            template: __webpack_require__(/*! ./list-item.component.html */ "./src/app/characters/list-item/list-item.component.html"),
            styles: [__webpack_require__(/*! ./list-item.component.css */ "./src/app/characters/list-item/list-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListItemComponent);
    return ListItemComponent;
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

/***/ "./src/app/shared/character.model.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/character.model.ts ***!
  \*******************************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
var Character = /** @class */ (function () {
    function Character(id, name, Imgset, summary, DescriptionUrl) {
        this.id = id;
        this.name = name;
        this.Imgset = Imgset;
        this.summary = summary;
        this.DescriptionUrl = DescriptionUrl;
    }
    return Character;
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
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = [{"id":"01","name":"Son Goku","Imgset":"01","Summary":"The son of Bardock, a low-class Saiyan warrior; and Gi-ne, Kakarot was born on Planet Vegeta in or around Age 737. Sensing the impeding danger to the Saiyan race from Frieza, Kakarot's parents secretly sent him off planet to Earth when he was only three years old.","DescriptionUrl":"https://comicvine.gamespot.com/goku/4005-19765/"},{"id":"02","name":"Vegeta","Imgset":"02","Summary":"Vegeta, formerly the Prince of all Saiyans, was previously a supervillain who later evolved into an anti-hero and eventually a hero through the duration of the DragonBall franchise. An exceptional fighting prodigy, Vegeta has trained himself since a young age; and has always had natural talents in martial arts and chi control. He is among the last surviving pure Saiyans from the planet Vegeta. Vegeta's obsession to surpass Goku is among the key traits to his character.","DescriptionUrl":"https://comicvine.gamespot.com/vegeta/4005-40722/"},{"id":"03","name":"Whis","Imgset":"03","Summary":"Whis is the attendant and teacher of Beerus the God of Destruction. Brother to Vados.","DescriptionUrl":"https://comicvine.gamespot.com/whis/4005-123535/"},{"id":"04","name":"Lord Beerus","Imgset":"04","Summary":"Lord Beerus is the ancient and powerful God of Destruction of the 7th Universe, tasked with maintaining universal balance through destruction. He is the brother to Champa, and is an extremely feared being throughout the universe.","DescriptionUrl":"https://comicvine.gamespot.com/beerus/4005-105758/"},{"id":"05","name":"Krillin","Imgset":"05","Summary":"Krillin is the most powerful human in the Dragonball Universe. Krillin is short, bald and has six dots tattooed on his forehead. He usually wears the the turtle hermit school name on his uniform. Krillin is married and has a daughter. After the cell games, Krillin eventually grew hair.","DescriptionUrl":"https://comicvine.gamespot.com/krillin/4005-45683/"},{"id":"06","name":"Gohan","Imgset":"06","Summary":"The first son of Goku and Chichi and a half-Human, half-Saiyan, Son Gohan held the potential for enormous power. Growing up a scholar, not a warrior like his father, he nevertheless has answered the call to protect Earth multiple times. He is the most powerful non fused warrior in the Dragon Ball Z universe by the end of Dragon Ball Z series. He is the father of Pan and husband to Videl. He is Goten's older brother and Grandson to both Ox King and Bardock, respectively. (Goku and Chichi's fathers)","DescriptionUrl":"https://comicvine.gamespot.com/gohan/4005-40743/"}];

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