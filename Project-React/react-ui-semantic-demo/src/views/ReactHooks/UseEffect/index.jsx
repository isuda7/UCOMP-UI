import React, {Component} from 'react';
import {Container} from "semantic-ui-react";
import {ContentHead, ContentBody} from './components';
import './style.css';

class ReactHooksUseEffect extends Component {
    render() {
        return (
            <Container role="main" as={'main'}>
                <ContentHead />
                <ContentBody />
            </Container>
        )
    }
}
export default ReactHooksUseEffect