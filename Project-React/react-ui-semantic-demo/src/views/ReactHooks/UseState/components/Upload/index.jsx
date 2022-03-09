import React, { useState } from 'react';
import { Button, Input } from "semantic-ui-react";

const initData = () => {
    console.log('처음 로드 할때만 실행!!');
    return ['이순신', '이박사']
}

const Upload = () => {
    const [names, setNames] = useState(() => { return initData() });
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    const handleUpload = () => {
        setNames((prevState) => {
            return ([input, ...prevState]);
        });
    }
    return (
        <div className='upload-area'>
            <Input type='text' value={input} onChange={handleInputChange} />
            <Button className='primary' onClick={handleUpload}>Upload</Button>
            {
                names.map((name, idx) => {
                    return <p key={idx}>{name}</p>;
                })
            }
        </div>
    )
}
export default Upload