import {faUser, faFile, faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faCode, faLaptopCode, faShareNodes} from "@fortawesome/free-solid-svg-icons";

import Profile from "./sidebar/Profile.tsx";
import { Navbar, NavItem } from "./sidebar/Navbar.tsx";
import Footer from "./sidebar/Footer.tsx";


const Sidebar = () => (
	<aside className={ "sidebar " +
			"flex flex-col " +
		"fixed top-0 left-0 bottom-0 w-[270px] border-r-3 overflow-scroll " +
		"border-solid border-(--border-color) bg-white h-screen"
	}>
		{/* TODO: change avatar */}
		<Profile
			avatar={"https://picsum.photos/114"}
			name={"Arsenii Nepeyvoda"}
			profession={"Full Stack Developer"}
			badges={[
				{text: "Apprentice Level", color: "red"},
				{text: "Alpha | v" + import.meta.env.VITE_APP_VERSION, color: "purple"},
			]}
		/>
		<Navbar>
			<NavItem icon={faUser} text={"About Me"} to={"about-me"} />
			<NavItem icon={faCode} text={"Projects"} to={"projects"} />
			<NavItem icon={faLaptopCode} text={"Skills"} to={"skills"} />
			<NavItem icon={faFile} text={"CV"} to={"#v"} />
			<NavItem icon={faShareNodes} text={"Social Media"} to={"social-media"} />
			<NavItem icon={faEnvelope} text={"Contact"} to={"contact"} />
		</Navbar>
		<Footer name={"Arsenii Nepeyvoda"} />
	</aside>
)
export default Sidebar