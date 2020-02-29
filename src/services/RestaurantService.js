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
            restaurants = RestaurantRepository.filter('id', Number(filters.id), restaurants);
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
        let restaurant = RestaurantRepository.find('id', Number(id), this.model.restaurants);
        if(!restaurant) {
            return null;
        }
        let foods = this.foodService.filter('restaurant_id', restaurant.id);
        restaurant.foods = foods;
        return restaurant;
    }
}

export default RestaurantService;