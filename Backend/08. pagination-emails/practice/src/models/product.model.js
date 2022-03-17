const mongoose = require("mongoose");

//Step 1: Create schema
const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true},
        price: { type: Number, required: true},
        product_image_url: { type: String, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    },
    
);

//Step 2: Create model
const Product = mongoose.model("product", productSchema);

module.exports = Product;