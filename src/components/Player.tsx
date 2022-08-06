import React, { useState, useRef, useEffect } from 'react'
import { Training } from "../models/Training"

import PlayerDetails from "./PlayerDetails"
import PlayerControls from "./PlayerControl"

type PlayerProps = {
    training: Training
}

const Player: React.FC<PlayerProps> = ({
    training
}) => {
    const audioElement = React.useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    useEffect(() => {
        if (audioElement && audioElement.current !== null) {
            if (isPlaying) {
                audioElement.current.play();
            } else {
                audioElement.current.pause();
            }
        }
    });

    return (
        <div className="music-player">
            <audio
                src={training.source}
                ref={audioElement}
            ></audio>
            <PlayerDetails training={training} />
            <PlayerControls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
            <div className="player__footer">
                <ul className="list list--footer">
                    <li>
                        <a href="#" className="list__link">
                            <i className="fa fa-heart-o"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="list__link">
                            <i className="fa fa-random"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="list__link">
                            <i className="fa fa-undo"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="list__link">
                            <i className="fa fa-ellipsis-h"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Player
