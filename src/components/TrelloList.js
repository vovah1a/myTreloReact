import React, {useState } from 'react';
import TrelloItem from "./TrelloItem"

function TrelloList(props) {
    const itemName= props.id.toString()
    let newItem
    let nam=0
    if(JSON.parse(localStorage.getItem(itemName) === null)) {
        localStorage.setItem(itemName,JSON.stringify([]))
    }
    const [listDate, setState] = useState(JSON.parse(localStorage.getItem(itemName)))
    
    function updateItem() {
        setState(prev => {
            return [...prev, newItem]
        })
    }

    function setChenge (event){
        newItem=event.target.value        
    }

    function handleClick(e) {
        e.preventDefault();
        updateItem()
    }
    

    localStorage.setItem(itemName,JSON.stringify(listDate))
    let todoItems = listDate.map(item => <TrelloItem key={nam++} item={item} id={nam} stor={itemName}/>);
    return (
        <div>
            <h1>{props.item}</h1>
            <form onSubmit={handleClick}>
                <input type="text" name="todo"  onChange={setChenge} placeholder="New task"/>  
            
                <button type="button" onClick={ e=>updateItem(e)}>
                    Добавить
                </button>   
            </form>
            
            {todoItems} 
            <form onSubmit={()=>{localStorage.removeItem(itemName)}}>
                <button onClick={ ()=>{ localStorage.removeItem(itemName)}}>Очистить лист</button>
            </form> 
        </div>
    )
}

export default TrelloList;