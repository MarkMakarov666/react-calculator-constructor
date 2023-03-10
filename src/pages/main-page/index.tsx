import React from "react";
import { Calculator } from "shared/calculator";
import { Layout } from "shared/layout";
import { PageWrapper } from "pages/main-page/styled";
import { Constructor } from "shared/constructor";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { Tabs } from "shared/components/tabs";
import { toggleEnable } from "shared/constructor/redux/constructor.slice";

export const MainPage = () => {
	const { components, isEnable } = useAppSelector((state) => state.dragAndDrop);
	const dispath = useAppDispatch();
	const tabsOnClick = (value: boolean) => {
		dispath(toggleEnable(value));
	};
	return (
		<PageWrapper>
			<Layout>
				<Calculator isEditMode={isEnable} />
				<div style={{ position: "relative" }}>
					<Tabs onClick={tabsOnClick} />
					<Constructor isEditMode={isEnable}>
						<Calculator components={components} isEditMode={isEnable} />
					</Constructor>
				</div>
			</Layout>
		</PageWrapper>
	);
};
