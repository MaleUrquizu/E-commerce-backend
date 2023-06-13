import mongoose from "mongoose";

const Schema = mongoose.Schema

const productSchema = new Schema(
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      category: { type: String } 
    },
    { collection: 'products' }
  );

export default mongoose.model('ProductModel', productSchema)