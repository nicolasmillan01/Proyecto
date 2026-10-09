import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-client-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-events.page.html',
  styleUrls: ['./client-events.page.scss']
})
export class ClientEventsPage {
  private mockService = inject(MockDataService);
  events = this.mockService.getEvents();

  reservar(eventId: number) {
    alert(Reserva realizada exitosamente (Simulada) para el evento #${eventId});
  }
}