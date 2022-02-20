import React, {Component} from 'react';
import {Segment, Table} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Gnb from './gnb';
import './style.css';

class PageList extends Component {
    render() {
        return (
            <div className="ia-wrap">
                <iframe src='/guide/guideAll' frameBorder='0' height='760px' name='reactFrame'></iframe>
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
                                        <span className='text-bold'>Components</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='guideAll' target='reactFrame'>
                                            <span>전체보기</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/GuideAll' target='reactFrame'>
                                            /guide/guideAll
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/ElementsGroup' target='reactFrame'>
                                            <span>Buttons, Icons, Labels, Badges, Diviers</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/ElementsGroup' target='reactFrame'>
                                            /guide/ElementsGroup
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/Forms' target='reactFrame'>
                                            <span>Forms</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/Forms' target='reactFrame'>
                                            /guide/Forms
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/Tables' target='reactFrame'>
                                            <span>Tables</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/Tables' target='reactFrame'>
                                            /guide/Tables
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/Cards' target='reactFrame'>
                                            <span>Cards</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/Cards' target='reactFrame'>
                                            /guide/Cards
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/Lists' target='reactFrame'>
                                            <span>Bullets, Gorups</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/Lists' target='reactFrame'>
                                            /guide/Lists
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/Tabs' target='reactFrame'>
                                            <span>Tabs, Steps</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/Tabs' target='reactFrame'>
                                            /guide/Tabs
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/Accordions' target='reactFrame'>
                                            <span>Accordions</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/Accordions' target='reactFrame'>
                                            /guide/Accordions
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/Modals' target='reactFrame'>
                                            <span>Alert, Confirm, Center, Bottom, Full</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/Modals' target='reactFrame'>
                                            /guide/Modals
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/EtcGroup' target='reactFrame'>
                                            <span>ETC</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/EtcGroup' target='reactFrame'>
                                            /guide/EtcGroup
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                            <Table.Body>   
                                <Table.Row verticalAlign='top' id='CommunityTemplete'>
                                    <Table.Cell colSpan='6' className='table-tit'>
                                        <span className='text-bold'>Templates</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/Prototype/Template01' target='reactFrame'>
                                            <span>Basic</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/Prototype/Template01' target='reactFrame'>
                                        /guide/Prototype/Template01
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/Prototype/Template02' target='reactFrame'>
                                            <span>Board - Card</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/Prototype/Template02' target='reactFrame'>
                                        /guide/Prototype/Template02
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/Prototype/Template02NoData' target='reactFrame'>
                                            <span>Board - Card - NoData</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/Prototype/Template02NoData' target='reactFrame'>
                                        /guide/Prototype/Template02NoData
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
