import React from 'react';

function TrelloItem (props){
    return (
        <div className="todo-item">
            <form>
                <p >{props.item}</p>
                <button onClick={()=>props.deletes(props.id)}>X</button>
            </form>
        </div>
    );
}

export default TrelloItem;