const { Videogame, Genre } = require('../db_conection')
const axios=require('axios')
const {API_KEY} = process.env;

const getVideogameById=async(req, res)=>{
  const { idVideogame }=req.params
  const validUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  if (validUuid.test(idVideogame)) {
    try {
      const videogame=await Videogame.findByPk(idVideogame,{
        include: [{
          model: Genre,
          through: { attributes: [] }, //* Esto excluye los atributos de la tabla intermedia
        }],
      })

      res.json(videogame)
  
    } catch (error) {
      res.status(500).json({ message: error.message })
    }


  } else if (Number(idVideogame)) {
    try {
      const response=await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)
        
      res.json(response.data)

    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.status(500).json({error: "Ha ocurrido un error"})
  }  

}

module.exports={
  getVideogameById
}