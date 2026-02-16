const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const restaurantRoutes = require("./routes/restaurant.routes");
const menuRoutes = require("./routes/menu.routes");
const cartRoutes = require("./routes/cart.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => {
  res.send("Food Delivery API Running");
});

module.exports = app;
