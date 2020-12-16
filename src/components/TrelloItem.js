import React, { useState, useEffect  } from 'react';

function TrelloItem (props){

    return (
        <div className="todo-item">
            <p >{props.id}: {props.item}</p>
        </div>
    );
}

export default TrelloItem;