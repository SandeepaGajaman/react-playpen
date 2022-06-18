import React from 'react';

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }
    render(){
        return<li>State change. State changed to {this.state.date.toLocaleTimeString()}</li>;
    }
}

export default Clock;