import RestaurantRepository from "../model/RestaurantRepository";
import FoodMenuRepository from '../model/FoodMenuRepository';
class RestaurantService
{
    constructor() {
        this.model = new RestaurantRepository();
        this.foodModel = new FoodMenuRepository();
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
        let foods = FoodMenuRepository.filter('restaurand_id', id, this.foodModel.foodMenu);
        restaurant.foods = foods;
        return restaurant;
    }
}

export default RestaurantService;