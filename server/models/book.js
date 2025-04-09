const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String, 
    require: true
  },
  isbn: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  description: {
    type: String,
  }, 
  published_date: {
    type: Date
  },
  publisher: {
    type: String,
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String
    
  },
  readBook: {
    type: String

  }

});

const BookModel = mongoose.model("Books", BookSchema);
module.exports = BookModel;