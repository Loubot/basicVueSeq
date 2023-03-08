const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;



// Create and Save a new Tutorial
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  console.log('You hit findAll');
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  console.log('You hit the update ' + JSON.stringify( req.body  ) )
  const id = req.params.id;
  Tutorial.update( req.body, {
    where: { id: id }
  }).then( obj => {
    Tutorial.findByPk( id ).then( objB => {
      console.log( "Updated object " + objB )
      res.send( objB )
    })
    // res.status( 200 ).send( { obj });
  })
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Tutorial.destroy({
    where: {
      id: id
    }
  }).then( objB => {
    Tutorial.findAll( results => {
      res.send( results);
    })
  })
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.findAll(  { where: {
      "published": true
  }} )
    .then( obj => {
      // console.log( 'Found all published' + obj );
      res.send( obj );
    })
};