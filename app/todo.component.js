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
var core_1 = require('@angular/core');
var TodoComponent = (function () {
    function TodoComponent() {
        this.removeItem = new core_1.EventEmitter();
    }
    TodoComponent.prototype.deleteItem = function (id) {
        this.removeItem.emit(id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TodoComponent.prototype, "todoItem", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TodoComponent.prototype, "todoList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoComponent.prototype, "removeItem", void 0);
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'todo-component',
            template: "\n        <div href=\"#\" class=\"list-group-item\" *ngFor=\"let item of todoList; let i = index\">\n            <h4 class=\"list-group-item-heading\">\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteItem(i)\">x</button>\n                {{item}}\n            </h4>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map