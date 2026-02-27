const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const contactRoutes = require("./routes/contactRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "https://cand-c-saa-s-frontend.vercel.app"
}));

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/orders", orderRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Hello from C&C backend!");
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);

});
