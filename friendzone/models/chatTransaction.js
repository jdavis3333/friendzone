var moment = require('moment')

module.exports = function (sequelize, DataTypes) {
    var ChatTransaction = sequelize.define("ChatTransaction", {
        text: DataTypes.STRING,
        userID: DataTypes.STRING,
        timeStamp: {
            type: DataTypes.STRING,
            defaultValue: moment().format("YYYYMMDD")
        }
    })
    ChatTransaction.associate = function (models) {
        ChatTransaction.belongsTo(models.chat, { foreignKey: {allowNull:false}})
    }
    return Chat;
}