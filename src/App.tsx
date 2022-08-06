import React from 'react';
import { Block, Card, Columns, Container, Footer, Menu } from "react-bulma-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons"

import './App.css';
import Player from "./components/Player"
import { data } from "./models/constants"

const App = () => {
    const [training, setTraining] = React.useState(-1);
    console.log("training", training)

    const thanksCard = (
        <Card className="card">
            <Card.Content>
                Velmi Vám děkujeme za otestování různých konfigurací autogenního tréninku. Nejdůležitější je pro
                nás
                zpětná vazba po každém tréninku. Prosím, buďte uřímní a odpovídejte po pravdě.
                <br/>
                Dekujeme
            </Card.Content>
        </Card>
    )
    const nav = (
        <nav>
            <Container>
                {training >= 0 && <a><FontAwesomeIcon
                    icon={faLongArrowAltLeft}
                    className="back"
                    onClick={() => {
                        setTraining(-1)
                    }}/></a>
                }
                <span>Testovací aplikace - autogenní trénink</span>
            </Container>
        </nav>
    )
    return (
        <div className="App">
            {nav}
            {training >= 0
                ? <Player training={data[training]} order={training + 1}/>
                : (
                    <Container className="mainContainer">
                        {thanksCard}
                        <Menu className="menu">
                            {data.map((training, key) => {
                                return <Menu.List key={key}>
                                    <a onClick={() => {
                                        setTraining(key)
                                    }}>
                                        <Columns multiline={false} breakpoint="mobile">
                                            <Columns.Column>
                                                {`${key + 1}. trénink`}
                                            </Columns.Column>
                                            <Columns.Column>
                                                {training.isAccomplished
                                                    ? <Block textColor="success">OK</Block>
                                                    : <Block textColor="danger">čeká se</Block>
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
            <Footer>
                <Container>
                    V případě jakéhokoli dotazu, pište prosím na: <a href="mailto:xtesar36@vutbr.cz">xtesar36@vutbr.cz</a>
                </Container>
            </Footer>
        </div>
    );
}

export default App;
