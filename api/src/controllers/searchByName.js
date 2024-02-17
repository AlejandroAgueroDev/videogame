const { Videogame, Genre } = require('../db_conection')
const { Op } = require('sequelize')
const axios = require('axios')
const {API_KEY} = process.env;

const searchVideogameByName=async(req, res)=>{
  const { name }=req.query
  try{

    //*Buscar video juegos en la DB
    const videogamesFromDB=await Videogame.findAll({
      where:{
        name: { [Op.iLike]: `%${name}%` },
      },
      include: Genre,
      limit:15,
    })
  
    
    if (videogamesFromDB.length > 0) {
      return res.json(videogamesFromDB);
    }

    //*Si no encuentra nada en la DB buscara en la api
    // console.log(`https://api.rawg.io/api/games?search=${name}&key=${APIKEY}`)
    const response = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
    const videogamesFromAPI = response.data.results
    if (videogamesFromAPI.length > 0) {
      return res.json(videogamesFromAPI);
    }
    
    return res.status(404).json({ message: 'No videogames found' })


  }catch(error){
    res.status(500).json({ message: error.message })
  }
}

module.exports={
  searchVideogameByName
}



// const searchVideogameByName = async (req, res) => {
//   const { name } = req.query;
//   try {
//     const videogamesFromDB = await Videogame.findAll({
//       where: {
//         name: { [Op.iLike]: `%${name}%` },
//       },
//       include: Genre,
//       limit: 15,
//     });

//     const response = await axios.get(`https://api.rawg.io/api/games?search=${name}`, {
//       params: { key: APIKEY },
//     });
//     const videogamesFromAPI = response.data.results;

//     // Unificar los resultados de la base de datos y la API
//     const mergedResults = [...videogamesFromDB, ...videogamesFromAPI];

//     if (mergedResults.length > 0) {
//       return res.json(mergedResults);
//     }

//     return res.status(404).json({ message: 'No videogames found' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }