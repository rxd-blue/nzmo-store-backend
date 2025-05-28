# NZMO Store Backend

A Node.js/Express backend for the NZMO Store e-commerce application.

## Features

- 🔄 Real-time product filtering API
- 🛒 Cart management system
- 🔒 CORS enabled
- 📦 Sample product data included

## Setup

1. Clone the repository:
```bash
git clone https://github.com/rxd-blue/nzmo-store-backend.git
cd nzmo-store-backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000`.

## API Endpoints

### Product Filtering

- `POST /api/filter` - Set filter criteria
- `GET /api/filter` - Get current filter settings

### Cart Management

- `POST /api/cart/named` - Add products to cart by name
- `GET /api/cart` - Get cart contents
- `POST /api/cart/reset` - Clear the cart

## Sample Data

The backend includes sample product data for:
- Samsung A23 (Phone)
- LG WashPro (Washing Machine)
- Xiaomi Note 12 (Phone) 