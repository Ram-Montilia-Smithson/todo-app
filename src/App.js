import React, { useState } from 'react'
import TodoApp from "./components/todoApp"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignInPage from "./components/sign-inPage"

export default function App() {

    const [userName, setUserName] = useState(null)

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/app"><TodoApp userName={userName} /></Route>
                    <Route exact path="/"><SignInPage setUserName={setUserName}/></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
