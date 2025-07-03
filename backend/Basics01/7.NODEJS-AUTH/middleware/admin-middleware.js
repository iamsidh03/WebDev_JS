const isAdminUser=(req,res,next) =>{
    if(req.userInfo.role !== 'admin') {
        return res.status(403).json({
            success: false,
            message: "Access denied, admin privileges required"
        }); // Return 403 if user is not an admin
    }
    next(); // Call next middleware or route handler if user is an admin
}
module.exports= isAdminUser;