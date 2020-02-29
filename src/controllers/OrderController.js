import OrderService from "../services/OrderService";

class OrderController
{
    constructor() {
        this.service = new OrderService();
    }
    selectFood(req,res,next) {
        let order = this.service.selectFood(Number(req.params.id));
        if(!order) {
            res.status(400);
            res.send({
                error: 'Hubo un problema al seleccionar este platillo'
            });
        }
        res.send(order);
    }
    deselectFood(req,res,next) {
        let order = this.service.deselectFood(Number(req.params.id));
        res.send(order);
    }
    watchCurrentOrder(req, res, next) {
        let order = this.service.getCurrent();
        res.send(order);
    }
    accept(req, res, next) {
        let order = this.service.acceptCurrentOrder();
        res.send(order);
    }
    cancel(req, res, next) {
        let order = this.service.cancelCurrentOrder();
        res.send(order);
    }
    checkout(req, res, next) {
        let checkout = this.service.checkout();
        res.send(checkout);
    }
}

export default OrderController;