import React from 'react';
import styles from '../styles/GameCard.module.scss';

const GameCard = ({ game }) => (

    <div className={styles.gameCard}>

        <img className={styles.image} src={game.image} alt={game.title} />
        <h3 className={styles.title}>{game.title}</h3>
        <p className={styles.description}>{game.description}</p>

    </div>

);

export default GameCard;
