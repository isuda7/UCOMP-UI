import React from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'semantic-ui-react';

const IndexMore = () => {
	return (
		<Table.Body>
			<Table.Row verticalAlign='top' id='IndexMore'>
				<Table.Cell colSpan='6' className='table-tit'>
					<span className='text-bold'>더보기</span>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>더보기</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/More/' target='reactFrame'/>
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
		</Table.Body>
	)
}
export default IndexMore