const ClothingItem = require('../models/clothingItem');

const getItems = (req, res) => {
  ClothingItem.find()
    .then(items => {
      if (!items) {
        return res.status(404).json({ message: 'Requested resource not found' });
      }
      res.status(200).json(items);
    })
    .catch(error => res.status(500).json({ error: 'Server error' }));
};

const createItem = (req, res) => {
  const { name, weather, imageURL } = req.body;
  const ownerId = req.user.id;
  const newItem = new ClothingItem({
    name,
    weather,
    imageURL,
    owner: ownerId
  });

  newItem.save()
    .then(item => res.status(201).json(item))
    .catch(error => res.status(400).json({ error: 'Bad request' }));
};

const deleteItem = (req, res) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndDelete(itemId)
    .then(item => {
      if (!item) {
        return res.status(404).json({ message: 'Requested resource not found' });
      }
      res.status(200).json({ message: 'Item deleted successfully' });
    })
    .catch(error => res.status(500).json({ error: 'Server error' }));
};

module.exports = {
  getItems,
  createItem,
  deleteItem
};

