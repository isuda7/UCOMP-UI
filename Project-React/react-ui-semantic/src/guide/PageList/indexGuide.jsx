import React, {Component} from 'react';
import {Segment, Table} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Gnb from './gnb';
import './style.css';

class PageList extends Component {
    render() {
        return (
            <div className="ia-wrap">
                <iframe src='/guide/guideAll' frameBorder='0' height='100%' name='reactFrame'></iframe>
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
                                        <Link to='/guide/guideAll' target='reactFrame'>
                                            /guide/guideAll
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/elementsGroup' target='reactFrame'>
                                            <span>Buttons, Icons, Labels, Badges, Diviers</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/elementsGroup' target='reactFrame'>
                                            /guide/elementsGroup
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/forms' target='reactFrame'>
                                            <span>Forms</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/forms' target='reactFrame'>
                                            /guide/forms
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/tables' target='reactFrame'>
                                            <span>Tables</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/tables' target='reactFrame'>
                                            /guide/tables
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/cards' target='reactFrame'>
                                            <span>Cards</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/cards' target='reactFrame'>
                                            /guide/cards
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/lists' target='reactFrame'>
                                            <span>Bullets, Items</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/lists' target='reactFrame'>
                                            /guide/lists
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/tabs' target='reactFrame'>
                                            <span>Tabs, Steps</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/tabs' target='reactFrame'>
                                            /guide/tabs
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/accordions' target='reactFrame'>
                                            <span>Accordions</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/accordions' target='reactFrame'>
                                            /guide/accordions
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/modals' target='reactFrame'>
                                            <span>Alert, Confirm, Center, Bottom, Full</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/modals' target='reactFrame'>
                                            /guide/modals
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>
                                        <Link to='/guide/etcGroup' target='reactFrame'>
                                            <span>ETC</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'></Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/guide/etcGroup' target='reactFrame'>
                                            /guide/etcGroup
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
