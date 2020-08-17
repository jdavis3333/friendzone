var express = require('express')
const session = require ("express-session");

var db = require('./models')
const routes = require("./routes");
var PORT = process.env.PORT || 3000;

app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))

// require('./routes/api_routes')(app)
app.use(routes);

db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on localhost:" + PORT)
    })
})