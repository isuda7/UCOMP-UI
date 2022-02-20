import React, {Component} from 'react'
import {Button, Checkbox, Form, Input, Select} from "semantic-ui-react";

const selectOptions1 = [
    { key: 'key1', value: 'value1', text: 'Option Text1' },
    { key: 'key2', value: 'value2', text: 'Option Text2' },
    { key: 'key3', value: 'value3', text: 'Option Text3' },
    { key: 'key4', value: 'value4', text: 'Option Text4' },
    { key: 'key5', value: 'value5', text: 'Option Text5' },
    { key: 'key6', value: 'value6', text: 'Option Text6' }
]

class FormPage extends Component {
    render() {
        return (
            <section id="formSec">
                {/* Form Layout */}
                <h2 className="g-h2">Form Layout</h2>
                <div className="preview" style={{overflow: 'visible'}}>
                    <Form>
                        <Form.Field>
                        <label htmlFor="formName">First Name</label>
                        <Input id="formName" placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                        <label htmlFor="formName2">Last Name</label>
                        <Input id="formName2" placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </div>

                {/* Input */}
                <h2 className="g-h2">Input</h2>
                <div className="preview" style={{overflow: 'visible'}}>
                    <Input placeholder='Placeholder' />
                    <br />
                    <Input placeholder='Placeholder' value='Value' />
                    <br />
                    <Input placeholder='Placeholder' disabled />
                </div>

                {/* Select */}
                <h2 className="g-h2">Select</h2>
                <div className="preview" style={{overflow: 'visible'}}>
                    <Select placeholder='Placeholder' options={selectOptions1} />
                    <br />
                    <Select placeholder='Placeholder' options={selectOptions1} />
                    <br />
                    <Select placeholder='Placeholder' options={selectOptions1} />
                </div>

                {/* Checkbox */}
                <h2 className="g-h2">Checkbox</h2>
                <div className="preview" style={{overflow: 'visible'}}>
                    <Select placeholder='Placeholder' options={selectOptions1} />
                    <br />
                    <Select placeholder='Placeholder' options={selectOptions1} />
                    <br />
                    <Select placeholder='Placeholder' options={selectOptions1} />
                </div>
            </section>
        )
    }
}

export default FormPage
