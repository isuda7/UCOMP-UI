import React, {Component} from 'react';
// import {ContentHead, ContentBody} from './components';
import './style.css';

class Template01 extends Component {
    render() {
        return (
            <main role='main' className='container'>
                <div className='content-head'>
                    <h2>Template</h2>
                </div>
                <div className='content-body'>
                    <section className='sec' aria-labelledby='Section01'>
                        <div className='sec-head'>
                            <h3 id="Section01">제목</h3>
                        </div>
                        <div className='sec-body'>
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}
export default Template01