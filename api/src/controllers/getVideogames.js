const { Videogame, Genre } = require('../db_conection')
const axios = require('axios')
const {APIKEY} = process.env;

const getVideogames=async(req, res)=>{
  try{
    const videogames=await Videogame.findAll()
    //toDo inlcuir la tabla intermedia a videoGames en su busqueda
    //toDo findAll({
      //   include: [{
      //     model: Genre,
      //     through: { attributes: [] }, //* Esto excluye los atributos de la tabla intermedia
      //   }],
      // })

    const response = await axios.get(`https://api.rawg.io/api/games${APIKEY}`)
    const videogamesFromAPI = response.data.results

    const datos={
      db:videogames,
      db_api:videogamesFromAPI,
    }
   
    
    res.json(datos)

  }catch(error){
    res.status(500).json({message: error.message})
  }
}

module.exports={
  getVideogames
}