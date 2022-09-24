"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_camara_camara_module_ts"],{

/***/ 9008:
/*!*******************************************************!*\
  !*** ./src/app/pages/camara/camara-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraPageRoutingModule": () => (/* binding */ CamaraPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _camara_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camara.page */ 9330);




const routes = [
    {
        path: '',
        component: _camara_page__WEBPACK_IMPORTED_MODULE_0__.CamaraPage
    }
];
let CamaraPageRoutingModule = class CamaraPageRoutingModule {
};
CamaraPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CamaraPageRoutingModule);



/***/ }),

/***/ 3122:
/*!***********************************************!*\
  !*** ./src/app/pages/camara/camara.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraPageModule": () => (/* binding */ CamaraPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _camara_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camara-routing.module */ 9008);
/* harmony import */ var _camara_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camara.page */ 9330);







let CamaraPageModule = class CamaraPageModule {
};
CamaraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _camara_routing_module__WEBPACK_IMPORTED_MODULE_0__.CamaraPageRoutingModule
        ],
        declarations: [_camara_page__WEBPACK_IMPORTED_MODULE_1__.CamaraPage]
    })
], CamaraPageModule);



/***/ }),

/***/ 9330:
/*!*********************************************!*\
  !*** ./src/app/pages/camara/camara.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraPage": () => (/* binding */ CamaraPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _camara_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camara.page.html?ngResource */ 9851);
/* harmony import */ var _camara_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camara.page.scss?ngResource */ 4094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let CamaraPage = class CamaraPage {
    constructor(menu) {
        this.menu = menu;
        this.menu.enable(true);
    }
    ngOnInit() {
    }
};
CamaraPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
CamaraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-camara',
        template: _camara_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_camara_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CamaraPage);



/***/ }),

/***/ 4094:
/*!**********************************************************!*\
  !*** ./src/app/pages/camara/camara.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 40%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.recuadros-login {\n  height: 10vh;\n  width: 100%;\n  max-width: 200px;\n  background: #791f1b;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  position: relative;\n  margin: auto;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n\n.trasparente {\n  background: rgba(255, 255, 255, 0.443);\n}\n\n.underline {\n  text-decoration: underline;\n  color: #fff;\n}\n\n.botton {\n  height: 10vh;\n  width: 100%;\n  max-width: 200px;\n  color: #fff;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  position: relative;\n  margin: auto;\n  margin-bottom: 10px;\n}\n\n.letras {\n  color: #fff;\n}\n\n.labels {\n  text-align: left;\n}\n\n.labels::after {\n  text-align: left;\n}\n\n.icono {\n  padding: 5px;\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWFyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGSjs7QUFLRTtFQUNFLHFCQUFBO0FBRko7O0FBS0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0U7RUFDRSxzQ0FBQTtBQUZKOztBQUtFO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0FBRk47O0FBS0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0U7RUFDRSxXQUFBO0FBRko7O0FBS0U7RUFDRSxnQkFBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7QUFGSjs7QUFLRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUZKIiwiZmlsZSI6ImNhbWFyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIFxyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZWN1YWRyb3MtbG9naW57XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzkxZjFiO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlIDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50cmFzcGFyZW50ZXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NDMpO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5le1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3R0b257XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubGV0cmFze1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbHN7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAubGFiZWxzOjphZnRlcntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuaWNvbm97XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG5cclxuIl19 */";

/***/ }),

/***/ 9851:
/*!**********************************************************!*\
  !*** ./src/app/pages/camara/camara.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-title>Escanear</ion-title>\r\n    <ion-buttons slot=\"start\" class=\"conteiner--btn\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button color=\"dark\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <div id=\"container\" >\r\n\r\n    <h2 class=\"letras\">¡Bienvenidos!</h2>\r\n    <img src=\"assets/icon/uni2.png\">\r\n    <ion-button expand=\"block\" color=\"warning\" [routerLink]=\"['/registrado']\">\r\n      <ion-icon name=\"camera-outline\" class=\"icono\"></ion-icon>\r\n      Escanear Codigo</ion-button>\r\n\r\n    \r\n\r\n</div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_camara_camara_module_ts.js.map