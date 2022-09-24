"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_codigoqr_codigoqr_module_ts"],{

/***/ 800:
/*!***********************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoqrPageRoutingModule": () => (/* binding */ CodigoqrPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _codigoqr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigoqr.page */ 528);




const routes = [
    {
        path: '',
        component: _codigoqr_page__WEBPACK_IMPORTED_MODULE_0__.CodigoqrPage
    }
];
let CodigoqrPageRoutingModule = class CodigoqrPageRoutingModule {
};
CodigoqrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CodigoqrPageRoutingModule);



/***/ }),

/***/ 2707:
/*!***************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoqrPageModule": () => (/* binding */ CodigoqrPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _codigoqr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigoqr-routing.module */ 800);
/* harmony import */ var _codigoqr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codigoqr.page */ 528);







let CodigoqrPageModule = class CodigoqrPageModule {
};
CodigoqrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _codigoqr_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodigoqrPageRoutingModule
        ],
        declarations: [_codigoqr_page__WEBPACK_IMPORTED_MODULE_1__.CodigoqrPage]
    })
], CodigoqrPageModule);



/***/ }),

/***/ 528:
/*!*************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodigoqrPage": () => (/* binding */ CodigoqrPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _codigoqr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codigoqr.page.html?ngResource */ 4280);
/* harmony import */ var _codigoqr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codigoqr.page.scss?ngResource */ 3338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let CodigoqrPage = class CodigoqrPage {
    constructor(menu) {
        this.menu = menu;
        this.menu.enable(true);
    }
    ngOnInit() {
    }
};
CodigoqrPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
CodigoqrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-codigoqr',
        template: _codigoqr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_codigoqr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CodigoqrPage);



/***/ }),

/***/ 3338:
/*!**************************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".letras {\n  color: #fff;\n  margin-top: 20px;\n}\n\n.centrado--qr {\n  display: flex;\n  margin-top: 50px;\n  margin-bottom: 30px;\n  align-items: center;\n  justify-content: center;\n}\n\n.centrado--caja--texto {\n  text-align: center;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGlnb3FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUE7O0FBQ0E7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUEiLCJmaWxlIjoiY29kaWdvcXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxldHJhc3tcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH0gICAgXHJcbi5jZW50cmFkby0tcXJ7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbm1hcmdpbi10b3A6IDUwcHg7XHJcbm1hcmdpbi1ib3R0b206IDMwcHg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2VudHJhZG8tLWNhamEtLXRleHRve1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG5mb250LXNpemU6IDE4cHg7XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 4280:
/*!**************************************************************!*\
  !*** ./src/app/pages/codigoqr/codigoqr.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-title>Codigo QR</ion-title>\r\n    <ion-buttons slot=\"start\" class=\"conteiner--btn\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button color=\"dark\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-content class=\"ion-padding\">\r\n    <div class=\"centrado--caja--texto\">\r\n      <p class=\"letras\">¡Escanear el QR para asistir!</p>\r\n    </div>\r\n    <div class=\"centrado--qr\">\r\n      <img src=\"assets/QRprobando.png\" >\r\n    </div>\r\n  </ion-content>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_codigoqr_codigoqr_module_ts.js.map