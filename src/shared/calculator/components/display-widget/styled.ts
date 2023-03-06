import styled from "styled-components";
import { Colors } from "constants/colors";

export const DisplayWrapper = styled.div`
	padding: 0 4px;
	background-color: ${Colors.displayInnerWrapper};
	color: ${Colors.displayText};
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	border-radius: 6px;
`;

export const Result = styled.span`
	display: block;
	padding: 0 4px;
	font-weight: 800;
	font-size: 3.6rem;
	line-height: 4.4rem;
`;
