module.exports = app => {
    const spots = require("../controllers/spot.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", spots.create);
  
    // Retrieve all Tutorials
    router.get("/", spots.findAll);
    //
    // // Retrieve all published Tutorials
    // router.get("/published", spots.findAllPublished);
    //
    // // Retrieve a single Tutorial with id
    router.get("/:id", spots.findOne);
    //
    // // Update a Tutorial with id
    router.put("/:id", spots.update);
    //
    // // Delete a Tutorial with id
    // router.delete("/:id", spots.delete);
    //
    // // Create a new Tutorial
    // router.delete("/", spots.deleteAll);
  
    app.use('/api/spots', router);
  };
