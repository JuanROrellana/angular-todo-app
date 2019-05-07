import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    const classes = {
      todo : true,
      'is-complete' : this.todo.completed
    };

    return classes;
  }

  onToggle(todo) {
    this.todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todos => {
      console.log(todos);
    });
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
    this.todoService.deleteTodo(todo).subscribe();
  }

}
