import React, {Component} from 'react'
import {Pie} from "../../../../components";

class PiePage extends Component {
    render() {
        return (
            <section id="pieSec">
                <h2 className="g-h2">파이</h2>
                <div className="preview" style={{overflow: 'visible'}}>
                    <p className="gInfo">크기 필수 설정 : size="56|200"</p>
                    <p className="gInfo">값이 있는 경우 : value="0 ~ 360"</p>
                    <p className="gInfo">값이 없는 경우 : type="empty"</p>
                    <Pie size="56" value="60" />
                    <Pie size="56" type="empty" />
                    <Pie size="200" value="150" />
                    <Pie size="200" type="empty" />
                </div>
            </section>
        )
    }
}
export default PiePage
