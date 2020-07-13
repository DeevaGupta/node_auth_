const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token =  req.header('authority-token');
    if(!token)
        return res.status(401).send("access denied, you must be logged in!!");

    try{
        const token_verified = jwt.verify(token, process.env.AUTHORITY_TOKEN_SECRET);
        req.authority = token_verified;
        next();
    } catch(err) {
        res.status(400).send("invalid token");
    }
}