const { Videogame } = require('../db_conection')

const createVideogame=async(req, res)=>{
    const {name, description, platforms, image, releaseDate, rating, genres}=req.body
    try{
    const videogame=await Videogame.create({
      name,
      description,
      platforms,
      image,
      releaseDate,
      rating,
    })
      
    await videogame.addGenres(genres)
    res.status(201).json(videogame)
  
  }catch(error){
    res.status(500).json({ message: error.message })
  }
}

module.exports={
  createVideogame
}