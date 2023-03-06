import React from "react";
import { ButtonWrapper } from "shared/components/button/styled";

interface IButtonProps {
	children?: string | React.ReactNode;
	onClick?: () => void;
}

export const Button = ({ children, onClick }: IButtonProps) => {
	return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};
