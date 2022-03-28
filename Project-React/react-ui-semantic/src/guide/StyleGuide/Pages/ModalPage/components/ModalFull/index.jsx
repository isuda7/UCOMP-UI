import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function ModalFull() {
	const [open, setOpen] = React.useState(false)

	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<Button className='primary'>Open Modal Full</Button>}
		>
			<Modal.Header>Select a Photo</Modal.Header>
			<Modal.Content>
				Modal Full content
			</Modal.Content>
			<Modal.Actions>
				<Button color='black' onClick={() => setOpen(false)}>
					Nope
				</Button>
				<Button
					content="Yep, that's me"
					labelPosition='right'
					icon='checkmark'
					onClick={() => setOpen(false)}
					positive
				/>
			</Modal.Actions>
		</Modal>
	)
}

export default ModalFull