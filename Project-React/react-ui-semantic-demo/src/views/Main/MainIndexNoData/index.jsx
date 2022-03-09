import React, {Component} from 'react';
import {VisualSection} from './components';
import './style.css';

class MainIndex extends Component {
    render() {
        return (
            <main role='main' className='container'>
                <div className='content'>
                    <VisualSection/>
                </div>
            </main>
        )
    }
}
export default MainIndex
