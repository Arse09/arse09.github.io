import React, { ReactNode } from "react";

const RowsContext = React.createContext<number | undefined>(undefined);

type FlexCardsProps = {
	children: ReactNode;
	rows: number;
	className?: string;
};

type FlexCardProps = {
	children: ReactNode;
	isExtra?: boolean;
	className?: string;
};

type CustomFlexCardProps = {
	children: ReactNode;
	isExtra?: boolean;
	className?: string;
}

export const FlexCards: React.FC<FlexCardsProps> = ({ children, rows, className }) => {
	const totalCards = React.Children.count(children);
	const extraCards = totalCards % rows;
	
	return (
		<RowsContext.Provider value={rows}>
			<div className={`flex flex-row flex-wrap gap-5 ${className}`}>
				{React.Children.map(children, (child: ReactNode, index) =>
					React.isValidElement<FlexCardProps>(child)
						? React.cloneElement(child, {
							isExtra: index >= totalCards - extraCards,
						})
						: React.isValidElement<CustomFlexCardProps>(child)
							? child
							: child
				)}
			</div>
		</RowsContext.Provider>
	);
};

export const FlexCard: React.FC<FlexCardProps> = ({ children, className }) => {
	const rows = React.useContext(RowsContext) ?? 1;
	const baseWidth = `calc(${100 / rows}% - ${(20 * (rows - 1)) / rows}px)`;
	
	return (
		<div
			style={{
				width: baseWidth,
				maxWidth: baseWidth,
			}}
			className={`flex flex-col flex-shrink-0 flex-grow bg-white rounded-md p-5 drop-shadow-xs ${className}`}
		>
			{children}
		</div>
	);
};

export const CustomFlexCard: React.FC<CustomFlexCardProps> = ({ children, className }) => {
	const rows = React.useContext(RowsContext) ?? 1;
	const baseWidth = `calc(${100 / rows}% - ${(20 * (rows - 1)) / rows}px)`;
	
	return (
		<div
			style={{
				width: baseWidth,
			}}
			className={`flex flex-col flex-shrink-0 flex-grow bg-white rounded-md p-5 drop-shadow-xs ${className}`}
		>
			{children}
		</div>
	);
};