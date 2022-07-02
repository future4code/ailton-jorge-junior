import React from "react"
import styled from "styled-components"
import { getCharacterList } from '../services/requests'

const CharacterCard = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    &:hover {
        cursor: pointer;
        background-color: lightblue;
    }
`

export default class CharacterListPage extends React.Component {
    state = {
        charactersList: []
    }

    componentDidMount() {
        getCharacterList(this.saveCharacter)
    }

    saveCharacter = (data) => {
        this.setState({ charactersList: data })
    }

    render() {
        const characters = this.state.charactersList.map((person) => {
            return (
                <CharacterCard
                    key={person.url}
                    onClick={() => this.props.goToDetailPage(person.url)}
                >
                    {person.name}
                </CharacterCard>
            )
        })

        return <div>{characters}</div>
    }
}