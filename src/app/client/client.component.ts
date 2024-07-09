import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';
import { ClientService } from './client.service';
import { MatHeaderRow, MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [MatTable, MatHeaderRow, MatTableModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientList$!: Observable<Client[]>
  displayedColumns: string[] = ['name', 'email']
  constructor(private clientService: ClientService) { }
  ngOnInit(): void {
    this.clientList$ = this.clientService.getClients()
  }
}
