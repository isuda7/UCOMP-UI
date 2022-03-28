import React, { Fragment } from "react";
import { Modal as ModalComponent, Button, TransitionablePortal } from "semantic-ui-react";

export const DEFAULT_PROPS = {
	transition: {
		animation: "scale",
		duration: 300
	}
};

export default class Modal extends React.Component {
	state = {
		open: false
	};

	setOpen = open => {
		this.setState((prevState, props) => ({
			open
		}));
	};

	handleTriggerClick = event => {
		this.setOpen(true);
	};

	handleClose = (event, data) => {
		this.setOpen(false);
	};

	render() {
		const { open } = this.state;
		const { transition } = this.props;

		return (
			<Fragment>
				<Button onClick={this.handleTriggerClick} className='primary'>Open Modal Alert</Button>
				<TransitionablePortal {...{ open }} {...{ transition }}>
					<ModalComponent open closeIcon onClose={this.handleClose}>
						<ModalComponent.Header>Resize test</ModalComponent.Header>
						<ModalComponent.Content>
							Modal Alert
						</ModalComponent.Content>
					</ModalComponent>
				</TransitionablePortal>
			</Fragment>
		);
	}
}

Modal.defaultProps = DEFAULT_PROPS;
