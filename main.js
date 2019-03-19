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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container.ready {\r\n    border: 1px solid #eee;\r\n    border-radius: 5px;\r\n    border-color: #eee #ddd #bbb;\r\n    box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 3px;\r\n}\r\n\r\ninput {\r\n    margin: 10px 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIucmVhZHkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2VlZSAjZGRkICNiYmI7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAxcHggM3B4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n  [class.ready]=\"!!user\">\n  <input [formControl]=\"findControl\"\n    placeholder=\"GitHub username\" />\n\n  <app-user *ngIf=\"user\"\n    [user]=\"user\"></app-user>\n\n  <app-error *ngIf=\"error\"></app-error>\n</div>\n\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_github_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/github.service */ "./src/app/services/github.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var AppComponent = /** @class */ (function () {
    // Подключение githubService для поиска пользователя
    function AppComponent(githubService) {
        this.githubService = githubService;
        // Контрол для поиска пользователей
        this.findControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        // Ошибка поиска
        this.error = false;
        // Найденный пользователь
        this.user = null;
    }
    // Хук инициализации компонента
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.findControl.valueChanges
            .pipe(
        // Фильтруем если введено меньше двух символов
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (value) { return value.length > 2; }), 
        // Ставим задержку одну секунду
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), 
        // Запрашиваем данные пользователя
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (value) {
            return _this.githubService.getUser(value).pipe(
            // Обработка ошибок
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                _this.user = null;
                _this.error = true;
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
            }));
        }))
            // Получение данных
            .subscribe(function (user) {
            _this.user = user;
            _this.error = false;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _services_github_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/github.service */ "./src/app/services/github.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [_services_github_service__WEBPACK_IMPORTED_MODULE_8__["GithubService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error\">\n  <h2>Oops!</h2>\n  <b>\n    User not found.\n  </b>\n  <p>Please try searching again.</p>\n</div>"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".github-card {\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    color: #555;\r\n    position: relative;\r\n}\r\n\r\n.github-card .header {\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 148px;\r\n    border-radius: 4px 4px 0 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-color: #000;\r\n}\r\n\r\n.github-card .avatar {\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    background: #fff;\r\n    border-radius: 100%;\r\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);\r\n    text-decoration: none;\r\n    -webkit-transition: -webkit-transform 0.2s ease-in-out;\r\n}\r\n\r\n.github-card .avatar:hover {\r\n    -webkit-transform: rotate(45deg);\r\n}\r\n\r\n.github-card h1 {\r\n    color: #111;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    text-decoration: none;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.github-card ul {\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    color: #707070;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    border-top: 1px solid #eee;\r\n    border-bottom: 1px solid #eee;\r\n    zoom: 1;\r\n}\r\n\r\n.github-card ul:after {\r\n    display: block;\r\n    content: '';\r\n    clear: both;\r\n}\r\n\r\n.github-card .status li {\r\n    float: left;\r\n    padding: 8px 0;\r\n    box-shadow: 1px 0 0 #eee;\r\n}\r\n\r\n.github-card .status li:last-of-type {\r\n    box-shadow: none;\r\n}\r\n\r\n.github-card .status strong {\r\n    display: block;\r\n    color: #292f33;\r\n    font-size: 16px;\r\n    line-height: 1.6;\r\n}\r\n\r\n.github-card .status a {\r\n    color: #707070;\r\n    text-decoration: none;\r\n}\r\n\r\n.github-card .status a:hover {\r\n    color: #4183c4;\r\n}\r\n\r\n.user-card .header {\r\n    background-image: url('https://cdn-images-1.medium.com/max/2000/1*19LWzzJJDPqGq67Vyd0EjQ.jpeg');\r\n}\r\n\r\n.user-card .User {\r\n    background-position: top left;\r\n}\r\n\r\n.user-card .Organization {\r\n    background-position: top right;\r\n}\r\n\r\n.user-card .avatar {\r\n    margin-top: -40px;\r\n    border: 3px solid #fff;\r\n    position: relative;\r\n}\r\n\r\n.user-card img {\r\n    display: block;\r\n    width: 80px;\r\n    height: 80px;\r\n}\r\n\r\n.user-card h1 {\r\n    letter-spacing: -0.06em;\r\n    margin: 16px 0 20px;\r\n    line-height: 1;\r\n}\r\n\r\n.user-card .status li {\r\n    width: 33%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxxQkFBcUI7SUFDckIsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsT0FBTztBQUNYOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksK0ZBQStGO0FBQ25HOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdpdGh1Yi1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmdpdGh1Yi1jYXJkIC5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTQ4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZ2l0aHViLWNhcmQgLmF2YXRhciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZ2l0aHViLWNhcmQgLmF2YXRhcjpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLmdpdGh1Yi1jYXJkIGgxIHtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG4uZ2l0aHViLWNhcmQgdWwge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICB6b29tOiAxO1xyXG59XHJcblxyXG4uZ2l0aHViLWNhcmQgdWw6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uZ2l0aHViLWNhcmQgLnN0YXR1cyBsaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDAgMCAjZWVlO1xyXG59XHJcblxyXG4uZ2l0aHViLWNhcmQgLnN0YXR1cyBsaTpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmdpdGh1Yi1jYXJkIC5zdGF0dXMgc3Ryb25nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICMyOTJmMzM7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4uZ2l0aHViLWNhcmQgLnN0YXR1cyBhIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ2l0aHViLWNhcmQgLnN0YXR1cyBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNDE4M2M0O1xyXG59XHJcblxyXG4udXNlci1jYXJkIC5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2Nkbi1pbWFnZXMtMS5tZWRpdW0uY29tL21heC8yMDAwLzEqMTlMV3p6SkpEUHFHcTY3VnlkMEVqUS5qcGVnJyk7XHJcbn1cclxuXHJcbi51c2VyLWNhcmQgLlVzZXIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XHJcbn1cclxuXHJcbi51c2VyLWNhcmQgLk9yZ2FuaXphdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XHJcbn1cclxuXHJcbi51c2VyLWNhcmQgLmF2YXRhciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51c2VyLWNhcmQgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi51c2VyLWNhcmQgaDEge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2ZW07XHJcbiAgICBtYXJnaW46IDE2cHggMCAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi51c2VyLWNhcmQgLnN0YXR1cyBsaSB7XHJcbiAgICB3aWR0aDogMzMlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"github-card user-card\">\n  <div class=\"header User\"></div>\n  <a class=\"avatar\"\n    [href]=\"'https://github.com/'+user.login\">\n      <img [src]=\"user.avatar_url+'&s=80'\" [alt]=\"user.name\" />\n    </a>\n  <div class=\"content\">\n    <h1>{{user.name}}</h1>\n    <ul class=\"status\">\n      <li>\n        <a [href]=\"'https://github.com/'+user.login+'?tab=repositories'\">\n            <strong>{{user.public_repos}}</strong>Repos\n          </a>\n      </li>\n      <li>\n        <a [href]=\"'https://gist.github.com/'+user.login\">\n            <strong>{{user.public_gists}}</strong>Gists\n          </a>\n      </li>\n      <li>\n        <a [href]=\"'https://github.com/'+user.login+'/followers'\">\n            <strong>{{user.followers}}</strong>Followers\n          </a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");



var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], UserComponent.prototype, "user", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/github.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/github.service.ts ***!
  \********************************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GithubService = /** @class */ (function () {
    // Подключаем модуль для работы с http
    function GithubService(http) {
        this.http = http;
    }
    // Метод для запроса пользователя
    GithubService.prototype.getUser = function (name) {
        var url = "https://api.github.com/users/" + name;
        return this.http.get(url);
    };
    GithubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GithubService);
    return GithubService;
}());



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

module.exports = __webpack_require__(/*! E:\angularproject\github-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map