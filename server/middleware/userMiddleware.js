// const jwt= require('jsonwebtoken');

// // middleware to autheticate user using jwt

// const userMiddleware = (req,res, next) =>{
//     const token=req.header('Authorization')?.replace('Bearer ','');

//     if(!token){
//         return res.status(401).json({message:'No token, authoriztion denied'});

//     }

//     try {
//         const decoded=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
//         req.user=decoded;
//     } catch (error) {
//         console.error(error);
//         res.status(401).json({message:'token is not valid'});
        
//     }
// };

// module.exports=userMiddleware;




const jwt = require('jsonwebtoken');

// Middleware to authenticate user using JWT
const userMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    // Check if the token exists
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded; // Attach the decoded token payload to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = userMiddleware;

