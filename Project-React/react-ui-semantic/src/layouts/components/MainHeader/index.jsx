import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Popup, Button, Image } from 'semantic-ui-react';
import avatar36_01 from "../../../assets/images/demo/avata-profile-36-01.svg";
import './style.scss';

// className: bg_black bg_white bg_opacity 등 사용자정의 클래스
// addBack: 뒤로가기 버튼
// addClose: 닫기 버튼
// addLearning: 복사 버튼
// addWish: 북마크 버튼
// addList: 학습목록 버튼
// addMore: 더보기 버튼

// title="": 제목이 있는 경우
// children: 모든 자식요소 (변경되는 요소들 하드코딩)
const MainHeader = (props) => {
    // const [isOpened, setIsOpened] = useState(false);
    // const handleBannerClick = () => setIsOpened(false);

	return (
        <Fragment>
            {/* 메인 */}
            {/* {props.main &&
                <div className={'banner_notice' + (!isOpened?' is_closed':' is_opened')}>
                    <Link to='/main/mainIndex' className='banner in_sec'>
                        <p>UX DESIGN강좌 11월 수강신청 안내</p>
                    </Link>
                    <Button type='button' className='close' icon  onClick={handleBannerClick}>
                        <Icon className='close'/>
                        <span className='blind'>닫기</span>
                    </Button>
                </div>
            } */}

            <header className='header'>
                <div className='header_left'>
                    {/* 서브메인 */}
                    {props.submain &&
                        <h1>{props.title}</h1>
                    }
                    {/* 메인 */}
                    {props.main &&
                        <Link to='' className='profile_home'>
                            <Image src={avatar36_01} avatar className='size-36' />
                            <h1>{props.title}<span className='blind'> 마이 홈</span></h1>
                        </Link>

                    }
                </div>
                <div className='header_right'>
                    <Popup on='click' trigger={<Button type='button'><span className='_blind'>알림</span></Button>}>
                        <Popup.Content>
                            <p>Popup Content</p>
                        </Popup.Content>
                    </Popup>
                    <Button type='button'><span className='_blind'>검색</span></Button>
                </div>
            </header>
        </Fragment>
	)
}
export default MainHeader