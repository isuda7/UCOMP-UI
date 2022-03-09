import React, {Component} from 'react';
import {Render1} from './components';
import {Render2} from './components';
import {Render3} from './components';
import '../style.css';

class ReactHooksUseRef extends Component {
    render() {
        return (
            <main role='main' className='container hooks-container'>
                <div className='content-head'>
                    <h2>useRef</h2>
                    <p><code>const count = useRef(초기값)</code></p>
                    <p>랜더링 되지 않고 변수를 변경함.</p>
                </div>
                <div className='content-body'>
                    <section className='sec' aria-labelledby='Section01'>
                        <div className='sec-head'>
                            <h3 id="Section01">useState, useRef</h3>
                        </div>
                        <div className='sec-body'>
                            <Render1 />
                            <dl className='desc'>
                                <dt>요약</dt>
                                <dd>1. State는 렌더링을 한다.</dd>
                                <dd>2. Ref는 값만 저장되고, 랜더링시 값이 유지된다.</dd>
                            </dl>
                        </div>
                    </section>
                    <section className='sec' aria-labelledby='Section02'>
                        <div className='sec-head'>
                            <h3 id="Section02">useRef, Let</h3>
                        </div>
                        <div className='sec-body'>
                            <Render2 />
                            <dl className='desc'>
                                <dt>요약</dt>
                                <dd>1. Ref는 값만 저장되고, 랜더링시 값이 유지된다.</dd>
                                <dd>2. let은 값을 저장하지만, 랜더링시 초기화 된다.</dd>
                            </dl>
                        </div>
                    </section>
                    <section className='sec' aria-labelledby='Section03'>
                        <div className='sec-head'>
                            <h3 id="Section03">useRef, useEffect</h3>
                        </div>
                        <div className='sec-body'>
                            <Render3 />
                            <dl className='desc'>
                                <dt>요약</dt>
                                <dd>1. Effect는 랜더링으로 실행된다.</dd>
                                <dd>2. Effect안에서 State변경을 지양한다.</dd>
                            </dl>
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}
export default ReactHooksUseRef