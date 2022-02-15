import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Segment, Table} from 'semantic-ui-react';
import Gnb from './gnb';
import './style.css';

class PageList extends Component {
    render() {
        return (
            <div className="ia-wrap">
                <iframe src='/main/mainIndex' frameBorder='0' height='100%' name='reactFrame'></iframe>
                <div className='index-page bg-white'>
                    <Segment basic>
                        <Gnb />
                        <Table celled structured selectable>
                            <colgroup>
                                <col width='25%'/>
                                <col width='160px'/>
                                <col width='25%'/>
                                <col width='10%'/>
                                <col width='10%'/>
                                <col/>
                            </colgroup>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'>화면명</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>화면 아이디</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>경로</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>작업자</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>수정일</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>기타</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>   
                                <Table.Row verticalAlign='top' id='CommunityTemplete'>
                                    <Table.Cell colSpan='6' className='table-tit'>
                                        <span className='text-bold'>Main</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/main/mainIndex'>
                                            <span>Main</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/main/mainIndex' target='reactFrame'>
                                            /main/mainIndex
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                            <Table.Body>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell colSpan='6' className='table-tit'>
                                        <span className='text-bold'>Mypage</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/main/mainIndex' target='reactFrame'>
                                            <span>Mypage</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/main/mainIndex' target='reactFrame'>
                                            /Mypage/
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                            <Table.Body>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell colSpan='6' className='table-tit'>
                                        <span className='text-bold'>Category</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/main/mainIndex' target='reactFrame'>
                                            <span>Category</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/main/mainIndex' target='reactFrame'>
                                            /Category/
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                            <Table.Body>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell colSpan='6' className='table-tit'>
                                        <span className='text-bold'>Certification</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/main/mainIndex' target='reactFrame'>
                                            <span>Certification</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/main/mainIndex' target='reactFrame'>
                                            /Certification/
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                            <Table.Body>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell colSpan='6' className='table-tit'>
                                        <span className='text-bold'>Community</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/main/mainIndex' target='reactFrame'>
                                            <span>Community</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/main/mainIndex' target='reactFrame'>
                                            /Community/
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                            <Table.Body>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell colSpan='6' className='table-tit'>
                                        <span className='text-bold'>My Learning</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/main/mainIndex' target='reactFrame'>
                                            <span>My Learning</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/main/mainIndex' target='reactFrame'>
                                            /My Learning/
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                            <Table.Body>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell colSpan='6' className='table-tit'>
                                        <span className='text-bold'>LMS Search</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/main/mainIndex' target='reactFrame'>
                                            <span>Search</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/main/mainIndex' target='reactFrame'>
                                            /Search/
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Segment>
                </div>
            </div>
        )
    }
}


export default PageList
