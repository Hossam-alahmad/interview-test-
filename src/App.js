import { useState } from "react";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import TabMenu from "./TabMenu";
function App() {
    const [tab, setTab] = useState(0);

    // we make custom dropdown using react and tailwind css for custom style
    return (
        <div className="app absolute w-10/12 lg:w-6/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 shadow-lg rounded-lg">
            <TabMenu tab={tab} setTab={setTab} />
            {tab === 0 && <Test1 />}
            {tab === 1 && <Test2 />}
        </div>
    );
}

export default App;
