import React, {Component} from 'react'
import { Sample1, Sample2, Sample3, Sample4 } from './components';
import './style.css';

class SwipePage extends Component {
    render() {
        return (
            <section className='g_sec'>
                <h2 className='g_h2'>Swipes</h2>
                <h3 className='g_h3'>Guides</h3>
                <p>- API OPTIONS: <a href='https://react-id-swiper.ashernguyen.site/' target='_blank' rel='noopener noreferrer'>react-id-swiper 바로가기</a></p>
                <p>- 독립적입 컴포넌트로 분리하며 클래스명을 전달한다.</p>
                <p>- className='swiper [이름]_swiper' 로 시작한다.</p>
                <p>- navigation, pagination 위치는 .swiper 자식이다.</p>
                
                <h3 className='g_h3'>Samples</h3>
                <div className='preview'>
                    <Sample1 swipeName='sample1_swiper' />
                </div>
                <div className='preview'>
                    <Sample2 swipeName='sample2_swiper' />
                </div>
                <div className='preview'>
                    <Sample3 swipeName='sample3_swiper' />
                </div>
                <div className='preview'>
                    <Sample4 swipeName='sample4_swiper' />
                </div>
            </section>
        )
    }
}

export default SwipePage
