# Slutprojekt Next.js | Bilverkstad

Detta projekt handlar om att skapa en fullstack-applikation med Next.js, React, Tailwind CSS, TypeScript och MySQL. Applikationen hämtar data från databasen och visar den på webbsidan.

## Funktioner

![funktioner list](assets/funktioner.png)

* Hämta och visa data från tabeller som fordon och kunder
* Sökfunktion för att filtrera tabeller
* Visa detaljer i modal när man klickar på en rad

## 🛠️ Teknologier

Projektet är byggt med:

Next.js
React
Tailwind CSS
TypeScript
MySQL

## 📂 Projektstruktur

![projektstruktur](assets/projektstruktur.png)

```
/app
  /api
    /fordon
      route.ts
    /kunder
      route.ts
  /components
    Table.tsx
    Modal.tsx
  /pages
    index.tsx
/db
  bilverkstad.sql
```

## ⚙️ Installation och uppstart

#### Installera

```bash
Node.js
MySQL
```

#### Klona projektet

```bash
git clone https://github.com/ditt-användarnamn/bilverkstad-nextjs.git
cd bilverkstad-nextjs
```

#### Installera beroenden

```bash
npm install
```

#### Importera bilverkstad.sql filen

Skapa databas:

```bash
CREATE DATABASE bilverkstad;
```

Sedan:

```bash
mysql -u root -p bilverkstad < db/bilverkstad.sql
```

#### Skapa .env-fil

```bash
PORT=3000
DATABASE_URL=mysql://root:din-lösen@localhost:3306/bilverkstad
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

#### Starta projektet

```bash
npm run dev
```

## 🔑 API Endpoints

![api endpoints](assets/api.png)

* GET /api/fordon
* GET
