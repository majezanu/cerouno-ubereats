import RestaurantService from "../services/RestaurantService";

class RestaurantController
{
    constructor() {
        this.service = new RestaurantService();
    }
    filter(req,res,next) {
        let restaurants = this.service.filter(req.query);
        res.send(restaurants);
    }

    getOne(req, res, next) {
        let restaurant = this.service.getOne(req.params.id);
        if(!restaurant) {
            res.status(404);
            res.send({
                error: 'No se encontró el restaurante'
            });
        }
        res.send(restaurant);
    }
    createFoods(req, res, next) {
        let restaurant = this.service.getOne(req.params.id);
        if(!restaurant) {
            res.status(404);
            res.send({
                error: 'No se encontró el restaurante'
            });
        }
        let food = this.service.createFoods(restaurant.id, req.body);
        res.send(food);
    }
    editFood(req, res, next) {
        let food = this.service.editFood(req.params.id, req.params.foodId, req.body);
        if(!food) {
            res.status(404);
            res.send({
                error: 'No se encontró el platillo'
            });
        }
        res.send(food);
    }
    deleteFood(req, res, next) {
        let isDeleted = this.service.deleteFood(req.params.id, req.params.foodId);
        if(!isDeleted) {
            res.status(422);
            res.send({
                error: 'No se pudo eliminar'
            });
        }
        res.send({
            msg: 'Se eliminó la comida'
        });
    }
}

export default RestaurantController;