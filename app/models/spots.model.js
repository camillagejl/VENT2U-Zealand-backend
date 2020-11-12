module.exports = (sequelize, Sequelize) => {
    return sequelize.define("spot", {
        spotId: {
            type: Sequelize.STRING,
            unique: true, allowNull:
                false, primaryKey: true
        },
        userId: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false,
            references: {model: sequelize.models.user, key: 'userId'}
        },
        currTemperature: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        currHumidity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        currAirflow: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
};