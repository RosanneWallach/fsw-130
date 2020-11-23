import React from "react"
import ReactDOM from "react-dom"

import App from "./app"
import UserContext from "./usercontext"

ReactDOM.render(
    <UserContext.Provider value={"Rosie"}>
        <App />
    </UserContext.Provider>,
    document.getElementById("root")
    
)