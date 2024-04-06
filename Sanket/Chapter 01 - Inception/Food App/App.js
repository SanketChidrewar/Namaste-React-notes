import React from "react";
import ReactDOM from "react-dom"

const AppLayout = () => {
    return (<>
            <Header/>
            </>);
}

const Header = () => {
    return (<div>
        <span>
            <image src="FoodAppLogo.svg"></image>
        </span>
        <span className="nav-item">
            <span>Home</span>
            <span>About</span>
            <span>Login/Logout</span>
        </span>
    </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);