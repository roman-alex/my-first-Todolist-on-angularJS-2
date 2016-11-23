import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
          <div class="container text-center">
            <h1>Завдання</h1>
            <div class="row">
              <div class="col-lg-6 col-lg-offset-3">
                <div class="input-group">
                  <input type="text" class="form-control" [(ngModel)]="todoItem">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button" (click)="addList()">Гайда!</button>
                  </span>
                </div>
              </div>
            </div>
            <h1>Список завданнь</h1>
            <p *ngIf="!todoList.length">Немає завданнь</p>
            <div class="row" *ngIf="todoList.length">
              <div class="col-lg-6 col-lg-offset-3">
                <div class="list-group text-left">
                    <todo-component [todoItem]="todoItem" [todoList]="todoList" (removeItem)="removeItem($event)"></todo-component>
                </div>
                <button type="button" class="btn btn-danger" (click)="removeList()">видалити всі завдання</button>
              </div>
            </div>
          </div>
    `
})
export class AppComponent {

    todoList: string[] = [];
    todoItem: string = '';

    addList() {
      if ( this.todoItem != '' ) {
        this.todoList.push(this.todoItem);
        this.todoItem = '';
      }
    }

    removeList() {
      this.todoList = [];
    }

    removeItem(id){
        this.todoList.splice(id, 1);
    }

}
