import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faForward,
    faBackward,
} from "@fortawesome/free-solid-svg-icons";

type PlayerControlProps = {
    isPlaying: boolean
    setIsPlaying: (v: boolean) => void
}

const PlayerControl: React.FC<PlayerControlProps> = ({
    isPlaying,
    setIsPlaying,
}) => {
    return (
        <div className="music-player">
            <div className="play-btn">
                <a
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </a>
            </div>
        </div>
    )
}

export default PlayerControl
