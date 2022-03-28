import React, {Component} from 'react';
import { MainHeader, MainFooter } from '../../../layouts/components';
import { Section01, Section02 } from './components';
import './style.scss';

class TempMain extends Component {
    render() {
        return (
            <div className='main_wrapper'>
                <MainHeader main title='신사임당' />
                <main role='main' className='container'>
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
export default TempMain
