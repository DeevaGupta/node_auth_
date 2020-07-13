const Joi = require('@hapi/joi');

// user register validation
const user_register_validation = (data) => {
    const schema = {
        first_name: Joi.string()
                    .min(2)
                    .required(),
        last_name: Joi.string()
                    .min(2)
                    .required(),
        contact: Joi.number()
                    .min(8)
                    .required(),
        email: Joi.string()
                    .min(6)
                    .required()
                    .email(),  
        password: Joi.string() 
                    .min(6)
                    .required()
    };
    return Joi.validate(data, schema)
}


//USER LOGIN VALIDATION
const user_login_validation = (data) => {
    const schema = {
        email: Joi.string()
                    .min(6)
                    .required()
                    .email(),  
        password: Joi.string() 
                    .min(6)
                    .required()
    };
    return Joi.validate(data, schema)
}


module.exports.user_register_validation = user_register_validation;

module.exports.user_login_validation = user_login_validation;






  