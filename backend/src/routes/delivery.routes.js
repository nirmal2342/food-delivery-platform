const express = require("express");

const router = express.Router();

const {
  assignDelivery,
  getDeliveryByOrder,
  updateDeliveryStatus,
  getPartnerDeliveries,
} = require("../controllers/delivery.controller");

/**
 * @swagger
 * tags:
 *   name: Delivery
 *   description: Delivery management APIs
 */


/**
 * @swagger
 * /api/delivery/assign:
 *   post:
 *     summary: Assign delivery partner
 *     tags: [Delivery]
 */
router.post("/assign", assignDelivery);

/**
 * @swagger
 * /api/delivery/order/{orderId}:
 *   get:
 *     summary: Track delivery
 *     tags: [Delivery]
 */
router.get("/order/:orderId", getDeliveryByOrder);

/**
 * @swagger
 * /api/delivery/status/{id}:
 *   put:
 *     summary: Update delivery status
 *     tags: [Delivery]
 */
router.put("/status/:id", updateDeliveryStatus);

/**
 * @swagger
 * /api/delivery/partner/{partnerId}:
 *   get:
 *     summary: Get partner deliveries
 *     tags: [Delivery]
 */
router.get("/partner/:partnerId", getPartnerDeliveries);


module.exports = router;
