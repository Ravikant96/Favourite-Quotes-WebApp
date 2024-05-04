import React from "react";
import Quotes from "./Quotes";
import FavContainer from "./Fav";
import "../Stylesheet/dashboard.css"

const Dashboard = () => {

    return (
        <div className="dashboard"> 
            <Quotes />
            <FavContainer />
        </div>
    )
}

export default Dashboard;