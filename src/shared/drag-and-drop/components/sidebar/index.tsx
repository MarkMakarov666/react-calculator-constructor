import { Wrapper } from "shared/drag-and-drop/components/sidebar/styled";
import React, { ReactElement } from "react";

export interface SidebarProps {
	children: ReactElement;
}

export const Sidebar = ({ children }: SidebarProps) => {
	return <Wrapper>{children}</Wrapper>;
};
