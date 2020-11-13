const db = require("../models");
const Spot = db.spots;
const Op = db.Sequelize.Op;

// Create and Save a new Spot
exports.create = (req, res) => {
    // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //         message: "Name can not be empty!"
    //     });
    //     return;
    // }

    // Create a Spot
    const spot = {
        spotId: req.body.spotId,
        userId: req.body.userId,
        currTemperature: req.body.currTemperature,
        currHumidity: req.body.currHumidity,
        currAirflow: req.body.currAirflow
    };

    // Save Spot in the database
    Spot.create(spot)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Spot."
            });
        });
};

// Retrieve all Spots from the database.
exports.findAll = (req, res) => {
    const spotId = req.query.spotId;
    var condition = spotId ? {spotId: {[Op.like]: `%${spotId}%`}} : null;

    Spot.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });

};
//
// Find a single Spot with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Spot.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Spot with id=" + id
            });
        });
};

// Update a Spot by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Spot.update(req.body, {
        where: {spotId: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Spot was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Spot with id=${id}. Maybe Spot was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Spot with id=" + id
            });
        });

};

// // Delete a Spot with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;
//
//     Spot.destroy({
//         where: {id: id}
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Spot was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Spot with id=${id}. Maybe Spot was not found!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete Spot with id=" + id
//             });
//         });
//
// };
//
// // Delete all Spots from the database.
// exports.deleteAll = (req, res) => {
//     Spot.destroy({
//         where: {},
//         truncate: false
//     })
//         .then(nums => {
//             res.send({message: `${nums} Spots were deleted successfully!`});
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while removing all tutorials."
//             });
//         });
//
// };
//
// // Find all published Spots
// exports.findAllPublished = (req, res) => {
//     Spot.findAll({where: {published: true}})
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving tutorials."
//             });
//         });
//
// };
