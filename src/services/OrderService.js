import FoodMenuService from "./FoodMenuService";
import RestaurantService from "./RestaurantService";

class OrderService
{
    constructor() {
        this.restaurantService = new RestaurantService();
        this.foodService = new FoodMenuService();
        this.currentOrder = [];
        this.orders = [];
    }
    selectFood(foodId) {
        let food = this.foodService.getOne(foodId);
        if(food == null) {
            return null;
        }
        return this.foodService.insertFoodOnArray(food, this.currentOrder);
    }
    deselectFood(foodId) {
        this.currentOrder = this.foodService.quitFoodFromArray(foodId, this.currentOrder);
        return this.currentOrder;
    }
    getCurrent() {
        return this.currentOrder;
    }
    acceptCurrentOrder() {
        this.orders.push(this.currentOrder);
        return this.orders;
    }
    cancelCurrentOrder() {
        this.currentOrder = [];
        return this.currentOrder;
    }
    checkout() {
        let total = this.currentOrder.reduce((accumulator, currentFood) => currentFood.price + accumulator,0);
        let order = this.currentOrder;
        return {
            order,
            total,
            message: "Gracias por usar Uber Eats"
        };
    }
}

export default OrderService;