import styled from "styled-components";
import { Colors } from "constants/colors";

export const ButtonWrapper = styled.button`
	background: ${Colors.baseColor};
	color: ${Colors.textColor};
	border: 1px solid ${Colors.border};
	border-radius: 6px;
	cursor: pointer;
	font-style: normal;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 1.5rem;
`;
