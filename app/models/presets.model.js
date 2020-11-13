module.exports = (sequelize, Sequelize) => {
    const preset = sequelize.define("preset", {
        presetId: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            required: true,
            references: {model: sequelize.models.user, key: 'userId'}
        },
        temperature: {
            type: Sequelize.INTEGER
        },
        humidity: {
            type: Sequelize.INTEGER
        },
        airflow: {
            type: Sequelize.INTEGER
        }
    });

    return preset;
};
