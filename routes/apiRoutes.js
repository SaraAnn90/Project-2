const { Op } = require("sequelize");
var db = require("../models");

module.exports = function(app) {
  // Get all pet foods
  app.get("/api/petfoods", function(req, res) {
    db.PetFood.findAll({include: db.FoodManufacturer}).then(function(petFoods) {
      res.json(petFoods);
    });
  });
  // Get pet food by name
  app.get("/api/petfood/:searchtext", function(req, res) {
    const searchtext =  req.params.searchtext;
    db.PetFood.findAll({
      where: {
        [Op.or]: [
          { brandname: { [Op.like]: '%' + searchtext + '%' } }, 
          { foodName: { [Op.like]: '%' + searchtext + '%' } }
        ]
      }, 
      include: db.FoodManufacturer}).then(function(petFoods) {
      res.json(petFoods);
    });
  });

  // Create a new pet food
  app.post("/api/petfood", function(req, res) {
    db.PetFood.create(req.body).then(function(petFood) {
      res.json(petFood);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
