import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// PageList
import PageList from './guide/pageList';
import PageListGuide from './guide/pageList/indexGuide';

// Guide Components
import GuideAll from './guide/styleGuide';
import ElementPageGroup from './guide/styleGuide/pages/elementPageGroup';
import SectionPage from './guide/styleGuide/pages/sectionPage';
import FormPage from './guide/styleGuide/pages/formPage';
import TablePage from './guide/styleGuide/pages/tablePage';
import CardPage from './guide/styleGuide/pages/cardPage';
import ListPage from './guide/styleGuide/pages/listPage';
import TabPage from './guide/styleGuide/pages/tabPage';
import AccordionPage from './guide/styleGuide/pages/accordionPage';
import ModalPage from './guide/styleGuide/pages/modalPage';
import EtcPageGroup from './guide/styleGuide/pages/etcPageGroup';

// Guide Templates
import Template01 from './guide/prototype/template01';
import Template02 from './guide/prototype/template02';
import Template02NoData from './guide/prototype/template02/indexNoData';

// Layout
import GuideLayout from './guide/styleGuide/layouts/guideLayout';
import LayoutSub from './layouts/LayoutSub/';
import LayoutMain from './layouts/LayoutMain/';
import LayoutBlank from './layouts/LayoutBlank/';

// Main
import MainIndex from './views/Main/MainIndex/';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Pagelist */}
                <Route path="/" element={<LayoutBlank />}>
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
                <Route path="/main/" element={<LayoutMain />}>
                    <Route path="mainIndex" element={<MainIndex />}/>
                </Route>

                {/* Sub */}
                <Route path="/guide/" element={<LayoutSub />}>
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
