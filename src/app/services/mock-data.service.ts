import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event.interface';
import { Reservation } from '../interfaces/reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  public events: Event[] = [
    {
      id: 1,
      codigo: 101,
      nombre: 'Concierto de Rock en Vivo',
      descripcion: 'Un concierto espectacular con las mejores bandas locales.',
      teatro: 'Teatro Municipal',
      ciudad: 'Tuluá',
      fecha_inicio: new Date('2026-11-20'),
      fecha_fin: new Date('2026-11-20'),
      capacidad: 500,
      precio: 45000,
      observaciones: 'Entrada para mayores de 18 años',
      estado: 'En Boleteria'
    },
    {
      id: 2,
      codigo: 102,
      nombre: 'Obra de Teatro: Romeo y Julieta',
      descripcion: 'Clásica obra dramática interpretada por el grupo de arte UCEVA.',
      teatro: 'Auditorio Principal',
      ciudad: 'Tuluá',
      fecha_inicio: new Date('2026-12-05'),
      fecha_fin: new Date('2026-12-05'),
      capacidad: 300,
      precio: 25000,
      observaciones: 'Apto para todo público',
      estado: 'Programado'
    }
  ];

  public reservations: Reservation[] = [
    { id: 1, eventId: 1, clientId: 501, status: 'Aprobada' },
    { id: 2, eventId: 2, clientId: 501, status: 'Pendiente' },
    { id: 3, eventId: 1, clientId: 502, status: 'Rechazada' }
  ];

  constructor() { }

  getEvents(): Event[] { return this.events; }
  getReservations(): Reservation[] { return this.reservations; }
}