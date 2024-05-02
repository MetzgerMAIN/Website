import './assets/css/App.css';

import {Route, Routes} from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import {RouteConfigs} from './routes';
import {ToastContainer} from "react-toastify";
import React from "react";

const App = () => {
    console.log("Rendering Component App")

    return (
        <>
            <div className="App">
                <Routes>
                    <Route element={<PageLayout/>} path={"/"}>
                        {MappedRoutes()}
                        <Route element={<span>Nothing here</span>} path={"*"}/>
                    </Route>
                </Routes>
            </div>
            <ToastContainer />
        </>
    );
}

const MappedRoutes = () => {
    return (
        <>
            {
                RouteConfigs.map((route :{...}, index: number) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))
            }
        </>
    );
}

export default App;
