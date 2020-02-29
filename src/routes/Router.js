import express from "express";
import RestaurantRouter from './RestaurantRouter';
import FoodMenuRouter from "./FoodMenuRouter";
const Router = express.Router();

Router.use('/restaurants',RestaurantRouter);
Router.use('/foods', FoodMenuRouter);

export default Router;