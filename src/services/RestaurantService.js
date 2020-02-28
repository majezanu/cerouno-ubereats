import RestaurantRepository from "../model/RestaurantRepository";

class RestaurantService
{
    constructor() {
        this.model = new Restaurant();
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
}

export default RestaurantService;