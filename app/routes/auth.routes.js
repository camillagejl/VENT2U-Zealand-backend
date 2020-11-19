module.exports = app => {

    const router = require("express").Router();
    const auth = require("../controllers/auth.controller.js");

    // log in post
    router.post("/login", auth.login);

    app.use('/api/auth', router);
};