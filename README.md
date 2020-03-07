# cerouno-ubereats
Esta aplicación es una Rest API para simular el comportamiento de Uber Eats.

# Environments
Para correr el proyecto de forma local, es necesario crear un archivo .env con los
siguientes datos:
PORT=<PORT_NUMBER>

# Run project
Para correr el proyecto es necesario correr los siguientes comandos:
npm install
npm run dev

# Debug project
Para depurar el proyecto, es necesario correr el siguiente comando:
npm run dev:debug

# Testing
Por el momento, las únicas pruebas que se pueden hacer son de forma manual, para ello se puede utilizar 
Postman con la siguiente colección:
(https://www.getpostman.com/collections/5daf0df4dfdf2f5a3c31)
En la carpeta "Uber Eats Simulator"

# API
* Restaurantes
    1. Obtener restaurantes, para ello se utiliza la siguiente url:
    (/api/restaurants?zone=centro&id=1&name=Hot wings)
    2. Obtener un restaurante por id, devuelve el restaurante y sus platillos
    (/api/restaurants/1)
    * Platillos del restaurante
    3. Crear platillos
    (/api/restaurants/:id/foods)
    4. Editar platillo
    (/api/restaurants/:id/foods/:foodId)
    5. Eliminar platillo
    (/api/restaurants/:id/foods/:foodId)
    * Ordenes
    6. Ver ordenes del restaurante:
    (/api/orders/:restaurantId/restaurant-orders)
    7. Aceptar orden del restaurante:
    (/api/orders/:restaurantId/restaurant-orders/:id/accept)
    8. Ver total vendido:
    (/api/orders/:restaurantId/restaurant-orders/total)
* Platillos
    1. Obtener lista de platillos, se puede filtrar por restaurante, nombre o id:
    (/api/foods?restaurand_id=1)
* Ordenes
    1. Seleccionar platillo para agregar a la orden:
    (/api/orders/:id/select-food)
    2. Deseleccionar platillo de la orden:
    (/api/orders/:id/deselect-food)
    3. Ver todos los platillos de la orden actual:
    (/api/orders/current)
    4. Hacer un checkout de la orden para ver el total:
    (/api/orders/checkout)
    5. Aceptar la orden, devuelve un lista de todas las ordenes que has aceptado:
    (/api/orders/accept)
    6. Cancelar orden, limpia la orden que habías hecho:
    (/api/orders/cancel)
* Entregas
    1. Ver ordenes pendientes
    (/api/orders/delivery-orders)
    2. Aceptar orden:
    (/api/orders/:id/delivery-orders/accept)
    3. Ver orden actual:
    (/api/orders/:id/delivery-orders)
    4. Ver total vendido (Corresponde al 10% de la orden, de esto 70% es del delivery):
    (/api/orders/delivery-orders/total)

# Framework
El proyecto está construido utilizando diferentes capas para separar la lógica, entra estas
se pueden encontrar: Router, Controller, Service, Repository. Se utilizó el framework NodeJs 
con Express.