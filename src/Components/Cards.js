import React from 'react'
import Artist from './Artist'
import Card from './Card'

const Cards = ({ Artists, artistTrackMap }) => {
    return (
        <div className="Cards">
            {Artists.map((artist, index) => { return <Card artist={artist} tracks={artistTrackMap[artist["name"]].slice(0, 3)} index={index} key={index} /> })}

        </div>
    )
}

export default Cards