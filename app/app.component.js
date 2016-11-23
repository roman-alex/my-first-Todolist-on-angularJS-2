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
var AppComponent = (function () {
    function AppComponent() {
        this.todoList = [];
        this.todoItem = '';
    }
    AppComponent.prototype.addList = function () {
        if (this.todoItem != '') {
            this.todoList.push(this.todoItem);
            this.todoItem = '';
        }
    };
    AppComponent.prototype.removeList = function () {
        this.todoList = [];
    };
    AppComponent.prototype.removeItem = function (id) {
        this.todoList.splice(id, 1);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n          <div class=\"container text-center\">\n            <h1>\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F</h1>\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-lg-offset-3\">\n                <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todoItem\">\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-default\" type=\"button\" (click)=\"addList()\">\u0413\u0430\u0439\u0434\u0430!</button>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <h1>\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044C</h1>\n            <p *ngIf=\"!todoList.length\">\u041D\u0435\u043C\u0430\u0454 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044C</p>\n            <div class=\"row\" *ngIf=\"todoList.length\">\n              <div class=\"col-lg-6 col-lg-offset-3\">\n                <div class=\"list-group text-left\">\n                    <todo-component [todoItem]=\"todoItem\" [todoList]=\"todoList\" (removeItem)=\"removeItem($event)\"></todo-component>\n                </div>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeList()\">\u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u0441\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F</button>\n              </div>\n            </div>\n          </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map