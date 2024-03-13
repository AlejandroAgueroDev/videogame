import axios from "axios";

export const ALLGAME = "ALLGAME";
export const SEARCH_GAME = "SEARCH_GAME";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const GET_GENRES = 'GET_GENRES'
export const SELECT_GENRES = 'SELECT_GENRES'
export const CREATE_GAME = 'CREATE_GAME'
export const REFRESH_ORDER='REFRESH_ORDER'

export const allGame = (valorInput) => {
  return async (dispatch) => {
    let URL = "http://localhost:3001/videogames/";

    const response = await axios.get(URL);
    const gameBD = response.data.db;
    const gameAPI = response.data.db_api;

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
            description_raw: game.description_raw,
            genres: game.genres,
            platforms: game.platforms,
            background_image: game.background_image,
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

export const get_genres = () => {
  return async (dispatch) => {
    let URL = 'http://localhost:3001/genres'

    const response = await axios.get(URL)
    const genres = response.data

    return dispatch({
      type: GET_GENRES,
      payload: genres,
    })

  }
}

export const select_genres = (generos) => {
  return {
    type: SELECT_GENRES,
    payload: generos,
  };
}

export const refreshOrder = () => {
  return {
    type: 'REFRESH_ORDER'
  };
};

export const createGame=(gameData)=>{
  return async (dispatch) => {
    
    try{

      const response = await axios.post('http://localhost:3001/videogames/create', gameData);
      const newGame = response.data;

      alert("Juego creado correctamente");
  
      return dispatch({
        type: CREATE_GAME,
        payload: newGame,
      });
    }catch(error){
      alert("Error creando juego: "+error.message );
    }

  };
}