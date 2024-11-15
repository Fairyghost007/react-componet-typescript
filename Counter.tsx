import React, { Component } from 'react';

interface CounterProps { }
interface CounterState {
    count: number;
}

class Counter extends Component<CounterProps, CounterState> {
    //prend ;e type CounterState qui est un objet qui contient une propriete count qui est de type number
    state: CounterState = {
      count: 0
    };
    
    //donne un type de retour a la fonction
    increment = (): void => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
        </div>
      );
    }
  }
export default Counter;