const mongoose = require('mongoose');

const productsSchema = require("./schema")

const Product =mongoose.model("product", productsSchema)

module.exports= Product;