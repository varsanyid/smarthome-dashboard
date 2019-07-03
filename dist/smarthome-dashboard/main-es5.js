(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container m-5\">\n  <div class=\"row\">\n    <app-sidenav></app-sidenav>\n    <div class=\"col\">\n      <h3>Energy Dashboard</h3>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/device-form/device-form.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/device-form/device-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"col align-self-center\">\n    <h1>Add Device</h1>\n    <form #deviceForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required\n            [(ngModel)]=\"device.name\">\n            </div>\n        <div class=\"form-group\">\n            <label for=\"consume\">Wattage</label>\n            <input type=\"text\" class=\"form-control\" id=\"wattage\" name=\"wattage\"\n            [(ngModel)]=\"device.wattage\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"avgUsagePerDay\">Average usage per day</label>\n            <input type=\"time\" class=\"form-control\" id=\"avgUsagePerDay\" name=\"avgUsagePerDay\"\n            [(ngModel)]=\"device.avgUsagePerDay\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"avgUsagePerDay\">Average usage per month</label>\n            <input type=\"time\" class=\"form-control\" id=\"avgUsagePerMonth\" name=\"avgUsagePerMonth\"\n            [(ngModel)]=\"device.avgUsagePerMonth\">\n            </div>\n        <button type=\"submit\" class=\"btn btn-success\">Add</button>\n    </form>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/device-list/device-list.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/device-list/device-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"device-card md-5\" *ngFor=\"let device of devices\">\n        <p>{{ device.name }}</p>\n        <p>{{ device.wattage }}</p>\n        <p>{{ device.avgUsagePerDay }}</p>\n    </div>\n    <button class=\"btn btn-primary\" routerLink=\"/devices/create\">Add device</button>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/sidenav.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/sidenav.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-md-2 bg-light sidebar\">\n    <div>\n        <h3>\n            {{ header }}\n        </h3>\n    </div>\n    <ul>\n        <li *ngFor=\"let item of items\">\n            <a routerLink=\"{{item.component}}\">{{ item.name }}</a>\n        </li>\n    </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _device_form_device_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-form/device-form.component */ "./src/app/device-form/device-form.component.ts");
/* harmony import */ var _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device-list/device-list.component */ "./src/app/device-list/device-list.component.ts");





var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _device_form_device_form_component__WEBPACK_IMPORTED_MODULE_3__["DeviceFormComponent"] },
    { path: 'devices', component: _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_4__["DeviceListComponent"] },
    { path: 'devices/create', component: _device_form_device_form_component__WEBPACK_IMPORTED_MODULE_3__["DeviceFormComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'smarthome-dashboard';
        this.message = '';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _device_form_device_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./device-form/device-form.component */ "./src/app/device-form/device-form.component.ts");
/* harmony import */ var _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./device-list/device-list.component */ "./src/app/device-list/device-list.component.ts");
/* harmony import */ var _device_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./device-storage.service */ "./src/app/device-storage.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__["SidenavComponent"],
                _device_form_device_form_component__WEBPACK_IMPORTED_MODULE_9__["DeviceFormComponent"],
                _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_10__["DeviceListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_7__["StorageServiceModule"]
            ],
            providers: [_device_storage_service__WEBPACK_IMPORTED_MODULE_11__["DeviceStorageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/device-form/device-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/device-form/device-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS1mb3JtL2RldmljZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/device-form/device-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/device-form/device-form.component.ts ***!
  \******************************************************/
/*! exports provided: DeviceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceFormComponent", function() { return DeviceFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../device */ "./src/app/device.ts");
/* harmony import */ var _device_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../device-storage.service */ "./src/app/device-storage.service.ts");




var DeviceFormComponent = /** @class */ (function () {
    function DeviceFormComponent(deviceStorageService) {
        var _this = this;
        this.deviceStorageService = deviceStorageService;
        this.device = new _device__WEBPACK_IMPORTED_MODULE_2__["Device"](undefined, undefined, undefined, undefined, undefined);
        this.onSubmit = function () {
            _this.deviceStorageService.storeDevice(_this.device);
        };
    }
    DeviceFormComponent.ctorParameters = function () { return [
        { type: _device_storage_service__WEBPACK_IMPORTED_MODULE_3__["DeviceStorageService"] }
    ]; };
    DeviceFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-form',
            template: __webpack_require__(/*! raw-loader!./device-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/device-form/device-form.component.html"),
            styles: [__webpack_require__(/*! ./device-form.component.css */ "./src/app/device-form/device-form.component.css")]
        })
    ], DeviceFormComponent);
    return DeviceFormComponent;
}());



/***/ }),

/***/ "./src/app/device-list/device-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/device-list/device-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".device-card {\r\n    background-color: rgba(29,27,65,.6);\r\n    border-radius: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlLWxpc3QvZGV2aWNlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztJQUNuQyxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kZXZpY2UtbGlzdC9kZXZpY2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldmljZS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksMjcsNjUsLjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/device-list/device-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/device-list/device-list.component.ts ***!
  \******************************************************/
/*! exports provided: DeviceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceListComponent", function() { return DeviceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _device_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../device-storage.service */ "./src/app/device-storage.service.ts");



var DeviceListComponent = /** @class */ (function () {
    function DeviceListComponent(deviceStorageService) {
        this.deviceStorageService = deviceStorageService;
        this.devices = [];
    }
    DeviceListComponent.prototype.ngOnInit = function () {
        this.devices = this.deviceStorageService.getDevices();
    };
    DeviceListComponent.ctorParameters = function () { return [
        { type: _device_storage_service__WEBPACK_IMPORTED_MODULE_2__["DeviceStorageService"] }
    ]; };
    DeviceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-list',
            template: __webpack_require__(/*! raw-loader!./device-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/device-list/device-list.component.html"),
            styles: [__webpack_require__(/*! ./device-list.component.css */ "./src/app/device-list/device-list.component.css")]
        })
    ], DeviceListComponent);
    return DeviceListComponent;
}());



/***/ }),

/***/ "./src/app/device-storage.service.ts":
/*!*******************************************!*\
  !*** ./src/app/device-storage.service.ts ***!
  \*******************************************/
/*! exports provided: DeviceStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceStorageService", function() { return DeviceStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device */ "./src/app/device.ts");




var DeviceStorageService = /** @class */ (function () {
    function DeviceStorageService(storage) {
        var _this = this;
        this.storage = storage;
        this.KEY = "_devices";
        this.storeDevice = function (device) {
            var storedDevices = _this.storage.get(_this.KEY) || [];
            storedDevices.push(JSON.stringify(device));
            _this.storage.set(_this.KEY, storedDevices);
        };
        this.getDevices = function () {
            var rawDevices = _this.storage.get(_this.KEY);
            var parsedDevices = rawDevices.map(function (device) {
                var obj = JSON.parse(device);
                return new _device__WEBPACK_IMPORTED_MODULE_3__["Device"](obj.id, obj.name, obj.wattage, obj.avgUsagePerDay, obj.avgUagePerMonth);
            });
            return parsedDevices;
        };
    }
    DeviceStorageService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"],] }] }
    ]; };
    DeviceStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"]))
    ], DeviceStorageService);
    return DeviceStorageService;
}());



/***/ }),

/***/ "./src/app/device.ts":
/*!***************************!*\
  !*** ./src/app/device.ts ***!
  \***************************/
/*! exports provided: Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
var Device = /** @class */ (function () {
    function Device(id, name, wattage, avgUsagePerDay, avgUsagePerMonth) {
        this.id = id;
        this.name = name;
        this.wattage = wattage;
        this.avgUsagePerDay = avgUsagePerDay;
        this.avgUsagePerMonth = avgUsagePerMonth;
    }
    Device.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: Number },
        { type: Number },
        { type: Number }
    ]; };
    return Device;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.items = [
            { name: "Dashboard", component: "/dashboard" },
            { name: "Devices", component: "/devices" }
        ];
        this.header = "SmartHome";
    }
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
        })
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\danie\work\smarthome-dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map