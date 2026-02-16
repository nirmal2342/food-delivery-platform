const express = require("express");

const router = express.Router();

const {
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} = require("../controllers/cart.controller");


router.post("/add", addToCart);

router.get("/:userId", getCart);

router.put("/update", updateCartItem);

router.delete("/remove", removeFromCart);

router.delete("/clear", clearCart);


module.exports = router;
