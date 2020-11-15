import React from 'react';

import videoogv from '../video/Love-Coding.ogv';
import videomp4 from '../video/Love-Coding.mp4';
import videowebm from '../video/Love-Coding.webm';

export default function Videoblock() {
    return (
        <>
            <video width="100%" height="425px" controls="controls" loop >
                <source src={videoogv} type='video/ogg; codecs="theora, vorbis"' />
                <source src={videomp4} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                <source src={videowebm} type='video/webm; codecs="vp8, vorbis"' />
            </video>
        </>
    );
}