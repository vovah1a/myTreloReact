import React from 'react';
import TrelloList from "./TrelloList"


class MyContent extends React.Component {
    constructor(){
        super()
        this.state={
        }
    }


    render(){
        return (
            <div>
                <TrelloList/>
            </div>
        )
    }
}

export default MyContent;