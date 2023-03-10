import React, { useState } from "react";
import { Tab, TabsWrapper } from "shared/components/tabs/styled";
import { Icon, IconName } from "shared/components/icon";

export interface TabsProps {
	children?: React.ReactNode;
	onClick?: (value: boolean) => void;
}

export const Tabs = ({ onClick }: TabsProps) => {
	const [isActive, setIsActive] = useState(false);
	const handleOnClick = () => {
		setIsActive(!isActive);
		if (onClick) onClick(isActive);
	};
	return (
		<TabsWrapper>
			<Tab onClick={handleOnClick} isActive={isActive}>
				<Icon name={IconName.eye} />
				Runtime
			</Tab>
			<Tab onClick={handleOnClick} isActive={!isActive}>
				<Icon name={IconName.selector} />
				Constructor
			</Tab>
		</TabsWrapper>
	);
};
