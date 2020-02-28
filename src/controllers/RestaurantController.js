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
}

export default RestaurantController;