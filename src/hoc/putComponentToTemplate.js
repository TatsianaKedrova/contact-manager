import React from "react";

export const putToTemplate = (WrappedComponent) => {

    return (props) => {
        return (
            <div>
                <header>Logo Login</header>
                <aside>SideBar</aside>
                <main><WrappedComponent {...props} /></main>
                <footer>Footer</footer>

            </div>
        )
    }
}

