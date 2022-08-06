import React from 'react';
import { Card, Columns, Container, Menu } from "react-bulma-components"
import './App.css';
import Player from "./components/Player"
import { Training } from "./models/Training"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBackspace,
    faBackward, faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";

const data: Training[] = [
    {
        source: "./trainings/princess.mp3",
        img_source: "./img/mountains.jpeg",
        title: "Fairy tail",
        isAccomplished: true,
    },
]

const App = () => {
    const [training, setTraining] = React.useState(-1);
    console.log("training", training)

    const thanksCard = (
        <Card className="card">
            <Card.Content>
                Velmi Vám děkujeme za otestování různých konfigurací autogenního tréninku. Nejdůležitější je pro
                nás
                zpětná vazba po každém tréninku. Prosím, buďte uřímní a odpovídejte po pravdě.
                <br />
                Dekujeme
            </Card.Content>
        </Card>
    )
    const nav = (
        <nav>
            <Container>
                {training >= 0 && <FontAwesomeIcon
                    icon={faLongArrowAltLeft}
                    className="back"
                    onClick={() => {
                        setTraining(-1)
                    }} />
                }
                <span>Testovací aplikace - autogenní trénink</span>
            </Container>
        </nav>
    )
    return (
        <div className="App">
            {nav}
            {training >= 0
                ? <Player training={data[training]} />
                : (
                    <Container className="mainContainer">
                        {thanksCard}
                        <Menu className="menu">
                            {data.map((training, key) => {
                                return <Menu.List key={key}>
                                    <a onClick={() => {
                                        setTraining(key)
                                    }}>
                                        <Columns multiline={false}>
                                            <Columns.Column size="three-fifths">
                                                {`${key + 1}. trénink`}
                                            </Columns.Column>
                                            <Columns.Column>
                                                {training.isAccomplished
                                                    ? "splněno"
                                                    : "nesplněno"
                                                }
                                            </Columns.Column>
                                        </Columns>
                                    </a>
                                </Menu.List>
                            })}
                        </Menu>
                    </Container>
                )
            }
        </div>
    );
}

export default App;
