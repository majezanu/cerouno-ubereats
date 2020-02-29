import RestaurantRepository from "../model/RestaurantRepository";
import FoodMenuRepository from "../model/FoodMenuRepository";

class FoodMenuService
{
    constructor() {
        this.model = new FoodMenuRepository();
    }
    filter(filters) {
        let foods = this.model.foodMenu;
        if(filters.id) {
            foods = FoodMenuRepository.filter('id', Number(filters.id), foods);
        }
        if(filters.name) {
            foods = FoodMenuRepository.filter('name', filters.name, foods);
        }
        if(filters.restaurand_id) {
            foods = FoodMenuRepository.filter('restaurand_id', 
                                                Number(filters.restaurand_id), 
                                                foods);
        }
        return foods;
    }
    getOne(id) {
        let food = FoodMenuRepository.find('id', Number(id), this.model.foodMenu);
        if(!food) {
            return null;
        }
        return food;
    }
    insertFoodOnArray(food, items) {
        return FoodMenuRepository.insert(food, items);
    }
    quitFoodFromArray(foodId, items) {
        items = items.filter(
            item => item.id !== foodId
        );
        return items;
    }
}

export default FoodMenuService;