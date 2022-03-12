import React, {useState} from 'react';
import {Context1} from './components';
import {DemoContext} from './context/'
import '../style.css';

const ReactHooksUseContext = () => {
    const [isDark, setIsDark] = useState(false);
    return (
        <main role='main' className='container hooks-container'>
            <div className='content-head'>
                <h2>useContext</h2>
                <p>props는 단계적으로 전달하고, context로 전역으로 전달한다.</p>
                <p>Context를 사용하면 컴포넌트를 재사용하기 어려워 질 수 있다.</p>
            </div>
            <div className='content-body'>
                <section className='sec' aria-labelledby='Section01'>
                    <div className='sec-head'>
                        <h3 id="Section01"></h3>
                    </div>
                    <div className='sec-body'>
                        <DemoContext.Provider value={({isDark, setIsDark})}>
                            <Context1 />
                        </DemoContext.Provider>
                        <dl className='desc'>
                            <dt>요약</dt>
                            <dd>1. 공통파일: createContext 파일 생성(js)</dd>
                            <dd>2. 상위구조: useState 선언 및 변수전달</dd>
                            <dd>3. 하위구조: useContext 변수가져오기 및 적용</dd>
                        </dl>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default ReactHooksUseContext