import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("authHeader", authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json("Access token is missing or invalid");
  }
  
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json("Invalid access token");
    }
    req.user = decoded;
    console.log("decoded", decoded);
    console.log(decoded)
    next();
  });
}

export const authorizationRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json("You do not have permission to access this resource");
    }
    next();
  };
}