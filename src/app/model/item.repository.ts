import { Injectable } from "@angular/core";
import { Item } from "./item.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ItemRepository {
    private items: Item[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getItems().subscribe(data => {
            this.items = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getItems(category: string = null): Item[] {
        return this.items
            .filter(p => category == null || category == p.category);
    }

    getCategories(): string[] {
        return this.categories;
    }
}
