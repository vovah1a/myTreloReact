import React from 'react';
import TrelloList from "./TrelloList"


function MyContent () {
    return (
        <div>
            <TrelloList/>
            <form onSubmit={()=>{localStorage.clear()}}>
                <button onClick={ ()=>{localStorage.clear('list')}}>Очистить всё</button>
            </form> 
        </div>
    )
}

export default MyContent;