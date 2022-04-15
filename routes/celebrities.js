const express = require('express');
const Celebrity = require('../models/celebrity.js');
const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/create', (req, res, next) => {
  res.render('celebrities/create');
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/create', (req, res, next) => {
  console.log('creating');
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then((celebrity) => {
      const id = celebrity._id;
      res.redirect('/celebrities/');
    })
    .catch((error) => {
      res.redirect('/celebrities/create');
    });
});

router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase })
    .then(() => {
      res.redirect('/celebrities/' + id);
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/delete', (req, res, next) => {
  console.log('deleting');
  const { id } = req.params;
  Celebrity.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/celebrities/');
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
