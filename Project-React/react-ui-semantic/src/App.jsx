import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// PageList
import PageList from './guide/PageList';
import PageListGuide from './guide/PageList/indexGuide';

// Guide Semantic UI
import GuideAll from './guide/StyleGuide';
import DefaultPage from './guide/StyleGuide/Pages/DefaultPage';
import ElementPageGroup from './guide/StyleGuide/Pages/ElementPageGroup';
import SectionPage from './guide/StyleGuide/Pages/SectionPage';
import FormPage from './guide/StyleGuide/Pages/FormPage';
import TablePage from './guide/StyleGuide/Pages/TablePage';
import CardPage from './guide/StyleGuide/Pages/CardPage';
import ListPage from './guide/StyleGuide/Pages/ListPage';
import TabPage from './guide/StyleGuide/Pages/TabPage';
import AccordionPage from './guide/StyleGuide/Pages/AccordionPage';
import DragDropPage from './guide/StyleGuide/Pages/DragDropPage';
import ModalPage from './guide/StyleGuide/Pages/ModalPage';
import SwipePage from './guide/StyleGuide/Pages/SwipePage';
import EtcPageGroup from './guide/StyleGuide/Pages/EtcPageGroup';

// Guide Custom UI
import CustomPage from './guide/StyleGuide/Pages/CustomPage';

// Guide Templates
import TempMain from './guide/Prototype/TempMain';
import TempSubmain from './guide/Prototype/TempSubmain';
import Template01 from './guide/Prototype/Template01';
import Template02 from './guide/Prototype/Template02';
import Template03 from './guide/Prototype/Template03';

// Layout
import LayoutGuide from './layouts/LayoutGuide';
import LayoutSub from './layouts/LayoutSub/';
import LayoutMain from './layouts/LayoutMain/';

// Main
import MainIndex from './views/Main/MainIndex/';

// Sub
// import Sample from './views/Sample/';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Pagelist */}
                <Route path='/'>
                    <Route index element={<PageList />} />
                    <Route path='/Pagelist/indexGuide' element={<PageListGuide />} />
                </Route>

                {/* Guide */}
                <Route path='/' element={<LayoutGuide />}>
                    {/* Semantic UI */}
                    <Route path='/guide/GuideAll' element={<GuideAll />}/>
                    <Route path='/guide/Default' element={<DefaultPage />}/>
                    <Route path='/guide/ElementsGroup' element={<ElementPageGroup />}/>
                    <Route path='/guide/Section' element={<SectionPage />}/>
                    <Route path='/guide/Forms' element={<FormPage />}/>
                    <Route path='/guide/Tables' element={<TablePage />}/>
                    <Route path='/guide/Cards' element={<CardPage />}/>
                    <Route path='/guide/Lists' element={<ListPage />}/>
                    <Route path='/guide/Tabs' element={<TabPage />}/>
                    <Route path='/guide/Accordions' element={<AccordionPage />}/>
                    <Route path='/guide/DragDrop' element={<DragDropPage />}/>
                    <Route path='/guide/Modals' element={<ModalPage />}/>
                    <Route path='/guide/Swipes' element={<SwipePage />}/>
                    <Route path='/guide/EtcGroup' element={<EtcPageGroup />}/>

                    {/* Custom UI */}
                    <Route path='/guide/Custom' element={<CustomPage />}/>
                </Route>

                {/* Main */}
                <Route path='/' element={<LayoutMain />}>
                    <Route path='/Main/MainIndex' element={<MainIndex />}/>
                </Route>

                {/* Sub */}
                <Route path='/' element={<LayoutSub />}>
                    {/* Prototype */}
                    <Route path='/guide/Prototype/TempMain' element={<TempMain />}/>
                    <Route path='/guide/Prototype/TempSubmain' element={<TempSubmain />}/>
                    <Route path='/guide/Prototype/Template01' element={<Template01 />}/>
                    <Route path='/guide/Prototype/Template02' element={<Template02 />}/>
                    <Route path='/guide/Prototype/Template03' element={<Template03 />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
