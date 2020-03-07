import express from "express";
import RestaurantController from "../controllers/RestaurantController";
const controller = new RestaurantController();
const RestaurantRouter = express.Router();

RestaurantRouter.get('/', (req,res) => controller.filter(req,res));
RestaurantRouter.get('/:id', (req,res) => controller.getOne(req,res));
RestaurantRouter.post('/:id/foods', (req, res) => controller.createFoods(req,res));
RestaurantRouter.put('/:id/foods/:foodId', (req, res) => controller.editFood(req, res));
RestaurantRouter.delete('/:id/foods/:foodId', (req, res) => controller.deleteFood(req, res));

export default RestaurantRouter;