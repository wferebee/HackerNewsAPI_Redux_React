import React , { useState } from 'react';           //import useState hook which is needed because this is a functional component
import Header from "./components/Header";           // I was asked about hooks in the interview, so i wanted to complete the assignment with only functional components
import SearchResults from "./components/SearchResults";
import fetchData from './Redux/fetchData';
import getQuery from "./Redux/getQuery";
import {connect} from 'react-redux';
import store from './Redux/store';

function App(props) {

    let [input, setInput] = useState("");       // setting state in functinoal component
 
    const grabQuery = (e) => {                  // basically my submit function, want to clean this up in the future
        e.preventDefault();
        props.getQuery(input);
        props.fetchData(input);
        console.log(store.getState().queries);  // left this in here so that you can see im storing the user queries
    }

    const handleKeyPress = (e) => {             // on Enter function, basically the same as the above function,        
        if (e.key === "Enter") {                // I tired to clean this up, but I kept getting errors and it as getting late and I wanted to submit this.
            props.getQuery(input);              // on the plus side, I think this is less convoluted and it's clear whats happening withput having to search all over
            props.fetchData(input);
            console.log(store.getState().queries);      // left this in here so that you can see im storing the user queries
        }
    }; 

    return (
        
        <div className="App">

            <Header />

            <div className='head'>
                <input 
                    className = "SearchBox"
                    onChange={(e) => setInput(input = e.target.value)} // using setState hook equivelant of this.setState
                    onKeyUp={handleKeyPress}        // on enter search
                    value={input} placeholder={"search"}
                    type="text"
                    />

                <button  onClick={grabQuery}>Go!</button>            {/*  on submit search */}
                
            </div>
        
            {!props.results || props.results.length === 0 ?      // ternary conditional rendering
                                                                        // if no results exist ( when the page loads) then only return a welcome messgae
                <div className = " NoResultsHeaders">
                    <h1>WELCOME TO THE HACKER NEWS API</h1> 
                    <h3>Try Searching Something Interesting</h3> 
                </div>

            :   <div className ="SearchResultsBox">                           {/*  if results do exist then map over them and send them to <SearchResults /> */}
                    {props.results.hits.map((results, index) => <SearchResults 
                        key = {index}   // using index becuase I have no stable id
                        id = {index}    // using index so I can call key =props.id on <SearchResults />
                        URL = {results.url}
                        Title = {results.title} // need to include validation. ex. if title does not exist, do not render anything for that result
                        Author = {results.author} // think i could use reduce first maybe?
                        Comments = {results.num_comments} 
                        Points = {results.points}
                        />
                        
                    )} 
                </div> 
            }         {/*  I think I could find a less expensive way of rendinerg the results. Having 20 <SearchResult components doesnt seem efficient.
                        Also I wanted split the main app and <SearchResults into two components because of standard practices, but it was honestly more code and seems less efficient.
                       but if the app ever got more complex i know its a good idea to have copmonents split into there smallest managable, reasonable pieces. */}
        </div>
    );
};

const MapStateToProps = (state) => {
    return {
  results: state.results
};
};
const MapDispatchToProps = (dispatch) => {
    return {
    getQuery: (input) => dispatch(getQuery(input)),
    fetchData: (input)=> dispatch(fetchData(input))
};
};
export default connect(MapStateToProps, MapDispatchToProps)(App);