import React, { useState } from 'react';
import FavQuote from './FavQoute';
import Badge from '@mui/material/Badge';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

import "../Stylesheet/fav.css"
import { Button } from '@mui/base';

const FavContainer = (props) => {

    const {favList, setFavList} = props;
    const [toggleSlide, setToggleClass] = useState(false);
    const handleUnFavChange = (data) => {
        
        const quote = data.quote;
        const new_list = [];
        for(const [i,q] of favList.entries()) {

            if(q.quote == quote) {
                continue;
            }

            new_list.push(q)
        }

        setFavList(new_list);
    }

    const handleSlide = () => {
        setToggleClass(!toggleSlide);
    }

    return (
        <div className={toggleSlide ? "fav_container transit" : "fav_container"}>
            <Badge badgeContent={favList.length} color="primary" className='fav_button_container' >
                <Button onClick={handleSlide}><StarBorderPurple500Icon /></Button>
            </Badge>
            <div className='fav_list'>
                {favList.map(x => <FavQuote data={x} key={x.quote} handleUnFavChange={handleUnFavChange} />)}
            </div>
        </div>
    )
}

export default FavContainer;