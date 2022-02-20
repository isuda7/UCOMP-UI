import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// PageList
import PageList from './guide/PageList';
import PageListGuide from './guide/PageList/indexGuide';

// Guide Components
import GuideAll from './guide/StyleGuide';
import ElementPageGroup from './guide/StyleGuide/Pages/ElementPageGroup';
import SectionPage from './guide/StyleGuide/Pages/SectionPage';
import FormPage from './guide/StyleGuide/Pages/FormPage';
import TablePage from './guide/StyleGuide/Pages/LablePage';
import CardPage from './guide/StyleGuide/Pages/CardPage';
import ListPage from './guide/StyleGuide/Pages/ListPage';
import TabPage from './guide/StyleGuide/Pages/TabPage';
import AccordionPage from './guide/StyleGuide/Pages/AccordionPage';
import ModalPage from './guide/StyleGuide/Pages/ModalPage';
import EtcPageGroup from './guide/StyleGuide/Pages/EtcPageGroup';

// Guide Templates
import Template01 from './guide/Prototype/Template01';
import Template02 from './guide/Prototype/Template02';
import Template02NoData from './guide/Prototype/Template02/indexNoData';

// Layout
import LayoutGuide from './layouts/LayoutGuide';
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
                    <Route path="/Pagelist/indexGuide" element={<PageListGuide />} />
                </Route>

                {/* Guide */}
                <Route path="/guide/" element={<LayoutGuide />}>
                    <Route path="GuideAll" element={<GuideAll />}/>
                    <Route path="ElementsGroup" element={<ElementPageGroup />}/>
                    <Route path="Section" element={<SectionPage />}/>
                    <Route path="Forms" element={<FormPage />}/>
                    <Route path="Tables" element={<TablePage />}/>
                    <Route path="Cards" element={<CardPage />}/>
                    <Route path="Lists" element={<ListPage />}/>
                    <Route path="Tabs" element={<TabPage />}/>
                    <Route path="Accordions" element={<AccordionPage />}/>
                    <Route path="Modals" element={<ModalPage />}/>
                    <Route path="EtcGroup" element={<EtcPageGroup />}/>
                </Route>
                
                {/* Main */}
                <Route path="/Main/" element={<LayoutMain />}>
                    <Route path="MainIndex" element={<MainIndex />}/>
                </Route>

                {/* Sub */}
                <Route path="/guide/" element={<LayoutSub />}>
                    {/* Prototype */}
                    <Route path="Prototype/Template01" element={<Template01/>}/>
                    <Route path="Prototype/Template02" element={<Template02/>}/>
                    <Route path="Prototype/Template02NoData" element={<Template02NoData/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
