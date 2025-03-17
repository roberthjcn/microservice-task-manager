# microservice-task-manager

This project was generated with [Node Js]([https://github.com/angular/angular-cli](https://nodejs.org/en/download/)) version 18

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Comments
Para el back end he usado node 18 con typescript, además he usado useExpressServer que nos permite definir rutas y manejo de solicitudes utilizando clases y decoradores, esto nos facilita la organización del código y la separación de responsabilidades.

Para la persistencia a los datos he usado como se especificaba en el reto técnico firebase. Adicional he usado typedi para usar los decoradores estos decoradores me permitirán tener un código más limpio.

He creado básicamente dos rutas:

/users para los endpoints de usuarios

/tasks para los endpoints de las tareas



