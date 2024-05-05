// const { favList, setFavList } = props;
import * as React from 'react';
import FavQuote from './FavQoute';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

import "../Stylesheet/fav.css"

const FavContainer = (props) => {

    const {favList, setFavList} = props;
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
    return (
        <div className='fav_container'>
            <div className='header'>
                <StarBorderPurple500Icon />
                <span className='text'>Favrouite List</span>
            </div>
            <div className='fav_list'>
                {favList.map(x => <FavQuote data={x} key={x.quote} handleUnFavChange={handleUnFavChange} />)}
            </div>
        </div>
    )
}

export default FavContainer;