# Kläder & Sånt

## Beskrivning

Kläder & Sånt är en webbshopsapplikation byggd med react. Användaren kan på ett simpelt sätt bläddra bland produkter och filtrera produkterna efter kategori. Användaren kan sedan lägga till produkter i kundvagnen, genomföra sitt köp och ange personuppgifter för att sedan få en orderbekräftelse

---

## Funktioner

- Homepage med hero-banner
- Produktsida med kategorifilter och produktbilder
- Kundvagn
- Ändra antal produkter i kundvagnen
- Ta bort produkter från kundvagnen
- Betalningssida
- Orderbekräftelse
- Responsiv design för mobil och dator
- API via json-server

---

## Installation

### Klona projektet från github

```bash
git clone (jag skriver min github länk här sen)
```

### 2. Installera beroenden

```bash
npm install
```

---

## Starta frontend

Kör:

```bash
npm run dev
```

Öppna sedan:

```text
http://localhost:5173
```

---

## Starta backend

Projektet använder json-server.

Kör:

```bash
npx json-server db.json
```

API:t startar på:

```text
http://localhost:3000
```

---

## API Endpoints

### Hämta produkter

```http
GET /products
```

Exempel:

```text
http://localhost:3000/products
```

### Skapa order

```http
POST /orders
```

Orderdata sparas i:

```text
db.json
```

---






