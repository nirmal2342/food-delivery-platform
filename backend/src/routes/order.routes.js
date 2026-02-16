const express = require("express");

const router = express.Router();

const {
  placeOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
  cancelOrder,
} = require("../controllers/order.controller");


router.post("/place", placeOrder);

router.get("/user/:userId", getUserOrders);

router.get("/:id", getOrderById);

router.put("/status/:id", updateOrderStatus);

router.put("/cancel/:id", cancelOrder);


module.exports = router;
