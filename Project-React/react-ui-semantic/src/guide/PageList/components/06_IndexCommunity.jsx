import React from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'semantic-ui-react';

const IndexRecom = () => {
	return (
		<Table.Body>
			<Table.Row verticalAlign='top' id='IndexRecom'>
				<Table.Cell colSpan='6' className='table-tit'>
					<span className='text-bold'>추천</span>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>추천</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Comunity/' target='reactFrame'/>
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
		</Table.Body>
	)
}
export default IndexRecom