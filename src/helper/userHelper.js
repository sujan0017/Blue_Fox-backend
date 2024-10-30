import jwt from "jsonwebtoken";

const createAuthToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY);

  return token;
};

export { createAuthToken };