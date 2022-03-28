import React, {Component} from 'react'
import {Button} from "semantic-ui-react";

class ButtonPage extends Component {
    render() {
        return (
            <section className='g_sec'>
                <h2 className='g_h2'>Buttons</h2>
                <h3 className='g_h3'>Default</h3>
                <div className='preview'>
                    <Button type='button'>Button</Button>
                    <Button type='button' className='primary'>Button</Button>
                    <Button type='button' className='secondary'>Button</Button>
                    <Button type='button' disabled>Button</Button>
                    <Button type='button' className='primary' disabled>Button</Button>
                    <Button type='button' className='secondary' disabled>Button</Button>
                </div>
                <h3 className='g_h3'>Page Action</h3>
                <div className='preview'>
                    {/* 실제 페이지는 content_foot 영역에 들어감 */}
                    <div className='page_action'>
                        <Button type='button' className='primary'>등록하기</Button>
                    </div>
                    <div className='page_action'>
                        <Button type='button'>저장</Button>
                        <Button type='button' className='primary'>제출</Button>
                    </div>
                </div>
            </section>
        )
    }
}

export default ButtonPage
