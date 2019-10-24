import { Injectable } from "@angular/core";
import { Task } from "../models/task";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  private tasksUrl = "api/tasks";

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }
  addTask(task) {
    console.log("add task", task);
    return this.http.post<Task>(this.tasksUrl, task);
  }
  removeTask(id) {
    return this.http.delete(`api/tasks/${id}`);
  }
  updateTask(task) {
    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.put(this.tasksUrl, task, httpOptions);
  }
}
