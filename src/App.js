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
                RouteConfigs.map((route, index) => (
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
