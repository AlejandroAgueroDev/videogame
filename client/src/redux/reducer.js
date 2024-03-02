import { ALLGAME } from "./action";
import { SEARCH_GAME } from "./action";
import { ORDER_BY_NAME } from "./action";
import { GET_GENRES } from "./action";
import { SELECT_GENRES } from "./action";
import { CREATE_GAME } from "./action";
import { REFRESH_ORDER } from "./action";


const initialState = {
  videoGames: [],
  searchredGames: [],
  orderGames: [],
  complete_games: [],
  get_genres: [],
  notFound: false,
  copyVideoGames: [],
  generos: [],
  games: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALLGAME:
      return {
        ...state,
        videoGames: payload,
        copyVideoGames: payload,
      };

    case SEARCH_GAME:
      const input = payload.toLowerCase().trim();
      const searchredGames = state.videoGames.filter((game) =>
        game.name.toLowerCase().includes(input)
      );

      if (searchredGames.length === 0) {
        return {
          ...state,
          videoGames: state.videoGames,
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
          return state.videoGames;
        }
      });
      return {
        ...state,
        videoGames: [...orderGames],
      };

    case GET_GENRES:
      return {
        ...state,
        get_genres: payload,
      };

    case SELECT_GENRES:
      const generos = payload.split(",").map((genre) => genre.trim());
      const filteredGames = [...state.copyVideoGames].filter((game) => {
        const gameGenres = game.genres.map((genre) => genre.name);

        return generos.every((genre) => gameGenres.includes(genre));
      });

      if (generos[0] === "Todos") {
        return {
          ...state,
          videoGames: state.copyVideoGames,
        };
      } else {
        return {
          ...state,
          videoGames: filteredGames,
        };
      }

    case CREATE_GAME:
      return {
        ...state,
        games: [...state.games, payload],
      };

    case REFRESH_ORDER:
      return {
        ...state,
        videoGames: [...state.copyVideoGames],
      }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
