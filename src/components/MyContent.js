import React, {useState } from 'react';
import TrelloList from "./TrelloList"


function MyContent () {
    let newTrelo
    let nam=0
    if(JSON.parse(localStorage.getItem('lists') === null)) {
        localStorage.setItem('lists',JSON.stringify([]))
    }
    const [treloDate, setStateTrelo]=useState(JSON.parse(localStorage.getItem('lists')))

    function updateTrelo() {
        setStateTrelo(prev => {
            return [...prev, newTrelo]
        })
    }

    function setChenge (event){
        newTrelo=event.target.value        
    }

    function handleClick(e) {
        e.preventDefault();
        updateTrelo()
    }

    localStorage.setItem('lists',JSON.stringify(treloDate))
    let todoTrelo = treloDate.map(item => <TrelloList key={nam++} id={nam} item={item}/>);
    return (
        <div>
            <form onSubmit={handleClick} >
                <input type="text" name="todo"  onChange={setChenge} placeholder="New list"/>  
            
                <button type="button" onClick={ e=>updateTrelo(e)}>
                    Добавить
                </button>   
            </form>
            <form onSubmit={()=>{localStorage.clear()}}>
                <button onClick={ ()=>{localStorage.clear()}}>Очистить всё</button>
            </form> 
            <div>
                {todoTrelo}
            </div>
        </div>
    )
}

export default MyContent;