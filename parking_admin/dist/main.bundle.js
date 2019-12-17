webpackJsonp([1,4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phoneNumber = "";
        this.username = "";
        this.password = "";
        this.active = "";
        this.lockUser = "";
        this.userGroups = "";
        this.files = "";
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrandService = (function () {
    function BrandService(commonService) {
        this.commonService = commonService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrlBase + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiPaths.brand;
        this.dataStore = { brands: [] };
        this._brands = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.brands = this._brands.asObservable();
    }
    BrandService.prototype.getList = function (params) {
        var _this = this;
        if (params === void 0) { params = { offset: 0, limit: 20, orderby: null, where: null }; }
        var url = this.baseUrl + '/all/';
        this.commonService.get(url, params)
            .subscribe(function (data) {
            _this.dataStore.brands = data.items;
            _this._brands.next(Object.assign({}, _this.dataStore).brands);
        }, function (error) { return console.log('Could not load Brands.'); }, function () { return console.log("done"); });
    };
    BrandService.prototype.get = function (id) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.get(url);
    };
    BrandService.prototype.create = function (data) {
        var url = this.baseUrl;
        return this.commonService.post(url, data);
    };
    BrandService.prototype.update = function (id, data) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.put(url, data);
    };
    BrandService.prototype.delete = function (id) { };
    return BrandService;
}());
BrandService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], BrandService);

var _a;
//# sourceMappingURL=brand.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerService = (function () {
    function CustomerService(commonService) {
        this.commonService = commonService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrlBase + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiPaths.customer;
        this.dataStore = { customers: [] };
        this._customers = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.customers = this._customers.asObservable();
    }
    CustomerService.prototype.getList = function (params) {
        var _this = this;
        if (params === void 0) { params = { offset: 0, limit: 20, orderby: null, where: null }; }
        var url = this.baseUrl + '/all/';
        this.commonService.get(url, params)
            .subscribe(function (data) {
            _this.dataStore.customers = data.items;
            _this._customers.next(Object.assign({}, _this.dataStore).customers);
        }, function (error) { return console.log('Could not load Customers.'); }, function () { return console.log("done"); });
    };
    CustomerService.prototype.get = function (id) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.get(url);
    };
    CustomerService.prototype.create = function (data) {
        var url = this.baseUrl;
        return this.commonService.post(url, data);
    };
    CustomerService.prototype.update = function (id, data) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.put(url, data);
    };
    CustomerService.prototype.delete = function (id) { };
    return CustomerService;
}());
CustomerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], CustomerService);

var _a;
//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_pagination__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LotService = (function () {
    function LotService(commonService) {
        this.commonService = commonService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrlBase + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiPaths.lot;
        this.dataStore = { lots: [], pagination: new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* Pagination */]() };
        this._lots = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this._pagination = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* Pagination */]());
        this.lots = this._lots.asObservable();
        this.pagination = this._pagination.asObservable();
    }
    LotService.prototype.getList = function (params) {
        var _this = this;
        if (params === void 0) { params = { offset: 0, limit: 20, orderby: null, where: null }; }
        var url = this.baseUrl + '/all/';
        this.commonService.get(url, params)
            .subscribe(function (data) {
            _this.dataStore.lots = data.items;
            _this.dataStore.pagination = data.pagination;
            _this._lots.next(Object.assign({}, _this.dataStore).lots);
            _this._pagination.next(Object.assign({}, _this.dataStore).pagination);
        }, function (error) { return console.log('Could not load Lots.'); }, function () { return console.log("done"); });
    };
    LotService.prototype.get = function (id) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.get(url);
    };
    LotService.prototype.create = function (data) {
        var url = this.baseUrl;
        return this.commonService.post(url, data);
    };
    LotService.prototype.update = function (id, data) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.put(url, data);
    };
    LotService.prototype.delete = function (id) { };
    return LotService;
}());
LotService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], LotService);

var _a;
//# sourceMappingURL=lot.service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleTypeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VehicleTypeService = (function () {
    function VehicleTypeService(commonService) {
        this.commonService = commonService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrlBase + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiPaths.vehicleType;
        this.dataStore = { vehiclesTypes: [] };
        this._vehiclesTypes = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.vehiclesTypes = this._vehiclesTypes.asObservable();
    }
    VehicleTypeService.prototype.getList = function (params) {
        var _this = this;
        if (params === void 0) { params = { offset: 0, limit: 20, orderby: null, where: null }; }
        var url = this.baseUrl + '/all/';
        this.commonService.get(url, params)
            .subscribe(function (data) {
            _this.dataStore.vehiclesTypes = data.items;
            _this._vehiclesTypes.next(Object.assign({}, _this.dataStore).vehiclesTypes);
        }, function (error) { return console.log('Could not load VehicleTypes.'); }, function () { return console.log("done"); });
    };
    VehicleTypeService.prototype.get = function (id) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.get(url);
    };
    VehicleTypeService.prototype.create = function (data) {
        var url = this.baseUrl;
        return this.commonService.post(url, data);
    };
    VehicleTypeService.prototype.update = function (id, data) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.put(url, data);
    };
    VehicleTypeService.prototype.delete = function (id) { };
    return VehicleTypeService;
}());
VehicleTypeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], VehicleTypeService);

var _a;
//# sourceMappingURL=vehicle-type.service.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var api = {
    auth: 'token',
    brand: 'brand',
    user: 'user',
    userGroup: 'user-group',
    userAudit: 'user-audit',
    parking: 'parking',
    customer: 'customer',
    vehicle: 'vehicle',
    vehicleType: 'vehicle-type',
    lot: 'lot',
    section: 'section',
    rentLot: 'rentlot',
    rentType: 'rent-type',
    rentStatus: 'rent-status'
};
var environment = {
    production: true,
    filesUrlBase: 'http://nicolascuevas-tpp2017.9kode.com/parking/src/public/files/',
    apiUrlBase: 'http://nicolascuevas-tpp2017.9kode.com/parking/src/public/api/',
    apiPaths: api
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_authentication_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.user = auth.user;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['login']);
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(488),
        styles: [__webpack_require__(471)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_vehicle__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_customer__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_customer_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_vehicle_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_vehicle_type_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_brand_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CustomerAddComponent = (function () {
    function CustomerAddComponent(customerService, vehicleService, vehicleTypeService, brandService, fb, snackBar, router, route, location) {
        this.customerService = customerService;
        this.vehicleService = vehicleService;
        this.vehicleTypeService = vehicleTypeService;
        this.brandService = brandService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.router = router;
        this.route = route;
        this.location = location;
        this.formErrors = {
            'firstName': '',
            'lastName': '',
            'phoneNumber': '',
            'plate': '',
            'brand': '',
            'color': '',
            'vehicleType': '',
        };
        this.validationMessages = {
            'firstName': {
                'minlength': 'must be at least 4 characters long.',
                'maxlength': 'cannot be more than 24 characters long.'
            },
            'lastName': {
                'minlength': 'must be at least 4 characters long.',
                'maxlength': 'cannot be more than 24 characters long.'
            },
            'phoneNumber': {
                'minlength': 'must be at least 9 characters long.',
                'maxlength': 'cannot be more than 30 characters long.'
            },
            'plate': {
                'required': 'required field',
                'minlength': 'must be at least 3 characters long.',
                'maxlength': 'cannot be more than 12 characters long.'
            },
            'color': { 'required': 'required field' },
            'brand': { 'required': 'required field' },
            'vehicleType': { 'required': 'required field' },
        };
        this.customer = new __WEBPACK_IMPORTED_MODULE_6__models_customer__["a" /* Customer */]();
        this.vehicle = new __WEBPACK_IMPORTED_MODULE_5__models_vehicle__["a" /* Vehicle */]();
        this.vehicleType = this.vehicleTypeService.vehiclesTypes;
        this.brand = this.brandService.brands;
    }
    CustomerAddComponent.prototype.ngOnInit = function () {
        this.vehicleTypeService.getList();
        this.brandService.getList();
        this.buildForm();
    };
    CustomerAddComponent.prototype.save = function () {
        var _this = this;
        var payload = this.formView.value;
        this.vehicleService.create(payload)
            .subscribe(function (data) {
            var snackBarRef = _this.snackBar.open(data.message, "OK", {
                duration: 2000,
            });
            if (data.response === 'ok') {
                _this.formView.reset();
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.location.back();
                });
            }
        }, function (error) { return console.log('Could not create the customer.'); }, function () { return console.log("done"); });
    };
    CustomerAddComponent.prototype.back = function () {
        this.location.back();
    };
    CustomerAddComponent.prototype.buildForm = function () {
        var _this = this;
        this.formView = this.fb.group({
            'firstName': [this.customer.firstName, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30)
                ]
            ],
            'lastName': [this.customer.lastName, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30)
                ]],
            'phoneNumber': [this.customer.phoneNumber, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(9),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30)
                ]],
            'plate': [this.vehicle.plate, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(12)
                ]],
            'brand': [this.vehicle.brand, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'color': [this.vehicle.color, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'vehicleType': [this.vehicle.vehicleType, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
        });
        this.formView.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    CustomerAddComponent.prototype.onValueChanged = function (data) {
        if (!this.formView) {
            return;
        }
        var form = this.formView;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return CustomerAddComponent;
}());
CustomerAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-customer-add',
        template: "\n  <div class=\"card\">\n  <h4 class=\"card-header\">Add Customer</h4>\n  <div class=\"card-body\">\n      <div>\n      <span class=\"app-toolbar-filler\"></span>\n      </div>\n        \n        <form [formGroup]=\"formView\" >\n          <!-- form inputs -->\n          <div class=\"row\">\n           <div class=\"col-md-4\">\n              <h3>Owner Data</h3>\n              <span class=\"app-toolbar-filler\"></span>\n              <div class=\"form-group\">\n                <label for=\"firstName\">First Name</label>\n                <input type=\"text\" id=\"firstName\" class=\"form-control\"\n                       formControlName=\"firstName\" >\n                 <div *ngIf=\"formErrors.firstName\" class=\"alert alert-danger\">\n                  {{ formErrors.firstName }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"lastName\">Last Name</label>\n                <input type=\"text\" id=\"lastName\" class=\"form-control\"\n                       formControlName=\"lastName\" >\n                 <div *ngIf=\"formErrors.lastName\" class=\"alert alert-danger\">\n                  {{ formErrors.lastName }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"phoneNumber\">Phone</label>\n                <input type=\"text\" id=\"phoneNumber\" class=\"form-control\"\n                       formControlName=\"phoneNumber\" >\n                 <div *ngIf=\"formErrors.phoneNumber\" class=\"alert alert-danger\">\n                  {{ formErrors.phoneNumber }}\n                  </div>\n              </div>\n           </div>\n\n           <div class=\"col-md-4\">\n             <h3>Vehicle</h3>\n             <span class=\"app-toolbar-filler\"></span>\n              <div class=\"form-group\">\n                <label for=\"plate\">Plate</label>\n                <input type=\"text\" id=\"plate\" class=\"form-control\"\n                       formControlName=\"plate\" required >\n                 <div *ngIf=\"formErrors.plate\" class=\"alert alert-danger\">\n                  {{ formErrors.plate }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"brand\">Brand</label>\n                  <select class=\"form-control\" formControlName=\"brand\" required>\n                    <option *ngFor=\"let group of brand|async\" [value]=\"group.id\">{{ group.name }}</option>\n                  </select>\n                  <div *ngIf=\"formErrors.brand\" class=\"alert alert-danger\">\n                  {{ formErrors.brand }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"color\">Color</label>\n                <input type=\"color\" id=\"color\" class=\"form-control\"\n                       formControlName=\"color\" required >\n                 <div *ngIf=\"formErrors.color\" class=\"alert alert-danger\">\n                  {{ formErrors.color }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"vehicleType\">Type</label>\n                  <select class=\"form-control\" formControlName=\"vehicleType\" required>\n                    <option *ngFor=\"let group of vehicleType|async\" [value]=\"group.id\">{{ group.name }}</option>\n                  </select>\n                  <div *ngIf=\"formErrors.vehicleType\" class=\"alert alert-danger\">\n                  {{ formErrors.vehicleType }}\n                  </div>\n              </div>\n            </div>\n            <!-- end form inputs -->\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n               <button class=\"pull-right\" md-raised-button  color=\"accent\" [disabled]=\"!formView.valid\" (click)=\"save()\">Save</button>\n               <button class=\"pull-left\" md-raised-button color=\"primary\" (click)=\"back()\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </form>\n      <div>\n      \n      </div>\n  </div>\n  </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__service_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__service_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_vehicle_service__["a" /* VehicleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__service_vehicle_type_service__["a" /* VehicleTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_vehicle_type_service__["a" /* VehicleTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__service_brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__service_brand_service__["a" /* BrandService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"]) === "function" && _j || Object])
], CustomerAddComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=customer-add.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_vehicle__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_customer__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_customer_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_vehicle_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_vehicle_type_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_brand_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CustomerEditComponent = (function () {
    function CustomerEditComponent(customerService, vehicleService, vehicleTypeService, brandService, fb, snackBar, router, route, location) {
        this.customerService = customerService;
        this.vehicleService = vehicleService;
        this.vehicleTypeService = vehicleTypeService;
        this.brandService = brandService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.router = router;
        this.route = route;
        this.location = location;
        this.formErrors = {
            'firstName': '',
            'lastName': '',
            'phoneNumber': '',
            'plate': '',
            'brand': '',
            'color': '',
            'vehicleType': '',
        };
        this.validationMessages = {
            'firstName': {
                'minlength': 'must be at least 4 characters long.',
                'maxlength': 'cannot be more than 24 characters long.'
            },
            'lastName': {
                'minlength': 'must be at least 4 characters long.',
                'maxlength': 'cannot be more than 24 characters long.'
            },
            'phoneNumber': {
                'minlength': 'must be at least 9 characters long.',
                'maxlength': 'cannot be more than 30 characters long.'
            },
            'plate': {
                'required': 'required field',
                'minlength': 'must be at least 3 characters long.',
                'maxlength': 'cannot be more than 12 characters long.'
            },
            'color': { 'required': 'required field' },
            'brand': { 'required': 'required field' },
            'vehicleType': { 'required': 'required field' },
        };
        this.showForm = false;
        this.customer = new __WEBPACK_IMPORTED_MODULE_6__models_customer__["a" /* Customer */]();
        this.vehicle = new __WEBPACK_IMPORTED_MODULE_5__models_vehicle__["a" /* Vehicle */]();
        this.vehicleType = this.vehicleTypeService.vehiclesTypes;
        this.brand = this.brandService.brands;
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.vehicleTypeService.getList();
            _this.brandService.getList({ offset: 0, limit: 100, orderby: null, where: null });
            _this.buildForm();
            _this.vehicleService.get(_this.id).subscribe(function (data) {
                _this.formView.setValue({
                    'firstName': data.customer.firstName,
                    'lastName': data.customer.lastName,
                    'phoneNumber': data.customer.phoneNumber,
                    'plate': data.plate,
                    'color': data.color,
                    'brand': data.brand.id,
                    'vehicleType': data.vehicleType.id
                });
                _this.showForm = true;
            }, function (error) {
                console.log('Could not load Users.');
                _this.location.back();
            });
        });
    };
    CustomerEditComponent.prototype.save = function () {
        var _this = this;
        var payload = this.formView.value;
        this.vehicleService.update(this.id, payload)
            .subscribe(function (data) {
            var snackBarRef = _this.snackBar.open(data.message, "OK", {
                duration: 2000,
            });
            if (data.response === 'ok') {
                _this.formView.reset();
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.location.back();
                });
            }
        }, function (error) { return console.log('Could not create the customer.'); }, function () { return console.log("done"); });
    };
    CustomerEditComponent.prototype.back = function () {
        this.location.back();
    };
    CustomerEditComponent.prototype.buildForm = function () {
        var _this = this;
        this.formView = this.fb.group({
            'firstName': [this.customer.firstName, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30)
                ]
            ],
            'lastName': [this.customer.lastName, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30)
                ]],
            'phoneNumber': [this.customer.phoneNumber, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(9),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30)
                ]],
            'plate': [this.vehicle.plate, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(12)
                ]],
            'brand': [this.vehicle.brand, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'color': [this.vehicle.color, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'vehicleType': [this.vehicle.vehicleType, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
        });
        this.formView.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    CustomerEditComponent.prototype.onValueChanged = function (data) {
        if (!this.formView) {
            return;
        }
        var form = this.formView;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return CustomerEditComponent;
}());
CustomerEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-customer-edit',
        template: "\n    <div class=\"card\">\n      <h4 class=\"card-header\">Add Customer</h4>\n      <div class=\"card-body\">\n      <div>\n      <span class=\"app-toolbar-filler\"></span>\n      </div>\n        <md-spinner *ngIf=\"!showForm\" class=\"app-spinner\"></md-spinner>\n        <form *ngIf=\"showForm\" [formGroup]=\"formView\" >\n          <!-- form inputs -->\n          <div class=\"row\">\n           <div class=\"col-md-4\">\n              <h3>Owner Data</h3>\n              <span class=\"app-toolbar-filler\"></span>\n              <div class=\"form-group\">\n                <label for=\"firstName\">First Name</label>\n                <input type=\"text\" id=\"firstName\" class=\"form-control\"\n                       formControlName=\"firstName\" >\n                 <div *ngIf=\"formErrors.firstName\" class=\"alert alert-danger\">\n                  {{ formErrors.firstName }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"lastName\">Last Name</label>\n                <input type=\"text\" id=\"lastName\" class=\"form-control\"\n                       formControlName=\"lastName\" >\n                 <div *ngIf=\"formErrors.lastName\" class=\"alert alert-danger\">\n                  {{ formErrors.lastName }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"phoneNumber\">Phone</label>\n                <input type=\"text\" id=\"phoneNumber\" class=\"form-control\"\n                       formControlName=\"phoneNumber\" >\n                 <div *ngIf=\"formErrors.phoneNumber\" class=\"alert alert-danger\">\n                  {{ formErrors.phoneNumber }}\n                  </div>\n              </div>\n           </div>\n\n           <div class=\"col-md-4\">\n             <h3>Vehicle</h3>\n             <span class=\"app-toolbar-filler\"></span>\n              <div class=\"form-group\">\n                <label for=\"plate\">Plate</label>\n                <input type=\"text\" id=\"plate\" class=\"form-control\"\n                       formControlName=\"plate\" required >\n                 <div *ngIf=\"formErrors.plate\" class=\"alert alert-danger\">\n                  {{ formErrors.plate }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"brand\">Brand</label>\n                  <select class=\"form-control\" formControlName=\"brand\" required>\n                    <option *ngFor=\"let group of brand|async\" [value]=\"group.id\">{{ group.name }}</option>\n                  </select>\n                  <div *ngIf=\"formErrors.brand\" class=\"alert alert-danger\">\n                  {{ formErrors.brand }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"color\">Color</label>\n                <input type=\"color\" id=\"color\" class=\"form-control\"\n                       formControlName=\"color\" required >\n                 <div *ngIf=\"formErrors.color\" class=\"alert alert-danger\">\n                  {{ formErrors.color }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"vehicleType\">Type</label>\n                  <select class=\"form-control\" formControlName=\"vehicleType\" required>\n                    <option *ngFor=\"let group of vehicleType|async\" [value]=\"group.id\">{{ group.name }}</option>\n                  </select>\n                  <div *ngIf=\"formErrors.vehicleType\" class=\"alert alert-danger\">\n                  {{ formErrors.vehicleType }}\n                  </div>\n              </div>\n            </div>\n            <!-- end form inputs -->\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n               <button class=\"pull-right\" md-raised-button  color=\"accent\" [disabled]=\"!formView.valid\" (click)=\"save()\">Save</button>\n               <button class=\"pull-left\" md-raised-button color=\"primary\" (click)=\"back()\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </form>\n      <div>\n      \n      </div>\n    </div>\n  </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__service_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__service_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_vehicle_service__["a" /* VehicleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__service_vehicle_type_service__["a" /* VehicleTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_vehicle_type_service__["a" /* VehicleTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__service_brand_service__["a" /* BrandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__service_brand_service__["a" /* BrandService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"]) === "function" && _j || Object])
], CustomerEditComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=customer-edit.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_vehicle_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerComponent = (function () {
    function CustomerComponent(vehicleService, router, route) {
        this.vehicleService = vehicleService;
        this.router = router;
        this.route = route;
        this.page = 1;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicles = this.vehicleService.vehicles;
        this.vehicleService.getList({
            offset: 0,
            limit: 8,
            orderby: { field: "createdAt", type: "desc" },
            where: null
        });
        this.vehicleService.pagination.subscribe(function (value) { return _this.pagination = value; });
    };
    CustomerComponent.prototype.edit = function (id) {
        this.router.navigate(['edit/', id], { relativeTo: this.route });
    };
    CustomerComponent.prototype.add = function () {
        this.router.navigate(['add'], { relativeTo: this.route });
    };
    CustomerComponent.prototype.setPage = function (page) {
        this.vehicleService.getList({
            offset: page - 1,
            limit: this.pagination.limit,
            orderby: null,
            where: null
        });
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customer',
        template: "\n  <div class=\"card\">\n  <h4 class=\"card-header\">Customers</h4>\n  <div class=\"card-body\">\n    <ngx-datatable\n        class=\"material\"\n        [columnMode]=\"'flex'\"\n        [rows]=\" vehicles | async \"\n        [headerHeight]=\"40\"\n        [rowHeight]=\"'auto'\">\n        <ngx-datatable-column name=\"id\" [flexGrow]=\"1\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"customer\" [flexGrow]=\"1\">\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            {{value.firstName}} {{value.lastName}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"plate\" [flexGrow]=\"1\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"brand\" [flexGrow]=\"1\">\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            {{value.name}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"vehicleType\" [flexGrow]=\"1\">\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            {{value.name}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name=\"Action\" [flexGrow]=\"1\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            <button md-raised-button color=\"accent\" (click)=\"edit(row['id'])\"><i class=\"material-icons\">mode_edit</i></button>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n      <ngb-pagination \n        class=\"\"\n        [collectionSize]=\"pagination.total_items\" \n        [(page)]=\"page\" \n        [pageSize]=\"pagination.limit\"\n        [rotate]=\"true\" \n        [ellipses]=\"false\" \n        [boundaryLinks]=\"true\"\n        (pageChange)=\"setPage(page)\">\n      </ngb-pagination>\n       <span class=\"app-action\">\n          <button md-fab (click)=\"add()\"><md-icon>add circle</md-icon></button>\n        </span>\n      </div>\n</div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_vehicle_service__["a" /* VehicleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], CustomerComponent);

var _a, _b, _c;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_lot_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_lot__ = __webpack_require__(407);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LotsComponent = (function () {
    function LotsComponent(lotService, fb, snackBar) {
        this.lotService = lotService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.page = 1;
        this.formErrors = {
            'reference': ''
        };
        this.validationMessages = {
            'firstName': {
                'required': 'required field',
                'minlength': 'must be at least 4 characters long.',
                'maxlength': 'cannot be more than 24 characters long.'
            },
            'description': {
                'minlength': 'must be at least 4 characters long.',
                'maxlength': 'cannot be more than 24 characters long.'
            }
        };
        this.lots = this.lotService.lots;
        this.lot = new __WEBPACK_IMPORTED_MODULE_4__models_lot__["a" /* Lot */]();
    }
    LotsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lotService.getList({ offset: 0, limit: 8, orderby: null, where: null });
        this.lotService.pagination.subscribe(function (value) { _this.pagination = value; console.log(value); });
        this.buildForm();
    };
    LotsComponent.prototype.setPage = function (page) {
        this.lotService.getList({
            offset: page - 1,
            limit: this.pagination.limit,
            orderby: null,
            where: null
        });
    };
    LotsComponent.prototype.selectLot = function (lot) {
        this.selectedLot = lot;
        this.formView.setValue({
            'reference': this.selectedLot.reference,
            'description': this.selectedLot.description,
            'available': this.selectedLot.available,
            'reserved': this.selectedLot.reserved
        });
    };
    LotsComponent.prototype.save = function () {
        var _this = this;
        this.lot = this.formView.value;
        this.lotService.update(this.selectedLot.id, this.lot)
            .subscribe(function (data) {
            var snackBarRef = _this.snackBar.open(data.message, "OK", {
                duration: 2000,
            });
            if (data.response === 'ok') {
                _this.formView.reset();
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.ngOnInit();
                    _this.back();
                });
            }
        }, function (error) { return console.log('Object not updated.'); }, function () { return console.log("done"); });
    };
    LotsComponent.prototype.back = function () {
        this.selectedLot = null;
    };
    LotsComponent.prototype.buildForm = function () {
        var _this = this;
        this.formView = this.fb.group({
            'reference': ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(30)
                ]
            ],
            'description': ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(30)
                ]],
            'available': '',
            'reserved': ''
        });
        this.formView.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    LotsComponent.prototype.onValueChanged = function (data) {
        console.log(data);
        console.log(this.formView);
        if (!this.formView) {
            return;
        }
        var form = this.formView;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return LotsComponent;
}());
LotsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lots',
        template: __webpack_require__(491),
        styles: [__webpack_require__(474)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_lot_service__["a" /* LotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_lot_service__["a" /* LotService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === "function" && _c || Object])
], LotsComponent);

var _a, _b, _c;
//# sourceMappingURL=lots.component.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_completer__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_vehicle_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_lot_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_rent_type_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_rentlot_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ParkingComponent = (function () {
    function ParkingComponent(vehicleService, lotService, rentTypeService, rentLotService, fb, completerService, snackBar, router, route, location) {
        var _this = this;
        this.vehicleService = vehicleService;
        this.lotService = lotService;
        this.rentTypeService = rentTypeService;
        this.rentLotService = rentLotService;
        this.fb = fb;
        this.completerService = completerService;
        this.snackBar = snackBar;
        this.router = router;
        this.route = route;
        this.location = location;
        this.page = 1;
        this.pageRentLot = 1;
        this.searchData = [];
        this.paymentAmounts = {
            month: { price: 5100, time: 720 },
            day: { price: 170, time: 24 },
            halfday: { price: 90, time: 12 },
            hour: { price: 10, time: 1 }
        };
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"](function () { return function () { return _this.searching = false; }; });
        this.formatter = function (result) {
            return result.plate;
        };
        this.search = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) {
                var source = _this.vehicleService.search({
                    limit: 5,
                    offset: 0,
                    orderby: { field: 'plate', type: 'asc' },
                    where: { field: 'plate', value: term }
                })
                    .do(function () { return _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of([]);
                })
                    .map(function (res) { return res.items; });
                return source;
            })
                .do(function () { return _this.searching = false; })
                .merge(_this.hideSearchingWhenUnsubscribed);
        };
        this.searchForm = true;
        this.checkOutSearchForm = true;
        this.checkinForm = false;
        this.checkoutForm = false;
        this.rentLotTypeForm = false;
        this.showDetail = false;
        this.paymentDetail = false;
        this.lots = this.lotService.lots;
        this.pagination = this.lotService.pagination;
        this.rentLotsTypes = this.rentTypeService.rentsTypes;
        this.rentlots = this.rentLotService.rentlots;
        this.paginationRentLot = this.rentLotService.pagination;
    }
    ParkingComponent.prototype.ngOnInit = function () {
    };
    ParkingComponent.prototype.ngOnDestroy = function () {
    };
    ParkingComponent.prototype.selectItem = function (e) {
        if (e && e.plate) {
            this.vehicle = [e];
            this.selectedVehicle = e;
        }
    };
    ParkingComponent.prototype.onSelected = function (selected) {
        if (selected) {
            this.vehicle = [selected.originalObject];
            this.selectedVehicle = selected.originalObject;
        }
    };
    ParkingComponent.prototype.showCheckin = function () {
        var _this = this;
        this.lotService.getList({ offset: 0, limit: 8, orderby: null, where: null });
        this.lotService.pagination.subscribe(function (value) { _this.pagination = value; console.log(value); });
        this.searchForm = false;
        this.checkinForm = true;
    };
    ParkingComponent.prototype.selectLot = function (lot) {
        this.rentTypeService.getList();
        this.selectedLot = lot;
        this.checkinForm = false;
        this.rentLotTypeForm = true;
    };
    ParkingComponent.prototype.selectRentTypeLot = function () {
        this.rentLotTypeForm = false;
        this.showDetail = true;
    };
    ParkingComponent.prototype.backSearchForm = function () {
        this.searchForm = true;
        this.checkinForm = false;
    };
    ParkingComponent.prototype.backCheckInForm = function () {
        this.rentLotTypeForm = false;
        this.checkinForm = true;
    };
    ParkingComponent.prototype.checkin = function () {
        var _this = this;
        var payload = {
            vehicle: this.selectedVehicle.id,
            lot: this.selectedLot.id,
            rentType: this.selectedRentLotType
        };
        this.rentLotService.create(payload)
            .subscribe(function (data) {
            var snackBarRef = _this.snackBar.open(data.message, "OK", {
                duration: 2000,
            });
            if (data.response === 'ok') {
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.clear();
                });
            }
        }, function (error) { return console.log('Could not create Rentlot.'); }, function () { return console.log("done"); });
    };
    ParkingComponent.prototype.clear = function () {
        this.searchForm = true;
        this.checkOutSearchForm = true;
        this.checkinForm = false;
        this.checkoutForm = false;
        this.rentLotTypeForm = false;
        this.showDetail = false;
        this.paymentDetail = false;
        this.lots = this.lotService.lots;
        this.dataService = this.completerService.local(null, 'plate', 'plate');
        this.vehicle = null;
        this.selectedVehicle = null;
        this.selectedRentLotType = null;
        this.selectedRentlot = null;
    };
    ParkingComponent.prototype.getRentedLotes = function (event) {
        var _this = this;
        this.clear();
        if (event.tab && event.tab.textLabel === 'RENTED') {
            this.rentLotService.getList({ offset: 0, limit: 5,
                orderby: { field: 'rentlot.id', type: 'asc' },
                where: { filters: [{ field: 'rentStatus.id', value: 1, type: 'eq' }] } });
        }
        this.rentLotService.pagination.subscribe(function (value) { return _this.paginationRentLot = value; });
    };
    ParkingComponent.prototype.showCheckout = function (rentlot) {
        this.rentLotService.getList({ offset: 0, limit: 20, orderby: { field: 'rentlot.id', type: 'asc' },
            where: { filters: [{ field: 'vehicle.id', value: rentlot.id, type: 'eq' },
                    { field: 'rentStatus.id', value: 1, type: 'eq' }] } });
        this.checkOutSearchForm = false;
        this.checkoutForm = true;
    };
    ParkingComponent.prototype.backSearchCheckout = function () {
        this.checkoutForm = false;
        this.checkOutSearchForm = true;
    };
    ParkingComponent.prototype.backCheckOut = function () {
        this.paymentDetail = false;
        this.checkoutForm = true;
    };
    ParkingComponent.prototype.calcAmount = function (rentlot) {
        var amount = 0, d2 = new Date(), d1 = new Date(rentlot.createdAt.date + rentlot.createdAt.timezone), dateDiff = (d2.valueOf() - d1.valueOf()) / 1000 / 60 / 60, totalTime = dateDiff < 1 ? 1 : parseFloat(dateDiff.toFixed(2)), price = this.paymentAmounts[rentlot.rentType.name].price, time = this.paymentAmounts[rentlot.rentType.name].time, hprice = this.paymentAmounts['hour'].price;
        if (rentlot.rentType.name != "hour") {
            var t = time > totalTime;
            console.log(time, totalTime, t);
            amount = time < totalTime ? price + hprice * (totalTime - time) : price;
        }
        else {
            amount = hprice * totalTime;
        }
        rentlot.payment.amount = parseFloat(amount.toFixed(2));
        rentlot.startTime = d1;
        rentlot.currentTime = d2;
        rentlot.totalHours = totalTime;
        return rentlot;
    };
    ParkingComponent.prototype.showRentLotDetail = function (rentlot) {
        this.selectedRentlot = this.calcAmount(rentlot);
    };
    ParkingComponent.prototype.selectRentLot = function (rentlot) {
        this.selectedRentlot = this.calcAmount(rentlot);
        this.checkoutForm = false;
        this.paymentDetail = true;
    };
    ParkingComponent.prototype.checkout = function () {
        var _this = this;
        var payload = {
            rentlot: this.selectedRentlot.id,
            amount: this.selectedRentlot.payment.amount,
            endTime: this.selectedRentlot.currentTime,
            paymentStatus: 2,
            rentStatus: 2,
            lot: { available: true }
        };
        this.rentLotService.update(this.selectedRentlot.id, payload)
            .subscribe(function (data) {
            var snackBarRef = _this.snackBar.open(data.message, "OK", {
                duration: 2000,
            });
            if (data.response === 'ok') {
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.clear();
                });
            }
        }, function (error) { return console.log('Could not update Rentlot.'); }, function () { return console.log("done"); });
    };
    ParkingComponent.prototype.setPage = function (page) {
        this.lotService.getList({
            offset: page - 1,
            limit: this.pagination.limit,
            orderby: null,
            where: null
        });
    };
    ParkingComponent.prototype.setPageRentLot = function (page) {
        this.rentLotService.getList({ offset: page - 1, limit: this.paginationRentLot.limit,
            orderby: { field: 'rentlot.id', type: 'asc' },
            where: { filters: [{ field: 'rentStatus.id', value: 1, type: 'eq' }] } });
    };
    return ParkingComponent;
}());
ParkingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-parking',
        template: __webpack_require__(492),
        styles: [
            "\n    h1 {\n      margin: 1em 0 .5em;\n    }\n\n    h3 {\n      color: #444;\n      border-bottom: 1px solid #efefef;\n      margin: 1em 0 1em;\n    }\n\n    .mt-10{\n      margin-top: 5%;\n    }\n    .form-group:last-child {\n      margin-bottom: 0;\n    }\n\n    .card-block {\n      background-color: #f7f5f2;\n    }\n\n    :host {\n      padding: 5em 0;\n    }\n\n    :host >>> .match {\n      color: #3F51B4;\n    }\n\n    .completer-limit /deep/ .completer-dropdown {\n      max-height: 20rem;\n    }\n\n    .chevron {\n      padding-top: 40%;\n    }\n\n    .chevron-holder {\n      position: absolute;\n      height: 100%;\n      border: 1px solid rgba(0,0,0,.15);\n      border-top-color: rgba(0, 0, 0, 0.14902);\n      background-color: white;\n      border-radius: 25%;\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0;\n      border-left: 0;\n    }\n\n    .chevron-holder.dropdown-open {\n      border-color: #5cb3fd;\n    }\n\n    .with-chevron /deep/ .completer-input {\n      border-right: 0;\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0;\n    }"
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__service_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__service_vehicle_service__["a" /* VehicleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__service_lot_service__["a" /* LotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__service_lot_service__["a" /* LotService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_12__service_rent_type_service__["a" /* RentTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__service_rent_type_service__["a" /* RentTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_13__service_rentlot_service__["a" /* RentLotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__service_rentlot_service__["a" /* RentLotService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9_ng2_completer__["b" /* CompleterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ng2_completer__["b" /* CompleterService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"]) === "function" && _k || Object])
], ParkingComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=parking.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_user_group_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_user_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_authentication_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfileComponent = (function () {
    function ProfileComponent(userService, groupService, auth, fb, snackBar, router, route, location) {
        this.userService = userService;
        this.groupService = groupService;
        this.auth = auth;
        this.fb = fb;
        this.snackBar = snackBar;
        this.router = router;
        this.route = route;
        this.location = location;
        this.formErrors = {
            'firstName': '',
            'lastName': '',
            'email': '',
            'phoneNumber': '',
            'username': '',
            'password': '',
            'userGroups': ''
        };
        this.validationMessages = {
            'firstName': {
                'required': 'required field',
                'minlength': 'must be at least 4 characters long.',
                'maxlength': 'cannot be more than 24 characters long.'
            },
            'lastName': {
                'required': 'required field',
                'minlength': 'must be at least 4 characters long.',
                'maxlength': 'cannot be more than 24 characters long.'
            },
            'email': { 'required': 'required field' },
            'phoneNumber': { 'required': 'required field' },
            'username': { 'required': 'required field' },
            'password': { 'required': 'required field' },
            'userGroups': { 'required': 'required field' }
        };
        this.showForm = false;
        this.groups = this.groupService.groups;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */]();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = _this.auth.user.id;
            _this.groupService.getList();
            _this.buildForm();
            _this.userService.get(_this.id).subscribe(function (data) {
                _this.formView.setValue({
                    'firstName': data.firstName,
                    'lastName': data.lastName,
                    'email': data.email,
                    'phoneNumber': data.phoneNumber,
                    'username': data.username,
                    'password': data.password,
                    'active': data.active,
                    'lockUser': data.lockUser,
                    'userGroups': data.userGroups[0].id
                });
                _this.showForm = true;
            }, function (error) {
                console.log('Could not load User.');
                _this.location.back();
            });
        });
    };
    ProfileComponent.prototype.save = function () {
        var _this = this;
        this.user = this.formView.value;
        this.userService.update(this.id, this.user)
            .subscribe(function (data) {
            var snackBarRef = _this.snackBar.open(data.message, "OK", {
                duration: 2000,
            });
            if (data.response === 'ok') {
                _this.formView.reset();
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.location.back();
                });
            }
        }, function (error) { return console.log('Could not create the user.'); }, function () { return console.log("done"); });
    };
    ProfileComponent.prototype.setPhoto = function ($e) {
        this.file = $e.target.files[0];
    };
    ProfileComponent.prototype.savePhoto = function () {
        this.userService.upload(this.id, this.file);
    };
    ProfileComponent.prototype.back = function () {
        this.location.back();
    };
    ProfileComponent.prototype.buildForm = function () {
        var _this = this;
        console.log(this.user);
        this.formView = this.fb.group({
            'firstName': [this.user.firstName, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30)
                ]
            ],
            'lastName': [this.user.lastName, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30)
                ]],
            'email': [this.user.email, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'phoneNumber': [this.user.phoneNumber, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'username': [this.user.username, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'password': [this.user.password, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'active': '',
            'lockUser': '',
            'userGroups': [this.user.userGroups, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]]
        });
        this.formView.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    ProfileComponent.prototype.onValueChanged = function (data) {
        console.log(data);
        console.log(this.formView);
        if (!this.formView) {
            return;
        }
        var form = this.formView;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(493),
        styles: [__webpack_require__(475)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__service_user_group_service__["a" /* UserGroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_user_group_service__["a" /* UserGroupService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__service_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"]) === "function" && _h || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_rentlot_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AverageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AverageComponent = (function () {
    function AverageComponent(rentLotService, calendar) {
        this.rentLotService = rentLotService;
        this.vehiclesRow = null;
        this.vehiclesPage = 1;
        this.vehicles = { total_items: 0, rows: [] };
        this.lotsRow = null;
        this.lotsPage = 1;
        this.lots = { total_items: 0, rows: [] };
        this.fromDate = calendar.getNext(calendar.getToday(), 'd', -30);
        this.toDate = calendar.getToday();
        this.reportUrl = null;
    }
    AverageComponent.prototype.buildTable = function (list) {
        var data = { total_items: 0, rows: [] };
        if (list) {
            var limit = list.length / 5, arrayList = [], begin = 0, end = 5;
            for (var i = 0; i < limit; i++) {
                arrayList.push(list.slice(begin, end));
                begin = end;
                end += 5;
            }
            data = { total_items: list.length, rows: arrayList };
        }
        return data;
    };
    AverageComponent.prototype.getReportData = function () {
        var _this = this;
        var fromDate = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day, toDate = this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day;
        var filters = [
            { field: 'rentlot.startTime', value: fromDate, type: 'gte', format: 'date' },
            { field: 'rentlot.startTime', value: toDate, type: 'lte', format: 'date' },
        ];
        this.rentLotService.getAverageReportingData({ where: { filters: filters } })
            .subscribe(function (value) {
            _this.vehicles = _this.buildTable(value.vehicles);
            _this.vehiclesRow = _this.vehicles.rows[0];
            _this.vehiclesPage = 1;
            _this.totalAmountAverage = value.total_amount_average;
            _this.lots = _this.buildTable(value.lots);
            _this.lotsRow = _this.lots.rows[0];
            _this.lotsPage = 1;
        });
    };
    AverageComponent.prototype.download = function () {
        var _this = this;
        var fromDate = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day, toDate = this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day;
        var filters = [
            { field: 'rentlot.startTime', value: fromDate, type: 'gte', format: 'date' },
            { field: 'rentlot.startTime', value: toDate, type: 'lte', format: 'date' },
        ];
        this.rentLotService.getAverageReportingData({ where: { filters: filters }, format: 'pdf' })
            .subscribe(function (value) {
            _this.reportUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].filesUrlBase + '/' + value;
        });
    };
    AverageComponent.prototype.ngOnInit = function () {
        this.getReportData();
    };
    AverageComponent.prototype.setVehiclesPage = function (page) {
        this.vehiclesRow = this.vehicles.rows[page - 1];
    };
    AverageComponent.prototype.applyFilters = function () {
        this.getReportData();
    };
    return AverageComponent;
}());
AverageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-average',
        template: __webpack_require__(494),
        styles: [__webpack_require__(476)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_rentlot_service__["a" /* RentLotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_rentlot_service__["a" /* RentLotService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbCalendar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbCalendar */]) === "function" && _b || Object])
], AverageComponent);

var _a, _b;
//# sourceMappingURL=average.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_rentlot_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillingComponent = (function () {
    function BillingComponent(rentLotService, calendar) {
        this.rentLotService = rentLotService;
        this.vehiclesRow = null;
        this.vehiclesPage = 1;
        this.vehicles = { total_items: 0, rows: [] };
        this.fromDate = calendar.getNext(calendar.getToday(), 'd', -30);
        this.toDate = calendar.getToday();
        this.reportUrl = null;
    }
    BillingComponent.prototype.buildTable = function (list) {
        var data = { total_items: 0, rows: [] };
        if (list) {
            var limit = list.length / 5, arrayList = [], begin = 0, end = 5;
            for (var i = 0; i < limit; i++) {
                arrayList.push(list.slice(begin, end));
                begin = end;
                end += 5;
            }
            data = { total_items: list.length, rows: arrayList };
        }
        return data;
    };
    BillingComponent.prototype.getReportData = function () {
        var _this = this;
        var fromDate = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day, toDate = this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day;
        var filters = [
            { field: 'rentlot.startTime', value: fromDate, type: 'gte', format: 'date' },
            { field: 'rentlot.startTime', value: toDate, type: 'lte', format: 'date' },
        ];
        this.rentLotService.getBillingReportingData({ where: { filters: filters } })
            .subscribe(function (value) {
            _this.vehicles = _this.buildTable(value.items);
            _this.vehicles.total_vehicles_amount = value.total_vehicles_amount;
            _this.vehicles.total_vehicles = value.total_vehicles;
            _this.vehicles.total_vehicles_distinct = value.total_vehicles_distinct;
            _this.vehiclesRow = _this.vehicles.rows[0];
            _this.vehiclesPage = 1;
        });
    };
    BillingComponent.prototype.download = function () {
        var _this = this;
        var fromDate = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day, toDate = this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day;
        var filters = [
            { field: 'rentlot.startTime', value: fromDate, type: 'gte', format: 'date' },
            { field: 'rentlot.startTime', value: toDate, type: 'lte', format: 'date' },
        ];
        this.rentLotService.getBillingReportingData({ where: { filters: filters }, format: 'pdf' })
            .subscribe(function (value) {
            _this.reportUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].filesUrlBase + '/' + value;
        });
    };
    BillingComponent.prototype.ngOnInit = function () {
        this.getReportData();
    };
    BillingComponent.prototype.setVehiclesPage = function (page) {
        this.vehiclesRow = this.vehicles.rows[page - 1];
    };
    BillingComponent.prototype.applyFilters = function () {
        this.getReportData();
    };
    return BillingComponent;
}());
BillingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-billing',
        template: __webpack_require__(495),
        styles: [__webpack_require__(477)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_rentlot_service__["a" /* RentLotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_rentlot_service__["a" /* RentLotService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbCalendar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbCalendar */]) === "function" && _b || Object])
], BillingComponent);

var _a, _b;
//# sourceMappingURL=billing.component.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_rentlot_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotsReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LotsReportComponent = (function () {
    function LotsReportComponent(rentLotService, calendar) {
        this.rentLotService = rentLotService;
        this.lotsRow = null;
        this.lotsPage = 1;
        this.lots = { total_items: 0, rows: [] };
        this.unusedLots = { total_items: 0, rows: [] };
        this.unusedLotsRow = null;
        this.unusedLotsPage = 1;
        this.fromDate = calendar.getNext(calendar.getToday(), 'd', -30);
        this.toDate = calendar.getToday();
        this.reservedLots = false;
        this.showAll = true;
    }
    LotsReportComponent.prototype.buildTable = function (list) {
        var data = { total_items: 0, rows: [] };
        if (list) {
            var limit = list.length / 5, arrayList = [], begin = 0, end = 5;
            for (var i = 0; i < limit; i++) {
                arrayList.push(list.slice(begin, end));
                begin = end;
                end += 5;
            }
            data = { total_items: list.length, rows: arrayList };
        }
        return data;
    };
    LotsReportComponent.prototype.getReportData = function () {
        var _this = this;
        var fromDate = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day, toDate = this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day;
        var filters = [
            { field: 'rentlot.startTime', value: fromDate, type: 'gte', format: 'date' },
            { field: 'rentlot.startTime', value: toDate, type: 'lte', format: 'date' },
        ];
        if (!this.showAll) {
            filters.push({ field: 'lot.reserved', value: this.reservedLots, type: 'eq', format: null });
        }
        this.rentLotService.getLotsReportingData({ where: { filters: filters } })
            .subscribe(function (value) {
            _this.lots = _this.buildTable(value.items);
            _this.lotsRow = _this.lots.rows[0];
            _this.unusedLots = _this.buildTable(value.unused_lots);
            _this.unusedLotsRow = _this.unusedLots.rows[0];
            _this.lotsPage = 1;
            _this.unusedLotsPage = 1;
        });
    };
    LotsReportComponent.prototype.ngOnInit = function () {
        this.getReportData();
    };
    LotsReportComponent.prototype.setLotsPage = function (page) {
        this.lotsRow = this.lots.rows[page - 1];
    };
    LotsReportComponent.prototype.setUnusedLotsPage = function (page) {
        this.unusedLotsRow = this.unusedLots.rows[page - 1];
    };
    LotsReportComponent.prototype.applyFilters = function () {
        this.getReportData();
    };
    return LotsReportComponent;
}());
LotsReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lots-report',
        template: __webpack_require__(496),
        styles: [__webpack_require__(478)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_rentlot_service__["a" /* RentLotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_rentlot_service__["a" /* RentLotService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbCalendar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbCalendar */]) === "function" && _b || Object])
], LotsReportComponent);

var _a, _b;
//# sourceMappingURL=lots-report.component.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__(497),
        styles: [__webpack_require__(479)]
    }),
    __metadata("design:paramtypes", [])
], ReportsComponent);

//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_audit_service__ = __webpack_require__(227);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersAuditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersAuditComponent = (function () {
    function UsersAuditComponent(userAuditService, router, route) {
        this.userAuditService = userAuditService;
        this.router = router;
        this.route = route;
        this.page = 1;
        this.audit = null;
    }
    UsersAuditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userAudits = this.userAuditService.userAudits;
        this.userAuditService.getList({
            offset: 0,
            limit: 8,
            orderby: { field: "createdAt", type: "desc" },
            where: null
        });
        this.userAuditService.pagination.subscribe(function (value) { return _this.pagination = value; });
    };
    UsersAuditComponent.prototype.showDetail = function (audit) {
        audit.meta = JSON.parse(audit.meta);
        this.audit = audit;
    };
    UsersAuditComponent.prototype.back = function () {
        this.audit = null;
    };
    UsersAuditComponent.prototype.add = function () {
        this.router.navigate(['add'], { relativeTo: this.route });
    };
    UsersAuditComponent.prototype.setPage = function (page) {
        this.userAuditService.getList({
            offset: page - 1,
            limit: this.pagination.limit,
            orderby: { field: "createdAt", type: "desc" },
            where: null
        });
    };
    return UsersAuditComponent;
}());
UsersAuditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users-audit',
        template: __webpack_require__(498),
        styles: [__webpack_require__(480)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_audit_service__["a" /* UserAuditService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_audit_service__["a" /* UserAuditService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], UsersAuditComponent);

var _a, _b, _c;
//# sourceMappingURL=users-audit.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_user_group_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_user_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserAddComponent = (function () {
    function UserAddComponent(userService, groupService, fb, snackBar, router, route, location) {
        this.userService = userService;
        this.groupService = groupService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.router = router;
        this.route = route;
        this.location = location;
        this.formErrors = {
            'firstName': '',
            'lastName': '',
            'email': '',
            'phoneNumber': '',
            'username': '',
            'password': '',
            'userGroups': ''
        };
        this.validationMessages = {
            'firstName': {
                'required': 'required field',
                'minlength': 'must be at least 4 characters long.',
                'maxlength': 'cannot be more than 24 characters long.'
            },
            'lastName': {
                'required': 'required field',
                'minlength': 'must be at least 4 characters long.',
                'maxlength': 'cannot be more than 24 characters long.'
            },
            'email': { 'required': 'required field' },
            'phoneNumber': { 'required': 'required field' },
            'username': { 'required': 'required field' },
            'password': { 'required': 'required field' },
            'userGroups': { 'required': 'required field' }
        };
        this.groups = this.groupService.groups;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */]();
    }
    UserAddComponent.prototype.ngOnInit = function () {
        this.groupService.getList();
        this.buildForm();
    };
    UserAddComponent.prototype.save = function () {
        var _this = this;
        this.user = this.formView.value;
        this.userService.create(this.user)
            .subscribe(function (data) {
            var snackBarRef = _this.snackBar.open(data.message, "OK", {
                duration: 2000,
            });
            if (data.response === 'ok') {
                _this.formView.reset();
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.location.back();
                });
            }
        }, function (error) { return console.log('Could not create the user.'); }, function () { return console.log("done"); });
    };
    UserAddComponent.prototype.back = function () {
        this.location.back();
    };
    UserAddComponent.prototype.buildForm = function () {
        var _this = this;
        this.formView = this.fb.group({
            'firstName': [this.user.firstName, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30)
                ]
            ],
            'lastName': [this.user.lastName, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30)
                ]],
            'email': [this.user.email, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'phoneNumber': [this.user.phoneNumber, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'username': [this.user.username, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'password': [this.user.password, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'userGroups': [this.user.userGroups, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]]
        });
        this.formView.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    UserAddComponent.prototype.onValueChanged = function (data) {
        if (!this.formView) {
            return;
        }
        var form = this.formView;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return UserAddComponent;
}());
UserAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-user-add',
        template: "\n    <div class=\"card\">\n    <h4 class=\"card-header\">Add User</h4>\n    <div class=\"card-body\">\n      <div>\n      <span class=\"app-toolbar-filler\"></span>\n      <button md-button></button>\n      </div>\n        <form [formGroup]=\"formView\" >\n          <!-- form inputs -->\n          <div class=\"row\">\n           <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"firstName\">First Name</label>\n                <input type=\"text\" id=\"firstName\" class=\"form-control\"\n                       formControlName=\"firstName\" required >\n                 <div *ngIf=\"formErrors.firstName\" class=\"alert alert-danger\">\n                  {{ formErrors.firstName }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"lastName\">Last Name</label>\n                <input type=\"text\" id=\"lastName\" class=\"form-control\"\n                       formControlName=\"lastName\" required >\n                 <div *ngIf=\"formErrors.lastName\" class=\"alert alert-danger\">\n                  {{ formErrors.lastName }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" id=\"email\" class=\"form-control\"\n                       formControlName=\"email\" required >\n                 <div *ngIf=\"formErrors.email\" class=\"alert alert-danger\">\n                  {{ formErrors.email }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"phoneNumber\">Phone</label>\n                <input type=\"text\" id=\"phoneNumber\" class=\"form-control\"\n                       formControlName=\"phoneNumber\" required >\n                 <div *ngIf=\"formErrors.phoneNumber\" class=\"alert alert-danger\">\n                  {{ formErrors.phoneNumber }}\n                  </div>\n              </div>\n           </div>\n\n           <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" id=\"username\" class=\"form-control\"\n                       formControlName=\"username\" required >\n                 <div *ngIf=\"formErrors.username\" class=\"alert alert-danger\">\n                  {{ formErrors.username }}\n                  </div>\n              </div>\n              \n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" id=\"password\" class=\"form-control\"\n                       formControlName=\"password\" required >\n                 <div *ngIf=\"formErrors.password\" class=\"alert alert-danger\">\n                  {{ formErrors.password }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"userGroups\">Role</label>\n                  <select class=\"form-control\" formControlName=\"userGroups\" required>\n                    <option *ngFor=\"let group of groups|async\" [value]=\"group.id\">{{ group.name }}</option>\n                  </select>\n                  <div *ngIf=\"formErrors.userGroups\" class=\"alert alert-danger\">\n                  {{ formErrors.userGroups }}\n                  </div>\n              </div>\n            </div>\n            <!-- end form inputs -->\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n               <button class=\"pull-right\" md-raised-button  color=\"accent\" [disabled]=\"!formView.valid\" (click)=\"save()\">Save</button>\n               <button class=\"pull-left\" md-raised-button color=\"primary\" (click)=\"back()\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </form>\n      \n   </div>\n</div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__service_user_group_service__["a" /* UserGroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_user_group_service__["a" /* UserGroupService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"]) === "function" && _g || Object])
], UserAddComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=user-add.component.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_user_group_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_user_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserEditComponent = (function () {
    function UserEditComponent(userService, groupService, fb, snackBar, router, route, location) {
        this.userService = userService;
        this.groupService = groupService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.router = router;
        this.route = route;
        this.location = location;
        this.formErrors = {
            'firstName': '',
            'lastName': '',
            'email': '',
            'phoneNumber': '',
            'username': '',
            'password': '',
            'userGroups': ''
        };
        this.validationMessages = {
            'firstName': {
                'required': 'required field',
                'minlength': 'must be at least 4 characters long.',
                'maxlength': 'cannot be more than 24 characters long.'
            },
            'lastName': {
                'required': 'required field',
                'minlength': 'must be at least 4 characters long.',
                'maxlength': 'cannot be more than 24 characters long.'
            },
            'email': { 'required': 'required field' },
            'phoneNumber': { 'required': 'required field' },
            'username': { 'required': 'required field' },
            'password': { 'required': 'required field' },
            'userGroups': { 'required': 'required field' }
        };
        this.showForm = false;
        this.groups = this.groupService.groups;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */]();
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.groupService.getList();
            _this.buildForm();
            _this.userService.get(_this.id).subscribe(function (data) {
                _this.formView.setValue({
                    'firstName': data.firstName,
                    'lastName': data.lastName,
                    'email': data.email,
                    'phoneNumber': data.phoneNumber,
                    'username': data.username,
                    'password': data.password,
                    'active': data.active,
                    'lockUser': data.lockUser,
                    'userGroups': data.userGroups[0].id
                });
                _this.showForm = true;
            }, function (error) {
                console.log('Could not load Users.');
                _this.location.back();
            });
        });
    };
    UserEditComponent.prototype.save = function () {
        var _this = this;
        this.user = this.formView.value;
        this.userService.update(this.id, this.user)
            .subscribe(function (data) {
            var snackBarRef = _this.snackBar.open(data.message, "OK", {
                duration: 2000,
            });
            if (data.response === 'ok') {
                _this.formView.reset();
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.location.back();
                });
            }
        }, function (error) { return console.log('Could not create the user.'); }, function () { return console.log("done"); });
    };
    UserEditComponent.prototype.setPhoto = function ($e) {
        this.file = $e.target.files[0];
    };
    UserEditComponent.prototype.savePhoto = function () {
        this.userService.upload(this.id, this.file);
    };
    UserEditComponent.prototype.back = function () {
        this.location.back();
    };
    UserEditComponent.prototype.buildForm = function () {
        var _this = this;
        console.log(this.user);
        this.formView = this.fb.group({
            'firstName': [this.user.firstName, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30)
                ]
            ],
            'lastName': [this.user.lastName, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30)
                ]],
            'email': [this.user.email, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'phoneNumber': [this.user.phoneNumber, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'username': [this.user.username, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'password': [this.user.password, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]],
            'active': '',
            'lockUser': '',
            'userGroups': [this.user.userGroups, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]]
        });
        this.formView.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    UserEditComponent.prototype.onValueChanged = function (data) {
        console.log(data);
        console.log(this.formView);
        if (!this.formView) {
            return;
        }
        var form = this.formView;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return UserEditComponent;
}());
UserEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-user-add',
        template: "\n   <div class=\"card\">\n    <h4 class=\"card-header\">Edit User</h4>\n    <div class=\"card-body\">\n      <div>\n      <span class=\"app-toolbar-filler\"></span>\n      <button md-button></button>\n      </div>\n        <md-spinner *ngIf=\"!showForm\" class=\"app-spinner\"></md-spinner>\n        <div *ngIf=\"showForm\" class=\"col-md-12\">\n             <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <img src=\"../../assets/images/user.jpg\" class=\"img-fluid\" alt=\"...\">\n                </div>\n                <div class=\"col-md-4\">\n                  <label>Please Select an image</label>\n                  <input type=\"file\" id=\"file\" (change)=\"setPhoto($event)\" class=\"form-control-file\">\n                  <button md-raised-button (click)=\"savePhoto($event)\" color=\"primary\" >Save</button>\n                </div>\n              </div>\n           </div>\n        <form *ngIf=\"showForm\" [formGroup]=\"formView\">\n          <!-- form inputs -->\n          <div class=\"row\">\n           <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"firstName\">First Name</label>\n                <input type=\"text\" id=\"firstName\" class=\"form-control\"\n                       formControlName=\"firstName\" required >\n                 <div *ngIf=\"formErrors.firstName\" class=\"alert alert-danger\">\n                  {{ formErrors.firstName }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"lastName\">Last Name</label>\n                <input type=\"text\" id=\"lastName\" class=\"form-control\"\n                       formControlName=\"lastName\" required >\n                 <div *ngIf=\"formErrors.lastName\" class=\"alert alert-danger\">\n                  {{ formErrors.lastName }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" id=\"email\" class=\"form-control\"\n                       formControlName=\"email\" required >\n                 <div *ngIf=\"formErrors.email\" class=\"alert alert-danger\">\n                  {{ formErrors.email }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"phoneNumber\">Phone</label>\n                <input type=\"text\" id=\"phoneNumber\" class=\"form-control\"\n                       formControlName=\"phoneNumber\" required >\n                 <div *ngIf=\"formErrors.phoneNumber\" class=\"alert alert-danger\">\n                  {{ formErrors.phoneNumber }}\n                  </div>\n              </div>\n           </div>\n\n           <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" id=\"username\" class=\"form-control\"\n                       formControlName=\"username\" required >\n                 <div *ngIf=\"formErrors.username\" class=\"alert alert-danger\">\n                  {{ formErrors.username }}\n                  </div>\n              </div>\n              \n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" id=\"password\" class=\"form-control\"\n                       formControlName=\"password\" required >\n                 <div *ngIf=\"formErrors.password\" class=\"alert alert-danger\">\n                  {{ formErrors.password }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"userGroups\">Role</label>\n                  <select class=\"form-control\" formControlName=\"userGroups\" required>\n                    <option *ngFor=\"let group of groups|async\" [value]=\"group.id\">{{ group.name }}</option>\n                  </select>\n                  <div *ngIf=\"formErrors.userGroups\" class=\"alert alert-danger\">\n                  {{ formErrors.userGroups }}\n                  </div>\n              </div>\n              <div class=\"form-check\">\n                <md-checkbox formControlName=\"active\">Is Active ?</md-checkbox>\n                <md-checkbox formControlName=\"lockUser\">Suspend</md-checkbox>\n              </div>\n            </div>\n            <!-- end form inputs -->\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n               <button class=\"pull-right\" md-raised-button color=\"accent\" [disabled]=\"!formView.valid\" (click)=\"save()\">Save</button>\n               <button class=\"pull-left\" md-raised-button color=\"primary\" (click)=\"back()\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </form>\n      \n   </div>\n</div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__service_user_group_service__["a" /* UserGroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_user_group_service__["a" /* UserGroupService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["Location"]) === "function" && _g || Object])
], UserEditComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=user-edit.component.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CommonService = (function () {
    function CommonService(http, auth, router) {
        this.http = http;
        this.auth = auth;
        this.router = router;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Authorization', this.auth.token);
        headers.append('Content-Type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ 'headers': headers });
    }
    CommonService.prototype.updateOptions = function (params) {
        var options = this.options;
        if (params) {
            options.params = params;
        }
        return options;
    };
    CommonService.prototype.get = function (url, params) {
        var options = this.updateOptions(params);
        return this.http.get(url, this.options)
            .map(this.manageData)
            .catch(this.handleError);
    };
    CommonService.prototype.post = function (url, params) {
        var options = this.updateOptions(params);
        return this.http.post(url, params, this.options)
            .map(this.manageData)
            .catch(this.handleError);
    };
    CommonService.prototype.put = function (url, params) {
        var options = this.updateOptions(params);
        return this.http.put(url, params, this.options)
            .map(this.manageData)
            .catch(this.handleError);
    };
    CommonService.prototype.patch = function (url, params) {
        /* not implemented yet */
    };
    CommonService.prototype.delete = function (url, params) {
        /* not implemented yet */
    };
    CommonService.prototype.uploadFile = function (url, fileToUpload) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': this.auth.token,
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: fileToUpload
        }).then(function (response) { return response.json(); }).then(function (success) { return console.log(success); }).catch(function (error) { return console.log(error); });
    };
    CommonService.prototype.manageData = function (response) {
        return response.json() || {};
    };
    CommonService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return CommonService;
}());
CommonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], CommonService);

var _a, _b, _c;
//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.users = this.userService.users;
        this.userService.getList();
    };
    UsersComponent.prototype.edit = function (id) {
        this.router.navigate(['edit/', id], { relativeTo: this.route });
    };
    UsersComponent.prototype.add = function () {
        this.router.navigate(['add'], { relativeTo: this.route });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(499),
        styles: [__webpack_require__(481)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], UsersComponent);

var _a, _b, _c;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('tk')) {
            // logged in so return true
            console.log("guard");
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(501),
        styles: [__webpack_require__(483)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_authentication_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.user = { username: 'admin', password: 'password1' };
        this.submitted = false;
        this.showError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/admin']);
            }
            else {
                _this.showError = true;
            }
        }, function (error) {
            _this.showError = true;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(502),
        styles: [__webpack_require__(484)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer() {
        this.firstName = "";
        this.lastName = "";
        this.phoneNumber = "";
    }
    return Customer;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vehicle; });
var Vehicle = (function () {
    function Vehicle() {
        this.color = "";
        this.plate = "";
    }
    return Vehicle;
}());

//# sourceMappingURL=vehicle.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentTypeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RentTypeService = (function () {
    function RentTypeService(commonService) {
        this.commonService = commonService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrlBase + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiPaths.rentType;
        this.dataStore = { rentsTypes: [] };
        this._rentsTypes = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.rentsTypes = this._rentsTypes.asObservable();
    }
    RentTypeService.prototype.getList = function (params) {
        var _this = this;
        if (params === void 0) { params = { offset: 0, limit: 20, orderby: null, where: null }; }
        var url = this.baseUrl + '/all/';
        this.commonService.get(url, params)
            .subscribe(function (data) {
            _this.dataStore.rentsTypes = data.items;
            _this._rentsTypes.next(Object.assign({}, _this.dataStore).rentsTypes);
        }, function (error) { return console.log('Could not load RentTypes.'); }, function () { return console.log("done"); });
    };
    RentTypeService.prototype.get = function (id) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.get(url);
    };
    RentTypeService.prototype.create = function (data) {
        var url = this.baseUrl;
        return this.commonService.post(url, data);
    };
    RentTypeService.prototype.update = function (id, data) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.put(url, data);
    };
    RentTypeService.prototype.delete = function (id) { };
    return RentTypeService;
}());
RentTypeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], RentTypeService);

var _a;
//# sourceMappingURL=rent-type.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_pagination__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAuditService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserAuditService = (function () {
    function UserAuditService(commonService) {
        this.commonService = commonService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrlBase + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiPaths.userAudit;
        this.dataStore = { userAudits: [], pagination: new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* Pagination */]() };
        this._userAudits = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this._pagination = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* Pagination */]());
        this.userAudits = this._userAudits.asObservable();
        this.pagination = this._pagination.asObservable();
    }
    UserAuditService.prototype.getList = function (params) {
        var _this = this;
        if (params === void 0) { params = { offset: 0, limit: 20, orderby: null, where: null }; }
        var url = this.baseUrl + '/all/';
        this.commonService.get(url, params)
            .subscribe(function (data) {
            _this.dataStore.userAudits = data.items;
            _this.dataStore.pagination = data.pagination;
            _this._userAudits.next(Object.assign({}, _this.dataStore).userAudits);
            _this._pagination.next(Object.assign({}, _this.dataStore).pagination);
        }, function (error) { return console.log('Could not load UserAudits.'); }, function () { return console.log("done"); });
    };
    UserAuditService.prototype.search = function (params) {
        if (params === void 0) { params = { offset: 0, limit: 20, orderby: null, where: null }; }
        var url = this.baseUrl + '/all/';
        return this.commonService.get(url, params);
    };
    UserAuditService.prototype.get = function (id) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.get(url);
    };
    UserAuditService.prototype.create = function (data) {
        var url = this.baseUrl;
        return this.commonService.post(url, data);
    };
    UserAuditService.prototype.update = function (id, data) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.put(url, data);
    };
    UserAuditService.prototype.delete = function (id) { };
    return UserAuditService;
}());
UserAuditService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], UserAuditService);

var _a;
//# sourceMappingURL=user-audit.service.js.map

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 385;


/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_user_add_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_user_edit_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_audit_users_audit_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lots_lots_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__parking_parking_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__customer_customer_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__customer_customer_add_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__customer_customer_edit_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reports_reports_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reports_billing_billing_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reports_average_average_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reports_lots_report_lots_report_component__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var adminRoutes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_3__admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__reports_reports_component__["a" /* ReportsComponent */] },
                    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_4__users_users_component__["a" /* UsersComponent */] },
                    { path: 'users/edit/:id', component: __WEBPACK_IMPORTED_MODULE_6__users_user_edit_component__["a" /* UserEditComponent */] },
                    { path: 'users/add', component: __WEBPACK_IMPORTED_MODULE_5__users_user_add_component__["a" /* UserAddComponent */] },
                    { path: 'audit', component: __WEBPACK_IMPORTED_MODULE_7__users_audit_users_audit_component__["a" /* UsersAuditComponent */] },
                    { path: 'customers', component: __WEBPACK_IMPORTED_MODULE_11__customer_customer_component__["a" /* CustomerComponent */] },
                    { path: 'customers/edit/:id', component: __WEBPACK_IMPORTED_MODULE_13__customer_customer_edit_component__["a" /* CustomerEditComponent */] },
                    { path: 'customers/add', component: __WEBPACK_IMPORTED_MODULE_12__customer_customer_add_component__["a" /* CustomerAddComponent */] },
                    { path: 'lots', component: __WEBPACK_IMPORTED_MODULE_8__lots_lots_component__["a" /* LotsComponent */] },
                    { path: 'parking', component: __WEBPACK_IMPORTED_MODULE_9__parking_parking_component__["a" /* ParkingComponent */] },
                    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */] },
                    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_14__reports_reports_component__["a" /* ReportsComponent */] },
                    { path: 'reports/lots', component: __WEBPACK_IMPORTED_MODULE_17__reports_lots_report_lots_report_component__["a" /* LotsReportComponent */] },
                    { path: 'reports/billing', component: __WEBPACK_IMPORTED_MODULE_15__reports_billing_billing_component__["a" /* BillingComponent */] },
                    { path: 'reports/average', component: __WEBPACK_IMPORTED_MODULE_16__reports_average_average_component__["a" /* AverageComponent */] }
                ]
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(adminRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AdminRoutingModule);

//# sourceMappingURL=admin-routing.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_completer__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_prettyjson__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_user_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_user_group_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_user_audit_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_customer_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_vehicle_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_vehicle_type_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_brand_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_section_service__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_lot_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_rentlot_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_rent_type_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_rent_status_service__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__admin_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_dashboard_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__admin_routing_module__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__datatable_datatable_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__users_users_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__users_user_add_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__users_user_edit_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__user_group_user_group_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__user_group_user_group_edit_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__user_group_user_group_add_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__parking_parking_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__customer_customer_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__customer_customer_add_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__customer_customer_edit_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__users_audit_users_audit_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__profile_profile_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__reports_reports_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__lots_lots_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__reports_billing_billing_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__reports_average_average_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__reports_lots_report_lots_report_component__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// services

































var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_8_ng2_completer__["a" /* Ng2CompleterModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_26__admin_routing_module__["a" /* AdminRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_prettyjson__["a" /* PrettyJsonModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_24__admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_25__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_28__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_29__users_user_add_component__["a" /* UserAddComponent */],
            __WEBPACK_IMPORTED_MODULE_30__users_user_edit_component__["a" /* UserEditComponent */],
            __WEBPACK_IMPORTED_MODULE_31__user_group_user_group_component__["a" /* UserGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_32__user_group_user_group_edit_component__["a" /* UserGroupEditComponent */],
            __WEBPACK_IMPORTED_MODULE_33__user_group_user_group_add_component__["a" /* UserGroupAddComponent */],
            __WEBPACK_IMPORTED_MODULE_34__parking_parking_component__["a" /* ParkingComponent */],
            __WEBPACK_IMPORTED_MODULE_35__customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_36__customer_customer_add_component__["a" /* CustomerAddComponent */],
            __WEBPACK_IMPORTED_MODULE_37__customer_customer_edit_component__["a" /* CustomerEditComponent */],
            __WEBPACK_IMPORTED_MODULE_27__datatable_datatable_component__["a" /* DatatableComponent */],
            __WEBPACK_IMPORTED_MODULE_38__users_audit_users_audit_component__["a" /* UsersAuditComponent */],
            __WEBPACK_IMPORTED_MODULE_39__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_40__reports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_41__lots_lots_component__["a" /* LotsComponent */],
            __WEBPACK_IMPORTED_MODULE_42__reports_billing_billing_component__["a" /* BillingComponent */],
            __WEBPACK_IMPORTED_MODULE_43__reports_average_average_component__["a" /* AverageComponent */],
            __WEBPACK_IMPORTED_MODULE_44__reports_lots_report_lots_report_component__["a" /* LotsReportComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_27__datatable_datatable_component__["a" /* DatatableComponent */],
            __WEBPACK_IMPORTED_MODULE_12__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_13__service_user_group_service__["a" /* UserGroupService */],
            __WEBPACK_IMPORTED_MODULE_14__service_user_audit_service__["a" /* UserAuditService */],
            __WEBPACK_IMPORTED_MODULE_15__service_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_16__service_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_17__service_vehicle_type_service__["a" /* VehicleTypeService */],
            __WEBPACK_IMPORTED_MODULE_18__service_brand_service__["a" /* BrandService */],
            __WEBPACK_IMPORTED_MODULE_19__service_section_service__["a" /* SectionService */],
            __WEBPACK_IMPORTED_MODULE_20__service_lot_service__["a" /* LotService */],
            __WEBPACK_IMPORTED_MODULE_21__service_rentlot_service__["a" /* RentLotService */],
            __WEBPACK_IMPORTED_MODULE_22__service_rent_type_service__["a" /* RentTypeService */],
            __WEBPACK_IMPORTED_MODULE_23__service_rent_status_service__["a" /* RentStatusService */]
        ]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(489),
        styles: [__webpack_require__(472)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatatableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatatableComponent = (function () {
    function DatatableComponent() {
    }
    DatatableComponent.prototype.ngOnInit = function () {
    };
    return DatatableComponent;
}());
DatatableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-datatable',
        template: __webpack_require__(490),
        styles: [__webpack_require__(473)]
    }),
    __metadata("design:paramtypes", [])
], DatatableComponent);

//# sourceMappingURL=datatable.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGroupAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserGroupAddComponent = (function () {
    function UserGroupAddComponent() {
    }
    UserGroupAddComponent.prototype.ngOnInit = function () {
    };
    return UserGroupAddComponent;
}());
UserGroupAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-group-add',
        template: "\n    <md-card>\n    <h2>Users Group</h2>\n    </md-card>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], UserGroupAddComponent);

//# sourceMappingURL=user-group-add.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGroupEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserGroupEditComponent = (function () {
    function UserGroupEditComponent() {
    }
    UserGroupEditComponent.prototype.ngOnInit = function () {
    };
    return UserGroupEditComponent;
}());
UserGroupEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-group-edit',
        template: "\n    <md-card>\n    <h2>Users Group</h2>\n    </md-card>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], UserGroupEditComponent);

//# sourceMappingURL=user-group-edit.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_group_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGroupComponent = (function () {
    function UserGroupComponent(groupService, router, route) {
        this.groupService = groupService;
        this.router = router;
        this.route = route;
    }
    UserGroupComponent.prototype.ngOnInit = function () {
        this.groups = this.groupService.groups;
        this.groupService.getList();
    };
    UserGroupComponent.prototype.edit = function (id) {
        this.router.navigate(['edit/', id], { relativeTo: this.route });
    };
    UserGroupComponent.prototype.add = function () {
        this.router.navigate(['add'], { relativeTo: this.route });
    };
    return UserGroupComponent;
}());
UserGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-group',
        template: "\n    <md-card>\n    <h2>Users Group</h2>\n    <ngx-datatable\n        class=\"material\"\n        [rows]=\"groups | async\"\n        [headerHeight]=\"50\"\n        [footerHeight]=\"50\"\n        [rowHeight]=\"'auto'\">\n        <ngx-datatable-column name=\"Id\" [width]=\"100\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"Name\" [width]=\"100\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"Action\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            <button md-raised-button color=\"accent\" (click)=\"edit(row['id'])\"><i class=\"material-icons\">mode_edit</i></button>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n      <span class=\"app-action\">\n          <button md-fab (click)=\"add()\"><md-icon>add circle</md-icon></button>\n      </span>\n    </md-card>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_group_service__["a" /* UserGroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_group_service__["a" /* UserGroupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], UserGroupComponent);

var _a, _b, _c;
//# sourceMappingURL=user-group.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_dialog, _snackbar) {
        var _this = this;
        this._dialog = _dialog;
        this._snackbar = _snackbar;
        this.isDarkTheme = false;
        this.foods = [
            { name: 'Pizza', rating: 'Excellent' },
            { name: 'Burritos', rating: 'Great' },
            { name: 'French fries', rating: 'Pretty good' },
        ];
        this.progress = 0;
        // Update the value for the progress-bar on an interval.
        setInterval(function () {
            _this.progress = (_this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }
    AppComponent.prototype.showSnackbar = function () {
        this._snackbar.open('YUM SNACKS', 'CHEW');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(500),
        styles: [__webpack_require__(482)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_prettyjson__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_authentication_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_common_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_admin_module__ = __webpack_require__(398);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//todo : CREATE not found component








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18__admin_admin_module__["a" /* AdminModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_angular2_prettyjson__["a" /* PrettyJsonModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_14__service_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_15__service_common_service__["a" /* CommonService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lot; });
var Lot = (function () {
    function Lot() {
        this.reference = "";
        this.description = "";
        this.available = true;
        this.reserved = false;
    }
    return Lot;
}());

//# sourceMappingURL=lot.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentStatusService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RentStatusService = (function () {
    function RentStatusService(commonService) {
        this.commonService = commonService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrlBase + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiPaths.rentStatus;
        this.dataStore = { rentStatus: [] };
        this._rentStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.rentStatus = this._rentStatus.asObservable();
    }
    RentStatusService.prototype.getList = function (params) {
        var _this = this;
        if (params === void 0) { params = { offset: 0, limit: 20, orderby: null, where: null }; }
        var url = this.baseUrl + '/all/';
        this.commonService.get(url, params)
            .subscribe(function (data) {
            _this.dataStore.rentStatus = data.items;
            _this._rentStatus.next(Object.assign({}, _this.dataStore).rentStatus);
        }, function (error) { return console.log('Could not load RentStatus.'); }, function () { return console.log("done"); });
    };
    RentStatusService.prototype.get = function (id) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.get(url);
    };
    RentStatusService.prototype.create = function (data) {
        var url = this.baseUrl;
        return this.commonService.post(url, data);
    };
    RentStatusService.prototype.update = function (id, data) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.put(url, data);
    };
    RentStatusService.prototype.delete = function (id) { };
    return RentStatusService;
}());
RentStatusService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], RentStatusService);

var _a;
//# sourceMappingURL=rent-status.service.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionService = (function () {
    function SectionService() {
    }
    return SectionService;
}());
SectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SectionService);

//# sourceMappingURL=section.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('tk'));
        this.token = currentUser && currentUser.token;
        this.user = currentUser && currentUser.user;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var uri = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrlBase + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiPaths.auth;
        return this.http.post(uri, JSON.stringify({ username: username, password: password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            var user = response.json() && response.json().user;
            if (token) {
                // set token property
                _this.token = token;
                _this.user = user;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('tk', JSON.stringify({ token: token, user: user }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('tk');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".user-sidebar{\n    padding: 0px;\n    margin: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n    .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n    .custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_pagination__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentLotService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RentLotService = (function () {
    function RentLotService(commonService) {
        this.commonService = commonService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrlBase + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiPaths.rentLot;
        this.dataStore = { rentlots: [], pagination: new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* Pagination */]() };
        this._rentlots = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this._pagination = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* Pagination */]());
        this.pagination = this._pagination.asObservable();
        this.rentlots = this._rentlots.asObservable();
    }
    RentLotService.prototype.getList = function (params) {
        var _this = this;
        if (params === void 0) { params = { offset: 0, limit: 20, orderby: null, where: null }; }
        var url = this.baseUrl + '/all/';
        this.commonService.get(url, params)
            .subscribe(function (data) {
            _this.dataStore.rentlots = data.items;
            _this.dataStore.pagination = data.pagination;
            _this._rentlots.next(Object.assign({}, _this.dataStore).rentlots);
            _this._pagination.next(Object.assign({}, _this.dataStore).pagination);
        }, function (error) { return console.log('Could not load Rentlots.'); }, function () { return console.log("done"); });
    };
    RentLotService.prototype.get = function (id) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.get(url);
    };
    RentLotService.prototype.getLotsReportingData = function (data) {
        if (data === void 0) { data = null; }
        var url = this.baseUrl + '/reporting/lots';
        return this.commonService.get(url, data);
    };
    RentLotService.prototype.getBillingReportingData = function (data) {
        if (data === void 0) { data = null; }
        var url = this.baseUrl + '/reporting/billing';
        return this.commonService.get(url, data);
    };
    RentLotService.prototype.getAverageReportingData = function (data) {
        if (data === void 0) { data = null; }
        var url = this.baseUrl + '/reporting/average';
        return this.commonService.get(url, data);
    };
    RentLotService.prototype.create = function (data) {
        var url = this.baseUrl;
        return this.commonService.post(url, data);
    };
    RentLotService.prototype.update = function (id, data) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.put(url, data);
    };
    RentLotService.prototype.delete = function (id) { };
    return RentLotService;
}());
RentLotService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], RentLotService);

var _a;
//# sourceMappingURL=rentlot.service.js.map

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "  .center {\n    margin: auto;\n    width: 50%;\n    padding: 10px;\n    text-align: center;\n  }\n\n  form {\n      font-size: 18px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports = "\n<md-sidenav-container fullscreen>\n\n  <md-sidenav #sidenav class=\"app-sidenav\" mode=\"side\" opened=\"true\">\n    <md-card class=\"user-sidebar\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <img src=\"../../assets/images/user.jpg\" class=\"img-fluid\" alt=\"...\">\n       </div>\n       <div class=\"col-md-4\">\n        <p class=\"text-capitalize\">{{user.firstName}} {{user.lastName}}</p>\n        <p class=\"text-uppercase\">{{user.role}}</p>\n        <a class=\"text-lowercase\" routerLink=\"./profile\" >Profile</a>\n       </div>\n      </div>\n    </md-card>\n    <md-nav-list>\n          <div *ngIf=\"user.role=='admin'\">\n            <a class=\"text-uppercase\" md-list-item routerLink=\"./reports\" > <i class=\"material-icons\">insert_chart</i>Reports</a>\n            <a class=\"text-uppercase\" md-list-item routerLink=\"./users\" > <i class=\"material-icons\">supervisor_account</i> Users</a>\n            <a class=\"text-uppercase\" md-list-item routerLink=\"./audit\" > <i class=\"material-icons\">adb</i> Audit Users</a>\n            <a class=\"text-uppercase\" md-list-item routerLink=\"./lots\" > <i class=\"material-icons\">view_list</i> Lots</a>\n          </div>\n          <a class=\"text-uppercase\" md-list-item routerLink=\"./customers\" > <i class=\"material-icons\">view_list</i> Customers</a>\n          <a class=\"text-uppercase\" md-list-item routerLink=\"./parking\" > <i class=\"material-icons\">local_parking</i>Manage Parking</a>\n          <a class=\"text-uppercase\" md-list-item (click)=\"logout()\"><i class=\"material-icons\">arrow_back</i>Logout</a>\n          \n    </md-nav-list>\n  </md-sidenav>\n\n  <md-toolbar color=\"primary\">\n    <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\n      <i class=\"material-icons app-toolbar-menu\">menu</i>\n    </button>\n\n\n    <span class=\"app-toolbar-filler\"></span>\n    <h3>PARKING - ADMIN</h3>\n  </md-toolbar>\n\n  <div class=\"admin-content\">\n    <md-sidenav-container>\n      <div class=\"my-content\">\n        <router-outlet></router-outlet>\n      </div>\n    </md-sidenav-container>\n  </div>\n</md-sidenav-container>"

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports = "<md-card>\n<h2>Dashboard</h2>\n</md-card>\n "

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGroupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserGroupService = (function () {
    function UserGroupService(commonService) {
        this.commonService = commonService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrlBase + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiPaths.userGroup;
        this.dataStore = { groups: [] };
        this._groups = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.groups = this._groups.asObservable();
    }
    UserGroupService.prototype.getList = function (offset, limit) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 20; }
        var url = this.baseUrl + '/' + offset + '/' + limit;
        this.commonService.get(url)
            .subscribe(function (data) {
            _this.dataStore.groups = data;
            _this._groups.next(Object.assign({}, _this.dataStore).groups);
        }, function (error) { return console.log('Could not load groups.'); }, function () { return console.log("done"); });
    };
    UserGroupService.prototype.get = function (id) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.get(url);
    };
    return UserGroupService;
}());
UserGroupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], UserGroupService);

var _a;
//# sourceMappingURL=user-group.service.js.map

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = "<p>\n  datatable works!\n</p>\n"

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">Lots</h4>\n  <div class=\"card-body\">\n        <ngx-datatable\n        *ngIf=\"!selectedLot\"\n        class=\"material\"\n        [rows]=\"lots | async\"\n        [headerHeight]=\"50\"\n        [footerHeight]=\"50\"\n        [rowHeight]=\"'auto'\">\n        <ngx-datatable-column name=\"id\" [width]=\"100\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"reference\" [width]=\"100\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"section\" [width]=\"100\">\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            {{value.name}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"available\" [width]=\"100\">\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            <div [ngClass]=\"{'bg-success': value, 'bg-danger': !value}\" class=\"\">&nbsp;</div>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"reserved\" [width]=\"100\">\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            <i class=\"material-icons\" *ngIf=\"value\">accessible</i>\n            <i class=\"material-icons\" *ngIf=\"!value\">accessibility</i>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Action\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            <button md-raised-button color=\"accent\" (click)=\"selectLot(row)\"><i class=\"material-icons\">mode_edit</i></button>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n      <ngb-pagination *ngIf=\"pagination.total_items > 0 && !selectedLot\"\n          class=\"\"\n          [collectionSize]=\"pagination.total_items\" \n          [(page)]=\"page\" \n          [pageSize]=\"pagination.limit\"\n          [rotate]=\"true\" \n          [ellipses]=\"false\" \n          [boundaryLinks]=\"true\"\n          (pageChange)=\"setPage(page)\">\n        </ngb-pagination>\n\n    <md-card *ngIf=\"selectedLot\">\n      <form [formGroup]=\"formView\">\n          <!-- form inputs -->\n          <div class=\"row\">\n           <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Section: {{selectedLot.section.name}}</label>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"reference\">Reference</label>\n                <input type=\"text\" id=\"reference\" class=\"form-control\"\n                       formControlName=\"reference\" required >\n                 <div *ngIf=\"formErrors.reference\" class=\"alert alert-danger\">\n                  {{ formErrors.reference }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"description\">Description</label>\n                <input type=\"text\" id=\"description\" class=\"form-control\"\n                       formControlName=\"description\">\n                 <div *ngIf=\"formErrors.description\" class=\"alert alert-danger\">\n                  {{ formErrors.description }}\n                  </div>\n              </div>\n           </div>\n           <div class=\"col-md-4\">\n              <div class=\"form-group\">\n               <md-checkbox formControlName=\"available\">Available</md-checkbox>\n               <md-checkbox formControlName=\"reserved\">Reserved</md-checkbox>\n              </div>\n            </div>\n            <!-- end form inputs -->\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n               <button class=\"pull-right\" md-raised-button color=\"accent\" [disabled]=\"!formView.valid\" (click)=\"save()\">Save</button>\n               <button md-raised-button color=\"accent\" (click)=\"back()\">BACK</button>\n              </div>\n            </div>\n          </div>\n        </form>\n    </md-card>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">Manage Parking</h4>\n  <div class=\"card-body\">\n      <md-tab-group [(selectedIndex)]=\"tabIndex\" (focusChange)=\"getRentedLotes($event)\">\n        <md-tab label=\"IN - VEHICLE\">\n          <md-card *ngIf=\"searchForm\" class=\"page-default\">\n          <div class=\"row page\">\n             <div class=\"col-md-3\">\n               <h3>Search Vehicle</h3>\n               <div class=\"form-group\">\n                  <div class=\"form-group\">\n                    <input id=\"typeahead-http\" type=\"text\" class=\"form-control\" \n                    [class.is-invalid]=\"searchFailed\"\n                    (ngModelChange)=\"selectItem($event)\"\n                    [(ngModel)]=\"model\" \n                    [ngbTypeahead]=\"search\" \n                    [inputFormatter]=\"formatter\"\n                    [resultFormatter]=\"formatter\"\n                    placeholder=\"Enter plate ej: AUX123\" \n                    />\n                    <span *ngIf=\"searching\">searching...</span>\n                    <div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\n                  </div>\n               </div>\n             </div>\n             <div class=\"col-md-9\">\n                  <ngx-datatable\n                    class=\"material\"\n                    [rows]=\"vehicle\"\n                    [headerHeight]=\"50\"\n                    [footerHeight]=\"50\"\n                    [rowHeight]=\"'auto'\">\n                    <ngx-datatable-column name=\"id\" [width]=\"100\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"customer\" [width]=\"100\">\n                      <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        {{value.firstName}} {{value.lastName}}\n                      </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column name=\"plate\" [width]=\"100\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"brand\" [width]=\"100\">\n                      <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        {{value.name}}\n                      </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column name=\"vehicleType\" [width]=\"100\">\n                      <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        {{value.name}}\n                      </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column name=\"Action\">\n                      <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                        <button md-raised-button color=\"accent\" (click)=\"showCheckin()\">CHECK IN</button>\n                      </ng-template>\n                    </ngx-datatable-column>\n                  </ngx-datatable>\n                  <span class=\"app-action\">\n                      <button md-fab routerLink=\"../customers/add\"><md-icon>add circle</md-icon></button>\n                  </span>\n             </div>\n           </div>\n          </md-card>\n          <md-card *ngIf=\"checkinForm\">\n            <button md-raised-button class=\"pull-right\" color=\"primary\" (click)=\"backSearchForm()\">BACK</button>\n            <h3>CHECK-IN: Select Lot</h3>\n            <ngb-pagination *ngIf=\"pagination.total_items > 0\"\n              class=\"\"\n              [collectionSize]=\"pagination.total_items\" \n              [(page)]=\"page\" \n              [pageSize]=\"pagination.limit\"\n              [rotate]=\"true\" \n              [ellipses]=\"false\" \n              [boundaryLinks]=\"true\"\n              (pageChange)=\"setPage(page)\">\n            </ngb-pagination>\n            <ngx-datatable\n                class=\"material\"\n                [rows]=\"lots | async\"\n                [headerHeight]=\"50\"\n                [footerHeight]=\"50\"\n                [rowHeight]=\"'auto'\">\n                <ngx-datatable-column name=\"id\" [width]=\"100\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"reference\" [width]=\"100\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"section\" [width]=\"100\">\n                  <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    {{value.name}}\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"available\" [width]=\"100\">\n                  <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    <div [ngClass]=\"{'bg-success': value, 'bg-danger': !value}\" class=\"\">&nbsp;</div>\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"reserved\" [width]=\"100\">\n                  <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    <i class=\"material-icons\" *ngIf=\"value\">accessible</i>\n                    <i class=\"material-icons\" *ngIf=\"!value\">accessibility</i>\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Action\">\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                    <button md-raised-button color=\"accent\" [disabled]=\"!row.available\" (click)=\"selectLot(row)\">SELECT</button>\n                  </ng-template>\n                </ngx-datatable-column>\n              </ngx-datatable>\n          </md-card>\n          \n          <md-card *ngIf=\"rentLotTypeForm\">\n            <button md-raised-button class=\"pull-right\" color=\"accent\" (click)=\"clear()\">CANCEL</button>\n            <button md-raised-button class=\"pull-right\" color=\"primary\" (click)=\"backCheckInForm()\">BACK</button>\n           \n            <h3>CHECK-IN: Select Rent Type</h3>\n            <div class=\"row\">\n               <div class=\"col-md-4\">\n               <div class=\"form-group\">\n                <label for=\"rentLotsTypes\">Rent Type</label>\n                    <select class=\"form-control\"  [(ngModel)]=\"selectedRentLotType\" required>\n                      <option *ngFor=\"let type of rentLotsTypes|async\" [value]=\"type.id\">{{ type.name }}</option>\n                    </select>\n                </div>\n                <button class=\"pull-right\" md-raised-button  color=\"accent\" [disabled]=\"!selectedRentLotType\" (click)=\"selectRentTypeLot()\">Next</button>\n                </div>\n              </div>\n          </md-card>\n\n          <md-card *ngIf=\"showDetail\">\n           <button md-raised-button class=\"pull-right\" color=\"accent\" (click)=\"clear()\">CANCEL</button>\n           <button md-raised-button class=\"pull-right\" color=\"primary\" (click)=\"backCheckInForm()\">BACK</button>\n           <h3>CHECK-IN: Rent Lot Detail</h3>\n            <div class=\"row\">\n               <div class=\"col-md-4\">\n\n                  <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">Rent Detail</div>\n                    <div class=\"panel-body\">\n                      <p>Customer: {{selectedVehicle.customer.firstName}} {{selectedVehicle.customer.lastName}}</p>\n                      <p>PLATE: {{selectedVehicle.plate}}</p>\n                      <p>TYPE: {{selectedVehicle.vehicleType.name}}</p>\n                      <p>BRAND: {{selectedVehicle.brand.name}}</p>\n                      <p>COLOR: <input type=\"color\" value=\"{{selectedVehicle.color}}\" disabled></p>\n                      <p>Rent Type:\n                        <select class=\"form-control\"  [(ngModel)]=\"selectedRentLotType\" disabled>\n                          <option *ngFor=\"let type of rentLotsTypes|async\" [value]=\"type.id\">{{ type.name }}</option>\n                        </select>\n                      </p>\n                      <p>Rent Lot: {{selectedLot.section.name}} - {{selectedLot.reference}}</p>\n                    </div>\n                  </div>\n                  <button md-raised-button class=\"pull-left\" color=\"accent\" (click)=\"clear()\">DISCARD</button>\n                  <button class=\"pull-right\" md-raised-button  color=\"primary\" (click)=\"checkin()\">CONFIRM</button>\n                </div>\n              </div>\n          </md-card>\n        </md-tab>\n        <md-tab  label=\"OUT - VEHICLE\">\n          <md-card *ngIf=\"checkOutSearchForm\" class=\"page-default\">\n          <div class=\"row\">\n             <div class=\"col-md-3\">\n               <h3>Search Vehicle</h3>\n               <div class=\"form-group\">\n                  <div class=\"form-group\">\n                    <input id=\"typeahead-http\" type=\"text\" class=\"form-control\" \n                    [class.is-invalid]=\"searchFailed\"\n                    (ngModelChange)=\"selectItem($event)\"\n                    [(ngModel)]=\"model\" \n                    [ngbTypeahead]=\"search\" \n                    [inputFormatter]=\"formatter\"\n                    [resultFormatter]=\"formatter\"\n                    placeholder=\"AUX\" \n                    />\n                    <span *ngIf=\"searching\">searching...</span>\n                    <div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\n                  </div>\n               </div>\n             </div>\n             <div class=\"col-md-9\">\n             <div class=\"row mt-10\">\n              <ngx-datatable\n                class=\"material\"\n                [rows]=\"vehicle\"\n                [headerHeight]=\"50\"\n                [footerHeight]=\"50\"\n                [rowHeight]=\"'auto'\">\n                <ngx-datatable-column name=\"id\" [width]=\"100\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"customer\" [width]=\"100\">\n                  <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    {{value.firstName}} {{value.lastName}}\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"plate\" [width]=\"100\"></ngx-datatable-column>\n                <ngx-datatable-column name=\"brand\" [width]=\"100\">\n                  <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    {{value.name}}\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"vehicleType\" [width]=\"100\">\n                  <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    {{value.name}}\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Action\">\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                    <button md-raised-button color=\"accent\" (click)=\"showCheckout(row)\">CHECK OUT</button>\n                  </ng-template>\n                </ngx-datatable-column>\n              </ngx-datatable>\n             </div>\n             </div>\n           </div>\n          </md-card>\n\n          <md-card *ngIf=\"checkoutForm\">\n            <button md-raised-button class=\"pull-right\" color=\"accent\" (click)=\"clear()\">CANCEL</button>\n            <button md-raised-button class=\"pull-right\" color=\"primary\" (click)=\"backSearchCheckout()\">BACK</button>\n            <h3>CHECK-OUT: Select RentLot</h3>\n            <ngx-datatable\n                class=\"material\"\n                [rows]=\"rentlots | async\"\n                [headerHeight]=\"50\"\n                [footerHeight]=\"50\"\n                [rowHeight]=\"'auto'\">\n                <ngx-datatable-column name=\"Customer\" prop=\"vehicle\" [width]=\"100\">\n                  <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    {{value.customer.firstName}} {{value.customer.lastName}}\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"vehicle\" [width]=\"100\">\n                  <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    plate: {{value.plate}}, brand: {{value.brand.name}}, type:{{value.vehicleType.name}}\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"lot\" [width]=\"100\">\n                  <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                    {{value.reference}}, {{value.section.name}}\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Action\">\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                    <button md-raised-button color=\"accent\" (click)=\"selectRentLot(row)\">SELECT</button>\n                  </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n          </md-card>\n\n          <md-card *ngIf=\"paymentDetail\">\n            <button md-raised-button class=\"pull-right\" color=\"accent\" (click)=\"clear()\">CANCEL</button>\n            <h3>CHECK-OUT: Payment Detail</h3>\n            <div class=\"row\">\n               <div class=\"col-md-4\">\n                  <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">Payment</div>\n                    <div class=\"panel-body\">\n                      <p><strong>Customer:</strong> {{selectedRentlot.vehicle.customer.firstName}} {{selectedRentlot.vehicle.customer.lastName}}</p>\n                      <p><strong>Plate:</strong> {{selectedRentlot.vehicle.plate}}</p>\n                      <p><strong>Rent Lot:</strong> {{selectedRentlot.lot.section.name}} - {{selectedRentlot.lot.reference}}</p>\n                      <p><strong>Amount: </strong>{{selectedRentlot.payment.currency.symbol}}{{selectedRentlot.payment.amount}}</p>\n                      <p><strong>Rentlot Type:</strong> {{selectedRentlot.rentType.name}}</p>\n                      <p><strong>Status:</strong> {{selectedRentlot.payment.paymentStatus.name}}</p>\n                      <p><strong>Payment Type:</strong> {{selectedRentlot.payment.paymentType.name}}</p>\n                    </div>\n                  </div>\n                  <button md-raised-button class=\"pull-left\" color=\"accent\" (click)=\"clear()\">DISCARD</button>\n                  <button class=\"pull-right\" md-raised-button  color=\"primary\" (click)=\"checkout()\">CONFIRM</button>\n                </div>\n              </div>\n          </md-card>\n        </md-tab>\n        <md-tab  label=\"RENTED\">\n          <md-card *ngIf=\"!selectedRentlot\">\n              <ngx-datatable\n                  class=\"material\"\n                  [columnMode]=\"'flex'\"\n                  [rows]=\"rentlots | async\"\n                  [headerHeight]=\"50\"\n                  [footerHeight]=\"50\"\n                  [rowHeight]=\"'auto'\">\n                  <ngx-datatable-column name=\"Customer\" prop=\"vehicle\" [flexGrow]=\"1\">\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                      {{value.customer.firstName}} {{value.customer.lastName}}\n                    </ng-template>\n                  </ngx-datatable-column>\n                  <ngx-datatable-column name=\"vehicle\" [flexGrow]=\"1\">\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                      plate: {{value.plate}}, brand: {{value.brand.name}}, type:{{value.vehicleType.name}}\n                    </ng-template>\n                  </ngx-datatable-column>\n                  <ngx-datatable-column name=\"lot\" [flexGrow]=\"1\">\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                      {{value.reference}}, {{value.section.name}}\n                    </ng-template>\n                  </ngx-datatable-column>\n                  <ngx-datatable-column name=\"Action\" [flexGrow]=\"1\">\n                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                      <button md-raised-button color=\"accent\" (click)=\"showRentLotDetail(row)\"><i class=\"material-icons\">visibility</i></button>\n                    </ng-template>\n                  </ngx-datatable-column>\n              </ngx-datatable>\n              <ngb-pagination *ngIf=\"paginationRentLot.page_counts > 1\"\n                class=\"\"\n                [collectionSize]=\"paginationRentLot.total_items\" \n                [(page)]=\"page\" \n                [pageSize]=\"paginationRentLot.limit\"\n                [rotate]=\"true\" \n                [ellipses]=\"false\" \n                [boundaryLinks]=\"true\"\n                (pageChange)=\"setPageRentLot(page)\">\n              </ngb-pagination>\n          </md-card>\n          <md-card *ngIf=\"selectedRentlot\">           \n            <div class=\"row\">\n               <div class=\"col-md-6\">\n                  <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading\"><h3>Detail</h3></div>\n                    <div class=\"panel-body\">\n                      <p><strong>Customer:</strong> {{selectedRentlot.vehicle.customer.firstName}} {{selectedRentlot.vehicle.customer.lastName}}</p>\n                      <p><strong>Plate:</strong> {{selectedRentlot.vehicle.plate}}</p>\n                      <p><strong>Rent Lot:</strong> {{selectedRentlot.lot.section.name}} - {{selectedRentlot.lot.reference}}</p>\n                      <p><strong>Start Time:</strong> {{selectedRentlot.startTime | date:'dd-MM-yyyy HH:mm a z'}}</p>\n                      <p><strong>End Time:</strong> {{selectedRentlot.currentTime | date:'dd-MM-yyyy HH:mm a z'}}</p>\n                      <p><strong>Total Time:</strong> {{selectedRentlot.totalHours}}</p>\n                      <p><strong>Amount:</strong> {{selectedRentlot.payment.currency.symbol}}{{selectedRentlot.payment.amount}}</p>\n                      <p><strong>Rentlot Type:</strong> {{selectedRentlot.rentType.name}}</p>\n                      <p><strong>Status:</strong> {{selectedRentlot.payment.paymentStatus.name}}</p>\n                      <p><strong>Payment Type:</strong> {{selectedRentlot.payment.paymentType.name}}</p>\n\n                    </div>\n                  </div>\n                  <button md-raised-button class=\"pull-left\" color=\"accent\" (click)=\"clear()\">BACK</button>\n                </div>\n              </div>\n          </md-card>\n        </md-tab>\n      </md-tab-group>\n  </div>\n</div>"

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">My Profile</h4>\n  <div class=\"card-body\">\n      <div>\n      <span class=\"app-toolbar-filler\"></span>\n      <button md-button></button>\n      </div>\n        <md-spinner *ngIf=\"!showForm\" class=\"app-spinner\"></md-spinner>\n        <div *ngIf=\"showForm\" class=\"col-md-12\">\n             <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <img src=\"../../assets/images/user.jpg\" class=\"img-fluid\" alt=\"...\">\n                </div>\n                <div class=\"col-md-4\">\n                  <label>Please Select an image</label>\n                  <input type=\"file\" id=\"file\" (change)=\"setPhoto($event)\" class=\"form-control-file\">\n                  <button md-raised-button (click)=\"savePhoto($event)\" color=\"primary\" >Save</button>\n                </div>\n              </div>\n           </div>\n        <form *ngIf=\"showForm\" [formGroup]=\"formView\">\n          <!-- form inputs -->\n          <div class=\"row\">\n           <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"firstName\">First Name</label>\n                <input type=\"text\" id=\"firstName\" class=\"form-control\"\n                       formControlName=\"firstName\" required >\n                 <div *ngIf=\"formErrors.firstName\" class=\"alert alert-danger\">\n                  {{ formErrors.firstName }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"lastName\">Last Name</label>\n                <input type=\"text\" id=\"lastName\" class=\"form-control\"\n                       formControlName=\"lastName\" required >\n                 <div *ngIf=\"formErrors.lastName\" class=\"alert alert-danger\">\n                  {{ formErrors.lastName }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" id=\"email\" class=\"form-control\"\n                       formControlName=\"email\" required >\n                 <div *ngIf=\"formErrors.email\" class=\"alert alert-danger\">\n                  {{ formErrors.email }}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"phoneNumber\">Phone</label>\n                <input type=\"text\" id=\"phoneNumber\" class=\"form-control\"\n                       formControlName=\"phoneNumber\" required >\n                 <div *ngIf=\"formErrors.phoneNumber\" class=\"alert alert-danger\">\n                  {{ formErrors.phoneNumber }}\n                  </div>\n              </div>\n           </div>\n\n           <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" id=\"username\" class=\"form-control\"\n                       formControlName=\"username\" disabled >\n              </div>\n              \n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" id=\"password\" class=\"form-control\"\n                       formControlName=\"password\" required >\n                 <div *ngIf=\"formErrors.password\" class=\"alert alert-danger\">\n                  {{ formErrors.password }}\n                  </div>\n              </div>\n            </div>\n            <!-- end form inputs -->\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n               <button class=\"pull-right\" md-raised-button color=\"accent\" [disabled]=\"!formView.valid\" (click)=\"save()\">Save</button>\n               <button class=\"pull-left\" md-raised-button color=\"primary\" (click)=\"back()\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">Average Report</h4>\n  <div class=\"card-body\">\n  <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"filter\">\n  <ngb-panel title=\"Show Filters\"  id=\"filter\">\n    <ng-template  ngbPanelContent>\n      <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n              <label >From</label>\n              <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                       name=\"dpFrom\" [(ngModel)]=\"fromDate\" ngbDatepicker #dpFrom=\"ngbDatepicker\">\n                <button class=\"input-group-addon\" (click)=\"dpFrom.toggle()\" type=\"button\">\n                  <i class=\"material-icons\">date_range</i>\n                </button>\n              </div>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n              <label >To</label>\n              <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                       name=\"dpTo\" [(ngModel)]=\"toDate\" ngbDatepicker #dpTo=\"ngbDatepicker\">\n                <button class=\"input-group-addon\" (click)=\"dpTo.toggle()\" type=\"button\">\n                  <i class=\"material-icons\">date_range</i>\n                </button>\n              </div>\n              </div>\n            </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"form-group\">\n           <button class=\"pull-left\" md-raised-button color=\"primary\" (click)=\"applyFilters()\">Apply</button>\n           <button class=\"pull-left\" md-raised-button color=\"primary\" (click)=\"download()\">Generate Report</button>\n           <a *ngIf=\"reportUrl\" href=\"{{reportUrl}}\" target=\"_blank\">Click Here To download</a>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n    <md-tab-group>\n      <md-tab label=\"Billing\">\n            <div class=\"card bg-light mb-3\" style=\"max-width: 20rem;\">\n              <div class=\"card-header\">Earn Average</div>\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">{{totalAmountAverage | currency:'ARS'}}</h4>\n              </div>\n            </div>\n      </md-tab>\n      <md-tab label=\"Vehicles\">\n        <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Vehicle</th>\n            <th scope=\"col\">Customer</th>\n            <th scope=\"col\">Amount Average</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let vehicle of vehiclesRow\">\n            <th scope=\"row\">{{vehicle.vehicle.id}}</th>\n            <td>{{vehicle.vehicle.plate}}</td>\n            <td>{{vehicle.vehicle.customer.firstName}} {{vehicle.vehicle.customer.lastName}}</td>\n            <td>{{vehicle.amount_average | currency:'ARS'}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <ngb-pagination\n          class=\"\"\n          [collectionSize]=\"vehicles.length\" \n          [(page)]=\"vehiclesPage\" \n          [pageSize]=\"5\"\n          [rotate]=\"true\" \n          [ellipses]=\"false\" \n          [boundaryLinks]=\"true\"\n          (pageChange)=\"setVehiclesPage(vehiclesPage)\">\n      </ngb-pagination>\n      </md-tab>\n      <md-tab label=\"Rented Lots\">\n        <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Lot</th>\n            <th scope=\"col\">Section</th>\n            <th scope=\"col\">Reserved</th>\n            <th scope=\"col\">Amount Average</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let lot of lotsRow\">\n            <th scope=\"row\">{{lot.lot.id}}</th>\n            <td>{{lot.lot.reference}}</td>\n            <td>{{lot.lot.section.name}}</td>\n            <td>\n              <i class=\"material-icons\" *ngIf=\"lot.lot.reserved\">accessible</i>\n              <i class=\"material-icons\" *ngIf=\"!lot.lot.reserved\">accessibility</i>\n            </td>\n            <td>{{lot.amount_average | currency:'ARS'}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <ngb-pagination\n          class=\"\"\n          [collectionSize]=\"lots.length\" \n          [(page)]=\"lotsPage\" \n          [pageSize]=\"5\"\n          [rotate]=\"true\" \n          [ellipses]=\"false\" \n          [boundaryLinks]=\"true\"\n          (pageChange)=\"setLotsPage(lotsPage)\">\n      </ngb-pagination>\n      </md-tab>\n    </md-tab-group>\n    <div class=\"row\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">Billing Reports</h4>\n  <div class=\"card-body\">\n  <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"filter\">\n  <ngb-panel title=\"Show Filters\"  id=\"filter\">\n    <ng-template ngbPanelContent>\n      <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n              <label >From</label>\n              <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                       name=\"dpFrom\" [(ngModel)]=\"fromDate\" ngbDatepicker #dpFrom=\"ngbDatepicker\">\n                <button class=\"input-group-addon\" (click)=\"dpFrom.toggle()\" type=\"button\">\n                  <i class=\"material-icons\">date_range</i>\n                </button>\n              </div>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n              <label >To</label>\n              <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                       name=\"dpTo\" [(ngModel)]=\"toDate\" ngbDatepicker #dpTo=\"ngbDatepicker\">\n                <button class=\"input-group-addon\" (click)=\"dpTo.toggle()\" type=\"button\">\n                  <i class=\"material-icons\">date_range</i>\n                </button>\n              </div>\n              </div>\n            </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"form-group\">\n           <button class=\"pull-left\" md-raised-button color=\"primary\" (click)=\"applyFilters()\">Apply</button>\n           <button class=\"pull-left\" md-raised-button color=\"primary\" (click)=\"download()\">Generate Report</button>\n           <a *ngIf=\"reportUrl\" href=\"{{reportUrl}}\" target=\"_blank\">Click Here To download</a>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n    <md-tab-group>\n      <md-tab label=\"Billing\">\n            <div class=\"card bg-light mb-3\" style=\"max-width: 20rem;\">\n              <div class=\"card-header\">Total Earn</div>\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">{{this.vehicles.total_vehicles_amount | currency:'ARS'}}</h4>\n              </div>\n            </div>\n            <div class=\"card bg-light mb-3\" style=\"max-width: 20rem;\">\n              <div class=\"card-header\">Vehicles</div>\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">{{this.vehicles.total_vehicles}}</h4>\n              </div>\n            </div>\n            <div class=\"card bg-light mb-3\" style=\"max-width: 20rem;\">\n              <div class=\"card-header\">Unique Vehicles</div>\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">{{this.vehicles.total_vehicles_distinct}}</h4>\n              </div>\n            </div>\n      </md-tab>\n      <md-tab label=\"Vehicles\">\n        <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Vehicle</th>\n            <th scope=\"col\">Customer</th>\n            <th scope=\"col\">Rented Times</th>\n            <th scope=\"col\">Total Amount</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let vehicle of vehiclesRow\">\n            <th scope=\"row\">{{vehicle.vehicle.id}}</th>\n            <td>{{vehicle.vehicle.plate}}</td>\n            <td>{{vehicle.vehicle.customer.firstName}} {{vehicle.vehicle.customer.lastName}}</td>\n            <td>\n              {{vehicle.rent_times}}\n            </td>\n            <td>{{vehicle.total_amount | currency:'ARS'}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <ngb-pagination\n          class=\"\"\n          [collectionSize]=\"vehicles.total_items\" \n          [(page)]=\"vehiclesPage\" \n          [pageSize]=\"5\"\n          [rotate]=\"true\" \n          [ellipses]=\"false\" \n          [boundaryLinks]=\"true\"\n          (pageChange)=\"setVehiclesPage(vehiclesPage)\">\n      </ngb-pagination>\n      </md-tab>\n    </md-tab-group>\n    <div class=\"row\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">Lots Reports</h4>\n  <div class=\"card-body\">\n  <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"filter\">\n  <ngb-panel title=\"Show Filters\"  id=\"filter\">\n    <ng-template ngbPanelContent>\n      <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n              <md-checkbox [(ngModel)]=\"reservedLots\">Show only Reserverd Lots</md-checkbox>\n              </div>\n              <div class=\"form-group\">\n              <md-checkbox [(ngModel)]=\"showAll\">Show All</md-checkbox>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n              <label >From</label>\n              <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                       name=\"dpFrom\" [(ngModel)]=\"fromDate\" ngbDatepicker #dpFrom=\"ngbDatepicker\">\n                <button class=\"input-group-addon\" (click)=\"dpFrom.toggle()\" type=\"button\">\n                  <i class=\"material-icons\">date_range</i>\n                </button>\n              </div>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n              <label >To</label>\n              <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                       name=\"dpTo\" [(ngModel)]=\"toDate\" ngbDatepicker #dpTo=\"ngbDatepicker\">\n                <button class=\"input-group-addon\" (click)=\"dpTo.toggle()\" type=\"button\">\n                  <i class=\"material-icons\">date_range</i>\n                </button>\n              </div>\n              </div>\n            </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"form-group\">\n           <button class=\"pull-left\" md-raised-button color=\"primary\" (click)=\"applyFilters()\">Apply</button>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n   \n    <md-tab-group>\n      <md-tab label=\"Rented Lots\">\n        <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Lot</th>\n            <th scope=\"col\">Section</th>\n            <th scope=\"col\">Reserved</th>\n            <th scope=\"col\">Total Times Rented</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let lot of lotsRow\">\n            <th scope=\"row\">{{lot.lot.id}}</th>\n            <td>{{lot.lot.reference}}</td>\n            <td>{{lot.lot.section.name}}</td>\n            <td>\n              <i class=\"material-icons\" *ngIf=\"lot.lot.reserved\">accessible</i>\n              <i class=\"material-icons\" *ngIf=\"!lot.lot.reserved\">accessibility</i>\n            </td>\n            <td>{{lot.total_rented}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <ngb-pagination\n          class=\"\"\n          [collectionSize]=\"lots.total_items\" \n          [(page)]=\"lotsPage\" \n          [pageSize]=\"5\"\n          [rotate]=\"true\" \n          [ellipses]=\"false\" \n          [boundaryLinks]=\"true\"\n          (pageChange)=\"setLotsPage(lotsPage)\">\n      </ngb-pagination>\n      </md-tab>\n      <md-tab label=\"Unused Lots\">\n          <table class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">Lot</th>\n              <th scope=\"col\">Section</th>\n              <th scope=\"col\">Reserved</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let lot of unusedLotsRow\">\n              <th scope=\"row\">{{lot.id}}</th>\n              <td>{{lot.reference}}</td>\n              <td>{{lot.section.name}}</td>\n              <td>\n                <i class=\"material-icons\" *ngIf=\"lot.reserved\">accessible</i>\n                <i class=\"material-icons\" *ngIf=\"!lot.reserved\">accessibility</i>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <ngb-pagination\n            class=\"\"\n            [collectionSize]=\"unusedLots.total_items\" \n            [(page)]=\"unusedLotsPage\" \n            [pageSize]=\"5\"\n            [rotate]=\"true\" \n            [ellipses]=\"false\" \n            [boundaryLinks]=\"true\"\n            (pageChange)=\"setUnusedLotsPage(unusedLotsPage)\">\n        </ngb-pagination>\n      </md-tab>\n    </md-tab-group>\n    <div class=\"row\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">Reports</h4>\n  <div class=\"card-body\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card\" style=\"width: 20rem;\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Lots</h4>\n              <a routerLink=\"/admin/reports/lots\" class=\"card-link\">View</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card\" style=\"width: 20rem;\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Billing</h4>\n              <a routerLink=\"/admin/reports/billing\" class=\"card-link\">View</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card\" style=\"width: 20rem;\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Average</h4>\n              <a routerLink=\"/admin/reports/average\" class=\"card-link\">View</a>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">Audit</h4>\n  <div class=\"card-body\">\n    <div *ngIf=\"!audit\">\n        <ngx-datatable\n            class=\"material\"\n            [rows]=\" userAudits | async \"\n            [columnMode]=\"'force'\"\n            [headerHeight]=\"50\"\n            [footerHeight]=\"50\"\n            [rowHeight]=\"'auto'\">\n            <ngx-datatable-column name=\"id\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"User\" >\n              <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                {{value.username}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"action\" >\n              <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                {{value}}\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Action\" >\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                <button md-raised-button color=\"accent\" (click)=\"showDetail(row)\"><i class=\"material-icons\">visibility</i></button>\n              </ng-template>\n            </ngx-datatable-column>\n          </ngx-datatable>\n          <ngb-pagination \n            class=\"\"\n            [collectionSize]=\"pagination.total_items\" \n            [(page)]=\"page\" \n            [pageSize]=\"pagination.limit\"\n            [maxSize] = \"5\"\n            [rotate]=\"true\" \n            [boundaryLinks]=\"true\"\n            (pageChange)=\"setPage(page)\">\n          </ngb-pagination>\n      </div>\n      \n      <md-card *ngIf=\"audit\">\n      <h2>Detail</h2>\n      <div>\n        <br>\n        <p class=\"text-md-left\"><strong>Action:</strong> {{audit.action}}</p>\n        <p class=\"text-md-left\"><strong>Time:</strong> {{audit.createdAt.date | date:'dd-MM-yyyy HH:mm a z'}}</p>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <strong>Payload: </strong>\n            <pre>\n            {{audit.meta | json}}\n            </pre>\n          </div>\n        </div>\n          <button md-raised-button color=\"primary\" (click)=\"back()\">Back</button>\n      </div>\n      </md-card>\n  </div>\n</div>"

/***/ }),

/***/ 499:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">Users</h4>\n  <div class=\"card-body\">\n    <ngx-datatable\n        class=\"material\"\n        [rows]=\"users | async\"\n        [columnMode]=\"'force'\"\n        [headerHeight]=\"50\"\n        [footerHeight]=\"50\"\n        [rowHeight]=\"'auto'\">\n        <ngx-datatable-column name=\"FirstName\">\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"LastName\">\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Email\">\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"UserGroups\">\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            {{value['0']['name']}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"LockUser\">\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Action\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            <button md-raised-button color=\"accent\" (click)=\"edit(row['id'])\"><i class=\"material-icons\">mode_edit</i></button>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n      <span class=\"app-action\">\n          <button md-fab (click)=\"add()\"><md-icon>add circle</md-icon></button>\n      </span>\n   </div>\n</div>"

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(commonService) {
        this.commonService = commonService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrlBase + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiPaths.user;
        this.dataStore = { users: [] };
        this._users = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.users = this._users.asObservable();
    }
    UserService.prototype.getList = function (params) {
        var _this = this;
        if (params === void 0) { params = { offset: 0, limit: 20, orderby: null, where: null }; }
        var url = this.baseUrl + '/all/';
        this.commonService.get(url, params)
            .subscribe(function (data) {
            _this.dataStore.users = data.items;
            _this._users.next(Object.assign({}, _this.dataStore).users);
        }, function (error) { return console.log('Could not load Users.'); }, function () { return console.log("done"); });
    };
    UserService.prototype.get = function (id) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.get(url);
    };
    UserService.prototype.create = function (data) {
        var url = this.baseUrl;
        return this.commonService.post(url, data);
    };
    UserService.prototype.update = function (id, data) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.put(url, data);
    };
    UserService.prototype.upload = function (id, file) {
        var url = this.baseUrl + '/' + id;
        var fileToUpload = new FormData();
        console.log(file);
        fileToUpload.append("file", file);
        this.commonService.uploadFile(url, fileToUpload);
    };
    UserService.prototype.delete = function (id) { };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 500:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content\"><div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 501:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\n  <md-sidenav #sidenav mode=\"side\" class=\"app-sidenav\">\n    Sidenav\n  </md-sidenav>\n\n  <md-toolbar color=\"primary\">\n    <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\n      <i class=\"material-icons app-toolbar-menu\">menu</i>\n    </button>\n\n    Angular Material2 Example App\n\n    <span class=\"app-toolbar-filler\"></span>\n    <button md-button (click)=\"isDarkTheme = !isDarkTheme\">TOGGLE DARK THEME</button>\n  </md-toolbar>\n\n  <div class=\"app-content\">\n\n    <md-card>\n      <button md-button>FLAT</button>\n      <button md-raised-button md-tooltip=\"This is a tooltip!\">RAISED</button>\n      <button md-raised-button color=\"primary\">PRIMARY RAISED</button>\n      <button md-raised-button color=\"accent\">ACCENT RAISED</button>\n    </md-card>\n\n    <md-card>\n      <md-checkbox>Unchecked</md-checkbox>\n      <md-checkbox [checked]=\"true\">Checked</md-checkbox>\n      <md-checkbox [indeterminate]=\"true\">Indeterminate</md-checkbox>\n      <md-checkbox [disabled]=\"true\">Disabled</md-checkbox>\n    </md-card>\n\n    <md-card>\n      <md-radio-button name=\"symbol\">Alpha</md-radio-button>\n      <md-radio-button name=\"symbol\">Beta</md-radio-button>\n      <md-radio-button name=\"symbol\" disabled>Gamma</md-radio-button>\n    </md-card>\n\n    <md-card class=\"app-input-section\">\n\n    </md-card>\n\n    <md-card>\n      <md-list class=\"app-list\">\n        <md-list-item *ngFor=\"let food of foods\">\n          <h3 md-line>{{food.name}}</h3>\n          <p md-line class=\"demo-secondary-text\">{{food.rating}}</p>\n        </md-list-item>\n      </md-list>\n    </md-card>\n\n    <md-card>\n      <md-spinner class=\"app-spinner\"></md-spinner>\n      <md-spinner color=\"accent\" class=\"app-spinner\"></md-spinner>\n    </md-card>\n\n    <md-card>\n      <label>\n        Indeterminate progress-bar\n        <md-progress-bar\n            class=\"app-progress\"\n            mode=\"indeterminate\"\n            aria-label=\"Indeterminate progress-bar example\"></md-progress-bar>\n      </label>\n\n      <label>\n        Determinate progress bar - {{progress}}%\n        <md-progress-bar\n            class=\"app-progress\"\n            color=\"accent\"\n            mode=\"determinate\"\n            [value]=\"progress\"\n            aria-label=\"Determinate progress-bar example\"></md-progress-bar>\n      </label>\n    </md-card>\n\n    <md-card>\n      <md-tab-group>\n        <md-tab label=\"Earth\">\n          <p>EARTH</p>\n        </md-tab>\n        <md-tab label=\"Fire\">\n          <p>FIRE</p>\n        </md-tab>\n      </md-tab-group>\n    </md-card>\n\n    <md-card>\n      <md-icon>build</md-icon>\n    </md-card>\n\n    <md-card>\n      <button md-button [md-menu-trigger-for]=\"menu\">\n        MENU\n      </button>\n    </md-card>\n\n    <md-menu #menu=\"mdMenu\">\n      <button md-menu-item>Lemon</button>\n      <button md-menu-item>Lime</button>\n      <button md-menu-item>Banana</button>\n    </md-menu>\n\n    <md-card>\n      <button md-raised-button (click)=\"showSnackbar()\">SNACKBAR</button>\n    </md-card>\n\n  </div>\n\n</md-sidenav-container>\n\n<span class=\"app-action\">\n  <button md-fab><md-icon>check circle</md-icon></button>\n</span>"

/***/ }),

/***/ 502:
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n<md-card class=\"\">\n  <p *ngIf=\"showError\">\n    <ngb-alert [dismissible]=\"false\">\n      <strong>Warning!</strong> Invalid Username or Password.\n    </ngb-alert>\n  </p>\n  <img src=\"../assets/images/icon-parking.png\">\n  <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n  <md-input-container>\n    <input mdInput placeholder=\"Username\"  [(ngModel)]=\"user.username\" name=\"username\"  #loginForm=\"ngModel\">\n  </md-input-container>\n  \n  <p>\n    <md-input-container>\n      <input mdInput placeholder=\"Password\" [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" #loginForm=\"ngModel\">\n    </md-input-container>\n  </p>\n <button md-raised-button type=\"submit\">Login</button>\n </form>\n\n</md-card>\n</div>\n"

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_pagination__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VehicleService = (function () {
    function VehicleService(commonService) {
        this.commonService = commonService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrlBase + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiPaths.vehicle;
        this.dataStore = { vehicles: [], pagination: new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* Pagination */]() };
        this._vehicles = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this._pagination = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* Pagination */]());
        this.vehicles = this._vehicles.asObservable();
        this.pagination = this._pagination.asObservable();
    }
    VehicleService.prototype.getList = function (params) {
        var _this = this;
        if (params === void 0) { params = { offset: 0, limit: 20, orderby: null, where: null }; }
        var url = this.baseUrl + '/all/';
        this.commonService.get(url, params)
            .subscribe(function (data) {
            _this.dataStore.vehicles = data.items;
            _this.dataStore.pagination = data.pagination;
            _this._vehicles.next(Object.assign({}, _this.dataStore).vehicles);
            _this._pagination.next(Object.assign({}, _this.dataStore).pagination);
        }, function (error) { return console.log('Could not load Vehicles.'); }, function () { return console.log("done"); });
    };
    VehicleService.prototype.search = function (params) {
        if (params === void 0) { params = { offset: 0, limit: 20, orderby: null, where: null }; }
        var url = this.baseUrl + '/all/';
        return this.commonService.get(url, params);
    };
    VehicleService.prototype.get = function (id) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.get(url);
    };
    VehicleService.prototype.create = function (data) {
        var url = this.baseUrl;
        return this.commonService.post(url, data);
    };
    VehicleService.prototype.update = function (id, data) {
        var url = this.baseUrl + '/' + id;
        return this.commonService.put(url, data);
    };
    VehicleService.prototype.delete = function (id) { };
    return VehicleService;
}());
VehicleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], VehicleService);

var _a;
//# sourceMappingURL=vehicle.service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pagination; });
var Pagination = (function () {
    function Pagination() {
        this.after = 0;
        this.next = 0;
        this.offset = 0;
        this.page = 0;
        this.page_counts = 0;
        this.total_items = 0;
        this.limit = 10;
    }
    return Pagination;
}());

//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(386);


/***/ })

},[762]);
//# sourceMappingURL=main.bundle.js.map