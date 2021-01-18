import React, {useState, useRef} from 'react';
import TrelloItem from "./TrelloItem"

function TrelloList(props) {
    const itemName= props.id.toString()
    const newItem = useRef(null);
    let nam=0
    if(JSON.parse(localStorage.getItem(itemName) === null)) {
        localStorage.setItem(itemName,JSON.stringify([]))
    }
    const [listDate, setState] = useState(JSON.parse(localStorage.getItem(itemName)))

    const onButtonClick = () => {
        if(newItem.current.value != ""){
            setState(prev => {
                return [...prev, newItem.current.value]
            })
        }
        else alert(`Нельзя создать такой таск!!! `)
    }
    
    function deletes (id){
        listDate.splice(id,1)
        localStorage.setItem(itemName,JSON.stringify(listDate))
    }
    

    localStorage.setItem(itemName,JSON.stringify(listDate))
    let todoItems = listDate.map(item => <TrelloItem key={nam++} item={item} id={nam} deletes={deletes}/>);
    return (
        <div className="doList">
            <h1>{props.item}</h1>
            <form onClick={(e)=> e.preventDefault()}>
                <input ref={newItem} type="text" placeholder="New task"/>
                <button onClick={onButtonClick}>Добавить</button>
            </form>
            
            {todoItems} 
            <form onClick={()=>{props.deletes(itemName)}}>
                <button>Удалить лист</button>
            </form>
            
        </div>
    )
}

export default TrelloList;