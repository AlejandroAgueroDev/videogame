const { Videogame } = require('../db_conection')

const createVideogame=async(req, res)=>{
    const {name, description, platforms, image, releaseDate, rating, genres}=req.body
    console.log(req.body)
    
    try{
    const [videogame,created]=await Videogame.findOrCreate({
      where:{name},
      defaults:{
        description,
        platforms,
        image,
        releaseDate,
        rating,
      }         
    })    

    if(created){
      
      //*Relaciono el videogame creado con los generos
      await videogame.addGenre(genres)

      res.status(201).json(videogame)
    }else{
      res.status(501).json({message: 'El personaje ya existe'})
    }    
  
  }catch(error){
    res.status(500).json({ message: error.message })
  }
}

module.exports={
  createVideogame
}