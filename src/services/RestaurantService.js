import RestaurantRepository from "../model/RestaurantRepository";
import FoodMenuService from "./FoodMenuService";

class RestaurantService
{
    constructor() {
        this.model = new RestaurantRepository();
        this.foodService = new FoodMenuService();
    }
    filter(filters) {
        let restaurants = this.model.restaurants;
        if(filters.id) {
            restaurants = RestaurantRepository.filter('id', filters.id, restaurants);
        }
        if(filters.name) {
            restaurants = RestaurantRepository.filter('name', filters.name, restaurants);
        }
        if(filters.zone) {
            restaurants = RestaurantRepository.filter('zone', filters.zone, restaurants);
        }
        return restaurants;
    }
    getOne(id) {
        let restaurant = RestaurantRepository.find('id', id, this.model.restaurants);
        if(!restaurant) {
            return null;
        }
        let foods = this.foodService.filter({'restaurant_id':restaurant.id});
        restaurant.foods = foods;
        return restaurant;
    }
    createFoods(id, food) {
        food.restaurant_id = id;
        this.foodService.insertFoodOnArray(food,this.foodService.filter({}));
        return food;
    }
    editFood(restaurantId, foodId, data) {
        let food = this.foodService.filter({'restaurant_id':restaurantId, 'id': foodId})[0];
        if(!food) {
            return null;
        }
        return this.foodService.editFood(food.id, data);
    }
    deleteFood(restaurantId, foodId) {
        let food = this.foodService.filter({'restaurant_id':restaurantId, 'id': foodId})[0];
        if(!food) {
            return false;
        }
        this.foodService.deleteFood(food.id);
        return true;
    }
}

export default RestaurantService;