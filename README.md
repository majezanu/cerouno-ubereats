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
# Framework
El proyecto está construido utilizando diferentes capas para separar la lógica, entra estas
se pueden encontrar: Router, Controller, Service, Repository. Se utilizó el framework NodeJs 
con Express.