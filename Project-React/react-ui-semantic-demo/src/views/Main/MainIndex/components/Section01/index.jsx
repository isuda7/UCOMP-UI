import React, {Component} from 'react';
import './style.css';

class Section01 extends Component {
    render() {
        return (
            <section className='sec' aria-labelledby='Section01'>
                <div className='sec-head'>
                    <h3 id="Section01">Heading3</h3>
                </div>
                <div className='sec-body'>
                    Section01
                </div>
            </section>
        )
    }
}

export default Section01