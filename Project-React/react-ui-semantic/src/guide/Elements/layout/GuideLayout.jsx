import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import '../style.css';

class GuideLayout extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={(matchProps) => (
        <div className="g-wrap">
            <header>
                <h1>Publishing Guide</h1>
            </header>
            <div className="g-cont">
                <Component {...matchProps} />
            </div>
        </div>
      )} />
    );
  }
}
export default GuideLayout;