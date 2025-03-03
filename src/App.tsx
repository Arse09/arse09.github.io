import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx'
import Projects from './pages/Projects.tsx'

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</Router>
	);
};

export default App;
