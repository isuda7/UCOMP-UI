import React, {Component} from 'react';
import {Memo1, Memo2} from './components';
import '../style.css';

class ReactHooksUseMemo extends Component {
    render() {
        return (
            <main role='main' className='container hooks-container'>
                <div className='content-head'>
                    <h2>useMemo</h2>
                    <p><code>useMemo(() =&gt; &#123; return 실행 &#125;, [value])</code></p>
                    <p>value값이 변경될때 실행</p>
                </div>
                <div className='content-body'>
                    <section className='sec' aria-labelledby='Section01'>
                        <div className='sec-head'>
                            <h3 id="Section01">계산기</h3>
                        </div>
                        <div className='sec-body'>
                            <Memo1 />
                            <dl className='desc'>
                                <dt>요약</dt>
                                <dd>1. 의존값이 변경될 경우만 함수 실행</dd>
                            </dl>
                        </div>
                    </section>
                    <section className='sec' aria-labelledby='Section02'>
                        <div className='sec-head'>
                            <h3 id="Section02">질문</h3>
                        </div>
                        <div className='sec-body'>
                            <Memo2 />
                            <dl className='desc'>
                                <dt>요약</dt>
                                <dd>1. Object 값은 랜더링시 변경된 것으로 인지</dd>
                                <dd>2. Object 의존성 값이 바뀔때 실행되게 적용</dd>
                            </dl>
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}
export default ReactHooksUseMemo