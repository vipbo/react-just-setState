import React from 'react';
import './T.css'


class Tcomponent extends React.Component {

    state = {
        num: 0
    }

    update = () => {
        return (preState) => {
            return {
                num: preState.num + 1
            }
        }
    }
    addNum = () => {
        // this.setState({
        //     num: this.state.num + 1
        // })
        // this.setState({
        //     num: this.state.num + 1
        // })
        // this.setState({
        //     num: this.state.num + 1
        // })
        // this.setState((preState) => ({
        //     num: preState.num + 1
        // }))
        // this.setState((preState) => ({
        //     num: preState.num + 1
        // }))
        // this.setState((preState) => ({
        //     num: preState.num + 1
        // }))
        this.setState(this.update())
        this.setState(this.update())
        this.setState(this.update())
    }


    render() {
        return (
            <div className="box">
                <h3>{this.state.num}</h3>

                <button onClick={this.addNum}> 增加 </button>
            </div>
        );
    }
}

export default Tcomponent;