import React, {Component} from 'react'
import {Button} from "semantic-ui-react";

class ButtonPage extends Component {
    render() {
        return (
            <section id="buttonSec">
                <h2 className="g-h2">Buttons</h2>
                <div className="preview" style={{overflow: 'visible'}}>
                    <Button type='button'>Button</Button>
                    <Button type='button' className='primary'>Button</Button>
                    <Button type='button' className='secondary'>Button</Button>
                </div>
            </section>
        )
    }
}

export default ButtonPage
