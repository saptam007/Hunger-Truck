import { Component } from "@angular/core";
import { Item } from "../model/item.model";
import { ItemRepository } from "../model/item.repository";

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent {

    public selectedCategory = null;


    constructor(private repository: ItemRepository) {}

    get items(): Item[] {
        return this.repository.getItems(this.selectedCategory);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string){
        this.selectedCategory=newCategory;
    }
}

