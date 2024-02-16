const router = require("express").Router()
const { videogamesRouter }=require('./videogamesRouter')
const { genreRouter }=require('./genreRouter')

router.use("/videogames", videogamesRouter);

router.use("/genres", genreRouter);

module.exports = router;



// require('dotenv').config()

// const { APIKEY } = process.env;

// const apiKeyMiddleware = (req, res, next) => {
//     const apiKey = req.query.key;
//     if (apiKey !== APIKEY) {
//       return res.status(403).json({ message: 'API key is missing or invalid' });
//     }
//     next();
//   };