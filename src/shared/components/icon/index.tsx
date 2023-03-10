import React from "react";
import Eye from "public/assets/eye.svg";
import Selector from "public/assets/selector.svg";
import BorderLine from "public/assets/borderLine.svg";
import ImageIcon from "public/assets/image-icon.svg";

export enum IconName {
	eye = "eye",
	selector = "selector",
	borderLine = "borderLine",
	imageIcon = "imageIcon",
}

export interface IconProps {
	name: IconName;
}

export const Icon = ({ name }: IconProps) => {
	switch (name) {
		case IconName.eye:
			return <Eye />;
		case IconName.selector:
			return <Selector />;
		case IconName.borderLine:
			return <BorderLine />;
		case IconName.imageIcon:
			return <ImageIcon />;
	}
};
