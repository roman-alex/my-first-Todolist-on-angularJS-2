import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'todo-component',
    template: `
        <div href="#" class="list-group-item" *ngFor="let item of todoList; let i = index">
            <h4 class="list-group-item-heading">
                <button type="button" class="btn btn-danger" (click)="deleteItem(i)">x</button>
                {{item}}
            </h4>
        </div>
    `
})
export class TodoComponent {
    @Input() todoItem: string;
    @Input() todoList: string[];

    @Output() removeItem = new EventEmitter<number>();
    
    deleteItem(id) {
        this.removeItem.emit(id);
    }

}
