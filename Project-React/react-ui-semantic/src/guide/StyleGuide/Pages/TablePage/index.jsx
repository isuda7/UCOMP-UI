import React, {Component} from 'react'
import {Table} from "semantic-ui-react";

class TablePage extends Component {
    render() {
        return (
            <section className='g_sec'>
                <h2 className='g_h2'>Tables</h2>
                <div className='preview'>
                    <Table celled>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </section>
        )
    }
}

export default TablePage
