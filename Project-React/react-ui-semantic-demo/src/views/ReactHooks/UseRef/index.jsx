import React, {Component} from 'react';
import {Render1, Render2, Render3, Render4} from './components';
import '../style.css';

class ReactHooksUseRef extends Component {
    render() {
        return (
            <main role='main' className='container hooks-container'>
                <div className='content-head'>
                    <h2>useRef</h2>
                    <p><code>const count = useRef(초기값)</code></p>
                    <p><code>count.current = (변경값)</code></p>
                    <p>랜더링 되지 않고 변수를 변경함.</p>
                </div>
                <div className='content-body'>
                    <section className='sec' aria-labelledby='Section01'>
                        <div className='sec-head'>
                            <h3 id="Section01">공통요약</h3>
                        </div>
                        <div className='sec-body'>
                            <p>1. useState는 렌더링을 한다.</p>
                            <p>2. useRef는 값만 저장되고, 렌더링시 적용 된다.</p>
                            <p>3. let은 값을 저장하지만, 랜더링시 초기화 된다.</p>
                            <p>4. useEffect안에서 State변경은 주의한다.</p>
                        </div>
                    </section>
                    <section className='sec' aria-labelledby='Section01'>
                        <div className='sec-head'>
                            <h3 id="Section01">useState, useRef</h3>
                        </div>
                        <div className='sec-body'>
                            <Render1 />
                        </div>
                    </section>
                    <section className='sec' aria-labelledby='Section02'>
                        <div className='sec-head'>
                            <h3 id="Section02">useRef, Let</h3>
                        </div>
                        <div className='sec-body'>
                            <Render2 />
                        </div>
                    </section>
                    <section className='sec' aria-labelledby='Section03'>
                        <div className='sec-head'>
                            <h3 id="Section03">useRef, useEffect</h3>
                        </div>
                        <div className='sec-body'>
                            <Render3 />
                        </div>
                    </section>
                    <section className='sec' aria-labelledby='Section04'>
                        <div className='sec-head'>
                            <h3 id="Section04">Focus</h3>
                        </div>
                        <div className='sec-body'>
                            <Render4 />
                        </div>
                    </section>
                    {/* <section className='sec' aria-labelledby='Section05'>
                        <div className='sec-head'>
                            <h3 id="Section05">useRef, useEffect</h3>
                        </div>
                        <div className='sec-body'>
                            <Render5 />
                        </div>
                    </section> */}
                </div>
            </main>
        )
    }
}
export default ReactHooksUseRef