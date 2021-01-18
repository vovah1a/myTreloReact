import React from 'react';

function TrelloItem (props){
    return (
        <div className="todo-item">
            <form >
                <button className="delete-item" onClick={()=>props.deletes(props.id)}>X</button>
                <p >{props.item}</p>
            </form>
        </div>
    );
}

export default TrelloItem;