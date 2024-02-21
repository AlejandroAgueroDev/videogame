import { ALLGAME } from "./action";
import { SEARCH_GAME } from "./action";


const initialState={
    videoGames: [],
    filteredGames: [], 
    
}

const rootReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case ALLGAME: return{
            ...state,
            videoGames: payload 
        }

        case SEARCH_GAME:
          const input = payload.toLowerCase();
          const filteredGames = state.videoGames.filter((game) =>
            game.name.toLowerCase().includes(input));
        return{
            ...state,
            filteredGames,
        }

        default: return{
            ...state
        }        
    }
}

export default rootReducer;

