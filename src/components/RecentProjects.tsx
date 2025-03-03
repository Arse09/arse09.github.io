import React from "react";
import { FlexCards, FlexCard, CustomFlexCard } from "./utilities/FlexCards.tsx";
import Badge from "./utilities/Badge.tsx";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AboutMe: React.FC = () => (
	<>
		<div className={"divider h-[3px] bg-(--border-color) w-[calc(100%-200px)]"}/>
		<div id={"projects"} className={"projects w-full p-8 pb-10"}>
			<h2 className={"title mb-5"}>Recent Projects</h2>
			<FlexCards rows={2} className={"recent-projects-cards"}>
				<FlexCard className={"card"}>
					<h2 className="title">My personal website</h2>
					<p className="text">My personal and portfolio website built with React.js</p>
					<div className="badges">
						<Badge type={"react"} />
						<Badge type={"tailwind"} />
						<Badge type={"ts"} />
						<Badge color={"purple"} text={"Alpha | v1"} className={"right"} />
					</div>
				</FlexCard>
				<FlexCard className={"card"}>
					<h2 className="title">Task manager</h2>
					<p className="text">A collaborative task management application.</p>
					<div className="badges">
						<Badge type={"html"} />
						<Badge type={"css"} />
						<Badge type={"js"} />
						<Badge color={"yellow"} text={"Planning"} className={"right"} />
					</div>
				</FlexCard>
				<FlexCard className={"card"}>
					<h2 className="title">E-commerce platform</h2>
					<p className="text">A full-stack e-commerce solution built with React and Node.js</p>
					<div className="badges">
						<Badge type={"react"} />
						<Badge color={"green"} text={"Node.js"} />
						<Badge color={"red"} text={"Placeholder"} className={"right"}/>
					</div>
				</FlexCard>
				<CustomFlexCard className={"card"}>
					<h2 className="title">More projects</h2>
					<p className="text">For more projects, click the button below.</p>
					<div className={"flex mt-auto"}>
						<RouterLink to={"/projects"}
							className={`flex items-center justify-center relative w-32 h-5
							group`}
						>
							<p
								className={`absolute left-0 transition-left duration-300
								group-hover:left-3
								group-focus-visible:left-3`}
							>More projects</p>
							<FontAwesomeIcon
								icon={faArrowRight}
								className={`absolute right-0 transition-right duration-300
								group-hover:-right-3`}
							/>
						</RouterLink>
					</div>
				</CustomFlexCard>
			</FlexCards>
		</div>
	</>
)
export default AboutMe
