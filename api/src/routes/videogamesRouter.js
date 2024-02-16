const {Router} = require("express")
const videogamesRouter=Router()
const { getVideogames }=require('../controllers/getVideogames')
const { getVideogameById}=require('../controllers/getById')
const { searchVideogameByName }=require('../controllers/searchByName')
const { createVideogame}=require('../controllers/createGame')

videogamesRouter.get('/',getVideogames)
videogamesRouter.get("/:idVideogame", getVideogameById);
videogamesRouter.get("/name/", searchVideogameByName);
videogamesRouter.post("/", createVideogame);

module.exports={
    videogamesRouter,
}