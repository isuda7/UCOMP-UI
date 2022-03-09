import React, {useState} from 'react';
import { Button } from "semantic-ui-react";
import {Count, Timer} from './components';
import '../style.css';

const ReactHooksUseEffect = () => {
    const [showTimer, setShowTimer] = useState(false);
    const handleToggle = () => {
        setShowTimer(!showTimer);
    }
    return (
        <main role='main' className='container hooks-container'>
            <div className='content-head'>
                <h2>useEffect</h2>
                <p><code>useEffect(() =&gt; &#123; //실행문 &#125;);</code></p>
                <p><code>useEffect(() =&gt; &#123; //실행문 &#125;, [value]);</code></p>
                <p>페이지 첫 렌더링시 실행, value 값이 바뀔때 실행</p>
            </div>
            <div className='content-body'>
                <section className='sec' aria-labelledby='Section01'>
                    <div className='sec-head'>
                        <h3 id="Section01">Count</h3>
                    </div>
                    <div className='sec-body'>
                        <Count />
                        <dl className='desc'>
                            <dt>요약</dt>
                            <dd>1. 카운트가 바뀔때마다 조건부 실행</dd>
                        </dl>
                    </div>
                </section>

                <section className='sec' aria-labelledby='Section02'>
                    <div className='sec-head'>
                        <h3 id="Section02">Timer</h3>
                    </div>
                    <div className='sec-body'>
                        <div className='timer-area'>
                            { showTimer && <Timer />}
                            <Button className='primary' onClick={handleToggle}>Toggle Timer</Button>
                        </div>
                        <dl className='desc'>
                            <dt>요약</dt>
                            <dd>1. 화면이 Mount 되면 실행</dd>
                            <dd>2. 화면이 unMount 되면 마무리 실행</dd>
                        </dl>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default ReactHooksUseEffect