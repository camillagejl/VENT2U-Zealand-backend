const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //         message: "Name can not be empty!"
    //     });
    //     return;
    // }

    // Create a User
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        lastSpotId: req.body.lastSpotId,
        askLastSpot: req.body.askLastSpot,
        userTemperature: req.body.userTemperature,
        userHumidity: req.body.userHumidity,
        userAirflow: req.body.userAirflow,
        leavingTime: req.body.leavingTime

    };

    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const userId = req.query.userId;
    var condition = userId ? {userId: {[Op.like]: `%${userId}%`}} : null;

    User.findAll({where: condition})
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
// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
        });

};

// Update a User by the id in the request
exports.update = (req, res) => {
    console.log("This is relevant");
    const id = req.params.id;

    User.update(req.body, {
        where: {userId: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });

};
//
// // Delete a User with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;
//
//     User.destroy({
//         where: {id: id}
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "User was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete User with id=${id}. Maybe User was not found!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete User with id=" + id
//             });
//         });
//
// };
//
// // Delete all Users from the database.
// exports.deleteAll = (req, res) => {
//     User.destroy({
//         where: {},
//         truncate: false
//     })
//         .then(nums => {
//             res.send({message: `${nums} Users were deleted successfully!`});
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
// // Find all published Users
// exports.findAllPublished = (req, res) => {
//     User.findAll({where: {published: true}})
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
