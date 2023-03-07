import React from "react";
import { Wrapper } from "shared/layout/styled";
export interface LayoutProps {
	children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
	return <Wrapper>{children}</Wrapper>;
};
