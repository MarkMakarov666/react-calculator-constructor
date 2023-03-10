import React, { useState } from "react";
import { ButtonWrapper } from "shared/components/button/styled";

interface IButtonProps {
	children?: string | React.ReactNode;
	onClick?: () => void;
}

export const Button = ({ children, onClick }: IButtonProps) => {
	const [isActive, setIsActive] = useState(false);
	const onHandleOnMouse = () => {
		setIsActive(!isActive);
	};
	const onHandleOnLeave = () => {
		setIsActive(false);
	};

	return (
		<ButtonWrapper
			onClick={onClick}
			onMouseDown={onHandleOnMouse}
			onMouseUp={onHandleOnMouse}
			onMouseLeave={onHandleOnLeave}
			isActive={isActive}
		>
			{children}
		</ButtonWrapper>
	);
};
