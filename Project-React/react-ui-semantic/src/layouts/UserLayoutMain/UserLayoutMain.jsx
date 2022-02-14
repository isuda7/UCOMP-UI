import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import UserHeader from '../IncludeHeader/IncludeHeader';
import UserFooter from '../IncludeFooter/IncludeFooter';
import './UserLayoutMain.css';

class UserLayoutMain extends Component {

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={(matchProps) => (
        <div className='main-wrapper'>
          <UserHeader/>
          <Component {...matchProps} />
          <UserFooter/>
        </div>
        )} />
    );
  }
}

export default UserLayoutMain;
