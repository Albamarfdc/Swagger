import swaggerJSDoc from 'swagger-jsdoc';  //  para generar la documentacion de la API
import swaggerUi from 'swagger-ui-express';  //  para visualizar la documentacion de la API



const options = { // configuracion de la documentacion 
    definition: {   // se usa definition para definir la informacion de la documentacion
        openapi: '3.1.0', // version de la documentacion de la API
        info: {  // informacion de la API
            title: 'API Songs', 
            version: '1.0.0',
            description: 'A simple API to manage songs',
        },
        servers: [ // establecer los servidores de la API
            {
                url: 'http://localhost:5000/api/v1',
                description: 'Production server',
            },
/*             {
                url: 'http://localhost:5000/api/v2',
                description: 'Development server',
            }, */
        ],
    },
    // configurar dependiendo de su ruta.
    apis: ['config/routes/docs/*.js'], // archivos donde se encuentran las rutas de la API
    
};

const specs = swaggerJSDoc(options); // se genera la documentacion de la API/ se pasa las opciones de la documentacion de la API a swaggerJSDoc

export default (app) => {  // se exporta la funcion que se encarga de mostrar la documentacion de la API
    app.use( // se usa app.use para establecer la ruta de la documentacion de la API 
        '/api/v1/docs', // ruta de la documentacion de la API
        swaggerUi.serve,  // se usa swaggerUi.serve para servir la documentacion de la API
        swaggerUi.setup(specs, {  // se usa swaggerUi.setup para establecer la documentacion de la API
            explorer: true,  // para habilitar el explorador de la documentacion
            customCssUrl: // para cambiar el estilo de la documentacion
                'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-flattop.css',
        })
    );
};   // Ir a server.js para ver como se usa esta funcion


// TEMAS PARA CAMBIAR EL ESTILO DE LA DOCUMENTACION DE LA API

// theme-feeling-blue.css
// theme-flattop.css
// theme-material.css
// theme-monokai.css
// theme-muted.css
// theme-newspaper.css
// theme-outline.css
// https://www.jsdelivr.com/package/npm/swagger-ui-themes



// Lo que necesitas instalar para usar swagger
//https://www.npmjs.com/package/swagger-jsdoc
//https://www.npmjs.com/package/swagger-ui-express



// DOCUMENTACION OFICIAL DE SWAGGER
// https://swagger.io/docs/specification/basic-structure/