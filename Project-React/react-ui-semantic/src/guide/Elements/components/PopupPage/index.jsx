import React, {Component} from 'react'
import {Popup, Button} from "semantic-ui-react";

const PopupExample = () => (
    <Popup content='Add users to your feed' trigger={<Button icon='add' />} />
)

class PopupPage extends Component {
    render() {
        return (
            <section id="popupSec">
                <h2 className="g-h2">Popups</h2>
                <div className="preview" style={{overflow: 'visible'}}>
                    <Popup className="pop_language_slt new"
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
