
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload')
const Book = require('../models/book')

router.get('/', (req,res) => {
  Book.find().then(books =>
    res.json(books)
  ).catch(err => res.status(404).json({noBookFound: 'No Book Found'}));
});

router.get('/:id', (req, res) => {
  Book.findById(req.params.id).then(book => res.json(book)).catch(err => res.status(404).json({nobookfound: 'No Book Found!'}));
});

router.post(
  '/',
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'readBook', maxCount: 1 }
  ]),
  (req, res) => {
    console.log("file", req.file);
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      description: req.body.description,
      published_date: req.body.published_date,
      publisher: req.body.publisher,
      
      image: req.files?.['image']?.[0]?.filename,
      readBook: req.files?.['readBook']?.[0]?.filename,
    });

    newBook.save()
      .then(book => res.json({ msg: "Book Added Successfully!", book }))
      .catch(err => res.status(500).json({ error: 'Unable to add this book', err }));
  }
);


router.put('/:id', (req, res) => {
Book.findByIdAndUpdate(req.params.id, req.body).then(book => res.json({msg: 'Updated Successfully!'})).catch(err => res.status(404).json({error: 'Unable to update Book'}));
});

router.delete('/:id', (req, res) => {
Book.findByIdAndDelete(req.params.id).then(
  book => res.json({msg: 'Book entry deleted Successfully!'})).catch(err => res.status(404).json({err: 'No Such Book deleted!'}))

});

module.exports = router;
