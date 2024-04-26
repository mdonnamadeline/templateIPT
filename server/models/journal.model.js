const mongoose = require('mongoose');
const { Schema, model: _model } = mongoose;

const requiredString = { type: String, required: true };
const collectionName = 'journal-data';

const DataModel = new Schema(
  {
    date: requiredString,
    title: { type: String, required: true, unique: true },
    content: requiredString,
  },
  { collection: collectionName } 
);

const model = _model(collectionName, DataModel);

module.exports = model;