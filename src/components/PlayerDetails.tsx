import React from "react";
import { Training } from "../models/Training"

type PlayerDetailsProps = {
    training: Training
    order: number
}

const PlayerDetails: React.FC<PlayerDetailsProps> = ({
    training,
    order,
}) => {
    return (
        <div className="music-player--details">
            {/*<div className="details-img">*/}
            {/*    <img*/}
            {/*        className="details-img--image"*/}
            {/*        src={training.img_source}*/}
            {/*        alt={training.title}*/}
            {/*    />*/}
            {/*</div>*/}
            <div className="artist-info">
                <h2 className="subtitle">{order}. trénink</h2>
                <h3 className="title is-4">{training.title}</h3>
            </div>
        </div>
    );
}

export default PlayerDetails
