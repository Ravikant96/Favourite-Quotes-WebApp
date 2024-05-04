import React from "react";
import {Box, Button, Fade} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';

const Quote = (props) => {

    const {quote, author} = props.data;

    return (
        <Box className="quote" sx={{ display: 'flex' }}>
            <Fade in={true} timeout={3000}>
                <div className="q_container">
                    <div className="q_quote">
                        {quote}
                    </div>
                    <div className="q-author">
                        <span>-&nbsp;&nbsp;</span>
                        <span>{author}</span>
                    </div>
                </div>
            </Fade>
            <div className="controllers">
                <Button><FavoriteIcon /></Button>
                <Button><EditIcon /></Button>
            </div>
        </Box>
    )
}

export default Quote;