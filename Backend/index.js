import express from 'express';
import router from './routes/products.js';
import dotenv from "dotenv";
import connectDb from './db/connectToDb.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

// Enable CORS so frontend can fetch data
app.use(cors({
  origin: 'http://localhost:5173', // React dev server URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', router);

// Connect to DB first, then start server
connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });

  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });
