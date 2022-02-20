import React, {Component} from 'react';
import './style.css';

class Pie extends Component {
    render() {
        let pieClass = "ui pie w" + this.props.size;
        if ( this.props.type === "empty" ) { pieClass = "ui pie w" + this.props.size + " empty" }
        return (
            <div className={pieClass} data-value={this.props.value}>
                <span className="left"/>
                <span className="right"/>
            </div>
        )
    }
}

export default Pie