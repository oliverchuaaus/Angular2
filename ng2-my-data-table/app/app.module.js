"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var data_table_component_1 = require("./datatable/data-table.component");
var ng2_table_1 = require("ng2-table/ng2-table");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var mission_component_1 = require("./communication/mission.component");
var astronaut_component_1 = require("./communication/astronaut.component");
var parent_component_1 = require("./input/parent.component");
var child_component_1 = require("./input/child.component");
var parent2_component_1 = require("./input/parent2.component");
var child2_component_1 = require("./input/child2.component");
var router_1 = require("@angular/router");
var update_component_1 = require("./routecomm/update.component");
var history_component_1 = require("./routecomm/history.component");
var route_component_1 = require("./routecomm/route.component");
var common_1 = require("@angular/common");
var comm_service_1 = require("./routecomm/comm.service");
var routes = [
    { path: '', redirectTo: '/update', pathMatch: 'full' },
    { path: 'update', component: update_component_1.UpdateComponent },
    { path: 'history', component: history_component_1.HistoryComponent },
    { path: 'history/:productID', component: history_component_1.HistoryComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, ng2_bootstrap_1.PaginationModule.forRoot(), ng2_table_1.Ng2TableModule, router_1.RouterModule.forRoot(routes)],
        declarations: [app_component_1.AppComponent, data_table_component_1.TableDemoComponent, mission_component_1.MissionControlComponent, astronaut_component_1.AstronautComponent,
            route_component_1.RouteComponent, update_component_1.UpdateComponent, history_component_1.HistoryComponent,
            parent_component_1.ParentComponent, child_component_1.ChildComponent, parent2_component_1.Parent2Component, child2_component_1.Child2Component],
        bootstrap: [app_component_1.AppComponent],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, comm_service_1.CommService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map