const express = require("express");

const router = express.Router();

const {
  createPayment,
  getPaymentByOrder,
  updatePaymentStatus,
} = require("../controllers/payment.controller");

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Payment management APIs
 */


/**
 * @swagger
 * /api/payments/create:
 *   post:
 *     summary: Create payment
 *     tags: [Payments]
 */
router.post("/create", createPayment);

/**
 * @swagger
 * /api/payments/order/{orderId}:
 *   get:
 *     summary: Get payment by order
 *     tags: [Payments]
 */
router.get("/order/:orderId", getPaymentByOrder);

/**
 * @swagger
 * /api/payments/status/{id}:
 *   put:
 *     summary: Update payment status
 *     tags: [Payments]
 */
router.put("/status/:id", updatePaymentStatus);


module.exports = router;
