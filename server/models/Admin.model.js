const mongoose = require('mongoose');
const { Schema, model: _model } = mongoose;

const requiredString = { type: String, required: true };
const collectionName = 'admin-data';

const AdminModel = new Schema(
  {
    firstname: requiredString,
    lastname: requiredString,
    middlename: requiredString,
    email: requiredString,
    password: requiredString,
  },
  { collection: collectionName } 
);

const model = _model(collectionName, AdminModel);

module.exports = model;