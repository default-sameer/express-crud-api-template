const Movie = require('../models/movies')


// add movies to db
const addMovie = async (req, res) => {
    const movie = new Movie(req.body)
    try {
        await movie.save()
        res.status(201).json({success: true, data: movie})
    } catch (error) {
        res.status(400).send(error)
    }
}

// get all movies from db
const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.status(200).json({success: true, data: movies})
    } catch (error) {
        res.status(400).send(error)
    }
}

// Search movies by name
const searchMovies = async (req, res) => {
    try {
        const movies = await Movie.find({name: req.params.name})
        res.status(200).json({success: true, data: movies})
    } catch (error) {
        res.status(400).send(error)
    }
}

// get movie by id 
const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.status(200).json({success: true, data: movie})
    } catch (error) {
        res.status(400).send(error)
    }
}

// update movie by id
const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({success: true, data: movie})
    } catch (error) {
        res.status(400).send(error)
    }
}

// delete movie by id
const deleteMovie = async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id)
        +
        res.status(200).json({success: true})
    } catch (error) {
        res.status(400).send(error)
    }
}



module.exports = {
    addMovie,
    getMovies,
    searchMovies,
    getMovieById,
    updateMovie,
    deleteMovie
}