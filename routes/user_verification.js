const jwt = require('jsonwebtoken');

module.exports =  function  (req, res, next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied, you must be logged in first');
    
    try{    
        const token_verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = token_verified;
        next();
    }catch(err){
        res.status(400).send('invalid token')
    }
}

