import React, {Component} from 'react'
import {Tab} from "semantic-ui-react";

const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]
class TabPage extends Component {
    render() {
        return (
            <section id="tabSec">
                <h2 className="g-h2">Tabs</h2>
                <div className="preview" style={{overflow: 'visible'}}>
                    <Tab panes={panes} />
                </div>
            </section>
        )
    }
}

export default TabPage
