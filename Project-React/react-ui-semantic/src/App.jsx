import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

// PageList
import PageList from './guide/PageList';
import PageListGuide from './guide/PageList/indexGuide';

// Guide Components
import GuideAll from './guide/Elements';
import ElementPageGroup from './guide/Elements/components/ElementPageGroup';
import SectionPage from './guide/Elements/components/SectionPage';
import FormPage from './guide/Elements/components/FormPage';
import TablePage from './guide/Elements/components/TablePage';
import CardPage from './guide/Elements/components/CardPage';
import ListPage from './guide/Elements/components/ListPage';
import TabPage from './guide/Elements/components/TabPage';
import AccordionPage from './guide/Elements/components/AccordionPage';
import ModalPage from './guide/Elements/components/ModalPage';
import EtcPageGroup from './guide/Elements/components/EtcPageGroup';

// Guide Templates
import Template01 from './guide/Prototype/Template01';
import Template02 from './guide/Prototype/Template02';
import Template02NoData from './guide/Prototype/Template02/indexNoData';

// Layout
import GuideLayout from './guide/Elements/layout/GuideLayout';
import UserLayout from './layouts/UserLayout/UserLayout';
import UserLayoutMain from './layouts/UserLayoutMain/UserLayoutMain';
import UserLayoutBlank from './layouts/UserLayoutBlank/UserLayoutBlank';

// Main
import MainIndex from './views/Main/MainIndex';

// Sub

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* Guide */}
                    <UserLayoutBlank exact path="/" component={PageList}/>
                    <UserLayoutBlank exact path="/guide/PageList/indexGuide" component={PageListGuide}/>
                    <GuideLayout path="/guide/guideAll" component={GuideAll}/>
                    <GuideLayout path="/guide/elementsGroup" component={ElementPageGroup}/>
                    <GuideLayout path="/guide/section" component={SectionPage}/>
                    <GuideLayout path="/guide/forms" component={FormPage}/>
                    <GuideLayout path="/guide/tables" component={TablePage}/>
                    <GuideLayout path="/guide/cards" component={CardPage}/>
                    <GuideLayout path="/guide/lists" component={ListPage}/>
                    <GuideLayout path="/guide/tabs" component={TabPage}/>
                    <GuideLayout path="/guide/accordions" component={AccordionPage}/>
                    <GuideLayout path="/guide/modals" component={ModalPage}/>
                    <GuideLayout path="/guide/etcGroup" component={EtcPageGroup}/>
                    
                    {/* Prototype */}
                    <UserLayout path="/guide/Prototype/Template01" component={Template01}/>
                    <UserLayout path="/guide/Prototype/Template02" component={Template02}/>
                    <UserLayout path="/guide/Prototype/Template02NoData" component={Template02NoData}/>

                    {/* Login */}
                    {/* <Route path="/login/login-index" component={PrivacyAgree}/> */}

                    {/* Main */}
                    <UserLayoutMain path="/main/main-index" component={MainIndex}/>

                    {/* UserLayout */}
                    {/* <UserLayout path="/search/search-all-filter-disable" component={SearchAllFilterDisable}/> */}

                    {/* CategoryLayout */}
                    {/* <UserLayoutSearch path="/searchTotal/search-result-new" component={SearchResultNew}/> */}

                </Switch>
            </Router>
        )
    }
}

export default App;
