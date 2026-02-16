const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Food Delivery API",
      version: "1.0.0",
      description: "Food Delivery Backend API Documentation",
    },
    servers: [
      {
        url: process.env.RENDER_EXTERNAL_URL || "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJSDoc(options);
