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

    static find(key, value, elements) {
        return elements.find(
            restaurant => restaurant[key] === value
        );
    }

    static insert(restaurant) {
        this.restaurants.push(restaurant);
    }
}

export default Restaurant;