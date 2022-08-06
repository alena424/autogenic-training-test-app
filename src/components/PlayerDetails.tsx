import React from "react";
import { Training } from "../models/Training"

type PlayerDetailsProps = {
    training: Training
}

const PlayerDetails: React.FC<PlayerDetailsProps> = ({
    training
}) => {
    return (
        <div className="music-player--details">
            <div className="details-img">
                <img
                    className="details-img--image"
                    src={training.img_source}
                    alt={training.title}
                />
            </div>
            <div className="range"></div>
            <div className="artist-info">
                <h3 className="details-title">{training.title}</h3>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default PlayerDetails
