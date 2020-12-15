import React, {useState, useEffect } from 'react';
import TrelloItem from "./TrelloItem"


function TrelloList() {
    let listDate=JSON.parse( sessionStorage.user )
    let newItem
    const [count, setCount] = useState(0);
    useEffect(() => {
        if(count===0){
            setCount(count + 1)
            sessionStorage.user=JSON.stringify([{
                id:0,
                task:"00000"
            }])
        }
        else{
                //listDate=JSON.parse( sessionStorage.user )
                console.log(newItem)
                listDate.push({
                    id: count,
                    task: "12123"
                })
                sessionStorage.user = JSON.stringify(listDate);
        }

      });

    let todoItems = listDate.map(item => <TrelloItem key={item.id} item={item.task}/>);
    return (
        <div>
            <input type="text" name="todo" value={newItem}/>  
            <button onClick={() => setCount(count + 1)}>
                Добавить
            </button>          
            {todoItems}
        </div>
    )
}

export default TrelloList;