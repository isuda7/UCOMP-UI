import React, {Component} from 'react'
import Sample1 from './components/Sample1'
// import {} from "semantic-ui-react";

class DragDropPage extends Component {
    render() {
        return (
            <section className='g_sec'>
                <h2 className='g_h2'>Drag &amp; Drop</h2>
                <h3 className='g_h3'>Guides</h3>
                <p>API : <a href="https://openbase.com/js/react-beautiful-dnd" target="_blank" rel="noopener noreferrer">https://openbase.com/js/react-beautiful-dnd</a></p>
                <p>Demo : <a href="https://codesandbox.io/s/j4yvnr7n83?file=/src/questions.js:2911-2962" target="_blank" rel="noopener noreferrer">https://codesandbox.io/s/j4yvnr7n83?file=/src/questions.js:2911-2962</a></p>
                <h3 className='g_h3'>Sample</h3>
                <div className='preview'>
                    <Sample1 />
                    {/* <Sample2 /> */}
                </div>
            </section>
        )
    }
}

export default DragDropPage
