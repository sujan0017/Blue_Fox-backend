import { createAuthToken } from "../helper/userHelper.js";
import userService from "../services/userService.js";

const register = async (req, res) => {
  const data = req.body;

  if (!data.name || !data.email || !data.password) {
    return res.status(422).send("Required data are missing.");
  }

  if (data.password !== data.confirmPassword) {
    return res.status(400).send("Passwords do not match.");
  }

  if (data.password.length < 8) {
    return res.status(400).send("Password length must be greater than 8.");
  }

  try {
    const user = await userService.register(data);

    const token = createAuthToken(user);

    res.cookie("authToken", token);

    res.status(201).json({ ...user, token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  const data = req.body;

  try {
    const user = await userService.login(data);

    const token = createAuthToken(user);

    res.cookie("authToken", token, { httpOnly: true });

    res.json({ ...user, token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const editProfile = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const updatedUser = await userService.editProfile(id, data, { new: true });

    if (!updatedUser) res.status(500).send(error.message);

    res.json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getProfileById = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await userService.getProfileById(id);

    res.json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


export { 
  register, 
  login, 
  editProfile, 
  getProfileById,  
};
