/* eslint-disable prettier/prettier */
// environment.ts

export const environment = {
    mongodb: {
        user: 'indra', // Nombre de usuario de la base de datos MongoDB
        password: 'jahgai4veith3ie2', // Contraseña del usuario
        host: '172.20.6.73', // Dirección IP o nombre del host donde se encuentra la base de datos
        database: 'hcc', // Nombre de la base de datos
        port: 27017, // Puerto de la base de datos MongoDB (por defecto es 27017)
    },
    mongodbDev: {
        user: 'indra', // Nombre de usuario de la base de datos MongoDB
        password: 'jahgai4veith3ie2', // Contraseña del usuario
        host: 'localhost', // Dirección IP o nombre del host donde se encuentra la base de datos
        database: 'logBundle', // Nombre de la base de datos
        port: 27020, // Puerto de la base de datos MongoDB (por defecto es 27017)
    },
    port :3000

};
