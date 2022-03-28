import React, {Component} from 'react'
import {Label} from "semantic-ui-react";

class LabelPage extends Component {
    render() {
        return (
            <section className='g_sec'>
                <h2 className='g_h2'>Labels</h2>
                <h3 className='g_h3'>Category</h3>
                <div className='preview'>
                    <Label className='cate ai'>AI</Label>
                    <Label className='cate dt'>DT</Label>
                    <Label className='cate happinesst'>행복</Label>
                    <Label className='cate sv'>SV&middot;ESG</Label>
                    <Label className='cate design'>혁신디자인</Label>
                    <Label className='cate global'>Global</Label>
                    <Label className='cate leadership'>Leadership</Label>
                    <Label className='cate management'>Management</Label>
                    <Label className='cate semicond'>미래반도체</Label>
                    <Label className='cate green'>Green</Label>
                    <Label className='cate bmd'>BM Design</Label>
                    <Label className='cate academy'>SK아카데미</Label>
                </div>
            </section>
        )
    }
}

export default LabelPage
