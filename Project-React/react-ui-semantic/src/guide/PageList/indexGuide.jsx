import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';
import {GuideComponents, GuidePrototype} from './components';
import Gnb from './gnb';
import './style.scss';

class PageList extends Component {
    render() {
        return (
            <div className='ia_wrap'>
                <iframe src='/guide/guideAll' frameBorder='0' height='760px' title='Prevoew' name='reactFrame'></iframe>
                <div className='ia_container'>
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

                        {/* Components */}
                        <GuideComponents />

                        {/* Prototype */}
                        <GuidePrototype />
                    </Table>
                </div>
            </div>
        )
    }
}


export default PageList
