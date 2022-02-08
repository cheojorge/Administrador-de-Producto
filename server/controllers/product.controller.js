const {Product} = require("../models/product.model")

module.exports.createProduct = (req, res) => {
    const { title,price, descrip} = req.body;
    Product.create({
        title,
        price,
        descrip
    })
    .then(product =>res.json(product))
    .catch(err => res.json(err))
}