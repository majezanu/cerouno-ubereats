import RestaurantRepository from "../model/RestaurantRepository";
import FoodMenuRepository from "../model/FoodMenuRepository";
import { v4 as uuidv4 } from 'uuid';

class FoodMenuService
{
    constructor() {
        this.model = new FoodMenuRepository();
    }
    filter(filters) {
        let foods = this.model.foodMenu;
        if(filters.id) {
            foods = FoodMenuRepository.filter('id', filters.id, foods);
        }
        if(filters.name) {
            foods = FoodMenuRepository.filter('name', filters.name, foods);
        }
        if(filters.restaurant_id) {
            foods = FoodMenuRepository.filter('restaurant_id', 
                                                filters.restaurant_id, 
                                                foods);
        }
        return foods;
    }
    getOne(id) {
        let food = FoodMenuRepository.find('id', id, this.model.foodMenu);
        if(!food) {
            return null;
        }
        return food;
    }
    insertFoodOnArray(food, items) {
        food.id = uuidv4();
        return FoodMenuRepository.insert(food, items);
    }
    editFood(id, data) {
        let food = this.getOne(id);
        Object.assign(food, data);
        return food;
    }
    deleteFood(foodId) {
        this.model.foodMenu = FoodMenuRepository.deleteById(foodId, this.model.foodMenu);
    }
    quitFoodFromArray(foodId, items) {
        items = items.filter(
            item => item.id !== foodId
        );
        return items;
    }
}

export default FoodMenuService;