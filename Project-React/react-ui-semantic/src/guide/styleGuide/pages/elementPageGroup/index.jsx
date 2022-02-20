import React, {Component} from 'react'
// Page
import {
    ButtonPage,
    IconPage,
    LabelPage,
    DividerPage,
} from '..'

class ElementPageGroup extends Component {
    render() {
        return (
            <>
                {/* Buttons */}
                <ButtonPage />

                {/* Icons */}
                <IconPage />

                {/* Labels */}
                <LabelPage />

                {/* 복사용 */}
                <DividerPage />
            </>
        )
    }
}

export default ElementPageGroup