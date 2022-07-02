import React from "react";
import RootNavigation from "./RootNavigation";

import "./ignoreWarnings";

import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./context/store";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <RootNavigation/>
            </PersistGate>
        </Provider>
    );
}
export default App
