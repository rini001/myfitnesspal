import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppsDetail } from "../Components/appPage/AppsDetail";
import { MarketPlace } from "../Components/appPage/MarketPlace";
export const RouteComponents = () => {
	return (
		<div>
			<Routes>
               
				<Route path="/" element={<MarketPlace />}></Route>
				<Route path="/userId" element={<AppsDetail />}></Route>

			</Routes>
		</div>
	);
};