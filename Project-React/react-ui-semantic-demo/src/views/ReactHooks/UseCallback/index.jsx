import React, {Component} from 'react';
import {Callback1, Callback2} from './components';
import '../style.css';

class ReactHooksUseCallback extends Component {
    render() {
        return (
            <main role='main' className='container hooks-container'>
                <div className='content-head'>
                    <h2>useCallback</h2>
                    <p><code>useCallback(() =&gt; &#123; return 실행 &#125;, [value])</code></p>
                    <p>value값이 변경될때 실행</p>
                </div>
                <div className='content-body'>
                    <section className='sec' aria-labelledby='Section01'>
                        <div className='sec-head'>
                            <h3 id="Section01">Callback1</h3>
                        </div>
                        <div className='sec-body'>
                            <Callback1 />
                            <dl className='desc'>
                                <dt>요약</dt>
                                <dd>1. 인풋과 버튼이 각각 반응하기</dd>
                            </dl>
                        </div>
                    </section>
                    <section className='sec' aria-labelledby='Section02'>
                        <div className='sec-head'>
                            <h3 id="Section02">Callback2</h3>
                        </div>
                        <div className='sec-body'>
                            <Callback2 />
                            <dl className='desc'>
                                <dt>요약</dt>
                                <dd>1. 박스는 change와 관계 없다.</dd>
                                <dd>2. 박스는 size에 의존하는 useCallback적용</dd>
                            </dl>
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}
export default ReactHooksUseCallback