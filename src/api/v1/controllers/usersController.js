import { createUser ,byEmail } from '../models/userModel.js';

//1
const createNewUser = async (req, res) => {
  try {
    const { user } = req.body;
    //si el email ya existe en la base de datos
    const userExist = await byEmail(user);
    if (userExist) {
      return res.status(400).json('El email ya existe');
    }

    const newUser = await createUser(user);
    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createNewUser };
