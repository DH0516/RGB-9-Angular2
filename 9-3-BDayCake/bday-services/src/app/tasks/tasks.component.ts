import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksServiceService } from '../tasks-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks!: Task[];
  constructor( private service: TasksServiceService ) { }

  ngOnInit() {
    this.service.getTasks().subscribe((result: {tasks:[]}) => {
      this.tasks = result.tasks;
    });
  }

}
