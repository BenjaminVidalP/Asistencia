"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let HomePage = class HomePage {
    constructor(menu) {
        this.menu = menu;
        this.menu.enable(false);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".divider {\n  display: flex;\n}\n.divider:before, .divider:after {\n  content: \"\";\n  flex: 1;\n}\n.line {\n  align-items: center;\n  margin: 1em -1em;\n  color: #cccccc;\n}\n.line:before, .line:after {\n  height: 4px;\n  margin: 0 1em;\n}\n.one-line:before, .one-line:after {\n  background: #cccccc;\n}\n.auth-form ion-grid,\n.auth-form ion-row {\n  justify-content: center;\n}\n.already {\n  display: block;\n  text-align: center;\n  padding-bottom: 10px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtBQUFGO0FBRUU7RUFFRSxXQUFBO0VBQ0EsT0FBQTtBQURKO0FBS0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZGO0FBSUU7RUFFRSxXQUFBO0VBQ0EsYUFBQTtBQUhKO0FBUUU7RUFFRyxtQkFBQTtBQU5MO0FBVUE7O0VBRUUsdUJBQUE7QUFQRjtBQVVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBUEYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmRpdmlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMWVtIC0xZW07XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbiAgXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIG1hcmdpbjogMCAxZW07XHJcbiAgfVxyXG59IFxyXG5cclxuLm9uZS1saW5lIHtcclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG4gIH1cclxufVxyXG5cclxuLmF1dGgtZm9ybSBpb24tZ3JpZCxcclxuLmF1dGgtZm9ybSBpb24tcm93IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFscmVhZHkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-title>\r\n      Tecno - Nacional\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"auth-form\">\r\n  <div>\r\n    <img src=\"/assets/icon/uni2.png\" alt=\"\">\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col align-self-center>\r\n        <ion-button  [routerLink]=\"['/registro']\" expand=\"block\" color=\"warning\">Registrarse</ion-button>\r\n\r\n        <span class=\"divider line one-line\">O</span>\r\n\r\n        <span class=\"already\">¿Tienes usuario?</span>\r\n\r\n        <ion-button [routerLink]=\"['/inicio-sesion']\" expand=\"block\" color=\"warning\">Iniciar Sesión</ion-button>\r\n        <ion-button [routerLink]=\"['/perfil-profesor']\" expand=\"block\" color=\"warning\">PerfilProfesor</ion-button>\r\n        \r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map