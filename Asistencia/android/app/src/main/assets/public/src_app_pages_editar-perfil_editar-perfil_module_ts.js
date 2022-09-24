"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_editar-perfil_editar-perfil_module_ts"],{

/***/ 7358:
/*!*********************************************************************!*\
  !*** ./src/app/pages/editar-perfil/editar-perfil-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarPerfilPageRoutingModule": () => (/* binding */ EditarPerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _editar_perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-perfil.page */ 4300);




const routes = [
    {
        path: '',
        component: _editar_perfil_page__WEBPACK_IMPORTED_MODULE_0__.EditarPerfilPage
    }
];
let EditarPerfilPageRoutingModule = class EditarPerfilPageRoutingModule {
};
EditarPerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditarPerfilPageRoutingModule);



/***/ }),

/***/ 5675:
/*!*************************************************************!*\
  !*** ./src/app/pages/editar-perfil/editar-perfil.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarPerfilPageModule": () => (/* binding */ EditarPerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _editar_perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-perfil-routing.module */ 7358);
/* harmony import */ var _editar_perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-perfil.page */ 4300);







let EditarPerfilPageModule = class EditarPerfilPageModule {
};
EditarPerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editar_perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarPerfilPageRoutingModule
        ],
        declarations: [_editar_perfil_page__WEBPACK_IMPORTED_MODULE_1__.EditarPerfilPage]
    })
], EditarPerfilPageModule);



/***/ }),

/***/ 4300:
/*!***********************************************************!*\
  !*** ./src/app/pages/editar-perfil/editar-perfil.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarPerfilPage": () => (/* binding */ EditarPerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _editar_perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-perfil.page.html?ngResource */ 6121);
/* harmony import */ var _editar_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-perfil.page.scss?ngResource */ 2173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let EditarPerfilPage = class EditarPerfilPage {
    constructor() { }
    ngOnInit() {
    }
};
EditarPerfilPage.ctorParameters = () => [];
EditarPerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-editar-perfil',
        template: _editar_perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_editar_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditarPerfilPage);



/***/ }),

/***/ 2173:
/*!************************************************************************!*\
  !*** ./src/app/pages/editar-perfil/editar-perfil.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-avatar {\n  --border-radius: 4px;\n}\n\n.img {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRhci1wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdGFyLXBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbi5pbWd7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4gICJdfQ== */";

/***/ }),

/***/ 6121:
/*!************************************************************************!*\
  !*** ./src/app/pages/editar-perfil/editar-perfil.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-title>Perfil</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"img\">\n  <ion-avatar>\n    <img alt=\"Silhouette of a person's head\" src=\"https://ionicframework.com/docs/demos/api/avatar/avatar.svg\" />\n  </ion-avatar>\n  </div>\n\n  <ion-item>\n    <ion-label position=\"floating\">Nombre:</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Correo</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Contraseña:</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Confirmar Contraseña:</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_editar-perfil_editar-perfil_module_ts.js.map