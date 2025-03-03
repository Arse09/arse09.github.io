import React from 'react'
import clsx from "clsx";
import { Link } from "react-router-dom";

type ButtonProps = {
	type?: "button" | "submit" | "reset" | "Link";
	className?: string;
	children: React.ReactNode
	linkTo?: string;
	[key: string]: any
}

const Button: React.FC<ButtonProps> = ({ type = "button", className, children, linkTo, ...props }) => {
	let completeClassName = clsx("button " +
		"px-6 py-3 rounded-md text-white font-semibold bg-gradient-to-b from-[#3B82F6] to-[#3B82F6] " +
		"cursor-pointer text-left " +
		"transition-colors duration-500 ease-in-out " +
		"focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] " +
		"hover:bg-gradient-to-b hover:from-[#3B82F6] hover:to-[#2563EB]",
		className
	)
	
	let linkToVerified: string = "";
	
	if (type === "Link") {
		if (!linkTo) {
			throw new Error("Link button must have a linkTo prop");
		} else {
			linkToVerified = linkTo
		}
	}
	
	if (type === "Link") {
		return (
			<Link
				to={ linkToVerified }
				className={completeClassName}
				{...props}
			>
				{children}
			</Link>
		)
	} else {
		return (
			<button
				className={completeClassName}
				type={type}
				{...props}
			>
				{children}
			</button>
		)
	}
}

export default Button
