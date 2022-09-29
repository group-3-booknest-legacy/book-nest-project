const router = require('express').Router();
let MyBook = require ("../models/myBookModel");


//  handles the route to get all the books in My Books
router.route('/').get((req, res) => {
    MyBook.find()
    .then(myBooks => res.json(myBooks))
    .catch(err => res.status(400).json('Error: '+ err));
});

//  handles http add a book to MyBooks (post) request
router.route('/add').post((req, res) =>{
    const user = req.body.user;
    const title = req.body.text;
    const author = req.body.author;
    const genre = req.body.genre;
    const favourite = req.body.favourite;

    const newMyBook = new MyBook({
       user,
       title,
       author,
       genre,
       favourite,

    });

    newMyBook.save()
    .then(() => res.json(`${newMyBook.title} Book has been added to My Books`))
    .catch(err => res.status(400).json('Error: '+ err));
});


// handles the route to get one book
router.route('/:id').get((req, res) => {
    MyBook.findById(req.params.id)
    .then(MyBooks => res.json(MyBooks))
    .catch(err => res.status(400).json('Error: '+ err));
});


// Handles the route to delete a book from My Books
router.route('/:id').delete((req, res) => {
    MyBook.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted'))
    .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;