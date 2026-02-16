const MenuItem = require("../models/MenuItem.model");


// @desc Create menu item
// @route POST /api/menu
// @access Admin

const createMenuItem = async (req, res) => {
  try {

    const { restaurant, name, description, price, category, image } = req.body;

    const menuItem = await MenuItem.create({
      restaurant,
      name,
      description,
      price,
      category,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Menu item created successfully",
      data: menuItem,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Get menu items by restaurant
// @route GET /api/menu/restaurant/:restaurantId
// @access Public

const getMenuByRestaurant = async (req, res) => {
  try {

    const menuItems = await MenuItem.find({
      restaurant: req.params.restaurantId,
      isAvailable: true,
    }).populate("restaurant", "name address");

    res.status(200).json({
      success: true,
      count: menuItems.length,
      data: menuItems,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Get single menu item
// @route GET /api/menu/:id
// @access Public

const getMenuItemById = async (req, res) => {
  try {

    const menuItem = await MenuItem.findById(req.params.id)
      .populate("restaurant", "name address");

    if (!menuItem) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found",
      });
    }

    res.status(200).json({
      success: true,
      data: menuItem,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Update menu item
// @route PUT /api/menu/:id
// @access Admin

const updateMenuItem = async (req, res) => {
  try {

    const menuItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!menuItem) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Menu item updated successfully",
      data: menuItem,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Delete menu item
// @route DELETE /api/menu/:id
// @access Admin

const deleteMenuItem = async (req, res) => {
  try {

    const menuItem = await MenuItem.findByIdAndDelete(req.params.id);

    if (!menuItem) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Menu item deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createMenuItem,
  getMenuByRestaurant,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
};
