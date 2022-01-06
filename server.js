if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const indexRouter = require('./routes/index')
const movieRouter = require('./routes/movies')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('connected to mongoDB')
} )

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.use('/', indexRouter)
app.use('/movies', movieRouter)

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));