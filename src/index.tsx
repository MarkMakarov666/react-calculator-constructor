import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "App";
import { store } from "redux/store";
import GlobalStyles from "global";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const rootNode = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

rootNode.render(
	<Provider store={store}>
		<DndProvider backend={HTML5Backend}>
			<GlobalStyles />
			<App />
		</DndProvider>
	</Provider>
);
