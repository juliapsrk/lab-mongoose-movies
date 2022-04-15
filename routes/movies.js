const express = require('express');
const Movie = require('../models/movie.js');
const router = express.Router();

router.get('/', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies/movies', { movies });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/create', (req, res, next) => {
  // console.log('just checking');
  res.render('movies/create');
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      console.log(id);
      res.render('movies/show', { movie });
    })
    .catch((error) => {
      next(error);
    });
});

// Create new movie

router.post('/create', (req, res, next) => {
  console.log('hehhe');
  const { title, year, genre, director, plot } = req.body;
  Movie.create({ title, year, genre, director, plot })
    .then((movie) => {
      const id = movie._id;
      res.redirect('/movies/');
    })
    .catch((error) => {
      res.redirect('/movies/create');
    });
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;

  // Edit movie
  Movie.findById(id)
    .then((movie) => {
      res.render('movies/edit', { movie });
    })
    .catch((error) => {
      next(error);
    });
});

// Delete movie
router.post('/:id/delete', (req, res, next) => {
  console.log('HDHDHD');
  const { id } = req.params;
  Movie.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/movies/');
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { title, year, genre, director, plot } = req.body;
  Movie.findByIdAndUpdate(id, { title, year, genre, director, plot })
    .then(() => {
      res.redirect('/movies/' + id);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
