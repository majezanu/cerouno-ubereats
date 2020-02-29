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

# Testing
Por el momento, las únicas pruebas que se pueden hacer son de forma manual, para ello se puede utilizar 
Postman con la siguiente colección:
(https://www.getpostman.com/collections/5daf0df4dfdf2f5a3c31)
En la carpeta "Uber Eats Simulator"

# API
1. Obtener restaurantes, para ello se utiliza la siguiente url:
(/api/restaurants?zone=centro&id=1&name=Hot wings)
2. Obtener un restaurante por id, devuelve el restaurante y sus platillos
(/api/restaurants/1)
3. Obtener lista de platillos, se puede filtrar por restaurante, nombre o id:
(/api/foods?restaurand_id=1)
4. Seleccionar platillo para agregar a la orden:
(/api/orders/:id/select-food)
5. Deseleccionar platillo de la orden:
(/api/orders/:id/deselect-food)
6. Ver todos los platillos de la orden actual:
(/api/orders/current)
7. Hacer un checkout de la orden para ver el total:
(/api/orders/checkout)
8. Aceptar la orden, devuelve un lista de todas las ordenes que has aceptado:
(/api/orders/accept)
9. Cancelar orden, limpia la orden que habías hecho:
(/api/orders/cancel)

# Framework
El proyecto está construido utilizando diferentes capas para separar la lógica, entra estas
se pueden encontrar: Router, Controller, Service, Repository. Se utilizó el framework NodeJs 
con Express.