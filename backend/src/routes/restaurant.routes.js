const express = require("express");

const router = express.Router();

const {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurant.controller");


// Public routes
router.get("/", getRestaurants);

router.get("/:id", getRestaurantById);


// Admin routes
router.post("/", createRestaurant);

router.put("/:id", updateRestaurant);

router.delete("/:id", deleteRestaurant);


module.exports = router;
