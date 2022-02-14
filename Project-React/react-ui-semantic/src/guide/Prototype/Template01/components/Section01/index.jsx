import React, {Component} from 'react';
import {Header} from "semantic-ui-react";

class Section01 extends Component {
    render() {
        return (
            <section className='section 이름' aria-labelledby='Section01Title'>
                <div className='section-header'>
                    <Header as={'h2'} id="Section01Title">Heading2</Header>
                </div>
                <div className='section-body'>
                    <p>Template01 Section 01 Area</p>
                </div>
            </section>
        )
    }
}

export default Section01