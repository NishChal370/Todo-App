import React, { Component } from 'react'
import { FaTimes, FaCheck } from "react-icons/fa";

class Table extends Component {
    render() {
        const theadArray = ['Id', 'User Id', 'Title', 'Status'];
        const Head = theadArray.map((items, index)=>{
            const ky = (index+"th");
            return <th scope="col" key={ky}>{items}</th>
        });
        const Row = this.props.data.map((items)=>{
            const icon = (items.completed) ? <FaCheck/> : <FaTimes/>
            return(
                <tr key={items.id}>
                    <th scope="row" >{items.id}</th>
                    <td>{items.userId}</td>
                    <td >{items.title}</td>
                    <td >{icon}</td>
                </tr>
            );
        });
        return (
            <div>
               <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            {Head}
                        </tr>
                    </thead>
                    <tbody>
                        {Row}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Table