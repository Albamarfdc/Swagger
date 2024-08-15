import { Router } from 'express';
import { loginUser } from '../../src/api/v1/controllers/loginController.js';//2
import { validparameters } from '../../middlewares/validateParametersLogin.js'; //2


const router = Router();



router.post('/auth_user', validparameters, loginUser);

export default router;
