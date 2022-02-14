import React, {Component} from 'react'
// Page
import {
    DefaultPage,
    PiePage,
    FormPage,
    ButtonPage,
    IconPage,
    LabelPage,
    CardPage,
    TabPage,
    AccordionPage,
    PopupPage,
    ModalPage,
    GuidePage,
} from './components'

console.log(window.location.hash);
class GuideAll extends Component {
    render() {
        return (
            <>
                {/* Convention */}
                <DefaultPage />

                {/* Pie */}
                <PiePage />

                {/* Forms */}
                <FormPage />

                {/* Buttons */}
                <ButtonPage />

                {/* Icons */}
                <IconPage />

                {/* Labels */}
                <LabelPage />

                {/* Cards */}
                <CardPage />

                {/* Tabs */}
                <TabPage />

                {/* Accodions */}
                <AccordionPage />

                {/* Popups */}
                <PopupPage />

                {/* Modals */}
                <ModalPage />

                {/* 복사용 */}
                <GuidePage />
            </>
        )
    }
}


export default GuideAll