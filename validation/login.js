const validator = require('validator'),
    isEmpty = require('./is-empty');

module.exports = function(req, res, next) {
    const data = req.body;
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid!';
    }

    if (validator.isEmpty(data.email)) {
        errors.email = 'Email field is required!';
    }

    if (!validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be between 6 to 30 characters!';
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'Password field is required!';
    }

    if (!isEmpty(errors)) return res.status(400).json({ user: errors });

    next();
};
