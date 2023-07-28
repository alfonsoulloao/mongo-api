API REST con NestJS y MongoDB
Este es un proyecto de API REST creado con NestJS y utiliza MongoDB como base de datos. Permite crear, leer, actualizar y eliminar datos mediante endpoints HTTP. A continuación, se proporciona información sobre cómo configurar, ejecutar y probar la API.

Instalación
Antes de comenzar, asegúrate de tener instalado Node.js y npm en tu sistema. Luego, sigue estos pasos:

Clona este repositorio en tu máquina local.
Navega al directorio del proyecto mongo-api.
Ejecuta npm install para instalar las dependencias necesarias.
Configuración
El archivo de configuración de la base de datos se encuentra en el archivo src/app.module.ts. Por defecto, la API está configurada para usar MongoDB. Asegúrate de tener una instancia de MongoDB en ejecución y configura las credenciales en este archivo si es necesario.

Scripts de npm
A continuación se describen los scripts de npm disponibles para este proyecto:

npm run build: Compila el proyecto NestJS.
npm run format: Formatea el código del proyecto utilizando Prettier.
npm start: Inicia la API en modo de producción.
npm run start:dev: Inicia la API en modo de desarrollo con reinicio automático al detectar cambios.
npm run start:debug: Inicia la API en modo de depuración con reinicio automático al detectar cambios.
npm test: Ejecuta las pruebas utilizando Jest.
npm run test:watch: Ejecuta las pruebas en modo observador.
npm run test:cov: Ejecuta las pruebas y genera informes de cobertura.
npm run lint: Ejecuta ESLint para detectar y corregir problemas de estilo.
npm run test:e2e: Ejecuta pruebas end-to-end utilizando Jest y el archivo de configuración jest-e2e.json.
Dependencias principales
Las siguientes son las dependencias principales utilizadas en este proyecto:

@nestjs/common, @nestjs/core, @nestjs/mongoose, @nestjs/platform-express: Componentes principales de NestJS para la construcción de aplicaciones.
mongoose: Librería para interactuar con MongoDB.
rxjs: Librería para programación reactiva en JavaScript.
Dependencias de desarrollo
Las siguientes son las dependencias utilizadas para desarrollo y pruebas:

@nestjs/cli, @nestjs/schematics, @nestjs/testing: Herramientas y utilidades de NestJS para el desarrollo.
@types/express, @types/jest, @types/node, @types/supertest: Tipos de TypeScript para paquetes externos utilizados en el proyecto.
@typescript-eslint/eslint-plugin, @typescript-eslint/parser, eslint, eslint-config-prettier, eslint-plugin-prettier: Herramientas para el linting y formateo de código.
jest: Framework de pruebas.
prettier: Herramienta de formateo de código.
supertest: Biblioteca para realizar pruebas HTTP en Node.js.
ts-jest, ts-loader, ts-node, tsconfig-paths, typescript: Herramientas y compilador de TypeScript.
Ejecución
Para iniciar la API en modo de desarrollo, utiliza el siguiente comando:

arduino
Copy code
npm run start:dev
Una vez iniciada, la API estará disponible en http://localhost:3000.

Pruebas
Para ejecutar las pruebas, utiliza el siguiente comando:

bash
Copy code
npm test
Documentación de la API
La documentación de la API, incluyendo los endpoints disponibles, los parámetros y las respuestas, se encuentra disponible en http://localhost:3000/docs cuando la API está en ejecución.

Licencia
Este proyecto no tiene licencia especificada actualmente (UNLICENSED).

Notas
Recuerda configurar adecuadamente las credenciales de MongoDB en el archivo src/app.module.ts antes de poner en producción la API.

¡Disfruta desarrollando tu API REST con NestJS y MongoDB! Si tienes alguna pregunta, no dudes en ponerte en contacto con el autor del proyecto.