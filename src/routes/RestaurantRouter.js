import express from "express";
import RestaurantController from "../controllers/RestaurantController";
const controller = new RestaurantController();
const RestaurantRouter = express.Router();

RestaurantRouter.get('/', (req,res) => controller.filter(req,res));

export default RestaurantRouter;