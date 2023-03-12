import styled, { css } from "styled-components";
import { Colors } from "constants/colors";

export const WidgetWrapper = styled.div<{
	isDragging: boolean;
	isActive?: boolean;
}>`
	background-color: ${Colors.baseColor};
	padding: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.1);
	${(props) => {
		return props.isDragging
			? css`
					opacity: 0.5;
			  `
			: css``;
	}}
	${(props) => {
		return props.isActive
			? css`
					opacity: 0.5;
			  `
			: css``;
	}}
`;
