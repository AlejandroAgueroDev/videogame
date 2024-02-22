import { ALLGAME } from "./action";
import { SEARCH_GAME } from "./action";
import { SORT_GAME } from "./action";

const initialState = {
  videoGames: [],
  searchredGames: [],
  sortedGames: [],
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
        alert("No se han encontrado videojuegos");
        return {
          ...state,
          searchredGames: state.videoGames,
        };
      } else {
        return {
          ...state,
          searchredGames,
        };
      }

    case SORT_GAME:
      const gamesCopy = state.videoGames.slice();
      const sortedGames = gamesCopy.sort((a, b) => {
        if (isAction.payload === "asc") {
          return a.id - b.id;
        } else if (action.payload === "desc") {
          return b - id - a.id;
        } else {
          return 0;
        }
      });

      return {
        ...state,
        sortedGames,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
