import React from 'react'
import Artist from './Artist'
import Track from './Track'

const Card = ({ artist, tracks, index }) => {
    return (
        <div className='Card'>
            <Artist artist={artist} index={index} />
            <Track tracks={tracks} />
        </div>
    )
}

export default Card