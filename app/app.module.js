"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var entryPoint_component_1 = require("./entryPoint/entryPoint.component");
var competency_service_1 = require("./entryPoint/competency-service");
var level_service_1 = require("./entryPoint/level-service");
var domain_service_1 = require("./entryPoint/domain-service");
var competency_data_1 = require("./entryPoint/competency-data");
var level_data_1 = require("./entryPoint/level-data");
var domain_data_1 = require("./entryPoint/domain-data");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
/* Feature Modules */
var script_viewer_module_1 = require("./script-viewer/script-viewer.module");
var entryPoint_service_1 = require("./entryPoint/entryPoint.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(competency_data_1.CompetencyData),
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(level_data_1.LevelData),
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(domain_data_1.DomainData),
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: entryPoint_component_1.EntryPointComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
            script_viewer_module_1.ScriptViewerModule
        ],
        declarations: [
            app_component_1.AppComponent,
            entryPoint_component_1.EntryPointComponent
        ],
        providers: [
            entryPoint_service_1.EntryPointService,
            competency_service_1.CompetencyService,
            level_service_1.LevelService,
            domain_service_1.DomainService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map