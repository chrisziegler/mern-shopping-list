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
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Public
router.delete('/:id', (req, res) => {
  // this will fetch it by the URI
  Item.findById(req.params.id)
    .then(item =>
      item.remove().then(
        () => res.json({ success: true })
        // we want to send a response, but not a res.json() - 200 ok
        // but a 404 for not found
      )
    )
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
