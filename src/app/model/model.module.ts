import { NgModule } from "@angular/core";
import { ItemRepository } from "./item.repository";
import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports:[HttpClientModule],
    providers: [ItemRepository, 
        { provide :StaticDataSource,useClass : RestDataSource}]
})
export class ModelModule { }
