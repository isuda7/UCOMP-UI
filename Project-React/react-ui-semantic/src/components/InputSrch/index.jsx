import React, {useState, useRef} from 'react'
import {Button, Input} from "semantic-ui-react";

const InputSrch = (props) => {
    const [focus, setFocus] = useState(false);
    const [write, setWrite] = useState(() => (typeof props.value==='string' && props.value.length > 0) ? props.value : '');
    const inputSrch = useRef();

    const handlerClear = (e) => {
        setWrite('');
        inputSrch.current.focus();
    }
    return (
        <div className={'inp_srch'+(focus?' is_focus':'')}>
            <Input type='text' placeholder='입력하세요.' value={write} ref={inputSrch}
                   onClick={() => setFocus(true)}
                   onBlur={() => setFocus(false)}
                   onChange={(e) => setWrite(e.target.value)}
            />
            {(write!=='') && <Button className='clear' onClick={handlerClear}><span className='blind_'>삭제</span></Button>}
            <Button className='search'><span className='blind_'>검색</span></Button>
        </div>
    )
}
export default InputSrch
