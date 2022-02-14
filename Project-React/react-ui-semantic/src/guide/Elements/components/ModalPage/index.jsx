import React from 'react'
import {Button, Icon, Modal} from "semantic-ui-react";

function ModalPage() {
    const [open, setOpen] = React.useState(false)
  
    return (
        <section id="modalSec">
            <h2 className="g-h2">Modals</h2>
            <div className="preview" style={{overflow: 'visible'}}>
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button className='grey'>Show Modal</Button>}
                >
                    <Modal.Header>
                        <h3>Select a Photo</h3>
                        <Button
                            icon
                            onClick={() => setOpen(false)}
                        >
                            <Icon name='close' />
                        </Button>
                    </Modal.Header>
                    <Modal.Content>
                        <p>Modal.Content</p>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                        Nope
                    </Button>
                    <Button
                        content="Close"
                        onClick={() => setOpen(false)}
                        positive
                    />
                    </Modal.Actions>
                </Modal>
            </div>
        </section>

    )
  }
  
export default ModalPage
