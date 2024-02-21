import { ALLGAME } from "./action";


const initialState={
    videoGames: [], 
}

const rootReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case ALLGAME: return{
            ...state,
            videoGames: payload 
        }

        default: return{
            ...state
        }        
    }
}

export default rootReducer;

