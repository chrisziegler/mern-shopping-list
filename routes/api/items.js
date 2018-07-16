const express = require('express');
const router = express.Router();

// Item Model - needed for queries and CRUD ops
const Item = require('../../models/Items');

// @route GET api/items
// @desc Get all Items
// @access Public
// instead of app.get in the server.js, here we want to use router
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route POST api/items
// @desc Post an item
// @access Public
router.post('/', (req, res) => {
  // construct an aboject to insert into the database
  // name is going to be in the body of the request
  // date will be automatically inserted
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

module.exports = router;
