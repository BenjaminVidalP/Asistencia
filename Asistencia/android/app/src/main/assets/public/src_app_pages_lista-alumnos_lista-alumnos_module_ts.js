"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_lista-alumnos_lista-alumnos_module_ts"],{

/***/ 9397:
/*!*********************************************************************!*\
  !*** ./src/app/pages/lista-alumnos/lista-alumnos-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaAlumnosPageRoutingModule": () => (/* binding */ ListaAlumnosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _lista_alumnos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lista-alumnos.page */ 5412);




const routes = [
    {
        path: '',
        component: _lista_alumnos_page__WEBPACK_IMPORTED_MODULE_0__.ListaAlumnosPage
    }
];
let ListaAlumnosPageRoutingModule = class ListaAlumnosPageRoutingModule {
};
ListaAlumnosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListaAlumnosPageRoutingModule);



/***/ }),

/***/ 4404:
/*!*************************************************************!*\
  !*** ./src/app/pages/lista-alumnos/lista-alumnos.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaAlumnosPageModule": () => (/* binding */ ListaAlumnosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _lista_alumnos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lista-alumnos-routing.module */ 9397);
/* harmony import */ var _lista_alumnos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lista-alumnos.page */ 5412);







let ListaAlumnosPageModule = class ListaAlumnosPageModule {
};
ListaAlumnosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _lista_alumnos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListaAlumnosPageRoutingModule
        ],
        declarations: [_lista_alumnos_page__WEBPACK_IMPORTED_MODULE_1__.ListaAlumnosPage]
    })
], ListaAlumnosPageModule);



/***/ }),

/***/ 5412:
/*!***********************************************************!*\
  !*** ./src/app/pages/lista-alumnos/lista-alumnos.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaAlumnosPage": () => (/* binding */ ListaAlumnosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _lista_alumnos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lista-alumnos.page.html?ngResource */ 956);
/* harmony import */ var _lista_alumnos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lista-alumnos.page.scss?ngResource */ 6192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let ListaAlumnosPage = class ListaAlumnosPage {
    constructor(menu) {
        this.menu = menu;
        this.menu.enable(true);
    }
    ngOnInit() {
    }
};
ListaAlumnosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
ListaAlumnosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-lista-alumnos',
        template: _lista_alumnos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_lista_alumnos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListaAlumnosPage);



/***/ }),

/***/ 6192:
/*!************************************************************************!*\
  !*** ./src/app/pages/lista-alumnos/lista-alumnos.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".tabla {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  max-width: 320px;\n  max-height: 249px;\n  margin-top: 50px;\n}\n\nth:nth-child(even) {\n  padding: 1px;\n  border: solid 1px black;\n}\n\ntr:hover td {\n  background-color: #4949c5;\n}\n\ntable {\n  background: white;\n  border-collapse: collapse;\n  text-align: center;\n  width: 95%;\n}\n\ntr, td {\n  border: solid 1px black;\n  padding: 5px;\n  font-size: 11px;\n}\n\nthead {\n  background-color: #ffde59 !important;\n  color: #000;\n  border-bottom: solid 4px black;\n}\n\n.centrado--texto {\n  text-align: center;\n}\n\n.tamano {\n  font-size: 10px;\n  padding: 2px !important;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLWFsdW1ub3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUdKIiwiZmlsZSI6Imxpc3RhLWFsdW1ub3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxhe1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNDlweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG59XHJcblxyXG50aDpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAgYmxhY2tcclxufVxyXG50cjpob3ZlciB0ZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5YzU7XHJcbn1cclxudGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbnRyLCB0ZHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICBibGFjaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcbn1cclxudGhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZTU5ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCBibGFjaztcclxufVxyXG5cclxuLmNlbnRyYWRvLS10ZXh0b3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRhbWFub3tcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */";

/***/ }),

/***/ 956:
/*!************************************************************************!*\
  !*** ./src/app/pages/lista-alumnos/lista-alumnos.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-title>Lista Alumnos</ion-title>\r\n    <ion-buttons slot=\"start\" class=\"conteiner--btn\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button color=\"dark\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div>\r\n    <ion-card>\r\n      <ion-card-header color=warning>\r\n      <ion-card-subtitle class=\"centrado--texto\">Victor Rosendo</ion-card-subtitle>\r\n      <ion-card-title class=\"centrado--texto\">Sección: 002D</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </div>\r\n  <div class=\"tabla\">\r\n  <table>\r\n    <thead color=\"warning\">\r\n      <tr>\r\n        <th>Rut</th><th>Estudiante</th><th>Asignatura</th><th>Fecha</th>\r\n      </tr>\r\n      \r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td class=\"tamano\">20053123-2</td><td>Benjamin Vidal Plaza</td><td>Aplicaciones Moviles</td><td> 02/09/22</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"tamano\">20053123-2</td><td>Yzan Báez Carrasco</td><td>Aplicaciones Moviles</td><td> 02/09/22</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"tamano\">20053123-2</td><td>Alberto Vidal Castro</td><td>Aplicaciones Moviles</td><td> 02/09/22</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"tamano\">20053123-2</td><td>Martin Plaza </td><td>Aplicaciones Moviles</td><td> 02/09/22</td>\r\n      </tr>\r\n      \r\n    </tbody>\r\n  </table>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_lista-alumnos_lista-alumnos_module_ts.js.map