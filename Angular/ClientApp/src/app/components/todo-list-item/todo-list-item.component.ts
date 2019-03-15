import { TodoItem } from './../../models/todo-item';
import { Component, OnInit, OnDestroy, OnChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoListItemService } from 'src/app/services/todo-list-item.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit, OnDestroy {

  subscription:  Subscription;
  todoItems: TodoItem[];
  todoItem: TodoItem;


  constructor(
    private service: TodoListItemService
  ) { }

  ngOnInit() {
    this.subscription  =  this.service.getAll().subscribe(
      results  =>  {
        console.log('Todo list is geladen!', results);
        this.todoItems = results;

      },
      (error)  =>  {
        console.error('Failed ',  error);
      });
  }

  valueChange(todoItems, todoItem, $event) {
    console.log("valueChange is aangeroepen");
    //set the two-way binding here for the specific unit with the event
   todoItem.isDone = $event.checked;
   if (todoItem) {
    console.log("update is aangeroepen, de id is = ", todoItem.id);
    this.service.updateTodoItem(todoItem, todoItem.id)
      .subscribe(todoItem => {
        const ix = todoItem ? this.todoItems.findIndex(h => h.id === todoItem.id) : -1;
        if (ix > -1) { this.todoItems[ix] = todoItem; }
      });
    todoItem = undefined;
  }
}


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
