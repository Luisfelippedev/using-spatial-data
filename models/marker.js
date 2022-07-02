const db = require('./db');
const Sequelize = require('sequelize');

const Marker = db.sequelize.define('marcadores', {
    titulo: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.TEXT
    },
    longuitude: {
        type: Sequelize.TEXT
    },
    latitude: {
        type: Sequelize.TEXT
    }
})


module.exports = Marker;



