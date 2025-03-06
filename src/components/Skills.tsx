import React from "react";
import { FlexCard, FlexCards } from "./utilities/FlexCards.tsx";
import Badge from "./utilities/Badge.tsx";

const Skills: React.FC = () => (
	<>
		<div className={"divider h-[3px] bg-(--border-color) w-[calc(100%-200px)]"}/>
		<div id={"skills"} className={"about-me w-full p-8"}>
			<h2 className={"title mb-5"}>Skills</h2>
			<FlexCards rows={2} className={"skills-cards"}>
				<FlexCard className={"card"}>
					<h2 className="title">Frontend</h2>
					<div className="badges w-full">
						<Badge type={"html"} />
						<Badge type={"css"} />
						<Badge type={"js"} />
						<Badge type={"react"} />
						<Badge type={"next"} />
						<Badge type={"tailwind"} />
						<Badge color={"red"} text={"* Placeholders"} />
					</div>
				</FlexCard>
				<FlexCard className={"card"}>
					<h2 className="title">Backend</h2>
					<div className="badges w-full">
						<Badge type={"node"} />
						<Badge type={"express"} />
						<Badge type={"nest"} />
						<Badge type={"ts"} />
						<Badge type={"socket"} />
						<Badge type={"prisma"} />
						<Badge color={"red"} text={"* Placeholders"} />
					</div>
				</FlexCard>
				<FlexCard className={"card"}>
					<h2 className="title">Database</h2>
					<div className="badges w-full">
						<Badge type={"mongodb"} />
						<Badge type={"postgres"} />
						<Badge type={"mysql"} />
						<Badge type={"redis"} />
						<Badge type={"firebase"} />
						<Badge type={"aws"} />
						<Badge color={"red"} text={"* Placeholders"} />
					</div>
				</FlexCard>
				<FlexCard className={"card"}>
					<h2 className="title">Other</h2>
					<div className="badges w-full">
						<Badge color={"green"} text={"JWT"} />
						<Badge color={"violet"} text={"GraphQL"} />
						<Badge color={"sky"} text={"Docker"} />
						<Badge color={"red"} text={"Git"} />
						<Badge color={"red"} text={"* Placeholders"} />
					</div>
				</FlexCard>
			</FlexCards>
		</div>
	</>
)
export default Skills
