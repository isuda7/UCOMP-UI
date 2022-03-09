import React, { useState } from 'react';
import {Button} from "semantic-ui-react";

const Count = () => {
    const [ time, setTime ] = useState(1);
    const handleClick = () => {
        if (time >= 12) {
            setTime(1);
        } else {
            setTime(time + 1);
        }
    }
    return (
        <div className='time-area'>
            <p>시간: {time} 시</p><br />
            <Button className='primary' onClick={handleClick}>Count</Button>
        </div>
    )
}
export default Count