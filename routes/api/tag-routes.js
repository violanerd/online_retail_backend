const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET /api/tags
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

//GET /api/tags/1
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

//POST /api/tags
router.post('/', (req, res) => {
  // create a new tag
});

//PUT /api/tags/1
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

//DELETE /api/tags/1
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
