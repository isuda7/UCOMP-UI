import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {
    Responsive,
    Sidebar,
    Button,
    Menu,
    Icon,
    Image,
    Breadcrumb,
} from 'semantic-ui-react';

const ResponsiveContainerSample = ({children}) => (
    <>
        <DesktopContainer>{children}</DesktopContainer>
        <TabletContainer>{children}</TabletContainer>
        <MobileContainer>{children}</MobileContainer>
    </>
);

ResponsiveContainerSample.propTypes = {
    children: PropTypes.node,
};

// DesktopContainer
class DesktopContainer extends Component {

    render() {
        const {children} = this.props;

        return (
            <Responsive {...Responsive.onlyComputer}>
                <div className="g-h2">
                    test
                    <Button primary>btn</Button>
                </div>
                {children}
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
                {children}
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
                {children}
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};

export default ResponsiveContainerSample;
