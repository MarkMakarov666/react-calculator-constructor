import styled, { css } from "styled-components";
import { Colors } from "constants/colors";

export const ButtonWrapper = styled.button<{ isActive?: boolean }>`
	background: ${Colors.baseColor};
	color: ${Colors.textColor};
	border: 1px solid ${Colors.border};
	border-radius: 6px;
	cursor: pointer;
	font-style: normal;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 1.5rem;

	&:hover {
		border: 1px solid ${Colors.secondaryColor};
	}
	${(props) =>
		props.isActive
			? css`
					background: ${Colors.secondaryColor};
					color: ${Colors.baseColor};
			  `
			: null}
`;
