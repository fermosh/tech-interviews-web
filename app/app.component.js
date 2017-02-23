"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n        <header>\n            <div class=\"uui-header\">\n                <nav>\n                    <!--Responsive html-layuot-->\n                    <div class=\"uui-responsive-header\">\n                        <div class=\"responsive-header\">\n                            <a href=\"#\" class=\"responsive-brand-logo\">\n                                <span class=\"logo\">\n                                    <img src=\"node_modules/uui-framework/images/ic_logo_UUi.svg\" alt=\"\" />\n                                </span>\n                                <span class=\"title\">Technical Interview Helper</span>\n                            </a>\n                        </div>\n                    </div>\n                    <a href=\"#\" class=\"brand-logo\">\n                        <span class=\"logo\">\n                            <img src=\"node_modules/uui-framework/images/ic_logo_UUi.svg\" alt=\"\" />\n                        </span>\n                        Technical Interview Helper\n                    </a>\n                    <ul class='nav navbar-nav'>\n                        <!--\n                        <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                        <li><a [routerLink]=\"['/skillMatrix']\">Skill Matrix</a></li>\n                        -->\n                    </ul>                    \n                </nav>\n            </div>\n        </header>    \n        <div class='uui-main-container'>\n            <router-outlet></router-outlet>\n        </div>\n        <footer>\n            <div class=\"uui-footer\">\n                <div class=\"footer-logo-copyright\">\n                    <div class=\"epam-logo\">\n                        <img src=\"node_modules/uui-framework/images/Logo_Epam_Color.svg\" alt=\"\" />\n                    </div>\n                    <p class=\"copyright\">\u00A9 2017 EPAM Systems. All Rights Reserved.</p>\n                </div>\n                <div class=\"footer-build\">\n                    <p class=\"build\">Build version v <span>1.0.0.0</span></p>\n                </div>\n            </div>\n        </footer>    \n     "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map