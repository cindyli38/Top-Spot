import React from 'react'

const Track = ({ tracks }) => {
    return (
        <div className='Track'>
            {tracks.map((track, index) => { return <div key={track["name"]}> {index + 1}) {track["name"]}</div> })}

        </div>
    )
}

export default Track