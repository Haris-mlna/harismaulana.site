import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import('./view/home/home'))

const App = () => {
	return (
		<React.Suspense>
			<Routes>
        <Route path="" element={<Home/>} index/>
      </Routes>
		</React.Suspense>
	);
};

export default App;
