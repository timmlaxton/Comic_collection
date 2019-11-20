const router = require('express').Router();
let Comic = require('../models/comics.model');

router.route('/').get((req, res) => {
  Comic.find()
    .then(comics => res.json(comics))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const genre = req.body.genre;
  const issue = Number(req.body.issue);
  const publisher = req.body.publisher;

  const newComic = new Comic({
    title,
    genre,
    issue,
    publisher,
  });

  newComic.save()
  .then(() => res.json('Comic added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Comic.findById(req.params.id)
    .then(comic => res.json(comic))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Comic.findByIdAndDelete(req.params.id)
    .then(() => res.json('Comic deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Comic.findById(req.params.id)
    .then(comic => {
      comic.title = req.body.title;
      comic.genre = req.body.description;
      comic.issue = Number(req.body.duration);
      comic.publisher = req.body.description;;

      exercise.save()
        .then(() => res.json('Comic Collection updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
