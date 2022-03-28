import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

const GuidePrototype = () => {
	return (
		<Table.Body>
			<Table.Row verticalAlign='top' id='GuidePrototype'>
				<Table.Cell colSpan='6' className='table-tit'>
					<span className='text-bold'>Prototype</span>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Layout Main</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Prototype/TempMain' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Layout Submain</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Prototype/TempSubmain' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Layout Sub - Basic White</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Prototype/Template01' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Layout Sub - Basic Dark 1</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Prototype/Template02' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Layout Sub - Basic Dark 2</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/Prototype/Template03' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
		</Table.Body>
	)
}
export default GuidePrototype