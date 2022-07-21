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
      _id: req.params._id,
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
