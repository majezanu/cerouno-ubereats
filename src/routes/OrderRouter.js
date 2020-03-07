import express from "express";
import OrderController from "../controllers/OrderController";

const controller = new OrderController();
const OrderRouter = express.Router();

OrderRouter.get('/:id/select-food', (req,res) => controller.selectFood(req,res));
OrderRouter.get('/:id/deselect-food', (req,res) => controller.deselectFood(req,res));
OrderRouter.get('/current', (req, res) => controller.watchCurrentOrder(req, res));
OrderRouter.get('/accept', (req, res) => controller.accept(req, res));
OrderRouter.get('/cancel', (req, res) => controller.cancel(req, res));
OrderRouter.get('/checkout', (req, res) => controller.checkout(req, res));

OrderRouter.get('/:restaurantId/restaurant-orders', (req, res) => controller.getByRestaurant(req, res));
OrderRouter.get('/:restaurantId/restaurant-orders/total', (req, res) => controller.getTotal(req, res));
OrderRouter.get('/:restaurantId/restaurant-orders/:id/accept', (req, res) => controller.acceptOrderByRestaurant(req, res));
OrderRouter.get('/:restaurantId/restaurant-orders/:id/finish', (req, res) => controller.finsishOrderByRestaurant(req, res));


export default OrderRouter;