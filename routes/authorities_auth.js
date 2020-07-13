const router = require('express').Router();
const Authority = require('../model/Authority');
const {authority_register_validation, authority_login_validation} = require('../validations/authority_validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
router.post('/register',  async (req, res)=> {
    // Validate data before making the user
    const { error } = authority_register_validation(req.body);
    if(error){
        console.log(error)
        return res.status(400).send(error.details[0].message);}

    // CHECKING IF USER EXIST IN DATABASE
    const emailExist = await Authority.findOne({email: req.body.email});
    if(emailExist) 
        return res.status(400).send("email already exist");

    // PASSWORD HASHING
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);

    // CREATING USER
    const authority = new Authority({
        full_name: req.body.full_name,
        contact: req.body.contact,
        id_number: req.body.id_number,
        email: req.body.email,
        password: hashedpassword
    });
    try{
        const savedAuthority = await authority.save();
        res.send({user_id: authority._id,
                  user_email: authority.email        
        });
    }catch(err){
        res.status(400).send(err);
    }
});



// LOGIN
router.post('/login', async (req, res)=>{
    // Validate data before making the user
    const { error } = authority_login_validation(req.body);
    if(error){
        console.log(error);
        return res.status(400).send(error.details[0].message);   } 


    // CHECKING IF ID_number EXIST
    const id = await Authority.findOne({id_number: req.body.id_number});
    if(!id) 
        return res.status(400).send("id number doesn not exist");


    // CHECKING IF EMAIL EXIST
    const authority = await Authority.findOne({email: req.body.email});
    if(!authority) 
        return res.status(400).send("email doesn not exist");

    // CHECKING PASSWORD
    const validpass = await bcrypt.compare(req.body.password, authority.password)
    if(!validpass)
        return res.status(400).send('invalid password');


    // CREATE AND ASSIGN TOKEN
    const token = jwt.sign({_id: authority._id}, process.env.AUTHORITY_TOKEN_SECRET);
    
    res.header('authority-token', token).json(token);
})

module.exports = router;