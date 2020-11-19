const Sequelize = require("sequelize");
const sequelize = new Sequelize('vent2udb', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  port: 3307
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.presets = require("./presets.model.js")(sequelize, Sequelize);
db.spots = require("./spots.model.js")(sequelize, Sequelize);
db.login = require("./login.model.js")(sequelize, Sequelize);

module.exports = db;