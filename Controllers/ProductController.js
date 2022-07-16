const ProductModel = require("../Models/ProductModel");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.json({
      controller: getAllProducts,
      success: false,
      message: error,
    });
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    const product = await UserModel.findOne({
      product_id: req.params.product_id,
    });
    res.json(product);
  } catch (error) {
    res.json({
      controller: "getOneProduct",
      success: false,
      message: error,
    });
  }
};
