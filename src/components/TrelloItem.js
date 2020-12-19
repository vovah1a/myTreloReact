import React, { useState, useEffect  } from 'react';

function TrelloItem (props){

    return (
        <div className="todo-item">
            <p >{props.item}</p>
        </div>
    );
}

export default TrelloItem;