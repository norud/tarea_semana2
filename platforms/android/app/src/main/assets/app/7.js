(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[7],{

/***/ "./app/news/news-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function() { return NewsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _servicios_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/servicios/news.service.ts");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbmV3cy9uZXdzLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9uZXdzL25ld3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL25ld3MvbmV3cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL25ld3MvbmV3cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRXRCO0FBRWpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkRBQWEsRUFBRTtDQUN6QyxDQUFDO0FBTUY7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQUo3Qiw4REFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3BDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkOUIsNjBCQUE2MEIseUpBQXlKLDRjQUE0YyxpQkFBaUIsOE07Ozs7Ozs7O0FDQW44QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFFRTtBQUNJO0FBQ087QUFDUjtBQUNWO0FBTTdDO0lBY0ksdUJBQW9CLElBQWlCLEVBQVUsZ0JBQWtDO1FBQTdELFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzdFLHFEQUFxRDtJQUN6RCxDQUFDO0lBZEQsOEJBQU0sR0FBTixVQUFPLENBQUM7UUFBUixpQkFXSTtRQVZBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFNLFdB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QkFFN0M7WUFDTCxDQUFDLENBQUM7UUFFTixDQUFDLENBQUMsQ0FBQztRQUNILG1DQUFtQztJQUV2QyxDQUFDOztnQkE1RHlCLG1FQUFXO2dCQUE0Qiw0RUFBZ0I7O0lBZHhFLGFBQWE7UUFKekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLCtEQUFvQztTQUN2QyxDQUFDO3lDQWU0QixtRUFBVyxFQUE0Qiw0RUFBZ0I7T0FkeEUsYUFBYSxDQTJFekI7SUFBRCxvQkFBQztDQUFBO0FBM0V5Qjs7Ozs7Ozs7O0FDWjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ1k7QUFFZDtBQUNSO0FBZWpEO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFadEIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxzRUFBaUI7Z0JBQ2pCLG9GQUF3QjthQUMzQjtZQUNELFlBQVksRUFBRTtnQkFDViw2REFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IE5ld3NDb21wb25lbnQgfSBmcm9tIFwiLi9uZXdzLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogTmV3c0NvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdzUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyPlxcbiAgICA8IS0tXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXG4gICAgLS0+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwhLS1cXG4gICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXFxuICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcXG4gICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxcbiAgICAtLT5cXG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgYW5kcm9pZDp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIlxcbiAgICAgICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIj5cXG4gICAgPC9BY3Rpb25JdGVtPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiTmV3c1xcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG5cXG48UHVsbFRvUmVmcmVzaCAocmVmcmVzaCk9XFxcIm9uUHVsbCgkZXZlbnQpXFxcIj5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJwYWdlX19jb250ZW50LWljb24gZmFzXFxcIiB0ZXh0PVxcXCImI3hmMTAxO1xcXCI+PC9MYWJlbD5cXG4gICAgPExpc3RWaWV3IFtpdGVtc109XFxcInRoaXMubmV3cy5idXNjYXIoKVxcXCIgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXBOZXdzKCcvbmV3cy9kZXRhbGxlcycpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCJcXG4gICAgc3R5bGU9XFxcImhlaWdodDogMTI1MHB4O1xcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiID5cXG4gICAgICAgICAgICA8IS0tIFRoZSBpdGVtIHRlbXBsYXRlIGNhbiBvbmx5IGhhdmUgYSBzaW5nbGUgcm9vdCB2aWV3IGNvbnRhaW5lciAoZS5nLiBHcmlkTGF5b3V0LCBTdGFja0xheW91dCwgZXRjLiktLT5cXG4gICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJyb3dcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9pY29uXFxcIiBjbGFzcz1cXFwidGh1bWIgaW1nLWNpcmNsZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBzdHlsZT1cXFwid2lkdGg6IDYwJTsgZm9udC1zaXplOiAyMHB4OyBcXFwiID48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkVsZWltaW5hclxcXCIgKHRhcCk9XFxcIm9uRGVsZXRlKGl0ZW0pXFxcIiBjbGFzcz1cXFwiIGJ0bi1kYW5nZXJcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvTGlzdFZpZXc+XFxuPC9QdWxsVG9SZWZyZXNoPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBOZXdzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNpb3MvbmV3cy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJOZXdzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9uZXdzLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIE5ld3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgb25QdWxsKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIGNvbnN0IHB1bGxSZWZyZXNoID0gZS5vYmplY3Q7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm5ld3MuY3JlYXIoJ25ldyBhZGQgbW9yZScpO1xuICAgICAgICB0aGlzLm5ld3MuY3JlYXIoJ25ldyBhZGQgbW9yZScpO1xuICAgICAgICB0aGlzLm5ld3MuY3JlYXIoJ25ldyBhZGQgbW9yZScpO1xuICAgICAgICB0aGlzLm5ld3MuY3JlYXIoJ25ldyBhZGQgbW9yZScpO1xuICAgICAgICB0aGlzLm5ld3MuY3JlYXIoJ25ldyBhZGQgbW9yZScpO1xuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ld3M6IE5ld3NTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG4gICAgZG9MYXRlcihmbil7IHNldFRpbWVvdXQoZm4sIDEwMDApfVxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICAgICAgdGhpcy5uZXdzLmNyZWFyKCdOZXcgMSBBbmd1bGFyIHVwZGF0ZSB0byAxMCcpO1xuICAgICAgICB0aGlzLm5ld3MuY3JlYXIoJ05ldyAyIEFwcCBmb3IgSXBob25lIGFuZCBBbmRyb2lkJyk7XG4gICAgICAgIHRoaXMubmV3cy5jcmVhcignTmV3IDMgTm9kZWpzJyk7XG4gICAgICAgIHRoaXMubmV3cy5jcmVhcignTmV3IDQgTW9uZ29EQicpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubmV3cy5idXNjYXIoKSk7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgIG9uSXRlbVRhcE5ld3Mobik6dm9pZHtcbiAgICAgICAgY29uc29sZS5sb2cobik7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbl0sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgb25EZWxldGUodik6dm9pZHtcbiAgICAgICAgY29uc29sZS5sb2codik7XG4gICAgICAgIGNvbnN0IHRvYXN0T3B0aW9uczogVG9hc3QuVG9hc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgdGV4dDogXCJFbCByZWdpc3RvICdcIiArIHYgKyBcIicgZnVlIGJvcnJhZG9cIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiBUb2FzdC5EVVJBVElPTi5TSE9SVCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBUb2FzdC5QT1NJVElPTi5UT1AgLy9vcHRpb25hbCBwcm9wZXJ0XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kb0xhdGVyKCgpID0+IHtcbiAgICAgICAgICAgIGRpYWxvZ3MuYWN0aW9uKFwiU2VndXJvIHF1ZSBxdWllcmUgYm9ycmFyP1wiLCBcIkNhbmNlbGFyIVwiLCBbXCJTaVwiLCBcIk5vXCJdKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCA9PT0gXCJTaVwiKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0xhdGVyKCgpID0+IFRvYXN0LnNob3codG9hc3RPcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgICAgLyogdGhpcy5kb0xhdGVyKCgpID0+XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2UgaGEgYm9ycmFkb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCByZWdpc3RvICdcIiArIHYgKyBcIicgZnVlIGJvcnJhZG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJDZXJyYWRvIDEhXCIpKSk7Ki9cbiAgICAgICAgICAgICAgICAgICAgLy9wcm9jZWRlbW9zIGEgYm9ycmFyIGVuIGVsIGFycmF5IGVsIGRhdG8gcXVlIHBhc2EgZW4gdlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld3MuYm9ycmFyKHYpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdCA9PT0gXCJOb1wiICl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9MYXRlcigoKSA9PlxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9wZXJhY2lvbiBDYW5jZWxhZGEhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVsIHJlZ2lzdG8gJ1wiICsgdiArIFwiJyBubyBmdWUgYm9ycmFkb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIm9rXCJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIkNlcnJhZG8gMiFcIikpKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5uZXdzLmJvcnJhcih2KSk7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBOZXdzUm91dGluZ01vZHVsZSB9IGZyb20gJy4vbmV3cy1yb3V0aW5nLm1vZHVsZSdcbmltcG9ydCB7IE5ld3NDb21wb25lbnQgfSBmcm9tICcuL25ld3MuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmV3c1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE5ld3NDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmV3c01vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=