import React, {Component} from 'react'
import {ModalAlert, ModalConfirm, ModalBasic, ModalBottomSheet, ModalFull} from "./components";

class ModalPage extends Component {
    render() {
        return (
            <section className='g_sec'>
                <h2 className='g_h2'>Modals Defualt</h2>
                <h3 className='g_h3'>Transition</h3>
                <div className='preview'>
                    <ModalAlert />
                    <br/>
                    <br/>
                    <ModalConfirm />
                    <br/>
                    <br/>
                    <ModalBasic />
                </div>

                <h3 className='g_h3'>ButtomSheet</h3>
                <div className='preview'>
                    <ModalBottomSheet />
                </div>

                <h3 className='g_h3'>Static</h3>
                <div className='preview'>
                    <ModalFull />
                </div>
            </section>
        )
    }
}  
export default ModalPage
