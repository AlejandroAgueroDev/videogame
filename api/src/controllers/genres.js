const { Genre } = require('../db_conection')

const getGenres=async(req, res)=>{
  try{
    const genres=await Genre.findAll()
    res.json(genres)
  }catch(error){
    res.status(500).json({ message: error.message })
  }
}

module.exports={
  getGenres,
}