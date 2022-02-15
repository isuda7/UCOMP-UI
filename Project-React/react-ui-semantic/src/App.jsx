import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

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
import GuideLayout from './guide/Elements/layouts/GuideLayout';
import UserLayout from './layouts/UserLayout/UserLayout';
import UserLayoutMain from './layouts/UserLayoutMain/UserLayoutMain';
import UserLayoutBlank from './layouts/UserLayoutBlank/UserLayoutBlank';

// Main
import MainIndex from './views/Main/MainIndex';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Pagelist */}
                <Route path="/" element={<UserLayoutBlank />}>
                    <Route index element={<PageList />} />
                    <Route path="/pagelist/indexGuide" element={<PageListGuide />} />
                </Route>

                {/* Guide */}
                <Route path="/guide/" element={<GuideLayout />}>
                    <Route path="guideAll" element={<GuideAll />}/>
                    <Route path="elementsGroup" element={<ElementPageGroup />}/>
                    <Route path="section" element={<SectionPage />}/>
                    <Route path="forms" element={<FormPage />}/>
                    <Route path="tables" element={<TablePage />}/>
                    <Route path="cards" element={<CardPage />}/>
                    <Route path="lists" element={<ListPage />}/>
                    <Route path="tabs" element={<TabPage />}/>
                    <Route path="accordions" element={<AccordionPage />}/>
                    <Route path="modals" element={<ModalPage />}/>
                    <Route path="etcGroup" element={<EtcPageGroup />}/>
                </Route>
                
                {/* Main */}
                <Route path="/main/" element={<UserLayoutMain />}>
                    <Route path="mainIndex" element={<MainIndex />}/>
                </Route>

                {/* Sub */}
                <Route path="/guide/" element={<UserLayout />}>
                    {/* Prototype */}
                    <Route path="/guide/prototype/Template01" element={<Template01/>}/>
                    <Route path="/guide/prototype/Template02" element={<Template02/>}/>
                    <Route path="/guide/prototype/Template02NoData" element={<Template02NoData/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
