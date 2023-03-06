import React from "react";
import { Widget } from "shared/components/widget";
import { FunctionalWrapper } from "shared/calculator/components/functional-widget/styled";
import { Button } from "shared/components/button";

export const FunctionalWidget = () => {
	return (
		<Widget>
			<FunctionalWrapper>
				<Button>/</Button>
				<Button>х</Button>
				<Button>-</Button>
				<Button>+</Button>
			</FunctionalWrapper>
		</Widget>
	);
};
