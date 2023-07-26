const authVerify = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();         
    }else {
        res.send({data: "Sesión finalizada"})
    }
}

export default authVerify; 