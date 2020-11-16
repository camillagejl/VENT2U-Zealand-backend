module.exports = app => {

    const router = require("express").Router();
    const auth = require("../conterollers/auth.controller.js");

    // login in
    router.post("/login", auth.login);

    app.use('/api/auth', router);
};