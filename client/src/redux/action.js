import axios from "axios";

const API_KEY='3ef5d6b08fed4e12a529f69e400935ad'

export const ALLGAME='ALLGAME'
export const SEARCH_GAME='SEARCH_GAME'
export const SORT_GAME='SORT_GAME'


export const allGame = ()=>{
    
    return async(dispatch)=>{   
        let URL=`https://api.rawg.io/api/games?key=${API_KEY}`

        const response = await axios.get(URL);
        const game=response.data.results

        return dispatch({
            type: ALLGAME,
            payload: game,
        })
    }
}

export const searchGames=(input)=>{
    
   return {
    type: SEARCH_GAME,
    payload:input,
   } 
}


export const sortGame=()=>{
    return {
     type:SORT_GAME,
     payload:order,
    }
}
