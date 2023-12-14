import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import setUp from '../models/Setup.js';
import User from '../models/User.js';
import { getOpenAIResponse } from '../path/to/openai.js';

dotenv.config();
// Register User
export const resgisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashed,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    });

    if (!user) {
      res.status(400).json({ msg: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) res.status(400).json({ msg: 'Invalid Password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECERT);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const setUp = async (req, res) => {
  try {
    const { major, minor, month, year } = req.body;
    const info = new setUp({
      major,
      minor,
      month,
      year,
    });

    const userInfo = await setUp.save();
    res.status(201).json(userInfo);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const handleAIResponse = async (userMessage) => {
  try {
    const conversation = [
      { role: 'user', content: userMessage },
      ...messages.map((msg) => ({ role: msg.sender, content: msg.text })),
    ];

    const aiResponse = await getOpenAIResponse(conversation);

    setMessages((prevMessages) => [...prevMessages, { text: aiResponse, sender: 'advisor' }]);
  } catch (error) {
    console.error('Error handling AI response:', error.message);
  }
};