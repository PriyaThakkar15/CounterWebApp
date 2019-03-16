import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    Increment = () => {
        this.setState({count: this.state.count + 1});
    }
    Decrement = () => {
        this.setState({count: this.state.count - 1});
    }
    Reset = () => {
        this.setState({
            count: 0
        });
}

render()
{
    return (
        <div>
            <span style={{fontSize: 25}} className='badge badge-warning'>{this.state.count}</span>
            <button className='btn btn-success m-2' onClick={this.Increment}>INCREMENT</button>
            <button className='btn btn-dark m-2' disabled={!this.state.count} onClick={this.Reset}>RESET</button>
            <button className='btn btn-danger m-2' disabled={!this.state.count}  onClick={this.Decrement}>DECREMENT</button>
        </div>
    );
}
}

export default App;