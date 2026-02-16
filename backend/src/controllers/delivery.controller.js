const Delivery = require("../models/Delivery.model");
const Order = require("../models/Order.model");
const User = require("../models/User.model");


// @desc Assign delivery partner
// @route POST /api/delivery/assign

const assignDelivery = async (req, res) => {
  try {

    const { orderId, deliveryPartnerId } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    const partner = await User.findById(deliveryPartnerId);

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: "Delivery partner not found",
      });
    }

    const delivery = await Delivery.create({
      order: orderId,
      deliveryPartner: deliveryPartnerId,
      status: "assigned",
    });

    res.status(201).json({
      success: true,
      message: "Delivery partner assigned",
      data: delivery,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Get delivery by order

const getDeliveryByOrder = async (req, res) => {
  try {

    const delivery = await Delivery.findOne({
      order: req.params.orderId,
    })
      .populate("deliveryPartner", "name phone")
      .populate("order");

    if (!delivery) {
      return res.status(404).json({
        success: false,
        message: "Delivery not found",
      });
    }

    res.status(200).json({
      success: true,
      data: delivery,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Update delivery status

const updateDeliveryStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const delivery = await Delivery.findByIdAndUpdate(
      req.params.id,
      {
        status,
        deliveredAt: status === "delivered" ? new Date() : null,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Delivery status updated",
      data: delivery,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Get deliveries by partner

const getPartnerDeliveries = async (req, res) => {
  try {

    const deliveries = await Delivery.find({
      deliveryPartner: req.params.partnerId,
    }).populate("order");

    res.status(200).json({
      success: true,
      count: deliveries.length,
      data: deliveries,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  assignDelivery,
  getDeliveryByOrder,
  updateDeliveryStatus,
  getPartnerDeliveries,
};
