module.exports = app => {
    const presets = require("../controllers/preset.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", presets.create);
  
    // Retrieve all Tutorials
    router.get("/", presets.findAll);
    //
    // // Retrieve all published Tutorials
    // router.get("/published", presets.findAllPublished);
    //
    // // Retrieve a single Tutorial with id
    router.get("/:id", presets.findOne);
    //
    // // Update a Tutorial with id
    router.put("/:id", presets.update);
    //
    // // Delete a Tutorial with id
    // router.delete("/:id", presets.delete);
    //
    // // Create a new Tutorial
    // router.delete("/", presets.deleteAll);
  
    app.use('/api/presets', router);
  };
