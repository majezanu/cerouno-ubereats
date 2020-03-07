import FoodMenuService from "./FoodMenuService";
import RestaurantService from "./RestaurantService";
import { v4 as uuidv4 } from 'uuid';

class OrderService
{
    constructor() {
        this.restaurantService = new RestaurantService();
        this.foodService = new FoodMenuService();
        this.foodSelected = [];
        this.currentOrder = {};
        this.orders = [];
        this.restaurantsOrders = [];
        this.deliveryOrders = [];
        this.deliveryOrdersAccepted = [];
    }
    selectFood(foodId) {
        let food = this.foodService.getOne(foodId);
        if(food == null) {
            return null;
        }
        this.foodSelected.push(food);
        return this.foodSelected;
    }
    deselectFood(foodId) {
        let foodSelected = this.foodService.quitFoodFromArray(foodId, this.foodSelected);
        this.foodSelected = foodSelected;
        return this.foodSelected;
    }
    getCurrent() {
        return this.foodSelected;
    }
    acceptCurrentOrder() {
        this.currentOrder = {
            id: uuidv4(),
            foods: this.foodSelected
        }
        this.foodSelected = [];
        this.orders.push(this.currentOrder);
        return this.currentOrder;
    }
    cancelCurrentOrder() {
        this.currentOrder = [];
        return this.currentOrder;
    }
    checkout() {
        let total = this.currentOrder.foods.reduce((accumulator, currentFood) => currentFood.price + accumulator,0);
        let order = this.currentOrder;
        return {
            order,
            total,
            message: "Gracias por usar Uber Eats"
        };
    }
    getByRestaurant(restaurantId) {
        let restaurantsOrders = this.orders.map(order => {
            return {
                id: order.id,
                restaurantId,
                foods: order.foods.filter(food => food.restaurant_id === restaurantId)
            }
        }).filter(order => order.foods.length > 0);
        
        return restaurantsOrders;
    }
    restaurantAcceptOrder(restaurantId, orderId) {
        let order = this.orders.map(order => {
            return {
                id: order.id,
                restaurantId,
                foods: order.foods.filter(food => food.restaurant_id === restaurantId),
                total: order.foods.reduce((accumulator, currentFood) => currentFood.price + accumulator,0)
            }
        }).find(order => order.id === orderId && order.foods.length > 0);
        if(!order) {
            return null;
        }
        this.restaurantsOrders.push(order);
        return order;
    }
    restaurantFinishOrder(restaurantId, orderId) {
        let order = this.restaurantsOrders.find(order => order.id === orderId && order.restaurantId === restaurantId);
        this.deliveryOrders.push(order);
        return order;
    }
    getTotalByRestaurant(restaurantId) {
        let total = this.restaurantsOrders.filter(order => order.restaurantId === restaurantId).reduce(
            (accumulator, currentOrder) => currentOrder.total + accumulator,0);
        let response = {
            total_uber: total*0.3,
            total_restaurant: total*0.7
        };
        return response;
    }

    getToDelivery() {
        return this.deliveryOrders;
    }
    getCurrentDeliveryOrder(id) {
        let order = this.deliveryOrders.find(order => order.id === id);
        return order;
    }
    deliveryAcceptOrder(id) {
        let order = this.getCurrentDeliveryOrder(id);
        this.deliveryOrdersAccepted.push(order);
        return order;
    }
    getTotalDelivery() {
        let total = this.deliveryOrdersAccepted.reduce((accumulator, currentOrder) => currentOrder.total + accumulator,0)*0.1;
        let response = {
            total_uber: total*0.3,
            tota_delivery: total*0.7
        };
        return response;
    }
}

export default OrderService;