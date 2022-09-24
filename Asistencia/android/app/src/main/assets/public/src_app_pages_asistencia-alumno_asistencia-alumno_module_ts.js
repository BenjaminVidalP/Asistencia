"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_asistencia-alumno_asistencia-alumno_module_ts"],{

/***/ 3391:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/asistencia-alumno/asistencia-alumno-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaAlumnoPageRoutingModule": () => (/* binding */ AsistenciaAlumnoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _asistencia_alumno_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia-alumno.page */ 7965);




const routes = [
    {
        path: '',
        component: _asistencia_alumno_page__WEBPACK_IMPORTED_MODULE_0__.AsistenciaAlumnoPage
    }
];
let AsistenciaAlumnoPageRoutingModule = class AsistenciaAlumnoPageRoutingModule {
};
AsistenciaAlumnoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AsistenciaAlumnoPageRoutingModule);



/***/ }),

/***/ 9737:
/*!*********************************************************************!*\
  !*** ./src/app/pages/asistencia-alumno/asistencia-alumno.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaAlumnoPageModule": () => (/* binding */ AsistenciaAlumnoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _asistencia_alumno_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia-alumno-routing.module */ 3391);
/* harmony import */ var _asistencia_alumno_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asistencia-alumno.page */ 7965);







let AsistenciaAlumnoPageModule = class AsistenciaAlumnoPageModule {
};
AsistenciaAlumnoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _asistencia_alumno_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsistenciaAlumnoPageRoutingModule
        ],
        declarations: [_asistencia_alumno_page__WEBPACK_IMPORTED_MODULE_1__.AsistenciaAlumnoPage]
    })
], AsistenciaAlumnoPageModule);



/***/ }),

/***/ 7965:
/*!*******************************************************************!*\
  !*** ./src/app/pages/asistencia-alumno/asistencia-alumno.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaAlumnoPage": () => (/* binding */ AsistenciaAlumnoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _asistencia_alumno_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia-alumno.page.html?ngResource */ 9435);
/* harmony import */ var _asistencia_alumno_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asistencia-alumno.page.scss?ngResource */ 6222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let AsistenciaAlumnoPage = class AsistenciaAlumnoPage {
    constructor(menu) {
        this.menu = menu;
        this.menu.enable(true);
    }
    ngOnInit() {
    }
};
AsistenciaAlumnoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
AsistenciaAlumnoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-asistencia-alumno',
        template: _asistencia_alumno_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_asistencia_alumno_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsistenciaAlumnoPage);



/***/ }),

/***/ 6222:
/*!********************************************************************************!*\
  !*** ./src/app/pages/asistencia-alumno/asistencia-alumno.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".color-asist {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaXN0ZW5jaWEtYWx1bW5vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJhc2lzdGVuY2lhLWFsdW1uby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItYXNpc3R7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */";

/***/ }),

/***/ 9435:
/*!********************************************************************************!*\
  !*** ./src/app/pages/asistencia-alumno/asistencia-alumno.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-title>Asistencia</ion-title>\r\n    <ion-buttons slot=\"start\" class=\"conteiner--btn\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button color=\"dark\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"color-asist\" >\r\n        <h2>Arquitectura</h2>\r\n        <h5>100% (7 de 7 clases)</h5>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"color-asist\">\r\n        <h2>Calidad Software</h2>\r\n        <h5>85.7% (6 de 7 clases)</h5>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"color-asist\">\r\n        <h2>Estadistica Descriptiva</h2>\r\n        <h5>100% (5 de 5 clases)</h5>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label class=\"color-asist\">\r\n        <h2>Aplicaciones Moviles</h2>\r\n        <h5>100% (3 de 3 clases)</h5>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_asistencia-alumno_asistencia-alumno_module_ts.js.map