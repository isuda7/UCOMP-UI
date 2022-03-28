import React from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'semantic-ui-react';

const IndexOnboard = () => {
	return (
		<Table.Body>
			<Table.Row verticalAlign='top' id='IndexOnboard'>
				<Table.Cell colSpan='6' className='table-tit'>
					<span className='text-bold'>온보딩</span>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>온보딩</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Onboard/' target='reactFrame'/>
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
		</Table.Body>
	)
}
export default IndexOnboard