const router = require("express").Router();

const {
  getAllProducts,
  getOneProduct,
} = require("../Controllers/ProductController");

router.route("/getAllProducts").get(getAllProducts);

router.route("/getOneProduct/:product_id").get(getOneProduct);

module.exports = router;
