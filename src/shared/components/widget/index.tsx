import React from "react";
import { WidgetWrapper } from "shared/components/widget/styled";

export interface WidgetProps {
	children: React.ReactNode;
}

export const Widget = ({ children }: WidgetProps) => {
	return <WidgetWrapper>{children}</WidgetWrapper>;
};
