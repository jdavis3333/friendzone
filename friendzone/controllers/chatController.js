const db = require("../models");
module.exports = {
    findAll: function(req, res) {
        db.Chat.find(req.query)
          .then(dbModel => {console.log(dbModel) 
            res.json(dbModel)})
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.Chat.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}