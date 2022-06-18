import React from 'react';

class LifeCycle extends React.Component{

    constructor(props){
        super(props);
        this.state = {date: new Date()}
        console.log('1. LifeCycle constructor!')
    }

    //Lifecycle methods
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
        console.log('3. LifeCycle componentDidMount!')
    }

    //Lifecycle methods
    componentWillUnmount(){
        clearInterval(this.timerID);
        console.log('5. LifeCycle componentWillUnmount')
    }

    tick() {
        this.setState({
          date: new Date()
        });
        console.log('4. LifeCycle tick!')
      }

    render(){
        console.log('2. LifeCycle render!')
        return(<li>React LifeCycle. It is {this.state.date.toLocaleTimeString()} and ticking</li>);
    }

}

export default LifeCycle;