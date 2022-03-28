import React, {Component} from 'react'
import {Button, Icon} from 'semantic-ui-react'
import {Navigation} from '../../components'
import './style.scss';

class MainFooter extends Component {
    state = {open: false};
    handleOpen = () => {
        this.setState({ open: true });
    }
    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
		const { open } = this.state
        return (
            <>
                <footer className='footer'>
                    <Button icon className='drower' onClick={this.handleOpen}>
                        <Icon name='bars' />
                    </Button>
                </footer>

                <aside className={'aside ' + (open?'is_active':'')} aria-hidden={open?'false':'true'}>
                    <Navigation />
                    <Button icon className='close' onClick={this.handleClose}>
                        <Icon name="close" />
                        <span className='blind'>닫기</span>
                    </Button>
                </aside>
            </>
        )
    }
}
export default MainFooter