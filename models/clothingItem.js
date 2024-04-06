const mongoose = require('mongoose');

const clothingItemSchema = new mongoose.Schema({
name:{
  type: String,
  required: true,
  minlength:2,
  maxlength:30
},
weather:{
  type: String,
  required: true,
  enum: ['hot', 'warm', 'cold']
},
imageURL:{
  type: String,
  required: true,
},
owner:{
  required: true,
},
likes:{},
createdAt:{}
});

module.exports = mongoose.model('item', clothingItemSchema);