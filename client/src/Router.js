import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import PersonPage from "./components/person"
import SearchPage from "./components/search"
import SearchResultsPage from "./components/searchResults"

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={SearchPage} />
            <Route path="/person/:personId" component={PersonPage} />
            <Route path="/search/person" component={SearchResultsPage} />
        </Router>
    );
}

export default App;