const Payment = require("../models/Payment.model");
const Order = require("../models/Order.model");


// @desc Create payment
// @route POST /api/payments/create

const createPayment = async (req, res) => {
  try {

    const { orderId, userId, paymentMethod } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    const payment = await Payment.create({
      order: orderId,
      user: userId,
      amount: order.totalAmount,
      paymentMethod,
      paymentStatus: "pending",
    });

    res.status(201).json({
      success: true,
      message: "Payment created",
      data: payment,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Get payment by order

const getPaymentByOrder = async (req, res) => {
  try {

    const payment = await Payment.findOne({
      order: req.params.orderId,
    });

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    res.status(200).json({
      success: true,
      data: payment,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Update payment status

const updatePaymentStatus = async (req, res) => {
  try {

    const { status, transactionId } = req.body;

    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      {
        paymentStatus: status,
        transactionId,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Payment status updated",
      data: payment,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createPayment,
  getPaymentByOrder,
  updatePaymentStatus,
};
