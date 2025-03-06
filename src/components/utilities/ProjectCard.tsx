import React from 'react'
import Badge, { colorsType } from "./Badge.tsx";

type ProjectCardProps = {
	title : string,
	description : string,
	badges : {
		text: string;
		color: keyof colorsType;
	}[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, badges}) => {
	return (
		<div className={"project-card " +
			"child flex-shrink-1 flex-grow-1 w-[400px] bg-white rounded-md p-5 drop-shadow-xs "}>
			<h2 className={"title mb-2 text-xl font-semibold" +
				""}>{title}</h2>
			<p className={"text mb-5"}>{description}</p>
			<div className={"badges flex flex-wrap gap-2"}>
				{badges.map((badge, index) => (
					<Badge key={index} color={badge.color} text={badge.text}/>
				))}
			</div>
		</div>
	)
}
export default ProjectCard
