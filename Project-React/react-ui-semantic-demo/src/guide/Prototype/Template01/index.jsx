import React, {Component} from 'react';
import {Container} from "semantic-ui-react";
import {ContentHead, ContentBody} from './components';
import './style.css';

class Template01 extends Component {
    render() {
        return (
            <Container role="main" as={'main'}>
                <ContentHead />
                <ContentBody />
            </Container>
        )
    }
}
export default Template01