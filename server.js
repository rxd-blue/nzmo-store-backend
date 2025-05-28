const express = require('express');
const cors = require('cors');
const app = express();

// CORS configuration
const corsOptions = {
  origin: ['https://nzmo-store.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

let filter = {};
let cartItems = [];

// بيانات المنتجات
const allProducts = [
  { name: "Samsung A23", category: "تليفونات", brand: "سامسونج", details: "128GB، شاشة 6.6 انش" },
  { name: "LG WashPro", category: "غسالات", brand: "LG", details: "غسالة 9 كجم، أبيض" },
  { name: "Xiaomi Note 12", category: "تليفونات", brand: "شاومي", details: "6GB RAM، شاشة 6.4 انش" }
];

// Basic health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'API is running' });
});

// فلترة الصفحة
app.post('/api/filter', (req, res) => {
  try {
    filter = req.body;
    console.log('✅ فلتر جديد:', filter);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error in filter:', error);
    res.status(400).json({ error: 'Invalid filter data' });
  }
});

app.get('/api/filter', (req, res) => {
  try {
    res.json(filter);
  } catch (error) {
    console.error('Error getting filter:', error);
    res.status(500).json({ error: 'Failed to get filter' });
  }
});

// عربة الشراء بالاسم
app.post('/api/cart/named', (req, res) => {
  try {
    const names = req.body.names;
    if (!Array.isArray(names)) {
      return res.status(400).json({ error: 'names must be array' });
    }

    cartItems = allProducts.filter(p => names.includes(p.name));
    console.log('🛒 Cart updated with:', cartItems);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error updating cart:', error);
    res.status(500).json({ error: 'Failed to update cart' });
  }
});

app.get('/api/cart', (req, res) => {
  try {
    res.json(cartItems);
  } catch (error) {
    console.error('Error getting cart:', error);
    res.status(500).json({ error: 'Failed to get cart' });
  }
});

app.post('/api/cart/reset', (req, res) => {
  try {
    cartItems = [];
    res.sendStatus(200);
  } catch (error) {
    console.error('Error resetting cart:', error);
    res.status(500).json({ error: 'Failed to reset cart' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ API شغّال على http://localhost:${PORT}`);
}); 