const { Videogame, Genre } = require('../db_conection')
const { Op } = require('sequelize');

const searchVideogameByName=async(req, res)=>{
  const { name }=req.query
  try{
    const videogames=await Videogame.findAll({
      where:{
        name: { [Op.iLike]: `%${name}%` },
      },
      include: Genre,
      limit:15,
    })
  
    if(videogames.length === 0){
       return res.status(404).json({message: 'No videogames found'})
    }
  
    res.json(videogames)
  
  }catch(error){
    res.status(500).json({ message: error.message })
  }
}

module.exports={
  searchVideogameByName
}