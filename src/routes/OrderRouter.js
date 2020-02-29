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
// RestaurantRouter.get('/:id', (req,res) => controller.getOne(req,res));

export default OrderRouter;