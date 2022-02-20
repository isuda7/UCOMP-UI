import React, {Component} from 'react';
import './style.css';

class Section02 extends Component {
    render() {
        return (
            <section className='sec' aria-labelledby='Section02'>
                <div className='sec-head'>
                    <h2 id="Section02">Heading2</h2>
                </div>
                <div className='sec-body'>
                    Section02
                </div>
            </section>
        )
    }
}

export default Section02