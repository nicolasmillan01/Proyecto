import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { ClientEventsPage } from './pages/client-events/client-events.page';
import { ClientReservationsPage } from './pages/client-reservations/client-reservations.page';
import { AgentEventsPage } from './pages/agent-events/agent-events.page';
import { AgentCreateEventPage } from './pages/agent-create-event/agent-create-event.page';
import { AgentReservationsPage } from './pages/agent-reservations/agent-reservations.page';
import { AdminPage } from './pages/admin/admin.page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  // Rutas de Cliente
  { path: 'client/events', component: ClientEventsPage },
  { path: 'client/reservations', component: ClientReservationsPage },
  // Rutas de Agente
  { path: 'agent/events', component: AgentEventsPage },
  { path: 'agent/create-event', component: AgentCreateEventPage },
  { path: 'agent/reservations', component: AgentReservationsPage },
  // Rutas de Administrador
  { path: 'admin', component: AdminPage },
  { path: '**', redirectTo: 'login' } // Ruta comodín para páginas no encontradas
];