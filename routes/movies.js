const express = require('express')
const { addMovie, getMovies, searchMovies, getMovieById, updateMovie, deleteMovie } = require('../controllers/movies')

const router = express.Router()


router.get('/', getMovies)

router.post('/add', addMovie)

router.get('/search/:name', searchMovies)

router.get('/:id', getMovieById)

router.delete('/:id', deleteMovie)

router.put('/:id', updateMovie)


module.exports = router