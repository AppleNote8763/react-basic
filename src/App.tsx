import React from "react";
import Component, {ClassComponent, FunctionComponent as F,
} from "./component/Component";
import "./App.css";
import CurlyBraces from "./component/CurlyBraces";
import Properties from "./component_manage/Properties";

function App() {
    return (
        <>
            {/* <Component /> */}
            {/* <ClassComponent /> */}
            {/* <F /> */}
            {/* <CurlyBraces /> */}
            <Properties />
        </>
    );
}

export default App;
