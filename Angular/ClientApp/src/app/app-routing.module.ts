import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'todo-list-item', component: TodoListItemComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
