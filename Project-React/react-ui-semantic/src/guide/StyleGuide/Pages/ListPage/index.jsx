import React, {Component} from 'react'
import {List} from "semantic-ui-react";

class ListPage extends Component {
    render() {
        return (
            <section className='g_sec'>
                <h2 className='g_h2'>Bullets</h2>
                <h3 className='g_h3'>demo title</h3>
                <div className='preview'>
                <List bulleted>
                    <List.Item>Gaining Access</List.Item>
                    <List.Item>Inviting Friends</List.Item>
                    <List.Item>
                    Benefits
                    <List.List>
                        <List.Item href='#'>Link to somewhere</List.Item>
                        <List.Item>Rebates</List.Item>
                        <List.Item>Discounts</List.Item>
                    </List.List>
                    </List.Item>
                    <List.Item>Warranty</List.Item>
                </List>
                </div>
                <h3 className='g_h3'>demo title</h3>
                <div className='preview'>
                    Bullets Guide
                </div>

                <h2 className='g_h2'>Group</h2>
                <div className='preview'>
                    Custom UI
                </div>
            </section>
        )
    }
}

export default ListPage
