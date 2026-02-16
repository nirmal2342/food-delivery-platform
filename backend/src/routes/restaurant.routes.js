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
/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: Restaurant management APIs
 */


/**
 * @swagger
 * /api/restaurants:
 *   get:
 *     summary: Get all restaurants
 *     tags: [Restaurants]
 *     responses:
 *       200:
 *         description: List of restaurants
 */
router.get("/", getRestaurants);

/**
 * @swagger
 * /api/restaurants/{id}:
 *   get:
 *     summary: Get restaurant by ID
 *     tags: [Restaurants]
 */
router.get("/:id", getRestaurantById);


// Admin routes
/**
 * @swagger
 * /api/restaurants:
 *   post:
 *     summary: Create restaurant
 *     tags: [Restaurants]
 */
router.post("/", createRestaurant);

/**
 * @swagger
 * /api/restaurants/{id}:
 *   put:
 *     summary: Update restaurant
 *     tags: [Restaurants]
 */
router.put("/:id", updateRestaurant);

/**
 * @swagger
 * /api/restaurants/{id}:
 *   delete:
 *     summary: Delete restaurant
 *     tags: [Restaurants]
 */
router.delete("/:id", deleteRestaurant);


module.exports = router;
