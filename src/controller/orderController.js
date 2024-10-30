import Order from "../models/Order.js";

// Place a new order
export const placeOrder = async (req, res) => {
  const { userId, items, totalAmount } = req.body;

  try {
    const newOrder = await Order.create({
      user: userId,
      items,
      totalAmount,
    });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: "Failed to place order" });
  }
};

// Track an order by ID
export const trackOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId).populate("user items.product");
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve order" });
  }
};

// Update payment status
export const updatePaymentStatus = async (req, res) => {
  const { orderId } = req.params;
  const { paymentStatus } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    order.paymentStatus = paymentStatus;
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to update payment status" });
  }
};
