import React from "react";

class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }
    render() {
        const increment = () => this.setState({ count: this.state.count + 1 });
        const decrement = () => this.setState({ count: this.state.count - 1 });
        return (
            <div>
                <h1>Counter</h1>
                <p>current count: {this.state.count}</p>
                <button onClick={increment}>plus</button>
                <button onClick={decrement}>minus</button>
            </div>
        )
    }
}

export default Counter