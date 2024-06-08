import React from 'react';
import { useSelector } from 'react-redux';
import GameCard from './GameCard';
import styles from '../styles/GameList.module.scss';

const GameList = () => {

    const games = useSelector((state) => state.games.filteredGames);

    return (

        <div className={styles.gameList}>
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>

    );
};

export default GameList;
