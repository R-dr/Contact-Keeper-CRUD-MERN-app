const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
  // Get token from headers
  const token = req.header('x-auth-token');

  // check token is there
  if (!token) return res.status(401).json({ msg: 'no token, no access' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'token is not valid' });
  }
};
