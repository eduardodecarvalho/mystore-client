import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "./client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseURL: string = "http://localhost:3000/clients"

  constructor(private http: HttpClient) { }
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseURL)
  }
}
