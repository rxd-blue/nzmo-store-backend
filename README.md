# NZMO Store Backend

A Node.js/Express backend for the NZMO Store e-commerce application.

## Live Demo

The API is running at: https://large-zigzag-gerbil.glitch.me

## Features

- 🔄 Real-time product filtering API
- 🛒 Cart management system
- 🔒 CORS enabled for Vercel frontend
- 📦 Sample product data included
- 🚀 Deployed on Glitch

## API Endpoints

### Health Check
- `GET /` - Basic health check endpoint

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

## Local Development

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

## Deployment

This project is deployed on Glitch:
1. Create a new project on [Glitch](https://glitch.com)
2. Import from GitHub
3. The project will automatically deploy and run

## CORS Configuration

The API is configured to accept requests from:
- https://nzmo-store.vercel.app (Production)
- http://localhost:3000 (Development) 