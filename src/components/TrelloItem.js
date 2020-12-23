import React from 'react';
import MyContent from './MyContent';

function TrelloItem (props){

    function deletes() {
        let arr=JSON.parse(localStorage.getItem(props.stor))
        arr.splice(props.id,1)
        localStorage.setItem(props.stor,JSON.stringify(arr))
    }

    return (
        <div className="todo-item">
            <form>
                <p >{props.item}</p>
                <button onClick={()=>deletes()}>X</button>
            </form>
        </div>
    );
}

export default TrelloItem;