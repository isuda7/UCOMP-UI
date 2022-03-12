import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Segment, Table} from 'semantic-ui-react';
import Gnb from './gnb';
import './style.css';

class PageList extends Component {
    render() {
        return (
            <div className="ia-wrap">
                <iframe src='/main/mainIndex' frameBorder='0' height='760px' name='reactFrame'></iframe>
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
                                    <Table.Cell>Main</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/Main/MainIndex' target='reactFrame' />
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                            <Table.Body>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell colSpan='6' className='table-tit'>
                                        <span className='text-bold'>React Hooks</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>useState</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/ReactHooks/UseState' target='reactFrame' />
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>useEffect</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/ReactHooks/UseEffect' target='reactFrame' />
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>useRef</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/ReactHooks/UseRef' target='reactFrame' />
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>useContext</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/ReactHooks/UseContext' target='reactFrame' />
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>useMemo</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/ReactHooks/UseMemo' target='reactFrame' />
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>useCallback</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/ReactHooks/UseCallback' target='reactFrame' />
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>useReducer</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/ReactHooks/UseReducer' target='reactFrame' />
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                            <Table.Body>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell colSpan='6' className='table-tit'>
                                        <span className='text-bold'>Custom Hooks</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>useInputs</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/ReactHooks/UseInputs' target='reactFrame' />
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                                <Table.Row verticalAlign='top'>
                                    <Table.Cell>usePromise</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {/* (<span>AL-MA-10</span>) */}
                                    </Table.Cell>
                                    <Table.Cell className='link-address'>
                                        <Link to='/ReactHooks/UsePromise' target='reactFrame' />
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
