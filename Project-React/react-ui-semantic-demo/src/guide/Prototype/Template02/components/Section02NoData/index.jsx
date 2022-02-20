import React, {Component} from 'react';
import {Header} from "semantic-ui-react";

class Section02NoData extends Component {
    render() {
        return (
            <section className='section 이름' aria-labelledby='Section02Title'>
                <div className='section-header'>
                    <Header as={'h2'} id="Section02Title">Heading2</Header>
                </div>
                <div className='section-body'>
                    <p>Template02 Section 02 Area - Case NoData</p>
                </div>
            </section>
        )
    }
}

export default Section02NoData