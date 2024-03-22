import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const signUpUser = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password Here
    const salt = await bcrypt.genSalt(11);
    const hashedPassword = await bcrypt.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    // Save the new user to the database
    await newUser.save();

    if (newUser) {
      // jwt token for the new user
      generateTokenAndSetCookie(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Something went wrong" });
    }
  } catch (error) {
    console.log("Error signup controller: ", error.message);
    res.status(500).json({ error: "internal server Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    // jwt token for the new user
    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error login controller: ", error.message);
    res.status(500).json({ error: "internal server Error" });
  }
};
export const logOutUser = (req, res) => {
  try {
    res.cookie("jwt", " ", { maxAge: 0 });
    res.status(200).json({ message: "Successfully logged out" });
  } catch (error) {
    console.log("Error logout controller: ", error.message);
    res.status(500).json({ error: "internal server Error" });
  }
};
