import React, {Component} from 'react';
import './style.css';

class VisualSection extends Component {
    render() {
        return (
            <section className='sec visual-sec' aria-labelledby='VisualSecTitle'>
                <div className='sec-head'>
                    <h2 id="VisualSecTitle">Heading2</h2>
                </div>
                <div className='sec-body'>
                    Visual Section
                </div>
            </section>
        )
    }
}

export default VisualSection