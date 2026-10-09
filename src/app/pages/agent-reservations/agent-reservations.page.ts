import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-agent-reservations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agent-reservations.page.html',
  styleUrls: ['./agent-reservations.page.scss']
})
export class AgentReservationsPage {
  private mockService = inject(MockDataService);
  reservations = this.mockService.getReservations();

  cambiarEstado(reserva: any, nuevoEstado: string) {
    reserva.status = nuevoEstado;
  }
}