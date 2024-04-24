const ClothingItem = require('../models/clothingItem');

// Function to create a new item
const createItem = (req, res) => {
  const { name, weather, imageURL } = req.body;
  const userId = req.user.id;
  const newItem = new ClothingItem({
    name,
    weather,
    imageURL,
    owner: userId
  });

  ClothingItem.findById(newItem._id)
    .then(item => {
      if (item) {
        return res.status(400).json({ error: 'Resource already exists' });
      }

      newItem.save()
        .then(item => res.status(201).json(item))
        .catch(error => res.status(400).json({ error: 'Bad request' }));
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

module.exports = {
  createItem
};
