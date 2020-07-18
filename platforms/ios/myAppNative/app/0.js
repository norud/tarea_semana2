(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/news/news-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function() { return NewsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/news/news.component.ts");



var routes = [
    { path: "", component: _news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"] }
];
var NewsRoutingModule = /** @class */ (function () {
    function NewsRoutingModule() {
    }
    NewsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], NewsRoutingModule);
    return NewsRoutingModule;
}());



/***/ }),

/***/ "./app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"News\"></Label>\n</ActionBar>\n\n<PullToRefresh (refresh)=\"onPull($event)\">\n    <Label class=\"page__content-icon fas\" text=\"&#xf101;\"></Label>\n    <ListView [items]=\"this.news.buscar()\" (itemTap)=\"onItemTapNews('/news/detalles')\" class=\"list-group\"\n    style=\"height: 1250px;\">\n        <ng-template let-item=\"item\" >\n            <!-- The item template can only have a single root view container (e.g. GridLayout, StackLayout, etc.)-->\n            <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n                <Image src=\"res://icon\" class=\"thumb img-circle\"></Image>\n                <Label [text]=\"item\" class=\"list-group-item-heading\"\n                verticalAlignment=\"center\" style=\"width: 60%; font-size: 20px; \" ></Label>\n                <Button text=\"Eleiminar\" (tap)=\"onDelete(item)\" class=\" btn-danger\"></Button>\n            </FlexboxLayout>\n        </ng-template>\n    </ListView>\n</PullToRefresh>\n"

/***/ }),

/***/ "./app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _servicios_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/servicios/news.service.ts");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tns-core-modules/ui/dialogs");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_toasts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-toasts/index.js");
/* harmony import */ var nativescript_toasts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_toasts__WEBPACK_IMPORTED_MODULE_5__);






var NewsComponent = /** @class */ (function () {
    function NewsComponent(news, routerExtensions) {
        this.news = news;
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject providers.
    }
    NewsComponent.prototype.onPull = function (e) {
        var _this = this;
        console.log(e);
        var pullRefresh = e.object;
        setTimeout(function () {
            _this.news.crear('new add more');
            _this.news.crear('new add more');
            _this.news.crear('new add more');
            _this.news.crear('new add more');
            _this.news.crear('new add more');
            pullRefresh.refreshing = false;
        }, 1000);
    };
    NewsComponent.prototype.doLater = function (fn) { setTimeout(fn, 1000); };
    NewsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        //console.log(this.news.colores());
        this.news.crear('New 1 Angular update to 10');
        this.news.crear('New 2 App for Iphone and Android');
        this.news.crear('New 3 Nodejs');
        this.news.crear('New 4 MongoDB');
        //console.log(this.news.buscar());
    };
    NewsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    NewsComponent.prototype.onItemTapNews = function (n) {
        console.log(n);
        this.routerExtensions.navigate([n], {
            transition: {
                name: "fade"
            }
        });
    };
    NewsComponent.prototype.onDelete = function (v) {
        var _this = this;
        console.log(v);
        var toastOptions = {
            text: "El registo '" + v + "' fue borrado",
            duration: nativescript_toasts__WEBPACK_IMPORTED_MODULE_5__["DURATION"].SHORT,
            position: nativescript_toasts__WEBPACK_IMPORTED_MODULE_5__["POSITION"].TOP //optional propert
        };
        this.doLater(function () {
            tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["action"]("Seguro que quiere borrar?", "Cancelar!", ["Si", "No"])
                .then(function (result) {
                if (result === "Si") {
                    _this.doLater(function () { return nativescript_toasts__WEBPACK_IMPORTED_MODULE_5__["show"](toastOptions); });
                    /* this.doLater(() =>
                     dialogs.alert({
                         title: "Se ha borrado",
                         message: "El registo '" + v + "' fue borrado",
                         okButtonText: "Ok"
                     }).then(() => console.log("Cerrado 1!")));*/
                    //procedemos a borrar en el array el dato que pasa en v
                    _this.news.borrar(v);
                }
                else if (result === "No") {
                    _this.doLater(function () {
                        return tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["alert"]({
                            title: "Operacion Cancelada!",
                            message: "El registo '" + v + "' no fue borrado",
                            okButtonText: "ok"
                        }).then(function () { return console.log("Cerrado 2!"); });
                    });
                }
            });
        });
        //console.log(this.news.borrar(v));
    };
    NewsComponent.ctorParameters = function () { return [
        { type: _servicios_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "News",
            template: __webpack_require__("./app/news/news.component.html"),
        }),
        __metadata("design:paramtypes", [_servicios_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./app/news/news.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/news/news-routing.module.ts");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/news/news.component.ts");




var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _news_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewsRoutingModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]
            ],
            declarations: [
                _news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbmV3cy9uZXdzLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9uZXdzL25ld3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL25ld3MvbmV3cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL25ld3MvbmV3cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5Qiw2MEJBQTYwQix5SkFBeUosNGNBQTRjLGlCQUFpQiw4TTs7Ozs7Ozs7QUNBbjhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBRUU7QUFDSTtBQUNPO0FBQ1I7QUFDVjtBQU03QztJQWNJLHVCQUFvQixJQUFpQixFQUFVLGdCQUFrQztRQUE3RCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM3RSxxREFBcUQ7SUFDekQsQ0FBQztJQWRELDhCQUFNLEdBQU4sVUFBTyxDQUFDO1FBQVIsaUJBV0k7UUFWQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FB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QkFKeEMsQ0FJd0MsQ0FBQyxDQUFDO2lCQUU3QztZQUNMLENBQUMsQ0FBQztRQUVOLENBQUMsQ0FBQyxDQUFDO1FBQ0gsbUNBQW1DO0lBRXZDLENBQUM7O2dCQWpFeUIsbUVBQVc7Z0JBQTRCLDRFQUFnQjs7SUFkeEUsYUFBYTtRQUp6QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsK0RBQW9DO1NBQ3ZDLENBQUM7eUNBZTRCLG1FQUFXLEVBQTRCLDRFQUFnQjtPQWR4RSxhQUFhLENBZ0Z6QjtJQUFELG9CQUFDO0NBQUE7QUFoRnlCOzs7Ozs7Ozs7QUNaMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBRWQ7QUFDUjtBQWVqRDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBWnRCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsc0VBQWlCO2dCQUNqQixvRkFBd0I7YUFDM0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNkRBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBOZXdzQ29tcG9uZW50IH0gZnJvbSBcIi4vbmV3cy5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IE5ld3NDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTmV3c1JvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhcj5cXG4gICAgPCEtLVxcbiAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxcbiAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXFxuICAgIC0tPlxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8IS0tXFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxcbiAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXFxuICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cXG4gICAgLS0+XFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcInJlczovL21lbnVcXFwiIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXG4gICAgICAgIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCI+XFxuICAgIDwvQWN0aW9uSXRlbT5cXG4gICAgPExhYmVsIHRleHQ9XFxcIk5ld3NcXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPFB1bGxUb1JlZnJlc2ggKHJlZnJlc2gpPVxcXCJvblB1bGwoJGV2ZW50KVxcXCI+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwicGFnZV9fY29udGVudC1pY29uIGZhc1xcXCIgdGV4dD1cXFwiJiN4ZjEwMTtcXFwiPjwvTGFiZWw+XFxuICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJ0aGlzLm5ld3MuYnVzY2FyKClcXFwiIChpdGVtVGFwKT1cXFwib25JdGVtVGFwTmV3cygnL25ld3MvZGV0YWxsZXMnKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiXFxuICAgIHN0eWxlPVxcXCJoZWlnaHQ6IDEyNTBweDtcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiA+XFxuICAgICAgICAgICAgPCEtLSBUaGUgaXRlbSB0ZW1wbGF0ZSBjYW4gb25seSBoYXZlIGEgc2luZ2xlIHJvb3QgdmlldyBjb250YWluZXIgKGUuZy4gR3JpZExheW91dCwgU3RhY2tMYXlvdXQsIGV0Yy4pLS0+XFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwicm93XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vaWNvblxcXCIgY2xhc3M9XFxcInRodW1iIGltZy1jaXJjbGVcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW1cXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0taGVhZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcIndpZHRoOiA2MCU7IGZvbnQtc2l6ZTogMjBweDsgXFxcIiA+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJFbGVpbWluYXJcXFwiICh0YXApPVxcXCJvbkRlbGV0ZShpdGVtKVxcXCIgY2xhc3M9XFxcIiBidG4tZGFuZ2VyXFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L0xpc3RWaWV3PlxcbjwvUHVsbFRvUmVmcmVzaD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgTmV3c1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljaW9zL25ld3Muc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdHNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTmV3c1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbmV3cy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBOZXdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG9uUHVsbChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBjb25zdCBwdWxsUmVmcmVzaCA9IGUub2JqZWN0O1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5uZXdzLmNyZWFyKCduZXcgYWRkIG1vcmUnKTtcbiAgICAgICAgdGhpcy5uZXdzLmNyZWFyKCduZXcgYWRkIG1vcmUnKTtcbiAgICAgICAgdGhpcy5uZXdzLmNyZWFyKCduZXcgYWRkIG1vcmUnKTtcbiAgICAgICAgdGhpcy5uZXdzLmNyZWFyKCduZXcgYWRkIG1vcmUnKTtcbiAgICAgICAgdGhpcy5uZXdzLmNyZWFyKCduZXcgYWRkIG1vcmUnKTtcbiAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXdzOiBOZXdzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuICAgIGRvTGF0ZXIoZm4peyBzZXRUaW1lb3V0KGZuLCAxMDAwKX1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm5ld3MuY29sb3JlcygpKTtcblxuICAgICAgICB0aGlzLm5ld3MuY3JlYXIoJ05ldyAxIEFuZ3VsYXIgdXBkYXRlIHRvIDEwJyk7XG4gICAgICAgIHRoaXMubmV3cy5jcmVhcignTmV3IDIgQXBwIGZvciBJcGhvbmUgYW5kIEFuZHJvaWQnKTtcbiAgICAgICAgdGhpcy5uZXdzLmNyZWFyKCdOZXcgMyBOb2RlanMnKTtcbiAgICAgICAgdGhpcy5uZXdzLmNyZWFyKCdOZXcgNCBNb25nb0RCJyk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5uZXdzLmJ1c2NhcigpKTtcblxuXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgIG9uSXRlbVRhcE5ld3Mobik6dm9pZHtcbiAgICAgICAgY29uc29sZS5sb2cobik7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbl0sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgb25EZWxldGUodik6dm9pZHtcbiAgICAgICAgY29uc29sZS5sb2codik7XG4gICAgICAgIGNvbnN0IHRvYXN0T3B0aW9uczogVG9hc3QuVG9hc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgdGV4dDogXCJFbCByZWdpc3RvICdcIiArIHYgKyBcIicgZnVlIGJvcnJhZG9cIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiBUb2FzdC5EVVJBVElPTi5TSE9SVCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBUb2FzdC5QT1NJVElPTi5UT1AgLy9vcHRpb25hbCBwcm9wZXJ0XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kb0xhdGVyKCgpID0+IHtcbiAgICAgICAgICAgIGRpYWxvZ3MuYWN0aW9uKFwiU2VndXJvIHF1ZSBxdWllcmUgYm9ycmFyP1wiLCBcIkNhbmNlbGFyIVwiLCBbXCJTaVwiLCBcIk5vXCJdKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCA9PT0gXCJTaVwiKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0xhdGVyKCgpID0+IFRvYXN0LnNob3codG9hc3RPcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgICAgLyogdGhpcy5kb0xhdGVyKCgpID0+XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2UgaGEgYm9ycmFkb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCByZWdpc3RvICdcIiArIHYgKyBcIicgZnVlIGJvcnJhZG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJDZXJyYWRvIDEhXCIpKSk7Ki9cbiAgICAgICAgICAgICAgICAgICAgLy9wcm9jZWRlbW9zIGEgYm9ycmFyIGVuIGVsIGFycmF5IGVsIGRhdG8gcXVlIHBhc2EgZW4gdlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld3MuYm9ycmFyKHYpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdCA9PT0gXCJOb1wiICl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9MYXRlcigoKSA9PlxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9wZXJhY2lvbiBDYW5jZWxhZGEhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVsIHJlZ2lzdG8gJ1wiICsgdiArIFwiJyBubyBmdWUgYm9ycmFkb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIm9rXCJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIkNlcnJhZG8gMiFcIikpKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5uZXdzLmJvcnJhcih2KSk7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBOZXdzUm91dGluZ01vZHVsZSB9IGZyb20gJy4vbmV3cy1yb3V0aW5nLm1vZHVsZSdcbmltcG9ydCB7IE5ld3NDb21wb25lbnQgfSBmcm9tICcuL25ld3MuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmV3c1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE5ld3NDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmV3c01vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=