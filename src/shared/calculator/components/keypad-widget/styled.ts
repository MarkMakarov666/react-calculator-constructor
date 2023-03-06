import styled from "styled-components";
import { ButtonWrapper } from "shared/components/button/styled";
export const KeypadWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, 1fr);
	gap: 8px;
	${ButtonWrapper} {
		padding: 15px 0;
	}
`;

export const ZeroButtonWrapper = styled.div`
	grid-column: 1 / 3;
	${ButtonWrapper} {
		width: 100%;
	}
`;
