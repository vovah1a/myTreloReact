import React from 'react';
import TrelloItem from "./TrelloItem"

class TrelloList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            
            lists: listDate=[
                {
                    id: 1,
                    task: "1",
                    completed: false
                },
                {
                    id: 2,
                    task: "22",
                    completed: false
                },
                {
                    id: 3,
                    task: "333",
                    completed: false
                },
            ]
        };
    
        this.handleChange = this.handleChange.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.lists.map(list => {
                if (list.id === id) {
                  return {
                      ...list,
                      completed: !list.completed,
                  }
                }
                return list
            })
            return {
                lists: updatedTodos
            }
        })
    }
    
      /*handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        this.setState({
            
            list:{
                task: event.target.task = this.state.value,
                id: ++event.target.id
            }
        })
        console.log(this.state.list.id)
        event.preventDefault();
      }*/
    
      render() {
        const todoItems = this.state.lists.map(item => <TrelloItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return (
            <main >
                {todoItems}
            </main >
        );
      }
}

export default TrelloList;