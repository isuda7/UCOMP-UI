import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Responsive,
} from 'semantic-ui-react';

import UserHeader from '../UserHeader/UserHeader';
import UserFooter from '../UserFooter/UserFooter';


const ResponsiveContainerUser = ({children}) => (
    <>
        <DesktopContainer>{children}</DesktopContainer>
        <TabletContainer>{children}</TabletContainer>
        <MobileContainer>{children}</MobileContainer>
    </>
);

ResponsiveContainerUser.propTypes = {
    children: PropTypes.node,
};

// DesktopContainer
class DesktopContainer extends Component {

    render() {
        const {children} = this.props;

        return (
            <Responsive {...Responsive.onlyComputer}>
                <UserHeader/>
                {children}                
                <UserFooter/>
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
};


// TabletContainer
class TabletContainer extends Component {

    render() {
        const {children} = this.props;

        return (
            <Responsive {...Responsive.onlyTablet}>
                <UserHeader/>
                {children}
                <UserFooter/>
            </Responsive>
        )
    }
}

TabletContainer.propTypes = {
    children: PropTypes.node,
};


// MobileContainer
class MobileContainer extends Component {

    render() {
        const {children} = this.props;

        return (
            <Responsive {...Responsive.onlyMobile}>
                <UserHeader/>
                {children}
                <UserFooter />
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};

export default ResponsiveContainerUser;
