const express = require('express');
const app = express();

const cors = require('cors');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3001;
const dbConection = require('./config/db.js')

const productRoutes = require('./routes/productRoutes.js');
const sizeRoutes = require('./routes/sizeRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
//const favoriteRoutes = require('./routes/favoriteRoutes.js');

dotenv.config();

app.use(cors({
  origin: 'https://brafittingadvisor.netlify.app',
  credentials: true // Permite que se reciban credenciales desde el front
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/auth', authRoutes);
app.use('/api/sizes', sizeRoutes);
app.use('/api/products', productRoutes);
//app.use('api/favorites', favoriteRoutes); // Implementar a futuro

dbConection()

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));