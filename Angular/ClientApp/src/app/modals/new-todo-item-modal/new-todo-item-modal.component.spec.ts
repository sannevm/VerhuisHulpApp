import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoItemModalComponent } from './new-todo-item-modal.component';

describe('NewTodoItemModalComponent', () => {
  let component: NewTodoItemModalComponent;
  let fixture: ComponentFixture<NewTodoItemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTodoItemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
