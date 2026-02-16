const express = require("express");

const router = express.Router();

const {
  assignDelivery,
  getDeliveryByOrder,
  updateDeliveryStatus,
  getPartnerDeliveries,
} = require("../controllers/delivery.controller");


router.post("/assign", assignDelivery);

router.get("/order/:orderId", getDeliveryByOrder);

router.put("/status/:id", updateDeliveryStatus);

router.get("/partner/:partnerId", getPartnerDeliveries);


module.exports = router;
