import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link as ScrollLink } from "react-scroll";

type NavbarProps = {
	children: ReactNode;
};

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
	return (
		<nav className={"navbar mt-[10px]"}>
			<ul className={"nav-list flex flex-col"}>
				{children}
			</ul>
		</nav>
	);
};

type NavItemProps = {
	icon: IconProp;
	text: ReactNode;
	to: string;
};

export const NavItem: React.FC<NavItemProps> = ({ icon, text, to }) => {
	return (
		<li className={
			"nav-item block w-full relative " +
			"after:content-[''] after:absolute after:h-[2px] after:w-full after:bg-[#2563EB] " +
			"after:bottom-0 after:left-0 after:scale-x-0 after:origin-left " +
			"after:transition-transform after:duration-300 " +
			"hover:after:scale-x-100 " +
			"group"
		}>
			<ScrollLink
				to={to}
				smooth
				duration={300}
				spy
				hashSpy
				offset={-35}
				activeClass="bg-[#F3F4F6]"
				isDynamic
				ignoreCancelEvents
				className={
					"nav-link flex flex-row items-center text-(--navbar-text) w-full px-[20px] py-[10px] " +
					"hover:bg-[#F3F4F6] duration-300 cursor-pointer"
				}>
				<FontAwesomeIcon icon={icon} className={"nav-item-icon w-[24px] h-[24px] text-(--navbar-text) font-bold"} />
				<p className={"nav-item-text ml-[10px] text-[16px] font-medium"}>{text}</p>
			</ScrollLink>
		</li>
	);
};

