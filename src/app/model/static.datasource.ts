import { Injectable } from "@angular/core";
import { Item } from "./item.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    private items: Item[] = [
        new Item(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Item(2, "Product 2", "Category 1", "Product 2 (Category 1)", 100),
        new Item(3, "Product 3", "Category 1", "Product 3 (Category 1)", 100),
        new Item(4, "Product 4", "Category 1", "Product 4 (Category 1)", 100),
        new Item(5, "Product 5", "Category 1", "Product 5 (Category 1)", 100),
        new Item(6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
        new Item(7, "Product 7", "Category 2", "Product 7 (Category 2)", 100),
        new Item(8, "Product 8", "Category 2", "Product 8 (Category 2)", 100),
        new Item(9, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
        new Item(10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
        new Item(11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
        new Item(12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
        new Item(13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
        new Item(14, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
        new Item(15, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
    ];

    getItems(): Observable<Item[]> {
        return from([this.items]);
    }
}
