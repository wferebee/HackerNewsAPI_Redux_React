import React from 'react';

 const SearchResults = (props) => {
    
    return (
        <div className = "AllResults">
            
            <dt 
                className = "ResultsTable"
                key = {props.id}> 
                                            {/*   passed key as id because I dont have a stable Id for the results, so I just use the index+1 so
                                                when it renders the first item starts at 1  */}
                {props.id + 1}.
                <a href={`${ props.URL}`} target="_blank"> <span className = "ResultInfo TitleInfo">{props.Title}</span> </a> {/* combined the title and the url */}
                                            {/* target =_blank allows the user to open the link in a new tab, but React does not like this, need to find a safer way in the future */}
                <br></br>  {/* all other rendered info will be on a line below hthe title */}

                <div className=" ExtraInfo">
                                                                                            
                            <span className = "ResultDescriptor Author">Author</span>    
                            <span className = "ResultInfo AuthorInfo">{props.Author}</span>

                        &nbsp; <span className = "ResultDescriptor Comments">Comments</span>
                            <span className = "ResultInfo CommentsInfo">({props.Comments})</span>

                        &nbsp; <span className = "ResultDescriptor Points" >Points</span>
                            <span className = "ResultInfo PointsInfo">({props.Points})</span> 
                                                                                            {/* I use <span></span> a lot for lack of a better ay to styleize certain words, 
                                                                                            for example the word author being shorter and a differnt color than te actual 
                                                                                            authors name it i sitting next to on the page */}
                </div>
            </dt>      

            <br></br> {/* another line break between results since this component is being mapped over and used 20 times */}
        </div>
    );
 }

 export default SearchResults;
