import styled from "styled-components";
import { ButtonWrapper } from "shared/components/button/styled";
import { Colors } from "constants/colors";

export const ResultWrapper = styled.div`
	${ButtonWrapper} {
		width: 100%;
		background-color: ${Colors.secondaryColor};
		padding: 24px 0;
		color: ${Colors.baseColor};
	}
`;
