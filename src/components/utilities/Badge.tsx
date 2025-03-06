import React, { ReactNode, HTMLAttributes } from 'react'
import clsx from "clsx";

export type colorsType = typeof colors;
export type typesType = typeof types;

const colors = {
	blue: 'bg-blue-100 text-blue-700 ring-blue-700/10',
	green: 'bg-green-100 text-green-700 ring-green-600/20',
	gray: 'bg-gray-100 text-gray-800 ring-gray-500/10',
	indigo: 'bg-indigo-100 text-indigo-700 ring-indigo-700/10',
	orange: 'bg-orange-100 text-orange-700 ring-orange-700/10',
	purple: 'bg-purple-100 text-purple-700 ring-purple-700/10',
	red: 'bg-red-100 text-red-700 ring-red-600/10',
	yellow: 'bg-yellow-100 text-yellow-800 ring-yellow-600/20',
	violet: 'bg-violet-100 text-violet-700 ring-violet-600/20',
	sky: 'bg-sky-100 text-sky-800 ring-sky-600/20'
};

const types = {
	html: { classNames: 'bg-orange-100 text-orange-700 ring-orange-700/10', text: 'HTML5' },
	css: { classNames: 'bg-purple-100 text-purple-700 ring-purple-700/10', text: 'CSS3' },
	js: { classNames: 'bg-yellow-100 text-yellow-800 ring-yellow-700/10', text: 'JavaScript' },
	react: { classNames: 'bg-blue-100 text-blue-700 ring-blue-700/10', text: 'React' },
	next: { classNames: 'bg-gray-100 text-gray-800 ring-gray-800/10', text: 'Next.js' },
	tailwind: { classNames: 'bg-purple-100 text-purple-700 ring-purple-700/10', text: 'Tailwind'},
	
	node: { classNames: 'bg-green-100 text-green-700 ring-green-700/10', text: 'Node.js'},
	express: { classNames: 'bg-blue-100 text-blue-700 ring-blue-700/10', text: 'Express'},
	nest: { classNames: 'bg-red-100 text-red-700 ring-red-700/10', text: 'NestJS'},
	ts: { classNames: 'bg-blue-100 text-blue-700 ring-blue-700/10', text: 'TypeScript'},
	socket: { classNames: 'bg-stone-100 text-stone-800 ring-stone-800/10', text: 'Socket.IO'},
	prisma: { classNames: 'bg-sky-100 text-sky-700 ring-sky-700/10', text: 'Prisma'},
	
	mongodb: { classNames: 'bg-green-100 text-green-700 ring-green-700/10', text: 'MongoDB'},
	postgres: { classNames: 'bg-blue-100 text-blue-700 ring-blue-700/10', text: 'PostgreSQL'},
	mysql: { classNames: 'bg-sky-100 text-sky-800 ring-sky-700/10', text: 'MySQL'},
	redis: { classNames: 'bg-orange-100 text-orange-700 ring-orange-700/10', text: 'Redis'},
	firebase: { classNames: 'bg-orange-100 text-orange-700 ring-orange-700/10', text: 'Firebase'},
	aws: { classNames: 'bg-blue-100 text-blue-700 ring-blue-700/10', text: 'AWS'},
}

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
	type?: keyof typesType;
	text?: string;
	color?: keyof colorsType;
	children?: ReactNode;
};

const Badge: React.FC<BadgeProps> = ({ type, text, color, children, className, ...props }) => {
	
	if (type && !(type in types)) {
		throw new TypeError(`Invalid type: ${type}. Must be one of ${Object.keys(types).join(', ')}`);
	}
	
	if (color && !(color in colors)) {
		color = 'gray';
	}
	
	const classNames = type ? types[type].classNames : colors[color ?? 'gray'];
	const badgeText = type ? types[type].text : text;
	
	return (
		<span {...props} className={clsx(
			'badge inline-flex items-center rounded-full px-3 py-1 text-xs text-[0.825rem] ' +
			'font-medium select-none ring-0 ring-inset whitespace-nowrap',
			classNames,
			className
		)}>
			{badgeText ?? children ?? ''}
		</span>
	);
};

export default Badge;