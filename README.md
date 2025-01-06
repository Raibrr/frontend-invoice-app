
# Guía para Arrancar el Proyecto

Esta guía te ayudará a configurar y ejecutar el proyecto en tu entorno local paso a paso.

---

## 1. **Requisitos Previos**

Asegúrate de tener instaladas las siguientes herramientas:

- Node.js >= 18
- Angular CLI 19.x
- Acceso al backend en localhost:3000

---

## 2. **Clonar el Repositorio**

Clona el repositorio en tu máquina local:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

---

## 3. **Instalar Dependencias**

### JavaScript

Instala las dependencias necesarias:

```bash
yarn install
```

---

## 4. **Ejecutar el Servidor**

Inicia el servidor:

```bash
yarn start
```

## 4. **API Enpoints**

- URL: http://localhost:3000/api/v1/invoices

### GET /api/v1/invoices

- Parámetros: start_date, end_date
- Retorna: Invoice[]

---
