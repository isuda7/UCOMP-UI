import React, {Component} from 'react'
import {Label} from "semantic-ui-react";

class LabelPage extends Component {
    render() {
        return (
            <section id="labelSec">
                <h2 className="g-h2">Labels</h2>
                <div className="preview" style={{overflow: 'visible'}}>
                    <Label>Label</Label>
                </div>
            </section>
        )
    }
}

export default LabelPage
