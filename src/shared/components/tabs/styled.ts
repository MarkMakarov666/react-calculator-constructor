import styled, { css } from "styled-components";
import { Colors } from "constants/colors";

export const TabsWrapper = styled.div`
	position: absolute;
	top: -50px;
	display: flex;
	width: 240px;
	background-color: ${Colors.tabBackground};
	border-radius: 6px;
`;

export const Tab = styled.div<{ isActive?: boolean }>`
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 8px 12px;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 1.5rem;
	user-select: none;
	color: ${Colors.tabBaseColor};
	${(props) =>
		props.isActive
			? css`
					border: 1px solid #e2e3e5;
					border-radius: 5px;
					background-color: ${Colors.baseColor};
					& > svg > path {
						stroke: ${Colors.secondaryColor};
					}
			  `
			: css`
					& > svg > path {
						stroke: ${Colors.tabBaseColor};
					}
			  `};
	}
`;
