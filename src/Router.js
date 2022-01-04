import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommonPage from "./CommonPage";

// 하늘's 컴포넌트
import LoginHaneul from "./pages/Haneul/Login/Login";
import ListHaneul from "./pages/Haneul/List/List";
import DetailHaneul from "./pages/Haneul/Detail/Detail";

// 희윤's 컴포넌트
import LoginHeeyun from "./pages/Heeyun/Login/Login";
import ListHeeyun from "./pages/Heeyun/List/List";
import DetailHeeyun from "./pages/Heeyun/Detail/Detail";

// 종민's 컴포넌트
import LoginJongmin from "./pages/Jongmin/Login/Login";
import ListJongmin from "./pages/Jongmin/List/List";
import DetailJongmin from "./pages/Jongmin/Detail/Detail";

// 민기's 컴포넌트
import LoginMingi from "./pages/Mingi/Login/Login";
import ListMingi from "./pages/Mingi/List/List";
import DetailMingi from "./pages/Mingi/Detail/Detail";

// 영욱's 컴포넌트
import LoginYounguk from "./pages/Younguk/Login/Login";
import ListYounguk from "./pages/Younguk/List/List";
import DetailYounguk from "./pages/Younguk/Detail/Detail";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<CommonPage />} />
				{/* 하늘 */}
				<Route path="/login-haneul" element={<LoginHaneul />} />
				<Route path="/list-haneul" element={<ListHaneul />} />
				<Route path="/detail-haneul" element={<DetailHaneul />} />
				{/* 희윤 */}
				<Route path="/login-heeyun" element={<LoginHeeyun />} />
				<Route path="/list-heeyun" element={<ListHeeyun />} />
				<Route path="/detail-heeyun" element={<DetailHeeyun />} />
				{/* 종민 */}
				<Route path="/login-jongmin" element={<LoginJongmin />} />
				<Route path="/list-jongmin" element={<ListJongmin />} />
				<Route path="/detail-jongmin" element={<DetailJongmin />} />
				{/* 민기 */}
				<Route path="/login-mingi" element={<LoginMingi />} />
				<Route path="/list-mingi" element={<ListMingi />} />
				<Route path="/detail-mingi" element={<DetailMingi />} />
				{/* 영욱 */}
				<Route path="/login-younguk" element={<LoginYounguk />} />
				<Route path="/list-younguk" element={<ListYounguk />} />
				<Route path="/detail-younguk" element={<DetailYounguk />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
