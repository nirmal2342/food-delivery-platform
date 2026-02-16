const Cart = require("../models/Cart.model");
const MenuItem = require("../models/MenuItem");


// @desc Add item to cart
// @route POST /api/cart/add

const addToCart = async (req, res) => {
  try {

    const { userId, menuItemId, quantity } = req.body;

    const menuItem = await MenuItem.findById(menuItemId);

    if (!menuItem) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found",
      });
    }

    let cart = await Cart.findOne({ user: userId });

    // create cart if not exists
    if (!cart) {
      cart = await Cart.create({
        user: userId,
        items: [],
        totalPrice: 0,
      });
    }

    // check if item already exists
    const itemIndex = cart.items.findIndex(
      item => item.menuItem.toString() === menuItemId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({
        menuItem: menuItemId,
        quantity,
      });
    }

    // recalculate total price
    let total = 0;

    for (let item of cart.items) {
      const menu = await MenuItem.findById(item.menuItem);
      total += menu.price * item.quantity;
    }

    cart.totalPrice = total;

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Item added to cart",
      data: cart,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Get user's cart
// @route GET /api/cart/:userId

const getCart = async (req, res) => {
  try {

    const cart = await Cart.findOne({ user: req.params.userId })
      .populate("items.menuItem", "name price image");

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    res.status(200).json({
      success: true,
      data: cart,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Update cart item quantity

const updateCartItem = async (req, res) => {
  try {

    const { userId, menuItemId, quantity } = req.body;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      item => item.menuItem.toString() === menuItemId
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found in cart",
      });
    }

    item.quantity = quantity;

    // recalculate total
    let total = 0;

    for (let item of cart.items) {
      const menu = await MenuItem.findById(item.menuItem);
      total += menu.price * item.quantity;
    }

    cart.totalPrice = total;

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Cart updated",
      data: cart,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Remove item from cart

const removeFromCart = async (req, res) => {
  try {

    const { userId, menuItemId } = req.body;

    const cart = await Cart.findOne({ user: userId });

    cart.items = cart.items.filter(
      item => item.menuItem.toString() !== menuItemId
    );

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Item removed",
      data: cart,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Clear cart

const clearCart = async (req, res) => {
  try {

    const { userId } = req.body;

    const cart = await Cart.findOne({ user: userId });

    cart.items = [];
    cart.totalPrice = 0;

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Cart cleared",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart,
  clearCart,
};
