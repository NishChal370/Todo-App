import React, { Component } from 'react'
import Table from './Table'

class MainFrame extends Component {
    render() {
        return (
            <>
            <div>
                <h1>To-do List</h1>
                <Table
                    key='t'
                    data ={this.props.fetchDate}
                />
            </div>
            </>
            
        )
    }
}

export default MainFrame