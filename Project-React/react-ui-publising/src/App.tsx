import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Guide - IA
import IALayout from "./guide/ia/components/iaLayout";
import FrontList from "./guide/ia/pages/frontList";
import GuideList from "./guide/ia/pages/guideList";

// Guide - UI
import UILayout from "./guide/ui/components/uiLayout";
import PrototypePage from "./guide/ui/pages/prototypePage";
import ButtonPage from "./guide/ui/pages/buttonPage";
import IconPage from "./guide/ui/pages/iconPage";
import LabelPage from "./guide/ui/pages/labelPage";
import ThumbPage from "./guide/ui/pages/thumbPage";
import FormInputPage from "./guide/ui/pages/formInputPage";
import FormCheckboxPage from "./guide/ui/pages/formCheckboxPage";
import FormControlsPage from "./guide/ui/pages/formControlsPage";
import FormFieldsetPage from "./guide/ui/pages/formFieldsetPage";
import SectionPage from "./guide/ui/pages/sectionPage";
import DataPage from "./guide/ui/pages/dataPage";
import InfoPage from "./guide/ui/pages/infoPage";
import StepPage from "./guide/ui/pages/stepPage";
import BoardPage from "./guide/ui/pages/boardPage";
import PostPage from "./guide/ui/pages/postPage";
import AccordionPage from "./guide/ui/pages/accordionPage";
import DropdownPage from "./guide/ui/pages/dropdownPage";
import TabPage from "./guide/ui/pages/tabPage";
import ModalPage from "./guide/ui/pages/modalPage";
import ToastPage from "./guide/ui/pages/toastPage";
import TooltipPage from "./guide/ui/pages/tooltipPage";
import PopoverPage from "./guide/ui/pages/popoverPage";

// User Layout
import UserLayoutSub from './components/layouts/userLayoutSub';
import UserLayoutMain from './components/layouts/userLayoutMain';

// User Pages
import Main from "./pages/main";
import Prototype from "./pages/prototype";
import NotFound from "./NotFound";

const Router = () => {
	return (
		<BrowserRouter basename="/react-ui-publising">
			<Routes>
				{/* Guide Pages */}
				<Route element={<IALayout />}>
					<Route path='guide/ia/guideList/' element={<GuideList />} />
					<Route path="/" element={<FrontList />} />
				</Route>
				<Route path='guide/ui/' element={<UILayout />}>
					<Route path="prototypePage" element={<PrototypePage />} />
					<Route path="buttonPage" element={<ButtonPage />} />
					<Route path="iconPage" element={<IconPage />} />
					<Route path="labelPage" element={<LabelPage />} />
					<Route path="thumbPage" element={<ThumbPage />} />
					<Route path="formInputPage" element={<FormInputPage />} />
					<Route path="formCheckboxPage" element={<FormCheckboxPage />} />
					<Route path="formControlsPage" element={<FormControlsPage />} />
					<Route path="formFieldsetPage" element={<FormFieldsetPage />} />
					<Route path="sectionPage" element={<SectionPage />} />
					<Route path="dataPage" element={<DataPage />} />
					<Route path="infoPage" element={<InfoPage />} />
					<Route path="stepPage" element={<StepPage />} />
					<Route path="boardPage" element={<BoardPage />} />
					<Route path="postPage" element={<PostPage />} />
					<Route path="accordionPage" element={<AccordionPage />} />
					<Route path="dropdownPage" element={<DropdownPage />} />
					<Route path="tabPage" element={<TabPage />} />
					<Route path="modalPage" element={<ModalPage />} />
					<Route path="toastPage" element={<ToastPage />} />
					<Route path="tooltipPage" element={<TooltipPage />} />
					<Route path="popoverPage" element={<PopoverPage />} />
				</Route>

				{/* Main Pages */}
				<Route path="pages/" element={<UserLayoutMain />}>
					<Route path="main" element={<Main />} />
				</Route>

				{/* Sub Pages */}
				<Route path="pages/" element={<UserLayoutSub />}>
					<Route path='prototype' element={<Prototype />} />
				</Route>

				{/* System Pages */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;