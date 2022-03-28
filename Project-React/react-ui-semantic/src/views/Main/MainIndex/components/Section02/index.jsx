import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Section02 extends Component {
    render() {
        return (
            <section className='sec learning_sec in_sec'>
                <div className='sec_head'>
                    <h2 className='sec_tit'>나의 학습 현황</h2>
                    <Link to=''>전체보기</Link>
                </div>
                <div className='sec_body'>
                    <p>Section Area</p>
                    <p>Section Area</p>
                    <p>Section Area</p>
                </div>
            </section>
        )
    }
}

export default Section02