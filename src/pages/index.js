import React from 'react';
import Header from '../components/Header';
import GameList from '../components/GameList';
import SectionMenu from "@/src/components/SectionMenu";
import styles from '../styles/Home.module.scss';

const Home = () => (
    <div className={styles.container}>
        <Header />
        <SectionMenu />
        <GameList />
    </div>
);

export default Home;
