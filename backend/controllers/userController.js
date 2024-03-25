import User from "../models/userModel.js";

export const getUserForSideber = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUserForSideber Controller :", error.message);
    res.status(500).json({ error: "internal server Error" });
  }
};
