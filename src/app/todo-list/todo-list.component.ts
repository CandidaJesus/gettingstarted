import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    list: Array<any> = [
     { name: 'clean room', done: false },
     { name: 'make pancakes', done: false },
     { name: 'spend 3 hours on reddit', done: true }
   ];

  constructor() { }

  ngOnInit() {
  }

}
