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
}

export default RestaurantController;