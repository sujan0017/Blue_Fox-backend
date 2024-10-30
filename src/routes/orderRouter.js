// routes/orderRouter.js
import express from "express";
import {
  placeOrder,
  trackOrder,
  updatePaymentStatus,
} from "../controller/orderController.js";

const router = express.Router();

// Route for placing an order
router.post("/", placeOrder);

// Route for tracking an order by ID
router.get("/:orderId", trackOrder);

// Route for updating payment status
router.patch("/:orderId/payment-status", updatePaymentStatus);

export default router;
