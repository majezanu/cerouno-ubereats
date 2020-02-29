import foodMenu from "./data/foodmenu";

class FoodMenuRepository
{
    constructor() {
        this.foodMenu = foodMenu;
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

    find(key, value, elements) {
        return elements.find(
            restaurant => restaurant[key] === value
        );
    }

    insert(food, foodMenu) {
        foodMenu.push(food);
    }
}

export default FoodMenuRepository;