import styled, { css } from "styled-components";
import { Colors } from "constants/colors";

export const ConstructorWrapper = styled.div<{
	isOver: boolean;
	haveComponents: boolean;
}>`
	position: relative;
	max-width: 240px;
	height: 100%;
	${(props) =>
		props.haveComponents
			? "border: none"
			: `border: ${Colors.dropBorder} 2px dashed;`}
`;

export const WrapperHover = styled.div<{ haveComponents: boolean }>`
	${(props) =>
		props.haveComponents
			? css`
					display: block;
					width: 100%;
					height: 1px;
					background-color: ${Colors.secondaryColor};
			  `
			: css`
					position: absolute;
					top: 0;
					left: 0;
					height: 100%;
					width: 100%;
					z-index: 1;
					opacity: 0.5;
					background-color: ${Colors.dropBackgroundHover};
			  `}
`;

export const IconWrapper = styled.div`
	position: relative;
	right: 5px;
`;

export const ConstructorDetails = styled.div`
	position: absolute;
	width: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
`;

export const ConstructorActionText = styled.p`
	color: ${Colors.secondaryColor};
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 1.7rem;
`;

export const TextDescription = styled.span`
	display: block;
	margin: 0 auto;
	width: 100px;
	color: ${Colors.dropDescription};
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.5rem;
`;
