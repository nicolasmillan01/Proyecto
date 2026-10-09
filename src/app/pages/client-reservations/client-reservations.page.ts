import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-client-reservations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-reservations.page.html',
  styleUrls: ['./client-reservations.page.scss']
})
export class ClientReservationsPage {
  private mockService = inject(MockDataService);
  reservations = this.mockService.getReservations();
}