import React from "react";
import "./App.css";
import Component, {ClassComponent, FunctionComponent as F,
} from "./component/Component";
import CurlyBraces from "./component/CurlyBraces";
import Properties from "./component_manage/Properties";
import Gallery from "./component_manage/example/Example1";
import ConditionalRender from "./component_manage/ConditionalRender";
import Example2 from "./component_manage/example/Example2";
import Example2prototype from "./component_manage/example/Example2prototype";
import ListRender from "./component_manage/ListRender";
import EventComponent from "./interaction/EventComponent";
import StateComponent from "./interaction/StateComponent";
import ForwordingStateComponent from "./interaction/ForwordingStateComponent";
import HookComponent1 from "./hook/HookComponent1";
import HookComponent2 from "./hook/HookComponent2";
import CustomHook from "./hook/CustomHook";

function App() {
    return (
        <>
            {/* <Component /> */}
            {/* <ClassComponent /> */}
            {/* <F /> */}
            {/* <CurlyBraces /> */}
            {/* <Properties /> */}
            {/* <Gallery /> */}
            {/* <ConditionalRender /> */}
            {/* <Gallery /> */}
            {/* <Example2 /> */}
            {/* <Example2prototype /> */}
            {/* <ListRender /> */}
            {/* <EventComponent /> */}
            {/* <StateComponent /> */}
            {/* <ForwordingStateComponent /> */}
            {/* <HookComponent1 /> */}
            {/* <HookComponent2 /> */}
            <CustomHook />
        </>
    );
}

export default App;
