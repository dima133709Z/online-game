import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import GameList from '../components/GameList';
import styles from '../styles/Home.module.scss';

const Home = () => (
    <div className={styles.container}>
        <Header />
        <SearchBar />
        <GameList />
    </div>
);

export default Home;
