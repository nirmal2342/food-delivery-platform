const Order = require("../models/Order.model");
const Cart = require("../models/Cart.model");
const MenuItem = require("../models/MenuItem.model");


// @desc Place order
// @route POST /api/orders/place

const placeOrder = async (req, res) => {
  try {

    const { userId, deliveryAddress } = req.body;

    const cart = await Cart.findOne({ user: userId });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    // convert cart items → order items
    const orderItems = [];

    for (let item of cart.items) {
      const menuItem = await MenuItem.findById(item.menuItem);

      orderItems.push({
        menuItem: menuItem._id,
        quantity: item.quantity,
        price: menuItem.price,
      });
    }

    const order = await Order.create({
      user: userId,
      items: orderItems,
      totalAmount: cart.totalPrice,
      deliveryAddress,
    });

    // clear cart after order
    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      data: order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Get user orders
// @route GET /api/orders/user/:userId

const getUserOrders = async (req, res) => {
  try {

    const orders = await Order.find({ user: req.params.userId })
      .populate("items.menuItem", "name price");

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Get single order

const getOrderById = async (req, res) => {
  try {

    const order = await Order.findById(req.params.id)
      .populate("items.menuItem", "name price");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Update order status

const updateOrderStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Order status updated",
      data: order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Cancel order

const cancelOrder = async (req, res) => {
  try {

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: "cancelled" },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Order cancelled",
      data: order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  placeOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
  cancelOrder,
};
