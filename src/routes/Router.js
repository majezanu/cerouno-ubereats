import express from "express";
import RestaurantRouter from './RestaurantRouter';
const Router = express.Router();

Router.use('/restaurants',RestaurantRouter);

export default Router;