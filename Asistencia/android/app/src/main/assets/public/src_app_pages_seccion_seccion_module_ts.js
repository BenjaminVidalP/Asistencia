"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_seccion_seccion_module_ts"],{

/***/ 6119:
/*!*********************************************************!*\
  !*** ./src/app/pages/seccion/seccion-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeccionPageRoutingModule": () => (/* binding */ SeccionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _seccion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seccion.page */ 8137);




const routes = [
    {
        path: '',
        component: _seccion_page__WEBPACK_IMPORTED_MODULE_0__.SeccionPage
    }
];
let SeccionPageRoutingModule = class SeccionPageRoutingModule {
};
SeccionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SeccionPageRoutingModule);



/***/ }),

/***/ 8473:
/*!*************************************************!*\
  !*** ./src/app/pages/seccion/seccion.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeccionPageModule": () => (/* binding */ SeccionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _seccion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seccion-routing.module */ 6119);
/* harmony import */ var _seccion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seccion.page */ 8137);







let SeccionPageModule = class SeccionPageModule {
};
SeccionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _seccion_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeccionPageRoutingModule
        ],
        declarations: [_seccion_page__WEBPACK_IMPORTED_MODULE_1__.SeccionPage]
    })
], SeccionPageModule);



/***/ }),

/***/ 8137:
/*!***********************************************!*\
  !*** ./src/app/pages/seccion/seccion.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeccionPage": () => (/* binding */ SeccionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _seccion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seccion.page.html?ngResource */ 8959);
/* harmony import */ var _seccion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seccion.page.scss?ngResource */ 5938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let SeccionPage = class SeccionPage {
    constructor(menu) {
        this.menu = menu;
        this.menu.enable(true);
    }
    ngOnInit() {
    }
};
SeccionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
SeccionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-seccion',
        template: _seccion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_seccion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SeccionPage);



/***/ }),

/***/ 5938:
/*!************************************************************!*\
  !*** ./src/app/pages/seccion/seccion.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".color-asist {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY2Npb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNlY2Npb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLWFzaXN0e1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */";

/***/ }),

/***/ 8959:
/*!************************************************************!*\
  !*** ./src/app/pages/seccion/seccion.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-title>Secciones </ion-title>\r\n    <ion-buttons slot=\"start\" class=\"conteiner--btn\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button color=\"dark\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"color-asist\" >\r\n        <h2>Arquitectura</h2>\r\n        <h5>Seccion: ASY4131 </h5>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"color-asist\">\r\n        <h2>Calidad Software</h2>\r\n        <h5>Seccion: CSY4111 </h5>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"color-asist\">\r\n        <h2>Estadistica Descriptiva</h2>\r\n        <h5>Seccion: MAT4140 </h5>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"color-asist\">\r\n        <h2>Aplicaciones Moviles</h2>\r\n        <h5>Seccion: PGY4121 </h5>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_seccion_seccion_module_ts.js.map