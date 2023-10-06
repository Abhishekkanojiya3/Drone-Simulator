import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/form";
import MapPage from "./components/MapPage";

const App = () => {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < Form / > }
        /> <
        Route path = "/MapPage"
        element = { < MapPage / > }
        /> < /
        Routes > <
        /Router>
    );
};

export default App;