(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[4],{

/***/ "./app/celulares/celulares-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelularesRoutingModule", function() { return CelularesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _celulares_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/celulares/celulares.component.ts");



var routes = [
    { path: "", component: _celulares_component__WEBPACK_IMPORTED_MODULE_2__["CelularesComponent"] }
];
var CelularesRoutingModule = /** @class */ (function () {
    function CelularesRoutingModule() {
    }
    CelularesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], CelularesRoutingModule);
    return CelularesRoutingModule;
}());



/***/ }),

/***/ "./app/celulares/celulares.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Celulares\"></Label>\n</ActionBar>\n\n<StackLayout class=\"page__content\">\n    <Label class=\"page__content-icon fas\" text=\"&#xf10b;\"></Label>\n    <ListView [items]=\"this.celular.buscar()\" (itemTap)=\"onItemTap($event)\" class=\"list-group\"\n    style=\"height: 1250px;\">\n        <ng-template let-item=\"item\" >\n            <!-- The item template can only have a single root view container (e.g. GridLayout, StackLayout, etc.)-->\n            <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n                <Image src=\"res://icon\" class=\"thumb img-circle\"></Image>\n                <Label [text]=\"item\" class=\"list-group-item-heading\"\n                verticalAlignment=\"center\" style=\"width: 60%; font-size: 20px; \"></Label>\n            </FlexboxLayout>\n        </ng-template>\n    </ListView>\n</StackLayout>\n"

/***/ }),

/***/ "./app/celulares/celulares.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelularesComponent", function() { return CelularesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _servicios_cel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/servicios/cel.service.ts");



var CelularesComponent = /** @class */ (function () {
    function CelularesComponent(celular) {
        this.celular = celular;
        // Use the component constructor to inject providers.
    }
    CelularesComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.celular.agregar('Iphone 6');
        this.celular.agregar('Iphone 7');
        this.celular.agregar('Iphone 11');
        //console.log(this.celular.buscar());
    };
    CelularesComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    CelularesComponent.prototype.onItemTap = function (x) {
        console.log(x);
    };
    CelularesComponent.ctorParameters = function () { return [
        { type: _servicios_cel_service__WEBPACK_IMPORTED_MODULE_2__["CelularesService"] }
    ]; };
    CelularesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Celulares",
            template: __webpack_require__("./app/celulares/celulares.component.html")
        }),
        __metadata("design:paramtypes", [_servicios_cel_service__WEBPACK_IMPORTED_MODULE_2__["CelularesService"]])
    ], CelularesComponent);
    return CelularesComponent;
}());



/***/ }),

/***/ "./app/celulares/celulares.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelularesModule", function() { return CelularesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _celulares_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/celulares/celulares-routing.module.ts");
/* harmony import */ var _celulares_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/celulares/celulares.component.ts");




var CelularesModule = /** @class */ (function () {
    function CelularesModule() {
    }
    CelularesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _celulares_component__WEBPACK_IMPORTED_MODULE_3__["CelularesComponent"]
            ],
            imports: [
                _celulares_routing_module__WEBPACK_IMPORTED_MODULE_2__["CelularesRoutingModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], CelularesModule);
    return CelularesModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2VsdWxhcmVzL2NlbHVsYXJlcy1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2VsdWxhcmVzL2NlbHVsYXJlcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2VsdWxhcmVzL2NlbHVsYXJlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NlbHVsYXJlcy9jZWx1bGFyZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRVo7QUFFM0QsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSx1RUFBa0IsRUFBRTtDQUM5QyxDQUFDO0FBTUY7SUFBQTtJQUFzQyxDQUFDO0lBQTFCLHNCQUFzQjtRQUpsQyw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxzQkFBc0IsQ0FBSTtJQUFELDZCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkbkMsMjBCQUEyMEIsOElBQThJLDRjQUE0YyxpQkFBaUIsc0c7Ozs7Ozs7O0FDQXQ3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUVFO0FBQ1E7QUFNNUQ7SUFFSSw0QkFBb0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekMscURBQXFEO0lBQ3pELENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xDLHFDQUFxQztJQUV6QyxDQUFDO0lBRUQsOENBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLHdFQUFlLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELHNDQUFTLEdBQVQsVUFBVSxDQUFDO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuQixDQUFDOztnQkFwQjRCLHVFQUFnQjs7SUFGcEMsa0JBQWtCO1FBSjlCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQix5RUFBeUM7U0FDNUMsQ0FBQzt5Q0FHK0IsdUVBQWdCO09BRnBDLGtCQUFrQixDQXVCOUI7SUFBRCx5QkFBQztDQUFBO0FBdkI4Qjs7Ozs7Ozs7O0FDVC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDWTtBQUVIO0FBQ1Q7QUFZM0Q7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFWM0IsOERBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWix1RUFBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZ0ZBQXNCO2dCQUN0QixvRkFBd0I7YUFDekI7WUFDRCxPQUFPLEVBQUUsQ0FBQyw4REFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IENlbHVsYXJlc0NvbXBvbmVudCB9IGZyb20gXCIuL2NlbHVsYXJlcy5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IENlbHVsYXJlc0NvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2VsdWxhcmVzUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyPlxcbiAgICA8IS0tXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXG4gICAgLS0+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwhLS1cXG4gICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXFxuICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcXG4gICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxcbiAgICAtLT5cXG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgYW5kcm9pZDp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIlxcbiAgICAgICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIj5cXG4gICAgPC9BY3Rpb25JdGVtPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiQ2VsdWxhcmVzXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxTdGFja0xheW91dCBjbGFzcz1cXFwicGFnZV9fY29udGVudFxcXCI+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwicGFnZV9fY29udGVudC1pY29uIGZhc1xcXCIgdGV4dD1cXFwiJiN4ZjEwYjtcXFwiPjwvTGFiZWw+XFxuICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJ0aGlzLmNlbHVsYXIuYnVzY2FyKClcXFwiIChpdGVtVGFwKT1cXFwib25JdGVtVGFwKCRldmVudClcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIlxcbiAgICBzdHlsZT1cXFwiaGVpZ2h0OiAxMjUwcHg7XFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgPlxcbiAgICAgICAgICAgIDwhLS0gVGhlIGl0ZW0gdGVtcGxhdGUgY2FuIG9ubHkgaGF2ZSBhIHNpbmdsZSByb290IHZpZXcgY29udGFpbmVyIChlLmcuIEdyaWRMYXlvdXQsIFN0YWNrTGF5b3V0LCBldGMuKS0tPlxcbiAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcInJvd1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInJlczovL2ljb25cXFwiIGNsYXNzPVxcXCJ0aHVtYiBpbWctY2lyY2xlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNjAlOyBmb250LXNpemU6IDIwcHg7IFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L0xpc3RWaWV3PlxcbjwvU3RhY2tMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IENlbHVsYXJlc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljaW9zL2NlbC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkNlbHVsYXJlc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2VsdWxhcmVzLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQ2VsdWxhcmVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2VsdWxhcjogQ2VsdWxhcmVzU2VydmljZSkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICAgICAgdGhpcy5jZWx1bGFyLmFncmVnYXIoJ0lwaG9uZSA2Jyk7XG4gICAgICAgIHRoaXMuY2VsdWxhci5hZ3JlZ2FyKCdJcGhvbmUgNycpO1xuICAgICAgICB0aGlzLmNlbHVsYXIuYWdyZWdhcignSXBob25lIDExJyk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jZWx1bGFyLmJ1c2NhcigpKTtcblxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbiAgICBvbkl0ZW1UYXAoeCk6dm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHgpO1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgQ2VsdWxhcmVzUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY2VsdWxhcmVzLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IENlbHVsYXJlc0NvbXBvbmVudCB9IGZyb20gXCIuL2NlbHVsYXJlcy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2VsdWxhcmVzQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDZWx1bGFyZXNSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQ2VsdWxhcmVzTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==