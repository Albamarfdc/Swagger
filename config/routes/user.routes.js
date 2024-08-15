import { Router } from 'express';
import { createNewUser } from "../../src/api/v1/controllers/usersController.js";//1
import {validateParametersUser } from "../../middlewares/validateParamsUser.js";//1


const router = Router();

router.post("/users", validateParametersUser, createNewUser)//1

export default router;