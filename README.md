# 🍔 Food Delivery Backend API

A production-level Food Delivery Backend built using the MERN stack (MongoDB, Express.js, Node.js). This backend powers a complete food ordering system similar to Swiggy or Zomato, including authentication, restaurant management, menu management, cart, orders, payments, delivery tracking, and API documentation.

🔗 **Live API:** https://food-delivery-platform-4wuy.onrender.com/ <br>
📄 **Swagger Docs:** https://food-delivery-platform-4wuy.onrender.com/api-docs/

---

# 🚀 Features

## 🔐 Authentication
- User Registration
- User Login
- JWT-based authentication
- Role support (customer, admin, delivery)

## 🏪 Restaurant Management
- Create restaurant
- Update restaurant
- Delete restaurant
- Get all restaurants

## 🍽️ Menu Management
- Add menu items
- Update menu items
- Delete menu items
- Get menu by restaurant

## 🛒 Cart System
- Add item to cart
- Update item quantity
- Remove item
- Clear cart
- Get user's cart

## 📦 Order Management
- Place order from cart
- View user orders
- Update order status
- Cancel order

## 💳 Payment Management
- Create payment record
- Update payment status
- Track payment details

## 🚚 Delivery Management
- Assign delivery partner
- Update delivery status
- Track delivery
- View partner deliveries

## 📄 API Documentation
- Swagger UI integration
- Interactive API testing

---

# 🛠️ Tech Stack

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB Atlas
- Mongoose

**Authentication**
- JWT (jsonwebtoken)
- bcryptjs

**Documentation**
- Swagger (swagger-ui-express, swagger-jsdoc)

**Deployment**
- Render

---

# 📁 Project Structure
```
backend/
│
├── src/
│ ├── config/
│ │ ├── db.js
│ │ └── swagger.js
│ │
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ ├── restaurant.controller.js
│ │ ├── menu.controller.js
│ │ ├── cart.controller.js
│ │ ├── order.controller.js
│ │ ├── payment.controller.js
│ │ └── delivery.controller.js
│ │
│ ├── models/
│ │ ├── User.js
│ │ ├── Restaurant.js
│ │ ├── MenuItem.js
│ │ ├── Cart.js
│ │ ├── Order.js
│ │ ├── Payment.js
│ │ └── Delivery.js
│ │
│ ├── routes/
│ │ ├── auth.routes.js
│ │ ├── restaurant.routes.js
│ │ ├── menu.routes.js
│ │ ├── cart.routes.js
│ │ ├── order.routes.js
│ │ ├── payment.routes.js
│ │ └── delivery.routes.js
│ │
│ ├── middleware/
│ │ └── auth.middleware.js
│ │
│ ├── utils/
│ │ └── generateToken.js
│ │
│ ├── app.js
│ └── server.js
│
├── .env
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```
git clone https://github.com/YOUR_USERNAME/food-delivery.git
cd food-delivery/backend
```
2️⃣ Install Dependencies
```
npm install
```
3️⃣ Setup Environment Variables
```
Create .env file:
```
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
4️⃣ Run Backend Locally
```
npm run dev
```
Server runs at:
```
http://localhost:5000
```
Swagger docs:
```
http://localhost:5000/api-docs
```

📄 API Documentation
Swagger UI available at:
```
https://food-delivery-platform-4wuy.onrender.com/api-docs/
```
Features:

- Interactive testing
- Request/response schema
- Try APIs directly from browser

🚀 Deployment
Backend deployed using Render:
```
https://food-delivery-platform-4wuy.onrender.com/
```
Deployment includes:

- MongoDB Atlas integration
- Environment variable configuration
- Production-ready server setup

🔒 Security Features
- Password hashing using bcrypt
- JWT authentication
- Environment variable protection
- MongoDB secure connection


⭐ Future Improvements
- Role-based authorization
- Razorpay/Stripe integration
- Redis caching
- Rate limiting
- Docker support
- CI/CD pipeline
- Frontend integration
