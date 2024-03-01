const { Videogame, Genre } = require("../db_conection");
const axios = require("axios");
const { APIKEY } = process.env;

const getVideogames = async (req, res) => {
 try {
  const videogames = await Videogame.findAll({
   include: [
    {
     model: Genre,
     through: { attributes: [] },
    },
   ],
  });

  const response = await axios.get(`https://api.rawg.io/api/games${APIKEY}`);
  const videogamesFromAPI = response.data.results;

  const datos = {
   db: videogames.map((game) => ({
    id: game.id,
    name: game.name,
    background_image: game.background_image,
    platforms: game.platforms,
    description_raw: game.description_raw,
    genres: game.Genres,
    rating: game.rating,
   })),
   db_api: videogamesFromAPI,
  };

  res.json(datos);
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

module.exports = {
 getVideogames,
};
