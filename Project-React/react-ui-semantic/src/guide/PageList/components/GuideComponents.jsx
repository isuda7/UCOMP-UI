import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

const GuideComponents = () => {
	return (
		<Table.Body>
			<Table.Row verticalAlign='top' id='GuideComponents'>
				<Table.Cell colSpan='6' className='table-tit'>
					<span className='text-bold'>Components</span>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>전체보기</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/GuideAll' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>코딩규칙가이드</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Default' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Buttons, Icons, Labels, Badges, Diviers</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/ElementsGroup' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Forms</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Forms' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Tables</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Tables' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Cards</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Cards' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Bullets, Gorups</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Lists' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Tabs, Steps</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Tabs' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Accordions</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Accordions' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Drag &amp; Drop</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/DragDrop' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Alert, Confirm, Basic, Buttom Sheet</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Modals' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Swipes</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Swipes' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>ETC</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/EtcGroup' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Custom UI</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Custom' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
		</Table.Body>
	)
}
export default GuideComponents