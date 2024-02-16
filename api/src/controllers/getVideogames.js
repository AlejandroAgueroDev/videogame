const { Videogame, Genre } = require('../db_conection')

const getVideogames=async(req, res)=>{
    try{
      const videogames=await Videogame.findAll({
          include: Genre,
      })
      res.json(videogames)
    }catch(error){
      res.status(500).json({message: error.message})
    }
}

module.exports={
    getVideogames
}