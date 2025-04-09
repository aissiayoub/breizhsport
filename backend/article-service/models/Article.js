const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    image: {
        type: String, // URL de l'image
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('Article', ArticleSchema);
