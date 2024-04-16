import bcrypt from 'bcrypt';
import User from '../models/User';

export const authenticate = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid credentials');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }
  return user;
};
