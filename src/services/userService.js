import User from "../models/User.js";
import bcrypt from 'bcryptjs'

const register = async (data) => {
  console.log(data);
  const userExists = await User.findOne({ email: data.email });

  if (userExists) throw new Error("Email already exists.");

  const hashPassword = bcrypt.hashSync(data.password);

  const createdUser = await User.create({
    name: data.name,
    address: data.address,
    email: data.email,
    password: hashPassword,
    roles: data.roles,
  });

  return {
    id: createdUser._id,
    name: createdUser.name,
    address: createdUser.address,
    email: createdUser.email,
    roles: createdUser.roles,
  };
};

const login = async (data) => {
  const existingUser = await User.findOne({ email: data.email });

  if (!existingUser) throw new Error("Email or password doesn't match.");

  const isMatch = bcrypt.compareSync(data.password, existingUser.password);

  if (!isMatch) throw new Error("Email or password doesn't match.");

  return {
    id: existingUser._id,
    name: existingUser.name,
    email: existingUser.email,
    roles: existingUser.roles,
  };
};



const editProfile = async (id, data) => {
  return await User.findByIdAndUpdate(id, data);
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const getProfileById = async (id) => {
  return await User.findById(id);
};


export default {
  register,
  login,
  getUserById,
  editProfile,
  getProfileById,
};
