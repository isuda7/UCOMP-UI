import React, {Component} from 'react';
import { MainHeader, MainFooter } from '../../../layouts/components';
import { Section01, Section02 } from './components';
import './style.css';

class TempSubmain extends Component {
    render() {
        return (
            <div className='sub_wrapper main'>
                <MainHeader submain title='추천' />
                <main role="main" className='container'>
                    <div className='content_body'>
                        <Section01 />
                        <Section02 />
                    </div>
                </main>
                <MainFooter />
            </div>
        )
    }
}
export default TempSubmain