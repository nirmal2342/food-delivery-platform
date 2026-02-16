const express = require("express");

const router = express.Router();

const {
  placeOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
  cancelOrder,
} = require("../controllers/order.controller");

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management APIs
 */


/**
 * @swagger
 * /api/orders/place:
 *   post:
 *     summary: Place order
 *     tags: [Orders]
 */
router.post("/place", placeOrder);

/**
 * @swagger
 * /api/orders/user/{userId}:
 *   get:
 *     summary: Get user orders
 *     tags: [Orders]
 */
router.get("/user/:userId", getUserOrders);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
 */
router.get("/:id", getOrderById);

/**
 * @swagger
 * /api/orders/status/{id}:
 *   put:
 *     summary: Update order status
 *     tags: [Orders]
 */
router.put("/status/:id", updateOrderStatus);

/**
 * @swagger
 * /api/orders/cancel/{id}:
 *   put:
 *     summary: Cancel order
 *     tags: [Orders]
 */
router.put("/cancel/:id", cancelOrder);


module.exports = router;
