import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar.tsx";
import AboutMe from "../components/AboutMe.tsx";
import RecentProjects from "../components/RecentProjects.tsx";
import Skills from "../components/Skills.tsx";
import CV from "../components/CV.tsx";

type MainProps = {
	children: ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => (
	<main className="main pl-[270px] flex flex-col items-center w-screen min-h-screen">
		{children}
	</main>
)

const LandingPage: React.FC = () => {
	return (
		<>
			<Sidebar />
			<Main>
				<AboutMe />
				<RecentProjects />
				<Skills />
				<CV disabled/>
			</Main>
		</>
	)
}
export default LandingPage