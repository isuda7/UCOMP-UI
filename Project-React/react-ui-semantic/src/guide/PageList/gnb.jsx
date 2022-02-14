import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class Gnb extends Component {
    render() {
        return (
            <nav className='gnb'>
                <Link to="/" className='ui button primary'>Index</Link>
                <Link to="/guide/PageList/indexGuide" className='ui button primary'>Guide</Link>
            </nav>
        )
    }
}
export default Gnb
