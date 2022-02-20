import React, {Component} from 'react'
// Page
import {
    PiePage, PopupPage
} from '..'

class EtcPageGroup extends Component {
    render() {
        return (
            <>
                {/* Pie */}
                <PiePage />

                {/* Popups */}
                <PopupPage />

            </>
        )
    }
}

export default EtcPageGroup