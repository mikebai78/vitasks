import { Component, OnInit } from "@angular/core";
import { Task } from "../../models/task";
import { TaskService } from "../../services/task.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  plannedHours: number = null;
  inProgressHours: number = null;
  completedHours: number = null;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  remove(id) {
    console.log("remove task", id);
    this.taskService.removeTask(id).subscribe();
    this.getTasks();
  }

  addTask(data) {
    console.log(data);
    this.taskService.addTask(data).subscribe();
    this.getTasks();
  }

  updateState(task) {
    let newState = "";
    if (task.state == "1") {
      newState = "2";
    }
    if (task.state == "2") {
      newState = "3";
    }
    if (task.state == "3") {
      newState = "1";
    }
    let newTask = {
      ...task,
      state: newState
    };
    this.taskService.updateTask(newTask).subscribe();
    this.getTasks();
  }
}
