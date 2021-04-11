import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/FavoriteBorder';
import Ticker from 'react-ticker'


function VideoFooter() {
    return (
        <div className="videoFooter">
            <h2> I'm a Footer</h2>
            <div className="videoFooter__text">
            <h3>@Hello</h3>
            <p>This is a description</p>
            <MusicNoteIcon />
            <Ticker mode="smooth"> 
            {({ index}) => (
                <> 
                <h1> YOOO what's up guys </h1>
                </>
            )}
            </Ticker>
        </div>
            <img  className="videoFooter__record" 
            src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>
    )
}

export default VideoFooter
