import Jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = Jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d", // Expires in 1 day
  });
  res.cookie("jwt", token, {
    expires: new Date(Date.now() + 86400000), // Expires in 1 day
    httpOnly: true,
    secure: true, // Send only over HTTPS
    sameSite: "strict",
    // path: "/", // Optional: Restrict the cookie to a specific path
  });
};
