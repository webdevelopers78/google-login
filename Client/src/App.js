import React from 'react';
import SignIn from "./components/SignIn";
import LoggedIn from './components/Loggedin';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Suspense } from "react";

function App() {
    return(
        <div>
            <HashRouter>
            <Switch>
                <Suspense fallback={null}>
                    {/* //Should be changed to /home */}
                <Route exact path ="/" component={SignIn} />
                <Route exact path ="/login" component={LoggedIn} />
                </Suspense>
            </Switch>
            </HashRouter>

        </div>
    );
}

export default App;