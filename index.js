const express = require('express');
const app = express();

const cors = require('cors');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3001;
const dbConection = require('./config/db.js')

const productRoutes = require('./routes/productRoutes.js');

dotenv.config();

app.use(cors({
  origin: 'http://localhost:5173', // o el puerto donde corre tu vite frontend
  credentials: true // Permite que se reciban credenciales desde el front
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/products', productRoutes);

dbConection()

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));