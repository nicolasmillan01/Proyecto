# Proyecto Integrador - Web 1 | Sistema de Gestión de Eventos y Reservas

Este repositorio contiene la aplicación web para la gestión simulada de eventos y reservas de la **UCEVA**, desarrollada con **Angular 18** y **Bootstrap 5**. Corresponde al entregable del Primer Hito del proyecto.

---

## 🚀 Tecnologías Utilizadas

- **Framework:** Angular 18+ (Standalone Components)
- **Lenguaje:** TypeScript
- **Estilos:** Bootstrap 5 & Sass (SCSS)
- **Enrutamiento:** Angular Router
- **Gestión de Datos:** RxJS & Mock Data Service

---

## 📁 Estructura del Proyecto

```text
src/
├── app/
│   ├── components/
│   │   ├── event-card/       # Tarjeta reutilizable de eventos
│   │   └── navbar/           # Barra de navegación persistente
│   ├── interfaces/
│   │   ├── event.interface.ts        # Modelo de Evento
│   │   └── reservation.interface.ts  # Modelo de Reserva
│   ├── pages/
│   │   ├── admin/                # Panel de administración
│   │   ├── agent-reservations/   # Gestión de reservas por agente
│   │   ├── client-events/        # Catálogo de eventos para cliente
│   │   └── client-reservations/  # Reservas realizadas por el cliente
│   ├── services/
│   │   └── mock-data.service.ts  # Servicio con datos simulados
│   ├── app.html                  # Plantilla raíz con navbar y router-outlet
│   ├── app.ts                    # Componente raíz de la aplicación
│   └── app.routes.ts             # Configuración global de rutas

🗺️ Rutas DisponiblesRutaVistaDescripción

/client/eventsEventos (Cliente) Muestra la lista de eventos disponibles para reserva.

/client/reservations Mis Reservas  Lista de reservas asociadas al cliente.

/agent/reservations Módulo Agente  Vista para agentes encargados de gestionar reservas.

/admin/  Administración  Panel principal de administración global del sistema

⚙️ Instalación y Ejecución

Pre-requisitos:
 - Node.js: v18.x o superior
 - Angular CLI: v18.x o superior (npm i -g @angular/cli)
 
 Pasos para ejecutar localmente
 
 1. Clonar el repositorio:
 git clone https://github.com/nicolasmillan01/Proyecto.git
cd Uceva-Angular-Proyecto-Integrador-Web-1

 2. Instalar dependencias:
 npm install

 3. Iniciar el servidor de desarrollo:
 npm start

Acceder a la aplicación:
Abre tu navegador e ingresa a http://localhost:4200/.

📝 Estándar de Commits:
El proyecto sigue la convención de Conventional Commits:
feat: Nuevas funcionalidades.
fix: Corrección de errores o bugs.
style: Cambios visuales o formateo sin afectar lógica.docs: Cambios en la documentación.
