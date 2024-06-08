import React from 'react';
import { useSelector } from 'react-redux';
import GameCard from './GameCard';
import styles from '../styles/GameList.module.scss';

const GameList = () => {
    const filteredGames = useSelector((state) => state.games.filteredGames);

    return (
        <div className={styles.gameList}>
            {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    );
};

export default GameList;
