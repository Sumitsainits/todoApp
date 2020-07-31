import React from 'react';

class CreateList extends React.Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        localStorage.setItem('setTitle', event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                
            </div>
        );
    };
}

export default CreateList;