import express from "express";
import FoodMenuController from "../controllers/FoodMenuController";
const controller = new FoodMenuController();
const FoodMenuRouter = express.Router();

FoodMenuRouter.get('/', (req,res) => controller.filter(req,res));

export default FoodMenuRouter;