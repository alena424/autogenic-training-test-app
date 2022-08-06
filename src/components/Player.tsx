import React, { useState, useRef, useEffect } from 'react'
import { Training } from "../models/Training"

import PlayerDetails from "./PlayerDetails"
import PlayerControls from "./PlayerControl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bulma-components";

type PlayerProps = {
    training: Training
    order: number
}

const Player: React.FC<PlayerProps> = ({
                                           training,
                                           order,
                                       }) => {
    const audioElement = React.useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [seekValue, setSeekValue] = React.useState(0);
    const onPlaying = () => {
        if (audioElement.current === null) {
            return
        }
        setCurrentTime(audioElement.current.currentTime);
        setSeekValue(
            (audioElement.current.currentTime / audioElement.current.duration) * 100
        );
    };

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
        <div className="music-player mainContainer">
            <audio
                src={training.source}
                ref={audioElement}
                onTimeUpdate={onPlaying}
            ></audio>
            <div className="artist-info">
                <h2 className="subtitle">{order}. trénink</h2>
                <h3 className="title is-4">{training.title}</h3>

                <Button mb="4" className="play-btn" onClick={() => setIsPlaying(!isPlaying)} rounded size="large">
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay}/>
                </Button>
                {`${Math.round(currentTime/60)}:${("0" + Math.round(currentTime%60)).slice(-2)}`}
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={seekValue}
                    onChange={(e) => {
                        if (audioElement.current === null) {
                            return
                        }
                        const seekto = audioElement.current.duration * (+e.target.value / 100);
                        audioElement.current.currentTime = seekto;
                        setSeekValue(Number(e.target.value));
                    }}
                    />
            </div>
        </div>
    )
}

export default Player
