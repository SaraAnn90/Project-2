const { Op } = require("sequelize");
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/petfood", function(req, res) {
    const searchtext =  req.query.searchtext;
    let results = { noResults: true };
    db.PetFood.findAll({
      where: {
        [Op.or]: [
          { brandname: { [Op.like]: '%' + searchtext + '%' } }, 
          { foodName: { [Op.like]: '%' + searchtext + '%' } }
        ]
      }}).then(function(data) {
        console.log(data);
        if (data && data.length) {
          results = { 
            products: data
          };
        }
        res.render("index", results);
    });
  });

    // Load pet food page and pass in an example by id
    app.get("/petfood/:id", function(req, res) {
      db.PetFood.findOne({ 
        where: { id: req.params.id },
        include: db.FoodManufacturer
      }).then(function(product) {
        console.log(product);
        res.render("product", {
          product: product
        });
      });
    });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
