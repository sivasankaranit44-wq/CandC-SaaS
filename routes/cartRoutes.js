const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");

// ✅ Get cart for a user
router.get("/:uid", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.uid })
      .populate("items.productId");
    res.json(cart || { userId: req.params.uid, items: [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Add item to cart
router.post("/:uid", async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    let cart = await Cart.findOne({ userId: req.params.uid });

    if (!cart) {
      cart = new Cart({ userId: req.params.uid, items: [] });
    }

    const existingItem = cart.items.find(
      i => i.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    const populatedCart = await Cart.findOne({ userId: req.params.uid })
      .populate("items.productId");

    res.json(populatedCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Remove item from cart
router.delete("/:uid/:productId", async (req, res) => {
  try {
    const { uid, productId } = req.params;
    const cart = await Cart.findOne({ userId: uid });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(
      item => item.productId.toString() !== productId
    );

    await cart.save();
    const populatedCart = await Cart.findOne({ userId: uid })
      .populate("items.productId");

    res.json(populatedCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;