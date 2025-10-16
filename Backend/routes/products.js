import express from 'express';
import { addPro, getAllProducts } from '../controllers/products.js';
// import {sendProducts} from '../controllers/products';

const router = express.Router();

router.get('/', getAllProducts);

router.post('/', addPro);    

export default router;