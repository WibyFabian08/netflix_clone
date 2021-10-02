const express = require('express');
const router = express.Router();

const listController = require('../controllers/listController');

router.get('/all', listController.getLists);
router.get('/:id', listController.getList);
router.get('/:id/movie', listController.getMovieByListId);
router.get('/', listController.getMovieLists);
router.post('/create', listController.createList);
router.put('/:id/edit', listController.editList);
router.delete('/:id/delete', listController.deleteList);
router.put('/:listId/:movieId', listController.deleteMovieOnList);

module.exports = router;