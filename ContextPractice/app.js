import React from "react"

import Header from "./header"
import UserContext from "./usercontext"

class App extends React.Component {
    static contextType = UserContext

    render() {
        const username = this.context
        return (
            <div>
                <Header />
                <main>
                    <p className="main">No new notifications, {username}! </p>
                </main>
            </div>
        )
    }
}

export default App