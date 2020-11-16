const db = require("../models");

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email && password) {
        res.send({
            'email': email,
            'password': password
        });
    } else {
        res.send('Please enter Email and Password!');
    }
}