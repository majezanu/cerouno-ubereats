import express from "express";
import RestaurantController from "../controllers/RestaurantController";
const controller = new RestaurantController();
const RestaurantRouter = express.Router();

RestaurantRouter.get('/', (req,res) => controller.filter(req,res));
RestaurantRouter.get('/:id', (req,res) => controller.getOne(req,res));

export default RestaurantRouter;