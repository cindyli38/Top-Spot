import React from 'react'

const Artist = ({ artist, index }) => {
    return (
        <div className='Artist'>
            {index + 1} ) {artist["name"]}
            <img className="images" src={artist["images"][0]["url"]} alt="" />
        </div>
    )
}

export default Artist