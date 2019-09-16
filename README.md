
EJERCICIO MONGOBD



El siquiente repositorio tiene como objetivo desarrollar un back siguiendo un estilo arquitectónico Rest. El propósito del back es manejar información socioeconómica de un grupo de países.


Herramientas
El back de la aplicación deberá estar construido usando las herramientas Node.js, Express y Mongo. Las pruebas del API se harán usando Postman.

Especificaciones de uso

-Para probar las configuraciones de este repositorio. Debe:

        + Crear una colección y base de datos llamadas "countries" en MongoDB.

        + Cargar los datos del grupo de paises.
        Archivo de datos: https://gist.githubusercontent.com/josejbocanegra/4c553e3b5f1aae1f05ea67068f058087/raw/9f1ec3f2b48cf59ed3c3c4b01d15d1a23b25f57c/countriesall.json


        Puede ejecutar la siguiente instrucción para cargar desde terminal en su BD.


        mongoimport --db dbName --collection collectionName --file fileName.json


        + Ahora puede usar el proyecto de node js.

        EL repositorio realiza un CRUD a la base de datos de paises, las rutas son:


            GET localhost:8080/countries: obtiene la lista de todos los países
            
            GET localhost:8080/countries/Albania: obtiene los detalles de Albania
            
            POST localhost:8080/countries: crea un nuevo país con los valores recibidos
            en el cuerpo de la petición
            {
            "country":"Genovia",
            "population":9923,
            "continent":"Europa",
            "lifeExpectancy":43.8,
            "purchasingPower":974.58
            }
            
            PUT localhost:8080/countries/Albania: actualiza los datos de Albania con los
            valores recibidos en el cuerpo de la petición
            {
            "population":3600200,
            "continent":"Europa",
            "lifeExpectancy":70.8,
            "purchasingPower":5937.58
            }
            DELETE localhost:8080/countries/Albania: borra el documento que
            representa a Albania

        + Tambien puede probar las funcionalidades con la colección de pruebas de postman que se encuentran en la carpeta POSTMAN.


Autor: Laura Isabella Forero Camacho