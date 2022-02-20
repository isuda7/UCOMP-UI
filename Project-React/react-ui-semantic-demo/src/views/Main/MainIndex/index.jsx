import React, {Component} from 'react';
import {Container} from "semantic-ui-react";
import {VisualSection} from './components';
import './style.css';

class MainIndex extends Component {
    render() {
        return (
            <Container as={'main'}>
                <div className='content'>
                    <VisualSection/>
                </div>
            </Container>
        )
    }
}
export default MainIndex
