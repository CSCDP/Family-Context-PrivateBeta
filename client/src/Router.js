import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SearchPage from "./components/search"
import PersonPage from "./components/person"

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={SearchPage} />
            <Route path={`/person/:personId`} component={PersonPage} />
        </Router>
    );
}

export default App;