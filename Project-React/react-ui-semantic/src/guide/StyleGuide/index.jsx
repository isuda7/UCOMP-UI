import React, {Component} from 'react'
// Page
import {
    DefaultPage,
    FormPage,
    ButtonPage,
    IconPage,
    LabelPage,
    CardPage,
    TabPage,
    AccordionPage,
    DragDropPage,
    ModalPage,
    EtcPageGroup,
    CustomPage,
    GuidePage,
} from './Pages'

class GuideAll extends Component {
    render() {
        return (
            <>
                {/* Convention */}
                <DefaultPage />

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

                {/* DragDrop */}
                <DragDropPage />

                {/* Modals */}
                <ModalPage />

                {/* EtcPageGroup */}
                <EtcPageGroup />

                {/* Custom */}
                <CustomPage />

                {/* 복사용 */}
                <GuidePage />
            </>
        )
    }
}


export default GuideAll