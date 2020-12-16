import React, {useState } from 'react';
import TrelloItem from "./TrelloItem"

function TrelloList() {
    let newItem
    const [listDate, setState] = useState([{
        id: 1,
        task: 'Создайте новые таски'
    }])

    function updateItem() {
        setState(prev => {
            return [...prev,
            {
                id: listDate.length+1,
                task: newItem
            }]
        })
    }

    function setChenge (event){
        newItem=event.target.value        
    }

    let todoItems = listDate.map(item => <TrelloItem key={item.id} id={item.id} item={item.task}/>);
    return (
        <div>
            <input type="text" name="todo" value={newItem} onChange={setChenge}/>  
            <button onClick={updateItem}>
                Добавить
            </button>       
            {todoItems}
        </div>
    )
}

export default TrelloList;