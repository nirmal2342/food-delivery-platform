const express = require("express");

const router = express.Router();

const {
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} = require("../controllers/cart.controller");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management APIs
 */


/**
 * @swagger
 * /api/cart/add:
 *   post:
 *     summary: Add item to cart
 *     tags: [Cart]
 */
router.post("/add", addToCart);

/**
 * @swagger
 * /api/cart/{userId}:
 *   get:
 *     summary: Get user cart
 *     tags: [Cart]
 */
router.get("/:userId", getCart);

/**
 * @swagger
 * /api/cart/update:
 *   put:
 *     summary: Update cart item
 *     tags: [Cart]
 */
router.put("/update", updateCartItem);

/**
 * @swagger
 * /api/cart/remove:
 *   delete:
 *     summary: Remove item from cart
 *     tags: [Cart]
 */
router.delete("/remove", removeFromCart);

/**
 * @swagger
 * /api/cart/clear:
 *   delete:
 *     summary: Clear cart
 *     tags: [Cart]
 */
router.delete("/clear", clearCart);


module.exports = router;
