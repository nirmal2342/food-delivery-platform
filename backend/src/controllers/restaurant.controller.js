const Restaurant = require("../models/Restaurant.model");

// @desc Create new restaurant
// @route POST /api/restaurants
// @access Admin

const createRestaurant = async (req, res) => {
  try {

    const { name, description, address, phone, image } = req.body;

    const restaurant = await Restaurant.create({
      name,
      description,
      address,
      phone,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Restaurant created successfully",
      data: restaurant,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Get all restaurants
// @route GET /api/restaurants
// @access Public

const getRestaurants = async (req, res) => {
  try {

    const restaurants = await Restaurant.find({ isActive: true });

    res.status(200).json({
      success: true,
      count: restaurants.length,
      data: restaurants,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Get single restaurant
// @route GET /api/restaurants/:id
// @access Public

const getRestaurantById = async (req, res) => {
  try {

    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found",
      });
    }

    res.status(200).json({
      success: true,
      data: restaurant,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Update restaurant
// @route PUT /api/restaurants/:id
// @access Admin

const updateRestaurant = async (req, res) => {
  try {

    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Restaurant updated successfully",
      data: restaurant,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc Delete restaurant
// @route DELETE /api/restaurants/:id
// @access Admin

const deleteRestaurant = async (req, res) => {
  try {

    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Restaurant deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
};
