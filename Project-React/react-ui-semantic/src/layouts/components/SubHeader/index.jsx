import React from 'react';
import { Popup, Button } from 'semantic-ui-react';
import './style.scss'
// className: bg_black bg_white bg_opacity 등 사용자정의 클래스

// addBack: 뒤로가기 버튼
// addClose: 닫기 버튼
// addLearning: 복사 버튼
// addWish: 북마크 버튼
// addList: 학습목록 버튼
// addMore: 더보기 버튼

// title="": 제목이 있는 경우
// children: 모든 자식요소 (변경되는 요소들 하드코딩)
const SubHeader = (props) => {
	return (
		<header className={'header' + ((typeof props.className === 'string') && ' ' + props.className)}>
			<div className='header_left'>
				{props.addClose && <Button type='button'><span className='_blind'>닫기</span></Button>}
				{props.addBack && <Button type='button'><span className='_blind'>뒤로가기</span></Button>}
				{(typeof props.title === 'string') && <h1>{props.title}</h1>}
			</div>
			<div className='header_right'>
				{props.addLearning && <Button type='button'><span className='_blind'>학습현황</span></Button>}
				{props.addWish && <Button type='button'><span className='_blind'>찜하기</span></Button>}
				{props.addList && <Button type='button'><span className='_blind'>학습목록</span></Button>}
				{props.addAlrim &&
					<Popup on='click' trigger={<Button type='button'><span className='_blind'>알림</span></Button>}>
						<Popup.Content>
							<p>Popup Content</p>
						</Popup.Content>
					</Popup>
				}
				{props.addSrch && <Button type='button'><span className='_blind'>검색</span></Button>}
				{props.addMore &&
					<Popup on='click' trigger={<Button type='button'><span className='_blind'>더보기</span></Button>}>
						<Popup.Content>
							<p>Popup Content</p>
						</Popup.Content>
					</Popup>
				}
			</div>
		</header>
	)
}
export default SubHeader