import React, { Component } from 'react';
import { Reducer1, Reducer2 } from './components';
import '../style.css';

class ReactHooksUseReducer extends Component {
    render() {
        return (
            <main role='main' className='container hooks-container'>
                <div className='content-head'>
                    <h2>useReducer</h2>
                </div>
                <div className='content-body'>
                    <section className='sec' aria-labelledby='Section01'>
                        <div className='sec-head'>
                            <h3 id="Section01">Reducer1</h3>
                        </div>
                        <div className='sec-body'>
                            <Reducer1 />
                        </div>
                    </section>
                    <section className='sec' aria-labelledby='Section01'>
                        <div className='sec-head'>
                            <h3 id="Section01">Reducer2</h3>
                        </div>
                        <div className='sec-body'>
                            <Reducer2 />
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}
export default ReactHooksUseReducer