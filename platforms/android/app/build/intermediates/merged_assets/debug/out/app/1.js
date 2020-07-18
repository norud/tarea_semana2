(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

/***/ "./app/search/minlen.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLenDirective", function() { return MinLenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");


var MinLenDirective = /** @class */ (function () {
    function MinLenDirective() {
        //
    }
    MinLenDirective_1 = MinLenDirective;
    MinLenDirective.prototype.validate = function (control) {
        return !control.value || control.value.length >= (this.minlen
            || 2) ? null : { minlen: true };
    };
    var MinLenDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MinLenDirective.prototype, "minlen", void 0);
    MinLenDirective = MinLenDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[minlen]",
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: MinLenDirective_1,
                    multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], MinLenDirective);
    return MinLenDirective;
}());



/***/ }),

/***/ "./app/search/search-form.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout flexDirection=\"row\">\n\n    <TextField #texto=\"ngModel\" [(ngModel)]=\"textFieldValue\"\n                hint=\"Ingresar texto...\" required minlen=\"4\">\n    </TextField>\n    <Label *ngIf=\"texto.hasError('required')\" text=\"* req\"></Label>\n    <Label *ngIf=\"!texto.hasError('required') && texto.hasError('minlen')\" text=\"4+\"></Label>\n\n</FlexboxLayout>\n<Button text=\"Buscar!\" (tap)=\"onSearchTap()\" *ngIf=\"texto.valid\"></Button>\n\n"

/***/ }),

/***/ "./app/search/search-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent() {
        this.textFieldValue = "";
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchFormComponent.prototype.ngOnInit = function () {
        this.textFieldValue = this.inicial;
    };
    SearchFormComponent.prototype.onSearchTap = function () {
        console.log(this.textFieldValue);
        if (this.textFieldValue.length > 2) {
            this.search.emit(this.textFieldValue);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchFormComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchFormComponent.prototype, "inicial", void 0);
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "SearchForm",
            template: __webpack_require__("./app/search/search-form.component.html")
        })
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./app/search/search-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/search/search.component.ts");



var routes = [
    { path: "", component: _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Search\"></Label>\n</ActionBar>\n\n<StackLayout class=\"page__content\" #layout>\n    <Label class=\"page__content-icon fas\" text=\"&#xf002;\"></Label>\n    <SearchForm (search) = \"searchResult($event)\"\n    [inicial]=\"'Iphone'\"></SearchForm>\n    <ListView [items]=\"this.resultados\" (itemTap)=\"onItemTap($event)\" class=\"list-group\"\n    style=\"height: 1250px;\" >\n        <ng-template let-item=\"item\" >\n            <!-- The item template can only have a single root view container (e.g. GridLayout, StackLayout, etc.)-->\n            <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n                <Image src=\"res://icon\" class=\"thumb img-circle\"></Image>\n                <Label [text]=\"item\" class=\"list-group-item-heading\"\n                verticalAlignment=\"center\" style=\"width: 60%; font-size: 20px; \"></Label>\n            </FlexboxLayout>\n        </ng-template>\n    </ListView>\n\n</StackLayout>\n\n"

/***/ }),

/***/ "./app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _servicios_cel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/servicios/cel.service.ts");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__);




var SearchComponent = /** @class */ (function () {
    function SearchComponent(celular) {
        this.celular = celular;
        // Use the component constructor to inject providers.
    }
    SearchComponent.prototype.cambio = function (e) {
        var indicator = e.object;
        console.log("indicator.busy: " + indicator.busy);
    };
    SearchComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.celular.agregar('Iphone 6');
        this.celular.agregar('Sansumg ');
        this.celular.agregar('Iphone 11');
    };
    SearchComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    SearchComponent.prototype.searchResult = function (s) {
        this.resultados = this.celular.buscar()
            .filter(function (x) { return x.indexOf(s) >= 0; });
        var layout = this.layout.nativeElement;
        layout.animate({
            backgroundColor: new tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Color"]("red"),
            duration: 300,
            delay: 150,
            opacity: 0.6
        }).then(function () { return layout.animate({
            backgroundColor: new tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Color"]("white"),
            duration: 300,
            delay: 150,
            opacity: 1
        }); });
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _servicios_cel_service__WEBPACK_IMPORTED_MODULE_2__["CelularesService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("layout", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchComponent.prototype, "layout", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Search",
            template: __webpack_require__("./app/search/search.component.html")
        }),
        __metadata("design:paramtypes", [_servicios_cel_service__WEBPACK_IMPORTED_MODULE_2__["CelularesService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./app/search/search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/search/search-routing.module.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/search/search.component.ts");
/* harmony import */ var _search_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/search/search-form.component.ts");
/* harmony import */ var _minlen_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/search/minlen.validator.ts");







var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_3__["SearchRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"]
            ],
            declarations: [
                _search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
                _search_form_component__WEBPACK_IMPORTED_MODULE_5__["SearchFormComponent"],
                _minlen_validator__WEBPACK_IMPORTED_MODULE_6__["MinLenDirective"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL21pbmxlbi52YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2gtZm9ybS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC1mb3JtLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlYXJjaC9zZWFyY2gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBRTBCO0FBT3hFO0lBRUM7UUFDQSxFQUFFO0lBQ0YsQ0FBQzt3QkFKVyxlQUFlO0lBSzNCLGtDQUFRLEdBQVIsVUFBUyxPQUF3QjtRQUNqQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2VBQzNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7O0lBUFE7UUFBUiwyREFBSyxFQUFFOzttREFBZ0I7SUFEWixlQUFlO1FBTDlCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSw0REFBYSxFQUFFLFdBQVcsRUFBRSxpQkFBZTtvQkFDbEUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO1NBQ1osQ0FBQzs7T0FDVyxlQUFlLENBUzNCO0lBQUQsc0JBQUM7Q0FBQTtBQVQyQjs7Ozs7Ozs7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SW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbbWlubGVuXVwiLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogTWluTGVuRGlyZWN0aXZlLFxuICAgbXVsdGk6IHRydWV9XVxuICAgfSlcbiAgIGV4cG9ydCBjbGFzcyBNaW5MZW5EaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIEBJbnB1dCgpIG1pbmxlbjogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vXG4gICAgfVxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gIWNvbnRyb2wudmFsdWUgfHwgY29udHJvbC52YWx1ZS5sZW5ndGggPj0gKHRoaXMubWlubGVuXG4gICB8fCAyKSA/IG51bGwgOiB7IG1pbmxlbjogdHJ1ZSB9O1xuICAgIH1cbiAgIH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJyb3dcXFwiPlxcblxcbiAgICA8VGV4dEZpZWxkICN0ZXh0bz1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInRleHRGaWVsZFZhbHVlXFxcIlxcbiAgICAgICAgICAgICAgICBoaW50PVxcXCJJbmdyZXNhciB0ZXh0by4uLlxcXCIgcmVxdWlyZWQgbWlubGVuPVxcXCI0XFxcIj5cXG4gICAgPC9UZXh0RmllbGQ+XFxuICAgIDxMYWJlbCAqbmdJZj1cXFwidGV4dG8uaGFzRXJyb3IoJ3JlcXVpcmVkJylcXFwiIHRleHQ9XFxcIiogcmVxXFxcIj48L0xhYmVsPlxcbiAgICA8TGFiZWwgKm5nSWY9XFxcIiF0ZXh0by5oYXNFcnJvcigncmVxdWlyZWQnKSAmJiB0ZXh0by5oYXNFcnJvcignbWlubGVuJylcXFwiIHRleHQ9XFxcIjQrXFxcIj48L0xhYmVsPlxcblxcbjwvRmxleGJveExheW91dD5cXG48QnV0dG9uIHRleHQ9XFxcIkJ1c2NhciFcXFwiICh0YXApPVxcXCJvblNlYXJjaFRhcCgpXFxcIiAqbmdJZj1cXFwidGV4dG8udmFsaWRcXFwiPjwvQnV0dG9uPlxcblxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25Jbml0LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiU2VhcmNoRm9ybVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2VhcmNoLWZvcm0uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIHRleHRGaWVsZFZhbHVlOiBzdHJpbmcgPSBcIlwiO1xuICAgIEBPdXRwdXQoKSBzZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBJbnB1dCgpIGluaWNpYWw6IHN0cmluZztcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRleHRGaWVsZFZhbHVlID0gdGhpcy5pbmljaWFsO1xuICAgIH1cbiAgICBvblNlYXJjaFRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50ZXh0RmllbGRWYWx1ZSk7XG4gICAgICAgIGlmKHRoaXMudGV4dEZpZWxkVmFsdWUubGVuZ3RoID4gMilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2guZW1pdCh0aGlzLnRleHRGaWVsZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyPlxcbiAgICA8IS0tXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXG4gICAgLS0+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwhLS1cXG4gICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXFxuICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcXG4gICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxcbiAgICAtLT5cXG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgYW5kcm9pZDp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIlxcbiAgICAgICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIj5cXG4gICAgPC9BY3Rpb25JdGVtPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiU2VhcmNoXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxTdGFja0xheW91dCBjbGFzcz1cXFwicGFnZV9fY29udGVudFxcXCIgI2xheW91dD5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJwYWdlX19jb250ZW50LWljb24gZmFzXFxcIiB0ZXh0PVxcXCImI3hmMDAyO1xcXCI+PC9MYWJlbD5cXG4gICAgPFNlYXJjaEZvcm0gKHNlYXJjaCkgPSBcXFwic2VhcmNoUmVzdWx0KCRldmVudClcXFwiXFxuICAgIFtpbmljaWFsXT1cXFwiJ0lwaG9uZSdcXFwiPjwvU2VhcmNoRm9ybT5cXG4gICAgPExpc3RWaWV3IFtpdGVtc109XFxcInRoaXMucmVzdWx0YWRvc1xcXCIgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiXFxuICAgIHN0eWxlPVxcXCJoZWlnaHQ6IDEyNTBweDtcXFwiID5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgPlxcbiAgICAgICAgICAgIDwhLS0gVGhlIGl0ZW0gdGVtcGxhdGUgY2FuIG9ubHkgaGF2ZSBhIHNpbmdsZSByb290IHZpZXcgY29udGFpbmVyIChlLmcuIEdyaWRMYXlvdXQsIFN0YWNrTGF5b3V0LCBldGMuKS0tPlxcbiAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcInJvd1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInJlczovL2ljb25cXFwiIGNsYXNzPVxcXCJ0aHVtYiBpbWctY2lyY2xlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNjAlOyBmb250LXNpemU6IDIwcHg7IFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L0xpc3RWaWV3PlxcblxcbjwvU3RhY2tMYXlvdXQ+XFxuXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgQ2VsdWxhcmVzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNpb3MvY2VsLnNlcnZpY2VcIjtcbmltcG9ydCB7IFZpZXcsIENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiU2VhcmNoXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZWFyY2guY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xucmVzdWx0YWRvczogQXJyYXk8c3RyaW5nPjtcbkBWaWV3Q2hpbGQoXCJsYXlvdXRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIGxheW91dDogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2VsdWxhcjogQ2VsdWxhcmVzU2VydmljZSkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cbiAgICBjYW1iaW8gKGUpIHtcbiAgICAgICAgbGV0IGluZGljYXRvciA9IDxBY3Rpdml0eUluZGljYXRvcj5lLm9iamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRpY2F0b3IuYnVzeTogXCIgKyBpbmRpY2F0b3IuYnVzeSk7XG4gICAgICAgIH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgICAgIHRoaXMuY2VsdWxhci5hZ3JlZ2FyKCdJcGhvbmUgNicpO1xuICAgICAgICB0aGlzLmNlbHVsYXIuYWdyZWdhcignU2Fuc3VtZyAnKTtcbiAgICAgICAgdGhpcy5jZWx1bGFyLmFncmVnYXIoJ0lwaG9uZSAxMScpO1xuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbiAgICBzZWFyY2hSZXN1bHQgKHM6IHN0cmluZyl7XG4gICAgICAgIHRoaXMucmVzdWx0YWRvcyA9IHRoaXMuY2VsdWxhci5idXNjYXIoKVxuICAgICAgICAuZmlsdGVyKCh4KSA9PiB4LmluZGV4T2YocykgPj0gMCk7XG5cbiAgICAgICAgY29uc3QgbGF5b3V0ID0gPFZpZXc+dGhpcy5sYXlvdXQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGF5b3V0LmFuaW1hdGUoe1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCJyZWRcIiksXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZGVsYXk6IDE1MCxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNlxuICAgICAgICB9KS50aGVuKCgpID0+IGxheW91dC5hbmltYXRlKHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwid2hpdGVcIiksXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZGVsYXk6IDE1MCxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSkpXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgU2VhcmNoUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3NlYXJjaC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VhcmNoRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC1mb3JtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWluTGVuRGlyZWN0aXZlIH0gZnJvbSBcIi4vbWlubGVuLnZhbGlkYXRvclwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFNlYXJjaFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2VhcmNoQ29tcG9uZW50LFxuICAgICAgICBTZWFyY2hGb3JtQ29tcG9uZW50LFxuICAgICAgICBNaW5MZW5EaXJlY3RpdmVcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==