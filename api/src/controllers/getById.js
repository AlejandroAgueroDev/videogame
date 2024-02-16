const { Videogame, Genre } = require('../db_conection')

const getVideogameById=async(req, res)=>{
  const { idVideogame }=req.params
  const validUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  
  if (!validUuid.test(idVideogame)) {
    return res.status(400).json({ message: 'Invalid UUID format' });
  }
  
  try{
    const videogame=await Videogame.findByPk(idVideogame,{
      include: Genre,
    })

    if(!videogame){
      return res.status(404).json({message:'Videogame not found'})
    }
    res.json(videogame)
  
  }catch(error){
    res.status(500).json({ message: error.message })
  }
}

module.exports={
  getVideogameById
}