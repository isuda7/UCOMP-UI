import React, {Component} from 'react';
import {ContentHead, ContentBody} from './components';
import './style.css';

class Sample extends Component {
    render() {
        return (
            <main role="main" as={'main'} className='container'>
                <ContentHead />
                <ContentBody />
            </main>
        )
    }
}
export default Sample