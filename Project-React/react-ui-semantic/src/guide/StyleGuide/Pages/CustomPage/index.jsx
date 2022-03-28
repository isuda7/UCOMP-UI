import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
// Custom UI
import {
	InputSrch,
	NoData,
	ResultData,
	Pie,
} from '../../../../components'
import NoDataImg1 from '../../../../assets/images/demo/confirm.png'
import NoDataImg2 from '../../../../assets/images/demo/alert.png'
import { Link } from 'react-router-dom'

class CustomPage extends Component {
    render() {
        return (
			<>
				<section className='g_sec'>
					<h2 className='g_h2'>Input Search</h2>
					<div className='preview'>
						<InputSrch />
						<br />
						<InputSrch value="입력값" />
					</div>
				</section>

				<section className='g_sec'>
					<h2 className='g_h2'>No Data</h2>
					<div className='preview'>
						<NoData>
							<p className='msg'>검색된 결과가 없습니다.</p>
						</NoData>
						<br/>
						<NoData src={NoDataImg1}>
							<p className='msg'>등록된 결과가 없습니다.</p>
						</NoData>
						<br/>
						<NoData src={NoDataImg2} alt='Alt값도 필요한 경우'>
							<p className='msg'>메세지가 길게 들어갑니다.<br />예외 케이스입니다.</p>
							<div className='btn-area'>
								<Button type='button' className='outline'>등록하기</Button>
							</div>
						</NoData>
					</div>
				</section>

				<section className='g_sec'>
					<h2 className='g_h2'>Result Data</h2>
					<div className='preview'>
						<ResultData className='is_successed'>
							<p className='msg'>등록 완료 되었습니다.</p>
						</ResultData>
						<br/>
						<ResultData className='is_failed' src={NoDataImg1}>
							<p className='msg'>등록 실패 하였습니다.</p>
						</ResultData>
						<br/>
						<ResultData src={NoDataImg2} alt='Alt값도 필요한 경우'>
							<p className='msg'>안내 메세지입니다.</p>
							<div className='btn-area'>
								<Link to='' className='outline'>돌아가기</Link>
							</div>
						</ResultData>
					</div>
				</section>

				<section className='g_sec'>
					<h2 className='g_h2'>Pie</h2>
					<div className='preview'>
						<p className='g_info'>크기 필수 설정 : size="56|200"</p>
						<p className='g_info'>값이 있는 경우 : value="0 ~ 360"</p>
						<p className='g_info'>값이 없는 경우 : type="empty"</p>
						<Pie size='56' value='60' />
						<Pie size='56' type='empty' />
						<Pie size='200' value='150' />
						<Pie size='200' type='empty' />
					</div>
				</section>
			</>
        )
    }
}

export default CustomPage