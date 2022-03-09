import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import {ContentHead, ContentBody} from './components';
import './style.css';

class MainIndex extends Component {
    render() {
        return (
            <main role='main' className='container'>
                {/* <ContentHead /> */}
                {/* <ContentBody /> */}

                <p><Link to='/ReactHooks/UseState' target='reactFrame'>UseState</Link></p>
                <p><Link to='/ReactHooks/UseEffect' target='reactFrame'>UseEffect</Link></p>
                <p><Link to='/ReactHooks/UseContext' target='reactFrame'>UseContext</Link></p>
                <p><Link to='/ReactHooks/UseReducer' target='reactFrame'>UseReducer</Link></p>
                <p><Link to='/ReactHooks/UseMemo' target='reactFrame'>UseMemo</Link></p>
                <p><Link to='/ReactHooks/UseCallback' target='reactFrame'>UseCallback</Link></p>
                <p><Link to='/ReactHooks/UseRef' target='reactFrame'>UseRef</Link></p>
                <p><Link to='/ReactHooks/UseInputs' target='reactFrame'>UseInputs</Link></p>
                <p><Link to='/ReactHooks/UsePromise' target='reactFrame'>UsePromise</Link></p>
            </main>
        )
    }
}
export default MainIndex
