const mongoose = require('mongoose');
const { Schema, model: _model } = mongoose;

const requiredString = { type: String, required: true };
const collectionName = 'DataModel';

const DataModel = new Schema(
  {
    date: requiredString,
    title: requiredString,
    content: requiredString,
  },
  { collection: collectionName } 
);

const model = _model(collectionName, DataModel);

module.exports = model;