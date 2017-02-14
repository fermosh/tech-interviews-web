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
var core_1 = require("@angular/core");
require("node_modules/uui-framework/js/uui-tree-grid.min.js");
var EntryPointComponent = (function () {
    function EntryPointComponent(elementRef) {
        this.elementRef = elementRef;
        this.competencyOptions = ['.Net', 'FrontEnd', 'DevOps'];
        this.levelOptions = ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];
        this.domainOptions = ['FrontEnd web development', 'Backend development', 'Azure development'];
        this.isSkillGridVisible = false;
        this.isTreeCreated = false;
    }
    ;
    EntryPointComponent.prototype.show = function () {
        this.isSkillGridVisible = !this.isSkillGridVisible;
        if (!this.isTreeCreated) {
            this.createTree();
            this.isTreeCreated = true;
        }
    };
    EntryPointComponent.prototype.createTree = function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.innerHTML = "$('.uui-table.treegrid').uui_tree_grid({ collapsed:false,padding_automation:false,padding:10 });";
        this.elementRef.nativeElement.appendChild(s);
    };
    return EntryPointComponent;
}());
EntryPointComponent = __decorate([
    core_1.Component({
        selector: 'ip-entryPoint',
        templateUrl: 'app/views/entryPoint.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], EntryPointComponent);
exports.EntryPointComponent = EntryPointComponent;
//# sourceMappingURL=entryPoint.component.js.map