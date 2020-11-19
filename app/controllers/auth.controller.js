const db = require("../models");

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(password);
    console.log(email);
    if (email && password) {
        const foundUser = db.users.findOne({
                where: {
                    email: email,
                    password: password
                }
            })

            .then(data => {
                res.send(data);
            })

            .catch(err => {
                res.status(404).send({
                    message: "Error retreiving User with email =" + email,
                    err: err
                });
            });
    } else {
        res.send('Please enter Email and Password!');
    }
};
