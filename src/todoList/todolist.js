import React from 'react';
import CompList from './compList';

class TodoList extends React.Component {

    state = {
        value: '',
        key: ''
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }


    statusChange = (id) => {
        let arrayList = localStorage.getItem('getListItemes') === "null" ? [] : JSON.parse(localStorage.getItem('getListItemes'))
        if (arrayList) {
            let x = arrayList.map((arr)=>{return arr.id}).indexOf(id)

            if(x>=0){
                arrayList[x].checked = !arrayList[x].checked;
                localStorage.setItem('getListItemes',JSON.stringify(arrayList))
            }
            this.setState({ key: Math.random() })
        }
    }

    styleTodo = (flag) => {
        return { textDecoration: flag ? 'line-through' : "initial" }
    }

    renderTodo = () => {
        let arrayList = localStorage.getItem('getListItemes') === "null" ? [] : JSON.parse(localStorage.getItem('getListItemes'))
        if (arrayList) {
            return arrayList.map((arr, i) => {
                return (
                    <li key={i} style={this.styleTodo(arr.checked)}>
                        <input onChange={() => { this.statusChange(arr.id) }} checked={arr.checked} type="checkbox"></input>
                        {arr.value}
                        <button className="closeBtn" onClick={() => { this.removeItem(arr.id) }}>x</button>
                    </li>
                )
            })
        } else { 
            return []
        }
    }

    removeItem = (i) => {
        let arrayList = JSON.parse(localStorage.getItem("getListItemes"));
        if (arrayList) {
            arrayList = arrayList.filter((item) => {
                return item.id !== i
            });
            
            localStorage.setItem('getListItemes', JSON.stringify(arrayList));
        }
        this.setState({ key: Math.random() })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.value === "") {
            alert("Add todo cannot be empty");
            return
        }
        let temp = {
            id: "",
            value: this.state.value,
            checked: false
        }
        this.setState({ value: "" });

        let arrayList = localStorage.getItem('getListItemes') === "null" ? [] : JSON.parse(localStorage.getItem('getListItemes'))
        temp.id = arrayList.length;
        arrayList.push(temp);
        localStorage.setItem('getListItemes', JSON.stringify(arrayList))
        //renderTodo(arrayList);
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Enter some todo action" value={this.state.value} onChange={this.handleChange} ></input>
                    <input type="Submit" value="Add" onClick={this.handleSubmit} />
                </form>
                <ul className="taskList">
                    <this.renderTodo />
                </ul>
                <CompList />
            </div>
        );
    };
}

export default TodoList;