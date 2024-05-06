import React, { useState } from "react";
import {Box, Button} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import Textarea from '@mui/joy/Textarea';
import { toaster } from './Toaster';

const Quote = (props) => {

    const {setFavList} = props;

    const [quote, setQuote] = useState(props.quote);
    const [author, setAuthor] = useState(props.author);

    const [favClass, setFavClass] = useState("fav_button");
    const [editMode, setEditMode] = useState(false);
    const [editClass, setEditClass] = useState("editable_area hidden");

    const handleFavList = () => {
        
        if(favClass.includes("fav_button_active")) {
            return;
        }

        setFavList(data => [...data, {
            quote,author
        }]);
        toaster('success', 'Quote marked as Favourite.', 3000);
        setFavClass("fav_button fav_button_active")
    }

    const handleEdit = (e) => {
        setEditMode(true);
        setEditClass("editable_area");
    }

    const handleChanges = (e) => {
        setQuote(e.currentTarget.value);
    }

    const handleAuthorChanges = (e) => {

        setAuthor(e.currentTarget.value);
    }

    const handleSave = (e) => {
        setEditMode(false);
        toaster('success', 'Quote Updated.', 3000);
        setEditClass("editable_area hidden");
    }

    return (
        <Box className="quote" sx={{ display: 'flex' }}>
            <Box className={editMode ? "hidden" : ""}>
                <div className="q_container">
                    <div className="q_quote">
                        {quote}
                    </div>
                    <div className="q-author">
                        <span>-&nbsp;&nbsp;</span>
                        <span>{author}</span>
                    </div>
                </div>
            </Box>
            <div className={editClass}>
                <label>
                    <span>Quote: </span>
                    <Textarea minRows={3} value={quote} onChange={handleChanges} className="edit_text_area"/>
                </label>
                <label className="author_label">
                    <span>Author: </span>
                    <Textarea maxRows={1} value={author} onChange={handleAuthorChanges} className="edit_text_area_author"/>
                </label>
                <Button onClick={handleSave} sx={{
                    margin: "10px",
                    float: "right",
                    border: "1px solid #1876d2"
                }}>Save</Button>
            </div>
            <div className="controllers">
                <Button onClick={handleFavList}><FavoriteIcon className={favClass} /></Button>
                <Button onClick={handleEdit}><EditIcon /></Button>
            </div>
        </Box>
    )
}

export default Quote;