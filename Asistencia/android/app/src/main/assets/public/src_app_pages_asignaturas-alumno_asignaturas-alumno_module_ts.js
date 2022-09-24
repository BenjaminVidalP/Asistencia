"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_asignaturas-alumno_asignaturas-alumno_module_ts"],{

/***/ 6838:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/asignaturas-alumno/asignaturas-alumno-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturasAlumnoPageRoutingModule": () => (/* binding */ AsignaturasAlumnoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _asignaturas_alumno_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignaturas-alumno.page */ 809);




const routes = [
    {
        path: '',
        component: _asignaturas_alumno_page__WEBPACK_IMPORTED_MODULE_0__.AsignaturasAlumnoPage
    }
];
let AsignaturasAlumnoPageRoutingModule = class AsignaturasAlumnoPageRoutingModule {
};
AsignaturasAlumnoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AsignaturasAlumnoPageRoutingModule);



/***/ }),

/***/ 7408:
/*!***********************************************************************!*\
  !*** ./src/app/pages/asignaturas-alumno/asignaturas-alumno.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturasAlumnoPageModule": () => (/* binding */ AsignaturasAlumnoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _asignaturas_alumno_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignaturas-alumno-routing.module */ 6838);
/* harmony import */ var _asignaturas_alumno_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignaturas-alumno.page */ 809);







let AsignaturasAlumnoPageModule = class AsignaturasAlumnoPageModule {
};
AsignaturasAlumnoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _asignaturas_alumno_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsignaturasAlumnoPageRoutingModule
        ],
        declarations: [_asignaturas_alumno_page__WEBPACK_IMPORTED_MODULE_1__.AsignaturasAlumnoPage]
    })
], AsignaturasAlumnoPageModule);



/***/ }),

/***/ 809:
/*!*********************************************************************!*\
  !*** ./src/app/pages/asignaturas-alumno/asignaturas-alumno.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturasAlumnoPage": () => (/* binding */ AsignaturasAlumnoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _asignaturas_alumno_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignaturas-alumno.page.html?ngResource */ 9113);
/* harmony import */ var _asignaturas_alumno_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignaturas-alumno.page.scss?ngResource */ 1402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let AsignaturasAlumnoPage = class AsignaturasAlumnoPage {
    constructor(menu) {
        this.menu = menu;
        this.menu.enable(true);
    }
    ngOnInit() {
    }
};
AsignaturasAlumnoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
AsignaturasAlumnoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-asignaturas-alumno',
        template: _asignaturas_alumno_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_asignaturas_alumno_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsignaturasAlumnoPage);



/***/ }),

/***/ 1402:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/asignaturas-alumno/asignaturas-alumno.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".color-asig {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWduYXR1cmFzLWFsdW1uby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoiYXNpZ25hdHVyYXMtYWx1bW5vLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1hc2lne1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */";

/***/ }),

/***/ 9113:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/asignaturas-alumno/asignaturas-alumno.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-title>Asignaturas</ion-title>\r\n    <ion-buttons slot=\"start\" class=\"conteiner--btn\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button color=\"dark\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-content>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Seccion 003d</ion-card-subtitle>\r\n        <ion-card-title>Arquitectura</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  \r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Seccion 004d</ion-card-subtitle>\r\n        <ion-card-title>Calidad Software</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  \r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Seccion 002d</ion-card-subtitle>\r\n        <ion-card-title>Aplicaciones Moviles</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  \r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Seccion 005d</ion-card-subtitle>\r\n        <ion-card-title>Estadistica</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Seccion </ion-card-subtitle>\r\n        <ion-card-title>Ingles intermedio</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Seccion 003d</ion-card-subtitle>\r\n        <ion-card-title>Etica para el trabajo</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n\r\n  </ion-content>\r\n\r\n  \r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_asignaturas-alumno_asignaturas-alumno_module_ts.js.map