import React from 'react'
import { Player } from 'video-react'


function Videobanner(props) {
    return (
        <>
            <section className='video-section section-p-tb section-bt-t'>
                <div className='video-player m-auto'>
                    <div className='container'>
                        <div className='section-title text-center'>
                            <h2>{props.videoheading}</h2>
                            <p>{props.videodescription}</p>
                        </div>
                        <div className='row'>
                            <Player
                                playsInline
                                poster={props.videoimg}
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Videobanner