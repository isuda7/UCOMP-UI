import React, {Component} from 'react'
import {Icon} from "semantic-ui-react";

class IconPage extends Component {
    render() {
        return (
            <section id="iconSec">
                <h2 className="g-h2">Icons</h2>
                <div className="preview" style={{overflow: 'visible'}}>
                    <Icon loading name='spinner' />
                </div>
            </section>
        )
    }
}

export default IconPage
