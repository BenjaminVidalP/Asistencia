"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_perfil-alumno_perfil-alumno_module_ts"],{

/***/ 4156:
/*!*********************************************************************!*\
  !*** ./src/app/pages/perfil-alumno/perfil-alumno-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilAlumnoPageRoutingModule": () => (/* binding */ PerfilAlumnoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _perfil_alumno_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-alumno.page */ 5809);




const routes = [
    {
        path: '',
        component: _perfil_alumno_page__WEBPACK_IMPORTED_MODULE_0__.PerfilAlumnoPage
    }
];
let PerfilAlumnoPageRoutingModule = class PerfilAlumnoPageRoutingModule {
};
PerfilAlumnoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilAlumnoPageRoutingModule);



/***/ }),

/***/ 6412:
/*!*************************************************************!*\
  !*** ./src/app/pages/perfil-alumno/perfil-alumno.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilAlumnoPageModule": () => (/* binding */ PerfilAlumnoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _perfil_alumno_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-alumno-routing.module */ 4156);
/* harmony import */ var _perfil_alumno_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil-alumno.page */ 5809);







let PerfilAlumnoPageModule = class PerfilAlumnoPageModule {
};
PerfilAlumnoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _perfil_alumno_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilAlumnoPageRoutingModule
        ],
        declarations: [_perfil_alumno_page__WEBPACK_IMPORTED_MODULE_1__.PerfilAlumnoPage]
    })
], PerfilAlumnoPageModule);



/***/ }),

/***/ 5809:
/*!***********************************************************!*\
  !*** ./src/app/pages/perfil-alumno/perfil-alumno.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilAlumnoPage": () => (/* binding */ PerfilAlumnoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _perfil_alumno_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-alumno.page.html?ngResource */ 616);
/* harmony import */ var _perfil_alumno_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil-alumno.page.scss?ngResource */ 7669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let PerfilAlumnoPage = class PerfilAlumnoPage {
    constructor(menu) {
        this.menu = menu;
        this.menu.enable(true);
    }
    ngOnInit() {
    }
};
PerfilAlumnoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
PerfilAlumnoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-perfil-alumno',
        template: _perfil_alumno_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_perfil_alumno_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerfilAlumnoPage);



/***/ }),

/***/ 616:
/*!************************************************************************!*\
  !*** ./src/app/pages/perfil-alumno/perfil-alumno.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-title>Alumno</ion-title>\r\n    <ion-buttons slot=\"start\" class=\"conteiner--btn\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"contenido--container\">\r\n    \r\n\r\n    <div class=\"usuario--container\">\r\n      <div class=\"primer--container\">\r\n        <ion-label class=\"bienvenido\">Benjamin Vidal</ion-label>\r\n        <ion-label class=\"nombre\">Ingeneria en informatica</ion-label>\r\n      </div>\r\n      <div class=\"usuario--volver\" [style.backgroundImage]=\"'url(assets/icon/aasss.webp)'\"></div>\r\n    </div>\r\n\r\n    <div class=\"contenido--div animated bounceInUp\">\r\n      <ion-label class=\"hola--label\">Opciones</ion-label>\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\" [routerLink]=\"['/camara']\">\r\n            <div class=\"col--div\">\r\n              <img src=\"assets/qr-scanner.jpg\">\r\n              <ion-label>Escanear QR</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\" [routerLink]=\"['/asistencia-alumno']\">\r\n            <div class=\"col--div\">\r\n              <img src=\"assets/asistencia.webp\">\r\n              <ion-label>Asistencia</ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\" [routerLink]=\"['/asignaturas-alumno']\">\r\n            <div class=\"col--div\">\r\n              <img src=\"assets/asignaturas.png\">\r\n              <ion-label>Asignaturas</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\" [routerLink]=\"['/horario-alumno']\">\r\n            <div class=\"col--div\">\r\n              <img src=\"assets/horario-1.png\">\r\n              <ion-label>Horario</ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_perfil-alumno_perfil-alumno_module_ts.js.map