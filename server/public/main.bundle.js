webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, material_1.MatToolbarModule, material_1.MatButtonModule, material_1.MatInputModule, material_1.MatListModule, material_1.MatMenuModule,
                material_1.MatSidenavModule, animations_1.BrowserAnimationsModule
            ],
            exports: [
                common_1.CommonModule, material_1.MatToolbarModule, material_1.MatButtonModule, material_1.MatInputModule, material_1.MatListModule, material_1.MatMenuModule,
                material_1.MatSidenavModule, animations_1.BrowserAnimationsModule
            ],
            declarations: []
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var landing_component_1 = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
var sign_up_component_1 = __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
var account_component_1 = __webpack_require__("../../../../../src/app/components/account/account.component.ts");
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var connect_component_1 = __webpack_require__("../../../../../src/app/components/connect/connect.component.ts");
var user_page_component_1 = __webpack_require__("../../../../../src/app/components/user-page/user-page.component.ts");
var app_page_component_1 = __webpack_require__("../../../../../src/app/components/app-page/app-page.component.ts");
var routes = [
    { path: '', component: landing_component_1.LandingComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signUp', component: sign_up_component_1.SignUpComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: 'user', component: user_page_component_1.UserPageComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: 'app', component: app_page_component_1.AppPageComponent, canActivate: [auth_guard_service_1.AuthGuardService] }
];
var userRoutes = [
    { path: 'user', component: user_page_component_1.UserPageComponent, canActivate: [auth_guard_service_1.AuthGuardService], children: [
            { path: 'profile', component: profile_component_1.ProfileComponent },
            { path: 'account', component: account_component_1.AccountComponent },
            { path: 'connect', component: connect_component_1.ConnectComponent },
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forRoot(routes),
                router_1.RouterModule.forChild(userRoutes)
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: [
                auth_guard_service_1.AuthGuardService
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n    -webkit-box-flex: 1;\r\n\r\n        -ms-flex-positive: 1;\r\n\r\n            flex-grow: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>\n<app-footer *ngIf=\"router.url !=='/signUp' && router.url!=='/login'\"></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var landing_component_1 = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
var sign_up_component_1 = __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_material_module_1 = __webpack_require__("../../../../../src/app/app-material.module.ts");
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
var navigation_bar_component_1 = __webpack_require__("../../../../../src/app/components/navigation-bar/navigation-bar.component.ts");
var account_component_1 = __webpack_require__("../../../../../src/app/components/account/account.component.ts");
var connect_component_1 = __webpack_require__("../../../../../src/app/components/connect/connect.component.ts");
var user_page_component_1 = __webpack_require__("../../../../../src/app/components/user-page/user-page.component.ts");
var user_side_menu_component_1 = __webpack_require__("../../../../../src/app/components/user-side-menu/user-side-menu.component.ts");
var info_box_1_component_1 = __webpack_require__("../../../../../src/app/components/information-boxes/info-box-1/info-box-1.component.ts");
var info_box_2_component_1 = __webpack_require__("../../../../../src/app/components/information-boxes/info-box-2/info-box-2.component.ts");
var footer_component_1 = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var app_page_component_1 = __webpack_require__("../../../../../src/app/components/app-page/app-page.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                landing_component_1.LandingComponent,
                login_component_1.LoginComponent,
                sign_up_component_1.SignUpComponent,
                profile_component_1.ProfileComponent,
                navigation_bar_component_1.NavigationBarComponent,
                account_component_1.AccountComponent,
                connect_component_1.ConnectComponent,
                user_page_component_1.UserPageComponent,
                user_side_menu_component_1.UserSideMenuComponent,
                info_box_1_component_1.InfoBox1Component,
                info_box_2_component_1.InfoBox2Component,
                footer_component_1.FooterComponent,
                app_page_component_1.AppPageComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                material_1.MatMenuModule,
                material_1.MatButtonModule,
                app_routing_module_1.AppRoutingModule,
                app_material_module_1.AppMaterialModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule
            ],
            providers: [
                authentication_service_1.AuthenticationService,
                auth_guard_service_1.AuthGuardService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/components/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h4, label {\r\n    color: #606060;\r\n    font-weight: normal;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput {\r\n    color: #aaaaaa;\r\n    height: 45px;\r\n\r\n    padding-left: 10px; \r\n    border-style: solid;\r\n    border-color: rgb(209, 209, 209);\r\n    border-width: 1px;\r\n    border-radius: 8px;\r\n}\r\n\r\n.form-group {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n\r\n    width: 640px;\r\n}\r\n\r\n.form-group-item {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.form-group-button {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end\r\n}\r\n\r\n.save-btn {\r\n    background-color: #8783d1;\r\n    width: 100px;\r\n    height: 55px;\r\n    border-style: none;\r\n    color: #ffffff;\r\n    font-size: 15px;\r\n    border-radius: 2px;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Account</h1>\n<h4>Edit relevant account settings here</h4>\n\n<div class=\"form-group\">\n  <form (submit)=\"updateAccount()\">\n    <div class=\"form-group-item\">\n      <label for=\"email\">Email Address</label>\n      <input type=\"email\" name=\"email\" value=\"{{ accountDetails?.email }}\">\n    </div>\n    <div class=\"form-group-item\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"accountDetails.password\">\n    </div>\n    <div class=\"form-group-item\">\n      <label for=\"confirm-password\">Confirm Password</label>\n      <input type=\"password\" name=\"confirm-password\" [(ngModel)]=\"accountDetails.confirm-password\">\n    </div>\n    <div class=\"form-group-button\">\n      <button mat-button class=\"save-btn\" type=\"submit\">Save</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var AccountComponent = /** @class */ (function () {
    function AccountComponent(auth) {
        this.auth = auth;
        this.accountDetails = {
            email: '',
            password: '',
            confirm_password: ''
        };
    }
    AccountComponent.prototype.updateAccount = function () {
        this.auth.updateAccount(this.accountDetails).subscribe(function () {
            (function (error) {
                console.error(error);
            });
        });
    };
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.account().subscribe(function (user) {
            _this.accountDetails = user;
            console.log(_this.accountDetails);
        }, function (error) {
            console.error(error);
        });
    };
    AccountComponent = __decorate([
        core_1.Component({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/components/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;


/***/ }),

/***/ "../../../../../src/app/components/app-page/app-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app-page/app-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  app-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/app-page/app-page.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppPageComponent = /** @class */ (function () {
    function AppPageComponent() {
    }
    AppPageComponent.prototype.ngOnInit = function () {
    };
    AppPageComponent = __decorate([
        core_1.Component({
            selector: 'app-app-page',
            template: __webpack_require__("../../../../../src/app/components/app-page/app-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/app-page/app-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppPageComponent);
    return AppPageComponent;
}());
exports.AppPageComponent = AppPageComponent;


/***/ }),

/***/ "../../../../../src/app/components/connect/connect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h4, label {\r\n    color: #606060;\r\n    font-weight: normal;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.trello-connect-btn {\r\n    background-color: #4bb3fd; \r\n    color: #ffffff;\r\n    height: 45px;\r\n\r\n    padding-left: 10px; \r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.form-group {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n\r\n    width: 640px;\r\n}\r\n\r\n.form-group-item {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.form-group-button {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end\r\n}\r\n\r\n.save-btn {\r\n    background-color: #8783d1;\r\n    width: 100px;\r\n    height: 55px;\r\n    border-style: none;\r\n    color: #ffffff;\r\n    font-size: 15px;\r\n    border-radius: 2px;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/connect/connect.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Connect</h1>\n<h4>Link accounts to your profile</h4>\n\n<div class=\"form-group\">\n  <form>\n    <div class=\"form-group-item\">\n      <label for=\"trello-connect\">Trello</label>\n      <button *ngIf=\"!trello_connected\" mat-button class=\"trello-connect-btn\" name=\"trello-connect\" type=\"button\" (click)=\"updateConnect()\">Connect your Trello account</button>\n      <button *ngIf=\"trello_connected\" mat-button class=\"trello-connect-btn\" name=\"trello-connect\" type=\"button\" (click)=\"updateConnect()\">Disconnect your Trello account</button>\n    </div>\n    <div class=\"form-group-button\">\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/connect/connect.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var ConnectComponent = /** @class */ (function () {
    function ConnectComponent(auth) {
        this.auth = auth;
        this.key = '23c1ef3047d637837afdb5ffa4f50187';
        this.name = 'Intrelligence';
        this.expiration = '1day';
        this.response_type = 'token';
        this.return_url = 'http://localhost:8080/user/connect';
        this.authorize = 'https://trello.com/1/authorize?';
        this.auth_url = '';
    }
    ConnectComponent.prototype.passToken = function (token) {
        var _this = this;
        this.auth.connectTrelloAccount(token).subscribe(function (user) {
            _this.trello_connected = user.trello_connected;
        });
    };
    ConnectComponent.prototype.updateConnect = function () {
        this.auth_url = this.authorize + 'expiration=' + this.expiration +
            '&name=' + this.name +
            '&response_type=' + this.response_type +
            '&key=' + this.key +
            '&return_url=' + this.return_url;
        window.location.href = this.auth_url;
    };
    ConnectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.connect().subscribe(function (user) {
            _this.trello_connected = user.trello_connected;
        }, function (error) {
            console.log(error);
        });
        if (window.location.hash) {
            // Extract fragment from the redirect URL
            var token = window.location.hash.substring(1);
            // Extract token value from the fragment
            token = token.substring(token.indexOf('=') + 1);
            // Clear out fragments in URL
            window.location.hash = '';
            // Send token for passing to server
            this.passToken(token);
        }
    };
    ConnectComponent = __decorate([
        core_1.Component({
            selector: 'app-connect',
            template: __webpack_require__("../../../../../src/app/components/connect/connect.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/connect/connect.component.css")]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
    ], ConnectComponent);
    return ConnectComponent;
}());
exports.ConnectComponent = ConnectComponent;


/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    font-family: \"Baloo Paaji\";\r\n    color: #ff89c6;\r\n}\r\n\r\np {\r\n    color: #606060;\r\n}\r\n\r\nh1, p {\r\n    margin: 0;\r\n}\r\n\r\nbutton {\r\n    height: 50px;\r\n    width: 150px;\r\n    border-radius: 4px;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n.container {\r\n    min-height: 300px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding-top: 30px;\r\n    padding-left: 60px;\r\n    padding-right: 100px;\r\n}\r\n\r\n.horizontal-box {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    margin-left: 100px;\r\n}\r\n\r\n.info-list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    margin: 0 auto;\r\n}\r\n\r\n.lower-list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.sign-up-btn {\r\n    color: #ffffff;\r\n    background-color: #72bb53;\r\n    border-style: none;\r\n}\r\n\r\n.login-btn {\r\n    color: #72bb53;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: #72bb53;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.li-header {\r\n    color: #ff89c6;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.li-item {\r\n    color: #606060;\r\n    font-size: 17px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.subheading {\r\n    margin-bottom: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"horizontal-box\">\n    <div class=\"info\">\n      <h1>Intrelligence</h1>\n      <p class=\"subheading\">Insights and perspective, digitzed</p>\n      <button *ngIf=\"!auth.isLoggedIn()\" mat-button class=\"sign-up-btn\" routerLink=\"/signUp\">Sign up today, free</button>\n      <button *ngIf=\"!auth.isLoggedIn()\" mat-button class=\"login-btn\" routerLink=\"/login\">Log In</button>\n    </div>\n    <div class=\"info-list\">\n      <ul>\n        <li class=\"li-header\">Intrelligence</li>\n        <li class=\"li-item\">About</li>\n        <li class=\"li-item\">Contact</li>\n      </ul>\n    </div>\n    <ul class=\"lower-list\">\n      <li class=\"li-item\">Privacy</li>\n      <li class=\"li-item\">Terms</li>\n    </ul>\n    <p>© Zerochass, LLC. All rights reserved.</p>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(auth) {
        this.auth = auth;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "../../../../../src/app/components/information-boxes/info-box-1/info-box-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, p {\r\n    color: #ffffff;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n\r\n.container {\r\n    background-color: #00c8f8;\r\n    min-height: 300px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding-top: 30px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/information-boxes/info-box-1/info-box-1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"info\">\n    <h1>Insights, at a glance</h1>\n    <p>Dive into your data. Get intelligent reporting on your projects and stay ahead.</p>\n    <p>Intrelligence makes it easy and simple to understand where you're at, where you're going,</p>\n    <p>and most importantly, help you get there faster</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/information-boxes/info-box-1/info-box-1.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var InfoBox1Component = /** @class */ (function () {
    function InfoBox1Component() {
    }
    InfoBox1Component.prototype.ngOnInit = function () {
    };
    InfoBox1Component = __decorate([
        core_1.Component({
            selector: 'app-info-box-1',
            template: __webpack_require__("../../../../../src/app/components/information-boxes/info-box-1/info-box-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/information-boxes/info-box-1/info-box-1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoBox1Component);
    return InfoBox1Component;
}());
exports.InfoBox1Component = InfoBox1Component;


/***/ }),

/***/ "../../../../../src/app/components/information-boxes/info-box-2/info-box-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, p {\r\n    color: #ffffff;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n\r\n.container {\r\n    background-color: #9c29b7;\r\n    min-height: 300px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding-top: 30px;\r\n    padding-left: 60px;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/information-boxes/info-box-2/info-box-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"info\">\n    <h1>Collaboration, built-in</h1>\n    <p>Suitable for teams, both small and large, looking to maximize their productivity.</p>\n    <p>Intrelligence adds a level of insight to keep your organization nimble and on track.</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/information-boxes/info-box-2/info-box-2.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var InfoBox2Component = /** @class */ (function () {
    function InfoBox2Component() {
    }
    InfoBox2Component.prototype.ngOnInit = function () {
    };
    InfoBox2Component = __decorate([
        core_1.Component({
            selector: 'app-info-box-2',
            template: __webpack_require__("../../../../../src/app/components/information-boxes/info-box-2/info-box-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/information-boxes/info-box-2/info-box-2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoBox2Component);
    return InfoBox2Component;
}());
exports.InfoBox2Component = InfoBox2Component;


/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    \r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n}\r\n\r\n.bg {\r\n    width: 100%;\r\n    min-height: 700px;\r\n}\r\n\r\n.container { \r\n}\r\n\r\n.content-section {\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    z-index: 2;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n\r\n}\r\n\r\n.image-text-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n    height: 750px;\r\n    position: relative;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.mat-button {\r\n    color: #ffffff;\r\n    border-radius: 6px;\r\n    height: 40px;\r\n}\r\n\r\n.logo-text {\r\n    font-family: 'Baloo Paaji';\r\n    color: #ff89c6;\r\n    font-size: 35px;\r\n}\r\n\r\n.logo-large {\r\n    font-size: 70px;\r\n}\r\n\r\n.login-btn {\r\n    background-color: #ff4aac;\r\n}\r\n\r\n.row {\r\n    background: rgb(125,125,125,0.75);\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 1;\r\n    position: absolute;\r\n    overflow: hidden;\r\n}\r\n\r\n.sign-up-btn, .sign-up-btn-big {\r\n    background-color: #72bb53;\r\n}\r\n\r\n.sign-up-btn-big {\r\n    height: 60px;\r\n    width: 250px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    margin-top: 30px;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navigation-bar></app-navigation-bar>\n  <div class=\"image-text-container\">\n    <div class=\"content-section\">\n      <h1>The new way to get a headstart on your productivity</h1>\n      <h1 class=\"logo-text logo-large\">Intrelligence</h1>\n      <h1>helps you do more, be more, and achieve more</h1>\n      <button mat-button class=\"sign-up-btn-big\" routerLink=\"/signUp\">Sign up today</button>\n    </div>\n    <img class=\"bg\" src=\"./../../../assets/big-image.jpg\">\n    <div class=\"row\"></div>\n  </div>\n  <app-info-box-1></app-info-box-1>\n  <app-info-box-2></app-info-box-2>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var LandingComponent = /** @class */ (function () {
    function LandingComponent(auth) {
        this.auth = auth;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.Login = function () {
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'app-landing-component',
            template: __webpack_require__("../../../../../src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;


/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    color: #232323;\r\n    font-weight: normal;\r\n}\r\n\r\nh1, p {\r\n    margin: 0px;\r\n}\r\n\r\nh3 {\r\n    color: #ff89c6;\r\n}\r\n\r\nlabel {\r\n    color: #444444;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput {\r\n    color: #aaaaaa;\r\n    height: 45px;\r\n\r\n    padding-left: 10px; \r\n    border-style: solid;\r\n    border-color: rgb(209, 209, 209);\r\n    border-width: 1px;\r\n    border-radius: 8px;\r\n}\r\n\r\na {\r\n    color: #00c8f8;\r\n}\r\n\r\n.container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n\r\n    -ms-flex-line-pack: center;\r\n\r\n        align-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n\r\n    padding-top: 80px;\r\n}\r\n\r\n.form-group {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n\r\n    width: 440px;\r\n}\r\n\r\n.form-group-item {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.login-btn {\r\n    background-color: #72bb53;\r\n    width: 440px;\r\n    height: 55px;\r\n    border-style: none;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    border-radius: 2px;\r\n    \r\n}\r\n\r\n.subheading {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Log in to Intrelligence</h1>\n  <div class=\"subheading\">\n    <p>or\n      <a routerLink=\"/signUp\">create a new account</a>\n    </p>\n  </div>\n  <h3>Welcome back, productive ol' you</h3>\n  <div class=\"form-group\">\n    <form (submit)=\"login()\">\n      <div class=\"form-group-item\">\n        <label for=\"email\">Email address</label>\n        <input type=\"email\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n      </div>\n      <div class=\"form-group-item\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n      </div>\n      <div class=\"form-group-button\">\n        <button mat-button class=\"login-btn\" type=\"submit\">Log in</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/user/profile');
        }, function (error) {
            console.error(error);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/components/navigation-bar/navigation-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n    background-color: #ffc6e3;\r\n    padding: 0;\r\n    padding-left: 60px;\r\n    height: 75px;\r\n}\r\n\r\n.navbar-section-right {\r\n    float: right;\r\n    margin-top: 15px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.logo-text {\r\n    font-family: 'Baloo Paaji';\r\n    color: #ff89c6;\r\n    font-size: 35px;\r\n}\r\n\r\n.login-btn {\r\n    background-color: #ff4aac;\r\n}\r\n\r\n.mat-button {\r\n    color: #ffffff;\r\n    border-radius: 6px;\r\n    height: 40px;\r\n}\r\n\r\n.sign-up-btn, .sign-up-btn-big {\r\n    background-color: #72bb53;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation-bar/navigation-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <a class=\"logo-text\">Intrelligence</a>\n  <div class=\"navbar-section-right\">\n    <button *ngIf=\"!auth.isLoggedIn()\" mat-button class=\"login-btn\" routerLink=\"/login\">Login</button>\n    <button *ngIf=\"!auth.isLoggedIn()\" mat-button class=\"sign-up-btn\" routerLink=\"/signUp\">Sign up</button>\n    <button mat-button [matMenuTriggerFor]=\"menu\" *ngIf=\"auth.isLoggedIn()\">{{ auth.getUserDetails()?.name }}</button>\n    <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\n      <button mat-menu-item routerLink=\"/user/profile\">Profile</button>\n      <button mat-menu-item routerLink=\"/user/account\">Account</button>\n      <button mat-menu-item routerLink=\"/user/connect\">Connect</button>\n      <button mat-menu-item class=\"sign-up-btn\" (click)=\"auth.logout()\">Logout</button>\n    </mat-menu>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navigation-bar/navigation-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(auth) {
        this.auth = auth;
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
    };
    NavigationBarComponent = __decorate([
        core_1.Component({
            selector: 'app-navigation-bar',
            template: __webpack_require__("../../../../../src/app/components/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navigation-bar/navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());
exports.NavigationBarComponent = NavigationBarComponent;


/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h4, label {\r\n    color: #606060;\r\n    font-weight: normal;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput {\r\n    color: #aaaaaa;\r\n    height: 45px;\r\n\r\n    padding-left: 10px; \r\n    border-style: solid;\r\n    border-color: rgb(209, 209, 209);\r\n    border-width: 1px;\r\n    border-radius: 8px;\r\n}\r\n\r\n.form-group {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n\r\n    width: 640px;\r\n}\r\n\r\n.form-group-item {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.form-group-button {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end\r\n}\r\n\r\n.save-btn {\r\n    background-color: #8783d1;\r\n    width: 100px;\r\n    height: 55px;\r\n    border-style: none;\r\n    color: #ffffff;\r\n    font-size: 15px;\r\n    border-radius: 2px;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Profile</h1>\n<h4>Welcome to your Intrelligence profile</h4>\n\n<div class=\"form-group\">\n  <form (submit)=\"updateProfile()\">\n    <div class=\"form-group-item\">\n      <label for=\"heading\">Heading</label>\n      <input type=\"text\" name=\"heading\" [(ngModel)]=\"details.heading\">\n    </div>\n    <div class=\"form-group-item\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" name=\"name\" value=\"{{ details?.name }}\">\n    </div>\n    <div class=\"form-group-item\">\n      <label for=\"about\">About Me</label>\n      <input type=\"text\" name=\"about\" [(ngModel)]=\"details.about\">\n    </div>\n    <div class=\"form-group-button\">\n      <button mat-button class=\"save-btn\" type=\"submit\">Save</button>\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
        this.details = {
            name: '',
            about: '',
            heading: ''
        };
    }
    ProfileComponent.prototype.updateProfile = function () {
        this.auth.updateProfile(this.details).subscribe(function () {
            (function (error) {
                console.error(error);
            });
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
        }, function (error) {
            console.error(error);
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    color: #232323;\r\n    font-weight: normal;\r\n}\r\n\r\nh1, p {\r\n    margin: 0px;\r\n}\r\n\r\nh3 {\r\n    color: #ff89c6;\r\n}\r\n\r\nlabel {\r\n    color: #444444;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput {\r\n    color: #aaaaaa;\r\n    height: 45px;\r\n\r\n    padding-left: 10px; \r\n    border-style: solid;\r\n    border-color: rgb(209, 209, 209);\r\n    border-width: 1px;\r\n    border-radius: 8px;\r\n}\r\n\r\na {\r\n    color: #00c8f8;\r\n}\r\n\r\n.container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n\r\n    -ms-flex-line-pack: center;\r\n\r\n        align-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n\r\n    padding-top: 80px;\r\n}\r\n\r\n.form-group {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n\r\n    width: 440px;\r\n}\r\n\r\n.form-group-item {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.sign-up-btn {\r\n    background-color: #72bb53;\r\n    width: 440px;\r\n    height: 55px;\r\n    border-style: none;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    border-radius: 2px;\r\n    \r\n}\r\n\r\n.subheading {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Create an Intrelligence account</h1>\n  <div class=\"subheading\">\n    <p>or\n      <a routerLink=\"/login\">sign in to your account</a>\n    </p>\n  </div>\n  <h3>Get started on insight, reporting, and productivity</h3>\n  <div class=\"form-group\">\n    <form (submit)=\"signUp()\">\n      <div class=\"form-group-item\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" name=\"name\" placeholder=\"Your name\" [(ngModel)]=\"credentials.name\">\n      </div>\n      <div class=\"form-group-item\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" name=\"email\" placeholder=\"Your email address\" [(ngModel)]=\"credentials.email\">\n      </div>\n      <div class=\"form-group-item\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n      </div>\n      <div class=\"form-group-button\">\n        <button mat-button class=\"sign-up-btn\" type=\"submit\">Sign up</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            name: '',
            password: ''
        };
    }
    SignUpComponent.prototype.signUp = function () {
        var _this = this;
        this.auth.signUp(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/user/profile');
        }, function (error) {
            console.log(error);
        });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;


/***/ }),

/***/ "../../../../../src/app/components/user-page/user-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-page/user-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-bar></app-navigation-bar>\r\n<app-user-side-menu></app-user-side-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user-page/user-page.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var UserPageComponent = /** @class */ (function () {
    function UserPageComponent() {
    }
    UserPageComponent.prototype.ngOnInit = function () {
    };
    UserPageComponent = __decorate([
        core_1.Component({
            selector: 'app-user-page',
            template: __webpack_require__("../../../../../src/app/components/user-page/user-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-page/user-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserPageComponent);
    return UserPageComponent;
}());
exports.UserPageComponent = UserPageComponent;


/***/ }),

/***/ "../../../../../src/app/components/user-side-menu/user-side-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\nmat-sidenav-container {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nmat-sidenav {\r\n    background-color: #fad2e0;\r\n    width: 250px;\r\n}\r\n\r\nmat-sidenav-content {\r\n    padding-left: 180px;\r\n    padding-top: 30px;\r\n}\r\n\r\n.mat-list-item {\r\n    color: #606060;\r\n    padding-left: 30%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-side-menu/user-side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-sidenav-container>\n    <mat-sidenav #sidenav mode=\"side\" opened=\"true\">\n      <mat-nav-list>\n        <a mat-list-item class=\"mat-list-item\" routerLink=\"/user/profile\">Profile</a>\n        <a mat-list-item class=\"mat-list-item\" routerLink=\"/user/account\">Account</a>\n        <a mat-list-item class=\"mat-list-item\" routerLink=\"/user/connect\">Connect</a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user-side-menu/user-side-menu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var UserSideMenuComponent = /** @class */ (function () {
    function UserSideMenuComponent() {
    }
    UserSideMenuComponent.prototype.ngOnInit = function () {
    };
    UserSideMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-user-side-menu',
            template: __webpack_require__("../../../../../src/app/components/user-side-menu/user-side-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-side-menu/user-side-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserSideMenuComponent);
    return UserSideMenuComponent;
}());
exports.UserSideMenuComponent = UserSideMenuComponent;


/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;


/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var map_1 = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('jwt-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('jwt-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post("/api/" + type, user, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        else {
            base = this.http.get("/api/" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(map_1.map(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('jwt-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService.prototype.signUp = function (user) {
        return this.request('post', 'signUp', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.account = function () {
        return this.request('get', 'account');
    };
    AuthenticationService.prototype.connect = function () {
        return this.request('get', 'connect');
    };
    AuthenticationService.prototype.updateProfile = function (user) {
        var response = this.http.post('/api/profile', user, { headers: { Authorization: "Bearer " + this.getToken() } });
        return response;
    };
    AuthenticationService.prototype.updateAccount = function (user) {
        return this.request('post', 'updateAccount');
    };
    AuthenticationService.prototype.connectTrelloAccount = function (token) {
        var response = this.http.post('/api/trelloConnect', { 'token': token }, { headers: { Authorization: "Bearer " + this.getToken() } });
        return response;
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map