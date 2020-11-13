const db = require("../models");
const Preset = db.presets;
const Op = db.Sequelize.Op;

// Create and Save a new Preset
exports.create = (req, res) => {
    // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //         message: "Name can not be empty!"
    //     });
    //     return;
    // }

    // Create a Preset
    const preset = {
        name: req.body.name,
        userId: req.body.userId,
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        airflow: req.body.airflow
    };

    // Save Preset in the database
    Preset.create(preset)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Preset."
            });
        });
};

// Retrieve all Presets from the database.
exports.findAll = (req, res) => {
    const presetId = req.query.presetId;
    var condition = presetId ? {presetId: {[Op.like]: `%${presetId}%`}} : null;

    Preset.findAll({where: condition})
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
// Find a single Preset with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Preset.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Preset with id=" + id
            });
        });

};

// Update a Preset by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Preset.update(req.body, {
        where: {presetId: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Preset was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Preset with id=${id}. Maybe Preset was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Preset with id=" + id
            });
        });

};

// // Delete a Preset with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;
//
//     Preset.destroy({
//         where: {id: id}
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Preset was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Preset with id=${id}. Maybe Preset was not found!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete Preset with id=" + id
//             });
//         });
//
// };
//
// // Delete all Presets from the database.
// exports.deleteAll = (req, res) => {
//     Preset.destroy({
//         where: {},
//         truncate: false
//     })
//         .then(nums => {
//             res.send({message: `${nums} Presets were deleted successfully!`});
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
// // Find all published Presets
// exports.findAllPublished = (req, res) => {
//     Preset.findAll({where: {published: true}})
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
