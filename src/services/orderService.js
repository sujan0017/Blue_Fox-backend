
import Order from "../models/Order.js";


export const createOrder = async (userId, items, totalAmount) => {
  const newOrder = await Order.create({
    user: userId,
    items,
    totalAmount,
  });
  return newOrder;
};


export const getOrderById = async (orderId) => {
  const order = await Order.findById(orderId).populate("user items.product");
  return order;
};


export const updateOrderPaymentStatus = async (orderId, paymentStatus) => {
  const order = await Order.findById(orderId);
  if (!order) return null;
  order.paymentStatus = paymentStatus;
  await order.save();
  return order;
};
