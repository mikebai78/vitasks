import { Injectable } from "@angular/core";
import { Task } from "../models/task";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root"
})
export class DataApiService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      {
        id: 1,
        name: "Center line drawings",
        description: "Pipeline from A staion to B station",
        estimate: 280,
        state: "3"
      },
      {
        id: 2,
        name: "Crossing drawings",
        description: "Details for 28 river crossing and 3 highway crossing",
        estimate: 550,
        state: "2"
      },
      {
        id: 3,
        name: "Material transportation",
        description: "For facilities and stations including pipe, valves",
        estimate: 180,
        state: "1"
      },
      {
        id: 4,
        name: "Field preparation",
        description:
          "Assembling and breaking down barricades, temporary structures",
        estimate: 320,
        state: "2"
      },
      {
        id: 5,
        name: "Construction preparation",
        description: "Preparing construction sites, materials, and tools.",
        estimate: 220,
        state: "1"
      },
      {
        id: 6,
        name: "Temp road buiding",
        description: "6m temp road connects A station and B station",
        estimate: 1250,
        state: "2"
      }
    ];
    return { tasks };
  }
}
