import React from 'react';

class CompList extends React.Component {

    state = {}





    render() {

        let arrayList = localStorage.getItem('getListItemes') === "null" ? [] : JSON.parse(localStorage.getItem('getListItemes'))
        if (arrayList) {
            arrayList = arrayList.filter((arr) => {
                return arr.checked === true;
            })
        }
        return (
            <div>
                <h2>Completed Tasks</h2>
                <ul className="compList">
                    {arrayList.filter((arr) => {
                        return arr.checked === true;
                    }).map((task) => {
                        return <li>{task.value}</li>
                    })
                    }
                </ul>
            </div >
        )
    }
}

export default CompList;