import React, {Component} from 'react';
import {Count, Upload} from './components';
import '../style.css';

class ReactHooksUseState extends Component {
    render() {
        return (
            <main role='main' className='container hooks-container'>
                <div className='content-head'>
                    <h2>useState</h2>
                    <p><code>const [state, setState] = useState(초기값)</code></p>
                    <p>state값을 setState를 통해서 변경함</p>
                </div>
                <div className='content-body'>
                    <section className='sec' aria-labelledby='Section01'>
                        <div className='sec-head'>
                            <h3 id="Section01">Time Count</h3>
                        </div>
                        <div className='sec-body'>
                            <Count />
                            <dl className='desc'>
                                <dt>요약</dt>
                                <dd>1. 기본값에 클릭할때마다 값을 더해준다.</dd>
                                <dd>2. 조건식으로 데이터 초기화 하기</dd>
                            </dl>
                        </div>
                    </section>

                    <section className='sec' aria-labelledby='Section02'>
                        <div className='sec-head'>
                            <h3 id="Section02">Item Upload</h3>
                        </div>
                        <div className='sec-body'>
                            <Upload />
                            <dl className='desc'>
                                <dt>요약</dt>
                                <dd>1. 입력할때마다 값을 저장하고</dd>
                                <dd>2. 업로드하면 목록의 '이전 데이터'에 '입력 데이터'를 배열로 추가하여 저장한다.</dd>
                            </dl>
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}
export default ReactHooksUseState