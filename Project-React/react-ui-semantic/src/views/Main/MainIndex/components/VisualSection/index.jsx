import React, {Component} from 'react';
import {Header} from "semantic-ui-react";

class VisualSection extends Component {
    render() {
        return (
            <section className='section visual' aria-labelledby='VisualSectionTitle'>
                <div className='section-header'>
                    <Header as={'h2'} id="VisualSectionTitle">Heading2</Header>
                </div>
                <div className='section-body'>
                    Visual Section
                </div>
            </section>
        )
    }
}

export default VisualSection