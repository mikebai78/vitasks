import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-create-task",
  templateUrl: "./create-task.component.html",
  styleUrls: ["./create-task.component.css"]
})
export class CreateTaskComponent implements OnInit {
  @Output() newTask = new EventEmitter();
  name: string = "";
  description: string = "";
  estimate: number = null;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openModal(longContent) {
    this.modalService.open(longContent, {
      scrollable: true,
      centered: true,
      size: "lg"
    });
  }

  createTask() {
    let task = {
      id: Date.now(),
      name: this.name,
      description: this.description,
      estimate: this.estimate,
      state: "1"
    };
    this.newTask.emit(task);
    this.name = "";
    this.description = "";
    this.estimate = null;
  }
}
