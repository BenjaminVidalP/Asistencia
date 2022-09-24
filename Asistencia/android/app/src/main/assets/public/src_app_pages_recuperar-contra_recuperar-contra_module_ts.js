"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_recuperar-contra_recuperar-contra_module_ts"],{

/***/ 5705:
/*!***************************************************************************!*\
  !*** ./src/app/pages/recuperar-contra/recuperar-contra-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarContraPageRoutingModule": () => (/* binding */ RecuperarContraPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _recuperar_contra_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperar-contra.page */ 9389);




const routes = [
    {
        path: '',
        component: _recuperar_contra_page__WEBPACK_IMPORTED_MODULE_0__.RecuperarContraPage
    }
];
let RecuperarContraPageRoutingModule = class RecuperarContraPageRoutingModule {
};
RecuperarContraPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecuperarContraPageRoutingModule);



/***/ }),

/***/ 6431:
/*!*******************************************************************!*\
  !*** ./src/app/pages/recuperar-contra/recuperar-contra.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarContraPageModule": () => (/* binding */ RecuperarContraPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _recuperar_contra_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperar-contra-routing.module */ 5705);
/* harmony import */ var _recuperar_contra_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperar-contra.page */ 9389);







let RecuperarContraPageModule = class RecuperarContraPageModule {
};
RecuperarContraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recuperar_contra_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecuperarContraPageRoutingModule
        ],
        declarations: [_recuperar_contra_page__WEBPACK_IMPORTED_MODULE_1__.RecuperarContraPage]
    })
], RecuperarContraPageModule);



/***/ }),

/***/ 9389:
/*!*****************************************************************!*\
  !*** ./src/app/pages/recuperar-contra/recuperar-contra.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarContraPage": () => (/* binding */ RecuperarContraPage)
/* harmony export */ });
/* harmony import */ var C_Users_bebvi_OneDrive_Documentos_GitHub_Asistencia_Asistencia_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _recuperar_contra_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperar-contra.page.html?ngResource */ 2136);
/* harmony import */ var _recuperar_contra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recuperar-contra.page.scss?ngResource */ 952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let RecuperarContraPage = class RecuperarContraPage {
  constructor(alertController) {
    this.alertController = alertController;
  }

  presentAlert() {
    var _this = this;

    return (0,C_Users_bebvi_OneDrive_Documentos_GitHub_Asistencia_Asistencia_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Mensaje',
        subHeader: 'Recuperar contraseña',
        message: 'Se ha enviado un correo para restablecer su contraseña',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  ngOnInit() {}

};

RecuperarContraPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
}];

RecuperarContraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-recuperar-contra',
  template: _recuperar_contra_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_recuperar_contra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RecuperarContraPage);


/***/ }),

/***/ 952:
/*!******************************************************************************!*\
  !*** ./src/app/pages/recuperar-contra/recuperar-contra.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".recuFont {\n  text-align: center;\n  color: #fff;\n}\n\n.label-color {\n  color: #fff;\n}\n\n.input-color {\n  color: #fff;\n}\n\n.letras--boton {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3VwZXJhci1jb250cmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoicmVjdXBlcmFyLWNvbnRyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjdUZvbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxhYmVsLWNvbG9ye1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5pbnB1dC1jb2xvcntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubGV0cmFzLS1ib3RvbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */";

/***/ }),

/***/ 2136:
/*!******************************************************************************!*\
  !*** ./src/app/pages/recuperar-contra/recuperar-contra.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"warning\"><ion-title>Recuperación</ion-title> \r\n    <ion-buttons slot=\"start\">\r\n    <ion-back-button color=\"dark\"></ion-back-button>\r\n  </ion-buttons></ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-content class=\"ion-padding\" >\r\n    <div>\r\n      <img src=\"/assets/icon/uni2.png\" alt=\"\">\r\n    </div>\r\n  <form>\r\n    <ion-item lines=\"full\">\r\n      <ion-label class=\"label-color\" position=\"floating\">Email</ion-label>\r\n      <ion-input  class=\"input-color\" type=\"email\"  pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([A-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" required></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button class=\"letras--boton\" color=\"warning\" expand=\"block\"  (click)=\"presentAlert()\">Enviar correo de recuperación</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n      <p class=\"recuFont\">Porfavor introduzca su correo.</p>\r\n\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recuperar-contra_recuperar-contra_module_ts.js.map