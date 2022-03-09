import React, {Component} from 'react';
import {ContentHead, ContentBody} from './components';
import '../style.css';

class ReactHooksUsePromise extends Component {
    render() {
        return (
            <main role='main' className='container hooks-container'>
                <ContentHead />
                <ContentBody />
            </main>
        )
    }
}
export default ReactHooksUsePromise