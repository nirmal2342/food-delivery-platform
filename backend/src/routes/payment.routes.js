const express = require("express");

const router = express.Router();

const {
  createPayment,
  getPaymentByOrder,
  updatePaymentStatus,
} = require("../controllers/payment.controller");


router.post("/create", createPayment);

router.get("/order/:orderId", getPaymentByOrder);

router.put("/status/:id", updatePaymentStatus);


module.exports = router;
