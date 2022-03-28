import React, {Component} from 'react'
import {Popup, Button} from 'semantic-ui-react'

class PopupPage extends Component {
    render() {
        return (
            <section className='g_sec'>
                <h2 className='g_h2'>Popups</h2>
                <div className='preview'>
                    <Popup
                        trigger={<Button type='button' icon='add' />}
                    >
                        <Popup.Content>
                            <p>Popup Content</p>
                        </Popup.Content>
                    </Popup>
                </div>
            </section>
        )
    }
}

export default PopupPage
