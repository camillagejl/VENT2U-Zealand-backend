module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user", {
        userId: {
            type: Sequelize.INTEGER, unique: true, allowNull: false, primaryKey: true, autoIncrement: true
        },
        name: {
            type: Sequelize.STRING, allowNull: false
        },
        email: {
            type: Sequelize.STRING, unique: true, allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING, allowNull: false
        },
        lastSpotId: {
            type: Sequelize.STRING
        },
        userTemperature: {
            type: Sequelize.INTEGER
        },
        userHumidity: {
            type: Sequelize.INTEGER
        },
        userAirflow: {
            type: Sequelize.INTEGER
        },
        leavingTime: {
            type: Sequelize.TIME
        }
    });
};
