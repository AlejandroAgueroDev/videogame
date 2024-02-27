import axios from "axios";

export const ALLGAME = "ALLGAME";
export const SEARCH_GAME = "SEARCH_GAME";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
// export const COMPLETE_GAMES = "COMPLETE_GAMES";

export const allGame = (valorInput) => {
  return async (dispatch) => {
    let URL = "http://localhost:3001/videogames/";

    const response = await axios.get(URL);
    const gameBD = response.data.db;
    const gameAPI = response.data.db_api;
    // console.log(game)

    if (valorInput === "API") {
      return dispatch({
        type: ALLGAME,
        payload: gameAPI,
      });
    } else if (valorInput === "BD") {
      return dispatch({
        type: ALLGAME,
        payload: gameBD.map((game) => {
          return {
            id: game.id,
            name: game.name,
            description_raw: game.description,
            genres: game.genres,
            platforms: game.platforms
              .split(", ")
              .map((plat, index) => ({ id: index, platform: plat })),
            background_image: game.image,
            released: game.releaseDate,
            rating: game.rating,
          };
        }),
      });
    } else {
      return dispatch({
        type: ALLGAME,
        payload: gameAPI,
      });
    }
  };
};

export const searchGames = (input) => {
  return {
    type: SEARCH_GAME,
    payload: input,
  };
};

export const orderByName = (order) => {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
};

// const GAME_API = {
//     id: 123,
//     name: "Resident Evil 4",
//     description: "Descripcion del juego (tiene tags HTML)",
//     description_raw: "Descripcion del juego (texto)",
//     background_image: "http://imageofgames.com/images/re4.jpg",
//     genres: [
//       { id: 1, name: "Action" },
//       { id: 2, name: "Adventure" },
//     ],
//     platforms: [
//       { platform: { id: 1, name: "Windows" } },
//       { platform: { id: 2, name: "macOS" } },
//       { platform: { id: 3, name: "PlayStation 2" } },
//     ],
//     released: "2005-02-11",
//     rating: 10,
//   };

//   const GAME_DB = {
//     id: "2d910-d219dk0-1d920dskad-9d12d",
//     name: "Minecraft",
//     description: "Descripcion del juego (texto)",
//     genres: [
//       { id: 1, name: "Adventure" },
//       { id: 2, name: "Indie" },
//     ],
//     platforms: "Windows, macOS, Consoles",
//     image: "http://imageofgames.com/images/minecraft.jpg",
//     releaseDate: "2011-10-11",
//     rating: 10,
//   };

//   const GAMES_DB = [
//     {
//       id: "2d910-d219dk0-1d920dskad-9d12d",
//       name: "Resident Evil 4",
//       description: "Descripcion del juego (texto)",
//       genres: [
//         { id: 3, name: "Action" },
//         { id: 4, name: "Terror" },
//       ],
//       platforms: "Windows, macOS, Consoles",
//       image: "http://imageofgames.com/images/re4.jpg",
//       releaseDate: "2005-10-11",
//       rating: 10,
//     },
//     {
//       id: "2d910-d219dk0-1d920dskad-9d12d",
//       name: "Minecraft",
//       description: "Descripcion del juego (texto)",
//       genres: [
//         { id: 1, name: "Adventure" },
//         { id: 2, name: "Indie" },
//       ],
//       platforms: "Windows, macOS, Consoles",
//       image: "http://imageofgames.com/images/minecraft.jpg",
//       releaseDate: "2011-10-11",
//       rating: 10,
//     },
//   ];

// GAMES_DB.map((game) => {
//   return {
//     id: game.id,
//     name: game.name,
//     description_raw: game.description,
//     genres: game.genres,
//     platforms: game.platforms
//       .split(", ")
//       .map((plat, index) => ({ id: index, platform: plat })),
//     background_image: game.image,
//     released: game.releaseDate,
//     rating: game.rating,
//   };
// });
