import express from "express";
import RestaurantRouter from './RestaurantRouter';
import FoodMenuRouter from "./FoodMenuRouter";
import OrderRouter from "./OrderRouter";
const Router = express.Router();

Router.use('/restaurants',RestaurantRouter);
Router.use('/foods', FoodMenuRouter);
Router.use('/orders', OrderRouter);
export default Router;