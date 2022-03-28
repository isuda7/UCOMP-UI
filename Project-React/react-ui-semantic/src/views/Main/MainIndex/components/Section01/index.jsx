import React, {Component} from 'react';
import { MainEventSwiper } from '../../components';
import './style.scss';

class Section01 extends Component {
    render() {

        return (
            <section className='sec main_event_sec'>
                <h2 className='blind'>Heading2</h2>
                <MainEventSwiper swipeName='main_event_swiper' />
            </section>
        )
    }
}

export default Section01