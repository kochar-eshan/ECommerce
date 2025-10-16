import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    stars: { type: Number },
    counts: { type: Number },
  },
  priceCents: { type: Number },
  keywords: { type: [String] },
});

const Products = mongoose.model('Product', productSchema);

export default Products;