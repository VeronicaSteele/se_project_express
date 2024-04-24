const router = require('express').Router()
const ClothingItem = require('../models/clothingItem');
const {createItem} = require('../controllers/clothingItems');


router.get('/', auth, (req, res) => {
  ClothingItem.find({ owner: req.user.id })
    .then(items => res.status(200).json(items))
    .catch(error => res.status(500).json({ error: 'Server error' }));
});

router.post('/', auth, createItem);


router.delete('/:itemId', auth, (req, res) => {
  const { itemId } = req.params;
  const userId = req.user.id;

  ClothingItem.findOne({ _id: itemId, owner: userId })
    .then(item => {
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      ClothingItem.findByIdAndDelete(itemId)
        .then(() => res.status(200).json({ message: 'Item deleted successfully' }))
        .catch(error => res.status(500).json({ error: 'Server error' }));
    })
    .catch(error => res.status(500).json({ error: 'Server error' }));
});

module.exports = router;
