import React from 'react';
import {Container} from "semantic-ui-react";
import {VisualSection} from './components';
import './style.css';

const MainIndex = () => (
    <Container as={'main'}>
        <div className='content'>
            <VisualSection/>
        </div>
    </Container>
);
export default MainIndex
