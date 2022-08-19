const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET /api/tags
router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      include: [{
        model: Product,
      }]
     
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET /api/tags/1
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{
        model: Product,
      }]
     
    })
    if (!tagData) {
      res.status(400).json({ message: 'No tag found with that id!'})
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
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
