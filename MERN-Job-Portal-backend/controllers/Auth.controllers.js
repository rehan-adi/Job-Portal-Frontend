import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import authenticate from '../service/auth.servive.js';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authenticate(email, password);
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
    console.log('Login successful');
    res.status(200).json({ token });
    res.status(200).json({message: 'Login successfull'});
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
