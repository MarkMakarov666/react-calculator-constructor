import styled from "styled-components";
import { ButtonWrapper } from "shared/components/button/styled";

export const FunctionalWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 0 8px;
	font-size: 1.4rem;
	line-height: 1.5rem;
	text-align: center;
	& > ${ButtonWrapper} {
		padding: 15px 0;
	}
`;
