import { Component, OnInit, OnChanges, Input } from "@angular/core";
import { Task } from "src/app/models/task";

@Component({
  selector: "app-total-hours",
  templateUrl: "./total-hours.component.html",
  styleUrls: ["./total-hours.component.css"]
})
export class TotalHoursComponent implements OnInit, OnChanges {
  @Input() tasks: Task[];

  plannedHours: number = null;
  inProgressHours: number = null;
  completedHours: number = null;

  constructor() {}

  ngOnInit() {
    this.getHours();
  }

  ngOnChanges() {
    this.getHours();
  }

  getHours() {
    this.plannedHours = 0;
    this.inProgressHours = 0;
    this.completedHours = 0;
    this.tasks.forEach(task => {
      if (task.state == "1") {
        this.plannedHours += task.estimate;
      }
      if (task.state == "2") {
        this.inProgressHours += task.estimate;
      }
      if (task.state == "3") {
        this.completedHours += task.estimate;
      }
    });
  }
}
