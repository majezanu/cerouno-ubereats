import restaurants from "./data/restaurants";

class Restaurant
{
    constructor() {
        this.restaurants = restaurants;
    }

    static filter(key, value, elements) {
        return elements.filter(
            element => {
                if(key && value)
                    return element[key] === value;
                return element;
            }
        );
    }

    find(key, value) {
        return this.restaurants.find(
            restaurant => restaurant[key] === value
        );
    }

    insert(restaurant) {
        this.restaurants.push(restaurant);
    }
}

export default Restaurant;