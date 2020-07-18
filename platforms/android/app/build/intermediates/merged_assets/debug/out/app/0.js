(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/autos/autos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutosRoutingModule", function() { return AutosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _autos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/autos/autos.component.ts");



var routes = [
    { path: "", component: _autos_component__WEBPACK_IMPORTED_MODULE_2__["AutosComponent"] }
];
var AutosRoutingModule = /** @class */ (function () {
    function AutosRoutingModule() {
    }
    AutosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AutosRoutingModule);
    return AutosRoutingModule;
}());



/***/ }),

/***/ "./app/autos/autos.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Autos\"></Label>\n</ActionBar>\n<StackLayout class=\"page__content\">\n    <Label class=\"page__content-icon fas\" text=\"&#xf1b9;\"></Label>\n    <SearchForm (search) = \"searchResult($event)\"\n    [inicial]=\"'Toyota'\"></SearchForm>\n    <ListView [items]=\"this.resultados\" (itemTap)=\"onItemTapNews('/news/detalles')\" class=\"list-group\"\n    style=\"height: 1250px;\">\n        <ng-template let-item=\"item\" >\n            <!-- The item template can only have a single root view container (e.g. GridLayout, StackLayout, etc.)-->\n            <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n                <Image src=\"res://icon\" class=\"thumb img-circle\"></Image>\n                <Label [text]=\"item.marca\" class=\"list-group-item-heading\"\n                verticalAlignment=\"center\" style=\"width: 60%; font-size: 20px; \" ></Label>\n                <Button text=\"Eleiminar\" (tap)=\"borrarAuto(item.id, item.marca)\" class=\" btn-danger\"></Button>\n            </FlexboxLayout>\n        </ng-template>\n    </ListView>\n</StackLayout>\n"

/***/ }),

/***/ "./app/autos/autos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutosComponent", function() { return AutosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_autos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/servicios/autos.service.ts");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_toasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-toasts/index.js");
/* harmony import */ var nativescript_toasts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_toasts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__);





var AutosComponent = /** @class */ (function () {
    function AutosComponent(auto) {
        this.auto = auto;
        this.resultados = [];
    }
    AutosComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__["getRootView"]();
        sideDrawer.showDrawer();
    };
    AutosComponent.prototype.doLater = function (fn) { setTimeout(fn, 1000); };
    AutosComponent.prototype.ngOnInit = function () {
        this.auto.regsitrarAuto(1, 'Toyota', 'Azul');
        this.auto.regsitrarAuto(2, 'BMW', 'Blanco');
        this.auto.regsitrarAuto(3, 'Citrone', 'Cafe');
        this.auto.regsitrarAuto(4, 'Ferrari', 'Rojo');
        this.auto.regsitrarAuto(5, 'Ford', 'Gris');
        this.auto.regsitrarAuto(6, 'Opel', 'Plateado');
        //console.log(this.auto.Autos());
    };
    //buscar autos
    AutosComponent.prototype.searchResult = function (s) {
        this.resultados = this.auto.Autos()
            .filter(function (x) { return x.marca == s; });
    };
    //funcion eliminar
    AutosComponent.prototype.borrarAuto = function (v, t) {
        var _this = this;
        console.log(v);
        var toastOptions = {
            text: "El registo '" + t + "' fue borrado",
            duration: nativescript_toasts__WEBPACK_IMPORTED_MODULE_3__["DURATION"].SHORT,
            position: nativescript_toasts__WEBPACK_IMPORTED_MODULE_3__["POSITION"].TOP //optional propert
        };
        this.doLater(function () {
            tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["action"]("Seguro que quiere borrar?", "Cancelar!", ["Si", "No"])
                .then(function (result) {
                if (result === "Si") {
                    _this.doLater(function () { return nativescript_toasts__WEBPACK_IMPORTED_MODULE_3__["show"](toastOptions); });
                    /* this.doLater(() =>
                     dialogs.alert({
                         title: "Se ha borrado",
                         message: "El registo '" + v + "' fue borrado",
                         okButtonText: "Ok"
                     }).then(() => console.log("Cerrado 1!")));*/
                    //procedemos a borrar en el array el dato que pasa en v
                    _this.auto.borrar(v);
                }
                else if (result === "No") {
                    _this.doLater(function () {
                        return tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["alert"]({
                            title: "Operacion Cancelada!",
                            message: "El registo '" + t + "' no fue borrado",
                            okButtonText: "ok"
                        }).then(function () { return console.log("Cerrado 2!"); });
                    });
                }
            });
        });
        //console.log(this.news.borrar(v));
    };
    AutosComponent.ctorParameters = function () { return [
        { type: _servicios_autos_service__WEBPACK_IMPORTED_MODULE_1__["AutosService"] }
    ]; };
    AutosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-autos',
            template: __webpack_require__("./app/autos/autos.component.html"),
        }),
        __metadata("design:paramtypes", [_servicios_autos_service__WEBPACK_IMPORTED_MODULE_1__["AutosService"]])
    ], AutosComponent);
    return AutosComponent;
}());



/***/ }),

/***/ "./app/autos/autos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutosModule", function() { return AutosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _autos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/autos/autos-routing.module.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _autos_autos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/autos/autos.component.ts");
/* harmony import */ var _search_autoform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/autos/search-autoform.component.ts");
/* harmony import */ var _mail_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/autos/mail.validator.ts");







var AutosModule = /** @class */ (function () {
    function AutosModule() {
    }
    AutosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _autos_autos_component__WEBPACK_IMPORTED_MODULE_4__["AutosComponent"],
                _search_autoform_component__WEBPACK_IMPORTED_MODULE_5__["SearchAutoFormComponent"],
                _mail_validator__WEBPACK_IMPORTED_MODULE_6__["AutoMinLenDirective"]
            ],
            imports: [
                _autos_routing_module__WEBPACK_IMPORTED_MODULE_1__["AutosRoutingModule"],
                _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NativeScriptFormsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], AutosModule);
    return AutosModule;
}());



/***/ }),

/***/ "./app/autos/mail.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoMinLenDirective", function() { return AutoMinLenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");


var AutoMinLenDirective = /** @class */ (function () {
    function AutoMinLenDirective() {
        //
    }
    AutoMinLenDirective_1 = AutoMinLenDirective;
    AutoMinLenDirective.prototype.validate = function (control) {
        return !control.value || control.value.length >= (this.minlen
            || 2) ? null : { minlen: true };
    };
    var AutoMinLenDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AutoMinLenDirective.prototype, "minlen", void 0);
    AutoMinLenDirective = AutoMinLenDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[minlen]",
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: AutoMinLenDirective_1,
                    multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], AutoMinLenDirective);
    return AutoMinLenDirective;
}());



/***/ }),

/***/ "./app/autos/search-autoform.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout flexDirection=\"row\">\n    <TextField #texto=\"ngModel\" [(ngModel)]=\"textFieldValue\"\n                hint=\"Ingresar texto...\" required minlen=\"3\">\n    </TextField>\n    <Label *ngIf=\"texto.hasError('required')\" text=\"* req\"></Label>\n    <Label *ngIf=\"!texto.hasError('required') && texto.hasError('minlen')\" text=\" mail4+\"></Label>\n    </FlexboxLayout>\n    <Button text=\"Buscar!\" (tap)=\"onSearchTap()\" ></Button>\n"

/***/ }),

/***/ "./app/autos/search-autoform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAutoFormComponent", function() { return SearchAutoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var SearchAutoFormComponent = /** @class */ (function () {
    function SearchAutoFormComponent() {
        this.textFieldValue = "";
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchAutoFormComponent.prototype.ngOnInit = function () {
        this.textFieldValue = this.inicial;
    };
    SearchAutoFormComponent.prototype.onSearchTap = function () {
        //console.log(this.textFieldValue);
        if (this.textFieldValue.length > 2) {
            this.search.emit(this.textFieldValue);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchAutoFormComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchAutoFormComponent.prototype, "inicial", void 0);
    SearchAutoFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "SearchForm",
            template: __webpack_require__("./app/autos/search-autoform.component.html")
        })
    ], SearchAutoFormComponent);
    return SearchAutoFormComponent;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXV0b3MvYXV0b3Mtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG9zL2F1dG9zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hdXRvcy9hdXRvcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG9zL2F1dG9zLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0b3MvbWFpbC52YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG9zL3NlYXJjaC1hdXRvZm9ybS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0b3Mvc2VhcmNoLWF1dG9mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFd0I7QUFFZDtBQUduRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLCtEQUFjLEVBQUM7Q0FDeEMsQ0FBQztBQU1GO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixrQkFBa0I7UUFKOUIsOERBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLDhFQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyw4RUFBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csa0JBQWtCLENBQUk7SUFBRCx5QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZi9CLHEwQkFBcTBCLHFQQUFxUCxrZEFBa2QsaUJBQWlCLDZOOzs7Ozs7OztBQ0E3aEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDUTtBQUNIO0FBQ1Y7QUFFTztBQU9wRDtJQUVFLHdCQUFvQixJQUFrQjtRQUFsQixTQUFJLEdBQUosSUFBSSxDQUFjO1FBRHBDLGVBQVUs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Q0FBQzs7T0FDVyxtQkFBbUIsQ0FTL0I7SUFBRCwwQkFBQztDQUFBO0FBVCtCOzs7Ozs7OztBQ1RuQyx5ZDs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBOEU7QUFPOUU7SUFMQTtRQU1JLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFdBQU0sR0FBeUIsSUFBSSwwREFBWSxFQUFFLENBQUM7SUFlaEUsQ0FBQztJQVpHLDBDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdkMsQ0FBQztJQUNELDZDQUFXLEdBQVg7UUFDSSxtQ0FBbUM7UUFDbkMsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2pDO1lBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3pDO0lBRUwsQ0FBQztJQWJTO1FBQVQsNERBQU0sRUFBRTtrQ0FBUywwREFBWTsyREFBOEI7SUFDbkQ7UUFBUiwyREFBSyxFQUFFOzs0REFBaUI7SUFIaEIsdUJBQXVCO1FBTG5DLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QiwyRUFBK0M7U0FDbEQsQ0FBQztPQUVXLHVCQUF1QixDQWlCbkM7SUFBRCw4QkFBQztDQUFBO0FBakJtQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgcGF0aCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0nO1xuaW1wb3J0IHsgQXV0b3NDb21wb25lbnQgfSBmcm9tICcuL2F1dG9zLmNvbXBvbmVudCc7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge3BhdGg6IFwiXCIsIGNvbXBvbmVudDogQXV0b3NDb21wb25lbnR9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvc1JvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhcj5cXG4gICAgPCEtLVxcbiAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxcbiAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXFxuICAgIC0tPlxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8IS0tXFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxcbiAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXFxuICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cXG4gICAgLS0+XFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcInJlczovL21lbnVcXFwiIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXG4gICAgICAgIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCI+XFxuICAgIDwvQWN0aW9uSXRlbT5cXG4gICAgPExhYmVsIHRleHQ9XFxcIkF1dG9zXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcbjxTdGFja0xheW91dCBjbGFzcz1cXFwicGFnZV9fY29udGVudFxcXCI+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwicGFnZV9fY29udGVudC1pY29uIGZhc1xcXCIgdGV4dD1cXFwiJiN4ZjFiOTtcXFwiPjwvTGFiZWw+XFxuICAgIDxTZWFyY2hGb3JtIChzZWFyY2gpID0gXFxcInNlYXJjaFJlc3VsdCgkZXZlbnQpXFxcIlxcbiAgICBbaW5pY2lhbF09XFxcIidUb3lvdGEnXFxcIj48L1NlYXJjaEZvcm0+XFxuICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJ0aGlzLnJlc3VsdGFkb3NcXFwiIChpdGVtVGFwKT1cXFwib25JdGVtVGFwTmV3cygnL25ld3MvZGV0YWxsZXMnKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiXFxuICAgIHN0eWxlPVxcXCJoZWlnaHQ6IDEyNTBweDtcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiA+XFxuICAgICAgICAgICAgPCEtLSBUaGUgaXRlbSB0ZW1wbGF0ZSBjYW4gb25seSBoYXZlIGEgc2luZ2xlIHJvb3QgdmlldyBjb250YWluZXIgKGUuZy4gR3JpZExheW91dCwgU3RhY2tMYXlvdXQsIGV0Yy4pLS0+XFxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwicm93XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vaWNvblxcXCIgY2xhc3M9XFxcInRodW1iIGltZy1jaXJjbGVcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0ubWFyY2FcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0taGVhZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcIndpZHRoOiA2MCU7IGZvbnQtc2l6ZTogMjBweDsgXFxcIiA+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJFbGVpbWluYXJcXFwiICh0YXApPVxcXCJib3JyYXJBdXRvKGl0ZW0uaWQsIGl0ZW0ubWFyY2EpXFxcIiBjbGFzcz1cXFwiIGJ0bi1kYW5nZXJcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvTGlzdFZpZXc+XFxuPC9TdGFja0xheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRvc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNpb3MvYXV0b3Muc2VydmljZSc7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RzXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtYXV0b3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b3MuY29tcG9uZW50Lmh0bWwnLFxuICAvL3N0eWxlVXJsczogWycuL2F1dG9zLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcmVzdWx0YWRvczpBcnJheTx7aWQ6IG51bWJlciwgbWFyY2E6IHN0cmluZywgY29sb3I6IHN0cmluZ30+ID0gW107XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0bzogQXV0b3NTZXJ2aWNlKSB7IH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG59XG5cbiAgZG9MYXRlcihmbil7IHNldFRpbWVvdXQoZm4sIDEwMDApfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5hdXRvLnJlZ3NpdHJhckF1dG8oMSwgJ1RveW90YScsICdBenVsJyk7XG4gICAgICB0aGlzLmF1dG8ucmVnc2l0cmFyQXV0bygyLCAnQk1XJywgJ0JsYW5jbycpO1xuICAgICAgdGhpcy5hdXRvLnJlZ3NpdHJhckF1dG8oMywgJ0NpdHJvbmUnLCAnQ2FmZScpO1xuICAgICAgdGhpcy5hdXRvLnJlZ3NpdHJhckF1dG8oNCwgJ0ZlcnJhcmknLCAnUm9qbycpO1xuICAgICAgdGhpcy5hdXRvLnJlZ3NpdHJhckF1dG8oNSwgJ0ZvcmQnLCAnR3JpcycpO1xuICAgICAgdGhpcy5hdXRvLnJlZ3NpdHJhckF1dG8oNiwgJ09wZWwnLCAnUGxhdGVhZG8nKTtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5hdXRvLkF1dG9zKCkpO1xuXG4gIH1cbiAgLy9idXNjYXIgYXV0b3NcbiAgc2VhcmNoUmVzdWx0IChzOiBzdHJpbmcpe1xuICAgIHRoaXMucmVzdWx0YWRvcyA9IHRoaXMuYXV0by5BdXRvcygpXG4gICAgICAgIC5maWx0ZXIoKHgpID0+IHgubWFyY2EgPT0gcyk7XG59XG4gIC8vZnVuY2lvbiBlbGltaW5hclxuICBib3JyYXJBdXRvKHY6IG51bWJlciwgdDogc3RyaW5nKTp2b2lke1xuICAgIGNvbnNvbGUubG9nKHYpO1xuICAgIGNvbnN0IHRvYXN0T3B0aW9uczogVG9hc3QuVG9hc3RPcHRpb25zID0ge1xuICAgICAgICB0ZXh0OiBcIkVsIHJlZ2lzdG8gJ1wiICsgdCArIFwiJyBmdWUgYm9ycmFkb1wiLFxuICAgICAgICBkdXJhdGlvbjogVG9hc3QuRFVSQVRJT04uU0hPUlQsXG4gICAgICAgIHBvc2l0aW9uOiBUb2FzdC5QT1NJVElPTi5UT1AgLy9vcHRpb25hbCBwcm9wZXJ0XG4gICAgfTtcblxuICAgIHRoaXMuZG9MYXRlcigoKSA9PiB7XG4gICAgICAgIGRpYWxvZ3MuYWN0aW9uKFwiU2VndXJvIHF1ZSBxdWllcmUgYm9ycmFyP1wiLCBcIkNhbmNlbGFyIVwiLCBbXCJTaVwiLCBcIk5vXCJdKVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZihyZXN1bHQgPT09IFwiU2lcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0xhdGVyKCgpID0+IFRvYXN0LnNob3codG9hc3RPcHRpb25zKSk7XG4gICAgICAgICAgICAgICAvKiB0aGlzLmRvTGF0ZXIoKCkgPT5cbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2UgaGEgYm9ycmFkb1wiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVsIHJlZ2lzdG8gJ1wiICsgdiArIFwiJyBmdWUgYm9ycmFkb1wiLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJDZXJyYWRvIDEhXCIpKSk7Ki9cbiAgICAgICAgICAgICAgICAvL3Byb2NlZGVtb3MgYSBib3JyYXIgZW4gZWwgYXJyYXkgZWwgZGF0byBxdWUgcGFzYSBlbiB2XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvLmJvcnJhcih2KTtcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdCA9PT0gXCJOb1wiICl7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0xhdGVyKCgpID0+XG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9wZXJhY2lvbiBDYW5jZWxhZGEhXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRWwgcmVnaXN0byAnXCIgKyB0ICsgXCInIG5vIGZ1ZSBib3JyYWRvXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJva1wiXG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIkNlcnJhZG8gMiFcIikpKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfSk7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLm5ld3MuYm9ycmFyKHYpKTtcblxufVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRvc1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2F1dG9zLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBBdXRvc0NvbXBvbmVudCB9IGZyb20gJy4uL2F1dG9zL2F1dG9zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hBdXRvRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLWF1dG9mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRvTWluTGVuRGlyZWN0aXZlIH0gZnJvbSBcIi4vbWFpbC52YWxpZGF0b3JcIjtcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIEF1dG9zQ29tcG9uZW50LFxuICAgICAgU2VhcmNoQXV0b0Zvcm1Db21wb25lbnQsXG4gICAgICBBdXRvTWluTGVuRGlyZWN0aXZlXG4gICAgXSxcbiAgaW1wb3J0czogW1xuICAgIEF1dG9zUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9zTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIlttaW5sZW5dXCIsXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBBdXRvTWluTGVuRGlyZWN0aXZlLFxuICAgbXVsdGk6IHRydWV9XVxuICAgfSlcbiAgIGV4cG9ydCBjbGFzcyBBdXRvTWluTGVuRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBASW5wdXQoKSBtaW5sZW46IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvL1xuICAgIH1cbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuICFjb250cm9sLnZhbHVlIHx8IGNvbnRyb2wudmFsdWUubGVuZ3RoID49ICh0aGlzLm1pbmxlblxuICAgfHwgMikgPyBudWxsIDogeyBtaW5sZW46IHRydWUgfTtcbiAgICB9XG4gICB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwicm93XFxcIj5cXG4gICAgPFRleHRGaWVsZCAjdGV4dG89XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ0ZXh0RmllbGRWYWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgaGludD1cXFwiSW5ncmVzYXIgdGV4dG8uLi5cXFwiIHJlcXVpcmVkIG1pbmxlbj1cXFwiM1xcXCI+XFxuICAgIDwvVGV4dEZpZWxkPlxcbiAgICA8TGFiZWwgKm5nSWY9XFxcInRleHRvLmhhc0Vycm9yKCdyZXF1aXJlZCcpXFxcIiB0ZXh0PVxcXCIqIHJlcVxcXCI+PC9MYWJlbD5cXG4gICAgPExhYmVsICpuZ0lmPVxcXCIhdGV4dG8uaGFzRXJyb3IoJ3JlcXVpcmVkJykgJiYgdGV4dG8uaGFzRXJyb3IoJ21pbmxlbicpXFxcIiB0ZXh0PVxcXCIgbWFpbDQrXFxcIj48L0xhYmVsPlxcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgIDxCdXR0b24gdGV4dD1cXFwiQnVzY2FyIVxcXCIgKHRhcCk9XFxcIm9uU2VhcmNoVGFwKClcXFwiID48L0J1dHRvbj5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uSW5pdCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlNlYXJjaEZvcm1cIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NlYXJjaC1hdXRvZm9ybS5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoQXV0b0Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgdGV4dEZpZWxkVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gICAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQElucHV0KCkgaW5pY2lhbDogc3RyaW5nO1xuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGV4dEZpZWxkVmFsdWUgPSB0aGlzLmluaWNpYWw7XG4gICAgfVxuICAgIG9uU2VhcmNoVGFwKCk6IHZvaWQge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMudGV4dEZpZWxkVmFsdWUpO1xuICAgICAgICBpZih0aGlzLnRleHRGaWVsZFZhbHVlLmxlbmd0aCA+IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmVtaXQodGhpcy50ZXh0RmllbGRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==