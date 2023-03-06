import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "App";
import { store } from "redux/store";
import GlobalStyles from "global";

const rootNode = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

rootNode.render(
	<Provider store={store}>
		<GlobalStyles />
		<App />
	</Provider>
);
