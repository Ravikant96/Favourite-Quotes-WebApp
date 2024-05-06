import React, {useEffect} from "react";
import Quote from "./Quote";
import { Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../Stylesheet/quotes.css";

import { useSelector, useDispatch } from "react-redux";
import { fetchQoutes } from "../Actions/quotes";

const Quotes = (props) => {

    const { setFavList } = props;
    const { loading, data} = useSelector((state) => state.quotes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQoutes());
    }, [dispatch]);

    const showQuotes = () => {
        dispatch(fetchQoutes())
    }

    return (
        <div className="quotes">
            <div className="quote_icon top">
                <FormatQuoteIcon />
            </div>
            <div className="quote_container">
                { !loading ? <Quote quote={data[0].quote} author={data[0].author} setFavList={setFavList} /> : <CircularProgress className="loader" disableShrink />}
            </div>
            <div className="quote_icon bottom">
                <FormatQuoteIcon />
            </div>
            <div className="quote_button_continer">
                <Button className="quote_button" onClick={showQuotes}><ArrowBackIosNewIcon /></Button>
                <Button className="quote_button" onClick={showQuotes} ><ArrowForwardIosIcon /></Button>
            </div>
        </div>
    )
}

export default Quotes;