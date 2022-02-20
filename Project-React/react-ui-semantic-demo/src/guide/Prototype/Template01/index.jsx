import React, {Component} from 'react';
import {Section01, Section02} from './components';
import './style.css';

class Template01 extends Component {
    render() {
        return (
            <>
                <Section01 />
                <Section02 />
            </>
        )
    }
}
export default Template01