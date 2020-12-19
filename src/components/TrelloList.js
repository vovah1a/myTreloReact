import React, {useState } from 'react';
import TrelloItem from "./TrelloItem"

function TrelloList() {
    let newItem
    let nam=0
    if(JSON.parse(localStorage.getItem('list') === null)) {
        localStorage.setItem('list',JSON.stringify(['Создайте таски']))
    }
    const [listDate, setState] = useState(JSON.parse(localStorage.getItem('list')))
    
    function updateItem() {
        setState(prev => {
            return [...prev, newItem]
        })
    }

    function setChenge (event){
        newItem=event.target.value        
    }

    localStorage.setItem('list',JSON.stringify(listDate))
    let todoItems = listDate.map(item => <TrelloItem key={nam++} item={item}/>);
    return (
        <div>
            <form onSubmit={updateItem}>
                <input type="text" name="todo"  onChange={setChenge} placeholder="New task"/>  
            
                <button type="button" onClick={ e=>updateItem(e)}>
                    Добавить
                </button>   
            </form>
            
            {todoItems} 
        </div>
    )
}

export default TrelloList;