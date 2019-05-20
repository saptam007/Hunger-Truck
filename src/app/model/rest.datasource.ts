import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Item } from "./item.model";

const PROTOCOL = "http";
const PORT = 3600;

@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl + "items");
  }

}
