const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
async function regiterUser(req, res) {
  const { username, email, password, role = "user" } = req.body;
  //   console.log(username, email, password);
  const isAlreadyUserExist = await userModel.findOne({
    $or: [{ email }, { username }],
  });
  if (isAlreadyUserExist) {
    return res.status(409).json({ message: "Email already exists" });
  }

  const hash = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
    username: username,
    email: email,
    password: hash,
    role: role,
  });
  const token = jwt.sign(
    { id: newUser._id, role: newUser.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1h",
    },
  );
  res.cookie("token", token, {
    httpOnly: true, // This flag ensures that the cookie cannot be accessed via JavaScript, providing protection against cross-site scripting (XSS) attacks.
    secure: true, // This flag ensures that the cookie is only sent over HTTPS connections, providing an additional layer of security.
    sameSite: "strict", // This flag restricts the cookie to be sent only in a first-party context, preventing it from being sent along with cross-site requests, which can help mitigate cross-site request forgery (CSRF) attacks.
    //jwt needs a object inside which user unique id is stored and a secret key to generate the token and also we can set expiry time for the token
  });

  return res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
}

async function loginUser(req, res) {
  const { email, password, username } = req.body;

  const user = await userModel.findOne({
    $or: [{ email }, { username }],
  });
  if (!user) {
    return res.status(401).json({ message: "INvalid Credentials" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "INvalid Credentials" });
  }
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
  );

  res.status(200).json({ message: "User logged in Successfully", user });
}

module.exports = { regiterUser ,loginUser};
