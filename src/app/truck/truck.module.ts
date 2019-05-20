import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TruckComponent } from "./truck.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [TruckComponent],
    exports: [TruckComponent]
})
export class TruckModule { }
