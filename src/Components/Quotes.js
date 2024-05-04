import React, {useState, useEffect} from "react";
import Quote from "./Quote";
import { Button } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../Stylesheet/quotes.css";

import { useSelector, useDispatch } from "react-redux";
import { fetchQoutes } from "../Actions/quotes";

const Quotes = () => {

    const { loading, data} = useSelector((state) => state.quotes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQoutes())
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
                <Quote data={{...data[0]}}  />
            </div>
            <div className="quote_icon bottom">
                <FormatQuoteIcon />
            </div>
            <Button className="quote_button" onClick={() => showQuotes(-1)}><ArrowBackIosNewIcon /></Button>
            <Button className="quote_button" onClick={() => showQuotes(1)} ><ArrowForwardIosIcon /></Button>
        </div>
    )
}

export default Quotes;