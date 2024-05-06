import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from "@mui/material";

const FavQuote =  (props) => {

    const {data, handleUnFavChange} = props;

    return (
        <div className="fav_qoute">
            <div className="f_qoute_c">
                <span className="f_qoute">
                    {data.quote}
                </span>
                <span className="f_author">
                    -&nbsp;&nbsp;{data.author}
                </span> 
            </div>
            <div className="control_button">
                <Button onClick={() => handleUnFavChange(data)}>
                    <FavoriteIcon />
                </Button>
            </div>
        </div>
    )
}

export default FavQuote;