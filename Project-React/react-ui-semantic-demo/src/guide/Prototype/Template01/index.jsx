import React, {Component} from 'react';
import {ContentHead, ContentBody} from './components';
import './style.css';

class Template01 extends Component {
    render() {
        return (
            <main role='main' className='container'>
                <ContentHead />
                <ContentBody />
            </main>
        )
    }
}
export default Template01