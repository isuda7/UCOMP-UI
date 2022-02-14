import React, {Component} from 'react';
import {Section01, Section02NoData} from './components';
import './style.css';

class Template01 extends Component {
    render() {
        return (
            <>
                <Section01 />
                <Section02NoData />
            </>
        )
    }
}
export default Template01