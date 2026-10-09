import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event.interface';
import { Reservation } from '../interfaces/reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  // Mocks de Eventos
  public events: Event[] = [
    { id: 1, name: 'Concierto Rock', date: '2026-11-20', location: 'Estadio Principal', agentId: 101 },
    { id: 2, name: 'Obra de Teatro', date: '2026-12-05', location: 'Teatro Municipal', agentId: 101 },
    { id: 3, name: 'Festival Gastronómico', date: '2026-12-10', location: 'Parque Central', agentId: 102 }
  ];

  // Mocks de Reservas
  public reservations: Reservation[] = [
    { id: 1, eventId: 1, clientId: 501, status: 'Aprobada' },
    { id: 2, eventId: 2, clientId: 501, status: 'Pendiente' },
    { id: 3, eventId: 1, clientId: 502, status: 'Rechazada' }
  ];

  constructor() { }

  getEvents() { return this.events; }
  getReservations() { return this.reservations; }
}