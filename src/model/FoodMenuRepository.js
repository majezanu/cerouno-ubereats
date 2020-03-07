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

    static find(key, value, elements) {
        return elements.find(
            restaurant => restaurant[key] === value
        );
    }

    static insert(food, foodMenu) {
        foodMenu.push(food);
        return foodMenu;
    }
    static deleteById(id, foodMenu) {
        return foodMenu.filter(food => food.id !== id);
    }
}

export default FoodMenuRepository;