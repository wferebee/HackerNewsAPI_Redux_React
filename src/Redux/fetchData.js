import { FETCH_DATA } from "./actionTypes";

export default function fetchData(input) {
    return dispatch => {                                         // no api key
    fetch(`https://hn.algolia.com/api/v1/search?query=${input}`) //template literal for injecting our variable
    .then(response => response.json())       // turn response into json format
    .then(res => dispatch({type:FETCH_DATA,payload:res}))  
    //.then(response => { console.log(response)})  // uncomment this to console log the results to get more info
    
    
};
};
// I didnt know if I should include setting filters for the API. I actually spent a few hours setting up the actual Alogilia API before I 
// realized I didnt need to do that. Then I thought about having the API bring up results as you type - in the same way the 
//algolia api does. I got that to work but then wasnt sure if it would work the same when I implemented redux, so I scrapped it, 
//but I do plan on implementing it soon, as well as filters. Seems like it would be a fun project.

// I realize these were unnecesary comments but I just wanted for whoever reads this to understand my thought process in finishing the test
// the way I did.