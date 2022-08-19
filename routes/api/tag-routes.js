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
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST /api/tags
router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//PUT /api/tags/1
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {id: req.params.id }
    })
    if (!tagData){
      res.status(400).json({message: 'No Tag found with that Id!'})
      return;
    }
    res.status(200).json(tagData);
  } catch {
    res.status(500).json(err);
  }
});

//DELETE /api/tags/1
router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {id: req.params.id}
    })
    if (!tagData){
      res.status(400).json({ message: 'No Tag found with that ID'})
      return;
    }
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
