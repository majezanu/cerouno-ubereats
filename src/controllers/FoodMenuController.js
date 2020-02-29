import RestaurantService from "../services/RestaurantService";
import FoodMenuService from "../services/FoodMenuService";

class FoodMenuController
{
    constructor() {
        this.service = new FoodMenuService();
    }
    filter(req,res,next) {
        let foods = this.service.filter(req.query);
        res.send(foods);
    }
}

export default FoodMenuController;