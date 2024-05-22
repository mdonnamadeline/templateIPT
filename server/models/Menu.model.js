const mongoose = require('mongoose');
const { Schema, model: _model } = mongoose;

const requiredString = { type: String, required: true };
const collectionName = 'menu-data';

const MenuModel = new Schema(
  {
    name: requiredString,
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { collection: collectionName } 
);

const model = _model(collectionName, MenuModel);

module.exports = model;