"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_perfil-profesor_perfil-profesor_module_ts"],{

/***/ 9162:
/*!*************************************************************************!*\
  !*** ./src/app/pages/perfil-profesor/perfil-profesor-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilProfesorPageRoutingModule": () => (/* binding */ PerfilProfesorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _perfil_profesor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-profesor.page */ 8407);




const routes = [
    {
        path: '',
        component: _perfil_profesor_page__WEBPACK_IMPORTED_MODULE_0__.PerfilProfesorPage
    }
];
let PerfilProfesorPageRoutingModule = class PerfilProfesorPageRoutingModule {
};
PerfilProfesorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilProfesorPageRoutingModule);



/***/ }),

/***/ 7131:
/*!*****************************************************************!*\
  !*** ./src/app/pages/perfil-profesor/perfil-profesor.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilProfesorPageModule": () => (/* binding */ PerfilProfesorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _perfil_profesor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-profesor-routing.module */ 9162);
/* harmony import */ var _perfil_profesor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil-profesor.page */ 8407);







let PerfilProfesorPageModule = class PerfilProfesorPageModule {
};
PerfilProfesorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _perfil_profesor_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilProfesorPageRoutingModule
        ],
        declarations: [_perfil_profesor_page__WEBPACK_IMPORTED_MODULE_1__.PerfilProfesorPage]
    })
], PerfilProfesorPageModule);



/***/ }),

/***/ 8407:
/*!***************************************************************!*\
  !*** ./src/app/pages/perfil-profesor/perfil-profesor.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilProfesorPage": () => (/* binding */ PerfilProfesorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _perfil_profesor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-profesor.page.html?ngResource */ 3084);
/* harmony import */ var _perfil_alumno_perfil_alumno_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../perfil-alumno/perfil-alumno.page.scss?ngResource */ 7669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let PerfilProfesorPage = class PerfilProfesorPage {
    constructor(menu) {
        this.menu = menu;
        this.menu.enable(true);
    }
    ngOnInit() {
    }
};
PerfilProfesorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
PerfilProfesorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-perfil-profesor',
        template: _perfil_profesor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_perfil_alumno_perfil_alumno_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerfilProfesorPage);



/***/ }),

/***/ 3084:
/*!****************************************************************************!*\
  !*** ./src/app/pages/perfil-profesor/perfil-profesor.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-title>Profesor</ion-title>\r\n    <ion-buttons slot=\"start\" class=\"conteiner--btn\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"contenido--container\">\r\n    \r\n\r\n    <div class=\"usuario--container\">\r\n      <div class=\"primer--container\">\r\n        <ion-label class=\"bienvenido\">Victor Rosendo</ion-label>\r\n        <ion-label class=\"nombre\">Profesor</ion-label>\r\n      </div>\r\n      <div class=\"usuario--volver\" [style.backgroundImage]=\"'url(assets/icon/aasss.webp)'\"></div>\r\n    </div>\r\n\r\n    <div class=\"contenido--div animated bounceInUp\">\r\n      <ion-label class=\"hola--label\">Opciones</ion-label>\r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\" [routerLink]=\"['/codigoqr']\">\r\n            <div class=\"col--div\">\r\n              <img src=\"assets/qr-scanner.jpg\">\r\n              <ion-label>Generar Qr</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\" [routerLink]=\"['/lista-alumnos']\">\r\n            <div class=\"col--div\">\r\n              <img src=\"assets/asistencia.webp\">\r\n              <ion-label>Lista</ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\" [routerLink]=\"['/seccion']\">\r\n            <div class=\"col--div\">\r\n              <img src=\"assets/asignaturas.png\">\r\n              <ion-label>Secciones</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\" [routerLink]=\"['/horario-asig']\">\r\n            <div class=\"col--div\">\r\n              <img src=\"assets/horario-1.png\">\r\n              <ion-label>Horario</ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_perfil-profesor_perfil-profesor_module_ts.js.map