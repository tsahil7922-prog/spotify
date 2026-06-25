const jwt = require("jsonwebtoken");
async function authArtist(req, res, next) {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.status(401).json({ message: "Unatherized" });
  }
  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    if (decoded.role !== "artist") {
      return res.status(401).json({ message: "You don't have access" });
    }
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid Token" });
  }
}

async function authUser(req, res, next) {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.status(401).json({ message: "Unatherized" });
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    if (decoded.role !== "user" && decoded.role !=="artist") {
      return res.status(401).json({ message: "You don't have access" });
    }
    req.user = decoded;
    next()
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid Token" });
  }
}

module.exports = { authArtist, authUser };
