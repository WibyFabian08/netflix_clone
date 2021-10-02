const express = require('express');
const router = express.Router();

const uploadFiles = require('../middlewares/uploadFiles');

const movieController = require('../controllers/movieController');

router.get('/', movieController.getMovies);
router.get('/random', movieController.getRandom);
router.get('/:id', movieController.getMovie);
router.post('/create', uploadFiles, movieController.createMovie);
router.put('/:id/update', uploadFiles, movieController.updateMovie);
router.delete('/:id/delete', movieController.deleteMovie);

module.exports = router;