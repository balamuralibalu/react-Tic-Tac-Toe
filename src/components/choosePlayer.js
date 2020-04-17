import React, { Component } from 'react';

class Player extends Component {

    handleForm(e) {
        e.preventDefault();
        this.props.player(e.target.player.value)
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleForm(e)}>
                <label className="x">
                    Player X
                <input type="radio" name="player" value="X" />
                </label>
                <label className="o">
                    Player O
                <input  type="radio" name="player" value="O" />
                </label>
                <input className="start" type="submit" value="Start" />
            </form>
        )
    }
}

export default Player;