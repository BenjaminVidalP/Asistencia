"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_registro_registro_module_ts"],{

/***/ 6138:
/*!***********************************************************!*\
  !*** ./src/app/pages/registro/registro-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 1044);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 8712:
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 6138);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 1044);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 1044:
/*!*************************************************!*\
  !*** ./src/app/pages/registro/registro.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 4144);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss?ngResource */ 2079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let RegistroPage = class RegistroPage {
    constructor(menu) {
        this.menu = menu;
        this.usuario = {
            email: '',
            password: ''
        };
        this.emailPattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        this.menu.enable(false);
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(this.emailPattern)]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(16)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(10)]),
        });
    }
    ngOnInit() {
    }
    onSubmitTemplate() {
        console.log('Form submit');
        console.log(this.usuario);
    }
};
RegistroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-registro',
        template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistroPage);



/***/ }),

/***/ 2079:
/*!**************************************************************!*\
  !*** ./src/app/pages/registro/registro.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".texto--link {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.a--blanco {\n  color: white;\n}\n\n.label--color {\n  color: white;\n}\n\n.input--color {\n  color: white;\n}\n\n.example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n\n.icono--a {\n  display: inline-flex;\n  align-items: baseline;\n  box-sizing: border-box;\n  background-color: transparent;\n  color: white;\n}\n\n.item--ancho {\n  width: 220px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UsaUJBQUE7QUFFSjs7QUFDRTs7RUFFRSxhQUFBO0FBRUo7O0FBQ0U7RUFDRSwwQkFBQTtBQUVKOztBQUNBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoicmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRvLS1saW5re1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYS0tYmxhbmNve1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGFiZWwtLWNvbG9ye1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmlucHV0LS1jb2xvcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICB9XHJcblxyXG4uaWNvbm8tLWF7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5pdGVtLS1hbmNob3tcclxuICAgIHdpZHRoOiAyMjBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 4144:
/*!**************************************************************!*\
  !*** ./src/app/pages/registro/registro.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <div>\r\n    <img src=\"/assets/icon/uni2.png\" alt=\"\">\r\n  </div>\r\n\r\n\r\n  <form #formulario=\"ngForm\" (ngSubmit)=\"onSubmitTemplate()\">\r\n\r\n    <ion-list>\r\n      <ion-item class=\"item--ancho\">\r\n        <ion-label class=\"label--color\" position=\"floating\" >Email</ion-label>\r\n      <ion-input class=\"input--color\" type=\"email\" name=\"email\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([A-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" [(ngModel)]=\"usuario.email\" \r\n        required ></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"item--ancho\" appearance=\"fill\">\r\n        <ion-label class=\"label--color\" position=\"floating\" class=\"label--color\">Contraseña</ion-label>\r\n        <div class=\"icono--a\">\r\n        <ion-input class=\"input--color\" type=\"password\" name=\"password\" pattern=\".{4,10}\" [(ngModel)]=\"usuario.password\" \r\n        required matInput [type]=\"hide ? 'password' : 'text'\"></ion-input><button class=\"icono--a\" (click)=\"hide = !hide\" [attr.aria-label]=\" 'Hide password' \" [attr.aria-pressed]=\"hide\">\r\n          <ion-icon class=\"icono--tamano\" name=\"eye-outline\">{{hide ? 'visibility_off' : 'visibility'}}</ion-icon>\r\n        </button>\r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-button expand=\"block\" type=\"submit\"color=\"warning\"\r\n    [disabled]=\"formulario.invalid\">Registrar</ion-button>\r\n\r\n  </form>\r\n\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro_module_ts.js.map