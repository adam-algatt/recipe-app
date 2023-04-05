const mongoose = require('mongoose');

const uriModel = mongoose.Schema({
  uriName: {
    type: String,
  }
})

const Uri = mongoose.model('Uri', uriModel);
module.exports = Uri;