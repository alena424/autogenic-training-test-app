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
    // const [isPlaying, setIsPlaying] = React.useState(false)
    return (
        <div className="music-player">
            <button
                className="play-btn"
                onClick={() => setIsPlaying(!isPlaying)}
            >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
        </div>
    )
}

export default PlayerControl
