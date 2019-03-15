import {Component} from '@angular/core';

import {NgbModal, NgbModule, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TodoListItemService } from 'src/app/services/todo-list-item.service';
import { TodoItem } from 'src/app/models/todo-item';

@Component({
  selector: 'app-new-todo-item-modal',
  templateUrl: './new-todo-item-modal.component.html',
  styleUrls: ['./new-todo-item-modal.component.css']
})
export class NewTodoItemModalComponent {
  closeResult: string;
  todoItems: TodoItem[];

  constructor(private modalService: NgbModal, private service: TodoListItemService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  add(description: string): void {
    console.log("Add wordt aangeroepen!");
    description = description.trim();
        
    const newTodoItem: TodoItem = {description} as TodoItem;
    this.service.addTodoItem(newTodoItem)
      .subscribe(todoItem => {
        // this.todoItems.push(todoItem);
        // console.log('TodoItems now contains', this.todoItems);
        this.service.getAll();
      });
  }

  close(){window.location.reload();}
}
