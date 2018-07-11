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

module.exports = router;
