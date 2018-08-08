(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h1>Admin</h1>\r\n  <a routerLink=\"/home\">Home</a>|\r\n  <a routerLink=\"/profile\">Profile</a>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item active\">Courses</li>\r\n        <li class=\"list-group-item\"\r\n            (click)=\"selectCourse(course)\"\r\n            *ngFor=\"let course of courses\"\r\n            [ngClass]=\"{'active':course.id == selectedCourse.id}\" >\r\n          {{course.title}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-8\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item active\">\r\n          Sections\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <p>Current Sections For Course </p>\r\n          <p *ngFor=\"let section of sections\">\r\n            <a (click)=\"selectSection(section)\">{{section.name}} - {{section.seats}}</a>\r\n            <button class=\"btn btn-danger float-right\"\r\n                    (click)=\"deleteSection(section)\">Delete Section</button>\r\n            <button class=\"btn btn-warning float-right\"\r\n                    (click)=\"editSection(section)\">Edit Section</button>\r\n          </p>\r\n         <!-- <p>Selected Sections : {{selectedSection.name}}</p>-->\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <input [(ngModel)]=\"sectionName\"\r\n                 placeholder=\"Section Name\"\r\n                 class=\"form-control\">\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <input [(ngModel)]=\"seats\"\r\n                 placeholder=\"Seats Available\"\r\n                 class=\"form-control\">\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <button class=\"btn btn-block btn-success\"\r\n                  (click)=\"createSection(sectionName,seats)\">Add Section</button>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <button class=\"btn btn-block btn-secondary\"\r\n                  (click)=\"updateSection(sectionName,seats)\">Update Section</button>\r\n        </li>\r\n        <!--<li *ngFor=\"let section of sections\" class=\"list-group-item\">\r\n          {{section.title}}\r\n        </li>-->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(service, sectionService) {
        this.service = service;
        this.sectionService = sectionService;
        this.courses = [];
        this.courseID = '';
        this.selectedCourse = {};
        this.selectedSection = {};
        this.sectionName = '';
        this.seats = '';
        this.sectionId = '';
        this.sections = [];
    }
    AdminComponent.prototype.selectSection = function (section) {
        this.selectedSection = section;
    };
    AdminComponent.prototype.deleteSection = function (section) {
        var _this = this;
        console.log(section._id);
        this.sectionService
            .deleteSection(section._id)
            .then(function () {
            _this.sectionService.findAllSectionsForCourse(_this.courseID)
                .then(function (sections) { return _this.sections = sections; });
        });
    };
    AdminComponent.prototype.editSection = function (section) {
        this.sectionId = section._id;
        this.sectionName = section.name;
        this.seats = section.seats;
    };
    AdminComponent.prototype.updateSection = function (sectionName, seats) {
        var _this = this;
        console.log("Update : " + sectionName + " : " + seats + ": " + this.sectionId);
        this.sectionService
            .updateSection(sectionName, seats, this.sectionId)
            .then(function () {
            _this.sectionService.findAllSectionsForCourse(_this.courseID)
                .then(function (sections) { return _this.sections = sections; });
        });
    };
    AdminComponent.prototype.selectCourse = function (course) {
        var _this = this;
        this.courseID = course.id;
        this.sectionService
            .findAllSectionsForCourse(this.courseID)
            .then(function (sections) { return _this.sections = sections; });
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) {
            _this.courses = courses;
        });
    };
    AdminComponent.prototype.createSection = function (sectionName, seats) {
        var _this = this;
        this.sectionService
            .createSection(this.courseID, sectionName, seats)
            .then(function () {
            _this.sectionService.findAllSectionsForCourse(_this.courseID)
                .then(function (sections) { return _this.sections = sections; });
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<app-white-board></app-white-board>\r\n-->\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-column-navigator';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/course-navigator.service.client */ "./src/app/services/course-navigator.service.client.ts");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./module-list/module-list.component */ "./src/app/module-list/module-list.component.ts");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/module.service.client */ "./src/app/services/module.service.client.ts");
/* harmony import */ var _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lesson-tabs/lesson-tabs.component */ "./src/app/lesson-tabs/lesson-tabs.component.ts");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./topic-pills/topic-pills.component */ "./src/app/topic-pills/topic-pills.component.ts");
/* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/topic.service.client */ "./src/app/services/topic.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_4__["CourseNavigatorComponent"],
                _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_5__["WhiteBoardComponent"],
                _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_6__["CourseGridComponent"],
                _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_9__["CourseViewerComponent"],
                _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_10__["ModuleListComponent"],
                _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_12__["LessonTabsComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
                _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_19__["SectionListComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"],
                _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_22__["TopicPillsComponent"],
                _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_23__["WidgetListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]
            ],
            providers: [
                _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_3__["CourseNavigatorServiceClient"],
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_7__["CourseServiceClient"],
                _services_module_service_client__WEBPACK_IMPORTED_MODULE_11__["ModuleServiceClient"],
                _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_13__["LessonServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_18__["UserServiceClient"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_21__["SectionServiceClient"],
                _services_topic_service_client__WEBPACK_IMPORTED_MODULE_24__["TopicServiceClient"],
                _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__["WidgetServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");










var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'courses', component: _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__["CourseNavigatorComponent"] },
    { path: 'courses/grid', component: _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_7__["CourseGridComponent"] },
    { path: 'course/:courseId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/section', component: _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_8__["SectionListComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: '**', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-grid/course-grid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.btn-success{\r\n  margin-right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n<h4>\r\n  <!--Course Grid {{courses.length}}-->\r\n  Available Courses\r\n</h4>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-3\" *ngFor = \"let course of courses\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{course.title}}</h5>\r\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n        <a routerLink=\"/course/{{course.id}}\" class=\"btn btn-secondary my-2 my-sm-0 mr-2\">See Course Content</a>\r\n        <a routerLink=\"/course/{{course.id}}/section\" class=\"btn btn-success my-2 my-sm-0 mr-2\">Enroll</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.ts ***!
  \******************************************************/
/*! exports provided: CourseGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponent", function() { return CourseGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseGridComponent = /** @class */ (function () {
    function CourseGridComponent(service) {
        this.service = service;
        this.courses = [];
    }
    CourseGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) {
            _this.courses = courses;
        });
    };
    CourseGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-course-grid",
            template: __webpack_require__(/*! ./course-grid.component.html */ "./src/app/course-grid/course-grid.component.html"),
            styles: [__webpack_require__(/*! ./course-grid.component.css */ "./src/app/course-grid/course-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"]])
    ], CourseGridComponent);
    return CourseGridComponent;
}());



/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.html":
/*!******************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h1>Course Navigator</h1>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-3\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item active\">Courses</li>\r\n        <li (click)=\"selectCourse(course)\"\r\n            class=\"list-group-item\"\r\n            *ngFor=\"let course of courses\"\r\n            [ngClass]=\"{'active':course.id == selectedCourse.id}\" >\r\n          {{course.title}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"col-3\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item active\">Modules</li>\r\n        <li class=\"list-group-item\"\r\n            *ngFor=\"let module of modules\"\r\n            (click)=\"selectModule(module)\"\r\n            [ngClass] = \"{'active': module.id == selectedModule.id}\">{{module.title}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item active\">Lessons</li>\r\n        <li class=\"list-group-item\"\r\n            *ngFor=\"let lesson of lessons\"\r\n            (click)=\"selectLesson(lesson)\"\r\n            [ngClass] = \"{'active': lesson.id == selectedLesson.id}\"\r\n            >{{lesson.title}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item active\">Topics</li>\r\n        <li class=\"list-group-item\"\r\n            *ngFor=\"let topic of topics\"\r\n        >{{topic.title}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.ts ***!
  \****************************************************************/
/*! exports provided: CourseNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorComponent", function() { return CourseNavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course-navigator.service.client */ "./src/app/services/course-navigator.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseNavigatorComponent = /** @class */ (function () {
    function CourseNavigatorComponent(service) {
        this.service = service;
        this.courses = [];
        this.topics = [];
        this.selectedCourse = {};
        this.selectedModule = {};
        this.selectedLesson = {};
        this.modules = [];
        this.lessons = [];
    }
    CourseNavigatorComponent.prototype.selectCourse = function (course) {
        var _this = this;
        alert(course.id);
        this.selectedCourse = course;
        this.courseID = course.id;
        this.service.findAllModulesForCourse(course.id)
            .then(function (modules) {
            _this.modules = modules;
        });
    };
    CourseNavigatorComponent.prototype.selectModule = function (module) {
        var _this = this;
        alert(module.id);
        this.selectedModule = module;
        this.moduleID = module.id;
        this.service.findAllLessonsForModule(this.courseID, module.id)
            .then(function (lessons) {
            _this.lessons = lessons;
        });
    };
    CourseNavigatorComponent.prototype.selectLesson = function (lesson) {
        var _this = this;
        alert(lesson.id);
        this.selectedLesson = lesson;
        this.service.findAllTopicsForLesson(this.courseID, this.moduleID, lesson.id)
            .then(function (topics) {
            _this.topics = topics;
        });
    };
    CourseNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) {
            _this.courses = courses;
        });
    };
    CourseNavigatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-course-navigator",
            template: __webpack_require__(/*! ./course-navigator.component.html */ "./src/app/course-navigator/course-navigator.component.html"),
            styles: [__webpack_require__(/*! ./course-navigator.component.css */ "./src/app/course-navigator/course-navigator.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseNavigatorServiceClient"]])
    ], CourseNavigatorComponent);
    return CourseNavigatorComponent;
}());



/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: purple\">\r\n  <a class=\"navbar-brand\" href=\"#\"\r\n     style=\"color: wheat;\r\n     font-family: 'Comic Sans MS';\r\n     font-size: x-large\">WhiteBoard</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\r\n          data-target=\"#navbarTogglerDemo\" aria-controls=\"navbarTogglerDemo\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n           style=\"color: wheat\"\r\n           routerLink=\"/home\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item active disabled\" [hidden]=!loginVal>\r\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\" [hidden]=!loginVal>\r\n        <a class=\"nav-link\" [hidden]=!admin\r\n           style=\"color: wheat\"\r\n           routerLink=\"/admin\">Admin</a>\r\n      </li>\r\n    </ul>\r\n    <!--<form class=\"form-inline my-2 my-lg-0\">-->\r\n    <form [hidden]=!loginVal\r\n          class=\"form-inline mt-2 mt-md-0\">\r\n      <span class=\"navbar-text\">\r\n        Logged in as : </span>\r\n      <span style=\"color: dimgrey; font-weight: bold\">&nbsp;{{username}}\r\n      </span>\r\n      &nbsp;&nbsp;\r\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\"\r\n              (click)=\"logout()\">Logout\r\n      </button>\r\n    </form>\r\n\r\n    <form [hidden]=loginVal\r\n          class=\"form-inline mt-2 mt-md-0\">\r\n\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0 mr-2\"\r\n              style=\"color: wheat\"\r\n              routerLink=\"/login\">&nbsp;Login&nbsp;\r\n      </button>\r\n\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0\"\r\n              style=\"color: wheat\"\r\n              routerLink=\"/register\">Register\r\n      </button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container-fluid\">\r\n  <h2>{{course.title}}</h2>\r\n  <app-module-list></app-module-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/course.model.client */ "./src/app/models/course.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(service, userService, route, router) {
        var _this = this;
        this.service = service;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.course = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
        this.admin = false;
        this.loginVal = false;
        this.route.params.subscribe(function (params) { return _this.loadCourse(params['courseId']); });
    }
    CourseViewerComponent.prototype.loadCourse = function (courseId) {
        var _this = this;
        this.service.findCourseById(courseId)
            .then(function (course) { return _this.course = course; });
    };
    CourseViewerComponent.prototype.logout = function () {
        var _this = this;
        this.userService
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    CourseViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            console.log('logged in as : ', user);
            _this.username = user.username;
            if (_this.username !== 'No session maintained') {
                _this.loginVal = true;
            }
            if (_this.username === 'admin') {
                _this.admin = true;
            }
        });
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-viewer',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.html":
/*!********************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item\" *ngFor=\"let lesson of lessons\">\r\n    <a class=\"nav-link active\"\r\n       [ngClass] =\"{'active': lesson.id == lessonId}\"\r\n    routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\">{{lesson.title}}</a>\r\n  </li>\r\n</ul>\r\n<div class=\"mt-2 mb-3 p-2\">\r\n  <app-topic-pills></app-topic-pills>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.ts ***!
  \******************************************************/
/*! exports provided: LessonTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponent", function() { return LessonTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonTabsComponent = /** @class */ (function () {
    function LessonTabsComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.lessons = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    LessonTabsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.loadAllLessons(this.courseId, this.moduleId);
    };
    LessonTabsComponent.prototype.loadAllLessons = function (courseId, moduleId) {
        var _this = this;
        this.moduleId = moduleId;
        console.log(moduleId);
        this.service.findAllLessonForModule(courseId, moduleId)
            .then(function (lessons) { return _this.lessons = lessons; });
    };
    LessonTabsComponent.prototype.ngOnInit = function () {
    };
    LessonTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson-tabs',
            template: __webpack_require__(/*! ./lesson-tabs.component.html */ "./src/app/lesson-tabs/lesson-tabs.component.html"),
            styles: [__webpack_require__(/*! ./lesson-tabs.component.css */ "./src/app/lesson-tabs/lesson-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__["LessonServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LessonTabsComponent);
    return LessonTabsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: purple\">\r\n  <a class=\"navbar-brand\" href=\"#\"\r\n     style=\"color: wheat;\r\n     font-family: 'Comic Sans MS';\r\n  font-size: x-large\">WhiteBoard</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\r\n          data-target=\"#navbarTogglerDemo\" aria-controls=\"navbarTogglerDemo\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<div class=\"container-fluid\">\r\n\r\n  <h1>Login</h1>\r\n\r\n\r\n  <div class=\"form-group row\">\r\n    <label for=\"usernameFld\" class=\"col-sm-1 col-form-label\">\r\n      Username\r\n    </label>\r\n\r\n    <div class=\"col-sm-10\">\r\n      <input [(ngModel)]=\"username\"\r\n             id=\"usernameFld\"\r\n             placeholder=\"alice\"\r\n             class=\"form-control\"/>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group row\">\r\n    <label for=\"passwordFld\" class=\"col-sm-1 col-form-label\">\r\n      Password\r\n    </label>\r\n    <div class=\"col-sm-10\">\r\n      <input [(ngModel)]=\"password\"\r\n             id=\"passwordFld\"\r\n             placeholder=\"*********\"\r\n             type=\"password\"\r\n             class=\"form-control\"/>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row\">\r\n    <label for=\"loginBtn\" class=\"col-sm-1 col-form-label\"></label>\r\n    <div class=\"col-sm-10\">\r\n      <button id=\"loginBtn\" class=\"btn btn-success btn-block\"\r\n              (click)=\"login(username,password)\">Login\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <!--<div class=\"form-group row\">\r\n    <label class=\"col-sm-1 col-form-label\"></label>\r\n    <div class=\"col-sm-9\">\r\n      <a routerLink=\"/home\">Home</a>\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n      <a routerLink=\"/register\">Register</a>\r\n    </div>\r\n  </div>\r\n-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        var user = {
            username: username,
            password: password
        };
        this.service.login(user)
            .then(function (user) {
            if (user.username !== 'No session maintained') {
                console.log(user.username);
                _this.router.navigate(['profile']);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/course.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/course.model.client.ts ***!
  \***********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/module-list/module-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/module-list/module-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv{\r\n  background-color: darkgray;\r\n  border-color: transparent;\r\n}\r\n\r\n.active.wbdv a{\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/module-list/module-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<h3>Module List for Course : {{courseId}}</h3>-->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-4\">\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item active\">Modules</li>\r\n      <li class=\"list-group-item wbdv\"\r\n          [ngClass]=\"{'active':module.id == moduleId }\"\r\n          *ngFor=\"let module of modules\">\r\n        <a routerLink=\"/course/{{courseId}}/module/{{module.id}}\"> {{module.title}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-8\">\r\n    <app-lesson-tabs></app-lesson-tabs>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/module-list/module-list.component.ts ***!
  \******************************************************/
/*! exports provided: ModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function() { return ModuleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/module.service.client */ "./src/app/services/module.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleListComponent = /** @class */ (function () {
    function ModuleListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.modules = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    ModuleListComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.loadModules(this.courseId);
    };
    ModuleListComponent.prototype.loadModules = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.service.findAllModulesForCourse(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    ModuleListComponent.prototype.ngOnInit = function () {
    };
    ModuleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-list',
            template: __webpack_require__(/*! ./module-list.component.html */ "./src/app/module-list/module-list.component.html"),
            styles: [__webpack_require__(/*! ./module-list.component.css */ "./src/app/module-list/module-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_module_service_client__WEBPACK_IMPORTED_MODULE_2__["ModuleServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModuleListComponent);
    return ModuleListComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: purple\">\r\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: wheat; font-size: x-large\">WhiteBoard</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\r\n          data-target=\"#navbarTogglerDemo\" aria-controls=\"navbarTogglerDemo\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n           style=\"color: wheat\"\r\n           routerLink=\"/home\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item active disabled\" [hidden]=!loginVal>\r\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\" [hidden]=!loginVal>\r\n        <a class=\"nav-link\" [hidden]=!admin\r\n           style=\"color: wheat\"\r\n           routerLink=\"/admin\">Admin</a>\r\n      </li>\r\n    </ul>\r\n    <!--<form class=\"form-inline my-2 my-lg-0\">-->\r\n    <form [hidden]=!loginVal\r\n          class=\"form-inline mt-2 mt-md-0\">\r\n      <span class=\"navbar-text\">\r\n        Logged in as : </span>\r\n      <span style=\"color: dimgrey; font-weight: bold\">&nbsp;{{username}}\r\n      </span>\r\n      &nbsp;&nbsp;\r\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\"\r\n              (click)=\"logout()\">Logout\r\n      </button>\r\n    </form>\r\n\r\n    <form [hidden]=loginVal\r\n          class=\"form-inline mt-2 mt-md-0\">\r\n\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0 mr-2\"\r\n              style=\"color: wheat\"\r\n              routerLink=\"/login\">&nbsp;Login&nbsp;\r\n      </button>\r\n\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0\"\r\n              style=\"color: wheat\"\r\n              routerLink=\"/register\">Register\r\n      </button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"container\">\r\n\r\n  <h1>Profile</h1>\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"usernameFld\" class=\"col-sm-2 col-form-label\">\r\n        Username\r\n      </label>\r\n      <div class=\"col-sm-10\">\r\n        <input id=\"usernameFld\"\r\n               [(ngModel)]=\"username\"\r\n               placeholder=\"alice\"\r\n               class=\"form-control\"\r\n               disabled=\"true\"/>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"firstNameFld\" class=\"col-sm-2 col-form-label\">\r\n        First Name\r\n      </label>\r\n      <div class=\"col-sm-10\">\r\n        <input id=\"firstNameFld\"\r\n               [(ngModel)]=\"firstName\"\r\n               placeholder=\"alice\"\r\n               class=\"form-control\"/>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"lastNameFld\" class=\"col-sm-2 col-form-label\">\r\n        Last Name\r\n      </label>\r\n      <div class=\"col-sm-10\">\r\n        <input id=\"lastNameFld\"\r\n               [(ngModel)]=\"lastName\"\r\n               placeholder=\"alice\"\r\n               class=\"form-control\"/>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"phoneFld\" class=\"col-sm-2 col-form-label\">\r\n        Phone\r\n      </label>\r\n      <div class=\"col-sm-10\">\r\n        <input id=\"phoneFld\"\r\n               [(ngModel)]=\"phone\"\r\n               placeholder=\"(555) 123-7890\"\r\n               class=\"form-control\"/>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"emailFld\" class=\"col-sm-2 col-form-label\">\r\n        Email\r\n      </label>\r\n      <div class=\"col-sm-10\">\r\n        <input id=\"emailFld\"\r\n               [(ngModel)]=\"email\"\r\n               placeholder=\"abc@example.com\"\r\n               class=\"form-control\"/>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"roleFld\" class=\"col-sm-2 col-form-label\">\r\n        Role\r\n      </label>\r\n      <div class=\"col-sm-10\">\r\n        <select id=\"roleFld\"\r\n                [(ngModel)]=\"role\"\r\n                class=\"form-control\">\r\n          <option value=\"FACULTY\">Faculty</option>\r\n          <option value=\"STUDENT\">Student</option>\r\n          <option value=\"ADMIN\">Admin</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group row\">\r\n      <label for =\"dateFld\" class=\"col-sm-2 col-form-label\">\r\n        Date of Birth\r\n      </label>\r\n      <div class=\"col-sm-10\">\r\n        <div class='input-group date'>\r\n          <input type='date'\r\n                 [(ngModel)]=\"dateOfBirth\"\r\n                 class=\"form-control\"\r\n                 id='dateFld'/>\r\n          <span class=\"input-group-addon\">\r\n                        <span class=\"glyphicon glyphicon-calendar\"></span>\r\n                    </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-2 col-form-label\"></label>\r\n      <div class=\"col-sm-10\">\r\n        <button id=\"updateBtn\"\r\n                (click)=\"updateProfile()\"\r\n                class=\"btn btn-success btn-block\">Update</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-2 col-form-label\"></label>\r\n      <div class=\"col-sm-10\">\r\n        <button id=\"logoutBtn\"\r\n                (click)=\"logout()\"\r\n                class=\"btn btn-danger btn-block\">Logout</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n<div [hidden]=admin>\r\n  <hr>\r\n  <h2 class=\"ml-lg-4\" style=\"color: mediumblue;\">Sections Enrolled in : {{sections.length}}</h2>\r\n  <ul class=\"list-group ml-lg-2\">\r\n    <li *ngFor=\"let enrollment of sections\" class=\"list-group-item my-1 rounded bg-light shadow-sm col-md-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-4 border-right my-0\">\r\n          <b>{{enrollment.section.name}}</b>\r\n        </div>\r\n        <div class=\"col-4 pl-4\">\r\n              <span style=\"color: dimgrey;\">\r\n                <i> Course : {{fetchCourse(enrollment.section.courseId)}}</i>\r\n              </span>\r\n        </div>\r\n        <div class=\"col-4 pl-4\">\r\n          <button (click)=\"drop(enrollment)\"\r\n                  class=\"float-right btn btn-outline-danger mr-2\">\r\n            <i class=\"fas fa-times\"></i>&nbsp;&nbsp;Drop</button>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, router, courseService, sectionService) {
        this.service = service;
        this.router = router;
        this.courseService = courseService;
        this.sectionService = sectionService;
        this.admin = false;
        this.loginVal = true;
        this.updatedUser = {};
        this.userId = '';
        this.sections = [];
        this.courseIds = [];
        this.coursesEnrolled = [];
    }
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        this.updatedUser = {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            role: this.role,
            email: this.email,
            phone: this.phone,
            dateOfBirth: this.dateOfBirth
        };
        this.service.updateUser(this.userId, this.updatedUser)
            .then(function (user) {
            _this.user = user;
        });
    };
    ProfileComponent.prototype.fetchCourse = function (courseId) {
        for (var i = 0; i < this.coursesEnrolled.length; i++) {
            if (courseId === this.coursesEnrolled[i].id) {
                return (this.coursesEnrolled[i].title);
            }
        }
    };
    ProfileComponent.prototype.drop = function (enrollment) {
        var _this = this;
        this.sectionService
            .dropStudentFromSection(enrollment.section._id, enrollment._id)
            .then(function () {
            _this.sectionService.findEnrolledSectionsForStudent()
                .then(function (sections) {
                _this.sections = sections;
                for (var i = 0; i < _this.sections.length; i++) {
                    _this.courseIds.push({
                        'section': _this.sections[i].section.name,
                        'course': _this.sections[i].section.courseId
                    });
                }
                for (var i = 0; i < _this.courseIds.length; i++) {
                    (_this.courseService.findCourseById(_this.courseIds[i].course)
                        .then(function (course) {
                        _this.coursesEnrolled.push(course);
                    }));
                }
            });
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.profile()
            .then(function (user) {
            if (user.username === 'No session maintained') {
                _this.loginVal = false;
                _this.router.navigate(['[login']);
            }
            if (user.username === 'admin') {
                _this.admin = true;
            }
            else {
                _this.user = user;
                _this.userId = user._id;
                _this.username = user.username;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;
                _this.phone = user.phone;
                _this.password = user.password;
                _this.role = user.role;
                _this.email = user.email;
                _this.dateOfBirth = user.dateOfBirth;
                _this.sectionService.findEnrolledSectionsForStudent()
                    .then(function (sections) {
                    _this.sections = sections;
                    for (var i = 0; i < _this.sections.length; i++) {
                        _this.courseIds.push({
                            'section': _this.sections[i].section.name,
                            'course': _this.sections[i].section.courseId
                        });
                    }
                    for (var i = 0; i < _this.courseIds.length; i++) {
                        (_this.courseService.findCourseById(_this.courseIds[i].course)
                            .then(function (course) {
                            _this.coursesEnrolled.push(course);
                        }));
                    }
                });
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__["CourseServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__["SectionServiceClient"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: purple\">\r\n  <a class=\"navbar-brand\" href=\"#\"\r\n     style=\"color: wheat;\r\n     font-family: 'Comic Sans MS';\r\n      font-size: x-large\">WhiteBoard</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\r\n          data-target=\"#navbarTogglerDemo\" aria-controls=\"navbarTogglerDemo\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n\r\n  <h1>Sign Up</h1>\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"usernameFld\" class=\"col-sm-2 col-form-label\">\r\n        Username\r\n      </label>\r\n      <div class=\"col-sm-10\">\r\n        <input id=\"usernameFld\"\r\n               [(ngModel)]=\"username\"\r\n               placeholder=\"alice\"\r\n               class=\"form-control\"/>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"passwordFld\" class=\"col-sm-2 col-form-label\">\r\n        Password\r\n      </label>\r\n      <div class=\"col-sm-10\">\r\n        <input [(ngModel)]=\"password\"\r\n               id=\"passwordFld\"\r\n               placeholder=\"*********\"\r\n               type=\"password\"\r\n               class=\"form-control\"/>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"verifyPasswordFld\" class=\"col-sm-2 col-form-label\">\r\n        Verify Password\r\n      </label>\r\n      <div class=\"col-sm-10\">\r\n        <input id=\"verifyPasswordFld\"\r\n               [(ngModel)]=\"password2\"\r\n               placeholder=\"*********\"\r\n               type=\"password\"\r\n               class=\"form-control\"/>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-2 col-form-label\"></label>\r\n      <div class=\"col-sm-10\">\r\n        <button (click)=\"register(username, password, password2)\"\r\n                class=\"btn btn-success btn-block\">\r\n          Register\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <!--<div class=\"form-group row\">\r\n      <label class=\"col-sm-2 col-form-label\"></label>\r\n      <div class=\"col-sm-9\">\r\n        <a routerLink=\"/home\">Home</a>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <a routerLink=\"/login\">Login</a>\r\n      </div>\r\n    </div>-->\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
        this.username = '';
        this.password = '';
        this.password2 = '';
        this.user = {};
    }
    RegisterComponent.prototype.register = function (username, password, password2) {
        var _this = this;
        if (username === '') {
            alert('Please enter username');
        }
        else {
            this.service.findUserByUsername(username)
                .then(function (user) {
                if (user !== null) {
                    alert("Username Already Taken!!!");
                }
                else {
                    if (password === '') {
                        alert('Please enter password');
                    }
                    else {
                        if (password2 === '') {
                            alert('Please reconfirm password');
                        }
                        else if (password !== password2) {
                            alert("Passwords Don't Match");
                        }
                        else {
                            _this.service
                                .createUser(username, password)
                                .then(function () {
                                alert("You are registered successfully");
                                _this.router.navigate(['profile']);
                            });
                        }
                    }
                }
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/section-list/section-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/section-list/section-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section-list/section-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/section-list/section-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: purple\">\r\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: wheat; font-size: x-large\">WhiteBoard</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\r\n          data-target=\"#navbarTogglerDemo\" aria-controls=\"navbarTogglerDemo\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n           style=\"color: wheat\"\r\n           routerLink=\"/home\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item active disabled\" [hidden]=!loginVal>\r\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\" [hidden]=!loginVal>\r\n        <a class=\"nav-link\" [hidden]=!admin\r\n           style=\"color: wheat\"\r\n           routerLink=\"/admin\">Admin</a>\r\n      </li>\r\n    </ul>\r\n    <!--<form class=\"form-inline my-2 my-lg-0\">-->\r\n    <form [hidden]=!loginVal\r\n          class=\"form-inline mt-2 mt-md-0\">\r\n      <span class=\"navbar-text\">\r\n        Logged in as : </span>\r\n      <span style=\"color: dimgrey; font-weight: bold\">&nbsp;{{username}}\r\n      </span>\r\n      &nbsp;&nbsp;\r\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\"\r\n              (click)=\"logout()\">Logout\r\n      </button>\r\n    </form>\r\n\r\n    <form [hidden]=loginVal\r\n          class=\"form-inline mt-2 mt-md-0\">\r\n\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0 mr-2\"\r\n              style=\"color: wheat\"\r\n              routerLink=\"/login\">&nbsp;Login&nbsp;\r\n      </button>\r\n\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0\"\r\n              style=\"color: wheat\"\r\n              routerLink=\"/register\">Register\r\n      </button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <!--<a routerLink=\"/home\">Home</a>-->\r\n  <h1>Sections for Course: {{courseId}}</h1>\r\n  <ul class=\"list-group rounded py-1 my-1\" style=\"width: 36rem\">\r\n    <li class=\"list-group-item shadow bg-light\"\r\n        *ngFor=\"let section of sections\">\r\n      <span style=\"font-size: large; color:dodgerblue;\"> </span>\r\n      {{section.name}}\r\n      <button class=\"float-right btn btn-success\"\r\n              (click)=\"enrollStudent(section)\">Enroll</button>\r\n      <br> <span style=\"color: dimgrey; font-style: italic \"> Seats Available :  </span>\r\n      {{section.seats}}\r\n    </li>\r\n  </ul>\r\n\r\n\r\n  {{username}}\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/section-list/section-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-list/section-list.component.ts ***!
  \********************************************************/
/*! exports provided: SectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionListComponent", function() { return SectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionListComponent = /** @class */ (function () {
    function SectionListComponent(route, router, service, userService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.service = service;
        this.userService = userService;
        this.sectionName = '';
        this.seats = '';
        this.loginVal = true;
        this.admin = false;
        this.sections = [];
        this.route.params.subscribe(function (params) { return _this.loadSections(params['courseId']); });
    }
    SectionListComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.service.findAllSectionsForCourse(courseId)
            .then(function (sections) { return _this.sections = sections; });
    };
    SectionListComponent.prototype.logout = function () {
        var _this = this;
        this.userService
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    SectionListComponent.prototype.enrollStudent = function (section) {
        var _this = this;
        console.log("inside enrolll" + this.loginVal);
        if (this.loginVal === true) {
            this.service.findEnrollmentForStudent(this.userId, section._id)
                .then(function (enrollment) {
                if (section.seats === 0) {
                    alert("Seats are no longer Available");
                }
                else if (enrollment != null) {
                    alert("you are already enrolled for this section");
                }
                else {
                    _this.service.enrollStudentInSection(section._id)
                        .then(function () {
                        _this.router.navigate(['profile']);
                    });
                }
            });
        }
        else {
            alert("Please Login to Enroll");
            this.router.navigate(['login']);
        }
    };
    SectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile()
            .then(function (user) {
            _this.username = user.username;
            _this.userId = user._id;
            if (_this.username === 'No session maintained') {
                _this.loginVal = false;
            }
            if (_this.username === 'admin') {
                _this.admin = true;
            }
        });
    };
    SectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-list',
            template: __webpack_require__(/*! ./section-list.component.html */ "./src/app/section-list/section-list.component.html"),
            styles: [__webpack_require__(/*! ./section-list.component.css */ "./src/app/section-list/section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "./src/app/services/course-navigator.service.client.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/course-navigator.service.client.ts ***!
  \*************************************************************/
/*! exports provided: CourseNavigatorServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorServiceClient", function() { return CourseNavigatorServiceClient; });
var CourseNavigatorServiceClient = /** @class */ (function () {
    function CourseNavigatorServiceClient() {
    }
    CourseNavigatorServiceClient.prototype.findAllCourses = function () {
        return fetch("http://localhost:8080/api/course")
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllModulesForCourse = function (courseId) {
        return fetch("http://localhost:8080/api/course/" + courseId + "/module")
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllLessonsForModule = function (courseId, moduleId) {
        return fetch("http://localhost:8080/api/course/" + courseId + "/module/" + moduleId + "/lesson")
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllTopicsForLesson = function (courseId, moduleId, lessonId) {
        return fetch("http://localhost:8080/api/course/" + courseId + "/module/"
            + moduleId + "/lesson/" + lessonId + "/topic")
            .then(function (response) { return response.json(); });
    };
    return CourseNavigatorServiceClient;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        this.COURSE_URL = "http://localhost:8080/api/course";
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(this.COURSE_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findCourseById = function (courseId) {
        return fetch(this.COURSE_URL + '/' + courseId)
            .then(function (response) { return response.json(); });
    };
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/lesson.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/lesson.service.client.ts ***!
  \***************************************************/
/*! exports provided: LessonServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonServiceClient", function() { return LessonServiceClient; });
var LessonServiceClient = /** @class */ (function () {
    function LessonServiceClient() {
        this.MODULE_URL = "http://localhost:8080/api/course/COURSE_ID/module/MODULE_ID/lesson";
    }
    LessonServiceClient.prototype.findAllLessonForModule = function (courseId, moduleId) {
        return fetch(this.MODULE_URL.replace('COURSE_ID', courseId)
            .replace('MODULE_ID', moduleId))
            .then(function (response) { return response.json(); });
    };
    return LessonServiceClient;
}());



/***/ }),

/***/ "./src/app/services/module.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/module.service.client.ts ***!
  \***************************************************/
/*! exports provided: ModuleServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleServiceClient", function() { return ModuleServiceClient; });
var ModuleServiceClient = /** @class */ (function () {
    function ModuleServiceClient() {
        this.MODULE_URL = "http://localhost:8080/api/course/COURSE_ID/module";
    }
    ModuleServiceClient.prototype.findAllModulesForCourse = function (courseId) {
        return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
            .then(function (response) { return response.json(); });
    };
    return ModuleServiceClient;
}());



/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        this.SECTION_URL = "http://localhost:3000/api/course/COURSEID/section";
        this.BASE_SECTION_URL = "http://localhost:3000/api/section";
    }
    SectionServiceClient.prototype.createSection = function (courseId, name, seats) {
        var section = {
            name: name,
            seats: seats,
            courseId: courseId
        };
        return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.findAllSectionsForCourse = function (courseId) {
        return fetch(this.SECTION_URL.replace('COURSEID', courseId))
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.deleteSection = function (sectionId) {
        return fetch(this.BASE_SECTION_URL + "/" + sectionId, {
            method: 'delete',
            credentials: 'include',
        });
    };
    SectionServiceClient.prototype.updateSection = function (sectionName, seats, sectionId) {
        var section = {
            name: sectionName,
            seats: seats
        };
        return fetch(this.BASE_SECTION_URL + "/" + sectionId, {
            method: 'put',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.findEnrollmentForStudent = function (studentId, sectionId) {
        return fetch('http://localhost:3000/api/student/' + studentId + '/section/' + sectionId)
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.enrollStudentInSection = function (sectionId) {
        return fetch(this.BASE_SECTION_URL + "/" + sectionId + '/enrollment', {
            method: 'post',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.findEnrolledSectionsForStudent = function () {
        return fetch('http://localhost:3000/api/student/section', {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.dropStudentFromSection = function (sectionId, enrollmentId) {
        return fetch(this.BASE_SECTION_URL + "/" + sectionId + "/enrollment/" + enrollmentId, {
            method: 'delete',
            credentials: 'include'
        });
    };
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/topic.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/topic.service.client.ts ***!
  \**************************************************/
/*! exports provided: TopicServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicServiceClient", function() { return TopicServiceClient; });
var TopicServiceClient = /** @class */ (function () {
    function TopicServiceClient() {
        this.TOPIC_URL = "http://localhost:8080/api/course/COURSE_ID/module/MODULE_ID/lesson/LESSON_ID/topic";
    }
    TopicServiceClient.prototype.findAllTopicsForLesson = function (courseId, moduleId, lessonId) {
        return fetch(this.TOPIC_URL.replace('COURSE_ID', courseId)
            .replace('MODULE_ID', moduleId)
            .replace('LESSON_ID', lessonId))
            .then(function (response) { return response.json(); });
    };
    return TopicServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
        this.USER_URL = "http://localhost:3000/api/user";
        this.login = function (user) {
            return fetch("http://localhost:3000/api/login", {
                method: 'post',
                body: JSON.stringify(user),
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(function (response) { return response.json(); });
        };
    }
    /*findUserById(userId){
      return fetch("http://localhost:3000/api/user/"+userId)
        .then(response => response.json());
  
    }
  */
    UserServiceClient.prototype.profile = function () {
        return fetch('http://localhost:3000/api/profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch('http://localhost:3000/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.createUser = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return fetch("http://localhost:3000/api/user", {
            body: JSON.stringify(user),
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.updateUser = function (userId, user) {
        return fetch('http://localhost:3000/api/user/' + userId, {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.findUserByUsername = function (username) {
        return fetch(this.USER_URL + "/" + username, {
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserServiceClient);
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
        this.WIDGET_URL = "http://localhost:8080/api/topic/TOPIC_ID/widget";
    }
    WidgetServiceClient.prototype.findAllWidgetsForLesson = function (topicId) {
        return fetch(this.WIDGET_URL.replace('TOPIC_ID', topicId))
            .then(function (response) { return response.json(); });
    };
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.css":
/*!*******************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv{\r\n  background-color: #17aaf5;\r\n  border-color: darkorange;\r\n}\r\n\r\n.active.wbdv a {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.html":
/*!********************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills\">\r\n  <li class=\"nav-item\"\r\n      *ngFor = \"let topic of topics\">\r\n    <a class=\"nav-link wbdv\"\r\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topic.id}}\"\r\n       [ngClass] =\"{'active': topic.id == topicId}\">\r\n      {{topic.title}}\r\n    </a>\r\n  </li>\r\n\r\n</ul>\r\n<div class=\"mt-2 mb-3 p-2\" >\r\n  <app-widget-list></app-widget-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.ts":
/*!******************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.ts ***!
  \******************************************************/
/*! exports provided: TopicPillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPillsComponent", function() { return TopicPillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/topic.service.client */ "./src/app/services/topic.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicPillsComponent = /** @class */ (function () {
    function TopicPillsComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.courseId = '';
        this.moduleId = '';
        this.lessonId = '';
        this.topicId = '';
        this.topics = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    TopicPillsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.topicId = params['topicId'];
        this.loadTopicsForLesson(this.courseId, this.moduleId, this.lessonId);
    };
    TopicPillsComponent.prototype.loadTopicsForLesson = function (courseId, moduleId, lessonId) {
        var _this = this;
        this.service.findAllTopicsForLesson(courseId, moduleId, lessonId)
            .then(function (topics) { return _this.topics = topics; });
    };
    TopicPillsComponent.prototype.ngOnInit = function () {
    };
    TopicPillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-pills',
            template: __webpack_require__(/*! ./topic-pills.component.html */ "./src/app/topic-pills/topic-pills.component.html"),
            styles: [__webpack_require__(/*! ./topic-pills.component.css */ "./src/app/topic-pills/topic-pills.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__["TopicServiceClient"]])
    ], TopicPillsComponent);
    return TopicPillsComponent;
}());



/***/ }),

/***/ "./src/app/white-board/white-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/white-board/white-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/white-board/white-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/white-board/white-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: purple\">\r\n  <a class=\"navbar-brand\" href=\"#\"\r\n     style=\"color: wheat;\r\n     font-family: 'Comic Sans MS';\r\n      font-size: x-large\">WhiteBoard</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\r\n          data-target=\"#navbarTogglerDemo\" aria-controls=\"navbarTogglerDemo\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n           style=\"color: wheat\"\r\n           routerLink=\"/home\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n           style=\"color: wheat\"\r\n           routerLink=\"/profile\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item active disabled\" [hidden]=!loginVal>\r\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\" [hidden]=!loginVal>\r\n        <a class=\"nav-link\" [hidden]=!admin\r\n           style=\"color: wheat\"\r\n           routerLink=\"/admin\">Admin</a>\r\n      </li>\r\n    </ul>\r\n    <!--<form class=\"form-inline my-2 my-lg-0\">-->\r\n    <form [hidden]=!loginVal\r\n          class=\"form-inline mt-2 mt-md-0\">\r\n      <span class=\"navbar-text\">\r\n        Logged in as : </span>\r\n      <span style=\"color: dimgrey; font-weight: bold\">&nbsp;{{username}}\r\n      </span>\r\n      &nbsp;&nbsp;\r\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\"\r\n              (click)=\"logout()\">Logout\r\n      </button>\r\n    </form>\r\n\r\n    <form [hidden]=loginVal\r\n          class=\"form-inline mt-2 mt-md-0\">\r\n\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0 mr-2\"\r\n              style=\"color: wheat\"\r\n              routerLink=\"/login\">&nbsp;Login&nbsp;\r\n      </button>\r\n\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0\"\r\n              style=\"color: wheat\"\r\n              routerLink=\"/register\">Register\r\n      </button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<app-course-grid></app-course-grid>\r\n\r\n<!--\r\n<div class=\"container-fluid\">\r\n  <h1>\r\n    Welcome to White Board\r\n  </h1>\r\n\r\n  <a routerLink=\"/courses\">Course Navigator</a> |\r\n  <a routerLink=\"/courses/grid\">Course Grid</a> |\r\n  <a routerLink=\"/login\">Login</a> |\r\n  <a routerLink=\"/register\">Register</a>|\r\n  <a routerLink=\"/admin\">Admin</a>|\r\n  <a routerLink=\"/profile\">Profile</a>\r\n  <router-outlet></router-outlet>\r\n\r\n &lt;!&ndash; <app-course-grid></app-course-grid>&ndash;&gt;\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/white-board/white-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/white-board/white-board.component.ts ***!
  \******************************************************/
/*! exports provided: WhiteBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardComponent", function() { return WhiteBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WhiteBoardComponent = /** @class */ (function () {
    function WhiteBoardComponent(service, router) {
        this.service = service;
        this.router = router;
        this.admin = false;
        this.loginVal = false;
    }
    WhiteBoardComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    WhiteBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            console.log('logged in as : ', user);
            _this.username = user.username;
            if (_this.username !== 'No session maintained') {
                _this.loginVal = true;
            }
            if (_this.username === 'admin') {
                _this.admin = true;
            }
        });
    };
    WhiteBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-white-board',
            template: __webpack_require__(/*! ./white-board.component.html */ "./src/app/white-board/white-board.component.html"),
            styles: [__webpack_require__(/*! ./white-board.component.css */ "./src/app/white-board/white-board.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WhiteBoardComponent);
    return WhiteBoardComponent;
}());



/***/ }),

/***/ "./src/app/widget-list/widget-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let widget of widgets\">\r\n  <div [ngSwitch]=\"widget.widgetType\">\r\n    <div *ngSwitchCase=\"'HEADING'\">\r\n      <div [ngSwitch]=\"widget.size\">\r\n        <h1 *ngSwitchCase=\"'1'\">Heading Widget : <span style=\"color: orangered;\">{{widget.text}}</span></h1>\r\n        <h2 *ngSwitchCase=\"'2'\">Heading Widget : <span style=\"color: orangered;\">{{widget.text}}</span></h2>\r\n        <h3 *ngSwitchCase=\"'3'\">Heading Widget : <span style=\"color: orangered;\">{{widget.text}}</span></h3>\r\n        <h4 *ngSwitchCase=\"'4'\">Heading Widget : <span style=\"color: orangered;\">{{widget.text}}</span></h4>\r\n\r\n        <br/>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'LINK'\">\r\n      <a href=\"{{widget.href}}\">{{widget.text}}</a>\r\n      <br/>\r\n    </div>\r\n    <div *ngSwitchCase=\"'IMAGE'\">\r\n      <img src=\"{{widget.src}}\" alt=\"image\" class=\"shadow rounded card p-2\" height=\"250px\" />\r\n      <br/>\r\n    </div>\r\n    <div *ngSwitchCase=\"'LIST'\">\r\n      <h4>List Widget</h4>\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item bg-light\"\r\n            *ngFor=\"let item of widget.listItems.split('\\n')\">\r\n          {{item}}\r\n        </li>\r\n      </ul>\r\n      <br/>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.ts ***!
  \******************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.widgets = [];
        this.route.params.subscribe(function (params) { return _this.setContext(params); });
    }
    WidgetListComponent.prototype.setContext = function (params) {
        this.context = params;
        this.loadWidgets(params.topicId);
    };
    WidgetListComponent.prototype.loadWidgets = function (topicId) {
        var _this = this;
        this.service.findAllWidgetsForLesson(topicId)
            .then(function (widgets) { return _this.widgets = widgets; });
    };
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetServiceClient"]])
    ], WidgetListComponent);
    return WidgetListComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sroyt\OneDrive\Desktop\Webdev\Assignment4\webdev-summer2-2018-client-angular-surupac\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map