import UserService from '../services/userService';

const userService = new UserService();

export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userDTO = await userService.getUserById(userId);
    res.json(userDTO); // Send DTO as response
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const userDTO = await userService.createUser(req.body);
    res.status(201).json(userDTO);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
