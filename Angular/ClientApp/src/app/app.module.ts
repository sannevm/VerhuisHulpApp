import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { NewTodoItemModalComponent } from './modals/new-todo-item-modal/new-todo-item-modal.component';
import { TodoListItemService } from './services/todo-list-item.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListItemComponent,
    NewTodoItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule.forRoot(),
  ],
  providers: [TodoListItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
