const express = require("express");

const router = express.Router();

const {
  createMenuItem,
  getMenuByRestaurant,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
} = require("../controllers/menu.controller");


// Public routes
router.get("/restaurant/:restaurantId", getMenuByRestaurant);

router.get("/:id", getMenuItemById);


// Admin routes
router.post("/", createMenuItem);

router.put("/:id", updateMenuItem);

router.delete("/:id", deleteMenuItem);


module.exports = router;
