import { ALLGAME} from "./action";
import { SEARCH_GAME } from "./action";
import { ORDER_BY_NAME } from "./action";
import { GET_GENRES } from "./action";
import { SELECT_GENRES } from "./action";

const initialState = {
  videoGames: [],
  searchredGames: [],
  orderGames: [],
  complete_games: [],
  get_genres:[],
  notFound: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALLGAME:
      return {
        ...state,
        videoGames: payload,
      };

    case SEARCH_GAME:
      const input = payload.toLowerCase().trim();
      const searchredGames = state.videoGames.filter((game) =>
        game.name.toLowerCase().includes(input)
      );

      if (searchredGames.length === 0) {
        // alert("No se han encontrado videojuegos");
        return {
          ...state,
          searchredGames: state.videoGames,
          notFound: true,
        };
      } else {
        return {
          ...state,
          searchredGames,
          notFound: false,
        };
      }

    case ORDER_BY_NAME:
      const order = payload;
      const orderGames = [...state.videoGames].sort((a, b) => {
        if (order === "ascendente") {
          return a.name.localeCompare(b.name);
        } else if (order === "descendente") {
          return b.name.localeCompare(a.name);
        } else if (order === "Por defecto") {
          return 0;
        }
      });    
      return {
        ...state,
        videoGames: orderGames,
      };

    case GET_GENRES:
      return{
        ...state,
        get_genres:payload,
      }

    
     
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
