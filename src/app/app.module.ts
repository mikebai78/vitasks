import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CreateTaskComponent } from "./components/create-task/create-task.component";
import { FormsModule } from "@angular/forms";
import { TotalHoursComponent } from "./components/total-hours/total-hours.component";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from "@angular/common/http";
import { DataApiService } from "./services/data-api.service";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NavbarComponent,
    CreateTaskComponent,
    TotalHoursComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataApiService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
