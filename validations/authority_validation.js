const Joi = require('@hapi/joi');

// AUTHORITY REGISTER VALIDATION
const authority_register_validation = (data) => {
    const schema = {
        full_name: Joi.string()
                    .min(2)
                    .required(),
        contact: Joi.number()
                    .min(8)
                    .required(),
        id_number: Joi.number()
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

// AUTHORITY LOGIN VALIDATION
const authority_login_validation = (data) => {
    const schema = {
        id_number: Joi.number()
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
module.exports.authority_register_validation = authority_register_validation; 
module.exports.authority_login_validation = authority_login_validation;