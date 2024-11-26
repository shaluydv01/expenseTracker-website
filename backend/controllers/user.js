import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { fname, lname, date, gender, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) return res.json({ message: "User already registered...😊" });

    const hashPass = await bcrypt.hash(password, 10);

    user = await User.create({
      fname,
      lname,
      date,
      gender,
      email,
      password: hashPass,
    });

    res.json({ message: "User registered successfully...!", user });
  } catch (error) {
    res.json({ message: error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) return res.json({ message: "User not exist...!" });

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass)
      return res.json({ message: "Invalid credentials login...!" });

    const token = jwt.sign({ userId: user._id }, "!@#$%^&*()", {
      expiresIn: "1d",
    });

    res.json({ message: `Welcome ${user.fname} !`, token});
  } catch (error) {
    res.json({ message: error.message });
  }
};
