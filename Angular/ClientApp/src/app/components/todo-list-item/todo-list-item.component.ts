import { TodoItem } from './../../models/todo-item';
import { Component, OnInit, OnDestroy } from '@angular/core';
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
