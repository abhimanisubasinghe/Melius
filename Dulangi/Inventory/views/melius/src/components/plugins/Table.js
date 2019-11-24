import React, { Component } from 'react'

export class Table extends Component {
    render() {
        return (
            <div className="jumbotron" style={jumboStyle}> 
                <table class="table table-hover" style={tbl}>
                    <thead>
                        <tr class="table-default" style={rowStyle}>
                        <th scope="col">Type</th>
                        <th scope="col">Column heading</th>
                        <th scope="col">Column heading</th>
                        <th scope="col">Column heading</th>
                        </tr>
                    </thead>
                    <tr class="table-primary">
                        <th scope="row">Primary</th>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Table

const jumboStyle = {
    backgroundColor: 'transparent',
    padding: "100px 10px",
   
    
}

const tbl = {
    right: '0'
}

const rowStyle = {
    backgroundColor: 'white'
}