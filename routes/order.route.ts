import express from "express"
import { createCheckoutSession, getOrders, stripeWebhook } from "../controller/order.controller";
import { isAuthenticated } from "../middlewares/authorised";
const orderRoute = express.Router();

orderRoute.get("/",isAuthenticated, getOrders);
orderRoute.post("/checkout/create-checkout-session",isAuthenticated, createCheckoutSession);
orderRoute.post("/webhook",express.raw({type: 'application/json'}), stripeWebhook);

export default orderRoute;