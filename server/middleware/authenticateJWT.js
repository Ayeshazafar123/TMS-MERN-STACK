const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get the token from the header
    console.log("Token Received:", token); // Log token for debugging

    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    jwt.verify(token, 'your_jwt_secret', (err, user) => {
        if (err) {
            console.error("Token verification error:", err); // Log error for debugging
            return res.status(403).json({ error: 'Failed to authenticate token' });
        }
        req.user = user;
        next();
    });
};


module.exports = authenticateJWT;
