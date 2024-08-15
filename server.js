import express from 'express';
import cors from 'cors';

import swagger from './config/swagger/swagger.js'; // se importa la funcion que se encarga de mostrar la documentacion de la API

import songsRouter from './config/routes/songs.routes.js';
import loginRoutes from './config/routes/login.routes.js';
import userRoutes from './config/routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

swagger(app); // se pasa la aplicacion express a la funcion swagger para mostrar la documentacion de la API
app.use(express.json());
app.use(cors());

app.use('/api/v1', userRoutes);
app.use('/api/v1', songsRouter);
app.use('/api/v1', loginRoutes);

app.get('/', (req, res) => {
  res.send('Esta viva la API');
});

app.listen(PORT, () => {
  console.log(`server on at http://localhost:${PORT}`);
  console.log(`Swagger at http://localhost:${PORT}/api/v1/docs`); // se muestra la ruta de la documentacion de la API
});
