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
/**
 * @swagger
 * /api/menu/restaurant/{restaurantId}:
 *   get:
 *     summary: Get menu by restaurant
 *     tags: [Menu]
 */
router.get("/restaurant/:restaurantId", getMenuByRestaurant);

/**
 * @swagger
 * /api/menu/{id}:
 *   get:
 *     summary: Get menu item by ID
 *     tags: [Menu]
 */
router.get("/:id", getMenuItemById);


// Admin routes
/**
 * @swagger
 * tags:
 *   name: Menu
 *   description: Menu management APIs
 */


/**
 * @swagger
 * /api/menu:
 *   post:
 *     summary: Create menu item
 *     tags: [Menu]
 */
router.post("/", createMenuItem);

/**
 * @swagger
 * /api/menu/{id}:
 *   put:
 *     summary: Update menu item
 *     tags: [Menu]
 */
router.put("/:id", updateMenuItem);

/**
 * @swagger
 * /api/menu/{id}:
 *   delete:
 *     summary: Delete menu item
 *     tags: [Menu]
 */
router.delete("/:id", deleteMenuItem);


module.exports = router;
