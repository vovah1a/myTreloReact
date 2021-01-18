import React, {useState, useRef } from 'react';
import TrelloList from "./TrelloList"


function MyContent () {
    let newTrelo= useRef(null);
    if(JSON.parse(localStorage.getItem('lists') === null)) {
        localStorage.setItem('lists',JSON.stringify([]))
    }
    const [treloDate, setStateTrelo]=useState(JSON.parse(localStorage.getItem('lists')))

    function updateTrelo() {
        if(treloDate.indexOf(newTrelo.current.value) == -1) {
            if(newTrelo.current.value != ""){
                setStateTrelo(prev => {
                    return [...prev, newTrelo.current.value]
                })
            }
            else alert(`Нельзя создать такой лист!!! `)
        }   
        else  {
            alert(`Такой лист уже существует!!! \nПожалуйста, выберете другое имя. `)
        }
    }

    function deletes (id){
        localStorage.removeItem(id)
        treloDate.splice(treloDate.indexOf(id),1)
        localStorage.setItem('lists',JSON.stringify(treloDate))
    }

    localStorage.setItem('lists',JSON.stringify(treloDate))
    let todoTrelo = treloDate.map(item => <TrelloList key={item} id={item} item={item} deletes={deletes}/>);
    return (
        <div className= "list">
            <form onClick={(e)=> e.preventDefault()} >
                <input type="text" ref={newTrelo} placeholder="New list"/>  
                <button onClick={ e=>updateTrelo(e)}> Добавить</button>   
            </form>
            
            <form onClick={()=>{localStorage.clear()}}>
                <button>Удалить всё</button>
            </form>

            <div className="trelloList">
                {todoTrelo}
            </div> 
        </div>
    )
}

export default MyContent;