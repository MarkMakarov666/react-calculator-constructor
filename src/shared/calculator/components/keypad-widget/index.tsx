import React from "react";
import { Widget } from "shared/components/widget";
import {
	KeypadWrapper,
	ZeroButtonWrapper,
} from "shared/calculator/components/keypad-widget/styled";
import { Button } from "shared/components/button";

export const KeypadWidget = () => {
	return (
		<Widget>
			<KeypadWrapper>
				<Button>7</Button>
				<Button>8</Button>
				<Button>9</Button>
				<Button>4</Button>
				<Button>5</Button>
				<Button>6</Button>
				<Button>1</Button>
				<Button>2</Button>
				<Button>3</Button>
				<ZeroButtonWrapper>
					<Button>0</Button>
				</ZeroButtonWrapper>
				<Button>,</Button>
			</KeypadWrapper>
		</Widget>
	);
};
