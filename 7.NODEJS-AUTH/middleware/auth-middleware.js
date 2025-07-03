const jwt=require('jsonwebtoken');
const authMiddleware= (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("Authorization Header:", authHeader)
    const token =authHeader && authHeader.split(' ')[1]; // Get token from header

    if(!token){
        return res.status(401).json({
            success: false,
            message: "Access denied, no token provided"
        });// Return 401 if no token is provided
    }
    //decode this token
    try{
        const decodedTokenInfo =jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log("Decoded Token Info:", decodedTokenInfo);
        req.userInfo = decodedTokenInfo; // Attach user info to request object
        next(); // Call next middleware or route handler
    }catch(error){
         return res.status(401).json({
            success: false,
            message: "Access denied, no token provided"
        });
    }
    
}
module.exports = authMiddleware;