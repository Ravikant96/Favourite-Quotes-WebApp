import React, {useState} from "react";
import Quotes from "./Quotes";
import FavContainer from "./Fav";
import "../Stylesheet/dashboard.css"

const Dashboard = () => {

    const [favList, setFavList] = useState([]);

    return (
        <div className="dashboard"> 
            <Quotes setFavList={setFavList} />
            <FavContainer favList={favList} setFavList={setFavList} />
        </div>
    )
}

export default Dashboard;