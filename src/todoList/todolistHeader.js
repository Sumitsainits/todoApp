import React from 'react';

class Todoheader extends React.Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        localStorage.setItem('setTitle', event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({key:Math.random()})
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Please enter todo title" value={this.state.value} onChange={this.handleChange}></input>
                    <input type="Submit" value="Submit" />
                </form>               
            </div>
        );
    };
}

export default Todoheader;